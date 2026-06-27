import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import {
  services,
  getServiceById,
  cta,
  valueProposition,
} from "@/lib/content";
import shared from "../../shared.module.css";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={service.title}
        subtitle="Services"
        image={service.image}
        size="compact"
        primaryCta={{ href: cta.primaryHref, label: cta.primaryLabel }}
      />

      <ScrollReveal as="section" className={shared.pageSection}>
        <div className="container">
          <article className={shared.serviceDetail}>
            <div className={shared.serviceImage}>
              <Image src={service.image} alt="" fill sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div className={shared.serviceContent}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  color: "var(--green-900)",
                  marginBottom: "1rem",
                }}
              >
                {service.title}
              </h2>
              <p>{service.description}</p>
              <ul className={shared.serviceList}>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div style={{ marginTop: "2rem" }}>
                <Button href={cta.primaryHref} variant="primary">
                  {cta.primaryLabel}
                </Button>
              </div>
            </div>
          </article>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="up">
        <CTABand
          title={`Ready for ${service.title}?`}
          description={valueProposition.text}
          primaryLabel={cta.primaryLabel}
        />
      </ScrollReveal>
    </>
  );
}
