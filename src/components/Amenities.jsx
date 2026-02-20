import C from "../constants/theme";
import { AMENITIES_MAIN, AMENITIES_LIST } from "../constants/data";
import { Reveal, SectionLabel, SectionTitle } from "./UI";

export default function Amenities() {
  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .amen-section { padding: 80px 24px !important; }
          .amen-intro   { grid-template-columns: 1fr !important; gap: 32px !important; }
          .amen-bento   { grid-template-columns: 1fr 1fr !important; grid-template-rows: 180px 180px 180px !important; }
          .amen-bento > div { grid-column: auto !important; }
          .amen-pills   { grid-template-columns: repeat(2, 1fr) !important; }
          .amen-pills > div:nth-child(2n) { border-right: none !important; }
        }
        .amen-card img {
          transition: transform 0.55s ease, filter 0.55s;
          filter: brightness(0.75) saturate(0.85);
        }
        .amen-card:hover img  { transform: scale(1.06); filter: brightness(0.6) saturate(0.7); }
        .amen-card:hover .amen-sub { opacity: 1 !important; transform: translateY(0) !important; }
        .amen-pill:hover { background: ${C.accentPale} !important; color: ${C.text} !important; }
      `}</style>

      <section
        id="amenities"
        className="amen-section"
        style={{ padding: "120px 60px", background: C.white }}
      >
        {/* ── Intro row ── */}
        <div
          className="amen-intro"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginBottom: 72 }}
        >
          <Reveal>
            <SectionLabel>Lifestyle Amenities</SectionLabel>
            <SectionTitle>
              Life Beyond<br />
              <em style={{ fontStyle: "italic" }}>Four Walls</em>
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: 17, color: C.textLight, lineHeight: 1.75, fontStyle: "italic",
              }}
            >
              Curated amenities for every age group — from resort-style pools
              and sports courts to lush green zones and a grand clubhouse. A
              lifestyle, not just a home.
            </p>
          </Reveal>
        </div>

        {/* ── Bento grid ── */}
        <Reveal>
          <div
            className="amen-bento"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "280px 200px",
              gap: 4,
            }}
          >
            {AMENITIES_MAIN.map((a) => (
              <div
                key={a.title}
                className="amen-card"
                style={{
                  position: "relative", overflow: "hidden",
                  gridColumn: a.wide ? "span 2" : "span 1",
                }}
              >
                <img
                  src={a.img}
                  alt={a.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    padding: "20px 24px",
                    background: "linear-gradient(to top, rgba(30,29,27,0.88), transparent)",
                  }}
                >
                  <h4 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: C.white }}>
                    {a.title}
                  </h4>
                  <span
                    className="amen-sub"
                    style={{
                      fontSize: 10, letterSpacing: "2px", textTransform: "uppercase",
                      color: "rgba(255,255,255,0.55)", opacity: 0,
                      transform: "translateY(8px)", display: "block", marginTop: 4,
                      transition: "all 0.3s 0.1s",
                    }}
                  >
                    {a.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── List pills ── */}
        <Reveal delay={0.1}>
          <div
            className="amen-pills"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: `1px solid ${C.border}`,
              marginTop: 4,
            }}
          >
            {AMENITIES_LIST.map((item, i) => (
              <div
                key={item}
                className="amen-pill"
                style={{
                  padding: "22px 28px",
                  borderRight: (i + 1) % 4 !== 0 ? `1px solid ${C.border}` : "none",
                  borderBottom: `1px solid ${C.border}`,
                  fontSize: 13, color: C.textLight,
                  transition: "background 0.2s, color 0.2s", cursor: "default",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
