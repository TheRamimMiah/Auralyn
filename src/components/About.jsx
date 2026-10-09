import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2.5rem] border border-black/10 bg-white lg:grid-cols-2">
          {/* Left */}
          <div className="flex min-h-112.5 flex-col justify-between p-7 sm:p-10 lg:p-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/35">
                About Auralyn
              </p>

              <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                We believe technology should feel inevitable.
              </h2>
            </div>

            <div>
              <p className="max-w-lg text-sm leading-7 text-black/45">
                The best technology disappears into the experience. We work
                across strategy, design, engineering and artificial intelligence
                to create products that feel natural from the first interaction.
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium"
              >
                Meet Auralyn
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative min-h-112.5 overflow-hidden bg-linear-to-br from-indigo-600 via-violet-500 to-pink-300 p-7 sm:p-10 lg:p-14">
            <div className="absolute inset-0">
              <div className="absolute left-[20%] top-[15%] h-60 w-60 rounded-full bg-white/15 blur-3xl" />

              <div className="absolute bottom-[-20%] right-[-10%] h-96 w-96 rounded-full border-70 border-white/10" />

              <div className="absolute left-[30%] top-[28%] h-72 w-44 rotate-45 rounded-[5rem] border-45 border-white/15" />
            </div>

            <motion.div
              animate={{
                rotate: [0, 2, -2, 0],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[4rem] border border-white/30 bg-white/10 p-8 shadow-2xl backdrop-blur-xl sm:h-80 sm:w-80"
            >
              <div className="text-center text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Auralyn
                </p>

                <p className="mt-4 text-5xl font-semibold tracking-[-0.07em] sm:text-6xl">
                  AI
                </p>

                <p className="mt-3 text-sm text-white/60">
                  Intelligence, beautifully engineered.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
