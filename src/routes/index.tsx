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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
