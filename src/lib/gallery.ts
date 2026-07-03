export interface GalleryItem {
  category: string;
  alt: string;
  aspect: string;
  width: number;
  height: number;
  src: string;
}

/** Shared photography pool — reused by the Portfolio gallery and the Home hero. */
export const galleryItems: GalleryItem[] = [
  {
    category: "Weddings",
    alt: "Bride and groom portrait at a luxury wedding",
    aspect: "aspect-[2/3]",
    width: 900,
    height: 1350,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Balloon Installations",
    alt: "Elegant balloon installation for an event",
    aspect: "aspect-[4/3]",
    width: 900,
    height: 675,
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Luxury Receptions",
    alt: "Luxury wedding reception tablescape",
    aspect: "aspect-[3/4]",
    width: 900,
    height: 1200,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Engagements",
    alt: "Engaged couple in an outdoor portrait session",
    aspect: "aspect-[3/2]",
    width: 900,
    height: 600,
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Bridal Showers",
    alt: "Bridal shower floral centerpiece",
    aspect: "aspect-[1/1]",
    width: 900,
    height: 900,
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Custom Décor",
    alt: "Custom event décor installation",
    aspect: "aspect-[3/4]",
    width: 900,
    height: 1200,
    src: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Baby Showers",
    alt: "Baby shower celebration setup",
    aspect: "aspect-[2/3]",
    width: 900,
    height: 1350,
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Corporate Events",
    alt: "Corporate event venue setup",
    aspect: "aspect-[4/3]",
    width: 900,
    height: 675,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Weddings",
    alt: "Wedding ceremony décor and floral arch",
    aspect: "aspect-[3/2]",
    width: 900,
    height: 600,
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Balloon Installations",
    alt: "Colorful balloon garland installation",
    aspect: "aspect-[1/1]",
    width: 900,
    height: 900,
    src: "https://images.unsplash.com/photo-1464699908537-0954e50791ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Luxury Receptions",
    alt: "Luxury reception hall with elegant lighting",
    aspect: "aspect-[2/3]",
    width: 900,
    height: 1350,
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Custom Décor",
    alt: "Custom themed event décor detail",
    aspect: "aspect-[4/3]",
    width: 900,
    height: 675,
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80",
  },
];

/** Deterministic-per-call random sample of n distinct gallery items (Fisher–Yates partial shuffle). */
export function sampleGalleryItems(n: number): GalleryItem[] {
  const pool = [...galleryItems];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, n);
}
