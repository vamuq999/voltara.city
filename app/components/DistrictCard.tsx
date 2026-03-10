import type { District } from "@/app/types/district";
import { accentMap } from "@/app/lib/districtStyles";


export default function DistrictCard({ district }: { district: District }) {
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