import svcCut from "@/assets/svc-cut.jpg";
import svcBeard from "@/assets/svc-beard.jpg";
import svcMassage from "@/assets/svc-massage.jpg";
import svcFacial from "@/assets/svc-facial.jpg";
import svcDye from "@/assets/svc-dye.jpg";
import svcCurls from "@/assets/svc-curls.jpg";

const services = [
  {
    title: "Precision Cut",
    price: "Sh. 350",
    copy: "Clean, sharp low-taper fade, shaped to your face and finished with a razor line-up.",
    img: svcCut,
    alt: "Barber giving a client a precision low-taper fade haircut",
  },
  {
    title: "Beard Trim",
    price: "Sh. 150",
    copy: "Beard shaping and edge-up for a crisp, defined line from cheek to chin.",
    img: svcBeard,
    alt: "Barber shaping a client's beard with a trimmer",
  },
  {
    title: "After-Shave Massage",
    price: "Free",
    copy: "A 5-minute head and shoulder massage to close out the session, on the house.",
    img: svcMassage,
    alt: "Barber finishing a session with a hot towel and head massage",
  },
  {
    title: "Full Facial",
    price: "Sh. 700",
    copy: "Deep cleanse, scrub and steam finish that leaves skin fresh and even.",
    img: svcFacial,
    alt: "Barber performing a steam facial treatment on a client",
  },
  {
    title: "Dye & Colour",
    price: "Sh. 300",
    copy: "Full colour or short-hair dye work, matched and blended to your style.",
    img: svcDye,
    alt: "Barber applying hair colour to a client's hair",
  },
  {
    title: "Curling",
    price: "Sh. 350",
    copy: "Defined curl treatment for texture and hold that lasts through the week.",
    img: svcCurls,
    alt: "Close-up of freshly defined curls",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
      <p className="label-mono">01 — The Menu</p>
      <h2 className="display mt-3 text-5xl sm:text-6xl">
        Signature <span className="text-gold">Services</span>
      </h2>
      <p className="mt-4 max-w-xl text-sm text-muted-foreground">
        Every seat comes with the full treatment. Walk in, pick your ticket.
      </p>

      <ul className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <li
            key={s.title}
            className="group overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-gold/50"
            style={{ boxShadow: "var(--shadow-lift)" }}
          >
            <div className="aspect-4/3 overflow-hidden">
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                width={1000}
                height={750}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="relative">
              <div className="perforation mx-5" />
              <span className="notch-left" aria-hidden="true" />
              <span className="notch-right" aria-hidden="true" />
            </div>

            <div className="px-5 pt-6 pb-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="display text-2xl">{s.title}</h3>
                <span className="label-mono shrink-0 text-sm text-gold-bright">{s.price}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
