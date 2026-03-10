import type { Accent } from "@/types/district";

export const accentMap: Record<
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