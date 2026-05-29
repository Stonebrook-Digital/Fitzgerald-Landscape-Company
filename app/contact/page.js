import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { contact, valueProposition, cta } from "@/lib/content";
import shared from "../shared.module.css";

export const metadata = {
  title: "Contact",
};

const faqs = [
  {
    q: "Do you offer free quotes?",
    a: "Yes. We provide free on-site consultations and estimates for all services.",
  },
  {
    q: "What areas do you serve?",
    a: "We are based in Woodbury, NJ and serve South Jersey and surrounding neighborhoods. Contact us to confirm availability for your address.",
  },
  {
    q: "Do you offer year-round maintenance?",
    a: "Absolutely. Our maintenance plans include lawn care, bed work, aeration, fertilization, and seasonal cleanups.",
  },
  {
    q: "When should I book seasonal services?",
    a: "Spring services like sod and aeration book early. Fall leaf cleanups and winter snow contracts should be scheduled ahead of the season.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Request a Free Quote"
        subtitle="Contact"
        image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=85"
        size="compact"
        primaryCta={{ href: "#contact-form", label: cta.primaryLabel }}
      />

      <ScrollReveal as="section" className={shared.pageSection} id="contact-form">
        <div className="container">
          <div className={shared.contactGrid}>
            <ScrollReveal className={shared.contactInfo} delay={80}>
              <SectionHeading
                eyebrow="Reach Out"
                title="Let's Discuss Your Property"
                description={valueProposition.text}
                align="left"
              />

              <div className={shared.infoBlock}>
                <h3>{contact.owner}</h3>
                <p>Fitzgerald Landscape Co.</p>
              </div>

              <div className={shared.infoBlock}>
                <h3>Phone</h3>
                <p>
                  <a href={`tel:${contact.phone.replace(/\D/g, "")}`}>
                    {contact.phone}
                  </a>
                </p>
              </div>

              <div className={shared.infoBlock}>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
              </div>

              <div className={shared.infoBlock}>
                <h3>Address</h3>
                <p>{contact.address}</p>
              </div>

              <div className={shared.infoBlock}>
                <h3>Hours</h3>
                <p>{contact.hours}</p>
              </div>

              <div className={shared.mapPlaceholder} aria-hidden="true">
                Map — {contact.address}
              </div>
            </ScrollReveal>

            <ScrollReveal variant="scale" delay={160} className={shared.formCard}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  color: "var(--green-900)",
                  marginBottom: "0.5rem",
                }}
              >
                {cta.primaryLabel}
              </h2>
              <p
                style={{
                  color: "var(--slate)",
                  marginBottom: "1.75rem",
                  fontSize: "0.95rem",
                }}
              >
                Tell us about your property and the services you&apos;re interested in.
                We&apos;ll follow up to schedule a consultation.
              </p>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className={shared.pageSectionAlt} delay={80}>
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title="Common Questions"
            description="Quick answers before you reach out."
          />
          <div className={shared.faqList}>
            {faqs.map((faq, index) => (
              <ScrollReveal
                as="article"
                key={faq.q}
                delay={index * 80}
                variant="up"
                className={shared.faqItem}
              >
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
