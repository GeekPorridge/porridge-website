import FadeInRight from "../motions/fade-in-right";
import Logo from "../motions/logo";
import MobileNav from "../motions/mobile-nav";
import Nav from "../motions/nav";
import ThemeToggle from "../motions/theme-toggle";
import { LanguageSwitcher } from "./language-switcher";

const Header = async () => {
  return (
    <header className="fixed top-0 z-10 w-full border-b border-brand-bone/30 bg-brand-beige/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        <Logo />
        <Nav />
        <div className="hidden md:flex items-center space-x-2">
          <FadeInRight />
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
