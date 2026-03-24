import { useEffect, useRef } from "react";

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
        height: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a
        href="/"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "18px",
          fontWeight: 500,
          textDecoration: "none",
          color: "#f0ede8",
          letterSpacing: "-0.01em",
        }}
      >
        Sorano<span style={{ color: "#f5a623" }}>AI</span>
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
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
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

      <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: "13px", padding: "10px 20px" }}>
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
    const line1 = ["Your", "Team", "Needs", "an", "AI", "Win."];
    const line2 = ["We", "Build", "It", "in", "5", "Days."];
    const allWords = [...line1, ...line2];

    allWords.forEach((_, i) => {
      const el = wordsRef.current[i];
      if (el) {
        el.style.animationDelay = `${i * 80}ms`;
      }
    });
  }, []);

  const line1 = ["Your", "Team", "Needs", "an", "AI", "Win."];
  const line2 = ["We", "Build", "It", "in", "5", "Days."];
  let wordIdx = 0;

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#0f0f0f",
        position: "relative",
        overflow: "hidden",
        padding: "120px 2.5rem 5rem",
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
        <div style={{ flex: "0 0 60%", maxWidth: "60%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "1.5rem",
            }}
          >
            <span className="pulse-dot" />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#f5a623",
                fontWeight: 500,
              }}
            >
              AI Build Agency
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(3.2rem, 7vw, 6rem)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              marginBottom: 0,
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
                      fontStyle: "italic",
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
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "17px",
              color: "rgba(240,237,232,0.9)",
              maxWidth: "520px",
              marginTop: "1.75rem",
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
              marginTop: "2.5rem",
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
              gap: "3rem",
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "13", label: "AI Systems Shipped" },
              { num: "5 days", label: "Average Build Time" },
              { num: "100%", label: "Client Ownership" },
              { num: "$0", label: "Ongoing Platform Fees" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="stat-number">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="hero-number-bg"
          style={{
            position: "absolute",
            right: "-5%",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            zIndex: 0,
            overflow: "hidden",
            userSelect: "none",
          }}
        >
          <div
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "45vw",
              color: "#f5a623",
              opacity: 0.04,
              lineHeight: 1,
            }}
          >
            5
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(240,237,232,0.6)",
              textAlign: "center",
              marginTop: "0.5rem",
            }}
          >
            Days to Build
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
      <span style={{ color: "rgba(245,166,35,0.88)", fontFamily: "'DM Sans', sans-serif", fontSize: "13px" }}>
        {item}
      </span>
      <span style={{ color: "#f5a623", fontSize: "10px" }}>·</span>
    </span>
  ));

  return (
    <div
      style={{
        background: "rgba(245,166,35,0.06)",
        borderTop: "1px solid rgba(245,166,35,0.15)",
        borderBottom: "1px solid rgba(245,166,35,0.15)",
        padding: "14px 0",
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
      title: "The mandate came from above",
      body: "Leadership announced an AI initiative. Every manager is expected to show what their team is doing. You have 90 days and no roadmap.",
    },
    {
      title: "IT has a 6-month backlog",
      body: "You submitted the request. It went into a queue behind 47 other tickets. Your deadline is next quarter.",
    },
    {
      title: "You are still doing it manually",
      body: "10 or more hours a week on reports, data entry, outreach, or updates that a system should handle automatically.",
    },
    {
      title: "The budget does not cover agencies",
      body: "$50,000 for a 3-month engagement is not happening. But doing nothing is not an option either.",
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
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#f0ede8",
            }}
          >
            Your Company Is Deploying AI.
            <br />
            <span style={{ color: "#f5a623", fontStyle: "italic" }}>
              Your Team Is Still Using Spreadsheets.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "rgba(240,237,232,0.88)",
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
                padding: "2rem",
                borderLeft: "2px solid #f5a623",
                borderRadius: "0",
                animationDelay: `${i * 80}ms`,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <h3
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#f0ede8",
                  marginBottom: "0.75rem",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(240,237,232,0.88)",
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
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
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
                  fontFamily: "'Fraunces', serif",
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
                  fontFamily: "'Fraunces', serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#f5a623",
                  lineHeight: 1,
                }}
              >
                $997
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
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
              fontFamily: "'DM Sans', sans-serif",
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
                      fontFamily: "'DM Sans', sans-serif",
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
                fontFamily: "'DM Sans', sans-serif",
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
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#f0ede8",
            }}
          >
            13 Systems Shipped.
            <br />
            <span style={{ color: "#f5a623", fontStyle: "italic" }}>
              Zero Theoretical.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "rgba(240,237,232,0.88)",
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
                  fontFamily: "'Fraunces', serif",
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
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "rgba(240,237,232,0.88)",
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
        background: "#f7f4ef",
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
            style={{ color: "rgba(15,15,15,0.65)", marginBottom: "1rem" }}
          >
            How It Works
          </div>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#0f0f0f",
            }}
          >
            From First Call to Live System in 5 Days
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "rgba(15,15,15,0.72)",
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
                    fontFamily: "'Fraunces', serif",
                    fontSize: "3rem",
                    fontWeight: 700,
                    color: "#f5a623",
                    lineHeight: 1,
                    marginBottom: "1rem",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#0f0f0f",
                    marginBottom: "0.6rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: "rgba(15,15,15,0.75)",
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
      title: "You are a Director or Senior Manager",
      body: "Your company is rolling out AI and you need something your team actually uses — not a pilot that dies in a committee meeting.",
    },
    {
      title: "You have a specific workflow problem",
      body: "Not a vague mandate to use AI. A concrete process that takes too long, costs too much, or breaks too often.",
    },
    {
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
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#f0ede8",
            }}
          >
            Built for Managers.
            <br />
            <span style={{ color: "#f5a623", fontStyle: "italic" }}>
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
                padding: "2rem",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <h3
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#f0ede8",
                  marginBottom: "0.75rem",
                  lineHeight: 1.4,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(240,237,232,0.88)",
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
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#f0ede8",
          }}
        >
          Your Boss Is About to Ask
          <br />
          What You Are Doing With AI.
        </h2>

        <p
          className="reveal"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "16px",
            color: "rgba(240,237,232,0.88)",
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
            fontFamily: "'DM Sans', sans-serif",
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
        background: "#080808",
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
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "16px",
          fontWeight: 500,
          textDecoration: "none",
          color: "#f0ede8",
        }}
      >
        Sorano<span style={{ color: "#f5a623" }}>AI</span>
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
              fontFamily: "'DM Sans', sans-serif",
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
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "12px",
          color: "rgba(240,237,232,0.6)",
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
        <ProcessSection />
        <WhoSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
