import { Facebook, Instagram, Mail, MapPin, Music2, Phone } from "lucide-react";
import logoAsset from "@/assets/shujaa-logo.jpg.asset.json";
const logo = logoAsset.url;

// EDITABLE: replace the email and social links below with the shop's real accounts.
const EMAIL = "hello@shujaabarbershop.co.ke";
const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Music2, label: "TikTok", href: "https://tiktok.com" },
];

export function BookFooter() {
  return (
    <footer id="book" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-28">
        <div className="text-center">
          <img
            src={logo}
            alt=""
            loading="lazy"
            width={711}
            height={764}
            className="mx-auto h-12 w-12 object-contain"
          />
          <h2 className="display mt-6 text-6xl sm:text-7xl">
            Book <span className="text-gold">Now</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            Call or message to lock in your chair, or find us on socials and pull up — the doors are
            open daily.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          <a
            href="tel:+254756002454"
            className="bg-card px-6 py-7 transition-colors hover:bg-panel"
          >
            <Phone className="h-5 w-5 text-gold" aria-hidden="true" />
            <p className="label-mono mt-4">Call / WhatsApp</p>
            <p className="mt-1.5 text-base text-foreground">0756 002 454</p>
          </a>
          <a href={`mailto:${EMAIL}`} className="bg-card px-6 py-7 transition-colors hover:bg-panel">
            <Mail className="h-5 w-5 text-gold" aria-hidden="true" />
            <p className="label-mono mt-4">Email</p>
            <p className="mt-1.5 break-all text-base text-foreground">{EMAIL}</p>
          </a>
          <div className="bg-card px-6 py-7">
            <MapPin className="h-5 w-5 text-gold" aria-hidden="true" />
            <p className="label-mono mt-4">Location</p>
            <p className="mt-1.5 text-base text-foreground">Kiambu Road, Ruiru</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.label}
              className="rounded-sm border border-border p-3 text-gold transition-colors hover:border-gold/60 hover:bg-gold/10"
            >
              <s.icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-y border-border bg-panel/60">
        <div className="label-mono mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-4 text-center sm:flex-row sm:justify-between sm:px-6">
          <span>Open daily · 8:00 AM – 10:00 PM</span>
          <span>Kiambu Road, Ruiru</span>
          <span>0756 002 454</span>
        </div>
      </div>

      <p className="label-mono mx-auto max-w-6xl px-5 py-7 text-center text-[0.6rem] sm:px-6">
        SHUJAA Barbershop — Crafted Cuts. Premium Services. © 2026
      </p>
    </footer>
  );
}
