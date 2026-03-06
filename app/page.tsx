// app/page.tsx
import Link from "next/link";

type Accent = "cyan" | "sky" | "violet" | "emerald" | "orange" | "pink";

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
    name: "Sanctuary Sprint v3",
    href: "https://sanctuary-sprint-v3.vercel.app",
    badge: "Focus",
    accent: "orange",
    desc: "Sprint with intention — ship without burning out.",
    bullets: ["Timed sprints", "Gentle structure", "Progress momentum"],
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
];

function accentClasses(accent: Accent) {
  switch (accent) {
    case "cyan":
      return {
        ring: "ring-cyan-300/30",
        glow: "shadow-cyan-500/10",
        dot: "bg-cyan-300",
      };
    case "sky":
      return {
        ring: "ring-sky-300/30",
        glow: "shadow-sky-500/10",
        dot: "bg-sky-300",
      };
    case "violet":
      return {
        ring: "ring-violet-300/30",
        glow: "shadow-violet-500/10",
        dot: "bg-violet-300",
      };
    case "emerald":
      return {
        ring: "ring-emerald-300/30",
        glow: "shadow-emerald-500/10",
        dot: "bg-emerald-300",
      };
    case "orange":
      return {
        ring: "ring-orange-300/30",
        glow: "shadow-orange-500/10",
        dot: "bg-orange-300",
      };
    case "pink":
      return {
        ring: "ring-pink-300/30",
        glow: "shadow-pink-500/10",
        dot: "bg-pink-300",
      };
  }
}

export default function Page() {
  return (
    <main className="min-h-dvh relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 city-ambient" />
      <div aria-hidden className="pointer-events-none absolute inset-0 city-grid" />
      <div aria-hidden className="pointer-events-none absolute inset-0 city-vignette" />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-sky-300 animate-pulse" />
            <span className="text-xs text-slate-200/90">City Status: Online</span>
          </div>

          <Link
            href="mailto:voltaralabs@gmail.com"
            className="text-xs text-slate-200/80 hover:text-slate-100 transition"
          >
            voltaralabs@gmail.com
          </Link>
        </div>

        <section className="mt-10 sm:mt-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <span className="text-xs text-slate-200/80">
              Unified hub • shipped districts • one entry point
            </span>
          </div>

          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-50">
            Voltara <span className="city-title-glow">City</span>
          </h1>

          <p className="mt-3 max-w-2xl text-base sm:text-lg text-slate-200/80 leading-relaxed">
            A calm, immersive hub for your live tools. No clutter. No noise. Just doors that open.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#districts"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-100 backdrop-blur hover:bg-white/[0.06] transition"
            >
              Enter the City →
            </a>
          </div>
        </section>

        <section id="districts" className="mt-10 sm:mt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-100">Districts</h2>
              <p className="mt-1 text-sm text-slate-200/70">
                Each district is a live deployment. Tap to enter.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-200/60">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-300/80" />
              <span>Links open in a new tab</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {districts.map((d) => {
              const a = accentClasses(d.accent);
              return (
                <a
                  key={d.name}
                  href={d.href}
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    "group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur",
                    "transition will-change-transform hover:-translate-y-1",
                    "hover:bg-white/[0.05] hover:border-white/15",
                    "ring-1 ring-inset",
                    a.ring,
                    a.glow,
                    "shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
                  ].join(" ")}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl city-card-sheen opacity-0 group-hover:opacity-100 transition"
                  />

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${a.dot} shadow`} />
                        <h3 className="text-base font-semibold text-slate-100">{d.name}</h3>
                      </div>
                      <p className="mt-2 text-sm text-slate-200/75 leading-relaxed">{d.desc}</p>
                    </div>

                    <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-200/70">
                      {d.badge}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {d.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-slate-200/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm text-slate-100/90">Enter District</span>
                    <span className="text-sm text-slate-200/60 group-hover:text-slate-100/90 transition">
                      →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <footer className="mt-12 sm:mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-slate-200/60">
              © {new Date().getFullYear()} Voltara City • Built in public • Quiet power
            </p>
            <div className="flex items-center gap-3 text-xs">
              <a
                href="mailto:voltaralabs@gmail.com"
                className="text-slate-200/70 hover:text-slate-100 transition"
              >
                Email
              </a>
              <span className="text-slate-200/30">•</span>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-200/70 hover:text-slate-100 transition"
              >
                X
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}