import C from "../constants/theme";
import { DEVELOPER_STATS } from "../constants/data";
import { Reveal } from "./UI";

export default function DeveloperStrip() {
  return (
    <Reveal>
      <style>{`
        @media (max-width: 900px) {
          .dev-strip {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding: 48px 24px !important;
          }
          .dev-num-box {
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid rgba(255,255,255,0.2);
            padding-top: 24px !important;
            text-align: left !important;
          }
        }
      `}</style>

      <div
        className="dev-strip"
        style={{
          background: C.accent,
          padding: "60px",
          display: "grid",
          gridTemplateColumns: "1fr auto auto auto",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* Headline */}
        <div>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: C.white }}>
            Trusted by 30,000+ Homeowners
          </h3>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginTop: 6 }}>
            Eldeco Group — 40+ years of building dream homes across India
          </p>
        </div>

        {/* Stats */}
        {DEVELOPER_STATS.map(({ val, label }) => (
          <div
            key={label}
            className="dev-num-box"
            style={{
              textAlign: "center",
              borderLeft: "1px solid rgba(255,255,255,0.25)",
              paddingLeft: 60,
            }}
          >
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 44, color: C.white, lineHeight: 1 }}>
              {val}
            </div>
            <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginTop: 4 }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
