export function Newsletter() {
  return (
    <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-8 sm:p-10">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-xl font-semibold tracking-tight text-fg">
          Subscribe to the journal
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-fg">
          Get deep technical articles on Compose, systems, and UI thinking delivered straight to your inbox. No spam, just engineering.
        </p>
        <form className="mt-6 flex max-w-md mx-auto gap-x-3">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="min-w-0 flex-auto rounded-md border-0 bg-bg px-3.5 py-2 text-fg shadow-sm ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-fg sm:text-sm sm:leading-6"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="flex-none rounded-md bg-fg px-3.5 py-2.5 text-sm font-semibold text-bg shadow-sm hover:bg-fg/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
