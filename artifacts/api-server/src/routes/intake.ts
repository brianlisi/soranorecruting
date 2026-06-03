import { Router, type IRouter } from "express";
import { desc } from "drizzle-orm";
import { db, intakeSubmissionsTable } from "@workspace/db";
import { CreateIntakeSubmissionBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/intake/submissions", async (req, res) => {
  const adminKey = process.env.SORANO_ADMIN_KEY;
  if (!adminKey) {
    req.log.error("SORANO_ADMIN_KEY is not configured");
    res.status(500).json({ error: "Admin access is not configured" });
    return;
  }

  const header = req.get("authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  if (token !== adminKey) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const submissions = await db
      .select()
      .from(intakeSubmissionsTable)
      .orderBy(desc(intakeSubmissionsTable.createdAt));
    res.status(200).json(submissions);
  } catch (err) {
    req.log.error({ err }, "Failed to list intake submissions");
    res.status(500).json({ error: "Failed to list intake submissions" });
  }
});

router.post("/intake", async (req, res) => {
  const parsed = CreateIntakeSubmissionBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  try {
    const [submission] = await db
      .insert(intakeSubmissionsTable)
      .values(parsed.data)
      .returning();
    res.status(201).json(submission);
  } catch (err) {
    req.log.error({ err }, "Failed to store intake submission");
    res.status(500).json({ error: "Failed to store intake submission" });
  }
});

export default router;
