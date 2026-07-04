"use client";

import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { trustedBrands } from "@/lib/content";
import styles from "./TrustedBrandsCarousel.module.css";

const BASE_LOGO_HEIGHT = 40;
const SIZE_BOOST = 1.1025;

function BrandLogo({ brand, compact }) {
  if (!brand.logo) {
    return (
      <span className={styles.placeholder} aria-label={`${brand.name} logo placeholder`}>
        {brand.name}
      </span>
    );
  }

  const logoHeight = Math.round(
    (compact ? BASE_LOGO_HEIGHT : 50) * (brand.logoScale ?? 1) * SIZE_BOOST
  );

  return (
    <Image
      src={brand.logo}
      alt={brand.name}
      width={240}
      height={96}
      className={styles.logoImg}
      style={{
        height: `${logoHeight}px`,
        width: "auto",
        transform: brand.logoOffsetY ? `translateY(${brand.logoOffsetY}px)` : undefined,
      }}
    />
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
              <BrandLogo brand={brand} compact={compact} />
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
