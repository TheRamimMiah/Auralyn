import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="px-4 pb-6 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 border-t border-black/10 py-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-semibold tracking-[-0.04em]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white">
                A
              </span>
              Auralyn
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-black/40">
              AI, technology and digital products for the intelligent era.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:flex sm:gap-7">
            <a href="#products" className="text-black/45 hover:text-black">
              Products
            </a>
            <a href="#technology" className="text-black/45 hover:text-black">
              Technology
            </a>
            <a href="#work" className="text-black/45 hover:text-black">
              Work
            </a>
            <a
              href="mailto:hello@auralyn.com"
              className="inline-flex items-center gap-1 text-black/45 hover:text-black"
            >
              Contact
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-black/10 py-6 text-xs text-black/30 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Auralyn Studio. All rights reserved.</span>
          <span>Intelligence, beautifully engineered.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
