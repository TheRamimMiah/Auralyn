import {
  Bot,
  BrainCircuit,
  Eye,
  GitBranch,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    icon: MessageSquare,
    title: "Conversational AI",
    text: "Natural interfaces for modern products and services.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    text: "Autonomous systems that reason, act and complete tasks.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    text: "Text, image and multimodal systems built around your product.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    text: "Visual intelligence for images, video and real-world environments.",
  },
  {
    icon: GitBranch,
    title: "RAG Systems",
    text: "Grounded AI that connects models to your own knowledge.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    text: "Purpose-built models for unique business problems.",
  },
];

function Capabilities() {
  return (
    <section id="capabilities" className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
              Expertise
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Built for the
              <br />
              intelligent era.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-black/45">
            We turn emerging technology into practical, elegant products that
            people can actually use.
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="group rounded-[1.75rem] border border-black/10 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
                    <Icon size={19} />
                  </div>

                  <span className="text-xs text-black/20">0{index + 1}</span>
                </div>

                <h3 className="mt-14 text-xl font-semibold tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/45">
                  {item.text}
                </p>

                <div className="mt-8 h-px w-full bg-black/5 transition-all group-hover:bg-black/15" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
