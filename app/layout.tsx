// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voltara City",
  description: "Voltara City — Unified ecosystem of intelligent tools.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Voltara City",
    description: "A calm, immersive hub for live Voltara tools.",
    url: "https://voltaralabs.vercel.app",
    siteName: "Voltara City",
    type: "website",
  },
  metadataBase: new URL("https://voltaralabs.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-sky-400/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}