import { useState } from "react";
import C from "../constants/theme";
import { FLOOR_PLANS } from "../constants/data";
import { Reveal, SectionLabel, SectionTitle } from "./UI";
import FloorPlanSVG from "./FloorPlanSVG";

export default function FloorPlans({ onEnquire }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const plan = FLOOR_PLANS[activeIndex];

  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .fp-section { padding: 80px 24px !important; }
          .fp-body    { grid-template-columns: 1fr !important; }
          .fp-img-side { min-height: 280px !important; border-right: none !important; border-bottom: 1px solid ${C.border} !important; }
          .fp-detail  { padding: 40px 28px !important; }
        }
        .fp-enquire-btn:hover { background: ${C.accent} !important; }
      `}</style>

      <section
        id="floor-plans"
        className="fp-section"
        style={{ padding: "120px 60px", background: C.offWhite }}
      >
        <Reveal>
          <SectionLabel>Floor Plans &amp; Pricing</SectionLabel>
          <SectionTitle>
            Choose Your<br />
            <em style={{ fontStyle: "italic" }}>Perfect Home</em>
          </SectionTitle>
        </Reveal>

        {/* ── Tabs ── */}
        <Reveal delay={0.1}>
          <div style={{ display: "flex", borderBottom: `1px solid ${C.border}`, marginTop: 48 }}>
            {FLOOR_PLANS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveIndex(i)}
                style={{
                  padding: "14px 36px",
                  fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600,
                  border: "none", background: "transparent", cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif",
                  color: activeIndex === i ? C.charcoal : C.textMuted,
                  borderBottom: activeIndex === i ? `3px solid ${C.accent}` : "3px solid transparent",
                  marginBottom: -1, transition: "all 0.25s",
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* ── Panel ── */}
        <div
          className="fp-body"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Image / schematic */}
          <div
            className="fp-img-side"
            style={{
              background: C.offWhite2,
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 60, minHeight: 460,
              borderRight: `1px solid ${C.border}`,
            }}
          >
            <div
              style={{
                width: "100%", aspectRatio: "4/3",
                background: C.light,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column", gap: 12,
              }}
            >
              <FloorPlanSVG planId={plan.id} />
              <p style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: C.textMuted }}>
                Floor Plan — {plan.config}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="fp-detail" style={{ padding: "60px 72px", background: C.white }}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 52, color: C.charcoal, lineHeight: 1, marginBottom: 6 }}>
              {plan.config}
            </div>
            <div style={{ fontSize: 13, letterSpacing: "1.5px", color: C.textMuted, textTransform: "uppercase", marginBottom: 28 }}>
              {plan.size}
            </div>
            <div
              style={{
                display: "inline-block",
                background: C.accentPale, border: `1px solid ${C.accent}`,
                color: C.accentDark, padding: "10px 24px",
                fontFamily: "'DM Serif Display', serif", fontSize: 22,
                marginBottom: 36,
              }}
            >
              {plan.price}
            </div>

            {/* Specs table */}
            <div style={{ borderTop: `1px solid ${C.border}`, marginBottom: 40 }}>
              {plan.specs.map(([label, val]) => (
                <div
                  key={label}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "14px 0", borderBottom: `1px solid ${C.border}`, fontSize: 13.5,
                  }}
                >
                  <span style={{ color: C.textMuted }}>{label}</span>
                  <span style={{ color: C.charcoal, fontWeight: 600 }}>{val}</span>
                </div>
              ))}
            </div>

            <button
              className="fp-enquire-btn"
              onClick={() => onEnquire(plan.config)}
              style={{
                background: C.charcoal, color: C.white,
                padding: "16px 40px", fontSize: 11, letterSpacing: "2.5px",
                textTransform: "uppercase", fontWeight: 700,
                border: "none", cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", transition: "background 0.3s",
              }}
            >
              Enquire for {plan.config}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
