import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import { services, getServiceHref } from "@/lib/content";
import styles from "./ServicesOverview.module.css";

export default function ServicesOverview({ limit }) {
  const shown = limit ? services.slice(0, limit) : services;

  return (
    <div className={styles.wrap}>
      <div className={styles.grid}>
        {shown.map((service, index) => (
          <ScrollReveal key={service.id} delay={index * 90} variant="up">
            <ServiceCard {...service} href={getServiceHref(service.id)} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
