import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "AI PLATFORM",
    title: "Syntra",
    description:
      "An intelligent workspace designed around human and AI collaboration.",
    gradient: "bg-gradient-to-br from-violet-600 via-indigo-500 to-cyan-300",
  },
  {
    number: "02",
    category: "COMPUTER VISION",
    title: "Nexa Vision",
    description:
      "Real-time visual intelligence for a new generation of applications.",
    gradient: "bg-gradient-to-br from-slate-900 via-blue-900 to-violet-600",
  },
];

function BrowserMockup({ gradient }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-2xl">
      {/* Browser header */}
      <div className="flex h-11 items-center justify-between border-b border-black/5 bg-white px-4 sm:h-12 sm:px-5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
        </div>

        <div className="hidden items-center gap-6 text-[9px] font-medium text-black/35 sm:flex">
          <span>Workspace</span>
          <span>Projects</span>
          <span>Insights</span>
          <span>Agents</span>
        </div>

        <div className="h-6 w-20 rounded-full border border-black/10 bg-black/2" />
      </div>

      {/* Main interface */}
      <div
        className={`relative min-h-115 overflow-hidden ${gradient} p-5 sm:min-h-135 sm:p-7 lg:min-h-145 lg:p-9`}
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 left-20 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />

        {/* Decorative shapes */}
        <div className="pointer-events-none absolute right-[-10%] top-[18%] h-44 w-[65%] rotate-[-18deg] rounded-full border-20 border-white/10 blur-sm sm:h-56 sm:border-28" />

        <div className="pointer-events-none absolute bottom-[10%] left-[18%] h-40 w-[65%] rotate-12 rounded-full border-18 border-white/10 sm:h-52 sm:border-24" />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/55">
                AI workspace
              </p>

              <p className="mt-1 text-xs font-medium text-white/80">
                Good morning, Alex
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              <span className="text-[9px] text-white/70">Systems online</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="mt-10 max-w-xl sm:mt-14">
            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/45">
              Intelligent workspace
            </p>

            <h4 className="mt-3 text-4xl font-semibold leading-[0.92] tracking-[-0.065em] text-white sm:text-5xl lg:text-6xl">
              Turn ideas into
              <br />
              intelligent actions.
            </h4>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
              Ask questions, analyze information and automate complex work from
              one intelligent workspace.
            </p>
          </div>

          {/* AI command bar */}
          <div className="mt-8 max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-xl sm:mt-10">
            <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-black">
                ✦
              </div>

              <span className="flex-1 text-xs text-white/45 sm:text-sm">
                Ask Auralyn anything...
              </span>

              <div className="hidden rounded-lg border border-white/10 px-2 py-1 text-[8px] text-white/35 sm:block">
                ⌘ K
              </div>
            </div>
          </div>

          {/* Intelligence panels */}
          <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
            {/* Panel 1 */}
            <div className="rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md sm:p-4">
              <div className="flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-[0.12em] text-white/40">
                  Agent
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              </div>

              <div className="mt-4 flex items-end gap-1">
                <div className="h-4 w-1 rounded-full bg-white/30" />
                <div className="h-7 w-1 rounded-full bg-white/45" />
                <div className="h-10 w-1 rounded-full bg-white/70" />
                <div className="h-6 w-1 rounded-full bg-white/40" />
                <div className="h-8 w-1 rounded-full bg-white/55" />
              </div>

              <p className="mt-3 text-[9px] text-white/55">Working...</p>
            </div>

            {/* Panel 2 */}
            <div className="rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md sm:p-4">
              <span className="text-[8px] uppercase tracking-[0.12em] text-white/40">
                Insights
              </span>

              <div className="mt-4 flex items-end gap-1">
                <div className="h-5 flex-1 rounded-t bg-white/15" />
                <div className="h-8 flex-1 rounded-t bg-white/25" />
                <div className="h-11 flex-1 rounded-t bg-white/45" />
                <div className="h-7 flex-1 rounded-t bg-white/25" />
                <div className="h-10 flex-1 rounded-t bg-white/40" />
              </div>

              <p className="mt-3 text-[9px] text-white/55">+28.4%</p>
            </div>

            {/* Panel 3 */}
            <div className="rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md sm:p-4">
              <span className="text-[8px] uppercase tracking-[0.12em] text-white/40">
                Tasks
              </span>

              <div className="mt-4 space-y-2">
                <div className="h-2 rounded-full bg-white/20" />
                <div className="h-2 w-4/5 rounded-full bg-white/30" />
                <div className="h-2 w-3/5 rounded-full bg-white/15" />
              </div>

              <p className="mt-3 text-[9px] text-white/55">18 completed</p>
            </div>
          </div>
        </div>

        {/* Floating insight card */}
        <div className="absolute bottom-6 right-5 hidden w-48 rounded-2xl border border-white/20 bg-white/15 p-4 shadow-2xl backdrop-blur-xl sm:block">
          <div className="flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.15em] text-white/45">
              AI insight
            </span>

            <span className="text-[9px] text-white/40">02:14</span>
          </div>

          <p className="mt-3 text-xs leading-5 text-white/75">
            Your workflow can be automated by 63%.
          </p>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[63%] rounded-full bg-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedWork() {
  return (
    <section id="work" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
              Selected work
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Ideas we&apos;ve
              <br />
              brought to life.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/45">
            A small selection of digital experiences and intelligent systems
            built with ambitious teams.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className={`grid gap-7 lg:grid-cols-[0.8fr_1.2fr] ${
                index % 2 === 1 ? "lg:grid-cols-[1.2fr_0.8fr]" : ""
              }`}
            >
              <div
                className={`flex flex-col justify-between rounded-4xl border border-black/10 bg-white p-7 sm:p-10 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-black/30">
                      {project.category}
                    </span>

                    <span className="text-xs text-black/25">
                      {project.number}
                    </span>
                  </div>

                  <h3 className="mt-16 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-black/45">
                    {project.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-medium"
                >
                  View project
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <BrowserMockup gradient={project.gradient} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
