import { ArrowUpRight, Brain, Eye, Mic2 } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    number: "01",
    icon: Mic2,
    title: "Conversational AI",
    description:
      "Intelligent interfaces that understand context, intent and natural human language.",
    gradient: "from-violet-200 via-white to-fuchsia-200",
    label: "NATURAL LANGUAGE",
  },
  {
    number: "02",
    icon: Eye,
    title: "Computer Vision",
    description:
      "Systems that see, understand and react to the world through intelligent visual processing.",
    gradient: "from-cyan-200 via-white to-blue-200",
    label: "VISUAL INTELLIGENCE",
  },
  {
    number: "03",
    icon: Brain,
    title: "AI Automation",
    description:
      "Agentic workflows that transform repetitive work into fast, autonomous systems.",
    gradient: "from-orange-200 via-white to-pink-200",
    label: "AUTONOMOUS SYSTEMS",
  },
];

function Products() {
  return (
    <section id="products" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
            Products
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl lg:text-7xl">
            What&apos;s possible
            <br />
            with Auralyn.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.article
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-4xl border border-black/10 bg-white shadow-sm"
              >
                <div
                  className={`relative h-80 overflow-hidden bg-linear-to-br ${product.gradient} p-6 sm:h-96`}
                >
                  <div className="absolute right-5 top-5 text-xs font-medium text-black/35">
                    {product.number}
                  </div>

                  <div className="absolute left-6 top-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 backdrop-blur">
                      <Icon size={21} />
                    </div>
                  </div>

                  {/* Abstract visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-44 w-44 rotate-12 rounded-[2.5rem] bg-white/50 shadow-xl backdrop-blur-xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-black/10 blur-xl" />

                      <div className="absolute left-7 top-7 h-24 w-24 rounded-full border-18 border-black/10" />

                      <div className="absolute bottom-7 right-7 h-12 w-12 rounded-xl bg-black/10" />
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40">
                    {product.label}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                        {product.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-black/50">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all group-hover:bg-black group-hover:text-white">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
