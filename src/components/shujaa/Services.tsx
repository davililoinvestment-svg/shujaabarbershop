import svcCut from "@/assets/svc-cut.jpeg.asset.json";
import svcBeard from "@/assets/svc-beard.jpeg.asset.json";
import svcMassage from "@/assets/svc-massage.jpg.asset.json";
import svcFacial from "@/assets/svc-facial.jpeg.asset.json";
import svcDye from "@/assets/svc-dye.jpeg.asset.json";
import svcCurls from "@/assets/svc-curls.jpeg.asset.json";

const services = [
  {
    title: "Precision Cut",
    price: "Sh. 350",
    copy: "Clean, sharp low-taper fade, shaped to your face and finished with a razor line-up.",
    img: svcCut.url,
    alt: "Sharp taper fade cut on a client at the barbershop",
  },
  {
    title: "Beard Trim",
    price: "Sh. 150",
    copy: "Beard shaping and edge-up for a crisp, defined line from cheek to chin.",
    img: svcBeard.url,
    alt: "Close-up of a full beard shaped with a clean edge-up",
  },
  {
    title: "After-Shave Massage",
    price: "Free",
    copy: "A 5-minute head and shoulder massage to close out the session, on the house.",
    img: svcMassage.url,
    alt: "Client receiving a hot towel and head massage after a cut",
  },
  {
    title: "Full Facial",
    price: "Sh. 700",
    copy: "Deep cleanse, scrub and steam finish that leaves skin fresh and even.",
    img: svcFacial.url,
    alt: "Client having a deep cleanse facial treatment applied",
  },
  {
    title: "Dye & Colour",
    price: "Sh. 300",
    copy: "Full colour or short-hair dye work, matched and blended to your style.",
    img: svcDye.url,
    alt: "Client with a bold coloured afro and clean fade",
  },
  {
    title: "Curling",
    price: "Sh. 350",
    copy: "Defined curl treatment for texture and hold that lasts through the week.",
    img: svcCurls.url,
    alt: "Client with defined curls and a faded taper",
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
