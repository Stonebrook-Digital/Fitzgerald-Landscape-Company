import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServicesOverview from "@/components/ServicesOverview";
import TestimonialSlider from "@/components/TestimonialSlider";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import CTABand from "@/components/CTABand";
import TrustedBrandsCarousel from "@/components/TrustedBrandsCarousel";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";
import {
  heroImage,
  hero,
  testimonials,
  cta,
} from "@/lib/content";
import styles from "./page.module.css";

export default function HomePage() {
  return (    <>
      <PageHero
        title={hero.title}
        image={heroImage}
        quote={hero.subhead}
        size="tall"
        primaryCta={{ href: cta.primaryHref, label: cta.primaryLabel }}
      />

      <TrustedBrandsCarousel compact />

      <ScrollReveal variant="in">
        <TestimonialSlider items={testimonials} />
      </ScrollReveal>

      <ScrollReveal as="section" className={styles.sectionAlt} id="services" delay={80}>
        <div className="container">
          <SectionHeading title="Services" />
          <ServicesOverview />
          <ScrollReveal delay={200} className={styles.centerCta}>
            <Button href="/services" variant="primary">
              View All Services
            </Button>
          </ScrollReveal>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="up">
        <ServiceAreaMap />
      </ScrollReveal>

      <ScrollReveal variant="up">
        <CTABand title={cta.intakeTitle} primaryLabel={cta.primaryLabel} withForm />
      </ScrollReveal>
    </>
  );
}
