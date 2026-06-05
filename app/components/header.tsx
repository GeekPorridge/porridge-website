import { Menu } from "lucide-react";
import type { TFunc } from "@/app/type";
import FadeInRight from "../motions/fade-in-right";
import Logo from "../motions/logo";
import Nav from "../motions/nav";

const Header = async ({ t }: { t: TFunc }) => {
  return (
    <header className="fixed top-0 z-10 w-full border-b border-brand-bone/30 bg-brand-beige/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        <Logo />
        <Nav />
        <FadeInRight />
        <div className="flex items-center md:hidden">
          <button
            type="button"
            className="rounded-full p-2 text-brand-dark hover:bg-brand-bone/40 focus:outline-none"
            aria-label={t("toggleMenu")}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
