import svcCut from "@/assets/svc-cut.jpeg.asset.json";
import svcTeens from "@/assets/svc-teens.jpeg.asset.json";
import svcKids from "@/assets/svc-kids.jpeg.asset.json";
import svcDyeShort from "@/assets/svc-dye-short.jpeg.asset.json";
import svcDyeLong from "@/assets/svc-dye-long.jpeg.asset.json";
import svcCurls from "@/assets/svc-curls.jpeg.asset.json";
import svcRetouch from "@/assets/svc-retouch.jpeg.asset.json";
import svcBeard from "@/assets/svc-beard.jpeg.asset.json";
import svcFacial from "@/assets/svc-facial.jpeg.asset.json";
import svcScrub from "@/assets/svc-scrub.jpeg.asset.json";
import svcMassage from "@/assets/svc-massage.jpg.asset.json";
import svcPedicure from "@/assets/svc-pedicure.jpeg.asset.json";
import svcManicure from "@/assets/svc-manicure.jpeg.asset.json";

const services = [
  {
    title: "Adults Precision Cut",
    price: "Sh. 350",
    copy: "Clean, sharp low-taper fade, shaped to your face and finished with a razor line-up.",
    img: svcCut.url,
    alt: "Sharp taper fade cut on a client at the barbershop",
  },
  {
    title: "Teens Precision Cut",
    price: "Sh. 200",
    copy: "A crisp taper and line-up built for teens, styled clean and school-ready.",
    img: svcTeens.url,
    alt: "Teenage client with a clean taper fade and sponge curls",
  },
  {
    title: "Kids Precision Cut",
    price: "Sh. 150",
    copy: "Gentle, patient work for the young ones — neat shape, sharp edges.",
    img: svcKids.url,
    alt: "Young boy with a fresh taper fade and defined line-up",
  },
  {
    title: "Dye Short Hair",
    price: "Sh. 300",
    copy: "Short-hair colour work, matched and blended clean into your fade.",
    img: svcDyeShort.url,
    alt: "Client with blonde dyed short curls and a clean fade",
  },
  {
    title: "Dye Long Hair",
    price: "Sh. 500",
    copy: "Full colour on longer hair, applied evenly for a rich, consistent finish.",
    img: svcDyeLong.url,
    alt: "Client with a full blonde dyed curly top and low fade",
  },
  {
    title: "Curling",
    price: "Sh. 350",
    copy: "Defined curl treatment for texture and hold that lasts through the week.",
    img: svcCurls.url,
    alt: "Client with defined curls and a faded taper",
  },
  {
    title: "Retouch",
    price: "Sh. 1,000",
    copy: "Dreadlocks retwist and retouch, tightened at the root and neatly finished.",
    img: svcRetouch.url,
    alt: "Client with freshly retwisted dreadlocks and a clean line-up",
  },
  {
    title: "Beard Trim",
    price: "Sh. 150",
    copy: "Beard shaping and edge-up for a crisp, defined line from cheek to chin.",
    img: svcBeard.url,
    alt: "Close-up of a full beard shaped with a clean edge-up",
  },
  {
    title: "Full Facial",
    price: "Sh. 850",
    copy: "Deep cleanse, scrub and steam finish that leaves skin fresh and even.",
    img: svcFacial.url,
    alt: "Client having a deep cleanse facial treatment applied",
  },
  {
    title: "Facial Scrub",
    price: "Sh. 350",
    copy: "Quick exfoliating scrub that lifts dead skin and evens out your tone.",
    img: svcScrub.url,
    alt: "Client receiving an exfoliating facial scrub treatment",
  },
  {
    title: "5-Minute Massage",
    price: "Free",
    copy: "A 5-minute head and shoulder massage to close out the session, on the house.",
    img: svcMassage.url,
    alt: "Client receiving a hot towel and head massage after a cut",
  },
  {
    title: "Pedicure",
    price: "Sh. 850",
    copy: "Full soak, cuticle work and buff for clean, well-kept feet.",
    img: svcPedicure.url,
    alt: "Pedicure treatment with toe separators and polish being applied",
  },
  {
    title: "Manicure",
    price: "Sh. 400",
    copy: "Nails shaped, cuticles tidied and buffed to a clean natural finish.",
    img: svcManicure.url,
    alt: "Hands after a manicure with neatly shaped, buffed nails",
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
