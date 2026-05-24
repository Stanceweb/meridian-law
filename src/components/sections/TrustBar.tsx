export function TrustBar() {
  const recognitions = [
    "Legal 500",
    "Chambers & Partners",
    "Super Lawyers",
    "Martindale-Hubbell AV Rated",
    "Best Lawyers in America",
  ];

  return (
    <section className="bg-surface-mid border-y border-surface-border py-6" aria-label="Recognition and awards">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-gold shrink-0 whitespace-nowrap">
            Recognized for Excellence
          </p>
          <div className="w-px h-6 bg-surface-border hidden sm:block" aria-hidden="true" />
          <ul
            className="flex flex-wrap justify-center sm:justify-start items-center gap-x-8 gap-y-3"
            role="list"
          >
            {recognitions.map((name) => (
              <li key={name}>
                <span className="text-sm font-medium text-text-muted tracking-wide">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
