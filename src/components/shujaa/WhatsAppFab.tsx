export const WHATSAPP_CHAT =
  "https://wa.me/254756002454?text=Hello%2C%20I%27d%20like%20to%20book%20an%20appointment%20and%20maybe%20a%20question%3F";
export const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029VbDMeS7CXC3KTPlXH82l";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_CHAT}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with SHUJAA Barbershop on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-[var(--shadow-gold)] transition-colors hover:bg-gold-bright"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-7 w-7"
      >
        <path d="M17.47 14.38c-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.15-.65.15-.19.29-.75.94-.92 1.13-.17.19-.34.21-.63.07-.29-.15-1.09-.4-2.08-1.28-.77-.69-1.29-1.54-1.44-1.83-.15-.29-.02-.45.12-.6.14-.14.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.49-.65-.5h-.55c-.19 0-.5.07-.76.36-.26.29-1 .97-1 2.37 0 1.4 1.02 2.75 1.16 2.94.15.19 2 3.17 4.87 4.33 2.38.96 2.86.77 3.38.72.51-.05 1.66-.68 1.9-1.34.23-.65.23-1.21.17-1.33-.07-.12-.26-.19-.55-.34zM12.02 3.5c-4.7 0-8.52 3.82-8.52 8.52 0 1.5.4 2.98 1.15 4.28L3.5 20.5l4.32-1.13c1.25.68 2.67 1.05 4.2 1.05 4.7 0 8.52-3.82 8.52-8.52 0-4.7-3.82-8.4-8.52-8.4zm0 15.4c-1.35 0-2.66-.36-3.8-1.04l-.27-.16-2.56.67.69-2.5-.18-.29a6.93 6.93 0 0 1-1.07-3.7 6.9 6.9 0 0 1 6.9-6.9 6.9 6.9 0 0 1 0 13.92z" />
      </svg>
    </a>
  );
}
