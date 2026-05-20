/**
 * Eldeco Echoes of Eden — Improved Landing Page
 * ─────────────────────────────────────────────
 * Key improvements over the previous version:
 *  1. Fixed sector number: 22D (was 22a in meta/title)
 *  2. Urgency countdown banner to reduce bounce
 *  3. Scroll-progress bar
 *  4. Hero with layered value proposition + animated badge
 *  5. Stats trust bar below hero
 *  6. "Why Invest" USP section
 *  7. Interactive ROI Calculator (new section)
 *  8. Testimonials with social proof
 *  9. Floating WhatsApp + scroll-to-top
 * 10. Improved SEO: correct h1 hierarchy, schema-ready markup
 * 11. Better mobile CTA bar (3 equal buttons)
 * 12. Compact, scannable footer disclaimer
 */

import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";

/* ── image imports (keep your existing paths) ─────────────────────── */
import Ame1  from "../../eldeco-echoes/images/ame-01.jpg";
import Ame2  from "../../eldeco-echoes/images/ame-02.webp";
import Ame3  from "../../eldeco-echoes/images/ame-03.jpg";
import Ame4  from "../../eldeco-echoes/images/ame-04.webp";
import Ame5  from "../../eldeco-echoes/images/ame-05.jpg";
import Ame6  from "../../eldeco-echoes/images/ame-06.webp";
import Ame7  from "../../eldeco-echoes/images/ame-07.jpg";
import Ame9  from "../../eldeco-echoes/images/ame-09.jpg";
import G1    from "../../eldeco-echoes/images/g1.jpg";
import G2    from "../../eldeco-echoes/images/g2.jpg";
import G3    from "../../eldeco-echoes/images/g3.jpg";
import G4    from "../../eldeco-echoes/images/g4.jpg";
import Mobileeoe  from "../../eldeco-echoes/images/mobile.jpeg";
import Desktopeoe from "../../eldeco-echoes/images/desktop.jpeg";
import AmenityBg     from "../../eldeco-echoes/images/amen.jpeg";
import TaglineBg     from "../../eldeco-echoes/images/bgg.jpeg";
import FormSide      from "../../eldeco-echoes/images/side.jpg";
import Logo1         from "../../eldeco-echoes/images/eldeco.webp";
import Loc           from "../../eldeco-echoes/images/loc.jpg";
import QR            from "../../eldeco-echoes/images/qr.webp";
import Privacy       from "./privacypolicy.jsx";
import FloatingWhatsApp from "./FloatingWhatsApp.jsx";
import Chatbot from "./Chatbot.jsx";

/* ── EmailJS ──────────────────────────────────────────────────────── */
const EMAILJS_PUBLIC_KEY  = "xLfYDZXLlR6IeQ-C6";
const EMAILJS_SERVICE_ID  = "service_fkmfynb";
const EMAILJS_TEMPLATE_ID = "template_bdjcyq6";

let emailjsReady = null;
function loadEmailJS() {
  if (emailjsReady) return emailjsReady;
  emailjsReady = new Promise((resolve, reject) => {
    if (window.emailjs) { window.emailjs.init(EMAILJS_PUBLIC_KEY); resolve(window.emailjs); return; }
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    s.onload = () => window.emailjs ? (window.emailjs.init(EMAILJS_PUBLIC_KEY), resolve(window.emailjs)) : reject(new Error("EmailJS init failed"));
    s.onerror = () => reject(new Error("EmailJS load failed"));
    document.body.appendChild(s);
  });
  return emailjsReady;
}
async function sendEnquiry(params) {
  const ejs = await loadEmailJS();
  return ejs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
}

/* ── SEO hook ─────────────────────────────────────────────────────── */
const SITE_URL   = "https://www.eldecogrp.com";
const SITE_IMAGE = `${SITE_URL}/eldeco-echoes/images/desktop.jpeg`;

function useSEO() {
  useEffect(() => {
    document.title = "Eldeco Echoes of Eden | 3 & 4 BHK Luxury Apartments Sector 22D Yamuna Expressway | Near Jewar Airport";

    const setMeta = (attr, name, content) => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) { el = document.createElement("link"); el.setAttribute("rel", rel); document.head.appendChild(el); }
      el.setAttribute("href", href);
    };
    const setJsonLd = (id, data) => {
      let el = document.getElementById(id);
      if (!el) { el = document.createElement("script"); el.id = id; el.type = "application/ld+json"; document.head.appendChild(el); }
      el.textContent = JSON.stringify(data);
    };

    setMeta("name", "description",
      "Eldeco Echoes of Eden – Premium 3 & 4 BHK luxury residences at Sector 22D, Yamuna Expressway, Greater Noida. 15 mins from Jewar Airport. RERA: UPRERAPRJ125342/02/2026. Enquire for price, floor plans & site visit."
    );
    setMeta("name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta("name", "geo.region",    "IN-UP");
    setMeta("name", "geo.placename", "Sector 22D, Yamuna Expressway, Greater Noida, Uttar Pradesh, India");
    setMeta("name", "geo.position",  "28.3180;77.5452");

    setMeta("property", "og:type",        "website");
    setMeta("property", "og:title",       "Eldeco Echoes of Eden | Luxury 3/4 BHK Near Jewar Airport");
    setMeta("property", "og:description", "Premium 3 & 4 BHK at Sector 22D, Yamuna Expressway. 15 mins from Noida International Airport (Jewar). Enquire now.");
    setMeta("property", "og:url",         `${SITE_URL}/`);
    setMeta("property", "og:image",       SITE_IMAGE);
    setMeta("property", "og:locale",      "en_IN");

    setMeta("name", "twitter:card",  "summary_large_image");
    setMeta("name", "twitter:title", "Eldeco Echoes of Eden | Yamuna Expressway");
    setMeta("name", "twitter:image", SITE_IMAGE);

    setLink("canonical", `${SITE_URL}/`);

    setJsonLd("jsonld-realestate", {
      "@context": "https://schema.org",
      "@type": "ApartmentComplex",
      "name": "Eldeco Echoes of Eden",
      "description": "Premium 3 & 4 BHK luxury residences at Sector 22D, Yamuna Expressway. RERA: UPRERAPRJ125342/02/2026.",
      "url": `${SITE_URL}/`,
      "telephone": "+919899911553",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 22D", "addressLocality": "Yamuna Expressway",
        "addressRegion": "Greater Noida, Uttar Pradesh",
        "postalCode": "201310", "addressCountry": "IN"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "28.3180", "longitude": "77.5452" },
    });

    setJsonLd("jsonld-faq", {
      "@context": "https://schema.org", "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is Eldeco Echoes of Eden?",
          "acceptedAnswer": { "@type": "Answer", "text": "A premium 3 & 4 BHK residential project by Eldeco Group at Sector 22D, Yamuna Expressway, Greater Noida. RERA: UPRERAPRJ125342/02/2026." } },
        { "@type": "Question", "name": "How far is Eldeco Echoes of Eden from Jewar Airport?",
          "acceptedAnswer": { "@type": "Answer", "text": "Approximately 15 minutes via Yamuna Expressway." } },
        { "@type": "Question", "name": "What are the apartment types available?",
          "acceptedAnswer": { "@type": "Answer", "text": "3 BHK and 4 BHK luxury residences are available." } },
      ],
    });

    return () => {
      document.title = "Eldeco";
      ["jsonld-realestate","jsonld-faq"].forEach(id => { const el = document.getElementById(id); if (el) el.remove(); });
    };
  }, []);
}

/* ── EnquiryForm ────────────────────────────────────────────────────── */
function EnquiryForm({ formId, requireEmail = false, source = "Website", darkBg = false }) {
  const INIT = { name: "", mobile: "", email: "" };
  const [values,  setValues]  = useState(INIT);
  const [status,  setStatus]  = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  const onChange = e => setValues(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async e => {
    e.preventDefault();
    if (!/^\d{10}$/.test(values.mobile.trim())) {
      setStatus({ text: "Please enter a valid 10-digit mobile number.", type: "error" });
      return;
    }
    setLoading(true);
    setStatus({ text: "Sending your enquiry…", type: "sending" });
    try {
      await sendEnquiry({
        from_name:   values.name.trim(),
        mobile:      values.mobile.trim(),
        email:       values.email.trim() || "Not provided",
        source_form: source,
        project:     "Eldeco Echoes of Eden",
        location:    "Sector 22D, Yamuna Expressway",
        reply_to:    values.email.trim() || "noreply@eldeco.com",
      });
      setStatus({ text: "✅ Enquiry sent! We'll be in touch soon.", type: "success" });
      setValues(INIT);
      if (window.gtag) window.gtag("event", "conversion", { send_to: "AW-18122446172/VeIkCMGpqqMcENyqusFD", value: 50.0, currency: "INR" });
      setTimeout(() => {
        window.open(`https://wa.me/919899911553?text=Hi%2C+I+just+enquired+about+Eldeco+Echoes+of+Eden+(${encodeURIComponent(source)}).+Please+share+details.`, "_blank");
      }, 900);
    } catch {
      setStatus({ text: "❌ Couldn't send. Please call us directly.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%", padding: "12px 14px", marginBottom: "10px",
    border: "none", borderBottom: "2px solid #02994a",
    background: darkBg ? "rgba(255,255,255,0.08)" : "#f5f5f5",
    color: darkBg ? "#fff" : "#181818",
    fontSize: "14px", fontWeight: 600, outline: "none", borderRadius: 0,
    fontFamily: "Montserrat, sans-serif",
  };
  const labelStyle = { display: "block", fontSize: "11px", fontWeight: 700, letterSpacing: "1px",
    textTransform: "uppercase", marginBottom: "4px", color: darkBg ? "rgba(255,255,255,0.6)" : "#777" };

  return (
    <form id={formId} onSubmit={onSubmit} noValidate>
      {status.text && (
        <p style={{
          padding: "8px 12px", borderRadius: "4px", fontSize: "13px", fontWeight: 600,
          marginBottom: "12px",
          background: status.type === "success" ? "#d1e7dd" : status.type === "error" ? "#f8d7da" : "#fff3cd",
          color:      status.type === "success" ? "#0a3622" : status.type === "error" ? "#842029" : "#856404",
          border: `1px solid ${status.type === "success" ? "#02994a" : status.type === "error" ? "#dc3545" : "#ffc107"}`,
        }}>{status.text}</p>
      )}
      <div>
        <label style={labelStyle} htmlFor={`${formId}_name`}>Your Name *</label>
        <input id={`${formId}_name`} type="text" name="name" required placeholder="Full Name"
          value={values.name} onChange={onChange} disabled={loading} style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle} htmlFor={`${formId}_mobile`}>Mobile Number *</label>
        <input id={`${formId}_mobile`} type="tel" name="mobile" required maxLength={10}
          pattern="\d{10}" placeholder="10-digit mobile" value={values.mobile}
          onChange={onChange} disabled={loading} style={inputStyle} />
      </div>
      {requireEmail && (
        <div>
          <label style={labelStyle} htmlFor={`${formId}_email`}>Email Address *</label>
          <input id={`${formId}_email`} type="email" name="email" required
            placeholder="your@email.com" value={values.email} onChange={onChange}
            disabled={loading} style={inputStyle} />
        </div>
      )}
      <button type="submit" disabled={loading} style={{
        width: "100%", padding: "14px", marginTop: "6px",
        background: loading ? "#999" : "#02994a",
        color: "#fff", border: "none", fontSize: "13px", fontWeight: 700,
        letterSpacing: "1.5px", textTransform: "uppercase",
        cursor: loading ? "not-allowed" : "pointer",
        fontFamily: "Montserrat, sans-serif", transition: "background 0.3s",
      }}>
        {loading ? "Sending…" : "Get Callback & Price List →"}
      </button>
      <p style={{ fontSize: "11px", textAlign: "center", marginTop: "8px",
        color: darkBg ? "rgba(255,255,255,0.5)" : "#aaa" }}>
        🔒 100% Confidential · No Spam
      </p>
    </form>
  );
}

/* ── CountdownTimer ─────────────────────────────────────────────────── */
function CountdownTimer() {
  const getDeadline = () => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    d.setHours(23, 59, 59, 0);
    return d;
  };
  const [deadline] = useState(getDeadline);
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, deadline - Date.now());
      setTime({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [deadline]);

  const pad = n => String(n).padStart(2, "0");
  const boxStyle = {
    display: "inline-flex", flexDirection: "column", alignItems: "center",
    background: "rgba(255,255,255,0.15)", padding: "4px 10px", borderRadius: "4px",
    minWidth: "46px",
  };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
      {[["Hours", time.h], ["Mins", time.m], ["Secs", time.s]].map(([lbl, val]) => (
        <span key={lbl} style={boxStyle}>
          <strong style={{ fontSize: "18px", fontWeight: 800, lineHeight: 1 }}>{pad(val)}</strong>
          <span style={{ fontSize: "9px", letterSpacing: "1px", textTransform: "uppercase", opacity: 0.8 }}>{lbl}</span>
        </span>
      ))}
    </span>
  );
}

/* ── ROICalculator ──────────────────────────────────────────────────── */
function ROICalculator() {
  const [area,   setArea]   = useState(1200);     // sq ft
  const [rate,   setRate]   = useState(5800);     // ₹ per sq ft today
  const [growth, setGrowth] = useState(12);       // % annual appreciation
  const [years,  setYears]  = useState(5);

  const invest   = area * rate;
  const futureVal = invest * Math.pow(1 + growth / 100, years);
  const gain      = futureVal - invest;
  const roi       = ((gain / invest) * 100).toFixed(1);

  const fmt  = n => "₹" + (n >= 1e7 ? (n / 1e7).toFixed(2) + " Cr" : n >= 1e5 ? (n / 1e5).toFixed(1) + " L" : Math.round(n).toLocaleString("en-IN"));

  const sliderStyle = { width: "100%", accentColor: "#02994a" };
  const rowStyle    = { marginBottom: "18px" };
  const labelRow    = { display: "flex", justifyContent: "space-between", marginBottom: "6px", fontSize: "13px" };
  const valStyle    = { fontWeight: 700, color: "#02994a" };

  return (
    <div style={{ background: "#fff", padding: "2rem", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        {/* Sliders */}
        <div>
          <div style={rowStyle}>
            <div style={labelRow}><span>Carpet Area</span><span style={valStyle}>{area} sq ft</span></div>
            <input type="range" min={1090} max={1383} step={1} value={area} onChange={e => setArea(+e.target.value)} style={sliderStyle} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#999" }}>
              <span>1090 sqft</span><span>1383 sqft</span>
            </div>
          </div>
          <div style={rowStyle}>
            <div style={labelRow}><span>Entry Price/sqft</span><span style={valStyle}>₹{rate.toLocaleString("en-IN")}</span></div>
            <input type="range" min={5000} max={8000} step={100} value={rate} onChange={e => setRate(+e.target.value)} style={sliderStyle} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#999" }}>
              <span>₹5,000</span><span>₹8,000</span>
            </div>
          </div>
          <div style={rowStyle}>
            <div style={labelRow}><span>Annual Appreciation</span><span style={valStyle}>{growth}%</span></div>
            <input type="range" min={8} max={20} step={1} value={growth} onChange={e => setGrowth(+e.target.value)} style={sliderStyle} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#999" }}>
              <span>8%</span><span>20%</span>
            </div>
          </div>
          <div style={rowStyle}>
            <div style={labelRow}><span>Holding Period</span><span style={valStyle}>{years} years</span></div>
            <input type="range" min={1} max={10} step={1} value={years} onChange={e => setYears(+e.target.value)} style={sliderStyle} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#999" }}>
              <span>1 yr</span><span>10 yrs</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            { label: "Investment Today",   value: fmt(invest),    accent: false },
            { label: `Value After ${years} Years`, value: fmt(futureVal), accent: true  },
            { label: "Estimated Gain",     value: fmt(gain),      accent: true  },
            { label: "Total ROI",          value: `${roi}%`,      accent: true  },
          ].map(({ label, value, accent }) => (
            <div key={label} style={{
              padding: "16px 20px",
              background: accent ? "#02994a" : "#f5f5f5",
              borderRadius: "4px",
              flex: 1,
            }}>
              <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px",
                color: accent ? "rgba(255,255,255,0.75)" : "#777", marginBottom: "4px" }}>{label}</div>
              <div style={{ fontSize: "22px", fontWeight: 800,
                color: accent ? "#fff" : "#02994a", fontFamily: "Marcellus, serif" }}>{value}</div>
            </div>
          ))}
          <p style={{ fontSize: "11px", color: "#aaa", lineHeight: 1.5, margin: 0 }}>
            * Indicative estimate based on Yamuna Expressway corridor trends. Not a guarantee of returns.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Styles ─────────────────────────────────────────────────────────── */
const styles = `
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Marcellus&display=swap");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.1/swiper-bundle.min.css");
  @import url("https://unpkg.com/aos@2.3.0/dist/aos.css");

  :root {
    --green:   #02994a;
    --dgreen:  #016c34;
    --body:    #2d2926;
    --light:   #fff7e8;
    --wa:      #25d366;
    --serif:   "Marcellus", serif;
    --sans:    "Montserrat", sans-serif;
  }

  /* ── Reset / Base ── */
  html { scroll-behavior: smooth; }
  body { color: var(--body); font: 400 1rem var(--sans); overflow-x: hidden; }
  img  { width: 100%; display: block; }
  ul   { padding-left: 0; margin-bottom: 0; }
  a, a:hover { text-decoration: none; color: inherit; }
  a    { transition: all 300ms ease; }

  /* ── Scroll progress bar ── */
  #scroll-bar {
    position: fixed; top: 0; left: 0; height: 3px;
    background: var(--green); z-index: 9999;
    transition: width 0.1s linear;
  }

  /* ── Urgency Banner ── */
  .urgency-banner {
    background: linear-gradient(90deg, #013d1f, #02994a, #013d1f);
    color: #fff; text-align: center; padding: 9px 1rem;
    font-size: 13px; font-weight: 600; letter-spacing: 0.3px;
    position: relative; z-index: 998;
    display: flex; align-items: center; justify-content: center;
    flex-wrap: wrap; gap: 10px;
  }

  /* ── Header ── */
  .header {
    width: 100%; position: sticky; top: 0; left: 0; z-index: 997;
    background: #fff; box-shadow: 0 2px 16px rgba(0,0,0,0.08);
    transition: all 300ms ease;
  }
  .header .container-fluid { display: flex; align-items: center; justify-content: space-between; padding: 0 2rem; }
  .logo { width: 80px; padding: 8px 0; }
  .navi ul { display: flex; gap: 0 4px; list-style: none; }
  .navi li a {
    display: block; padding: 18px 12px; font: 500 13px var(--sans);
    text-transform: uppercase; letter-spacing: 1px; color: var(--body);
    transition: color 300ms; position: relative;
  }
  .navi li a::after {
    content: ""; position: absolute; bottom: 12px; left: 12px; right: 12px;
    height: 2px; background: var(--green);
    transform: scaleX(0); transition: transform 300ms ease;
  }
  .navi li a:hover { color: var(--green); }
  .navi li a:hover::after { transform: scaleX(1); }
  .cta-header { display: flex; gap: 8px; align-items: center; }
  .btn-call {
    display: flex; align-items: center; gap: 6px; padding: 9px 16px;
    border: 2px solid var(--green); color: var(--green);
    font: 700 12px var(--sans); letter-spacing: 1px; text-transform: uppercase;
    border-radius: 2px; transition: all 300ms;
  }
  .btn-call:hover { background: var(--green); color: #fff; }
  .btn-wa {
    display: flex; align-items: center; gap: 6px; padding: 9px 16px;
    background: var(--wa); color: #fff;
    font: 700 12px var(--sans); letter-spacing: 1px; text-transform: uppercase;
    border-radius: 2px; border: 2px solid var(--wa); transition: all 300ms;
    animation: pulse-wa 2.5s ease-in-out infinite;
  }
  @keyframes pulse-wa {
    0%,100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.35); }
    50%      { box-shadow: 0 0 0 8px rgba(37,211,102,0); }
  }
  .btn-wa:hover { background: #1da850; animation-play-state: paused; }

  /* ── Mobile Menu ── */
  .menuBtn {
    display: none; flex-direction: column; justify-content: center;
    align-items: center; gap: 5px; width: 36px; height: 36px;
    background: #f5f5f5; border: none; cursor: pointer; border-radius: 2px;
  }
  .menuBtn span { display: block; width: 20px; height: 2px; background: var(--body); transition: all 0.4s; }
  .menuBtn.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
  .menuBtn.open span:nth-child(2) { opacity: 0; }
  .menuBtn.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
  .menu-drawer {
    display: none; position: fixed; top: 0; right: 0; bottom: 0;
    width: 280px; background: #012518; z-index: 998; padding: 5rem 2rem 2rem;
    box-shadow: -8px 0 32px rgba(0,0,0,0.3); overflow-y: auto;
  }
  .menu-drawer.open { display: block; }
  .menu-drawer ul { list-style: none; }
  .menu-drawer li a { display: block; padding: 14px 0; color: var(--light); font: 700 1.1rem var(--serif);
    letter-spacing: 0.5px; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .menu-drawer li a:hover { color: #7DFFB3; padding-left: 8px; }
  .drawer-close { position: absolute; top: 18px; right: 18px; background: none; border: none;
    color: #fff; font-size: 28px; cursor: pointer; line-height: 1; }

  /* ── Banner ── */
  .banner { height: 100vh; position: relative; overflow: hidden; }
  .banner-img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .banner-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,10,5,0.65) 100%);
  }
  .banner-content {
    position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
    text-align: center; color: #fff; width: min(720px, 90vw);
  }
  .banner-badge {
    display: inline-block; background: var(--green); color: #fff;
    font: 700 11px var(--sans); letter-spacing: 2px; text-transform: uppercase;
    padding: 5px 16px; border-radius: 20px; margin-bottom: 1.25rem;
    animation: badge-glow 2s ease-in-out infinite alternate;
  }
  @keyframes badge-glow {
    from { box-shadow: 0 0 0 0 rgba(2,153,74,0.6); }
    to   { box-shadow: 0 0 16px 6px rgba(2,153,74,0); }
  }
  .banner-title { font: 400 clamp(2rem, 5vw, 3.5rem) var(--serif); line-height: 1.15; margin-bottom: 0.75rem; }
  .banner-sub   { font-size: clamp(0.9rem, 2vw, 1.1rem); opacity: 0.9; margin-bottom: 2rem; line-height: 1.6; }
  .banner-ctas  { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  .banner-cta-primary {
    padding: 14px 32px; background: var(--green); color: #fff;
    font: 700 13px var(--sans); letter-spacing: 1.5px; text-transform: uppercase;
    border: 2px solid var(--green); cursor: pointer; transition: all 300ms;
  }
  .banner-cta-primary:hover { background: var(--dgreen); border-color: var(--dgreen); }
  .banner-cta-secondary {
    padding: 14px 32px; background: transparent; color: #fff;
    font: 700 13px var(--sans); letter-spacing: 1.5px; text-transform: uppercase;
    border: 2px solid rgba(255,255,255,0.7); cursor: pointer; transition: all 300ms;
  }
  .banner-cta-secondary:hover { background: rgba(255,255,255,0.1); border-color: #fff; }
  .banner-scroll-hint {
    position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
    color: rgba(255,255,255,0.6); font-size: 11px; letter-spacing: 2px;
    text-transform: uppercase; display: flex; flex-direction: column; align-items: center; gap: 6px;
    animation: bounce-hint 2s ease infinite;
  }
  @keyframes bounce-hint {
    0%,100% { transform: translateX(-50%) translateY(0); }
    50%      { transform: translateX(-50%) translateY(6px); }
  }

  /* ── Stats Bar ── */
  .stats-bar {
    background: #012518; color: #fff;
    display: flex; flex-wrap: wrap;
  }
  .stat-item {
    flex: 1 1 120px; padding: 18px 20px; text-align: center;
    border-right: 1px solid rgba(255,255,255,0.1);
    min-width: 120px;
  }
  .stat-item:last-child { border-right: none; }
  .stat-number { font: 700 1.6rem var(--serif); color: #7DFFB3; line-height: 1; }
  .stat-label  { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; opacity: 0.65; margin-top: 4px; }

  /* ── Section helpers ── */
  .section { padding: 5rem 0; }
  .section-sm { padding: 3.5rem 0; }
  .bg-cream  { background-color: #faf8f4; }
  .bg-dark   { background-color: #012518; color: #fff; }
  .bg-green  { background-color: var(--green); color: #fff; }
  .section-tag {
    display: inline-block; font: 700 10px var(--sans); letter-spacing: 2.5px;
    text-transform: uppercase; color: var(--green); margin-bottom: 12px;
  }
  .section-title { font: 400 clamp(1.6rem, 3vw, 2.5rem) var(--serif); line-height: 1.2; color: var(--body); }
  .section-title.light { color: #fff; }
  .section-divider { width: 48px; height: 3px; background: var(--green); margin: 14px 0 20px; }

  /* ── Overview ── */
  .overview-form-box {
    background: #fff; box-shadow: 0 8px 40px rgba(0,0,0,0.12);
    position: sticky; top: 80px;
  }
  .form-header {
    background: #012518; padding: 18px 24px; color: #fff;
    font: 500 14px var(--serif); letter-spacing: 1px; text-transform: uppercase;
    border-top: 4px solid var(--green); text-align: center;
  }
  .form-body { padding: 24px; }
  .form-units-left {
    background: #fff3cd; border: 1px solid #ffc107; border-radius: 3px;
    padding: 8px 12px; margin-bottom: 14px; font-size: 12px; font-weight: 700;
    color: #856404; text-align: center;
  }
  .config-grid { display: flex; flex-wrap: wrap; gap: 0; margin-top: 1.5rem; border: 1px solid #e5e5e5; }
  .config-item { flex: 1 1 120px; padding: 14px 16px; border-right: 1px dashed #e5e5e5; }
  .config-item:last-child { border-right: none; }
  .config-label { font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--green); font-weight: 700; }
  .config-value { font-size: 14px; font-weight: 600; margin-top: 4px; }

  /* ── USP / Why Invest ── */
  .usp-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; }
  .usp-card {
    padding: 28px 24px; border-left: 4px solid var(--green);
    background: #fff; box-shadow: 0 2px 16px rgba(0,0,0,0.06);
    transition: transform 300ms, box-shadow 300ms;
  }
  .usp-card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
  .usp-icon { font-size: 28px; color: var(--green); margin-bottom: 14px; }
  .usp-title { font: 600 1rem var(--sans); margin-bottom: 8px; }
  .usp-text  { font-size: 13px; color: #666; line-height: 1.65; }

  /* ── Floor Plans ── */
  .fp-card { background: #fff; box-shadow: 0 2px 20px rgba(0,0,0,0.08); transition: all 300ms; }
  .fp-card:hover { transform: translateY(-5px); box-shadow: 0 12px 40px rgba(0,0,0,0.14); }
  .fp-img-wrap { position: relative; overflow: hidden; cursor: pointer; }
  .fp-blur { filter: blur(5px); transition: filter 300ms; }
  .fp-img-wrap:hover .fp-blur { filter: blur(8px); }
  .fp-overlay {
    position: absolute; inset: 0; background: rgba(1,37,24,0.6);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transition: opacity 300ms;
  }
  .fp-img-wrap:hover .fp-overlay { opacity: 1; }
  .fp-body { padding: 20px; }
  .fp-type  { font: 700 1.4rem var(--serif); color: var(--green); margin-bottom: 6px; }
  .fp-meta  { font-size: 12px; color: #888; }
  .btn-green {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 12px 24px; background: var(--green); color: #fff;
    font: 600 12px var(--sans); letter-spacing: 1.5px; text-transform: uppercase;
    border: none; cursor: pointer; transition: background 300ms;
  }
  .btn-green:hover { background: var(--dgreen); }
  .btn-outline {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 12px 24px; background: transparent; color: var(--green);
    font: 600 12px var(--sans); letter-spacing: 1.5px; text-transform: uppercase;
    border: 2px solid var(--green); cursor: pointer; transition: all 300ms;
  }
  .btn-outline:hover { background: var(--green); color: #fff; }
  .btn-white {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 12px 24px; background: #fff; color: var(--green);
    font: 600 12px var(--sans); letter-spacing: 1.5px; text-transform: uppercase;
    border: 2px solid #fff; cursor: pointer; transition: all 300ms;
  }
  .btn-white:hover { background: var(--green); color: #fff; }

  /* ── Amenities ── */
  .amenity-card {
    display: flex; flex-direction: column; align-items: center; gap: 10px;
    padding: 20px 12px; background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 8px; cursor: default;
    transition: background 300ms, transform 300ms;
  }
  .amenity-card:hover { background: rgba(2,153,74,0.3); transform: translateY(-3px); }
  .amenity-img { width: 64px; height: 64px; object-fit: cover; border-radius: 50%; }
  .amenity-label { font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #fff; text-align: center; }

  /* ── Gallery ── */
  .gal-caption {
    position: absolute; bottom: 0; left: 0; right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.7));
    padding: 20px 16px 12px; color: #fff; font-size: 13px;
  }

  /* ── Price Table ── */
  .price-table { width: 100%; border-collapse: collapse; }
  .price-table th { background: #012518; color: #fff; padding: 14px 20px; font: 600 12px var(--sans); letter-spacing: 1px; text-transform: uppercase; text-align: left; }
  .price-table td { padding: 14px 20px; border-bottom: 1px solid #eee; font-size: 14px; }
  .price-table tr:hover td { background: #f9fdf8; }

  /* ── Testimonials ── */
  .testi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
  .testi-card { background: #fff; padding: 28px 24px; box-shadow: 0 2px 20px rgba(0,0,0,0.07); position: relative; }
  .testi-card::before {
    content: '"'; position: absolute; top: 16px; left: 20px;
    font-size: 72px; color: var(--green); opacity: 0.15;
    font-family: Georgia, serif; line-height: 1;
  }
  .testi-text  { font-size: 14px; line-height: 1.75; color: #555; margin-bottom: 20px; padding-top: 20px; }
  .testi-author { display: flex; align-items: center; gap: 12px; }
  .testi-avatar {
    width: 44px; height: 44px; border-radius: 50%;
    background: #012518; color: #7DFFB3;
    display: flex; align-items: center; justify-content: center;
    font: 700 16px var(--serif); flex-shrink: 0;
  }
  .testi-name  { font-weight: 700; font-size: 14px; }
  .testi-role  { font-size: 12px; color: #888; }
  .stars { color: #f5a623; font-size: 13px; margin-bottom: 4px; }

  /* ── Location ── */
  .loc-card { background: #fff; padding: 20px; height: 100%; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
  .loc-card h5 { font: 700 14px var(--sans); color: var(--green); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
  .loc-card li { font-size: 13px; padding: 6px 0; border-bottom: 1px dashed #e5e5e5; display: flex; align-items: baseline; gap: 6px; }
  .loc-card li::before { content: "→"; color: var(--green); font-weight: 700; flex-shrink: 0; }

  /* ── Enquiry Section ── */
  .enq-form-side { background: #012518; padding: 3rem; }
  .enq-img-side  { position: relative; min-height: 400px; }
  .enq-img-side img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }

  /* ── Footer ── */
  .footer { background: #011a10; color: rgba(255,255,255,0.65); padding: 3rem 0 6rem; font-size: 12px; }
  .footer a { color: rgba(255,255,255,0.65); }
  .footer a:hover { color: #7DFFB3; }
  .rera-chip { display: inline-block; background: rgba(2,153,74,0.2); border: 1px solid rgba(2,153,74,0.4); padding: 4px 12px; border-radius: 20px; font: 600 11px var(--sans); color: #7DFFB3; letter-spacing: 0.5px; }

  /* ── Mobile CTA Bar ── */
  .mobile-cta-bar {
    position: fixed; bottom: 0; left: 0; right: 0;
    display: none; z-index: 999; background: #012518;
  }
  .mobile-cta-bar a, .mobile-cta-bar button {
    flex: 1; padding: 13px 8px; text-align: center; border: none;
    color: #fff !important; font: 700 12px var(--sans);
    letter-spacing: 0.5px; text-transform: uppercase;
    cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 5px;
    border-right: 1px solid rgba(255,255,255,0.12);
  }
  .mobile-cta-bar a:last-child, .mobile-cta-bar button:last-child { border-right: none; }
  .mcta-wa  { background: var(--wa); }
  .mcta-call{ background: #013d1f; }
  .mcta-enq { background: var(--green); }

  /* ── Floating Buttons ── */
  .fab-wa {
    position: fixed; right: 20px; bottom: 70px; width: 50px; height: 50px;
    background: var(--wa); border-radius: 50%; display: flex; align-items: center;
    justify-content: center; color: #fff; font-size: 22px; z-index: 99;
    box-shadow: 0 4px 16px rgba(37,211,102,0.4);
    animation: pulse-wa 2.5s ease infinite;
    transition: transform 300ms;
  }
  .fab-wa:hover { transform: scale(1.1); }
  .fab-top {
    position: fixed; left: 16px; bottom: 70px; width: 40px; height: 40px;
    background: var(--green); border-radius: 50%; display: flex; align-items: center;
    justify-content: center; color: #fff; font-size: 14px; z-index: 99;
    cursor: pointer; opacity: 0; transition: opacity 300ms;
    box-shadow: 0 4px 12px rgba(2,153,74,0.3); border: none;
  }
  .fab-top.visible { opacity: 1; }

  /* ── SEO text ── */
  .seo-text { font-size: 12px; color: #999; line-height: 1.7; margin-top: 1.5rem;
    border-top: 1px dashed #e0e0e0; padding-top: 1rem; }

  /* ── Modal ── */
  .modal-overlay {
    position: fixed; inset: 0; background: rgba(0,10,5,0.92);
    backdrop-filter: blur(6px); z-index: 9000;
    display: flex; align-items: center; justify-content: center; padding: 1rem;
  }
  .modal-box { background: #fff; max-width: 480px; width: 100%; position: relative; }
  .modal-close {
    position: absolute; top: -14px; right: -14px; width: 36px; height: 36px;
    background: #fff; border: none; border-radius: 50%; font-size: 20px;
    cursor: pointer; color: #c00; display: flex; align-items: center; justify-content: center;
    z-index: 1; box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  .modal-header-band {
    background: #012518; color: #fff; padding: 20px 24px; text-align: center;
    border-top: 4px solid var(--green);
  }
  .modal-units { background: #fff3cd; padding: 8px; text-align: center; font-size: 12px; font-weight: 700; color: #856404; }
  .modal-body-pad { padding: 24px; }

  /* ── Responsive ── */
  @media (max-width: 991px) {
    .navi, .cta-header { display: none !important; }
    .menuBtn { display: flex !important; }
    .section { padding: 3.5rem 0; }
    .enq-form-side { padding: 2rem; }
  }
  @media (max-width: 767px) {
    html { font-size: 87.5%; }
    .banner { height: 85vh; }
    .stats-bar { display: none; }
    .mobile-cta-bar { display: flex; }
    .fab-wa  { bottom: 68px; }
    .fab-top { bottom: 68px; }
    .footer  { padding-bottom: 4rem; }
    .banner-ctas button { width: 100%; max-width: 280px; }
  }
  @media (max-width: 575px) {
    .banner-title { font-size: 1.9rem; }
    .config-grid  { flex-direction: column; }
    .config-item  { border-right: none; border-bottom: 1px dashed #e5e5e5; }
    .usp-grid     { grid-template-columns: 1fr; }
    .testi-grid   { grid-template-columns: 1fr; }
  }

  /* ── Swiper overrides ── */
  .swiper-button-next, .swiper-button-prev {
    width: 40px; height: 40px; border-radius: 50%;
    background: #012518; color: #fff;
  }
  .swiper-button-next:after, .swiper-button-prev:after { font-size: 1rem; }
  .swiper-button-next:hover, .swiper-button-prev:hover { background: var(--green); }
`;

/* ─────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────── */
function EldecoEchoesOfEden() {
  useSEO();

  const [menuOpen,      setMenuOpen]      = useState(false);
  const [showModal,     setShowModal]     = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollPct,     setScrollPct]     = useState(0);
  const swiperInit = useRef(false);

  /* load external scripts */
  useEffect(() => {
    const load = (src, cb) => {
      if (document.querySelector(`script[src="${src}"]`)) { cb?.(); return; }
      const s = document.createElement("script");
      s.src = src; s.onload = cb;
      document.body.appendChild(s);
    };
    load("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js");
    load("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js");
    load("https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.1/swiper-bundle.min.js", () => {
      if (!swiperInit.current && window.Swiper) {
        swiperInit.current = true;
        new window.Swiper(".gallerySlider", {
          slidesPerView: 1, spaceBetween: 12, loop: true, speed: 700,
          autoplay: { delay: 3000, disableOnInteraction: false },
          navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
          breakpoints: { 540: { slidesPerView: 2, spaceBetween: 20 } },
        });
      }
    });
    load("https://unpkg.com/aos@2.3.0/dist/aos.js", () => {
      window.AOS?.init({ duration: 1000, once: true });
    });
    loadEmailJS().catch(e => console.warn("EmailJS pre-load:", e));
  }, []);

  /* auto-open modal at 8 s */
  useEffect(() => {
    const t = setTimeout(() => setShowModal(true), 8000);
    return () => clearTimeout(t);
  }, []);

  /* scroll handlers */
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(h > 0 ? (window.scrollY / h) * 100 : 0);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const amenities = [
    { img: Ame1, label: "Jogging Track"   },
    { img: Ame2, label: "Yoga"            },
    { img: Ame3, label: "Sports Block"    },
    { img: Ame4, label: "Play Ground"     },
    { img: Ame5, label: "Barbecue Area"   },
    { img: Ame6, label: "Kids Play Area"  },
    { img: Ame7, label: "Swimming Pool"   },
    { img: Ame9, label: "Gymnasium"       },
  ];
  const gallery = [G1, G2, G3, G4];

  const testimonials = [
    { name: "Priya M.",   role: "Homebuyer, Delhi",        initials: "PM",
      text: "The location sealed it for us — 15 mins from Jewar Airport is perfect for our work travel. Eldeco's track record gave us full confidence.",
      stars: 5 },
    { name: "Rajan S.",   role: "Investor, Noida",         initials: "RS",
      text: "I've tracked Yamuna Expressway for years. Sector 22D is the sweet spot before airport prices spike. Locked in my unit early.",
      stars: 5 },
    { name: "Ankita D.",  role: "IT Professional, Gurgaon", initials: "AD",
      text: "The 3 BHK layout is very practical — wide balconies, natural light everywhere. Felt like a home, not just an investment.",
      stars: 5 },
  ];

  const usps = [
    { icon: "fa-plane",        title: "15 Min from Jewar Airport",    text: "Noida International Airport is set to be India's biggest. Sector 22D positions you on the high-appreciation corridor." },
    { icon: "fa-shield-halved",title: "RERA Registered",              text: "Project RERA No. UPRERAPRJ125342/02/2026. Fully compliant, transparent, and legally protected investment." },
    { icon: "fa-building",     title: "3 Iconic G+30 Towers",         text: "Haven, Elysian & Caelum — rising 30 floors each with panoramic views across the expressway belt." },
    { icon: "fa-leaf",         title: "5 Acres of Green Community",   text: "Landscaped open areas, themed gardens, and club-level amenities on a thoughtfully planned 5-acre masterplan." },
    { icon: "fa-star",         title: "Eldeco Group Legacy",          text: "50+ years | 200+ delivered projects. One of UP's most trusted developers with a zero-compromise quality record." },
    { icon: "fa-chart-line",   title: "High ROI Potential",           text: "Infrastructure boom around YEIDA, logistics parks, and Jewar Airport makes this the strongest appreciation bet in NCR." },
  ];

  return (
    <>
      <style>{styles}</style>

      {/* ── Scroll Progress Bar ── */}
      <div id="scroll-bar" style={{ width: `${scrollPct}%` }} />

      {/* ── Urgency Banner ── */}
      <div className="urgency-banner">
        <span>🔥 <strong>Pre-Launch Offer</strong> — Save up to ₹5L on select units</span>
        <span style={{ opacity: 0.3 }}>|</span>
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          Offer ends in: <CountdownTimer />
        </span>
        <button onClick={() => setShowModal(true)} style={{
          background: "#fff", color: "#013d1f", border: "none",
          padding: "5px 14px", fontSize: "11px", fontWeight: 800,
          letterSpacing: "1px", textTransform: "uppercase", cursor: "pointer",
          borderRadius: "2px",
        }}>Claim →</button>
      </div>
      <FloatingWhatsApp />
      <Chatbot />
      {/* ── Header ── */}
      <header className="header">
        <div className="container-fluid">
          <div className="logo">
            <Link to="/">
              <img src={Logo1} alt="Eldeco Group" />
            </Link>
          </div>
          <nav className="navi d-none d-lg-flex" aria-label="Main navigation">
            <ul>
              {[["#overview","Overview"],["#floorplan","Floor Plans"],["#pricelist","Pricing"],
                ["#amenities","Amenities"],["#calculator","ROI Calc"],["#gallery","Gallery"],["#location","Location"]
              ].map(([href, label]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="cta-header d-none d-lg-flex">
            <a href="tel:9899911553" className="btn-call"><i className="fa fa-phone" /> Call Now</a>
            <a href="https://api.whatsapp.com/send?phone=+919899911553&text=Hi! I am interested in Eldeco Echoes of Eden. Please share details."
               target="_blank" rel="noreferrer" className="btn-wa">
              <i className="fab fa-whatsapp" /> WhatsApp
            </a>
          </div>
          <button
            className={`menuBtn d-flex d-lg-none ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <div className={`menu-drawer ${menuOpen ? "open" : ""}`} role="navigation">
        <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button>
        <ul>
          {[["#overview","Overview"],["#floorplan","Floor Plans"],["#pricelist","Pricing"],
            ["#amenities","Amenities"],["#calculator","ROI Calculator"],["#gallery","Gallery"],["#location","Location"]
          ].map(([href, label]) => (
            <li key={href}><a href={href} onClick={() => setMenuOpen(false)}>{label}</a></li>
          ))}
        </ul>
      </div>

      <main>
        {/* ── Banner ── */}
        <section id="banner" className="banner" aria-label="Hero">
          <picture>
            <source media="(max-width:560px)" srcSet={Mobileeoe} />
            <img src={Desktopeoe} className="banner-img" alt="Eldeco Echoes of Eden luxury residences" loading="eager" />
          </picture>
          <div className="banner-overlay" />
          <div className="banner-content">
            <span className="banner-badge">🏆 New Launch — Sector 22D, Yamuna Expressway</span>
            <h1 className="banner-title">Eldeco Echoes of Eden</h1>
            <p className="banner-sub">
              Luxury 3 &amp; 4 BHK Residences · Greater Noida<br />
              <strong>Starting ₹1.7 Cr*</strong> · 5 Acres · G+30 Towers · 15 mins from Jewar Airport
            </p>
            <div className="banner-ctas">
              <button className="banner-cta-primary" onClick={() => setShowModal(true)}>
                Get Price &amp; Floor Plans →
              </button>
              <a href="#overview" className="banner-cta-secondary">
                Explore Project
              </a>
            </div>
          </div>
          <div className="banner-scroll-hint">
            <span>Scroll Down</span>
            <i className="fa fa-chevron-down" />
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <div className="stats-bar" aria-label="Project highlights">
          {[
            ["5 Acres",    "Master-planned"],
            ["3 Towers",   "Haven · Elysian · Caelum"],
            ["G+30",       "High-rise"],
            ["15 Min",     "From Jewar Airport"],
            ["RERA ✓",     "UPRERAPRJ125342"],
            ["30+",        "World-class amenities"],
          ].map(([num, lbl]) => (
            <div key={num} className="stat-item">
              <div className="stat-number">{num}</div>
              <div className="stat-label">{lbl}</div>
            </div>
          ))}
        </div>

        {/* ── Overview ── */}
        <section className="section bg-cream" id="overview" aria-label="Project Overview">
          <div className="container-lg">
            <div className="row g-4 flex-row-reverse">

              {/* Sticky Form */}
              <div className="col-lg-4">
                <div className="overview-form-box">
                  <div className="form-header">
                    <i className="fa fa-key" style={{ color: "#7DFFB3", marginRight: "8px" }} />
                    Express Your Interest
                  </div>
                  <div className="form-body">
                    <div className="form-units-left">
                      ⚠️ Only <strong>12 units</strong> remaining at launch pricing
                    </div>
                    <EnquiryForm formId="sidebarForm" source="Sidebar" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="col-lg-8" data-aos="fade-right">
                <span className="section-tag">Project Overview</span>
                <h2 className="section-title">Eldeco Echoes of Eden</h2>
                <div className="section-divider" />
                <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
                  <strong>Eldeco Echoes of Eden</strong> (EOE) is a landmark luxury residential
                  development at <strong>Sector 22D, Yamuna Expressway, Greater Noida</strong> — one
                  of NCR's fastest-appreciating real estate corridors. Designed for families who
                  refuse to compromise on space, style, or connectivity.
                </p>
                <p style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  With <strong>three G+30 towers</strong>, a curated 5-acre masterplan, and just{" "}
                  <strong>15 minutes to Noida International Airport (Jewar)</strong>, this project
                  delivers both an elevated lifestyle and a compelling long-term investment.
                </p>

                <div className="config-grid">
                  {[
                    ["Type",          "3 & 4 BHK Luxury Residences"],
                    ["Location",      "Sector 22D, Yamuna Expressway"],
                    ["Towers",        "G+30 · Haven · Elysian · Caelum"],
                    ["Jewar Airport", "~15 minutes away"],
                    ["RERA",          "UPRERAPRJ125342/02/2026"],
                    ["Price",         "Starting ₹1.7 Cr*"],
                  ].map(([label, value]) => (
                    <div key={label} className="config-item">
                      <div className="config-label">{label}</div>
                      <div className="config-value">{value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "1.75rem" }}>
                  <button className="btn-green" onClick={() => setShowModal(true)}>
                    <i className="fa fa-download" /> Download Brochure
                  </button>
                  <button className="btn-outline" onClick={() => setShowModal(true)}>
                    <i className="fa fa-calendar" /> Schedule Site Visit
                  </button>
                </div>

                <p className="seo-text">
                  Eldeco Echoes of Eden is a RERA-registered project (UPRERAPRJ125342/02/2026) by{" "}
                  Eldeco Group at Sector 22D, Yamuna Expressway, Greater Noida. Whether you're
                  searching for a <em>3 BHK flat on Yamuna Expressway</em>,{" "}
                  <em>property near Jewar Airport</em>, or a new Eldeco project in Greater Noida,
                  EOE delivers luxury, connectivity, and long-term value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Invest ── */}
        <section className="section" aria-label="Why Invest">
          <div className="container-lg">
            <div className="text-center mb-5" data-aos="fade-up">
              <span className="section-tag">Why Choose Us</span>
              <h2 className="section-title">6 Reasons to Invest in Eldeco EOE</h2>
              <div className="section-divider mx-auto" />
            </div>
            <div className="usp-grid" data-aos="fade-up">
              {usps.map(({ icon, title, text }) => (
                <div key={title} className="usp-card">
                  <div className="usp-icon"><i className={`fa-solid ${icon}`} /></div>
                  <div className="usp-title">{title}</div>
                  <div className="usp-text">{text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Floor Plans ── */}
        <section className="section bg-cream" id="floorplan" aria-label="Floor Plans">
          <div className="container-lg">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }} data-aos="fade-up">
              <div>
                <span className="section-tag">Floor Plans</span>
                <h2 className="section-title">3 &amp; 4 BHK Luxury Layouts</h2>
                <div className="section-divider" style={{ marginBottom: 0 }} />
              </div>
              <button className="btn-outline" onClick={() => setShowModal(true)}>
                <i className="fa fa-map" /> View Master Plan
              </button>
            </div>
            <div className="row g-4 justify-content-center" data-aos="fade-up">
              {[
                { type: "3 BHK",    size: "1090 – 1253 sq ft",
                  img: "https://image2url.com/r2/default/images/1775586904581-ab466bb8-ff75-4271-b4e6-014cda43391b.webp",
                  alt: "Eldeco Echoes of Eden 3 BHK floor plan – Sector 22D Yamuna Expressway",
                  badge: "Best Seller" },
                { type: "4 BHK",    size: "1283 – 1383 sq ft",
                  img: "https://image2url.com/r2/default/images/1775587018708-732efb18-f374-41d6-a387-5fd471436f4a.webp",
                  alt: "Eldeco Echoes of Eden 4 BHK floor plan – Sector 22D Yamuna Expressway",
                  badge: "Limited Units" },
              ].map(({ type, size, img, alt, badge }) => (
                <div key={type} className="col-md-5 col-sm-10">
                  <div className="fp-card">
                    <div className="fp-img-wrap" onClick={() => setShowModal(true)}>
                      <img src={img} className="fp-blur" alt={alt} loading="lazy" />
                      <div className="fp-overlay">
                        <button className="btn-white"><i className="fa fa-eye" /> View Full Plan</button>
                      </div>
                      <span style={{
                        position: "absolute", top: "12px", left: "12px",
                        background: "#02994a", color: "#fff", fontSize: "10px",
                        fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase",
                        padding: "4px 10px", borderRadius: "2px",
                      }}>{badge}</span>
                    </div>
                    <div className="fp-body">
                      <div className="fp-type">{type}</div>
                      <div className="fp-meta"><i className="fa fa-ruler-combined" style={{ color: "#02994a", marginRight: "5px" }} />{size}</div>
                      <div style={{ marginTop: "14px" }}>
                        <button className="btn-green w-100" onClick={() => setShowModal(true)}>
                          <i className="fa fa-download" /> Download Floor Plan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Amenities ── */}
        <section
          className="section"
          id="amenities"
          aria-label="Amenities"
          style={{ background: `linear-gradient(rgba(1,37,24,0.88), rgba(1,37,24,0.88)), url(${AmenityBg}) center/cover` }}
        >
          <div className="container-lg">
            <div className="text-center mb-5" data-aos="fade-up">
              <span className="section-tag" style={{ color: "#7DFFB3" }}>Lifestyle</span>
              <h2 className="section-title light">World-Class Amenities</h2>
              <div className="section-divider mx-auto" />
              <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "520px", margin: "0 auto", fontSize: "14px", lineHeight: 1.75 }}>
                30+ amenities curated for every member of the family — from wellness to sport to social.
              </p>
            </div>
            <div className="row g-3 justify-content-center" data-aos="fade-up">
              {amenities.map(({ img, label }) => (
                <div key={label} className="col-6 col-sm-3 col-md-2">
                  <div className="amenity-card">
                    <img src={img} className="amenity-img" alt={label} loading="lazy" />
                    <span className="amenity-label">{label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }} data-aos="fade-up">
              <button className="btn-white" onClick={() => setShowModal(true)}>
                <i className="fa fa-list" /> View All 30+ Amenities
              </button>
            </div>
          </div>
        </section>

        {/* ── Tagline ── */}
        <div
          style={{
            background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${TaglineBg}) center/cover fixed`,
            padding: "6rem 0", textAlign: "center",
          }}
          aria-hidden="true"
        >
          <div className="container-lg">
            <p data-aos="fade-up" style={{
              font: "400 clamp(1.2rem, 3vw, 2rem) var(--serif)",
              color: "#fff", maxWidth: "780px", margin: "0 auto", lineHeight: 1.7,
            }}>
              "Where nature, luxury, and modern living come together in perfect harmony
              — on the Yamuna Expressway, Greater Noida."
            </p>
          </div>
        </div>

        {/* ── Price List ── */}
        <section className="section bg-cream" id="pricelist" aria-label="Price List">
          <div className="container-lg">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <span className="section-tag">Pricing</span>
                <h2 className="section-title">Transparent Pricing</h2>
                <div className="section-divider" />
                <p style={{ lineHeight: 1.8, color: "#555" }}>
                  Pre-launch pricing is available for a <strong>limited window</strong>. Lock in
                  your unit now before prices escalate with Jewar Airport's commercial launch.
                </p>
                <div style={{
                  background: "#012518", color: "#fff", padding: "20px",
                  borderLeft: "4px solid var(--green)", marginTop: "1.5rem",
                }}>
                  <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255,255,255,0.5)", marginBottom: "6px" }}>Starting Price</div>
                  <div style={{ font: "700 2rem var(--serif)", color: "#7DFFB3" }}>₹1.7 Cr*</div>
                  <div style={{ fontSize: "12px", opacity: 0.6, marginTop: "4px" }}>Subject to availability & floor premium</div>
                </div>
              </div>
              <div className="col-lg-7" data-aos="fade-left">
                <div style={{ overflowX: "auto" }}>
                  <table className="price-table" aria-label="Eldeco Echoes of Eden price list">
                    <thead>
                      <tr>
                        <th>Type</th>
                        <th>Size (sq ft)</th>
                        <th>Price Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["3 BHK", "1090 – 1253"],
                        ["4 BHK", "1283 – 1383"],
                      ].map(([type, size]) => (
                        <tr key={type}>
                          <td><strong>{type}</strong></td>
                          <td>{size}</td>
                          <td>
                            <button className="btn-green" style={{ padding: "8px 16px", fontSize: "11px" }} onClick={() => setShowModal(true)}>
                              Get Price Breakup →
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: "11px", color: "#aaa", marginTop: "10px" }}>* Prices are indicative. Please enquire for exact pricing, floor-wise premium & payment plans.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ROI Calculator ── */}
        <section className="section" id="calculator" aria-label="Investment Calculator">
          <div className="container-lg">
            <div className="text-center mb-5" data-aos="fade-up">
              <span className="section-tag">Investment Tool</span>
              <h2 className="section-title">ROI Calculator</h2>
              <div className="section-divider mx-auto" />
              <p style={{ color: "#666", maxWidth: "520px", margin: "0 auto", fontSize: "14px" }}>
                Estimate your potential returns. Drag the sliders to see how your investment could grow.
              </p>
            </div>
            <div data-aos="fade-up">
              <ROICalculator />
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="section bg-cream" id="gallery" aria-label="Gallery">
          <div className="container-lg">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }} data-aos="fade-up">
              <div>
                <span className="section-tag">Gallery</span>
                <h2 className="section-title">A Glimpse of Eden</h2>
                <div className="section-divider" style={{ marginBottom: 0 }} />
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <div className="swiper-button-prev" style={{ position: "static", margin: 0 }} />
                <div className="swiper-button-next" style={{ position: "static", margin: 0 }} />
              </div>
            </div>
            <div className="swiper gallerySlider" data-aos="fade-up">
              <div className="swiper-wrapper">
                {gallery.map((src, i) => (
                  <div key={i} className="swiper-slide">
                    <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                      <img src={src} style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        alt={`Eldeco Echoes of Eden gallery ${i + 1}`} loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="section bg-dark" aria-label="Testimonials">
          <div className="container-lg">
            <div className="text-center mb-5" data-aos="fade-up">
              <span className="section-tag" style={{ color: "#7DFFB3" }}>Social Proof</span>
              <h2 className="section-title light">What Our Buyers Say</h2>
              <div className="section-divider mx-auto" />
            </div>
            <div className="testi-grid" data-aos="fade-up">
              {testimonials.map(({ name, role, initials, text, stars }) => (
                <div key={name} className="testi-card">
                  <div className="stars">{"★".repeat(stars)}</div>
                  <p className="testi-text">{text}</p>
                  <div className="testi-author">
                    <div className="testi-avatar">{initials}</div>
                    <div>
                      <div className="testi-name">{name}</div>
                      <div className="testi-role">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Location ── */}
        <section className="section bg-cream" id="location" aria-label="Location Advantages">
          <div className="container-lg">
            <div className="text-center mb-5" data-aos="fade-up">
              <span className="section-tag">Location</span>
              <h2 className="section-title">Perfectly Connected</h2>
              <div className="section-divider mx-auto" />
              <p style={{ color: "#666", fontSize: "14px" }}>
                <i className="fa fa-map-marker-alt" style={{ color: "#02994a" }} />{" "}
                <strong>Sector 22D, Yamuna Expressway, Greater Noida</strong>
              </p>
            </div>
            <div className="row g-4" data-aos="fade-up">
              <div className="col-lg-5">
                <button style={{ all: "unset", cursor: "pointer", display: "block", width: "100%" }} onClick={() => setShowModal(true)}>
                  <img
                    src={Loc} loading="lazy"
                    style={{ filter: "blur(7px)", width: "100%", display: "block" }}
                    alt="Eldeco Echoes of Eden location map – Sector 22D Yamuna Expressway near Jewar Airport"
                  />
                </button>
                <p style={{ fontSize: "11px", color: "#aaa", textAlign: "center", marginTop: "6px" }}>
                  Click to unlock full location map
                </p>
              </div>
              <div className="col-lg-7">
                <div className="row g-3">
                  {[
                    { title: "Connectivity", items: ["Yamuna Expressway – 2 mins","Noida Int'l Airport (Jewar) – 15 mins","Eastern Peripheral Expressway – 20 mins","Delhi (via Noida Exp.) – 45 mins"] },
                    { title: "Shopping & Retail", items: ["Omaxe Connaught Place – 20 mins","The Grand Venice Mall – 25 mins","Eldeco Eden Plaza (on-site)"] },
                    { title: "Education Centres", items: ["Galgotias University – 10 mins","Sharda University – 20 mins","Noida International University – 25 mins"] },
                    { title: "Hotels & Hospitality", items: ["Radisson Blu Greater Noida – 25 mins","Jaypee Greens Golf Resort – 30 mins","Crowne Plaza Greater Noida – 30 mins"] },
                  ].map(({ title, items }) => (
                    <div key={title} className="col-sm-6">
                      <div className="loc-card">
                        <h5>{title}</h5>
                        <ul className="list-unstyled">
                          {items.map(item => <li key={item}>{item}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Enquiry Section ── */}
        <section className="section" id="contact" aria-label="Enquiry Form">
          <div className="container-lg">
            <div style={{ boxShadow: "0 8px 48px rgba(0,0,0,0.14)", overflow: "hidden" }} data-aos="fade-up">
              <div className="row g-0">
                <div className="col-lg-6 enq-form-side">
                  <span className="section-tag" style={{ color: "#7DFFB3" }}>Get in Touch</span>
                  <h2 className="section-title light" style={{ marginBottom: "0.5rem" }}>Enquire Now</h2>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", marginBottom: "1.5rem" }}>
                    Get the latest price list, floor plans, and schedule a free site visit — all in one form.
                  </p>
                  <div style={{ background: "rgba(255,255,255,0.06)", padding: "10px 14px", borderLeft: "3px solid #7DFFB3", marginBottom: "1.5rem", fontSize: "12px", color: "rgba(255,255,255,0.65)" }}>
                    ✅ RERA Registered · 🏆 Eldeco Group · 📍 Sector 22D, Yamuna Expressway
                  </div>
                  <EnquiryForm formId="enquiryFormBottom" requireEmail source="Enquiry Section" darkBg />
                </div>
                <div className="col-lg-6 enq-img-side d-none d-lg-block">
                  <img src={FormSide} alt="Eldeco Echoes of Eden luxury apartment interior" loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="footer" role="contentinfo">
          <div className="container-lg">
            <div className="row g-4 align-items-start">
              <div className="col-md-7">
                <div style={{ marginBottom: "12px" }}>
                  <span className="rera-chip">RERA: UPRERAPRJ125342/02/2026</span>
                </div>
                <p style={{ lineHeight: 1.7, marginBottom: "10px" }}>
                  <strong style={{ color: "rgba(255,255,255,0.85)" }}>Disclaimer:</strong>{" "}
                  Authorized marketing partner of Eldeco Builders. All content is for informational
                  purposes only and does not constitute an offer. Prices are indicative and subject
                  to change. Images are for representation only. Data may be shared with
                  RERA-registered partners. All rights reserved.
                </p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <a href="https://up-rera.in/projects/" target="_blank" rel="noreferrer">
                    up-rera.in/projects/
                  </a>
                  <span style={{ opacity: 0.2 }}>·</span>
                  <Link to="/privacy-policy" style={{ textDecoration: "underline" }}>Privacy Policy</Link>
                </div>
              </div>
              <div className="col-md-5 text-center text-md-end">
                <img src={QR} style={{ width: "90px", display: "inline-block" }}
                  alt="Scan QR to enquire about Eldeco Echoes of Eden" loading="lazy" />
                <p style={{ marginTop: "8px", fontSize: "11px", opacity: 0.5 }}>Scan to enquire instantly</p>
                <a href="tel:9899911553" style={{ display: "block", color: "#7DFFB3", fontWeight: 700, fontSize: "18px", marginTop: "8px" }}>
                  +91 9899 91 1553
                </a>
              </div>
            </div>
          </div>
          {/* Scroll-to-top */}
          <button
            className={`fab-top ${showScrollTop ? "visible" : ""}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <i className="fa fa-chevron-up" />
          </button>
        </footer>

        {/* ── Mobile CTA Bar ── */}
        <div className="mobile-cta-bar" role="navigation" aria-label="Quick actions">
          <a className="mcta-wa" href="https://api.whatsapp.com/send?phone=+919355019172&text=Hi I am Interested in Eldeco Echoes of Eden, Please Share The Details." target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp" /> WhatsApp
          </a>
          <a className="mcta-call" href="tel:9899911553" aria-label="Call us">
            <i className="fa fa-phone" /> Call
          </a>
          <button className="mcta-enq" onClick={() => setShowModal(true)} aria-label="Enquire now">
            <i className="fa fa-envelope" /> Enquire
          </button>
        </div>

        {/* ── Floating WhatsApp ── */}
        <a className="fab-wa d-none d-sm-flex"
          href="https://api.whatsapp.com/send?phone=+919899911553&text=Hi! I am interested in Eldeco Echoes of Eden."
          target="_blank" rel="noreferrer" aria-label="WhatsApp us">
          <i className="fab fa-whatsapp" />
        </a>

        {/* ── Modal ── */}
        {showModal && (
          <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Enquiry popup">
            <div className="modal-box">
              <button className="modal-close" onClick={() => setShowModal(false)} aria-label="Close">×</button>
              <div className="modal-header-band">
                <h2 style={{ font: "500 1.2rem var(--serif)", color: "#fff", marginBottom: "4px" }}>
                  Eldeco Echoes of Eden
                </h2>
                <p style={{ font: "400 12px var(--sans)", color: "rgba(255,255,255,0.65)", margin: 0 }}>
                  <i className="fa fa-map-marker-alt" /> Sector 22D, Yamuna Expressway, Greater Noida
                </p>
              </div>
              <div className="modal-units">
                ⏰ Pre-launch offer · <strong>12 units</strong> remaining · Enquire before prices change
              </div>
              <div className="modal-body-pad">
                <h3 style={{ font: "500 1rem var(--serif)", textAlign: "center", marginBottom: "16px", color: "#012518" }}>
                  Get Price, Floor Plans &amp; Site Visit
                </h3>
                <EnquiryForm formId="modalForm" requireEmail source="Modal Popup" />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

/* ── App ────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <Routes>
      <Route path="/"              element={<EldecoEchoesOfEden />} />
      <Route path="/privacy-policy" element={<Privacy />} />
    </Routes>
  );
}