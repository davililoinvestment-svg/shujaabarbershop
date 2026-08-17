import { useEffect, useState } from "react";
import logoAsset from "@/assets/shujaa-logo.jpg.asset.json";
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
            <span className="display block text-xl text-foreground">SHUJAA</span>
            <span className="label-mono block text-[0.55rem]">Barbershop</span>
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
