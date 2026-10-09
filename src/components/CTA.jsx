import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section id="contact" className="px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pb-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-black px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        {/* glows */}
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-violet-600/40 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-400/30 blur-[120px]" />

        {/* decorative rings */}
        <div className="pointer-events-none absolute right-[-10%] top-[-15%] h-112.5 w-112.5 rounded-full border border-white/10 sm:h-150 sm:w-150" />
        <div className="relative z-10 max-w-4xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
            <Mail size={20} />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-5xl font-semibold leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-8xl"
          >
            Have an idea
            <br />
            worth building?
          </motion.h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/45">
            Tell us what you are building, what is difficult, or where you want
            to go next. Let&apos;s make something intelligent.
          </p>

          <a
            href="mailto:hello@auralyn.com"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
          >
            Start a conversation
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
