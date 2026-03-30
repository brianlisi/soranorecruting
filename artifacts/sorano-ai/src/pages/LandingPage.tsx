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

const CALENDLY_URL = "https://calendly.com/brian-mobilerider/30min";
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
              color: "rgba(240,237,232,0.88)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#f5a623";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color =
                "rgba(240,237,232,0.88)";
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
    const line1 = ["Show", "Up", "to", "Your", "Next", "Review"];
    const line2 = ["With", "Something", "Running."];
    const line3 = ["We", "Build", "It", "In", "5", "Days."];
    const allWords = [...line1, ...line2, ...line3];

    allWords.forEach((_, i) => {
      const el = wordsRef.current[i];
      if (el) {
        el.style.animationDelay = `${i * 80}ms`;
      }
    });
  }, []);

  const line1 = ["Show", "Up", "to", "Your", "Next", "Review"];
  const line2 = ["With", "Something", "Running."];
  const line3 = ["We", "Build", "It", "In", "5", "Days."];
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
            <span>Your Manager keeps asking, "When are we going to use AI?"</span>
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
            <div style={{ marginBottom: "0.1em" }}>
              {line2.map((word, i) => {
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
              {line3.map((word, i) => {
                const idx = wordIdx++;
                return (
                  <span
                    key={i}
                    ref={(el) => {
                      if (el) wordsRef.current[idx] = el;
                    }}
                    className="hero-word"
                    style={{ marginRight: "0.25em", color: "#E8A020" }}
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
            We build institutional-grade dashboards, models, and analysis tools
            for directors and senior managers who need to show AI results —
            fast, without IT, and without a six-figure consulting engagement.
            You bring the workflow. We deliver the work product. You own it
            completely.
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
              flexWrap: "wrap",
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
                {i < 3 && <div className="hero-stat-divider" style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.1)" }} />}
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
          {/* Clipping 1 — Goldman Sachs research stat */}
          <div style={{
            position: "absolute", top: 0, left: "6%",
            width: "262px", transform: "rotate(-2.2deg)",
            background: "#0a0a0a", borderRadius: "10px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.7)",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            <div style={{ padding: "10px 14px 8px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#a78b4f", fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em" }}>GOLDMAN SACHS RESEARCH</span>
            </div>
            <div style={{ padding: "14px" }}>
              <div style={{ color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: "22px", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em" }}>
                300M
              </div>
              <div style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Inter', sans-serif", fontSize: "11.5px", lineHeight: 1.5, marginTop: "6px" }}>
                full-time jobs at risk from generative AI. <span style={{ color: "#f5a623", fontWeight: 600 }}>Knowledge workers most exposed.</span>
              </div>
              <div style={{ marginTop: "10px", paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif", fontSize: "9.5px" }}>
                Global Investment Research · 2024
              </div>
            </div>
          </div>

          {/* Clipping 2 — Performance review card */}
          <div style={{
            position: "absolute", top: "28px", right: "2%",
            width: "215px", transform: "rotate(2.5deg)",
            background: "#fff", borderRadius: "10px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
            overflow: "hidden",
          }}>
            <div style={{ background: "#1e293b", padding: "8px 12px" }}>
              <div style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 600 }}>Q2 Performance Review</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", fontSize: "9px", marginTop: "1px" }}>Director, Analytics</div>
            </div>
            <div style={{ padding: "11px 12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "7px" }}>
                <span style={{ color: "#374151", fontFamily: "'Inter', sans-serif", fontSize: "10px" }}>AI Workflow Adoption</span>
                <span style={{ background: "#fee2e2", color: "#dc2626", fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 700, padding: "2px 6px", borderRadius: "3px" }}>NEEDS IMPROVEMENT</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "7px" }}>
                <span style={{ color: "#374151", fontFamily: "'Inter', sans-serif", fontSize: "10px" }}>Team Productivity</span>
                <span style={{ background: "#fef9c3", color: "#854d0e", fontFamily: "'Inter', sans-serif", fontSize: "9px", fontWeight: 700, padding: "2px 6px", borderRadius: "3px" }}>BELOW TARGET</span>
              </div>
              <div style={{ marginTop: "8px", paddingTop: "8px", borderTop: "1px solid #e5e7eb", color: "#6b7280", fontFamily: "'Inter', sans-serif", fontSize: "9.5px", lineHeight: 1.4 }}>
                "Team continues to produce reports manually. No automation demonstrated this quarter."
              </div>
            </div>
          </div>

          {/* Clipping 3 — McKinsey insight card */}
          <div style={{
            position: "absolute", top: "200px", left: "8%",
            width: "268px", transform: "rotate(-1.2deg)",
            background: "#fff", borderRadius: "10px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.42)",
            overflow: "hidden",
          }}>
            <div style={{ background: "#051c2c", padding: "8px 12px", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.05em" }}>McKINSEY GLOBAL INSTITUTE</span>
            </div>
            <div style={{ padding: "12px" }}>
              <div style={{ color: "#111", fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 700, lineHeight: 1.3 }}>
                "Managers who cannot demonstrate AI output will be the first restructured."
              </div>
              <div style={{ marginTop: "8px", display: "flex", flexDirection: "column", gap: "5px" }}>
                {[
                  "Mid-level management most at risk",
                  "AI proficiency now a baseline expectation",
                ].map((point, i) => (
                  <div key={i} style={{ color: "#374151", fontFamily: "'Inter', sans-serif", fontSize: "10.5px", display: "flex", alignItems: "flex-start", gap: "5px" }}>
                    <span style={{ color: "#dc2626", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>▸</span> {point}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "9px", color: "#9ca3af", fontFamily: "'Inter', sans-serif", fontSize: "9px" }}>The State of AI in the Enterprise · 2025</div>
            </div>
          </div>

          {/* Clipping 4 — Internal leadership email */}
          <div style={{
            position: "absolute", top: "225px", right: "0%",
            width: "248px", transform: "rotate(1.8deg)",
            background: "#f9f7f4", borderRadius: "10px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.38)",
            overflow: "hidden",
          }}>
            <div style={{ background: "#e8e4de", padding: "8px 12px", borderBottom: "1px solid #d6d0c8" }}>
              <div style={{ color: "#374151", fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 600 }}>Q3 All-Leadership Directive</div>
              <div style={{ color: "#9ca3af", fontFamily: "'Inter', sans-serif", fontSize: "9px", marginTop: "1px" }}>From: Office of the CEO</div>
            </div>
            <div style={{ padding: "12px" }}>
              <p style={{ color: "#374151", fontFamily: "'Inter', sans-serif", fontSize: "11px", lineHeight: 1.6, margin: 0 }}>
                Every department must demonstrate measurable AI integration by EOQ. <strong>Teams that cannot show automation in their reporting workflows will be restructured.</strong>
              </p>
            </div>
          </div>

          {/* Clipping 5 — Dark branded CTA */}
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
                The window is closing
              </div>
              <div style={{ color: "#f0ede8", fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                The managers who show AI results in the next 90 days keep their seats.
              </div>
              <div style={{ marginTop: "12px", color: "#f5a623", fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500 }}>
                → Build yours in 5 days. Not 6 months.
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
    { img: "https://i.pravatar.cc/40?img=1",  text: "Built our reporting dashboard in under a week. Showed it in my next leadership review.", role: "Director of Operations" },
    { img: "https://i.pravatar.cc/40?img=11", text: "No IT ticket. No waiting. We owned everything on day one.", role: "VP Analytics" },
    { img: "https://i.pravatar.cc/40?img=3",  text: "Fixed price meant I got budget approved in one conversation.", role: "Finance Manager" },
    { img: "https://i.pravatar.cc/40?img=12", text: "My team stopped doing manual reports. That alone justified the cost.", role: "Senior Director" },
    { img: "https://i.pravatar.cc/40?img=5",  text: "Showed leadership a live AI system in week two. No one else on the team did.", role: "Team Lead" },
    { img: "https://i.pravatar.cc/40?img=14", text: "Done in 5 days exactly like they said. No bloat, no endless meetings.", role: "Director of Ops" },
    { img: "https://i.pravatar.cc/40?img=7",  text: "We own the code. That mattered a lot to our legal and IT teams.", role: "Business Manager" },
    { img: "https://i.pravatar.cc/40?img=15", text: "Finally something built for a manager budget, not a technology budget.", role: "VP Operations" },
  ];

  const content = items.map((item, i) => (
    <div
      key={i}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        background: "#1a1a1a",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        padding: "14px 18px",
        width: "295px",
        flexShrink: 0,
        whiteSpace: "normal",
      }}
    >
      <img
        src={item.img}
        alt=""
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          objectFit: "cover",
          flexShrink: 0,
          border: "1.5px solid rgba(245,166,35,0.3)",
        }}
      />
      <div style={{ minWidth: 0 }}>
        <p style={{
          color: "rgba(240,237,232,0.88)",
          fontFamily: "'Inter', sans-serif",
          fontSize: "12.5px",
          lineHeight: 1.5,
          margin: 0,
          fontWeight: 400,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical" as const,
          overflow: "hidden",
        }}>
          {item.text}
        </p>
        <p style={{
          color: "#f5a623",
          fontFamily: "'Inter', sans-serif",
          fontSize: "10.5px",
          fontWeight: 600,
          margin: "5px 0 0",
          letterSpacing: "0.02em",
        }}>
          {item.role}
        </p>
      </div>
    </div>
  ));

  return (
    <div
      style={{
        background: "#111",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        padding: "0 0",
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
      title: "Your next review is an AI audit",
      body: "Leadership has moved past asking for roadmaps. They want to see what's live. Managers walking in with running dashboards are getting budget. Managers with screenshots are getting performance plans.",
      clipping: (
        <div style={{ background: "#fff", borderRadius: "8px", overflow: "hidden", fontFamily: "'Inter', sans-serif", fontSize: "10px" }}>
          <div style={{ background: "#1e293b", padding: "6px 10px" }}>
            <div style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>Q2 Performance Review</div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "9px", marginTop: "1px" }}>Director, Analytics</div>
          </div>
          <div style={{ padding: "8px 10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
              <span style={{ color: "#374151" }}>AI Workflow Adoption</span>
              <span style={{ background: "#fee2e2", color: "#dc2626", fontWeight: 700, padding: "1px 5px", borderRadius: "3px", fontSize: "9px" }}>NEEDS IMPROVEMENT</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#374151" }}>Team Productivity</span>
              <span style={{ background: "#fef9c3", color: "#854d0e", fontWeight: 700, padding: "1px 5px", borderRadius: "3px", fontSize: "9px" }}>BELOW TARGET</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <Clock size={22} color="#f5a623" />,
      title: "Your peers are already shipping",
      body: "The director down the hall automated their weekly reporting. The VP in finance has a live board-ready dashboard. Your boss is starting to notice who has answers and who has apologies.",
      clipping: (
        <div style={{ background: "#051c2c", borderRadius: "8px", overflow: "hidden", fontFamily: "'Inter', sans-serif", fontSize: "10px" }}>
          <div style={{ padding: "6px 10px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <span style={{ color: "#a78b4f", fontWeight: 700, letterSpacing: "0.05em", fontSize: "9px" }}>McKINSEY GLOBAL INSTITUTE</span>
          </div>
          <div style={{ padding: "8px 10px" }}>
            <div style={{ color: "#fff", fontWeight: 700, lineHeight: 1.35, fontSize: "11px" }}>
              "Managers who cannot demonstrate AI output will be the first restructured."
            </div>
            <div style={{ color: "rgba(255,255,255,0.4)", marginTop: "6px", fontSize: "9px" }}>The State of AI in the Enterprise · 2025</div>
          </div>
        </div>
      ),
    },
    {
      icon: <Hand size={22} color="#f5a623" />,
      title: "The 90-day clock is already running",
      body: "The CEO directive is in motion. Teams that cannot show AI results by end of quarter are being restructured. Waiting for IT or a budget cycle is not a strategy.",
      clipping: (
        <div style={{ background: "#f9f7f4", borderRadius: "8px", overflow: "hidden", fontFamily: "'Inter', sans-serif", fontSize: "10px" }}>
          <div style={{ background: "#e8e4de", padding: "6px 10px", borderBottom: "1px solid #d6d0c8" }}>
            <div style={{ color: "#374151", fontWeight: 600 }}>Q3 All-Leadership Directive</div>
            <div style={{ color: "#9ca3af", fontSize: "9px", marginTop: "1px" }}>From: Office of the CEO</div>
          </div>
          <div style={{ padding: "8px 10px" }}>
            <p style={{ color: "#374151", lineHeight: 1.5, margin: 0 }}>
              Every department must show measurable AI integration by EOQ. <strong>Teams that cannot demonstrate automation will be restructured.</strong>
            </p>
          </div>
        </div>
      ),
    },
    {
      icon: <Banknote size={22} color="#f5a623" />,
      title: "Doing nothing is the highest-risk move",
      body: "Goldman Sachs said 300M jobs. McKinsey said middle management first. Every week your team produces reports by hand is another week your boss has data on who is keeping up.",
      clipping: (
        <div style={{ background: "#0a0a0a", borderRadius: "8px", overflow: "hidden", fontFamily: "'Inter', sans-serif", fontSize: "10px", border: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ padding: "6px 10px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <span style={{ color: "#a78b4f", fontWeight: 700, letterSpacing: "0.05em", fontSize: "9px" }}>GOLDMAN SACHS RESEARCH</span>
          </div>
          <div style={{ padding: "8px 10px" }}>
            <div style={{ color: "#fff", fontSize: "18px", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>300M</div>
            <div style={{ color: "rgba(255,255,255,0.7)", marginTop: "4px", lineHeight: 1.45 }}>
              full-time jobs at risk. <span style={{ color: "#f5a623", fontWeight: 600 }}>Knowledge workers most exposed.</span>
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
            AI Is Restructuring Knowledge Work.
            <br />
            <span style={{ color: "#f5a623" }}>
              Your Boss Is Already Keeping Score.
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
            The managers who show a live AI system in their next review are getting budget and influence. The ones who can't are getting performance plans. There is no middle option anymore.
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
                <div className="problem-clipping" style={{ width: "155px", flexShrink: 0, height: "130px", overflow: "hidden", borderRadius: "8px" }}>
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

        {/* What We Typically Build */}
        <div style={{ maxWidth: "720px", margin: "0 auto", paddingTop: "0", paddingBottom: "20px" }}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <span style={{ color: "#E8A020", fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              WHAT WE TYPICALLY BUILD
            </span>
          </div>
          {[
            {
              dept: "OPERATIONS",
              body: "A Monday morning dashboard that pulls your team's weekly KPIs automatically and emails a board-ready summary to your leadership before 8am — replacing the report someone rebuilds from scratch every week.",
            },
            {
              dept: "FINANCE",
              body: "A budget variance model that updates in real time from your existing spreadsheets, flags anomalies automatically, and generates a one-click executive summary your CFO can read in two minutes.",
            },
            {
              dept: "SALES / MARKETING",
              body: "An AI-powered pipeline report that pulls live CRM data, summarizes deal velocity, and produces a stakeholder-ready forecast your team stops arguing about because the numbers update themselves.",
            },
          ].map((item, i, arr) => (
            <div key={i}>
              <div style={{ padding: "24px 0", textAlign: "center" }}>
                <div style={{ color: "#E8A020", fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
                  {item.dept}
                </div>
                <p style={{ color: "#f0ede8", fontFamily: "'Inter', sans-serif", fontSize: "17px", fontWeight: 500, lineHeight: 1.65, maxWidth: "600px", margin: "0 auto" }}>
                  {item.body}
                </p>
              </div>
              {i < arr.length - 1 && (
                <div style={{ height: "1px", background: "#2A2A2A" }} />
              )}
            </div>
          ))}
          <p style={{ color: "#666666", fontFamily: "'Inter', sans-serif", fontSize: "14px", fontStyle: "italic", textAlign: "center", marginTop: "32px", marginBottom: "48px" }}>
            If you can describe the output, we can build it. We will confirm scope and price on the first call.
          </p>
        </div>

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
            One System. One Week. One Decision.
          </h2>
        </div>

        <div
          className="glass-card reveal"
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            padding: "60px 48px",
            borderTop: "3px solid #f5a623",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
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
                Your Team's AI-Powered Analyst. Built in 5 Days.
              </h3>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "52px",
                  fontWeight: 800,
                  color: "#f5a623",
                  lineHeight: 1,
                }}
              >
                $1,497
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  color: "rgba(240,237,232,0.78)",
                  marginTop: "0.4rem",
                  textAlign: "center",
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
              textAlign: "center",
            }}
          >
            Institutional-grade dashboards, models, and analysis tools that replace the reports your team builds by hand. Board meetings. Budget reviews. Stakeholder presentations. Live, automated, yours forever.
          </p>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              margin: "1.5rem 0",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0",
            }}
          >
            <div
              style={{
                maxWidth: "480px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {[
                "Built for board meetings, budget reviews, and stakeholder presentations",
                "Replaces manual spreadsheets, PowerPoints, and analyst reports",
                "Connected to your live data — Sheets, Airtable, CRM, or any API",
                "You own it completely. No subscriptions. No lock-in. Ever.",
                "30 days of support included. Your team runs it independently.",
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
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
                      fontSize: "14px",
                      color: "rgba(240,237,232,0.9)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              color: "#666666",
              fontStyle: "italic",
              textAlign: "center",
              maxWidth: "480px",
              margin: "24px auto 24px",
              lineHeight: 1.6,
            }}
          >
            We scope the build on the first call. If it is not a fit, we tell you honestly before any money changes hands.
          </p>

          <div style={{ textAlign: "center", marginTop: "0" }}>
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
              Every week your team spends doing this manually is a week your boss is waiting for results.
            </div>
          </div>
        </div>
      </div>
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
            style={{ marginBottom: "1rem" }}
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
                    color: "rgba(255,255,255,0.2)",
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
      title: "You need a work product, not a pilot",
      body: "Your company is rolling out AI and leadership wants results. Not a proof of concept that dies in a meeting. A live system your team uses to produce the reports, dashboards, and analysis that used to take days.",
    },
    {
      icon: <GitBranch size={22} color="#f5a623" />,
      title: "You have a specific deliverable in mind",
      body: "A board deck that updates automatically. A budget model that pulls live data. A stakeholder report that used to take your team eight hours every week. If you can describe the output, we can build it.",
    },
    {
      icon: <Zap size={22} color="#f5a623" />,
      title: "You can make a fast decision",
      body: "Not enterprise procurement. Not a six-month approval chain. You can greenlight $1,497 this week if it means walking into your next review with something that runs.",
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
            color: "rgba(240,237,232,0.78)",
            marginTop: "1.25rem",
            letterSpacing: "0.02em",
          }}
        >
          Response within 24 hours · Fixed price before we start · No pitch. No deck. No obligation.
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
              color: "rgba(240,237,232,0.82)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#f5a623";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color =
                "rgba(240,237,232,0.82)";
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
          color: "rgba(240,237,232,0.65)",
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
        <ProcessSection />
        <LiveShowcase />
        <ServicesSection />
        <WhoSection />
        <FounderBioBlock />
        <WorkSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
