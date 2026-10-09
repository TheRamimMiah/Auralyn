import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-30">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-violet-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 top-48 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 flex justify-center"
        ></motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto max-w-5xl text-center"
        >
          <h1 className="text-balance text-[clamp(3.2rem,9vw,8.4rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
            We build the
            <span className="block bg-linear-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              intelligent future.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-balance text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
            Auralyn combines artificial intelligence, engineering and design to
            create digital products that feel as powerful as they are simple.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#work"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Explore our work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#contact"
              className="w-full rounded-full border border-black/10 bg-white px-6 py-3.5 text-center text-sm font-medium transition-colors hover:bg-black/5 sm:w-auto"
            >
              Start a project
            </a>
          </div>
        </motion.div>

        {/* Device showcase */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto mt-20 max-w-6xl sm:mt-24 lg:mt-28"
        >
          {/* Main laptop */}
          <div className="relative mx-auto w-full max-w-5xl rounded-4xl border-8 border-neutral-900 bg-neutral-900 p-1 shadow-2xl sm:rounded-[2.5rem] sm:border-10">
            {/* Browser */}
            <div className="overflow-hidden rounded-[1.25rem] bg-white sm:rounded-[1.7rem]">
              {/* Top bar */}
              <div className="flex h-9 items-center justify-between border-b border-black/5 px-4 sm:h-11 sm:px-6">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-black/15" />
                  <span className="h-2 w-2 rounded-full bg-black/15" />
                  <span className="h-2 w-2 rounded-full bg-black/15" />
                </div>

                <div className="hidden gap-5 text-[9px] font-medium text-black/45 sm:flex">
                  <span>Technology</span>
                  <span>Products</span>
                  <span>Expertise</span>
                  <span>Work</span>
                </div>

                <div className="h-5 w-14 rounded-full border border-black/10 sm:w-20" />
              </div>

              {/* Screen */}
              <div className="relative min-h-87.5 overflow-hidden bg-linear-to-br from-violet-500 via-indigo-500 to-cyan-300 p-6 sm:min-h-120 sm:p-10 lg:min-h-140 lg:p-14">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

                <div className="absolute -bottom-20 left-[25%] h-64 w-64 rounded-full bg-fuchsia-300/40 blur-3xl" />

                {/* abstract 3D ribbons */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="absolute right-[-10%] top-[22%] h-44 w-[75%] rotate-[-14deg] rounded-[999px] border-26 border-white/20 blur-sm sm:h-60 sm:border-38" />
                  <div className="absolute right-[-15%] top-[42%] h-36 w-[80%] rotate-18 rounded-[999px] border-22 border-cyan-100/25 sm:h-52 sm:border-32" />
                </div>

                <div className="relative z-10 max-w-xl">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/65 sm:text-xs">
                    Fast, secure and scalable
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                    Intelligent software
                    <br />
                    for a new era.
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-6 text-white/70 sm:text-base">
                    We empower teams to turn ambitious ideas into products
                    powered by modern intelligence.
                  </p>

                  <button className="mt-7 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-black shadow-lg transition-transform hover:-translate-y-1">
                    Explore Auralyn
                  </button>
                </div>

                {/* Floating stat */}
                <div className="absolute bottom-6 right-6 hidden rounded-2xl border border-white/30 bg-white/15 p-4 text-white backdrop-blur-xl sm:block">
                  <p className="text-3xl font-semibold tracking-tighter">10x</p>
                  <p className="mt-1 text-[10px] text-white/60">
                    faster product iteration
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop base */}
          <div className="mx-auto h-3 w-[78%] rounded-b-3xl bg-linear-to-b from-neutral-700 to-neutral-950 shadow-xl sm:h-5" />

          {/* Floating mini cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-2 top-[20%] hidden w-48 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur-xl md:block lg:-left-10"
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/40">
              AI systems
            </p>
            <p className="mt-2 text-lg font-semibold tracking-tight">
              Think beyond
            </p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/5">
              <div className="h-full w-4/5 rounded-full bg-black" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-2 bottom-[12%] hidden w-52 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-xl backdrop-blur-xl md:block lg:-right-12"
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-black/40">
              Computer vision
            </p>
            <div className="mt-3 grid grid-cols-4 gap-1.5">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className={`aspect-square rounded-lg ${
                    item % 2 === 0 ? "bg-violet-400" : "bg-black/5"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-black/35">
          <ArrowDown size={14} />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}

export default Hero;
