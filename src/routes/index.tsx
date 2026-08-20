import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/shujaa/Header";
import { Hero } from "@/components/shujaa/Hero";
import { Services } from "@/components/shujaa/Services";
import { Combos } from "@/components/shujaa/Combos";
import { Membership } from "@/components/shujaa/Membership";
import { Location } from "@/components/shujaa/Location";
import { BookFooter } from "@/components/shujaa/BookFooter";

const title = "SHUJAA Barbershop — Crafted Cuts in Ruiru";
const description =
  "Premium barbering on Kiambu Road, Ruiru. Precision cuts, beard trims, facials and Regulars Club memberships. Open daily 8:00 AM – 10:00 PM.";

const SITE_URL = "https://shujaabarbershop.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "SHUJAA Barbershop",
          slogan: "Crafted Cuts. Premium Services.",
          url: SITE_URL,
          telephone: "+254756002454",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Kiambu Road, opposite King's Affordable Housing",
            addressLocality: "Ruiru",
            addressCountry: "KE",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "08:00",
              closes: "22:00",
            },
          ],
          priceRange: "Sh. 150 – Sh. 3,400",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="grain">
      <div className="grain-layer" aria-hidden="true" />
      <Header />
      <Hero />
      <Services />
      <div className="pole-divider" aria-hidden="true" />
      <Combos />
      <Membership />
      <div className="pole-divider" aria-hidden="true" />
      <Location />
      <BookFooter />
    </main>
  );
}
