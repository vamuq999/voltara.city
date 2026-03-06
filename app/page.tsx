import Link from "next/link";

type Accent =
  | "violet"
  | "sky"
  | "cyan"
  | "emerald"
  | "orange"
  | "pink"
  | "gold";

type District = {
  name: string;
  href: string;
  badge: string;
  accent: Accent;
  desc: string;
  bullets: string[];
};

const districts: District[] = [
  {
    name: "BullFinderPro",
    href: "https://bullfinderpro.vercel.app",
    badge: "Signals",
    accent: "violet",
    desc: "Live candles + bull signals. Free preview, wallet-gated premium.",
    bullets: ["Market snapshot", "Signal engine", "Premium unlock"],
  },
  {
    name: "Voltara Oracle",
    href: "https://voltaraoracle.vercel.app",
    badge: "Oracle",
    accent: "sky",
    desc: "Your AI signal chamber — ask, scan, decide.",
    bullets: ["Oracle prompts", "Market lenses", "Decision clarity"],
  },
  {
    name: "VVS Registry",
    href: "https://vvs-opal.vercel.app",
    badge: "Registry",
    accent: "cyan",
    desc: "Verify treasury payments and generate print-ready certified receipts.",
    bullets: ["Treasury verify", "Watermarked artifact", "PNG / PDF export"],
  },
  {
    name: "GaiaGauge",
    href: "https://gaiagauge.vercel.app",
    badge: "Pulse",
    accent: "emerald",
    desc: "Sentiment + macro pulse — calm signal, clean view.",
    bullets: ["Market mood", "Risk temperature", "Trend pressure"],
  },
  {
    name: "SanctuarySprintV3",
    href: "https://sanctuarysprintv3.vercel.app",
    badge: "Sprint",
    accent: "orange",
    desc: "A ritual sprint chamber for momentum, focus, and competitive flow.",
    bullets: ["Timed rounds", "Score pressure", "Return ritual"],
  },
  {
    name: "CreatorDrop",
    href: "https://creatordrop.vercel.app",
    badge: "Proof of Work",
    accent: "pink",
    desc: "Creator infrastructure — the marketplace-to-be.",
    bullets: ["Build in public", "Artifacts live", "Next up to complete"],
  },
  {
    name: "AI Focus",
    href: "https://aifocus-iota.vercel.app",
    badge: "Focus",
    accent: "emerald",
    desc: "A reflex-driven attention trainer built on hold and release commands.",
    bullets: ["Focus trials", "Reaction control", "Rising difficulty"],
  },
  {
    name: "AI Stabilizer",
    href: "https://aistabilizer.vercel.app",
    badge: "Stabilizer",
    accent: "cyan",
    desc: "A symbolic AI utility for restoring balance, calm, and system harmony.",
    bullets: ["System stability", "Light-guided ritual", "Interactive equilibrium"],
  },
  {
    name: "AIStatus",
    href: "https://aistatus-beryl.vercel.app",
    badge: "Productivity",
    accent: "gold",
    desc: "Turn goals into staged missions and let the system rate your day as it unfolds.",
    bullets: ["Mission control", "XP + streaks", "Live status updates"],
  },
];

const accentMap: Record<
  Accent,
  { dot: string; badge: string; glow: string; border: string }
> = {
  violet: {
    dot: "#b59cff",
    badge: "rgba(181, 156, 255, 0.16)",
    glow: "rgba(181, 156, 255, 0.18)",
    border: "rgba(181, 156, 255, 0.34)",
  },
  sky: {
    dot: "#7fd0ff",
    badge: "rgba(127, 208, 255, 0.16)",
    glow: "rgba(127, 208, 255, 0.18)",
    border: "rgba(127, 208, 255, 0.34)",
  },
  cyan: {
    dot: "#67e8f9",
    badge: "rgba(103, 232, 249, 0.16)",
    glow: "rgba(103, 232, 249, 0.18)",
    border: "rgba(103, 232, 249, 0.34)",
  },
  emerald: {
    dot: "#6ee7b7",
    badge: "rgba(110, 231, 183, 0.16)",
    glow: "rgba(110, 231, 183, 0.18)",
    border: "rgba(110, 231, 183, 0.34)",
  },
  orange: {
    dot: "#f7b267",
    badge: "rgba(247, 178, 103, 0.16)",
    glow: "rgba(247, 178, 103, 0.18)",
    border: "rgba(247, 178, 103, 0.34)",
  },
  pink: {
    dot: "#f9a8d4",
    badge: "rgba(249, 168, 212, 0.16)",
    glow: "rgba(249, 168, 212, 0.18)",
    border: "rgba(249, 168, 212, 0.34)",
  },
  gold: {
    dot: "#f5d06f",
    badge: "rgba(245, 208, 111, 0.16)",
    glow: "rgba(245, 208, 111, 0.18)",
    border: "rgba(245, 208, 111, 0.34)",
  },
};

export default function Home() {
  return (
    <main className="city-shell">
      <div className="city-glow city-glow-a" />
      <div className="city-glow city-glow-b" />
      <div className="city-grid" />

      <section className="city-wrap">
        <header className="hero">
          <div className="hero-top">
            <span className="status-pill">
              <span className="status-dot" />
              City Status: Online
            </span>

            <a className="hero-mail" href="mailto:voltaralabs@gmail.com">
              voltaralabs@gmail.com
            </a>
          </div>

          <div className="hero-chip">
            Unified hub • {districts.length} shipped districts • one entry point
          </div>

          <h1 className="hero-title">
            Voltara <span>City</span>
          </h1>

          <p className="hero-copy">
            A calm, immersive hub for your live tools. No clutter. No noise.
            Just doors that open.
          </p>

          <div className="hero-actions">
            <a href="#districts" className="enter-btn">
              Enter the City <span>→</span>
            </a>
          </div>
        </header>

        <section id="districts" className="districts-section">
          <div className="section-head">
            <h2>Districts</h2>
            <p>Each district is a live deployment. Tap to enter.</p>
          </div>

          <div className="district-grid">
            {districts.map((district) => {
              const accent = accentMap[district.accent];

              return (
                <a
                  key={district.name}
                  href={district.href}
                  target="_blank"
                  rel="noreferrer"
                  className="district-card"
                  style={{
                    borderColor: accent.border,
                    boxShadow: `0 0 0 1px ${accent.border} inset, 0 0 32px ${accent.glow}`,
                  }}
                >
                  <div className="district-card-inner">
                    <div className="district-row">
                      <div className="district-title-wrap">
                        <span
                          className="district-dot"
                          style={{ backgroundColor: accent.dot }}
                        />
                        <h3>{district.name}</h3>
                      </div>

                      <span
                        className="district-badge"
                        style={{
                          background: accent.badge,
                          borderColor: accent.border,
                        }}
                      >
                        {district.badge}
                      </span>
                    </div>

                    <p className="district-desc">{district.desc}</p>

                    <ul className="district-list">
                      {district.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>

                    <div className="district-enter">
                      <span>Enter District</span>
                      <span className="arrow">→</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section className="footer-strip">
          <div className="footer-card">
            <div>
              <span className="footer-label">Voltara OS</span>
              <h3>9 districts online. More signals ahead.</h3>
            </div>

            <Link href="/" className="footer-link">
              City Core →
            </Link>
          </div>
        </section>
      </section>

      <style jsx>{`
        .city-shell {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at top, rgba(34, 211, 238, 0.1), transparent 28%),
            radial-gradient(circle at 85% 12%, rgba(168, 85, 247, 0.12), transparent 24%),
            linear-gradient(180deg, #030712 0%, #04111f 52%, #020611 100%);
          color: #e6eefc;
        }

        .city-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(80, 140, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(80, 140, 255, 0.08) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.92), transparent 92%);
          pointer-events: none;
        }

        .city-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(60px);
          pointer-events: none;
          opacity: 0.28;
        }

        .city-glow-a {
          top: 70px;
          left: -30px;
          width: 220px;
          height: 220px;
          background: #22d3ee;
        }

        .city-glow-b {
          top: 240px;
          right: -40px;
          width: 260px;
          height: 260px;
          background: #8b5cf6;
        }

        .city-wrap {
          position: relative;
          z-index: 1;
          width: min(1120px, calc(100% - 24px));
          margin: 0 auto;
          padding: 28px 0 54px;
        }

        .hero {
          padding: 22px 0 18px;
        }

        .hero-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 999px;
          border: 1px solid rgba(120, 170, 255, 0.2);
          background: rgba(10, 18, 34, 0.72);
          backdrop-filter: blur(12px);
          color: #d7e6ff;
          font-size: 0.96rem;
        }

        .status-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #6ec1ff;
          box-shadow: 0 0 18px rgba(110, 193, 255, 0.9);
        }

        .hero-mail {
          color: #d7e6ff;
          text-decoration: none;
          font-size: 0.98rem;
          opacity: 0.9;
        }

        .hero-chip {
          margin-top: 22px;
          display: inline-flex;
          align-items: center;
          padding: 12px 18px;
          border-radius: 999px;
          border: 1px solid rgba(120, 170, 255, 0.18);
          background: rgba(7, 14, 28, 0.7);
          color: #d2def5;
          font-size: 0.96rem;
        }

        .hero-title {
          margin: 22px 0 10px;
          font-size: clamp(3rem, 8vw, 5.8rem);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 800;
        }

        .hero-title span {
          color: #22d3ee;
          text-shadow: 0 0 28px rgba(34, 211, 238, 0.25);
        }

        .hero-copy {
          max-width: 760px;
          margin: 0;
          font-size: clamp(1.08rem, 2.5vw, 1.55rem);
          line-height: 1.7;
          color: #b5c4df;
        }

        .hero-actions {
          margin-top: 28px;
        }

        .enter-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 24px;
          border-radius: 20px;
          border: 1px solid rgba(120, 170, 255, 0.18);
          background: rgba(8, 16, 31, 0.86);
          color: #f4f8ff;
          text-decoration: none;
          font-size: 1.02rem;
          transition:
            transform 0.18s ease,
            border-color 0.18s ease,
            box-shadow 0.18s ease;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);
        }

        .enter-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(103, 232, 249, 0.4);
          box-shadow: 0 14px 42px rgba(34, 211, 238, 0.12);
        }

        .districts-section {
          padding-top: 28px;
        }

        .section-head h2 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 2.5rem);
          letter-spacing: -0.03em;
        }

        .section-head p {
          margin: 8px 0 0;
          color: #9fb1ce;
          font-size: 1.06rem;
        }

        .district-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 24px;
        }

        .district-card {
          display: block;
          text-decoration: none;
          color: inherit;
          border-radius: 28px;
          background:
            radial-gradient(circle at top, rgba(46, 124, 255, 0.08), transparent 45%),
            rgba(8, 16, 31, 0.84);
          backdrop-filter: blur(14px);
          overflow: hidden;
          transition:
            transform 0.18s ease,
            box-shadow 0.18s ease,
            border-color 0.18s ease;
        }

        .district-card:hover {
          transform: translateY(-3px);
        }

        .district-card-inner {
          padding: 24px 22px 20px;
          min-height: 270px;
          display: flex;
          flex-direction: column;
        }

        .district-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 14px;
        }

        .district-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .district-dot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          flex: 0 0 auto;
          box-shadow: 0 0 18px currentColor;
        }

        .district-row h3 {
          margin: 0;
          font-size: 1.15rem;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .district-badge {
          flex: 0 0 auto;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid;
          color: #d7deee;
          font-size: 0.92rem;
          white-space: nowrap;
        }

        .district-desc {
          margin: 18px 0 0;
          color: #bcc9dd;
          font-size: 1rem;
          line-height: 1.75;
          max-width: 34ch;
        }

        .district-list {
          margin: 18px 0 0;
          padding-left: 22px;
          color: #a9b8d1;
          line-height: 1.9;
        }

        .district-enter {
          margin-top: auto;
          padding-top: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #eff6ff;
          font-size: 1rem;
        }

        .arrow {
          font-size: 1.2rem;
          opacity: 0.9;
        }

        .footer-strip {
          margin-top: 26px;
        }

        .footer-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 22px;
          border-radius: 24px;
          border: 1px solid rgba(120, 170, 255, 0.16);
          background: rgba(7, 14, 28, 0.72);
          backdrop-filter: blur(12px);
        }

        .footer-label {
          display: inline-block;
          color: #7fd0ff;
          font-size: 0.85rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .footer-card h3 {
          margin: 0;
          font-size: 1.2rem;
          letter-spacing: -0.02em;
        }

        .footer-link {
          color: #e9f3ff;
          text-decoration: none;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .district-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .city-wrap {
            width: min(100% - 16px, 1120px);
            padding: 18px 0 34px;
          }

          .hero {
            padding-top: 8px;
          }

          .hero-mail {
            font-size: 0.92rem;
          }

          .hero-chip,
          .status-pill {
            font-size: 0.9rem;
          }

          .district-card-inner {
            min-height: unset;
            padding: 20px 18px 18px;
          }

          .district-row {
            align-items: flex-start;
          }

          .district-badge {
            font-size: 0.84rem;
            padding: 9px 12px;
          }

          .footer-card {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  );
}