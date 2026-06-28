import { useEffect } from "react";
import {
  Wrench,
  PhoneCall,
  BellRing,
  FileText,
  Banknote,
  Calculator,
  Building2,
  Bot,
  Check,
} from "lucide-react";

const EMAIL = "mailto:hello@soranoai.ai";
const CALENDLY = "https://calendly.com/sorano-ai/pm-audit"; // TODO: real Calendly link

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(15,15,15,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(11,24,40,0.08)",
        padding: "0 2.5rem",
        height: "76px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
        <img
          src={`${import.meta.env.BASE_URL}sorano-logo-clear.png`}
          alt="Sorano AI"
          style={{ height: "72px", display: "block" }}
        />
      </a>
      <a href="#book" className="btn-primary">
        Book your audit
      </a>
    </nav>
  );
}

const wrap: React.CSSProperties = { maxWidth: "1120px", margin: "0 auto", padding: "0 2.5rem" };

function ClientTicker() {
  const items = [
    "AppFolio",
    "Buildium",
    "DoorLoop",
    "Propertyware",
    "Rentvine",
    "Rent Manager",
    "Maintenance dispatch",
    "Owner reporting",
    "Delinquency follow-up",
    "Tenant comms",
    "Trust reconciliation",
    "Owner onboarding",
  ];
  const row = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid rgba(11,24,40,0.08)", borderBottom: "1px solid rgba(11,24,40,0.08)" }}>
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="stack-pill" style={{ fontSize: 13, padding: "6px 14px" }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkShowcase() {
  const items = [
    {
      tag: "Maintenance",
      title: "Maintenance intake & dispatch agent",
      desc: "Classifies ticket urgency, drafts the owner-approval message, dispatches the right vendor, chases status, and updates tenant and owner — the whole 7–12-message loop, automated.",
      stack: ["Triage", "Vendor routing", "Owner approval", "Status chase"],
    },
    {
      tag: "Reporting",
      title: "Owner-reporting generator",
      desc: "Pulls from the PMS and assembles each owner's custom monthly statement plus a plain-English performance summary, sent on schedule. The weekend reporting grind, gone.",
      stack: ["PMS pull", "Custom statements", "Auto-send"],
    },
    {
      tag: "Managed systems",
      title: "VMG Vendor Engagement Platform",
      desc: "A live vendor-engagement system I built and run — trade classification, outreach sequencing, and a managed dashboard. Proof I operate these systems, not just pitch them.",
      stack: ["Classification engine", "Outreach", "Dashboard"],
    },
  ];
  return (
    <section style={{ padding: "5rem 0", position: "relative" }}>
      <div style={wrap}>
        <div className="reveal">
          <span className="label-style">These are not mockups</span>
          <h2 className="font-display" style={{ fontSize: 34, marginTop: 16, marginBottom: 10 }}>
            Real automation I build and run, not slideware.
          </h2>
          <p style={{ color: "rgba(11,24,40,0.7)", maxWidth: 640, marginBottom: 34 }}>
            Every system below is something I operate — so the hours it gives a team back are measured, not projected.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18 }}>
          {items.map((it, i) => (
            <div key={i} className="glass-card reveal" style={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <span className="tag-pill">{it.tag}</span>
                <span className="delivered-badge">
                  <span className="delivered-dot" /> Built &amp; running
                </span>
              </div>
              <h3 className="font-display" style={{ fontSize: 19, marginBottom: 8 }}>
                {it.title}
              </h3>
              <p style={{ color: "rgba(11,24,40,0.7)", fontSize: 14.5, marginBottom: 16 }}>{it.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {it.stack.map((s, j) => (
                  <span key={j} className="stack-pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const changes = [
  {
    n: "01",
    icon: Wrench,
    h: "Tickets that triage and dispatch themselves",
    p: "Intake gets classified for urgency, the right vendor gets routed, and status gets chased automatically — instead of the same 7–12 manual messages every time.",
  },
  {
    n: "02",
    icon: PhoneCall,
    h: "Owners updated without a phone call",
    p: "Approval requests and status updates go out on their own, so owners stay in the loop and your team stops fielding “what’s happening with my unit?”",
  },
  {
    n: "03",
    icon: BellRing,
    h: "The 9pm “is this an emergency?” call, handled",
    p: "After-hours requests get triaged against rules you set — urgency, cost, what the owner would approve — so the judgment call isn’t always yours on a Friday night.",
  },
];

const boxItems = [
  { icon: Wrench, t: "Maintenance intake, triage & vendor dispatch agent" },
  { icon: FileText, t: "Monthly owner-reporting generator (custom statements)" },
  { icon: Banknote, t: "Delinquency & collections escalation agent" },
  { icon: Bot, t: "Tenant comms deflection for repetitive questions" },
  { icon: Calculator, t: "Trust-account reconciliation assistant" },
  { icon: Building2, t: "New-owner & door onboarding agent" },
];

const auditChecks = [
  "A teardown of your 6 core workflows and where the hours actually go.",
  "The AI-automation potential and hours saved for each one, at your door count.",
  "An effort vs. impact matrix, so you see the quick wins and the big bets.",
  "The one automation to start with for the fastest ROI at your size.",
];

export default function PmLandingPage() {
  useScrollReveal();
  return (
    <div style={{ background: "#F5F7FA", color: "#0B1828", minHeight: "100vh" }}>
      <Nav />

      {/* Hero */}
      <section style={{ padding: "150px 0 80px", position: "relative" }}>
        <div style={wrap}>
          <div className="reveal">
            <span className="label-style">For residential property management companies · 80–400 doors</span>
            <h1 className="hero-headline font-display" style={{ marginTop: 22, maxWidth: 940 }}>
              Every maintenance ticket eats 7–12 messages{" "}
              <span className="text-amber">before a vendor is even scheduled.</span>
            </h1>
            <p style={{ fontSize: 18, color: "rgba(11,24,40,0.75)", maxWidth: 660, margin: "22px 0 28px" }}>
              I build and run AI that handles the maintenance coordination loop end to end — intake, triage, owner
              approval, vendor dispatch, status chase, and tenant and owner updates — so your coordinator stops drowning
              in texts. Start with a free 20-minute audit of where AI saves your team the most hours.
            </p>
            <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <a href="#book" className="btn-primary">
                Get your free AI Automation Audit
              </a>
              <span style={{ color: "rgba(11,24,40,0.5)", fontSize: 13 }}>20 min · keep the map either way</span>
            </div>
            <p
              style={{
                marginTop: 30,
                paddingTop: 20,
                borderTop: "1px solid rgba(11,24,40,0.08)",
                maxWidth: 680,
                color: "rgba(11,24,40,0.6)",
                fontSize: 14,
              }}
            >
              I&apos;m not a consultant with slides. <strong style={{ color: "#0B1828" }}>I build and run these
              systems myself</strong> — so the hours they give your team back are real and measurable, not projected off
              a sales deck.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ padding: "10px 0 40px" }}>
        <div style={wrap}>
          <blockquote
            className="reveal"
            style={{ borderLeft: "3px solid #1E5BB8", paddingLeft: 22, maxWidth: 820, fontSize: 22, lineHeight: 1.45, fontWeight: 600 }}
          >
            &ldquo;Triaging urgency, getting owner approvals before dispatching vendors, tracking aging work orders,
            keeping everyone updated without drowning in texts.&rdquo;
            <cite style={{ display: "block", marginTop: 14, fontSize: 14, fontWeight: 400, fontStyle: "normal", color: "rgba(11,24,40,0.55)" }}>
              — A property manager running an 80-unit portfolio.
            </cite>
          </blockquote>
        </div>
      </section>

      {/* What changes */}
      <section style={{ padding: "5rem 0" }}>
        <div style={wrap}>
          <div className="reveal">
            <span className="label-style">What changes</span>
            <h2 className="font-display" style={{ fontSize: 34, marginTop: 16, marginBottom: 34 }}>
              Your coordinator stops chasing tickets and starts closing them.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 18 }}>
            {changes.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.n} className="glass-card reveal" style={{ padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <Icon size={22} color="#1E5BB8" />
                    <span className="stat-number" style={{ fontSize: "1.3rem" }}>{c.n}</span>
                  </div>
                  <h3 className="font-display" style={{ fontSize: 18, marginBottom: 8 }}>{c.h}</h3>
                  <p style={{ color: "rgba(11,24,40,0.7)", fontSize: 14.5 }}>{c.p}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WorkShowcase />
      <ClientTicker />

      {/* Free audit */}
      <section style={{ padding: "5rem 0" }}>
        <div style={{ ...wrap, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, alignItems: "center" }} className="audit-grid">
          <div className="reveal">
            <span className="label-style">The free audit</span>
            <h2 className="font-display" style={{ fontSize: 30, margin: "16px 0 22px" }}>
              You&apos;ll walk away knowing exactly what to automate first
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {auditChecks.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span className="check-circle">
                    <Check color="#FFFFFF" strokeWidth={3} />
                  </span>
                  <span style={{ fontSize: 15.5, color: "rgba(11,24,40,0.85)" }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card reveal" style={{ padding: 30 }}>
            <span className="label-style">Free · No pitch</span>
            <h3 className="font-display" style={{ fontSize: 20, margin: "14px 0 8px" }}>
              AI Automation Audit for Property Managers
            </h3>
            <p style={{ color: "rgba(11,24,40,0.7)", fontSize: 14.5, marginBottom: 18 }}>
              A 20-minute working session. We map your time-sinks live, and you keep the plan whether or not we ever work
              together.
            </p>
            <a href="#book" className="btn-primary" style={{ width: "100%" }}>
              Book your audit
            </a>
            <p style={{ color: "rgba(11,24,40,0.5)", fontSize: 12.5, marginTop: 12 }}>
              No prep needed. Bring how your team runs a typical week.
            </p>
          </div>
        </div>
      </section>

      {/* PM AI Box */}
      <section style={{ padding: "5rem 0", borderTop: "1px solid rgba(11,24,40,0.08)" }}>
        <div style={wrap}>
          <div className="reveal">
            <span className="label-style">When you&apos;re ready to go further</span>
            <h2 className="font-display" style={{ fontSize: 32, margin: "16px 0 10px" }}>
              The Property Management AI Box, managed end to end
            </h2>
            <p style={{ color: "rgba(11,24,40,0.7)", maxWidth: 680, marginBottom: 28 }}>
              One configured system, cloned for your company and run for you. Your team does nothing differently — the
              coordination and admin just disappear.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 12, marginBottom: 24 }}>
            {boxItems.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="reveal" style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 0" }}>
                  <Icon size={18} color="#1E5BB8" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 15, color: "rgba(11,24,40,0.88)" }}>{b.t}</span>
                </div>
              );
            })}
          </div>
          <p className="reveal" style={{ fontSize: 15, color: "rgba(11,24,40,0.7)" }}>
            <strong style={{ color: "#0B1828" }}>Managed, from $3–5K/mo</strong> — less than a coordinator&apos;s salary,
            working every hour of the day.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="book" style={{ padding: "6rem 0", textAlign: "center", borderTop: "1px solid rgba(11,24,40,0.08)" }}>
        <div style={wrap}>
          <h2 className="font-display reveal" style={{ fontSize: 34, marginBottom: 14 }}>
            See where AI wins your team hours back
          </h2>
          <p className="reveal" style={{ color: "rgba(11,24,40,0.7)", fontSize: 17, maxWidth: 560, margin: "0 auto 28px" }}>
            Book the free 20-minute audit. Worst case, you leave with a clear automation plan you can run yourself.
          </p>
          <a href={CALENDLY} target="_blank" rel="noopener" className="btn-primary reveal">
            Book your free audit →
          </a>
          <p className="reveal" style={{ marginTop: 16, fontSize: 13, color: "rgba(11,24,40,0.5)" }}>
            Prefer email?{" "}
            <a href={EMAIL} className="text-amber" style={{ textDecoration: "none" }}>
              hello@soranoai.ai
            </a>
          </p>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(11,24,40,0.08)", padding: "26px 0", color: "rgba(11,24,40,0.5)", fontSize: 13 }}>
        <div style={{ ...wrap, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <span>Sorano AI · AI automation for property management companies</span>
          <span>Built and run by Brian Lisi</span>
        </div>
      </footer>
    </div>
  );
}
