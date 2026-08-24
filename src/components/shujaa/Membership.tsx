import { Check } from "lucide-react";

const plans = [
  {
    title: "Monthly Plan",
    price: "Ksh 9,500",
    badge: "Best Value",
    items: [
      "4 haircuts",
      "4 beard trims",
      "4 full facials",
      "Pedicure",
      "Manicure",
      "Priority booking",
    ],
  },
];



export function Membership() {
  return (
    <section id="membership" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
      <p className="label-mono">03 — Membership</p>
      <h2 className="display mt-3 text-5xl sm:text-6xl">
        Regulars <span className="text-gold">Club</span>
      </h2>
      <p className="mt-4 max-w-xl text-sm text-muted-foreground">
        Come in every week. Pay once a month, skip the queue.
      </p>

      <div className="mt-12 grid gap-7 md:max-w-md">
        {plans.map((p) => (
          <div
            key={p.title}
            className={`relative rounded-sm border bg-card px-7 py-9 sm:px-9 sm:py-11 ${
              p.badge ? "border-gold/55" : "border-border"
            }`}
            style={p.badge ? { boxShadow: "var(--shadow-gold)" } : undefined}
          >
            {p.badge && (
              <span className="label-mono absolute -top-3 left-7 rounded-sm bg-gold px-3 py-1 text-[0.6rem] text-primary-foreground">
                {p.badge}
              </span>
            )}
            <h3 className="display text-4xl">{p.title}</h3>
            <p className="mt-4 flex items-baseline gap-2">
              <span className="display text-5xl text-gradient-gold">{p.price}</span>
              <span className="label-mono">/ month</span>
            </p>
            <ul className="mt-7 space-y-3">
              {p.items.map((i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground/90">
                  <Check className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
            <a
              href="#book"
              className="label-mono mt-9 inline-block rounded-sm border border-gold/60 px-7 py-3.5 text-gold-bright transition-colors hover:bg-gold/10"
            >
              Join the Club
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
