import { useState, useEffect } from "react";
import C from "../constants/theme";

const CONFIG_OPTIONS = [
  "3 BHK — ₹2.16–2.28 Cr",
  "3 BHK+ Servant — ₹2.52–2.64 Cr",
  "4 BHK — Price on Request",
];

const CONFIG_MAP = {
  "3 BHK": CONFIG_OPTIONS[0],
  "3 BHK+": CONFIG_OPTIONS[1],
  "4 BHK": CONFIG_OPTIONS[2],
};

export default function EnquiryModal({ config, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", config: CONFIG_MAP[config] ?? CONFIG_OPTIONS[0] });
  const [focus, setFocus] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  /* Sync config prop */
  useEffect(() => {
    if (config && CONFIG_MAP[config]) {
      setForm((f) => ({ ...f, config: CONFIG_MAP[config] }));
    }
  }, [config]);

  const inputStyle = (field) => ({
    width: "100%",
    padding: "13px 16px",
    border: `1.5px solid ${focus === field ? C.accent : C.border}`,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    outline: "none",
    color: C.text,
    background: C.white,
    transition: "border-color 0.2s",
  });

  const labelStyle = {
    fontSize: 10,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: C.textMuted,
    display: "block",
    marginBottom: 8,
  };

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 2000,
        background: "rgba(30,29,27,0.6)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <div
        style={{
          background: C.white,
          maxWidth: 480, width: "90%",
          padding: "52px 48px",
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", fontSize: 20, cursor: "pointer", color: C.textMuted }}
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div style={{ fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: C.accent, fontWeight: 600, marginBottom: 12 }}>
              Get in Touch
            </div>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: C.charcoal, marginBottom: 6 }}>
              Request a Callback
            </h3>
            <p style={{ fontSize: 13, color: C.textMuted, marginBottom: 36 }}>
              Our team will contact you within 2 hours.
            </p>

            {/* Name */}
            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle}>Full Name *</label>
              <input
                type="text" placeholder="Your name" value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                onFocus={() => setFocus("name")} onBlur={() => setFocus(null)}
                style={inputStyle("name")}
              />
            </div>

            {/* Phone */}
            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle}>Phone Number *</label>
              <input
                type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                onFocus={() => setFocus("phone")} onBlur={() => setFocus(null)}
                style={inputStyle("phone")}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email" placeholder="your@email.com" value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                onFocus={() => setFocus("email")} onBlur={() => setFocus(null)}
                style={inputStyle("email")}
              />
            </div>

            {/* Config */}
            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Interested In</label>
              <select
                value={form.config}
                onChange={(e) => setForm((f) => ({ ...f, config: e.target.value }))}
                style={{ ...inputStyle("config"), appearance: "none", WebkitAppearance: "none" }}
              >
                {CONFIG_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              onClick={() => setSubmitted(true)}
              style={{
                width: "100%", background: C.charcoal, color: C.white,
                padding: 16, fontFamily: "'DM Sans', sans-serif",
                fontSize: 11, letterSpacing: "2.5px", textTransform: "uppercase",
                fontWeight: 700, border: "none", cursor: "pointer", transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.charcoal)}
            >
              Send Enquiry →
            </button>
          </>
        ) : (
          /* Success state */
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 20 }}>✓</div>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, color: C.charcoal, marginBottom: 10 }}>
              Enquiry Sent!
            </h3>
            <p style={{ fontSize: 14, color: C.textLight, lineHeight: 1.6 }}>
              Thank you — our team will call you within 2 hours.
            </p>
            <button
              onClick={onClose}
              style={{
                marginTop: 32, background: C.charcoal, color: C.white,
                padding: "14px 40px", border: "none", cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                letterSpacing: "2px", textTransform: "uppercase",
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
