import { useState, useEffect, useRef } from "react";
import C from "../constants/theme";

// ─────────────────────────────────────────────────────────────
//  EMAILJS CONFIGURATION
//  1. Sign up at https://www.emailjs.com (free tier = 200 emails/month)
//  2. Create an Email Service (Gmail / Outlook / etc.)
//  3. Create an Email Template — use these variables in your template:
//       {{from_name}}   →  sender's full name
//       {{from_phone}}  →  sender's phone number
//       {{from_email}}  →  sender's email address
//       {{config}}      →  selected flat configuration
//       {{to_name}}     →  your name (hardcoded below)
//  4. Replace the three placeholder strings below with your real IDs
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_pbin0be";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_1rxzq8m";  // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY  = "SiYNK32BUcvCsfqXz";   // e.g. "abcDEFghiJKL..."

const CONFIG_OPTIONS = [
  "3 BHK — ₹2.16–2.28 Cr",
  "3 BHK+ Servant — ₹2.52–2.64 Cr",
  "4 BHK — Price on Request",
];

const CONFIG_MAP = {
  "3 BHK":  CONFIG_OPTIONS[0],
  "3 BHK+": CONFIG_OPTIONS[1],
  "4 BHK":  CONFIG_OPTIONS[2],
};

// Simple validation
function validate(form) {
  const errors = {};
  if (!form.name.trim())                        errors.name  = "Name is required";
  if (!form.phone.trim())                       errors.phone = "Phone is required";
  else if (!/^[0-9+\s\-]{7,15}$/.test(form.phone.trim())) errors.phone = "Enter a valid phone number";
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email";
  return errors;
}

export default function EnquiryModal({ config, onClose }) {
  const [form, setForm]       = useState({ name: "", phone: "", email: "", config: CONFIG_MAP[config] ?? CONFIG_OPTIONS[0] });
  const [focus, setFocus]     = useState(null);
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState("idle"); // "idle" | "sending" | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");
  const formRef               = useRef(null);

  // Load EmailJS SDK from CDN once
  useEffect(() => {
    if (window.emailjs) return;
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => window.emailjs.init(EMAILJS_PUBLIC_KEY);
    document.head.appendChild(script);
  }, []);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Sync config prop
  useEffect(() => {
    if (config && CONFIG_MAP[config]) {
      setForm((f) => ({ ...f, config: CONFIG_MAP[config] }));
    }
  }, [config]);

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const handleSubmit = async () => {
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    const templateParams = {
      from_name:  form.name.trim(),
      from_phone: form.phone.trim(),
      from_email: form.email.trim() || "Not provided",
      config:     form.config,
      to_name:    "Eldeco 7 Peaks Team",
    };

    try {
      if (!window.emailjs) throw new Error("EmailJS not loaded yet. Please try again.");
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg(err?.text || err?.message || "Something went wrong. Please call us directly.");
    }
  };

  // ── Shared styles ──────────────────────────────────────────
  const inputStyle = (field) => ({
    width: "100%",
    padding: "13px 16px",
    border: `1.5px solid ${errors[field] ? "#e05c5c" : focus === field ? C.accent : C.border}`,
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

  const errorTextStyle = {
    fontSize: 11,
    color: "#e05c5c",
    marginTop: 5,
    display: "block",
  };

  // ── Render ─────────────────────────────────────────────────
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
        ref={formRef}
        style={{
          background: C.white,
          maxWidth: 480, width: "90%",
          padding: "52px 48px",
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", fontSize: 20, cursor: "pointer", color: C.textMuted }}
        >
          ✕
        </button>

        {/* ── FORM ── */}
        {status !== "success" && (
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
                onChange={handleChange("name")}
                onFocus={() => setFocus("name")} onBlur={() => setFocus(null)}
                style={inputStyle("name")}
              />
              {errors.name && <span style={errorTextStyle}>{errors.name}</span>}
            </div>

            {/* Phone */}
            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle}>Phone Number *</label>
              <input
                type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone}
                onChange={handleChange("phone")}
                onFocus={() => setFocus("phone")} onBlur={() => setFocus(null)}
                style={inputStyle("phone")}
              />
              {errors.phone && <span style={errorTextStyle}>{errors.phone}</span>}
            </div>

            {/* Email */}
            <div style={{ marginBottom: 18 }}>
              <label style={labelStyle}>Email Address <span style={{ opacity: 0.5, fontSize: 9 }}>(optional)</span></label>
              <input
                type="email" placeholder="your@email.com" value={form.email}
                onChange={handleChange("email")}
                onFocus={() => setFocus("email")} onBlur={() => setFocus(null)}
                style={inputStyle("email")}
              />
              {errors.email && <span style={errorTextStyle}>{errors.email}</span>}
            </div>

            {/* Config */}
            <div style={{ marginBottom: 28 }}>
              <label style={labelStyle}>Interested In</label>
              <select
                value={form.config}
                onChange={handleChange("config")}
                style={{ ...inputStyle("config"), appearance: "none", WebkitAppearance: "none", cursor: "pointer" }}
              >
                {CONFIG_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            {/* API error banner */}
            {status === "error" && (
              <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", padding: "12px 16px", marginBottom: 20, fontSize: 13, color: "#991b1b", lineHeight: 1.5 }}>
                ⚠️ {errorMsg}
              </div>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              style={{
                width: "100%",
                background: status === "sending" ? C.textMuted : C.charcoal,
                color: C.white,
                padding: 16,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11, letterSpacing: "2.5px", textTransform: "uppercase",
                fontWeight: 700, border: "none",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                transition: "background 0.3s",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              }}
              onMouseEnter={(e) => { if (status !== "sending") e.currentTarget.style.background = C.accent; }}
              onMouseLeave={(e) => { if (status !== "sending") e.currentTarget.style.background = C.charcoal; }}
            >
              {status === "sending" ? (
                <>
                  <span style={{ display: "inline-block", width: 14, height: 14, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
                  Sending…
                </>
              ) : "Send Enquiry →"}
            </button>

            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </>
        )}

        {/* ── SUCCESS ── */}
        {status === "success" && (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ width: 64, height: 64, background: C.accentPale, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 28 }}>
              ✓
            </div>
            <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 26, color: C.charcoal, marginBottom: 10 }}>
              Enquiry Sent!
            </h3>
            <p style={{ fontSize: 14, color: C.textLight, lineHeight: 1.7, marginBottom: 8 }}>
              Thank you, <strong>{form.name}</strong> — our team will call you at <strong>{form.phone}</strong> within 2 hours.
            </p>
            <p style={{ fontSize: 12, color: C.textMuted }}>
              Can't wait? Call us directly at{" "}
              <a href="tel:8799756026" style={{ color: C.accent, textDecoration: "none", fontWeight: 600 }}>
                +91 87997 56026
              </a>
            </p>
            <button
              onClick={onClose}
              style={{
                marginTop: 32, background: C.charcoal, color: C.white,
                padding: "14px 40px", border: "none", cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", fontSize: 11,
                letterSpacing: "2px", textTransform: "uppercase", transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.charcoal)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}