import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServicesOverview from "@/components/ServicesOverview";
import StatsBar from "@/components/StatsBar";
import TestimonialSlider from "@/components/TestimonialSlider";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import CTABand from "@/components/CTABand";
import TrustedBrandsCarousel from "@/components/TrustedBrandsCarousel";
import PricingSection from "@/components/PricingSection";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";
import {
  heroImage,
  hero,
  valueProposition,
  testimonials,
  getFeaturedGalleryItems,
  cta,
} from "@/lib/content";
import styles from "./page.module.css";

export default function HomePage() {
  const previewImages = getFeaturedGalleryItems();

  return (
    <>
      <PageHero
        title={hero.title}
        image={heroImage}
        quote={hero.subhead}
        size="tall"
        primaryCta={{ href: cta.primaryHref, label: cta.primaryLabel }}
        secondaryCta={{ href: "/gallery", label: "View Gallery" }}
      />

      <StatsBar />

      <ScrollReveal as="section" className={styles.sectionAlt} id="services" delay={80}>
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Complete Landscape Care"
            description="From softscaping and hardscaping to mowing, irrigation, lighting, and winter snow and ice management."
          />
          <ServicesOverview />
          <ScrollReveal delay={200} className={styles.centerCta}>
            <Button href="/services" variant="primary">
              View All Services
            </Button>
          </ScrollReveal>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="in">
        <TrustedBrandsCarousel />
      </ScrollReveal>

      <ScrollReveal as="section" delay={80}>
        <PricingSection />
      </ScrollReveal>

      <ScrollReveal as="section" className={styles.sectionAlt} delay={80}>
        <div className="container">
          <SectionHeading
            eyebrow="Portfolio"
            title="Recent Work"
            description="A glimpse at the patios, plantings, and properties we've brought to life."
          />
          <div className={styles.galleryPreview}>
            {previewImages.map((item, index) => (
              <ScrollReveal
                key={item.id}
                delay={index * 90}
                variant="scale"
                className={styles.galleryReveal}
              >
                <Link href="/gallery" className={styles.galleryItem}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <span>{item.title}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={320} className={styles.centerCta}>
            <Button href="/gallery" variant="outline">
              Full Gallery
            </Button>
          </ScrollReveal>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="in">
        <TestimonialSlider items={testimonials} />
      </ScrollReveal>

      <ScrollReveal variant="up">
        <ServiceAreaMap />
      </ScrollReveal>

      <ScrollReveal variant="up">
        <CTABand
          title="Ready to Transform Your Property?"
          description={valueProposition.text}
          primaryLabel={cta.primaryLabel}
        />
      </ScrollReveal>
    </>
  );
}
