import SectionHeading from "@/components/SectionHeading";
import { serviceArea, contact } from "@/lib/content";
import styles from "./ServiceAreaMap.module.css";

const DEFAULT_MAP_BBOX = [-75.19, 39.805, -75.115, 39.865];
const DEFAULT_MAP_CENTER = { lat: 39.838, lng: -75.153 };

function buildMapEmbedUrl() {
  const mapBbox = serviceArea.mapBbox ?? DEFAULT_MAP_BBOX;
  const center = serviceArea.center ?? DEFAULT_MAP_CENTER;
  const [minLon, minLat, maxLon, maxLat] = mapBbox;
  const { lat, lng } = center;

  return `https://www.openstreetmap.org/export/embed.html?bbox=${minLon}%2C${minLat}%2C${maxLon}%2C${maxLat}&layer=mapnik&marker=${lat}%2C${lng}`;
}

export default function ServiceAreaMap() {
  const mapUrl = buildMapEmbedUrl();

  return (
    <section className={styles.section} aria-label="Service area">
      <div className="container">
        <SectionHeading
          eyebrow={serviceArea.eyebrow}
          title={serviceArea.title}
          description={serviceArea.description}
        />

        <div className={styles.mapShell}>
          <div className={styles.mapFrame}>
            <iframe
              title="Woodbury, NJ service area map"
              src={mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            />
            <div className={styles.highlight} aria-hidden="true">
              <span className={styles.highlightRing} />
              <span className={styles.highlightLabel}>Woodbury</span>
            </div>
          </div>

          <aside className={styles.legend}>
            <p className={styles.legendBadge}>{serviceArea.tagline}</p>
            <p className={styles.legendCopy}>{serviceArea.subtext}</p>
            <p className={styles.legendNote}>
              Questions about your area? Call{" "}
              <a href={`tel:${contact.phone.replace(/\D/g, "")}`}>
                {contact.phone}
              </a>
              .
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
