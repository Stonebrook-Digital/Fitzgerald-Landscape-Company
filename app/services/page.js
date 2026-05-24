import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTABand from "@/components/CTABand";
import { lorem, services } from "@/lib/content";
import shared from "../shared.module.css";

export const metadata = {
  title: "Services",
};

const checklist = [
  "Lorem ipsum dolor sit",
  "Consectetur adipiscing elit",
  "Sed do eiusmod tempor",
  "Ut labore et dolore magna",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Lorem Ipsum Landscape Services"
        subtitle="Services"
        image="https://images.unsplash.com/photo-1598902108854-10e335adac99?w=1920&q=85"
        size="compact"
        primaryCta={{ href: "/contact", label: "Get Lorem Quote" }}
      />

      <section className={shared.pageSection}>
        <div className="container">
          <SectionHeading
            eyebrow="Overview"
            title={lorem.heading}
            description={lorem.long}
          />
          <div className={`${shared.cardGrid} ${shared.cardGrid3}`}>
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} href="/contact" />
            ))}
          </div>
        </div>
      </section>

      <section className={shared.pageSectionAlt}>
        <div className="container">
          <SectionHeading
            eyebrow="Details"
            title="Sit Amet Service Breakdown"
            description={lorem.medium}
          />
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`${shared.serviceDetail} ${index % 2 === 1 ? shared.serviceDetailReverse : ""}`}
            >
              <div className={shared.serviceImage}>
                <Image src={service.image} alt="" fill sizes="50vw" />
              </div>
              <div className={shared.serviceContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <p>{lorem.medium}</p>
                <ul className={shared.serviceList}>
                  {checklist.map((item) => (
                    <li key={`${service.id}-${item}`}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABand
        title="Ready for Lorem Ipsum?"
        description={lorem.medium}
        primaryLabel="Request Quote"
      />
    </>
  );
}
