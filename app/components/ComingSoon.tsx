"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface ComingSoonProps {
  title: string;
  description: string;
  number?: string;
}

export default function ComingSoon({
  title,
  description,
  number = "01",
}: ComingSoonProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6 text-white">
      {/* Red glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Label */}
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-red-500" />

            <span className="text-xs uppercase tracking-[0.3em] text-red-400">
              Coming Soon
            </span>
          </div>

          {/* Main content */}
          <div className="mt-10 grid gap-12 md:grid-cols-[1.5fr_1fr] md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/25">
                {number} / 04
              </p>

              <h1 className="text-6xl font-black uppercase leading-[0.85] tracking-[-0.07em] sm:text-8xl lg:text-9xl">
                {title}
              </h1>
            </div>

            <div>
              <p className="text-lg leading-8 text-white/50">{description}</p>

              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-4 border border-white/15 px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:border-red-500 hover:bg-red-500"
              >
                <span>←</span>
                Back home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-8 left-6 right-6 flex justify-between text-[9px] uppercase tracking-[0.3em] text-white/20 sm:left-10 sm:right-10">
        <span>YOURNAME</span>
        <span>EST. 2026</span>
      </div>
    </main>
  );
}
