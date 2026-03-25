import { useEffect, useRef } from "react";
import {
  Megaphone,
  Clock,
  Hand,
  Banknote,
  Building2,
  GitBranch,
  Zap,
  LayoutDashboard,
  Bot,
  Database,
  FileText,
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com";
const EMAIL = "mailto:hello@soranoai.ai";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

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
        borderBottom: "1px solid rgba(255,255,255,0.08)",
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

      <div
        className="nav-links"
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {["Work", "Services", "Pricing", "Process"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              color: "rgba(240,237,232,0.75)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#f5a623";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color =
                "rgba(240,237,232,0.75)";
            }}
          >
            {link}
          </a>
        ))}
      </div>

      <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: "15px", padding: "11px 24px" }}>
        Book a Free Call
      </a>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

function HeroSection() {
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const line1 = ["Your", "Team", "Needs", "An", "AI", "Win."];
    const line2 = ["We", "Build", "It", "In", "5", "Days."];
    const allWords = [...line1, ...line2];

    allWords.forEach((_, i) => {
      const el = wordsRef.current[i];
      if (el) {
        el.style.animationDelay = `${i * 80}ms`;
      }
    });
  }, []);

  const line1 = ["Your", "Team", "Needs", "An", "AI", "Win."];
  const line2 = ["We", "Build", "It", "In", "5", "Days."];
  let wordIdx = 0;

  return (
    <section
      id="hero"
      style={{
        display: "flex",
        alignItems: "flex-start",
        background: "#0f0f0f",
        position: "relative",
        overflow: "hidden",
        padding: "96px 2.5rem 4rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ flex: "0 0 58%", maxWidth: "58%" }}>
          <div className="label-style"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "0.8rem",
            }}
          >
            <span className="pulse-dot" />
            <span>Your boss is about to ask what you are doing with AI.</span>
          </div>

          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2.4rem, 4vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              marginBottom: "1rem",
            }}
          >
            <div style={{ marginBottom: "0.1em" }}>
              {line1.map((word, i) => {
                const idx = wordIdx++;
                return (
                  <span
                    key={i}
                    ref={(el) => {
                      if (el) wordsRef.current[idx] = el;
                    }}
                    className="hero-word"
                    style={{ marginRight: "0.25em", color: "#f0ede8" }}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
            <div>
              {line2.map((word, i) => {
                const idx = wordIdx++;
                return (
                  <span
                    key={i}
                    ref={(el) => {
                      if (el) wordsRef.current[idx] = el;
                    }}
                    className="hero-word"
                    style={{
                      marginRight: "0.25em",
                      color: "#f5a623",
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "17px",
              color: "rgba(240,237,232,0.8)",
              maxWidth: "520px",
              marginTop: "0",
              marginBottom: "1.5rem",
              lineHeight: 1.7,
            }}
          >
            We build custom AI dashboards, automations, and workflow tools for
            managers who need to show results — fast, affordable, and without
            an IT department. You bring the problem. We deliver a working
            system. You own it completely.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "2rem",
              flexWrap: "wrap",
            }}
          >
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary">
              Book a Free 20-Min Call
            </a>
            <a href="#work" className="btn-secondary">
              See Our Work →
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              marginTop: "1.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              flexWrap: "nowrap",
            }}
          >
            {[
              { num: "13", label: "Systems Shipped" },
              { num: "5 days", label: "Average Build Time" },
              { num: "100%", label: "Client Ownership" },
              { num: "$0", label: "Ongoing Platform Fees" },
            ].map((stat, i) => (
              <div key={stat.label} style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div>
                  <div className="stat-number">{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
                {i < 3 && <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.1)" }} />}
              </div>
            ))}
          </div>
        </div>

        <div
          className="hero-montage"
          style={{
            flex: 1,
            position: "relative",
            minHeight: "540px",
            pointerEvents: "none",
          }}
        >
          {/* Clipping 1 — Slack message */}
          <div style={{
            position: "absolute", top: 0, left: "6%",
            width: "258px", transform: "rotate(-2.2deg)",
            background: "#1a1d21", borderRadius: "10px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.55)",
            overflow: "hidden",
          }}>
            <div style={{ padding: "10px 14px 6px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif", fontSize: "11px" }}>#</span>
              <span style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500 }}>operations</span>
              <span style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'Inter', sans-serif", fontSize: "10px", marginLeft: "auto" }}>Slack</span>
            </div>
            <div style={{ padding: "12px 14px 14px", display: "flex", gap: "10px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "6px", background: "#4a154b", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600 }}>S</span>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
                  <span style={{ color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600 }}>Sarah</span>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif", fontSize: "10px" }}>VP Operations</span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.82)", fontFamily: "'Inter', sans-serif", fontSize: "12px", lineHeight: 1.55, margin: 0 }}>
                  Hey — leadership wants each team to present their AI strategy by end of quarter. Can you put something together?
                </p>
              </div>
            </div>
          </div>

          {/* Clipping 2 — Calendar block */}
          <div style={{
            position: "absolute", top: "28px", right: "2%",
            width: "205px", transform: "rotate(2.5deg)",
            background: "#fff", borderRadius: "10px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
            overflow: "hidden",
          }}>
            <div style={{ background: "#dc2626", padding: "8px 12px", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600 }}>MON</span>
              <div style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.3)" }} />
              <span style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Inter', sans-serif", fontSize: "10px" }}>9:00 AM — 12:00 PM</span>
            </div>
            <div style={{ padding: "12px" }}>
              <div style={{ color: "#111", fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 700, lineHeight: 1.3 }}>
                Weekly Manual Reporting — 3 hrs
              </div>
              <div style={{ color: "#dc2626", fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 500, marginTop: "6px" }}>
                🔁 Repeating every Monday
              </div>
              <div style={{ color: "#6b7280", fontFamily: "'Inter', sans-serif", fontSize: "10px", marginTop: "3px" }}>
                Since 2019
              </div>
            </div>
          </div>

          {/* Clipping 3 — LinkedIn job posting */}
          <div style={{
            position: "absolute", top: "185px", left: "14%",
            width: "268px", transform: "rotate(-1.2deg)",
            background: "#fff", borderRadius: "10px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.42)",
            overflow: "hidden",
          }}>
            <div style={{ background: "#0a66c2", padding: "8px 12px", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.02em" }}>in</span>
              <span style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Inter', sans-serif", fontSize: "10px" }}>Job Posting</span>
            </div>
            <div style={{ padding: "12px" }}>
              <div style={{ color: "#0a66c2", fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 700 }}>NOW HIRING</div>
              <div style={{ color: "#111", fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, marginTop: "2px" }}>Operations Manager</div>
              <div style={{ marginTop: "8px", display: "flex", flexDirection: "column", gap: "4px" }}>
                {["AI tools proficiency required.", "Workflow automation required."].map((req, i) => (
                  <div key={i} style={{ color: "#374151", fontFamily: "'Inter', sans-serif", fontSize: "11px", display: "flex", alignItems: "flex-start", gap: "5px" }}>
                    <span style={{ color: "#dc2626", fontWeight: 700, flexShrink: 0 }}>✓</span> {req}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "10px", color: "#0a66c2", fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, cursor: "pointer" }}>Apply →</div>
            </div>
          </div>

          {/* Clipping 4 — Email thread */}
          <div style={{
            position: "absolute", top: "215px", right: "0%",
            width: "245px", transform: "rotate(1.8deg)",
            background: "#f9f7f4", borderRadius: "10px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.38)",
            overflow: "hidden",
          }}>
            <div style={{ background: "#e8e4de", padding: "8px 12px", borderBottom: "1px solid #d6d0c8" }}>
              <div style={{ color: "#374151", fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 600 }}>RE: RE: RE: Q3 Analytics Report</div>
            </div>
            <div style={{ padding: "12px" }}>
              <p style={{ color: "#374151", fontFamily: "'Inter', sans-serif", fontSize: "11.5px", lineHeight: 1.55, margin: 0 }}>
                Can you pull this manually again this week? IT said the dashboard request is still in the backlog.
              </p>
              <div style={{ marginTop: "10px", paddingTop: "8px", borderTop: "1px solid #d6d0c8", color: "#9ca3af", fontFamily: "'Inter', sans-serif", fontSize: "10px" }}>
                37 emails in this thread
              </div>
            </div>
          </div>

          {/* Clipping 5 — Dark CTA card */}
          <div style={{
            position: "absolute", bottom: "20px", left: "10%",
            width: "280px", transform: "rotate(-0.8deg)",
            background: "#111", border: "1px solid rgba(245,166,35,0.25)",
            borderRadius: "10px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
            overflow: "hidden",
          }}>
            <div style={{ padding: "16px" }}>
              <div style={{ color: "#f5a623", fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                Sound familiar?
              </div>
              <div style={{ color: "#f0ede8", fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                Is your team still doing manually what AI could do in seconds?
              </div>
              <div style={{ marginTop: "12px", color: "#f5a623", fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500 }}>
                → Book a call before your next performance review
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeBar() {
  const items = [
    "AI Dashboards",
    "Built in 5 Days",
    "Fixed Price",
    "You Own Everything",
    "No IT Department Required",
    "13 Real Systems Shipped",
    "Workflow Automation",
    "Done-With-You Builds",
    "100% Client Ownership",
  ];

  const content = items.map((item, i) => (
    <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "1.5rem", whiteSpace: "nowrap" }}>
      <span style={{ color: "rgba(240,237,232,0.65)", fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "13px" }}>
        {item}
      </span>
      <span style={{ color: "rgba(240,237,232,0.3)", fontSize: "10px" }}>·</span>
    </span>
  ));

  return (
    <div
      style={{
        background: "#141414",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        height: "48px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div className="marquee-track">
        {content}
        {content}
      </div>
    </div>
  );
}

function ProblemSection() {
  const cards = [
    {
      icon: <Megaphone size={22} color="#f5a623" />,
      title: "The mandate came from above",
      body: "Leadership announced an AI initiative. Every manager is expected to show what their team is doing. You have 90 days and no roadmap.",
      clipping: (
        <div style={{ background: "#f8f9fa", borderRadius: "8px", overflow: "hidden", fontFamily: "'Inter', sans-serif", fontSize: "10px" }}>
          <div style={{ padding: "6px 10px", background: "#4a154b", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "4px" }}>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>#</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>operations</span>
            <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: "auto" }}>Slack</span>
          </div>
          <div style={{ padding: "8px 10px", display: "flex", gap: "8px" }}>
            <div style={{ width: "24px", height: "24px", borderRadius: "4px", background: "#4a154b", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: "9px", fontWeight: 600 }}>S</span>
            </div>
            <div>
              <div style={{ display: "flex", gap: "6px", marginBottom: "3px", alignItems: "baseline" }}>
                <span style={{ color: "#111", fontWeight: 600 }}>Sarah</span>
                <span style={{ color: "#6b7280", fontSize: "9px" }}>VP Operations</span>
              </div>
              <p style={{ color: "#374151", lineHeight: 1.45, margin: 0 }}>
                Hey — leadership wants each team to present their AI strategy by end of quarter. Can you put something together?
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Clock size={22} color="#f5a623" />,
      title: "IT has a 6-month backlog",
      body: "You submitted the request. It went into a queue behind 47 other tickets. Your deadline is next quarter.",
      clipping: (
        <div style={{ background: "#fff", borderRadius: "8px", overflow: "hidden", fontFamily: "'Inter', sans-serif" }}>
          <div style={{ background: "#dc2626", padding: "6px 10px", display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{ color: "#fff", fontWeight: 600, fontSize: "10px" }}>MON</span>
            <div style={{ width: "1px", height: "10px", background: "rgba(255,255,255,0.3)" }} />
            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "9px" }}>9:00 AM — 12:00 PM</span>
          </div>
          <div style={{ padding: "8px 10px" }}>
            <div style={{ color: "#111", fontSize: "11px", fontWeight: 700, lineHeight: 1.3 }}>Weekly Manual Reporting — 3 hrs</div>
            <div style={{ color: "#dc2626", fontSize: "9px", fontWeight: 500, marginTop: "4px" }}>🔁 Repeating every Monday</div>
            <div style={{ color: "#6b7280", fontSize: "9px", marginTop: "2px" }}>Since 2019</div>
          </div>
        </div>
      ),
    },
    {
      icon: <Hand size={22} color="#f5a623" />,
      title: "You are still doing it manually",
      body: "10 or more hours a week on reports, data entry, outreach, or updates that a system should handle automatically.",
      clipping: (
        <div style={{ background: "#fff", borderRadius: "8px", overflow: "hidden", fontFamily: "'Inter', sans-serif" }}>
          <div style={{ background: "#0a66c2", padding: "6px 10px", display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "10px", letterSpacing: "0.02em" }}>in</span>
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "9px" }}>Job Posting</span>
          </div>
          <div style={{ padding: "8px 10px" }}>
            <div style={{ color: "#0a66c2", fontSize: "11px", fontWeight: 700 }}>NOW HIRING</div>
            <div style={{ color: "#111", fontSize: "11px", fontWeight: 600, marginTop: "2px" }}>Operations Manager</div>
            <div style={{ marginTop: "6px", display: "flex", flexDirection: "column", gap: "3px" }}>
              {["AI tools proficiency required.", "Workflow automation required."].map((req, ri) => (
                <div key={ri} style={{ color: "#374151", fontSize: "10px", display: "flex", alignItems: "flex-start", gap: "4px" }}>
                  <span style={{ color: "#dc2626", fontWeight: 700, flexShrink: 0 }}>✓</span>{req}
                </div>
              ))}
            </div>
            <div style={{ marginTop: "8px", color: "#0a66c2", fontSize: "10px", fontWeight: 600 }}>Apply →</div>
          </div>
        </div>
      ),
    },
    {
      icon: <Banknote size={22} color="#f5a623" />,
      title: "The budget does not cover agencies",
      body: "$50,000 for a 3-month engagement is not happening. But doing nothing is not an option either.",
      clipping: (
        <div style={{ background: "#f9f7f4", borderRadius: "8px", overflow: "hidden", fontFamily: "'Inter', sans-serif" }}>
          <div style={{ background: "#e8e4de", padding: "6px 10px", borderBottom: "1px solid #d6d0c8" }}>
            <div style={{ color: "#374151", fontSize: "10px", fontWeight: 600 }}>RE: RE: RE: Q3 Analytics Report</div>
          </div>
          <div style={{ padding: "8px 10px" }}>
            <p style={{ color: "#374151", fontSize: "10px", lineHeight: 1.5, margin: 0 }}>
              Can you pull this manually again this week? IT said the dashboard request is still in the backlog.
            </p>
            <div style={{ marginTop: "8px", paddingTop: "6px", borderTop: "1px solid #d6d0c8", color: "#9ca3af", fontSize: "9px" }}>
              37 emails in this thread
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="problem"
      style={{
        background: "#0f0f0f",
        padding: "7rem 2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        className="watermark"
        style={{ top: "-2rem", right: "-2rem" }}
      >
        01
      </span>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="label-style" style={{ marginBottom: "1rem" }}>
            Sound Familiar?
          </div>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f0ede8",
            }}
          >
            Your Company Is Deploying AI.
            <br />
            <span style={{ color: "#f5a623" }}>
              Your Team Is Still Using Spreadsheets.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              color: "rgba(240,237,232,0.8)",
              maxWidth: "520px",
              marginTop: "1.25rem",
              lineHeight: 1.7,
            }}
          >
            Most managers are about to show their boss a ChatGPT screenshot. A
            few will show something that actually runs. We build the thing that
            runs.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            marginTop: "3.5rem",
          }}
          className="problem-grid"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="glass-card reveal"
              style={{
                padding: "1.75rem",
                borderLeft: "2px solid #f5a623",
                borderRadius: "0",
                animationDelay: `${i * 80}ms`,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                {/* Left: text content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "0.85rem" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        flexShrink: 0,
                        background: "rgba(245,166,35,0.1)",
                        border: "1px solid rgba(245,166,35,0.2)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {card.icon}
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "#f0ede8",
                        margin: 0,
                        lineHeight: 1.3,
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      color: "rgba(240,237,232,0.8)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {card.body}
                  </p>
                </div>
                {/* Right: mini clipping */}
                <div style={{ width: "155px", flexShrink: 0, height: "130px", overflow: "hidden", borderRadius: "8px" }}>
                  {card.clipping}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="reveal"
        style={{
          textAlign: "center",
          padding: "48px 2rem 48px",
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
            color: "#f0ede8",
            lineHeight: 1.65,
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          The managers who cannot show a working system in 90 days are being reclassified as the bottleneck.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .problem-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ServicesSection() {
  const deliverables = {
    left: [
      "60-min discovery call to map your workflow",
      "Custom build — dashboard, automation, or AI tool",
      "Claude API or OpenAI integration where needed",
      "Data connections — Sheets, Airtable, CRM, APIs",
    ],
    right: [
      "Live walkthrough and full handoff session",
      "30 days of follow-up support included",
      "Full documentation — your team runs it independently",
      "No subscriptions, no platform lock-in, ever",
    ],
  };

  return (
    <section
      id="services"
      style={{
        background: "#0f0f0f",
        padding: "7rem 2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        className="watermark"
        style={{ top: "-2rem", right: "-2rem" }}
      >
        02
      </span>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            className="label-style"
            style={{ marginBottom: "1rem", textAlign: "center" }}
          >
            The Offer
          </div>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f0ede8",
            }}
          >
            One Service. One Price. One Week.
          </h2>
        </div>

        <div
          className="glass-card reveal"
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "3rem",
            borderTop: "3px solid #f5a623",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.8rem",
                  fontWeight: 600,
                  color: "#f0ede8",
                  lineHeight: 1.1,
                }}
              >
                Done-With-You AI Build
              </h3>
            </div>
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#f5a623",
                  lineHeight: 1,
                }}
              >
                $997
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  color: "rgba(240,237,232,0.78)",
                  marginTop: "0.4rem",
                }}
              >
                Fixed price · 5 days · you own everything
              </div>
            </div>
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              color: "rgba(240,237,232,0.9)",
              marginTop: "1.25rem",
              lineHeight: 1.7,
            }}
          >
            You bring your biggest manual headache. We build the AI system that
            solves it together. One week. Fixed price. Your team uses it on day
            six.
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              margin: "1.5rem 0",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem 2rem",
            }}
            className="deliverables-grid"
          >
            {[...deliverables.left, ...deliverables.right].map((item, i) => {
              const isRight = i >= deliverables.left.length;
              const col = isRight ? 2 : 1;
              const row = isRight ? i - deliverables.left.length + 1 : i + 1;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    gridColumn: col,
                    gridRow: row,
                  }}
                >
                  <div className="check-circle" style={{ marginTop: "1px" }}>
                    <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2 6 5 9 10 3" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      color: "rgba(240,237,232,0.9)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary">
              Book a Free 20-Min Call
            </a>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                color: "rgba(240,237,232,0.7)",
                marginTop: "1rem",
              }}
            >
              3 spots available this month · Fixed price before we start ·
              Response within 24 hours
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .deliverables-grid { grid-template-columns: 1fr !important; }
          .deliverables-grid > div { grid-column: 1 !important; grid-row: auto !important; }
        }
      `}</style>
    </section>
  );
}

function WorkSection() {
  const projects = [
    {
      tag: "Sovereign Wealth / Private Equity",
      headline:
        "Institutional-grade financial model for a $200M+ equity raise",
      detail:
        "Bottom-up financial model for a joint venture targeting digital banking expansion across African and Asian markets. Structured for sovereign investor IC review with full sensitivity analysis, regulatory market matrix, and executive summary.",
      stack: ["Excel", "Financial Modeling", "Investor Relations", "Scenario Analysis"],
    },
    {
      tag: "Hospitality / Real Estate",
      headline:
        "Portfolio analytics dashboard replacing 12 hours of weekly manual reporting",
      detail:
        "Live performance dashboard for a boutique hotel portfolio in New Orleans. STR and STAR benchmarking, acquisition tear sheet, and AI-generated weekly investor summary emails. Built and deployed in under a week.",
      stack: ["React", "Streamlit", "AI Analysis", "Airtable"],
    },
    {
      tag: "Enterprise Technology",
      headline: "Interactive AI proposal builder cutting sales cycles by 40%",
      detail:
        "Dynamic proposal tool built for a $200M+ infrastructure product launch. Custom pricing calculator, AI-generated sections tailored to each prospect, and one-click PDF export. Deployed and in active use.",
      stack: ["React", "Claude API", "PDF Export", "CRM Integration"],
    },
    {
      tag: "Market Intelligence",
      headline:
        "AI-powered TAM and market analysis engine delivering research in minutes",
      detail:
        "Claude API-powered market research tool delivering structured competitive analysis, TAM sizing, and go-to-market recommendations in minutes instead of weeks. Used to evaluate market opportunities before committing resources.",
      stack: ["Claude API", "Market Research", "React", "Competitive Analysis"],
    },
  ];

  return (
    <section
      id="work"
      style={{
        background: "#141414",
        padding: "7rem 2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        className="watermark"
        style={{ top: "-2rem", right: "-2rem" }}
      >
        03
      </span>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="label-style" style={{ marginBottom: "1rem" }}>
            Real Work. Real Output.
          </div>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f0ede8",
            }}
          >
            13 Systems Shipped.
            <br />
            <span style={{ color: "#f5a623" }}>
              Zero Theoretical.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              color: "rgba(240,237,232,0.8)",
              maxWidth: "520px",
              marginTop: "1.25rem",
              lineHeight: 1.7,
            }}
          >
            Every project below was built, deployed, and is in active use. No
            mockups. No case study fluff.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.25rem",
            marginTop: "3.5rem",
          }}
          className="work-grid"
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className="glass-card reveal"
              style={{
                padding: "1.75rem",
                transitionDelay: `${i * 80}ms`,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <span className="tag-pill">{project.tag}</span>
                <span className="delivered-badge">
                  <span className="delivered-dot" />
                  DELIVERED
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  color: "#f0ede8",
                  lineHeight: 1.25,
                  marginTop: "0.25rem",
                }}
              >
                {project.headline}
              </h3>

              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  color: "rgba(240,237,232,0.8)",
                  lineHeight: 1.65,
                }}
              >
                {project.detail}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginTop: "auto",
                  paddingTop: "0.5rem",
                }}
              >
                {project.stack.map((tech) => (
                  <span key={tech} className="stack-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function LiveShowcase() {
  const cards = [
    {
      src: "https://investment-thesis-dashboard.replit.app",
      tag: "Sovereign Wealth / Private Equity",
      name: "Investor Financial Model",
      desc: "$200M+ equity raise · IC-ready",
    },
    {
      src: "https://akamai-investor-dashboard--admin4277.replit.app",
      tag: "Enterprise Technology",
      name: "Akamai Investor Dashboard",
      desc: "Live infrastructure analytics",
    },
    {
      src: "https://garden-dashboard.replit.app",
      tag: "Hospitality / Real Estate",
      name: "Hotel Portfolio Dashboard",
      desc: "STR benchmarking · Weekly reporting",
    },
    {
      src: "https://martech-ai-platform-admin4277.replit.app",
      tag: "MarTech / AI Platform",
      name: "AI Outreach Platform",
      desc: "Clay + Brevo · 13K contacts · 40% open rate",
    },
  ];

  const Card = ({ card }: { card: typeof cards[0] }) => (
    <div className="showcase-card">
      <iframe
        src={card.src}
        title={card.name}
        scrolling="no"
        style={{
          width: "1040px",
          height: "680px",
          transform: "scale(0.5)",
          transformOrigin: "top left",
          border: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "130px",
          background: "linear-gradient(transparent, rgba(10,10,10,0.98))",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          padding: "1.25rem",
          zIndex: 3,
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "#f5a623",
            background: "rgba(245,166,35,0.12)",
            border: "1px solid rgba(245,166,35,0.3)",
            borderRadius: "20px",
            padding: "3px 10px",
          }}
        >
          {card.tag}
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.15rem",
            fontWeight: 600,
            color: "#f0ede8",
            marginTop: "6px",
            display: "block",
            lineHeight: 1.2,
          }}
        >
          {card.name}
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            color: "rgba(240,237,232,0.7)",
            marginTop: "2px",
            display: "block",
          }}
        >
          {card.desc}
        </span>
      </div>
    </div>
  );

  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "4rem 0",
        overflow: "hidden",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2.5rem", padding: "0 2.5rem" }}>
        <div className="label-style" style={{ marginBottom: "1rem" }}>
          Live Systems
        </div>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#f0ede8",
          }}
        >
          See the Work Running.
          <br />
          <span style={{ color: "#f5a623" }}>
            These Are Not Mockups.
          </span>
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            color: "rgba(240,237,232,0.82)",
            maxWidth: "500px",
            margin: "1.25rem auto 0",
            lineHeight: 1.7,
          }}
        >
          Every tool below is built, deployed, and live. Hover any card to
          interact with it directly.
        </p>
      </div>

      <div style={{ overflow: "hidden" }}>
        <div
          className="showcase-track"
          style={{
            display: "flex",
            gap: "24px",
            width: "fit-content",
            animation: "scrollLeft 55s linear infinite",
            paddingLeft: "24px",
          }}
        >
          {cards.map((card, i) => (
            <Card key={i} card={card} />
          ))}
          {cards.map((card, i) => (
            <Card key={`dup-${i}`} card={card} />
          ))}
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "1.5rem",
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          color: "rgba(255,255,255,0.3)",
        }}
      >
        Hover any card to interact with the live system · Built and deployed
        in under 5 days each
      </div>

      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .showcase-track:hover {
          animation-play-state: paused;
        }
        .showcase-card {
          width: 520px;
          height: 340px;
          flex-shrink: 0;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255,255,255,0.08);
          transition: border-color 0.2s;
          cursor: pointer;
        }
        .showcase-card:hover {
          border-color: rgba(245,166,35,0.5);
        }
        .showcase-card iframe {
          pointer-events: none;
        }
        .showcase-card:hover iframe {
          pointer-events: auto;
        }
      `}</style>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "You tell us the problem",
      body: "Book a free 20-minute call. Tell us the one workflow that costs your team the most time. No prep required. No deck needed.",
    },
    {
      num: "02",
      title: "We scope it same day",
      body: "You get a fixed price and delivery date before we hang up. No proposals. No waiting. If it does not fit, we will tell you honestly.",
    },
    {
      num: "03",
      title: "We build it together",
      body: "5 days. Daily progress updates. You stay as involved as you want. You see the build happen not just the final output.",
    },
    {
      num: "04",
      title: "You own it completely",
      body: "Full handoff, documentation, walkthrough, and 30 days of support. No subscriptions. No platform lock-in. Yours forever.",
    },
  ];

  return (
    <section
      id="process"
      style={{
        background: "#0d0d0d",
        padding: "7rem 2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        className="watermark"
        style={{ top: "-2rem", right: "-2rem", color: "#0f0f0f", opacity: 0.03 }}
      >
        04
      </span>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div
            className="label-style"
            style={{ color: "rgba(240,237,232,0.5)", marginBottom: "1rem" }}
          >
            How It Works
          </div>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f0ede8",
            }}
          >
            From First Call to Live System in 5 Days
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              color: "#f0ede8",
              maxWidth: "520px",
              marginTop: "1.25rem",
              lineHeight: 1.7,
            }}
          >
            No discovery decks. No 6-week timelines. No surprise invoices.
            Just a working system.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr",
            alignItems: "flex-start",
            gap: "0",
            marginTop: "4rem",
          }}
          className="process-steps"
        >
          {steps.flatMap((step, i) => {
            const items = [
              <div
                key={step.num}
                className="reveal"
                style={{ transitionDelay: `${i * 100}ms`, paddingRight: "1.5rem" }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.08)",
                    lineHeight: 1,
                    marginBottom: "1rem",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#f0ede8",
                    marginBottom: "0.6rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    color: "#f0ede8",
                    lineHeight: 1.65,
                  }}
                >
                  {step.body}
                </p>
              </div>,
            ];
            if (i < steps.length - 1) {
              items.push(
                <div
                  key={`connector-${i}`}
                  style={{
                    width: "2rem",
                    height: "1px",
                    background: "#f5a623",
                    opacity: 0.4,
                    alignSelf: "start",
                    marginTop: "1.6rem",
                    marginRight: "0.5rem",
                  }}
                />
              );
            }
            return items;
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-steps { flex-direction: column !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}

function WhoSection() {
  const cards = [
    {
      icon: <Building2 size={22} color="#f5a623" />,
      title: "You are a Director or Senior Manager",
      body: "Your company is rolling out AI and you need something your team actually uses — not a pilot that dies in a committee meeting.",
    },
    {
      icon: <GitBranch size={22} color="#f5a623" />,
      title: "You have a specific workflow problem",
      body: "Not a vague mandate to use AI. A concrete process that takes too long, costs too much, or breaks too often.",
    },
    {
      icon: <Zap size={22} color="#f5a623" />,
      title: "You can make a fast decision",
      body: "Not enterprise procurement. Not a 6-month approval chain. You can greenlight $997 this week if it solves a real problem.",
    },
  ];

  return (
    <section
      id="pricing"
      style={{
        background: "#0f0f0f",
        padding: "7rem 2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        className="watermark"
        style={{ top: "-2rem", right: "-2rem" }}
      >
        05
      </span>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="reveal">
          <div className="label-style" style={{ marginBottom: "1rem" }}>
            The Right Fit
          </div>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f0ede8",
            }}
          >
            Built for Managers.
            <br />
            <span style={{ color: "#f5a623" }}>
              Not IT Departments.
            </span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
            marginTop: "3.5rem",
          }}
          className="who-grid"
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="glass-card reveal"
              style={{
                padding: "1.75rem",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "0.85rem" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    flexShrink: 0,
                    background: "rgba(245,166,35,0.1)",
                    border: "1px solid rgba(245,166,35,0.2)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#f0ede8",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  color: "rgba(240,237,232,0.8)",
                  lineHeight: 1.65,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .who-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function FounderBioBlock() {
  return (
    <section
      style={{
        background: "#0f0f0f",
        padding: "9rem 2.5rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="reveal"
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="label-style" style={{ marginBottom: "2rem", fontSize: "14px", padding: "6px 14px" }}>
          WHO BUILT THIS
        </div>
        <div
          style={{
            width: "120px",
            height: "3px",
            background: "#f5a623",
            margin: "0 auto 3rem",
          }}
        />

        {/* Flex row: headshot + bio */}
        <div
          className="bio-row"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "32px",
            maxWidth: "860px",
            width: "100%",
            textAlign: "left",
          }}
        >
          {/* Left: circular headshot */}
          <img
            id="brian-headshot"
            src={`${import.meta.env.BASE_URL}brian-headshot.jpg`}
            alt="Brian Lisi"
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "50% 2%",
              border: "3px solid rgba(245,166,35,0.4)",
              boxShadow: "0 0 0 6px rgba(245,166,35,0.08)",
              flexShrink: 0,
              backgroundColor: "#333333",
              display: "block",
            }}
          />

          {/* Right: bio text + LinkedIn */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(18px, 2.5vw, 22px)",
                color: "#f0ede8",
                lineHeight: 1.75,
                fontWeight: 400,
                margin: 0,
              }}
            >
              Sorano AI is run by a 23-year operator who has raised{" "}
              <strong style={{ fontWeight: 700, color: "#fff" }}>$30M</strong>, built and sold companies, and shipped AI systems for{" "}
              <strong style={{ fontWeight: 700, color: "#fff" }}>Fortune 500</strong> clients. We built this agency because smart managers kept hitting the same wall — mandate with no roadmap. We close that gap in{" "}
              <strong style={{ fontWeight: 700, color: "#fff" }}>five days</strong>.
            </p>
            <a
              href="https://linkedin.com/in/brianlisi"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "8px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#E8A020",
                textDecoration: "none",
                fontWeight: 500,
              }}
              onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
            >
              linkedin.com/in/brianlisi →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .bio-row {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .bio-row p { text-align: center !important; }
          .bio-row a { text-align: center !important; }
        }
      `}</style>

      <div
        style={{
          width: "100%",
          height: "1px",
          background: "rgba(255,255,255,0.08)",
          margin: "3rem 0",
        }}
      />

      {/* Partner ticker */}
      <div>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              color: "#888",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Clients and partners from our operator history
          </span>
        </div>
        <div
          style={{
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "160px",
              background: "linear-gradient(to right, #0f0f0f, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "160px",
              background: "linear-gradient(to left, #0f0f0f, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div className="marquee-track">
            {[
              "NFL", "FloSports", "Sony Music", "Goldman Sachs", "Merrill Lynch",
              "Morgan Stanley", "Slack", "Tableau", "Disney", "Harley Davidson",
              "iHeart Radio", "Amazon Music", "Fenway Sports Group", "Snapchat", "Uber Freight",
            ].concat([
              "NFL", "FloSports", "Sony Music", "Goldman Sachs", "Merrill Lynch",
              "Morgan Stanley", "Slack", "Tableau", "Disney", "Harley Davidson",
              "iHeart Radio", "Amazon Music", "Fenway Sports Group", "Snapchat", "Uber Freight",
            ]).map((name, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  marginRight: "80px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#fff",
                  opacity: 0.6,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      style={{
        background: "#0f0f0f",
        padding: "6rem 2.5rem",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          className="reveal"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#f0ede8",
          }}
        >
          Show Up to Your Next Review
          <br />
          With <span style={{ color: "#f5a623" }}>Something Running.</span>
        </h2>

        <p
          className="reveal"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            color: "rgba(240,237,232,0.8)",
            maxWidth: "500px",
            margin: "1.25rem auto 0",
            lineHeight: 1.7,
          }}
        >
          Book a free 20-minute call. Tell us your biggest manual workflow
          problem. We will tell you exactly what we would build, how long it
          takes, and what it costs. No pitch. No obligation. No deck required.
        </p>

        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary">
            Book a Free 20-Min Call
          </a>
          <a href={EMAIL} className="btn-secondary">
            Send a Message
          </a>
        </div>

        <div
          className="reveal"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            color: "rgba(240,237,232,0.65)",
            marginTop: "1.25rem",
            letterSpacing: "0.02em",
          }}
        >
          3 spots available this month · Response within 24 hours · Fixed
          price before we start
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        padding: "2rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <a
        href="/"
        style={{ textDecoration: "none", display: "flex", alignItems: "center" }}
      >
        <img
          src={`${import.meta.env.BASE_URL}sorano-logo-clear.png`}
          alt="Sorano AI"
          style={{ height: "40px", display: "block" }}
        />
      </a>

      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {[
          { label: "Work", href: "#work" },
          { label: "Services", href: "#services" },
          { label: "Process", href: "#process" },
          { label: "Contact", href: EMAIL },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: "rgba(240,237,232,0.7)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#f5a623";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color =
                "rgba(240,237,232,0.7)";
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.875rem",
          fontWeight: 400,
          color: "rgba(240,237,232,0.45)",
        }}
      >
        © 2026 Sorano AI. All rights reserved.
      </div>
    </footer>
  );
}

export default function LandingPage() {
  useScrollReveal();

  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <MarqueeBar />
        <ProblemSection />
        <ServicesSection />
        <WorkSection />
        <LiveShowcase />
        <ProcessSection />
        <WhoSection />
        <FounderBioBlock />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
