import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { lorem, placeholderContact } from "@/lib/content";
import shared from "../shared.module.css";

export const metadata = {
  title: "Contact",
};

const faqs = [
  { q: "Lorem ipsum dolor sit amet?", a: lorem.medium },
  { q: "Consectetur adipiscing elit?", a: lorem.medium },
  { q: "Sed do eiusmod tempor?", a: lorem.medium },
  { q: "Ut labore et dolore magna?", a: lorem.medium },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Lorem Ipsum Get In Touch"
        subtitle="Contact"
        image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=85"
        size="compact"
      />

      <section className={shared.pageSection}>
        <div className="container">
          <div className={shared.contactGrid}>
            <div className={shared.contactInfo}>
              <SectionHeading
                eyebrow="Reach Out"
                title={lorem.heading}
                description={lorem.medium}
                align="left"
              />

              <div className={shared.infoBlock}>
                <h3>Phone</h3>
                <p>
                  <a href={`tel:${placeholderContact.phone.replace(/\D/g, "")}`}>
                    {placeholderContact.phone}
                  </a>
                </p>
              </div>

              <div className={shared.infoBlock}>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${placeholderContact.email}`}>
                    {placeholderContact.email}
                  </a>
                </p>
              </div>

              <div className={shared.infoBlock}>
                <h3>Address</h3>
                <p>{placeholderContact.address}</p>
              </div>

              <div className={shared.infoBlock}>
                <h3>Hours</h3>
                <p>{placeholderContact.hours}</p>
              </div>

              <div className={shared.mapPlaceholder} aria-hidden="true">
                Lorem Map Placeholder
              </div>
            </div>

            <div className={shared.formCard}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  color: "var(--green-900)",
                  marginBottom: "0.5rem",
                }}
              >
                Send Lorem Message
              </h2>
              <p
                style={{
                  color: "var(--slate)",
                  marginBottom: "1.75rem",
                  fontSize: "0.95rem",
                }}
              >
                {lorem.short}
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className={shared.pageSectionAlt}>
        <div className="container">
          <SectionHeading
            eyebrow="FAQ"
            title="Amet Consectetur Questions"
            description={lorem.short}
          />
          <div className={shared.faqList}>
            {faqs.map((faq) => (
              <article key={faq.q} className={shared.faqItem}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
