import DistrictCard from "@/app/components/DistrictCard";
import { districts } from "@/app/data/districts";

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