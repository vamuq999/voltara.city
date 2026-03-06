import Link from "next/link";

type Accent =
  | "cyan"
  | "sky"
  | "violet"
  | "emerald"
  | "orange"
  | "pink"
  | "amber"
  | "rose"
  | "indigo";

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
    desc: "Live market scanning, bullish setups, and premium signal flow.",
    bullets: ["Market snapshot", "Signal engine", "Premium unlock"],
  },
  {
    name: "Voltara Oracle",
    href: "https://voltaraoracle.vercel.app",
    badge: "Oracle",
    accent: "sky",
    desc: "A mythic AI chamber for insight, reflection, and strategic clarity.",
    bullets: ["Oracle prompts", "Guided responses", "Decision support"],
  },
  {
    name: "VVS Registry",
    href: "https://vvs-opal.vercel.app",
    badge: "Registry",
    accent: "emerald",
    desc: "On-chain verification artifacts, premium receipts, and digital proof.",
    bullets: ["Artifact minting", "Verification layer", "Collector-grade records"],
  },
  {
    name: "GaiaGauge",
    href: "https://gaiagauge.vercel.app",
    badge: "Energy",
    accent: "cyan",
    desc: "A futuristic utility zone exploring energy systems, metrics, and vision.",
    bullets: ["Energy tools", "System concepts", "Future utility"],
  },
  {
    name: "SanctuarySprintV3",
    href: "https://sanctuarysprintv3.vercel.app",
    badge: "Sprint",
    accent: "orange",
    desc: "Momentum, challenge loops, progression, and gamified spiritual grind.",
    bullets: ["Sprint mode", "Leaderboard energy", "Progress loop"],
  },
  {
    name: "CreatorDrop",
    href: "https://creatordrop.vercel.app",
    badge: "Drops",
    accent: "pink",
    desc: "A launchpad for creators, collectibles, digital drops, and culture.",
    bullets: ["Creator hub", "Drop showcase", "Digital launch zone"],
  },
  {
    name: "AIStatus",
    href: "https://aistatus-beryl.vercel.app",
    badge: "Status",
    accent: "amber",
    desc: "Track AI system states, uptime mood, and platform pulse in one place.",
    bullets: ["System pulse", "Status board", "Signal visibility"],
  },
  {
    name: "AIFocus",
    href: "https://aifocus-iota.vercel.app",
    badge: "Focus",
    accent: "rose",
    desc: "A calm machine for clarity, intention, task alignment, and deep work.",
    bullets: ["Focus sessions", "Mental reset", "Attention alignment"],
  },
  {
    name: "AIStabilizer",
    href: "https://aistabilizer.vercel.app",
    badge: "Stabilizer",
    accent: "indigo",
    desc: "A balancing layer for composure, grounding, and digital emotional control.",
    bullets: ["Calm state", "Stability engine", "Reset flow"],
  },
  {
    name: "LoopForge",
    href: "https://loopforge-amber.vercel.app",
    badge: "Forge",
    accent: "orange",
    desc: "Prompt-to-GIF generation for NFT-ready loops, motion artifacts, and collectible visuals.",
    bullets: ["Prompt engine", "0.002 ETH fee", "Download GIF"],
  },
];

const accentMap: Record<
  Accent,
  {
    border: string;
    glow: string;
    badge: string;
    dot: string;
    button: string;
  }
> = {
  cyan: {
    border: "border-cyan-400/30",
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.15)]",
    badge: "bg-cyan-500/15 text-cyan-300 border border-cyan-400/30",
    dot: "bg-cyan-300",
    button: "group-hover:text-cyan-300",
  },
  sky: {
    border: "border-sky-400/30",
    glow: "shadow-[0_0_30px_rgba(56,189,248,0.15)]",
    badge: "bg-sky-500/15 text-sky-300 border border-sky-400/30",
    dot: "bg-sky-300",
    button: "group-hover:text-sky-300",
  },
  violet: {
    border: "border-violet-400/30",
    glow: "shadow-[0_0_30px_rgba(167,139,250,0.15)]",
    badge: "bg-violet-500/15 text-violet-300 border border-violet-400/30",
    dot: "bg-violet-300",
    button: "group-hover:text-violet-300",
  },
  emerald: {
    border: "border-emerald-400/30",
    glow: "shadow-[0_0_30px_rgba(52,211,153,0.15)]",
    badge: "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30",
    dot: "bg-emerald-300",
    button: "group-hover:text-emerald-300",
  },
  orange: {
    border: "border-orange-400/30",
    glow: "shadow-[0_0_30px_rgba(251,146,60,0.15)]",
    badge: "bg-orange-500/15 text-orange-300 border border-orange-400/30",
    dot: "bg-orange-300",
    button: "group-hover:text-orange-300",
  },
  pink: {
    border: "border-pink-400/30",
    glow: "shadow-[0_0_30px_rgba(244,114,182,0.15)]",
    badge: "bg-pink-500/15 text-pink-300 border border-pink-400/30",
    dot: "bg-pink-300",
    button: "group-hover:text-pink-300",
  },
  amber: {
    border: "border-amber-400/30",
    glow: "shadow-[0_0_30px_rgba(251,191,36,0.15)]",
    badge: "bg-amber-500/15 text-amber-300 border border-amber-400/30",
    dot: "bg-amber-300",
    button: "group-hover:text-amber-300",
  },
  rose: {
    border: "border-rose-400/30",
    glow: "shadow-[0_0_30px_rgba(251,113,133,0.15)]",
    badge: "bg-rose-500/15 text-rose-300 border border-rose-400/30",
    dot: "bg-rose-300",
    button: "group-hover:text-rose-300",
  },
  indigo: {
    border: "border-indigo-400/30",
    glow: "shadow-[0_0_30px_rgba(129,140,248,0.15)]",
    badge: "bg-indigo-500/15 text-indigo-300 border border-indigo-400/30",
    dot: "bg-indigo-300",
    button: "group-hover:text-indigo-300",
  },
};

function DistrictCard({ district }: { district: District }) {
  const styles = accentMap[district.accent];

  return (
    <a
      href={district.href}
      target="_blank"
      rel="noreferrer"
      className={`group relative overflow-hidden rounded-3xl border ${styles.border} bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${styles.glow}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.09),transparent_35%)]" />
      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${styles.badge}`}
          >
            <span className={`h-2 w-2 rounded-full ${styles.dot}`} />
            {district.badge}
          </span>

          <span className="text-xs text-white/35">District</span>
        </div>

        <h2 className="text-xl font-semibold tracking-tight text-white">
          {district.name}
        </h2>

        <p className="mt-3 text-sm leading-6 text-white/65">{district.desc}</p>

        <div className="mt-5 space-y-2">
          {district.bullets.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm text-white/75"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div
          className={`mt-6 text-sm font-medium text-white/70 transition-colors ${styles.button}`}
        >
          Enter district →
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.14),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.14),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.12),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            VoltaraCity
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            The neon command hub for the Voltara ecosystem
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            Ten districts. One skyline. Signals, oracle intelligence, on-chain
            verification, creator systems, focus tools, stabilizers, motion
            artifacts, and future machinery under one electric roof.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://bullfinderpro.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Launch flagship →
            </a>

            <a
              href="#districts"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10"
            >
              Explore districts
            </a>
          </div>
        </div>

        <div
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
          id="districts"
        >
          {districts.map((district) => (
            <DistrictCard key={district.name} district={district} />
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">
                City Status
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Voltara infrastructure is live and expanding
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
                This hub is built to scale as more districts come online. Ship,
                link, repeat. Old-school hustle, futuristic shell. Bit by bit,
                the city gets louder.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div className="text-2xl font-semibold text-white">
                  {districts.length}
                </div>
                <div className="text-xs text-white/45">Districts</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div className="text-2xl font-semibold text-white">Live</div>
                <div className="text-xs text-white/45">Status</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <div className="text-2xl font-semibold text-white">24/7</div>
                <div className="text-xs text-white/45">Pulse</div>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>VoltaraCity // Unified district access layer</p>
          <p>Built for shipping fast and glowing harder</p>
        </footer>
      </section>
    </main>
  );
}