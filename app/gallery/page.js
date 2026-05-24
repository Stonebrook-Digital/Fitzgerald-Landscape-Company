import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "@/components/GalleryGrid";
import CTABand from "@/components/CTABand";
import { lorem } from "@/lib/content";
import shared from "../shared.module.css";

export const metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Lorem Ipsum Portfolio"
        subtitle="Gallery"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85"
        size="compact"
      />

      <section className={shared.pageSection}>
        <div className="container--wide">
          <SectionHeading
            eyebrow="Projects"
            title="Dolor Sit Amet Works"
            description={lorem.medium}
          />
          <GalleryGrid />
        </div>
      </section>

      <CTABand
        title="Inspired by Lorem?"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
