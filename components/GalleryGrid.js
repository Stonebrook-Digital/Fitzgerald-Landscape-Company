"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { galleryCategories, galleryItems } from "@/lib/content";
import styles from "./GalleryGrid.module.css";

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <>
      <div className={styles.filters} role="tablist" aria-label="Gallery categories">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            className={filter === cat ? styles.filterActive : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={styles.item}
            style={{ animationDelay: `${index * 0.05}s` }}
            onClick={() => setLightbox(item)}
            aria-label={`View ${item.title}`}
          >
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className={styles.itemOverlay}>
              <span className={styles.category}>{item.category}</span>
              <span className={styles.title}>{item.title}</span>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightbox(null)}
        >
          <button
            type="button"
            className={styles.close}
            aria-label="Close"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <div
            className={styles.lightboxInner}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.lightboxImage}>
              <Image
                src={lightbox.image}
                alt=""
                fill
                sizes="90vw"
                priority
              />
            </div>
            <div className={styles.lightboxMeta}>
              <span>{lightbox.category}</span>
              <h3>{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
