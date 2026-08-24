const combos = [
  {
    title: "Full Grooming",
    price: "Sh. 2,400",
    copy: "Cut + beard + facial + pedicure + manicure, one sitting",
  },
  { title: "VIP Cut", price: "Sh. 650", copy: "Precision cut, beard shape, extended massage" },
];


export function Combos() {
  return (
    <section className="bg-panel/60">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">
        <p className="label-mono">02 — Combo Packages</p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
          {combos.map((c) => (
            <div key={c.title} className="bg-background px-6 py-9">
              <p className="label-mono text-gold-bright">{c.price}</p>
              <h3 className="display mt-3 text-3xl">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
