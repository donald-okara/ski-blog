export function Newsletter() {
  return (
    <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-8 sm:p-10">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-xl font-semibold tracking-tight text-fg">
          Subscribe to the journal
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-fg/80 dark:text-muted-fg">
          Get deep technical articles on Compose, systems, and UI thinking delivered straight to your inbox. No spam, just engineering.
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          className="w-full sm:w-80 rounded-md bg-fg px-3.5 py-2.5 text-sm font-semibold text-bg shadow-sm hover:bg-fg/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg transition-colors"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
