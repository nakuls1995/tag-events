import { createFileRoute } from '@tanstack/react-router';
import { lazy, Suspense, useState } from 'react';
import { Layout } from '@/components/Layout';
import { Reveal } from '@/components/Reveal';
import type { Package } from '@/components/PackageDetailsDialog';
import { ogMeta, twitterMeta } from '@/lib/seo';

const PackageDetailsDialog = lazy(() =>
  import('@/components/PackageDetailsDialog').then((m) => ({
    default: m.PackageDetailsDialog,
  })),
);

const TITLE = 'Luxury Event Planning Services | TAG Events';
const DESCRIPTION =
  'Discover our wedding planning, event coordination, décor, venue management, and luxury event services designed for unforgettable celebrations.';

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      ...ogMeta({ title: TITLE, description: DESCRIPTION, path: '/services' }),
      ...twitterMeta({ title: TITLE, description: DESCRIPTION }),
    ],
    links: [{ rel: 'canonical', href: 'https://www.tagevent.ca/services' }],
  }),
  component: Services,
});

const weddingPackages: Package[] = [
  {
    name: 'Classic Décor Package',
    price: '$1,100+',
    tagline: 'A balanced blend of backdrop, balloons & table styling',
    features: [
      'Custom-designed backdrop',
      'Balloon garland (70–100 balloons)',
      'Cake pedestals',
      'Mirror with customization',
      '1–2 table décor',
      'Five table centrepieces',
    ],
  },
  {
    name: 'Elegant Basic Setup',
    price: '$1,500+',
    tagline: 'Suitable for intimate celebrations',
    features: [
      'Basic backdrop with a texture to match your theme',
      '2 table setup',
      'Five centerpieces',
      'Entry gold mirror with custom design',
    ],
  },
  {
    name: 'Essential Elegance',
    price: '$3,000+',
    tagline: 'Suitable for weddings up to 50 guests',
    features: [
      'Initial consultation',
      'Budget planning',
      'Vendor recommendations',
      'Wedding day timeline',
      'Month-of coordination',
    ],
  },
  {
    name: 'Signature Luxury',
    price: '$4,500',
    tagline: 'Suitable for weddings of 75–100 guests',
    features: [
      'Full planning support',
      'Venue coordination',
      'Design consultation',
      'Wedding day management',
    ],
  },
  {
    name: 'Royal Wedding Experience',
    price: '$6,500+',
    tagline: 'Suitable for weddings of 100–150 guests',
    features: [
      'Full-service planning',
      'Unlimited consultations',
      'Custom design concepts',
      'Guest management assistance',
      'Luxury décor coordination',
      'Full wedding day execution',
    ],
    highlighted: true,
  },
];

const balloonPackages: Package[] = [
  {
    name: 'Mini Celebration Package',
    price: '$299+',
    features: [
      'Balloon Garland (6–8 feet)',
      'Basic backdrop',
      'Setup & teardown',
    ],
    perfectFor: ['Birthdays', 'Home parties', 'Gender reveals'],
  },
  {
    name: 'Signature Balloon Setup',
    price: '$499+',
    features: [
      'Balloon Garland (12–15 ft)',
      'Backdrop wall',
      'Custom sign',
      'Cake table styling',
    ],
  },
  {
    name: 'Luxury Balloon Experience',
    price: '$799+',
    features: [
      'Organic balloon installation',
      'Custom backdrop',
      'Neon sign',
      'Floor balloons',
      'Premium styling',
    ],
  },
];

const rentalTables = [
  {
    category: 'Arches',
    rows: [
      { item: 'Round Arch', price: '$50' },
      { item: 'Wooden Arch', price: '$150 (+$50 with drapes)' },
      { item: 'Heart Shaped Arch', price: '$50' },
      { item: '4 Tier Round Arch (Set of 2)', price: '$50' },
      { item: '3 Semi-Arches Gold (4ft, 5ft, 6ft)', price: '$50' },
    ],
  },
  {
    category: 'Mirrors',
    rows: [
      { item: 'Welcome Mirror', price: '$60' },
      { item: 'Gold Welcome Mirror', price: '$75' },
      { item: 'Luxury Standing Mirror', price: '$100' },
      { item: 'Custom Vinyl Mirror Design', price: '$75' },
    ],
  },
  {
    category: 'Additional Rentals',
    rows: [
      { item: 'Easel Stand', price: '$15' },
      { item: 'Neon Sign Happy Birthday', price: '$30' },
      { item: 'Pedestal Set (3)', price: '$75' },
      { item: 'Drapes', price: '$50' },
      { item: 'Sequin Gold Panel (6x4 ft)', price: '$50' },
      { item: 'Cake Stands', price: '$50' },
      { item: 'Gold Card Boxes', price: '$50' },
      { item: 'Many more — contact for details', price: 'tagevents2604@gmail.com' },
    ],
  },
];

const addOnServices = [
  { item: 'Day-Of Coordinator', price: '$200' },
  { item: 'Vendor Management', price: '$300' },
  { item: 'Seating Chart Design', price: '$75' },
  { item: 'Invitation Design', price: 'Starting at $100' },
  { item: 'Custom Signage', price: '$100' },
  { item: 'Event Setup', price: '$200' },
  { item: 'Tear Down', price: '$200' },
  { item: 'Event Setup & Tear Down', price: '$400' },
  { item: 'Fog Machine (Clouds on the Floor)', price: '$250' },
  { item: 'Cold Pyro Services (Set of 2)', price: '$125' },
];

function PackageCard({
  pkg,
  onView,
  label,
  index = 0,
}: {
  pkg: Package;
  onView: () => void;
  label: string;
  index?: number;
}) {
  return (
    <Reveal
      delay={index * 100}
      className="flex flex-col items-start border-t border-charcoal/20 pt-10">
      <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-charcoal/60">
        {pkg.highlighted ? 'Flagship' : label}
      </p>
      <h3 className="mb-6 font-heading text-3xl font-medium tracking-tight text-charcoal">
        {pkg.name}
      </h3>
      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal/60">
        Starting at
      </p>
      <p className="mb-10 font-heading text-4xl font-medium tracking-tight text-charcoal">
        {pkg.price}
      </p>
      <button
        type="button"
        onClick={onView}
        aria-label={`View details for ${pkg.name}`}
        className="mt-auto border border-charcoal bg-transparent px-6 py-3 text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-charcoal hover:text-cream">
        View Details
      </button>
    </Reveal>
  );
}

function Services() {
  const [active, setActive] = useState<Package | null>(null);
  const [dialogLoaded, setDialogLoaded] = useState(false);

  function openPackage(pkg: Package) {
    setDialogLoaded(true);
    setActive(pkg);
  }

  return (
    <Layout>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        {/* Page header */}
        <section className="mx-auto max-w-4xl py-24 text-center md:py-32">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-charcoal/60">
            Services
          </p>
          <h1 className="font-heading text-5xl font-medium leading-[1.05] tracking-tight text-charcoal md:text-6xl lg:text-7xl">
            Crafted with intention, executed with grace.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-[1.8] text-charcoal/70">
            From full-service wedding planning to elegant balloon décor and
            premium rentals — every detail crafted to perfection.
          </p>
        </section>

        {/* Wedding Planning */}
        <section className="py-24">
          <Reveal className="mb-16 flex flex-col items-baseline justify-between gap-4 md:flex-row md:gap-8">
            <h2 className="font-heading text-4xl font-medium tracking-tight text-charcoal md:text-5xl">
              Wedding Planning
            </h2>
            <p className="max-w-sm text-sm leading-[1.8] text-charcoal/70">
              Curated collections designed for every celebration size.
            </p>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
            {weddingPackages.map((pkg, i) => (
              <PackageCard
                key={pkg.name}
                pkg={pkg}
                label="Package"
                index={i}
                onView={() => openPackage(pkg)}
              />
            ))}
          </div>
        </section>

        {/* Balloon Decoration */}
        <section className="py-24">
          <Reveal className="mb-16 flex flex-col items-baseline justify-between gap-4 md:flex-row md:gap-8">
            <h2 className="font-heading text-4xl font-medium tracking-tight text-charcoal md:text-5xl">
              Balloon Decoration
            </h2>
            <p className="max-w-sm text-sm leading-[1.8] text-charcoal/70">
              Transform any space with stunning balloon installations.
            </p>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
            {balloonPackages.map((pkg, i) => (
              <PackageCard
                key={pkg.name}
                pkg={pkg}
                label="Collection"
                index={i}
                onView={() => openPackage(pkg)}
              />
            ))}
          </div>
        </section>

        {/* Rental Collection */}
        <section className="py-24">
          <Reveal className="mb-16 flex flex-col items-baseline justify-between gap-4 md:flex-row md:gap-8">
            <h2 className="font-heading text-4xl font-medium tracking-tight text-charcoal md:text-5xl">
              Rental Collection
            </h2>
            <p className="max-w-sm text-sm leading-[1.8] text-charcoal/70">
              Premium arches, mirrors, and accent pieces for your event.
            </p>
          </Reveal>
          <div className="grid gap-20 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-24">
            {rentalTables.map((table, i) => (
              <Reveal
                key={table.category}
                delay={i * 80}>
                <h3 className="mb-6 font-heading text-2xl font-medium text-charcoal">
                  {table.category}
                </h3>
                <div>
                  {table.rows.map((row) => (
                    <div
                      key={row.item}
                      className="flex items-baseline justify-between gap-6 border-b border-charcoal/15 py-5">
                      <span className="text-charcoal">{row.item}</span>
                      <span className="font-medium text-charcoal">
                        {row.price}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 border-t border-charcoal/20 pt-8">
            <p className="text-sm leading-[1.8] text-charcoal/70">
              <span className="font-medium text-charcoal">Note:</span> All
              rentals come with a 24-hour rental period. If the date extends,
              charges may apply for the next day. In addition, a security
              deposit must be paid prior to booking — this deposit is fully
              refundable when the product is returned on time.
            </p>
          </Reveal>
        </section>

        {/* Add-On Services */}
        <section className="py-24">
          <Reveal className="mb-16 flex flex-col items-baseline justify-between gap-4 md:flex-row md:gap-8">
            <h2 className="font-heading text-4xl font-medium tracking-tight text-charcoal md:text-5xl">
              Add-On Services
            </h2>
            <p className="max-w-sm text-sm leading-[1.8] text-charcoal/70">
              Enhance your package with tailored extras.
            </p>
          </Reveal>
          <div className="grid lg:grid-cols-2 lg:gap-x-20">
            {addOnServices.map((row) => (
              <div
                key={row.item}
                className="flex items-baseline justify-between gap-6 border-b border-charcoal/15 py-5">
                <span className="text-charcoal">{row.item}</span>
                <span className="font-medium text-charcoal">{row.price}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {dialogLoaded && (
        <Suspense fallback={null}>
          <PackageDetailsDialog
            pkg={active}
            onOpenChange={(o) => !o && setActive(null)}
          />
        </Suspense>
      )}
    </Layout>
  );
}
