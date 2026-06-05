import type { TFunc } from "@/app/type";

const Footer = async ({ t }: { t: TFunc }) => {
  console.log(t);

  return (
    <footer className="border-t border-brand-bone/45 bg-brand-beige">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16 space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-brand-bone/35 pb-8">
          <div className="text-center md:text-left">
            <span className="font-serif text-xl font-bold tracking-[0.2em]">
              GeekPorridge
            </span>
            <p className="font-mono text-[9px] tracking-wider text-brand-dark/45 uppercase mt-1">
              Refined digital solutions / Timeless print layouts
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 font-mono text-[10px] uppercase tracking-widest">
            <button
              type="button"
              className="text-brand-dark/50 hover:text-brand-dark cursor-pointer transition-colors"
            >
              About
            </button>
            <button
              type="button"
              className="text-brand-dark/50 hover:text-brand-dark cursor-pointer transition-colors"
            >
              Work
            </button>
            <button
              type="button"
              className="text-brand-dark/50 hover:text-brand-dark cursor-pointer transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-brand-dark/40 gap-4">
          <div>
            <span>
              © {new Date().getFullYear()} Alexandre Creative Studio. All
              privileges reserved.
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Paris & Zurich</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            <span>Built precisely with React + Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
