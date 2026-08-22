import { Clock, MapPin, Phone } from "lucide-react";

const rows = [
  {
    icon: MapPin,
    label: "Location",
    value: "Ruiru — Kamiti Road, at Boma Mini Mart, near Liquor Mart, opposite Kings Boma Affordable Housing",
  },
  { icon: Clock, label: "Hours", value: "Open daily, 8:00 AM – 10:00 PM" },
  { icon: Phone, label: "Phone", value: "0756 002 454" },
];

export function Location() {
  return (
    <section id="location" className="scroll-mt-16 bg-panel/60">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-6 sm:py-28">
        <p className="label-mono">04 — Find Us</p>
        <h2 className="display mt-3 text-4xl sm:text-5xl">
          Walk-ins welcome <span className="text-gold">every single day</span>
        </h2>

        <div className="mt-12 space-y-px overflow-hidden rounded-sm border border-border bg-border text-left">
          {rows.map((r) => (
            <div key={r.label} className="flex items-start gap-4 bg-background px-6 py-6">
              <r.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="label-mono">{r.label}</p>
                <p className="mt-1.5 text-base text-foreground">{r.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
