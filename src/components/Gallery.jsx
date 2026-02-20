import C from "../constants/theme";
import { GALLERY_IMGS } from "../constants/data";
import { Reveal, SectionLabel, SectionTitle } from "./UI";

/* Each item's CSS grid-area for the 12-column layout */
const GRID_AREAS = [
  "1 / 1 / 2 / 6",
  "1 / 6 / 2 / 9",
  "1 / 9 / 2 / 13",
  "2 / 1 / 3 / 5",
  "2 / 5 / 3 / 9",
  "2 / 9 / 3 / 13",
];

export default function Gallery() {
  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .gallery-section { padding: 80px 24px !important; }
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: 200px 200px 200px !important;
          }
          .gallery-grid > div { grid-area: auto !important; }
        }
        .gallery-item img { transition: transform 0.6s ease; }
        .gallery-item:hover img { transform: scale(1.05); }
      `}</style>

      <section
        id="gallery"
        className="gallery-section"
        style={{ padding: "120px 60px", background: C.offWhite2 }}
      >
        <Reveal>
          <SectionLabel>Visual Gallery</SectionLabel>
          <SectionTitle>
            Meticulously Planned<br />
            <em style={{ fontStyle: "italic" }}>Spaces &amp; Vistas</em>
          </SectionTitle>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="gallery-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gridTemplateRows: "340px 220px",
              gap: 6,
              marginTop: 64,
            }}
          >
            {GALLERY_IMGS.map((img, i) => (
              <div
                key={img.src}
                className="gallery-item"
                style={{ gridArea: GRID_AREAS[i], overflow: "hidden" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
