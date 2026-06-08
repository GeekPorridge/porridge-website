"use client";

const Loading = () => {
  return (
    <main className="grow">
      <div className="px-6 md:px-12 py-12 md:py-20 mx-auto max-w-7xl">
        <div className="space-y-24 md:space-y-36 animate-pulse">
          {/* Hero skeleton */}
          <section className="space-y-8">
            <div className="max-w-4xl space-y-6">
              <div className="h-4 w-48 rounded-full bg-brand-bone" />
              <div className="space-y-3">
                <div className="h-10 w-3/4 rounded-lg bg-brand-bone/70" />
                <div className="h-10 w-1/2 rounded-lg bg-brand-bone/50" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
              <div className="md:col-span-7">
                <div className="h-20 w-full rounded-xl bg-brand-bone/40" />
              </div>
            </div>
          </section>

          {/* Image skeleton */}
          <section>
            <div className="aspect-21/9 w-full rounded-2xl bg-brand-bone/50" />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Loading;
