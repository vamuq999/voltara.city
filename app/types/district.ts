export type Accent =
  | "cyan"
  | "sky"
  | "violet"
  | "emerald"
  | "orange"
  | "pink"
  | "amber"
  | "rose"
  | "indigo";

export type District = {
  name: string;
  href: string;
  badge: string;
  accent: Accent;
  desc: string;
  bullets: string[];
};