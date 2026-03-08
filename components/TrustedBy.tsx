"use client";

export default function TrustedBy() {
  const labels = [
    "Startups",
    "Scale-ups",
    "Enterprises",
    "Agencies",
  ];

  return (
    <section className="py-12 border-y border-border bg-card/30">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          Trusted by teams worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {labels.map((label) => (
            <span
              key={label}
              className="text-lg font-heading font-bold text-foreground/60 hover:text-foreground/80 transition-colors"
            >
              {label}
            </span>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4 opacity-80">
          Add client logos in <code className="bg-muted px-1 rounded text-[10px]">components/TrustedBy.tsx</code> when you have permission.
        </p>
      </div>
    </section>
  );
}
