import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your product, users, goals and the problem worth solving.",
  },
  {
    number: "02",
    title: "Design",
    text: "We turn strategy into a clear product experience and technical direction.",
  },
  {
    number: "03",
    title: "Build",
    text: "Our team engineers the product with speed, quality and scalability in mind.",
  },
  {
    number: "04",
    title: "Launch",
    text: "We ship, measure and continuously improve the product after launch.",
  },
];

function Process() {
  return (
    <section
      id="process"
      className="bg-[#e9e7e1] px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
              Our process
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-6xl">
              Simple by
              <br />
              design.
            </h2>
          </div>

          <div>
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group border-t border-black/10 py-7 last:border-b sm:py-9"
              >
                <div className="grid gap-5 sm:grid-cols-[80px_1fr_auto] sm:items-start">
                  <span className="text-xs font-semibold text-black/30">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-black/45">
                      {step.text}
                    </p>
                  </div>

                  <ArrowRight
                    size={20}
                    className="hidden transition-transform group-hover:translate-x-1 sm:block"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
