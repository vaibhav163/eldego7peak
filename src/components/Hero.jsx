import C from "../constants/theme";
import { STATS } from "../constants/data";
import { BtnDark, BtnStroke } from "./UI";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero({ onEnquire }) {
  const anim = (delay) => ({
    animation: `fadeSlideUp 0.9s ease ${delay}s both`,
  });

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right  { height: 60vw !important; }
          .hero-left   { padding: 48px 24px !important; }
          .hero-stats  { flex-wrap: wrap; gap: 16px !important; }
        }
      `}</style>

      <section
        className="hero-grid"
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          paddingTop: 72,
          overflow: "hidden",
        }}
      >
        {/* ── Left panel ── */}
        <div
          className="hero-left"
          style={{
            background: C.offWhite,
            padding: "80px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Grain texture */}
          <div
            style={{
              position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.5,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Eyebrow */}
          <div style={{ ...anim(0.1), display: "flex", alignItems: "center", gap: 14, fontSize: 10, letterSpacing: "4px", textTransform: "uppercase", color: C.accent, fontWeight: 600, marginBottom: 32 }}>
            <span style={{ width: 36, height: 1, background: C.accent }} />
            Eldeco Group · Luxury Residences
          </div>

          {/* Title */}
          <h1 style={{ ...anim(0.2), fontFamily: "'DM Serif Display', serif", fontSize: "clamp(52px, 6vw, 82px)", lineHeight: 1.0, color: C.charcoal, marginBottom: 10 }}>
            7<br />
            <em style={{ fontStyle: "italic", color: C.accent }}>Peaks</em>
            <br />Residences
          </h1>

          {/* Description */}
          <p style={{ ...anim(0.3), fontFamily: "'Libre Baskerville', serif", fontSize: 17, fontStyle: "italic", color: C.textLight, lineHeight: 1.65, marginBottom: 52, maxWidth: 440 }}>
            Luxury 3 &amp; 4 BHK apartments in Sector Omicron 1A, Greater Noida
            — inspired by the grandeur of elevated living.
          </p>

          {/* Stats */}
          <div className="hero-stats" style={{ ...anim(0.4), display: "flex", marginBottom: 52 }}>
            {STATS.map((s, i) => (
              <div
                key={s.val}
                style={{
                  paddingRight: 32, marginRight: 32,
                  borderRight: i < STATS.length - 1 ? `1px solid ${C.border}` : "none",
                }}
              >
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 36, color: C.charcoal, lineHeight: 1, marginBottom: 4 }}>
                  {s.val}
                </div>
                <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: C.textMuted, fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Price Tag */}
          <div style={{ ...anim(0.5), display: "inline-flex", flexDirection: "column", background: C.charcoal, color: C.white, padding: "20px 32px", marginBottom: 36, alignSelf: "flex-start" }}>
            <span style={{ fontSize: 9, letterSpacing: "3px", textTransform: "uppercase", opacity: 0.55, marginBottom: 4 }}>
              Starting From
            </span>
            <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32 }}>
              ₹ 2.11 Cr*
            </span>
          </div>

          {/* CTAs */}
          <div style={{ ...anim(0.6), display: "flex", gap: 16, flexWrap: "wrap" }}>
            <BtnDark onClick={() => scrollTo("floor-plans")}>View Floor Plans</BtnDark>
            <BtnStroke onClick={() => scrollTo("about")}>Explore Project</BtnStroke>
          </div>
        </div>

        {/* ── Right image ── */}
        <div
          className="hero-right"
          style={{ position: "relative", overflow: "hidden", minHeight: 500 }}
        >
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=85"
            alt="Eldeco 7 Peaks"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div
            style={{
              position: "absolute", bottom: 0, left: 0,
              background: C.white, padding: "20px 28px",
              borderLeft: `4px solid ${C.accent}`,
            }}
          >
            <p style={{ fontSize: 12, color: C.textLight, marginBottom: 4 }}>RERA Registered</p>
            <strong style={{ fontFamily: "'DM Serif Display', serif", fontSize: 16, color: C.charcoal }}>
              Sector Omicron 1A, Gr. Noida
            </strong>
          </div>
        </div>
      </section>
    </>
  );
}
