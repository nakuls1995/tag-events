import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export type Package = {
  name: string;
  price: string;
  tagline?: string;
  features: string[];
  perfectFor?: string[];
  highlighted?: boolean;
};

export function PackageDetailsDialog({
  pkg,
  onOpenChange,
}: {
  pkg: Package | null;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={!!pkg} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg border-charcoal/20 bg-cream">
        {pkg && (
          <>
            <DialogHeader className="text-left">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-charcoal/60">
                Starting at {pkg.price}
              </p>
              <DialogTitle className="font-heading text-3xl font-medium tracking-tight text-charcoal">
                {pkg.name}
              </DialogTitle>
              {pkg.tagline && (
                <DialogDescription className="text-sm leading-[1.8] text-charcoal/70">
                  {pkg.tagline}
                </DialogDescription>
              )}
            </DialogHeader>

            <div className="mt-4">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal/60">
                Inclusions
              </p>
              <ul className="space-y-3">
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm leading-[1.7]"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-1 h-3.5 w-3.5 shrink-0 text-charcoal"
                    />
                    <span className="text-charcoal">{f}</span>
                  </li>
                ))}
              </ul>

              {pkg.perfectFor && (
                <div className="mt-6">
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal/60">
                    Perfect for
                  </p>
                  <p className="text-sm leading-[1.8] text-charcoal">
                    {pkg.perfectFor.join(" · ")}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-end">
              <Link
                to="/contact"
                onClick={() => onOpenChange(false)}
                className="inline-flex items-center border border-charcoal bg-transparent px-6 py-3 text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-charcoal hover:text-cream"
              >
                Inquire Now
              </Link>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
