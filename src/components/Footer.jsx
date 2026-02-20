import C from "../constants/theme";

const FOOTER_LINKS = [
  { label: "About", id: "about" },
  { label: "Floor Plans", id: "floor-plans" },
  { label: "Amenities", id: "amenities" },
  { label: "Location", id: "location" },
];

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .site-footer { flex-direction: column !important; text-align: center !important; padding: 32px 24px !important; }
        }
        .footer-link:hover { color: ${C.accent} !important; }
      `}</style>

      <footer
        className="site-footer"
        style={{
          background: C.charcoal,
          padding: "40px 60px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          flexWrap: "wrap", gap: 20,
        }}
      >
        {/* Logo */}
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: C.white }}>
          Eldeco{" "}
          <em style={{ color: C.accent, fontStyle: "italic" }}>7 Peaks</em>
        </div>

        {/* Links */}
        <ul style={{ display: "flex", gap: 32, listStyle: "none", flexWrap: "wrap" }}>
          {FOOTER_LINKS.map(({ label, id }) => (
            <li key={id}>
              <span
                onClick={() => scrollTo(id)}
                className="footer-link"
                style={{
                  fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)", cursor: "pointer",
                  transition: "color 0.2s",
                }}
              >
                {label}
              </span>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
          © 2025 Eldeco 7 Peaks · Greater Noida
        </p>
      </footer>
    </>
  );
}
