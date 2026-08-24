import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);

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
            <span className="wordmark block text-xl">SHUJ<span className="text-gold-bright">AA</span></span>
            <span className="script-mark block text-sm">Barbershop</span>
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

        <div className="flex items-center gap-2">
          <a
            href="#book"
            className="label-mono rounded-sm bg-gold px-4 py-2.5 text-primary-foreground transition-colors hover:bg-gold-bright"
          >
            Book Now
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-sm border border-border p-2 text-foreground md:hidden"
          >
            {open ? <Menu className="hidden h-5 w-5" /> : null}
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-surface-grey md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="label-mono border-b border-border/40 py-3 text-foreground last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}


      <a
        href={WHATSAPP_CHANNEL}
        target="_blank"
        rel="noreferrer noopener"
        className="label-mono absolute left-1/2 top-full -translate-x-1/2 whitespace-nowrap rounded-b-full border border-gold/50 border-t-0 bg-panel/95 px-4 py-2 text-[0.5rem] text-gold-bright shadow-[var(--shadow-gold)] backdrop-blur-sm transition-colors hover:bg-gold/15 sm:text-[0.55rem]"
      >
        Join our WhatsApp Channel
      </a>
    </header>
  );
}
