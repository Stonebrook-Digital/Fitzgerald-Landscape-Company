import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import ProcessSteps from "@/components/ProcessSteps";
import { lorem, team, heroImage } from "@/lib/content";
import shared from "../shared.module.css";

export const metadata = {
  title: "About",
};

const values = [
  { title: "Lorem Integrity", text: lorem.medium },
  { title: "Ipsum Quality", text: lorem.medium },
  { title: "Dolor Innovation", text: lorem.medium },
  { title: "Sit Community", text: lorem.medium },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Lorem Ipsum Our Story"
        subtitle="About"
        image={heroImage}
        size="compact"
      />

      <section className={shared.pageSection}>
        <div className="container">
          <div className={shared.twoCol}>
            <div>
              <SectionHeading
                eyebrow="Heritage"
                title={lorem.heading}
                description={lorem.long}
                align="left"
              />
              <p style={{ color: "var(--slate)", lineHeight: 1.75, marginBottom: "1rem" }}>
                {lorem.long}
              </p>
              <p style={{ color: "var(--slate)", lineHeight: 1.75 }}>
                {lorem.medium}
              </p>
            </div>
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
          </div>
        </div>
      </section>

      <section className={shared.pageSectionAlt}>
        <div className="container">
          <SectionHeading
            eyebrow="Values"
            title="Consectetur Adipiscing"
            description={lorem.medium}
          />
          <div className={shared.valuesList}>
            {values.map((v) => (
              <article key={v.title} className={shared.valueItem}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={shared.pageSection}>
        <div className="container">
          <SectionHeading
            eyebrow="Team"
            title="Lorem Ipsum Leaders"
            description={lorem.medium}
          />
          <div className={shared.teamGrid}>
            {team.map((member) => (
              <article key={member.name} className={shared.teamCard}>
                <div className={shared.teamPhoto}>
                  <Image src={member.image} alt="" fill sizes="200px" />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={shared.pageSectionAlt}>
        <div className="container">
          <SectionHeading
            eyebrow="Approach"
            title="Dolor Sit Process"
            description={lorem.medium}
          />
          <ProcessSteps />
        </div>
      </section>

      <CTABand />
    </>
  );
}
