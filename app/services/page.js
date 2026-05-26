import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServicesOverview from "@/components/ServicesOverview";
import CTABand from "@/components/CTABand";
import ScrollReveal from "@/components/ScrollReveal";
import { valueProposition, cta, services } from "@/lib/content";
import shared from "../shared.module.css";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Landscape Services for Every Season"
        subtitle="Services"
        image="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=1920&q=85"
        size="compact"
        primaryCta={{ href: cta.primaryHref, label: cta.primaryLabel }}
      />

      <ScrollReveal as="section" className={shared.pageSection}>
        <div className="container">
          <SectionHeading
            eyebrow="Overview"
            title="Year-Round & Seasonal Care"
            description={valueProposition.text}
          />
          <ServicesOverview />
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className={shared.pageSectionAlt} delay={80}>
        <div className="container">
          <SectionHeading
            eyebrow="Details"
            title="What We Offer"
            description="Every service is delivered with the same commitment to fair dealing, quality workmanship, and respect for your property."
          />
          {services.map((service, index) => (
            <ScrollReveal
              as="article"
              key={service.id}
              delay={index * 60}
              variant="up"
              className={`${shared.serviceDetail} ${index % 2 === 1 ? shared.serviceDetailReverse : ""}`}
            >
              <div className={shared.serviceImage}>
                <Image src={service.image} alt="" fill sizes="50vw" />
              </div>
              <div className={shared.serviceContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className={shared.serviceList}>
                  {service.items.map((item) => (
                    <li key={`${service.id}-${item}`}>{item}</li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal variant="up">
        <CTABand
          title="Ready to Get Started?"
          description={valueProposition.text}
          primaryLabel={cta.primaryLabel}
        />
      </ScrollReveal>
    </>
  );
}
