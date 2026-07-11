import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5 font-heading text-lg font-medium text-foreground">
            <img src="/favicon.svg" alt="" aria-hidden="true" width={28} height={28} className="h-7 w-7" />
            TAG Events & Productions
          </div>
          <div className="text-sm tracking-wide text-muted-foreground">
            Luxury Weddings &middot; Premium Event Experiences &middot; Elegant Celebrations
          </div>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <a
            href="mailto:tagevents2604@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail size={15} className="text-primary" /> tagevents2604@gmail.com
          </a>
          <a
            href="tel:+14165291135"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone size={15} className="text-primary" /> +1 (416) 529-1135
          </a>
        </div>
      </div>
    </footer>
  );
}
