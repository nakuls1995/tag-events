import { useEffect, useState } from "react";
import { galleryItems, type GalleryItem } from "@/lib/gallery";

function pickTwoExcluding(exclude: GalleryItem[]): [GalleryItem, GalleryItem] {
  const excludeSrcs = new Set(exclude.map((p) => p.src));
  const pool = galleryItems.filter((item) => !excludeSrcs.has(item.src));
  const source = pool.length >= 2 ? pool : galleryItems;

  const shuffled = [...source];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return [shuffled[0], shuffled[1]];
}

/**
 * Rotates through the shared gallery pool on a timer, starting from an
 * SSR-provided pair so the first render never mismatches during hydration.
 * Pauses automatically for prefers-reduced-motion.
 */
export function useRotatingPhotos(
  initial: [GalleryItem, GalleryItem],
  intervalMs = 6000,
) {
  const [photos, setPhotos] = useState(initial);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const id = window.setInterval(() => {
      setPhotos((prev) => pickTwoExcluding(prev));
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [intervalMs]);

  return photos;
}
