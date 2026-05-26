import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import {
  serviceCategories,
  getServicesByCategory,
} from "@/lib/content";
import styles from "./ServicesOverview.module.css";

export default function ServicesOverview({ limitPerCategory }) {
  return (
    <div className={styles.wrap}>
      {serviceCategories.map((category, categoryIndex) => {
        const items = getServicesByCategory(category.id);
        const shown = limitPerCategory
          ? items.slice(0, limitPerCategory)
          : items;

        if (!shown.length) return null;

        return (
          <ScrollReveal
            key={category.id}
            delay={categoryIndex * 100}
            className={styles.category}
          >
            <SectionHeading
              eyebrow={category.id === "year-round" ? "Year-Round" : "Seasonal"}
              title={category.title}
              description={category.description}
              align="left"
            />
            <div className={styles.grid}>
              {shown.map((service, index) => (
                <ScrollReveal key={service.id} delay={index * 90} variant="up">
                  <ServiceCard {...service} href="/services" />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
