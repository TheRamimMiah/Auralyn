import { ArrowUpRight, Cpu, Database, Network, Zap } from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
  "Large Language Models",
  "Generative AI",
  "RAG Systems",
  "AI Agents",
  "Computer Vision",
  "Machine Learning",
  "Cloud Infrastructure",
  "API Architecture",
];

function Technology() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#111111] px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-600/30 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
              Technology
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.065em] sm:text-6xl lg:text-8xl">
              Technology that
              <span className="block text-white/35">
                makes intelligence useful.
              </span>
            </h2>
          </div>

          <div>
            <p className="max-w-lg text-base leading-7 text-white/50">
              From intelligent agents to real-time computer vision, we combine
              advanced technology with thoughtful product design to solve
              complex problems.
            </p>

            <a
              href="#capabilities"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
            >
              Explore capabilities
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Technology cards */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-4xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Cpu,
              title: "Intelligence",
              text: "Advanced models built around real product requirements.",
            },
            {
              icon: Network,
              title: "Infrastructure",
              text: "Fast, reliable systems designed for scale.",
            },
            {
              icon: Database,
              title: "Data",
              text: "Useful data pipelines that drive better decisions.",
            },
            {
              icon: Zap,
              title: "Automation",
              text: "Agents and workflows that operate with less friction.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.035] p-6 transition-colors hover:bg-white/[0.07] sm:p-8"
              >
                <Icon size={21} className="text-white/70" />

                <h3 className="mt-14 text-xl font-medium tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Technology marquee */}
        <div className="mt-10 overflow-hidden border-y border-white/10 py-5">
          <div className="flex min-w-max animate-[marquee_22s_linear_infinite] gap-8">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="flex items-center gap-8 text-sm text-white/35"
              >
                <span>{tech}</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

export default Technology;
