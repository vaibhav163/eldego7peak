import { useState } from "react";
import C from "../constants/theme";
import { NAV_LINKS } from "../constants/data";
import { useScrolled } from "../hooks/useReveal";

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id.toLowerCase().replace(" ", "-"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav-links { display: none !important; }
          .hamburger-btn { display: block !important; }
          .navbar { padding: 0 24px !important; }
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: ${C.accent};
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .nav-link-item:hover::after { transform: scaleX(1); }
        .nav-link-item:hover { color: ${C.text} !important; }
        .nav-cta-link:hover { background: ${C.accent} !important; }
      `}</style>

      <nav
        className="navbar"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: "0 60px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.06)" : "none",
          transition: "border-color 0.4s, box-shadow 0.4s",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", flexDirection: "column", textDecoration: "none", lineHeight: 1 }}>
          <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: C.charcoal, letterSpacing: 0.5 }}>
            Eldeco 7 Peaks
          </span>
          <span style={{ fontSize: 9, letterSpacing: "3.5px", textTransform: "uppercase", color: C.accent, fontWeight: 500, marginTop: 2 }}>
            Greater Noida
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="desktop-nav-links" style={{ display: "flex", gap: 40, listStyle: "none" }}>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <span
                onClick={() => scrollTo(link)}
                className="nav-link-item"
                style={{
                  fontSize: 12,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: C.textLight,
                  cursor: "pointer",
                  fontWeight: 500,
                  position: "relative",
                  paddingBottom: 3,
                }}
              >
                {link}
              </span>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a
            href="tel:9990800500"
            className="nav-cta-link"
            style={{
              background: C.charcoal,
              color: C.white,
              padding: "11px 28px",
              fontSize: 11,
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.3s",
            }}
          >
            📞 9990800500
          </a>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="hamburger-btn"
            style={{ display: "none", background: "none", border: "none", fontSize: 22, cursor: "pointer", color: C.charcoal }}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 72, left: 0, right: 0,
            background: C.white,
            zIndex: 999,
            padding: "24px",
            borderTop: `1px solid ${C.border}`,
            boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <div
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                padding: "14px 0",
                fontSize: 13,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: C.textLight,
                cursor: "pointer",
                borderBottom: `1px solid ${C.border}`,
                fontWeight: 500,
              }}
            >
              {link}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
