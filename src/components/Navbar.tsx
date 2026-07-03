/* eslint-disable prettier/prettier */
import { Link } from '@tanstack/react-router';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-border bg-background/90 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link
          to="/"
          className="font-heading text-xl font-medium tracking-tight text-foreground">
          TAG Events
        </Link>
        <button
          className="text-foreground transition-colors hover:text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav-menu">
          <Menu aria-hidden="true" size={22} />
        </button>
        <ul className="hidden gap-8 md:flex md:items-center">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeProps={{
                  className:
                    'text-foreground font-medium border-b-2 border-primary pb-0.5',
                }}
                className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul
          id="mobile-nav-menu"
          className="flex flex-col gap-4 border-t border-border p-4 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="block text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
