"use client";

import { useEffect } from "react";
import { Link } from "@/i18n/routing";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const PageError = ({ error, reset }: Props) => {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <main className="grow">
      <div className="px-6 md:px-12 py-12 md:py-20 mx-auto max-w-7xl">
        <section className="flex flex-col items-center justify-center min-h-[40vh] text-center space-y-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-bone/50">
            <span className="font-serif text-2xl text-brand-accent">!</span>
          </div>
          <div className="space-y-3 max-w-md">
            <h1 className="font-serif text-3xl font-light text-brand-dark">
              Something went wrong
            </h1>
            <p className="font-sans text-sm text-brand-dark/60 leading-relaxed">
              An unexpected error occurred. Please try again or return home.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={reset}
              className="rounded-full bg-brand-dark text-brand-beige px-8 py-3.5 font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:bg-brand-accent hover:text-brand-dark cursor-pointer"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="font-mono text-xs tracking-widest uppercase text-brand-dark/50 hover:text-brand-dark transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PageError;
