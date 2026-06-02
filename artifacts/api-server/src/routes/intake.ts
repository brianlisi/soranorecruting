import { Router, type IRouter } from "express";
import { db, intakeSubmissionsTable } from "@workspace/db";
import { CreateIntakeSubmissionBody } from "@workspace/api-zod";

const router: IRouter = Router();

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
