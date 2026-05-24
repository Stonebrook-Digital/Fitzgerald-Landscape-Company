import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StatsBar from "@/components/StatsBar";
import TestimonialSlider from "@/components/TestimonialSlider";
import ProcessSteps from "@/components/ProcessSteps";
import CTABand from "@/components/CTABand";
import Button from "@/components/Button";
import {
  heroImage,
  lorem,
  services,
  testimonials,
  galleryItems,
} from "@/lib/content";
import styles from "./page.module.css";

const features = [
  {
    icon: "◆",
    title: "Lorem Excellence",
    text: lorem.short,
  },
  {
    icon: "◇",
    title: "Ipsum Craft",
    text: lorem.short,
  },
  {
    icon: "○",
    title: "Dolor Trust",
    text: lorem.short,
  },
];

export default function HomePage() {
  const previewImages = galleryItems.slice(0, 4);

  return (
    <>
      <PageHero
        title="Lorem Ipsum Outdoor Living, Crafted to Perfection"
        subtitle="Fitzgerald Landscape Co."
        image={heroImage}
        size="tall"
        primaryCta={{ href: "/contact", label: "Request Lorem" }}
        secondaryCta={{ href: "/gallery", label: "View Gallery" }}
      />

      <StatsBar />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.introSplit}>
            <div className={styles.introImage}>
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className={styles.introBadge}>
                <strong>000+</strong>
                <span>Lorem Projects</span>
              </div>
            </div>
            <div className={styles.introText}>
              <SectionHeading
                eyebrow="About Lorem"
                title={lorem.heading}
                description={lorem.long}
                align="left"
              />
              <p>{lorem.medium}</p>
              <Button href="/about" variant="outline">
                Lorem Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Lorem Ipsum Solutions"
            description={lorem.medium}
          />
          <div className={styles.servicesGrid}>
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          <div className={styles.centerCta}>
            <Button href="/services" variant="primary">
              All Services
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <SectionHeading
            eyebrow="Process"
            title="Dolor Sit Amet Method"
            description={lorem.medium}
          />
          <ProcessSteps />
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <SectionHeading
            eyebrow="Why Lorem"
            title="Consectetur Adipiscing Elit"
            description={lorem.medium}
          />
          <div className={styles.features}>
            {features.map((f) => (
              <article key={f.title} className={styles.feature}>
                <span className={styles.featureIcon} aria-hidden="true">
                  {f.icon}
                </span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <SectionHeading
            eyebrow="Portfolio"
            title="Sit Amet Gallery"
            description={lorem.medium}
          />
          <div className={styles.galleryPreview}>
            {previewImages.map((item) => (
              <Link
                key={item.id}
                href="/gallery"
                className={styles.galleryItem}
              >
                <Image src={item.image} alt="" fill sizes="33vw" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
          <div className={styles.centerCta}>
            <Button href="/gallery" variant="outline">
              Full Gallery
            </Button>
          </div>
        </div>
      </section>

      <TestimonialSlider items={testimonials} />

      <CTABand description={lorem.medium} />
    </>
  );
}
