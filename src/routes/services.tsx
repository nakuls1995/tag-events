import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — TAG Events & Productions" },
      { name: "description", content: "Wedding planning, balloon decoration, rentals, and add-on services." },
    ],
  }),
  component: Services,
});

type Package = {
  name: string;
  price: string;
  tagline?: string;
  features: string[];
  perfectFor?: string[];
  highlighted?: boolean;
};

const weddingPackages: Package[] = [
  {
    name: "Essential Elegance",
    price: "$3,000+",
    tagline: "Suitable for weddings up to 50 guests",
    features: ["Initial consultation", "Budget planning", "Vendor recommendations", "Wedding day timeline", "Month-of coordination"],
  },
  {
    name: "Signature Luxury",
    price: "$4,500",
    tagline: "Suitable for weddings of 75–100 guests",
    features: ["Full planning support", "Venue coordination", "Design consultation", "Wedding day management"],
  },
  {
    name: "Royal Wedding Experience",
    price: "$6,500+",
    tagline: "Suitable for weddings of 100–150 guests",
    features: ["Full-service planning", "Unlimited consultations", "Custom design concepts", "Guest management assistance", "Luxury décor coordination", "Full wedding day execution"],
    highlighted: true,
  },
];

const balloonPackages: Package[] = [
  { name: "Mini Celebration Package", price: "$299+", features: ["Balloon Garland (6–8 feet)", "Basic backdrop", "Setup & teardown"], perfectFor: ["Birthdays", "Home parties", "Gender reveals"] },
  { name: "Signature Balloon Setup", price: "$499+", features: ["Balloon Garland (12–15 ft)", "Backdrop wall", "Custom sign", "Cake table styling"] },
  { name: "Luxury Balloon Experience", price: "$799+", features: ["Organic balloon installation", "Custom backdrop", "Neon sign", "Floor balloons", "Premium styling"] },
];

const rentalTables = [
  { category: "Arches", rows: [{ item: "White Round Arch", price: "$75" }, { item: "Wooden Arch", price: "$250" }, { item: "Heart Shaped Arch", price: "$75" }] },
  { category: "Mirrors", rows: [{ item: "Welcome Mirror", price: "$60" }, { item: "Gold Welcome Mirror", price: "$75" }, { item: "Luxury Standing Mirror", price: "$100" }, { item: "Custom Vinyl Mirror Design", price: "+$40" }] },
  { category: "Custom Mirrors (Purchase)", rows: [{ item: "Custom Welcome Mirror", price: "Starting $150" }, { item: "Luxury Wedding Mirror", price: "Starting $250" }, { item: "Fully Personalized Mirror", price: "Starting $350" }] },
  { category: "Additional Rentals", rows: [{ item: "Easel Stand", price: "$15" }, { item: "Neon Sign", price: "$50" }, { item: "Welcome Sign Board", price: "$40" }, { item: "Pedestal Set (3)", price: "$75" }, { item: "Cake Stand Set", price: "$40" }] },
];

const addOnServices = [
  { item: "Day-Of Coordinator", price: "Starting at $600" },
  { item: "Vendor Management", price: "Starting at $400" },
  { item: "Seating Chart Design", price: "Starting at $75" },
  { item: "Invitation Design", price: "Starting at $100" },
  { item: "Custom Signage", price: "Starting at $50" },
  { item: "Event Setup Only", price: "Starting at $250" },
  { item: "Event Setup & Teardown", price: "Starting at $400" },
];

function PackageCard({ pkg, onView, label }: { pkg: Package; onView: () => void; label: string }) {
  return (
    <div className="flex flex-col items-start border-t border-charcoal/20 pt-10">
      <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-charcoal/60">
        {pkg.highlighted ? "Flagship" : label}
      </p>
      <h3 className="mb-6 font-heading text-3xl font-medium tracking-tight text-charcoal">{pkg.name}</h3>
      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal/60">Starting at</p>
      <p className="mb-10 font-heading text-4xl font-medium tracking-tight text-charcoal">{pkg.price}</p>
      <button
        type="button"
        onClick={onView}
        className="mt-auto border border-charcoal bg-transparent px-6 py-3 text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-charcoal hover:text-cream"
      >
        View Details
      </button>
    </div>
  );
}

function Services() {
  const [active, setActive] = useState<Package | null>(null);

  return (
    <Layout>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        {/* Page header */}
        <section className="mx-auto max-w-4xl py-24 text-center md:py-32">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-charcoal/60">Services</p>
          <h1 className="font-heading text-5xl font-medium leading-[1.05] tracking-tight text-charcoal md:text-6xl lg:text-7xl">
            Crafted with intention, executed with grace.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-[1.8] text-charcoal/70">
            From full-service wedding planning to elegant balloon décor and premium rentals — every detail crafted to perfection.
          </p>
        </section>

        {/* Wedding Planning */}
        <section className="py-24">
          <div className="mb-16 flex flex-col items-baseline justify-between gap-4 md:flex-row md:gap-8">
            <h2 className="font-heading text-4xl font-medium tracking-tight text-charcoal md:text-5xl">Wedding Planning</h2>
            <p className="max-w-sm text-sm leading-[1.8] text-charcoal/70">Curated collections designed for every celebration size.</p>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
            {weddingPackages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} label="Package" onView={() => setActive(pkg)} />
            ))}
          </div>
        </section>

        {/* Balloon Decoration */}
        <section className="py-24">
          <div className="mb-16 flex flex-col items-baseline justify-between gap-4 md:flex-row md:gap-8">
            <h2 className="font-heading text-4xl font-medium tracking-tight text-charcoal md:text-5xl">Balloon Decoration</h2>
            <p className="max-w-sm text-sm leading-[1.8] text-charcoal/70">Transform any space with stunning balloon installations.</p>
          </div>
          <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
            {balloonPackages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} label="Collection" onView={() => setActive(pkg)} />
            ))}
          </div>
        </section>

        {/* Rental Collection */}
        <section className="py-24">
          <div className="mb-16 flex flex-col items-baseline justify-between gap-4 md:flex-row md:gap-8">
            <h2 className="font-heading text-4xl font-medium tracking-tight text-charcoal md:text-5xl">Rental Collection</h2>
            <p className="max-w-sm text-sm leading-[1.8] text-charcoal/70">Premium arches, mirrors, and accent pieces for your event.</p>
          </div>
          <div className="grid gap-20 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-24">
            {rentalTables.map((table) => (
              <div key={table.category}>
                <h3 className="mb-6 font-heading text-2xl font-medium text-charcoal">{table.category}</h3>
                <div>
                  {table.rows.map((row) => (
                    <div key={row.item} className="flex items-baseline justify-between gap-6 border-b border-charcoal/15 py-5">
                      <span className="text-charcoal">{row.item}</span>
                      <span className="font-medium text-charcoal">{row.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add-On Services */}
        <section className="py-24">
          <div className="mb-16 flex flex-col items-baseline justify-between gap-4 md:flex-row md:gap-8">
            <h2 className="font-heading text-4xl font-medium tracking-tight text-charcoal md:text-5xl">Add-On Services</h2>
            <p className="max-w-sm text-sm leading-[1.8] text-charcoal/70">Enhance your package with tailored extras.</p>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-x-20">
            {addOnServices.map((row) => (
              <div key={row.item} className="flex items-baseline justify-between gap-6 border-b border-charcoal/15 py-5">
                <span className="text-charcoal">{row.item}</span>
                <span className="font-medium text-charcoal">{row.price}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-lg border-charcoal/20 bg-cream">
          {active && (
            <>
              <DialogHeader className="text-left">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-charcoal/60">
                  Starting at {active.price}
                </p>
                <DialogTitle className="font-heading text-3xl font-medium tracking-tight text-charcoal">
                  {active.name}
                </DialogTitle>
                {active.tagline && (
                  <DialogDescription className="text-sm leading-[1.8] text-charcoal/70">
                    {active.tagline}
                  </DialogDescription>
                )}
              </DialogHeader>

              <div className="mt-4">
                <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal/60">
                  Inclusions
                </p>
                <ul className="space-y-3">
                  {active.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm leading-[1.7]">
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-charcoal" />
                      <span className="text-charcoal">{f}</span>
                    </li>
                  ))}
                </ul>

                {active.perfectFor && (
                  <div className="mt-6">
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal/60">
                      Perfect for
                    </p>
                    <p className="text-sm leading-[1.8] text-charcoal">
                      {active.perfectFor.join(" · ")}
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-end">
                <Link
                  to="/contact"
                  onClick={() => setActive(null)}
                  className="inline-flex items-center border border-charcoal bg-transparent px-6 py-3 text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-charcoal hover:text-cream"
                >
                  Inquire Now
                </Link>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
