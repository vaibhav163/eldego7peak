import C from "../constants/theme";
import { LOCATION_ROWS } from "../constants/data";
import { Reveal, SectionLabel, SectionTitle, DividerLine } from "./UI";

export default function Location() {
  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .loc-layout   { grid-template-columns: 1fr !important; }
          .loc-panel    { padding: 60px 24px !important; }
          .loc-map-side { height: 350px !important; }
        }
        .loc-row:last-child { border-bottom: none !important; }
      `}</style>

      <div
        id="location"
        className="loc-layout"
        style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", minHeight: 600 }}
      >
        {/* ── Info panel ── */}
        <div
          className="loc-panel"
          style={{
            background: C.charcoal,
            color: C.white,
            padding: "72px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Reveal>
            <SectionLabel>Strategic Location</SectionLabel>
            <SectionTitle light>
              Perfectly<br />
              <em style={{ fontStyle: "italic" }}>Connected</em>
            </SectionTitle>
            <DividerLine />
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, marginBottom: 40 }}>
              Sector Omicron 1A, Greater Noida — surrounded by major
              infrastructure, healthcare, education, and entertainment hubs
              across Delhi NCR.
            </p>

            {/* Distance list */}
            <div>
              {LOCATION_ROWS.map(([name, dist], i) => (
                <div
                  key={name}
                  className="loc-row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 0",
                    borderBottom: i < LOCATION_ROWS.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                  }}
                >
                  <span style={{ fontSize: 13.5, color: "rgba(255,255,255,0.65)" }}>{name}</span>
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 17, color: C.accent, fontStyle: "italic" }}>
                    {dist}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── Map ── */}
        <div className="loc-map-side" style={{ position: "relative" }}>
          <iframe
            title="Eldeco 7 Peaks Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14020.96!2d77.505!3d28.455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e3b0c4d00f%3A0x5c2b7b9e0c48e14!2sSector%20Omicron%201A%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000001"
            width="100%"
            height="100%"
            style={{ border: "none", display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
}
