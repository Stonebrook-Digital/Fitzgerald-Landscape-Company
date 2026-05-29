import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServicesOverview from "@/components/ServicesOverview";
import StatsBar from "@/components/StatsBar";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTABand from "@/components/CTABand";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";
import {
  heroImage,
  headerQuote,
  valueProposition,
  pricing,
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
        title="Outdoor Living, Crafted With Care"
        subtitle={valueProposition.eyebrow}
        image={heroImage}
        quote={headerQuote}
        size="tall"
        primaryCta={{ href: cta.primaryHref, label: cta.primaryLabel }}
        secondaryCta={{ href: "/gallery", label: "View Gallery" }}
      />

      <StatsBar />

      <ScrollReveal as="section" className={styles.section}>
        <div className="container">
          <div className={styles.valueProp}>
            <SectionHeading
              eyebrow={valueProposition.eyebrow}
              title={valueProposition.title}
              description={valueProposition.text}
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className={styles.sectionAlt} id="services" delay={80}>
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Complete Landscape Care"
            description="From year-round maintenance to seasonal installations—we handle every aspect of your outdoor space."
          />
          <ServicesOverview limitPerCategory={3} />
          <ScrollReveal delay={200} className={styles.centerCta}>
            <Button href="/services" variant="primary">
              View All Services
            </Button>
          </ScrollReveal>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className={styles.section} delay={80}>
        <div className="container">
          <SectionHeading
            eyebrow={pricing.eyebrow}
            title={pricing.title}
            description={pricing.description}
          />
          <ul className={styles.pricingList}>
            {pricing.points.map((point, index) => (
              <ScrollReveal
                as="li"
                key={point}
                delay={120 + index * 100}
                variant="up"
              >
                {point}
              </ScrollReveal>
            ))}
          </ul>
          <ScrollReveal delay={280} className={styles.centerCta}>
            <Button href={cta.primaryHref} variant="outline">
              {cta.primaryLabel}
            </Button>
          </ScrollReveal>
        </div>
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
                  <Image src={item.image} alt="" fill sizes="33vw" />
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
        <CTABand
          title="Ready to Transform Your Property?"
          description={valueProposition.text}
          primaryLabel={cta.primaryLabel}
        />
      </ScrollReveal>
    </>
  );
}
