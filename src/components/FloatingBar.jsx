import C from "../constants/theme";
import { useScrolled } from "../hooks/useReveal";

export default function FloatingBar({ onEnquire }) {
  const visible = useScrolled(500);

  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .fbar { padding: 14px 20px !important; }
          .fbar-price { display: none !important; }
        }
        .fbar-phone:hover { background: ${C.charcoal} !important; color: ${C.white} !important; }
        .fbar-enquire:hover { background: ${C.accentDark} !important; }
      `}</style>

      <div
        className="fbar"
        style={{
          position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999,
          background: C.white,
          borderTop: `1px solid ${C.border}`,
          padding: "14px 60px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          boxShadow: "0 -8px 32px rgba(0,0,0,0.08)",
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.4s ease",
          flexWrap: "wrap", gap: 12,
        }}
      >
        {/* Project info */}
        <div>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 16, color: C.charcoal }}>
            Eldeco 7 Peaks
          </div>
          <div style={{ fontSize: 11, color: C.textMuted, letterSpacing: 1, marginTop: 2 }}>
            Sector Omicron 1A, Greater Noida
          </div>
        </div>

        {/* Price */}
        <div
          className="fbar-price"
          style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: C.charcoal, fontStyle: "italic" }}
        >
          From ₹ 2.11 Cr*
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 12 }}>
          <a
            href="tel:9990800500"
            className="fbar-phone"
            style={{
              padding: "11px 24px",
              background: "transparent",
              border: `1.5px solid ${C.charcoal}`,
              color: C.charcoal,
              fontSize: 11, letterSpacing: "2px", textTransform: "uppercase",
              fontWeight: 600, cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: "none",
              display: "flex", alignItems: "center", gap: 8,
              transition: "all 0.3s",
            }}
          >
            📞 Call Us
          </a>
          <button
            onClick={() => onEnquire("3 BHK")}
            className="fbar-enquire"
            style={{
              padding: "11px 28px",
              background: C.accent, color: C.white,
              fontSize: 11, letterSpacing: "2px", textTransform: "uppercase",
              fontWeight: 600, border: "none", cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              transition: "background 0.3s",
            }}
          >
            View Plans
          </button>
        </div>
      </div>
    </>
  );
}
