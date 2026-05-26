import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import CTABand from "@/components/CTABand";
import ScrollReveal from "@/components/ScrollReveal";
import { valueProposition, cta } from "@/lib/content";
import shared from "../shared.module.css";

export const metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Our Work in the Landscape"
        subtitle="Gallery"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85"
        size="compact"
      />

      <ScrollReveal as="section" className={shared.pageSection}>
        <div className="container--wide">
          <SectionHeading
            eyebrow="Projects"
            title="Patios, Plantings & Properties"
            description={valueProposition.text}
          />
          <GalleryGrid />
        </div>
      </ScrollReveal>

      <ScrollReveal variant="up">
      <CTABand
        title="Inspired by What You See?"
        description={valueProposition.text}
        primaryLabel={cta.primaryLabel}
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
      </ScrollReveal>
    </>
  );
}
