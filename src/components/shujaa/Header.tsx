import { useEffect, useState } from "react";
import logoAsset from "@/assets/shujaa-logo.jpg.asset.json";
import { WHATSAPP_CHANNEL } from "./WhatsAppFab";
const logo = logoAsset.url;

const nav = [
  { label: "Services", href: "#services" },
  { label: "Membership", href: "#membership" },
  { label: "Location", href: "#location" },
];

export function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? "border-b border-border bg-background/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="SHUJAA Barbershop logo"
            width={711}
            height={764}
            className="h-9 w-9 object-contain"
          />
          <span className="leading-none">
            <span className="wordmark block text-xl">SHUJAA</span>
            <span className="wordmark block text-[0.7rem] tracking-[-0.01em]">Barbershop</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label-mono transition-colors hover:text-gold-bright"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_CHANNEL}
            target="_blank"
            rel="noreferrer noopener"
            className="label-mono rounded-full border border-gold/50 px-3 py-1.5 text-[0.55rem] text-gold-bright transition-colors hover:bg-gold/10"
          >
            Join our WhatsApp Channel
          </a>
        </nav>

        <a
          href="#book"
          className="label-mono rounded-sm bg-gold px-4 py-2.5 text-primary-foreground transition-colors hover:bg-gold-bright"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
