import { createFileRoute, Link } from '@tanstack/react-router';
import { Layout } from '@/components/Layout';
import { ogMeta, twitterMeta } from '@/lib/seo';
import { useParallax } from '@/hooks/useParallax';
import { useRotatingPhotos } from '@/hooks/useRotatingPhotos';
import { galleryItems, sampleGalleryItems } from '@/lib/gallery';

const TITLE = 'TAG Events | Luxury Wedding & Event Planning in Nova Scotia';
const DESCRIPTION =
  'Luxury weddings, premium event planning, corporate events, and unforgettable celebrations across Nova Scotia. TAG Events creates elegant experiences tailored to your vision.';

export const Route = createFileRoute('/')({
  loader: () => ({ heroImages: sampleGalleryItems(2) }),
  head: ({ loaderData }) => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESCRIPTION },
      ...ogMeta({ title: TITLE, description: DESCRIPTION, path: '/' }),
      ...twitterMeta({ title: TITLE, description: DESCRIPTION }),
    ],
    links: [
      { rel: 'canonical', href: 'https://www.tagevent.ca/' },
      {
        rel: 'preload',
        as: 'image',
        fetchPriority: 'high',
        href: (loaderData?.heroImages[0] ?? galleryItems[0]).src,
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { heroImages } = Route.useLoaderData();
  const [frontPhoto, backPhoto] = useRotatingPhotos([
    heroImages[0],
    heroImages[1],
  ]);
  const frontImage = useParallax<HTMLDivElement>(0.05);
  const backImage = useParallax<HTMLDivElement>(0.1);

  return (
    <Layout>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        {/* Hero — flex 50/50 */}
        <section className="flex flex-col items-center gap-16 py-[120px] lg:flex-row lg:gap-20 lg:py-[150px]">
          {/* Left 50%: Headline */}
          <div className="flex w-full flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 motion-reduce:animate-none lg:w-1/2">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Luxury Weddings &bull; Premium Event Experiences
            </p>
            <h1 className="font-heading text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Luxury Weddings. Memorable Celebrations. Flawlessly Planned.
            </h1>
            <p className="max-w-md text-base leading-[1.8] text-muted-foreground">
              TAG Events & Wedding Planner specializes in premium weddings,
              engagements, birthdays, bridal showers, baby showers, corporate
              events, and luxury d&eacute;cor throughout Nova Scotia and beyond.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center border border-charcoal bg-transparent px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition-all hover:bg-charcoal hover:text-cream">
                Get a Quote
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center border border-charcoal bg-transparent px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition-all hover:bg-charcoal hover:text-cream">
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Right 50%: Asymmetric photo frames */}
          <div className="relative hidden h-[560px] w-1/2 animate-in fade-in duration-1000 delay-150 fill-mode-both motion-reduce:animate-none lg:block">
            <div
              ref={frontImage}
              className="absolute left-0 top-0 h-[500px] w-[320px] overflow-hidden bg-secondary shadow-2xl will-change-transform">
              <img
                key={frontPhoto.src}
                src={frontPhoto.src}
                alt={frontPhoto.alt}
                width={320}
                height={500}
                loading="eager"
                fetchPriority="high"
                className="h-full w-full object-cover animate-in fade-in duration-700 motion-reduce:animate-none"
              />
            </div>
            <div
              ref={backImage}
              className="absolute bottom-0 right-0 h-[240px] w-[380px] overflow-hidden bg-secondary shadow-2xl will-change-transform">
              <img
                key={backPhoto.src}
                src={backPhoto.src}
                alt={backPhoto.alt}
                width={380}
                height={240}
                loading="eager"
                className="h-full w-full object-cover animate-in fade-in duration-700 motion-reduce:animate-none"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
