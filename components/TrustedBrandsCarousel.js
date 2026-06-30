"use client";

import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { trustedBrands } from "@/lib/content";
import styles from "./TrustedBrandsCarousel.module.css";

function BrandLogo({ brand }) {
  if (!brand.logo) {
    return (
      <span className={styles.placeholder} aria-label={`${brand.name} logo placeholder`}>
        {brand.name}
      </span>
    );
  }

  return (
    <div className={styles.logoSlot}>
      <Image
        src={brand.logo}
        alt={brand.name}
        fill
        sizes="(max-width: 640px) 140px, 180px"
        className={styles.logoImg}
        style={{ transform: `scale(${brand.logoScale ?? 1})` }}
      />
    </div>
  );
}

export default function TrustedBrandsCarousel({ compact = false }) {
  const { eyebrow, title, description, brands } = trustedBrands;
  const track = [...brands, ...brands];

  return (
    <section
      className={`${styles.section} ${compact ? styles.sectionCompact : ""}`}
      aria-label="Trusted brands"
    >
      {compact ? null : (
        <div className="container">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        </div>
      )}

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.track}>
          {track.map((brand, index) => (
            <div key={`${brand.id}-${index}`} className={styles.brand}>
              <BrandLogo brand={brand} />
            </div>
          ))}
        </div>
      </div>

      <ul className={styles.srList}>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.name}</li>
        ))}
      </ul>
    </section>
  );
}
