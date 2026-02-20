import C from "../constants/theme";
import { ABOUT_FEATS } from "../constants/data";
import { Reveal, SectionLabel, SectionTitle, DividerLine } from "./UI";

export default function About() {
  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .about-section  { padding: 80px 24px !important; }
          .about-grid     { grid-template-columns: 1fr !important; gap: 48px !important; }
          .about-feats    { grid-template-columns: 1fr !important; }
        }
        .about-feat:hover { background: ${C.accentPale} !important; }
      `}</style>

      <section
        id="about"
        className="about-section"
        style={{ padding: "120px 60px", background: C.white }}
      >
        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}
        >
          {/* ── Image ── */}
          <Reveal>
            <div style={{ position: "relative" }}>
              {/* Decorative offset frame */}
              <div
                style={{
                  position: "absolute", top: -20, right: -20,
                  width: "60%", height: "60%",
                  border: `2px solid ${C.accent}`,
                  opacity: 0.2, zIndex: 0,
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85"
                alt="Luxury Interior"
                style={{ width: "100%", height: 620, objectFit: "cover", display: "block", position: "relative", zIndex: 1 }}
              />
              <div
                style={{
                  position: "absolute", bottom: 0, right: 0,
                  background: C.accent, color: C.white,
                  padding: "24px 32px", zIndex: 2,
                }}
              >
                <p style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", opacity: 0.8, marginBottom: 4 }}>
                  Possession
                </p>
                <strong style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22 }}>
                  2027 Onwards
                </strong>
              </div>
            </div>
          </Reveal>

          {/* ── Content ── */}
          <Reveal delay={0.15}>
            <SectionLabel>About the Project</SectionLabel>
            <SectionTitle>
              Elevated<br />Urban{" "}
              <em style={{ fontStyle: "italic" }}>Living</em>
              <br />Redefined
            </SectionTitle>
            <DividerLine />
            <p
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: 17, color: C.textLight, lineHeight: 1.75,
                fontStyle: "italic", maxWidth: 540, marginBottom: 40,
              }}
            >
              A new landmark in Greater Noida — Eldeco 7 Peaks offers luxury
              high-rise residences designed for those who seek privacy, space,
              and world-class living. Hill-inspired architecture meets
              thoughtful planning in every detail.
            </p>

            {/* Feature grid */}
            <div
              className="about-feats"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: C.border }}
            >
              {ABOUT_FEATS.map((feat) => (
                <div
                  key={feat.title}
                  className="about-feat"
                  style={{
                    background: C.white, padding: "28px 24px",
                    transition: "background 0.3s",
                  }}
                >
                  <div style={{ fontSize: 20, marginBottom: 10 }}>{feat.icon}</div>
                  <h4 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 15, color: C.charcoal, marginBottom: 6 }}>
                    {feat.title}
                  </h4>
                  <p style={{ fontSize: 12.5, color: C.textMuted, lineHeight: 1.6 }}>
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
