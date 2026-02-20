import C from "../constants/theme";
import { useReveal } from "../hooks/useReveal";

/* ── Reveal wrapper ─────────────────────────────────────────── */
export function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── Section label ──────────────────────────────────────────── */
export function SectionLabel({ children, light }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        fontSize: 10,
        letterSpacing: "4px",
        textTransform: "uppercase",
        color: C.accent,
        fontWeight: 600,
        marginBottom: 18,
      }}
    >
      <span
        style={{
          width: 28,
          height: 1,
          background: C.accent,
          display: "block",
          flexShrink: 0,
        }}
      />
      {children}
    </div>
  );
}

/* ── Section title ──────────────────────────────────────────── */
export function SectionTitle({ children, light }) {
  return (
    <h2
      style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: "clamp(38px, 5vw, 58px)",
        color: light ? C.white : C.charcoal,
        lineHeight: 1.08,
        marginBottom: 20,
      }}
    >
      {children}
    </h2>
  );
}

/* ── Divider line ───────────────────────────────────────────── */
export function DividerLine() {
  return (
    <div
      style={{ width: 48, height: 2, background: C.accent, margin: "28px 0" }}
    />
  );
}

/* ── Primary button ─────────────────────────────────────────── */
export function BtnDark({ children, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: C.charcoal,
        color: C.white,
        padding: "16px 40px",
        fontSize: 11,
        letterSpacing: "2.5px",
        textTransform: "uppercase",
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif",
        transition: "background 0.3s",
        ...style,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = C.accent)}
      onMouseLeave={(e) => (e.currentTarget.style.background = C.charcoal)}
    >
      {children}
    </button>
  );
}

/* ── Outline button ─────────────────────────────────────────── */
export function BtnStroke({ children, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "transparent",
        color: C.charcoal,
        padding: "16px 40px",
        fontSize: 11,
        letterSpacing: "2.5px",
        textTransform: "uppercase",
        fontWeight: 600,
        border: `1.5px solid ${C.charcoal}`,
        cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif",
        transition: "all 0.3s",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = C.accent;
        e.currentTarget.style.color = C.accent;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = C.charcoal;
        e.currentTarget.style.color = C.charcoal;
      }}
    >
      {children}
    </button>
  );
}
