import { ChevronDown, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-fade.jpg";
import logoAsset from "@/assets/shujaa-logo.jpg.asset.json";
const logo = logoAsset.url;

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Barber shaving a detailed line-art fade into a client's hair"
        width={1600}
        height={1104}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-5 pt-24 pb-24 text-center">
        <img
          src={logo}
          alt=""
          width={711}
          height={764}
          className="h-16 w-16 object-contain sm:h-20 sm:w-20"
        />

        <h1 className="wordmark mt-6 text-[19vw] leading-none sm:text-8xl md:text-9xl">
          SHUJAA
        </h1>
        <p className="script-mark mt-1 text-[9vw] sm:text-4xl md:text-5xl">Barbershop</p>

        <p className="mt-7 max-w-xl text-lg text-foreground sm:text-xl">
          Crafted Cuts. Premium Services.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">Good Cuts, Good Mood, Good Day.</p>

        <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-panel/70 px-4 py-2 backdrop-blur-sm">
          <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
          <span className="label-mono text-[0.6rem] text-foreground/85 sm:text-[0.65rem]">
            Ruiru — Kamiti Road, at Boma Mini Mart, near Liquor Mart, opposite Kings Boma Affordable Housing
          </span>
        </div>

        <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <a
            href="#book"
            className="label-mono rounded-sm bg-gold px-8 py-4 text-primary-foreground transition-colors hover:bg-gold-bright"
          >
            Book Now
          </a>
          <a
            href="#services"
            className="label-mono rounded-sm border border-gold/60 px-8 py-4 text-gold-bright transition-colors hover:bg-gold/10"
          >
            View Services
          </a>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
          <ChevronDown className="animate-scroll-cue h-6 w-6 text-gold" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
