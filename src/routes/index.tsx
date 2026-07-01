import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home — TAG Events & Productions" },
      { name: "description", content: "Luxury weddings, premium event experiences, and elegant celebrations." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        {/* Hero — flex 50/50 */}
        <section className="flex flex-col items-center gap-16 py-[120px] lg:flex-row lg:gap-20 lg:py-[160px]">
          {/* Left 50%: Headline */}
          <div className="flex w-full flex-col gap-8 lg:w-1/2">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Luxury Weddings &bull; Premium Event Experiences
            </p>
            <h1 className="font-heading text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Luxury Weddings. Memorable Celebrations. Flawlessly Planned.
            </h1>
            <p className="max-w-md text-base leading-[1.8] text-muted-foreground">
              TAG Events & Wedding Planner specializes in premium weddings, engagements, birthdays, bridal showers, baby showers, corporate events, and luxury d&eacute;cor throughout Nova Scotia and beyond.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact" className="inline-flex items-center border border-charcoal bg-transparent px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition-all hover:bg-charcoal hover:text-cream">
                Get a Quote
              </Link>
              <Link to="/portfolio" className="inline-flex items-center border border-charcoal bg-transparent px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition-all hover:bg-charcoal hover:text-cream">
                View Portfolio
              </Link>
              <Link to="/contact" className="inline-flex items-center border border-charcoal bg-transparent px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition-all hover:bg-charcoal hover:text-cream">
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* Right 50%: Asymmetric photo frames */}
          <div className="relative hidden h-[560px] w-1/2 lg:block">
            <div className="absolute left-0 top-0 h-[500px] w-[320px] overflow-hidden bg-secondary shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
                alt="Elegant bride and groom in editorial wedding portrait"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[240px] w-[380px] overflow-hidden bg-secondary shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=80"
                alt="Luxury floral wedding reception tablescape"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
