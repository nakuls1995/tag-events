import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { ogMeta, twitterMeta } from "@/lib/seo";

const TITLE = "About TAG Events | Luxury Wedding & Event Experts";
const DESCRIPTION =
  "Learn about TAG Events, our experience, passion, and commitment to creating memorable weddings and luxury events across Nova Scotia.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      ...ogMeta({ title: TITLE, description: DESCRIPTION, path: "/about" }),
      ...twitterMeta({ title: TITLE, description: DESCRIPTION }),
    ],
    links: [
      { rel: "canonical", href: "https://www.tagevent.ca/about" },
      {
        rel: "preload",
        as: "image",
        fetchPriority: "high",
        href: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=80",
      },
    ],
  }),
  component: About,
});

const pillars = [
  {
    number: "01",
    label: "Our Story",
    title: "A Canadian House of Celebrations",
    body: "100% Canadian Company & has over 17 years of experience in event planning and décor, TAG Events & Wedding Planner creates elegant celebrations designed around each client's vision. From intimate gatherings to luxury weddings, our team manages every detail so clients can enjoy their special moments stress-free.",
  },
  {
    number: "02",
    label: "Experience",
    title: "Seventeen Years of Craft",
    body: "With over 17 years of experience in event planning and décor, TAG Events & Wedding Planner has managed every detail of countless celebrations. From intimate gatherings to luxury weddings, our seasoned team ensures each event is executed flawlessly.",
  },
  {
    number: "03",
    label: "Mission",
    title: "Your Vision, Flawlessly Realized",
    body: "TAG Events & Wedding Planner creates elegant celebrations designed around each client's vision. Our mission is to manage every detail so clients can enjoy their special moments completely stress-free, turning dreams into beautifully realized events.",
  },
];

function About() {
  return (
    <Layout>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        {/* Page Hero */}
        <section className="py-[120px] text-center lg:py-[160px]">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            About Us
          </p>
          <h1 className="mx-auto max-w-4xl font-heading text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Crafting Elegant Celebrations Since 2007
          </h1>
        </section>

        {/* Hero image */}
        <section className="pb-[120px] lg:pb-[160px]">
          <Reveal className="aspect-[16/9] w-full overflow-hidden bg-secondary shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=80"
              alt="Luxury wedding reception"
              width={1800}
              height={1013}
              loading="eager"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </section>

        {/* Experience Callout */}
        <Reveal as="section" className="py-[120px] text-center lg:py-[160px]">
          <p className="font-heading text-[180px] font-medium leading-none tracking-tighter text-primary md:text-[260px] lg:text-[320px]">
            17+
          </p>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-foreground">
            Years of Experience
          </p>
        </Reveal>

        {/* Story / Experience / Mission — aligned 3-column grid */}
        <section className="pb-[120px] lg:pb-[160px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
            {pillars.map((p, i) => (
              <Reveal key={p.number} delay={i * 100} className="flex flex-col">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-primary">
                  {p.number} — {p.label}
                </p>
                <h2 className="mb-6 font-heading text-3xl font-medium leading-tight text-foreground">
                  {p.title}
                </h2>
                <p className="leading-[1.8] text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Photo band */}
        <section className="pb-[120px] lg:pb-[160px]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            <Reveal className="aspect-[3/4] overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80"
                alt="Bridal portrait"
                width={900}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Reveal>
            <Reveal delay={100} className="aspect-[3/4] overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80"
                alt="Floral details"
                width={900}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Reveal>
            <Reveal delay={200} className="aspect-[3/4] overflow-hidden bg-secondary">
              <img
                src="https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=900&q=80"
                alt="Tablescape"
                width={900}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
}
