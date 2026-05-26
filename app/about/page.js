import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import ProcessSteps from "@/components/ProcessSteps";
import ScrollReveal from "@/components/ScrollReveal";
import {
  aboutCopy,
  team,
  heroImage,
  headerQuote,
  valueProposition,
  cta,
} from "@/lib/content";
import shared from "../shared.module.css";

export const metadata = {
  title: "About",
};

const values = [
  {
    title: "Fair Dealing",
    text: "Honest proposals, clear communication, and work done right the first time.",
  },
  {
    title: "Steadfastness",
    text: "Reliable crews and consistent quality you can count on season after season.",
  },
  {
    title: "Kindness to Clients",
    text: "We treat your home with respect and your questions with patience.",
  },
  {
    title: "Moderation in All Things",
    text: "Thoughtful recommendations that fit your property, budget, and lifestyle.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Crafting Noble Outdoor Spaces"
        subtitle="About"
        image={heroImage}
        size="compact"
      />

      <ScrollReveal as="section" className={shared.pageSection}>
        <div className="container">
          <div className={shared.twoCol}>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Fitzgerald Landscape Co."
                description={aboutCopy.intro}
                align="left"
              />
              <p style={{ color: "var(--slate)", lineHeight: 1.75, marginBottom: "1rem" }}>
                {aboutCopy.heritage}
              </p>
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  color: "var(--green-800)",
                  borderLeft: "4px solid var(--gold)",
                  paddingLeft: "1.25rem",
                  marginTop: "1.5rem",
                  lineHeight: 1.6,
                }}
              >
                {headerQuote}
              </blockquote>
            </div>
            <ScrollReveal variant="scale" delay={120}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
                  alt=""
                  fill
                  sizes="50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className={shared.pageSectionAlt} delay={80}>
        <div className="container">
          <SectionHeading
            eyebrow="Values"
            title="How We Work"
            description={valueProposition.text}
          />
          <div className={shared.valuesList}>
            {values.map((v, index) => (
              <ScrollReveal
                as="article"
                key={v.title}
                delay={index * 90}
                variant="up"
                className={shared.valueItem}
              >
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className={shared.pageSection} delay={80}>
        <div className="container">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet the Team"
            description="The people behind every project."
          />
          <div className={shared.teamGrid}>
            {team.map((member, index) => (
              <ScrollReveal
                as="article"
                key={member.name}
                delay={index * 100}
                variant="scale"
                className={shared.teamCard}
              >
                <div className={shared.teamPhoto}>
                  <Image src={member.image} alt="" fill sizes="200px" />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal as="section" className={shared.pageSectionAlt} delay={80}>
        <div className="container">
          <SectionHeading
            eyebrow="Approach"
            title="From Consultation to Care"
            description="A straightforward process that keeps you informed at every step."
          />
          <ProcessSteps />
        </div>
      </ScrollReveal>

      <ScrollReveal variant="up">
        <CTABand primaryLabel={cta.primaryLabel} />
      </ScrollReveal>
    </>
  );
}
