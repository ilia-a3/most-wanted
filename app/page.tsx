"use client";

import { motion } from "motion/react";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:px-10">
          <Link href="/" className="group flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.8)] transition-all group-hover:scale-125" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em]">
              MOST<span className="text-red-500"> WANTED</span>
            </span>
          </Link>

          <div className="hidden items-center gap-10 text-xs uppercase tracking-[0.2em] text-white/60 md:flex">
            <a href="#events" className="transition hover:text-white">
              Events
            </a>

            <a href="#community" className="transition hover:text-white">
              Community
            </a>

            <a href="#hypercars" className="transition hover:text-white">
              Hypercars
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/40 sm:block">
              Sydney / Australia
            </span>

            <div className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/5 px-4 py-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-red-400">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </nav>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        {/* Background image */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-2.jpg')",
          }}
        />

        {/* Dark cinematic overlay */}

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/30" />

        {/* Red glow */}

        <div className="pointer-events-none absolute -right-40 top-1/3 h-[600px] w-[600px] rounded-full bg-red-600/20 blur-[180px]" />

        {/* Futuristic grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Hero content */}

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 lg:px-10 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-red-500" />

            <span className="text-xs uppercase tracking-[0.35em] text-white/60">
              A new automotive collective
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-6xl text-[17vw] font-black uppercase leading-[0.78] tracking-[-0.07em] sm:text-[14vw] lg:text-[11vw]"
          >
            DRIVE
            <br />
            <span className="text-red-500">THE</span> CULTURE.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-col justify-between gap-8 border-t border-white/20 pt-6 sm:flex-row sm:items-end"
          >
            <p className="max-w-md text-sm leading-7 text-white/60 sm:text-base">
              A new generation of automotive events, experiences and community —
              built around the cars that bring us together.
            </p>

            <a
              href="#coming-soon"
              className="group flex items-center gap-5 text-xs uppercase tracking-[0.25em]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all group-hover:border-red-500 group-hover:bg-red-500">
                ↓
              </span>
              Explore what's coming
            </a>
          </motion.div>
        </div>

        {/* Side index */}

        <div className="absolute bottom-10 right-10 hidden text-right lg:block">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            EST. 2026
          </p>

          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
            01 / 04
          </p>
        </div>
      </section>
      {/* =========================================================
          COMING SOON
      ========================================================= */}
      <section
        id="coming-soon"
        className="relative overflow-hidden border-y border-white/10 bg-[#080808]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.12),transparent_50%)]" />

        <div className="relative mx-auto max-w-[1600px] px-6 py-28 lg:px-10 lg:py-40">
          <motion.div {...fadeUp}>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]" />

              <span className="text-xs uppercase tracking-[0.3em] text-red-400">
                Platform in development
              </span>
            </div>

            <h2 className="max-w-5xl text-5xl font-bold uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-[9vw]">
              Something
              <br />
              <span className="text-white/20">bigger is</span>
              <br />
              coming.
            </h2>
          </motion.div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <motion.div {...fadeUp}>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                The beginning
              </p>
            </motion.div>

            <motion.div {...fadeUp}>
              <p className="max-w-2xl text-xl leading-relaxed text-white/60 lg:text-2xl">
                We're building more than another car meet. A place where
                enthusiasts, collectors, builders and extraordinary machines
                come together.
              </p>

              <p className="mt-8 max-w-xl text-sm leading-7 text-white/35">
                The full platform is currently being built. Events, community
                experiences and access to some of Australia's most incredible
                cars are on the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* =========================================================
          EVENTS
      ========================================================= */}
      <section id="events" className="border-b border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-[1600px] px-6 py-28 lg:px-10 lg:py-40">
          <motion.div
            {...fadeUp}
            className="mb-20 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-red-500">
                01 / Events
              </span>

              <h2 className="mt-6 text-5xl font-bold uppercase tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                Built for
                <br />
                <span className="text-white/20">the culture.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/40">
              From intimate gatherings to major automotive experiences, we're
              creating events designed around the people and cars that make the
              culture what it is.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="group relative overflow-hidden border border-white/10"
          >
            <div className="aspect-[16/8] bg-gradient-to-br from-zinc-900 to-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[12vw] font-black uppercase tracking-[-0.08em] text-white/[0.025]">
                  EVENTS
                </span>
              </div>

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.15),transparent_40%)]" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-between gap-6 border-t border-white/10 bg-black/40 p-6 backdrop-blur-xl sm:flex-row sm:items-center lg:p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-red-400">
                  Coming soon
                </p>

                <h3 className="mt-2 text-2xl font-semibold uppercase">
                  Our first chapter
                </h3>
              </div>

              <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                Event details dropping soon
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      {/* =========================================================
          HYPERCARS
      ========================================================= */}
      <section id="hypercars" className="bg-red-600 text-black">
        <div className="mx-auto max-w-[1600px] px-6 py-28 sm:px-8 lg:px-12 lg:py-40">
          <motion.div
            {...fadeUp}
            className="flex flex-col gap-20 xl:flex-row xl:items-end xl:justify-between"
          >
            {/* LEFT */}
            <div className="min-w-0">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
                02 / Experiences
              </span>

              <h2 className="mt-8 text-6xl font-black uppercase leading-[0.85] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
                Bring
                <br />
                the
                <br />
                extraordinary.
              </h2>
            </div>

            {/* RIGHT */}
            <div className="w-full max-w-md shrink-0">
              <p className="text-xl font-medium leading-relaxed text-black/70">
                Want to make your event unforgettable?
              </p>

              <p className="mt-6 text-sm leading-7 text-black/60">
                We're building a network that will allow events, businesses and
                private experiences to access some seriously special machinery.
              </p>

              <button className="cursor-pointer mt-10 inline-flex items-center gap-4 border border-black/30 px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-black hover:text-white">
                Hypercar enquiries
                <span>↗</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* =========================================================
          COMMUNITY
      ========================================================= */}
      <section id="community" className="border-b border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-[1600px] px-6 py-28 lg:px-10 lg:py-40">
          <motion.div {...fadeUp}>
            <span className="text-xs uppercase tracking-[0.3em] text-red-500">
              03 / Community
            </span>

            <h2 className="mt-6 max-w-6xl text-5xl font-bold uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[8vw]">
              It's not
              <br />
              about the
              <br />
              <span className="text-white/20">cars.</span>
            </h2>
          </motion.div>

          <div className="mt-24 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "MEET",
                text: "Find people who are just as obsessed with cars as you are.",
              },
              {
                number: "02",
                title: "EXPERIENCE",
                text: "Get closer to cars, events and experiences you won't forget.",
              },
              {
                number: "03",
                title: "BELONG",
                text: "Build something bigger than a collection of cars.",
              },
            ].map((item) => (
              <motion.div
                key={item.number}
                whileHover={{ y: -6 }}
                className="bg-[#080808] p-8 transition-colors hover:bg-[#0d0d0d] lg:p-12"
              >
                <span className="text-xs text-red-500">{item.number}</span>

                <h3 className="mt-20 text-3xl font-bold uppercase tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/40">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* =========================================================
          FUTURE PLATFORM TEASER
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#080808]">
        <div className="mx-auto max-w-[1600px] px-6 py-28 lg:px-10 lg:py-40">
          <motion.div {...fadeUp}>
            <span className="text-xs uppercase tracking-[0.3em] text-red-500">
              The future
            </span>

            <h2 className="mt-6 text-5xl font-bold uppercase tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              One place.
              <br />
              <span className="text-white/20">Everything automotive.</span>
            </h2>
          </motion.div>

          {/* Fake platform UI */}

          <motion.div
            {...fadeUp}
            className="relative mt-20 overflow-hidden border border-white/10 bg-black p-3 shadow-2xl shadow-red-950/20 lg:p-5"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-[#0b0b0b]">
              {/* fake UI */}

              <div className="absolute inset-0 opacity-50 blur-[2px]">
                <div className="flex h-16 items-center justify-between border-b border-white/10 px-6">
                  <div className="h-2 w-24 bg-white/20" />

                  <div className="flex gap-3">
                    <div className="h-2 w-12 bg-white/10" />
                    <div className="h-2 w-12 bg-white/10" />
                    <div className="h-2 w-12 bg-white/10" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 p-6">
                  <div className="h-48 bg-white/[0.04]" />
                  <div className="h-48 bg-white/[0.04]" />
                  <div className="h-48 bg-white/[0.04]" />
                </div>
              </div>

              {/* centre message */}

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,1)]" />

                  <span className="text-xs uppercase tracking-[0.3em] text-red-400">
                    In development
                  </span>
                </div>

                <h3 className="text-center text-3xl font-bold uppercase tracking-[-0.04em] sm:text-5xl">
                  The full experience
                  <br />
                  is coming.
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[160px]" />

        <div className="relative mx-auto max-w-[1200px] px-6 py-32 text-center lg:py-48">
          <motion.div {...fadeUp}>
            <span className="text-xs uppercase tracking-[0.35em] text-red-500">
              Be there from the beginning
            </span>

            <h2 className="mt-8 text-5xl font-black uppercase leading-[0.85] tracking-[-0.07em] sm:text-7xl lg:text-[8vw]">
              The next era
              <br />
              starts here.
            </h2>

            <p className="mx-auto mt-10 max-w-xl text-sm leading-7 text-white/40">
              Follow along as we build the community. Events, experiences and
              something much bigger are on the way.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="cursor-pointer bg-red-600 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-red-500">
                Follow the journey
              </button>

              <button className="cursor-pointer border border-white/15 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:border-white/40">
                Get in touch
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-10 px-6 py-10 sm:flex-row sm:items-end lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]" />

              <span className="text-sm font-semibold uppercase tracking-[0.3em]">
                MOST<span className="text-red-500"> WANTED</span>
              </span>
            </div>

            <p className="mt-4 text-xs text-white/30">
              Automotive culture. Reimagined.
            </p>
          </div>

          <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] text-white/30">
            <a
              href="https://www.instagram.com/w4nted_au?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              className="transition hover:text-white"
            >
              Instagram
            </a>

            <a href="#" className="transition hover:text-white">
              TikTok
            </a>

            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
