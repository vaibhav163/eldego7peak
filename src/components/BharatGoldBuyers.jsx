
import { useState, useEffect, useRef } from "react";

// ── SEO HEAD INJECTION ────────────────────────────────────────────────────────
function SEOMeta() {
  useEffect(() => {
    document.title = "Bharat Gold Buyers | Sell Gold at Best Price in India – Trusted Since 2005";
    const metas = [
      { name: "description", content: "Bharat Gold Buyers offers the highest price for gold, silver & jewellery in India. Instant payment, certified testing, BIS hallmarking compliance, transparent pricing. Visit us in Delhi NCR." },
      { name: "keywords", content: "sell gold Delhi, gold buyer India, best gold rate today, sell old gold jewellery, cash for gold, gold testing, trusted gold buyer" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Bharat Gold Buyers" },
      { property: "og:title", content: "Bharat Gold Buyers | Best Gold Price India" },
      { property: "og:description", content: "Sell your gold at the best market rate. Instant cash, certified testing, 18+ years of trust." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.bharatgoldbuyer.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bharat Gold Buyers | Best Gold Price India" },
      { name: "twitter:description", content: "Sell your gold at the best market rate. Instant cash, certified testing." },
    ];
    metas.forEach(m => {
      const el = document.createElement("meta");
      Object.entries(m).forEach(([k, v]) => el.setAttribute(k, v));
      document.head.appendChild(el);
    });
    // Schema.org structured data
    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Bharat Gold Buyers",
      "image": "https://www.bharatgoldbuyer.com/logo.png",
      "url": "https://www.bharatgoldbuyer.com",
      "telephone": "+91-98100-00000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "23, Karol Bagh Market",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110005",
        "addressCountry": "IN"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 28.6519, "longitude": 77.1909 },
      "openingHours": "Mo-Sa 10:00-19:00",
      "priceRange": "₹₹₹",
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1284" }
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }, []);
  return null;
}

// ── CONSTANTS ─────────────────────────────────────────────────────────────────
const GOLD_RATES = [
  { karat: "24K", rate: 7420, purity: "99.9%", label: "Pure Gold" },
  { karat: "22K", rate: 6802, purity: "91.6%", label: "Hallmark Jewellery" },
  { karat: "18K", rate: 5565, rate2: 5500, purity: "75.0%", label: "Standard Jewellery" },
  { karat: "14K", rate: 4336, purity: "58.5%", label: "Light Jewellery" },
];

const PROCESS_STEPS = [
  { icon: "📞", title: "Call & Book", desc: "Call or WhatsApp us to book a free home visit or walk into our branch — no appointment needed." },
  { icon: "🔬", title: "Expert Testing", desc: "Our certified technicians test your gold using XRF analysers and karat meters — completely non-destructive." },
  { icon: "📊", title: "Transparent Quote", desc: "We calculate your gold's value using live MCX rates. You see the full breakdown — weight, purity, and deductions." },
  { icon: "💰", title: "Instant Payment", desc: "Accept our offer and receive instant payment via NEFT, RTGS, UPI, or cash. No delays, no hidden charges." },
];

const TESTIMONIALS = [
  { name: "Priya Sharma", city: "Karol Bagh, Delhi", rating: 5, text: "Got ₹14,200 more than my local jeweller offered. The XRF test was done right in front of me. Completely trustworthy.", avatar: "PS" },
  { name: "Rajesh Gupta", city: "Noida, UP", rating: 5, text: "Sold inherited jewellery I had no use for. The team was respectful, the process took under 30 minutes, and payment was instant NEFT.", avatar: "RG" },
  { name: "Meena Agarwal", city: "Gurgaon, Haryana", rating: 5, text: "I was nervous about selling gold for the first time. They explained every step and showed me live gold rates on screen. Very professional.", avatar: "MA" },
  { name: "Suresh Nair", city: "Dwarka, Delhi", rating: 5, text: "Best rates in Delhi NCR. They even came to my home within 2 hours. Will definitely recommend to friends and family.", avatar: "SN" },
];

const FAQS = [
  { q: "What types of gold do you buy?", a: "We buy all forms of gold: jewellery (broken or intact), coins, bars, biscuits, dental gold, and scrap gold — from 8K to 24K purity." },
  { q: "How is the gold price calculated?", a: "We use live MCX (Multi Commodity Exchange) gold rates updated every 15 minutes. Your payout = (Net weight × Purity % × Live MCX rate) minus a small refining charge that we disclose upfront." },
  { q: "Is the testing process safe for my jewellery?", a: "Yes. We use XRF (X-ray fluorescence) analysers and electronic karat meters — both are 100% non-destructive. No acid testing, no scratching, no damage to your gold." },
  { q: "How quickly will I be paid?", a: "Payment is instant. Once you accept our offer, you receive payment immediately via UPI, NEFT/RTGS, or cash — your choice." },
  { q: "Do you provide a receipt and documentation?", a: "Absolutely. We provide a fully itemised receipt with gold weight, purity tested, MCX rate applied, and total paid. You also receive a copy of our GST invoice." },
  { q: "Can you visit my home to buy gold?", a: "Yes! We offer free home visits across Delhi NCR for gold valued above ₹50,000. Call or WhatsApp us to schedule." },
  { q: "Are you a registered business?", a: "Yes. Bharat Gold Buyers is registered under GST (GSTIN: 07ABCFB1234A1ZX) and complies with all PMLA (Prevention of Money Laundering Act) requirements." },
];

const CERTS = [
  { label: "BIS Registered", detail: "Bureau of Indian Standards" },
  { label: "PMLA Compliant", detail: "Anti-Money Laundering Act" },
  { label: "GST Registered", detail: "GSTIN: 07ABCFB1234A1ZX" },
  { label: "ISO 9001:2015", detail: "Quality Management Certified" },
];

// ── HOOKS ─────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ── SUB-COMPONENTS ────────────────────────────────────────────────────────────
function StarRating({ n = 5 }) {
  return <span style={{ color: "#D4A847", fontSize: 14, letterSpacing: 1 }}>{"★".repeat(n)}</span>;
}

function WhatsAppBtn({ style = {} }) {
  return (
    <a
      href="https://wa.me/919810000000?text=Hello%20Bharat%20Gold%20Buyers%2C%20I%20want%20to%20sell%20my%20gold"
      target="_blank" rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: "#25D366", color: "#fff",
        padding: "13px 24px", borderRadius: 50, fontFamily: "'DM Sans', sans-serif",
        fontWeight: 600, fontSize: 15, textDecoration: "none",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        transition: "transform 0.2s, box-shadow 0.2s",
        ...style
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(37,211,102,0.5)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)"; }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.121 1.531 5.851L0 24l6.303-1.651A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.012-1.376l-.36-.214-3.732.979.995-3.638-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
      WhatsApp Us
    </a>
  );
}

function GoldRateCard({ item, idx, visible }) {
  return (
    <div style={{
      background: "linear-gradient(135deg, #1a1208 0%, #2a1f0a 100%)",
      border: "1px solid rgba(212,168,71,0.35)",
      borderRadius: 16,
      padding: "28px 24px",
      position: "relative",
      overflow: "hidden",
      transform: visible ? "translateY(0)" : "translateY(30px)",
      opacity: visible ? 1 : 0,
      transition: `all 0.5s ease ${idx * 0.1}s`,
    }}>
      <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(212,168,71,0.07)" }} />
      <div style={{ fontSize: 13, color: "#D4A847", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6, fontFamily: "'DM Sans', sans-serif" }}>{item.label}</div>
      <div style={{ fontSize: 38, fontWeight: 800, color: "#fff", fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>{item.karat}</div>
      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2, marginBottom: 16, fontFamily: "'DM Sans', sans-serif" }}>Purity: {item.purity}</div>
      <div style={{ height: 1, background: "rgba(212,168,71,0.2)", marginBottom: 16 }} />
      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>Our buying rate</div>
      <div style={{ fontSize: 28, fontWeight: 700, color: "#D4A847", fontFamily: "'DM Sans', sans-serif" }}>₹{item.rate.toLocaleString()}<span style={{ fontSize: 14, color: "rgba(212,168,71,0.6)" }}>/g</span></div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 4, fontFamily: "'DM Sans', sans-serif" }}>Updated: {new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })} IST</div>
    </div>
  );
}

// ── SECTIONS ──────────────────────────────────────────────────────────────────
function Hero() {
  const [count, setCount] = useState({ years: 0, customers: 0, rating: 0 });
  useEffect(() => {
    const targets = { years: 18, customers: 50000, rating: 4.9 };
    const duration = 1800;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount({
        years: Math.round(targets.years * ease),
        customers: Math.round(targets.customers * ease),
        rating: +(targets.rating * ease).toFixed(1),
      });
      if (p < 1) requestAnimationFrame(tick);
    };
    setTimeout(() => requestAnimationFrame(tick), 600);
  }, []);

  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
      background: "linear-gradient(160deg, #0d0900 0%, #1a1005 40%, #0f0c04 100%)",
      padding: "120px 24px 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative grain */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")", opacity: 0.4, pointerEvents: "none" }} />
      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "20%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,71,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,71,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative" }}>
        {/* Trust badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(212,168,71,0.12)", border: "1px solid rgba(212,168,71,0.3)", borderRadius: 50, padding: "6px 16px", marginBottom: 32, animation: "fadeUp 0.6s ease forwards" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#25D366", display: "inline-block", boxShadow: "0 0 8px #25D366" }} />
          <span style={{ fontSize: 12, color: "rgba(212,168,71,0.9)", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: 1 }}>LIVE GOLD RATES UPDATED • BIS CERTIFIED</span>
        </div>

        <h1 style={{
          fontSize: "clamp(40px, 6vw, 76px)", fontFamily: "'Playfair Display', serif",
          fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 24,
          animation: "fadeUp 0.7s ease 0.1s both",
        }}>
          India's Most Trusted<br />
          <span style={{ background: "linear-gradient(90deg, #D4A847, #F5D690, #D4A847)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Gold Buyer</span>
        </h1>

        <p style={{
          fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.6)", maxWidth: 560,
          lineHeight: 1.7, marginBottom: 40, fontFamily: "'DM Sans', sans-serif",
          animation: "fadeUp 0.7s ease 0.2s both",
        }}>
          Sell your gold at the highest market rate — certified XRF testing, transparent MCX-linked pricing, and instant payment. Trusted by <strong style={{ color: "rgba(255,255,255,0.85)" }}>50,000+ customers</strong> across India.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 56, animation: "fadeUp 0.7s ease 0.3s both" }}>
          <a href="tel:+919810000000" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "linear-gradient(135deg, #D4A847, #B8872E)",
            color: "#0d0900", padding: "14px 28px", borderRadius: 50,
            fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15,
            textDecoration: "none", boxShadow: "0 4px 24px rgba(212,168,71,0.4)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(212,168,71,0.55)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 24px rgba(212,168,71,0.4)"; }}
          >
            📞 Call Now: +91-98100-00000
          </a>
          <WhatsAppBtn />
        </div>

        {/* Stats bar */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32, animation: "fadeUp 0.7s ease 0.4s both" }}>
          {[
            { val: `${count.years}+`, label: "Years in Business" },
            { val: `${count.customers.toLocaleString()}+`, label: "Happy Customers" },
            { val: `${count.rating}/5`, label: "Google Rating" },
            { val: "₹0", label: "Hidden Charges" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 32, fontWeight: 800, color: "#D4A847", fontFamily: "'DM Sans', sans-serif", lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveRates() {
  const [ref, visible] = useInView();
  const [lastUpdate, setLastUpdate] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setLastUpdate(new Date()), 60000);
    return () => clearInterval(t);
  }, []);
  return (
    <section ref={ref} id="rates" style={{ background: "#080600", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40, gap: 16 }}>
          <div>
            <div style={{ fontSize: 12, color: "#D4A847", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Live Market Rates</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontFamily: "'Playfair Display', serif", color: "#fff", margin: 0 }}>Today's Gold Buying Rates</h2>
          </div>
          <div style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.3)", borderRadius: 8, padding: "8px 14px", fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#25D366" }}>
            ● MCX-linked • Updated {lastUpdate.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })} IST
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 24 }}>
          {GOLD_RATES.map((item, i) => <GoldRateCard key={i} item={item} idx={i} visible={visible} />)}
        </div>
        <div style={{ background: "rgba(212,168,71,0.07)", border: "1px solid rgba(212,168,71,0.2)", borderRadius: 10, padding: "14px 20px", fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
          ℹ️ Rates shown are our buying rates per gram (inclusive of all purity grades within each karat). Final payout depends on exact weight and purity confirmed by XRF testing. <strong style={{ color: "rgba(212,168,71,0.8)" }}>No hidden deductions.</strong>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} id="process" style={{ background: "#0a0700", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 12, color: "#D4A847", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Simple & Transparent</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontFamily: "'Playfair Display', serif", color: "#fff", margin: 0 }}>How It Works</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif", marginTop: 12, fontSize: 16 }}>From first call to final payment — everything in under 30 minutes.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,168,71,0.12)",
              borderRadius: 16, padding: "32px 24px",
              transform: visible ? "translateY(0)" : "translateY(40px)",
              opacity: visible ? 1 : 0,
              transition: `all 0.5s ease ${i * 0.12}s`,
            }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{step.icon}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg, #D4A847, #B8872E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#0d0900", fontFamily: "'DM Sans', sans-serif", flexShrink: 0 }}>{i + 1}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', sans-serif", margin: 0 }}>{step.title}</h3>
              </div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} id="trust" style={{ background: "#080600", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 12, color: "#D4A847", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Certified & Compliant</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontFamily: "'Playfair Display', serif", color: "#fff", margin: 0 }}>Why We're Different</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 48 }}>
          {CERTS.map((c, i) => (
            <div key={i} style={{
              background: "linear-gradient(135deg, rgba(212,168,71,0.08) 0%, rgba(212,168,71,0.03) 100%)",
              border: "1px solid rgba(212,168,71,0.25)", borderRadius: 12, padding: "24px 20px",
              display: "flex", flexDirection: "column", gap: 6,
              transform: visible ? "scale(1)" : "scale(0.95)",
              opacity: visible ? 1 : 0,
              transition: `all 0.4s ease ${i * 0.08}s`,
            }}>
              <div style={{ fontSize: 20 }}>✅</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#D4A847", fontFamily: "'DM Sans', sans-serif" }}>{c.label}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>{c.detail}</div>
            </div>
          ))}
        </div>

        {/* Company Info Box */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,168,71,0.2)", borderRadius: 16, padding: "32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          {[
            { label: "Company Name", val: "Bharat Gold Buyers Pvt. Ltd." },
            { label: "GSTIN", val: "07ABCFB1234A1ZX" },
            { label: "CIN", val: "U74900DL2005PTC123456" },
            { label: "Established", val: "2005, New Delhi" },
            { label: "RBI Compliant", val: "PMLA & KYC Verified" },
            { label: "BIS Certificate", val: "HM-XRF-2023-00789" },
          ].map((item, i) => (
            <div key={i}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif", letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif" }}>{item.val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} id="reviews" style={{ background: "#0a0700", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 12, color: "#D4A847", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Customer Reviews</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontFamily: "'Playfair Display', serif", color: "#fff", margin: 0 }}>What Our Customers Say</h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 16 }}>
            <StarRating />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)" }}>4.9 average from 1,284 reviews on Google</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16, padding: "28px 24px",
              transform: visible ? "translateY(0)" : "translateY(30px)",
              opacity: visible ? 1 : 0,
              transition: `all 0.5s ease ${i * 0.1}s`,
            }}>
              <StarRating n={t.rating} />
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, margin: "12px 0 20px", fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #D4A847, #B8872E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#0d0900", fontFamily: "'DM Sans', sans-serif", flexShrink: 0 }}>{t.avatar}</div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#fff", fontSize: 14 }}>{t.name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.35)", fontSize: 12 }}>{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(null);
  const [ref, visible] = useInView();
  return (
    <section ref={ref} id="faq" style={{ background: "#080600", padding: "80px 24px" }}>
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 12, color: "#D4A847", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Got Questions?</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontFamily: "'Playfair Display', serif", color: "#fff", margin: 0 }}>Frequently Asked Questions</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, transform: visible ? "translateY(0)" : "translateY(30px)", opacity: visible ? 1 : 0, transition: "all 0.6s ease" }}>
          {FAQS.map((f, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${open === i ? "rgba(212,168,71,0.4)" : "rgba(255,255,255,0.07)"}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.3s" }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "20px 24px", background: "none", border: "none", cursor: "pointer", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15, textAlign: "left" }}>
                <span>{f.q}</span>
                <span style={{ color: "#D4A847", fontSize: 20, transition: "transform 0.3s", transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: "0 24px 20px", fontSize: 14, color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.75 }}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [ref, visible] = useInView();
  return (
    <section ref={ref} id="contact" style={{ background: "#0a0700", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
          <div style={{ transform: visible ? "translateX(0)" : "translateX(-30px)", opacity: visible ? 1 : 0, transition: "all 0.6s ease" }}>
            <div style={{ fontSize: 12, color: "#D4A847", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Visit or Contact</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontFamily: "'Playfair Display', serif", color: "#fff", margin: "0 0 24px" }}>Get in Touch</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: "📍", label: "Address", val: "23, Karol Bagh Market, New Delhi – 110005" },
                { icon: "📞", label: "Phone", val: "+91-98100-00000", href: "tel:+919810000000" },
                { icon: "✉️", label: "Email", val: "info@bharatgoldbuyer.com", href: "mailto:info@bharatgoldbuyer.com" },
                { icon: "🕐", label: "Hours", val: "Mon–Sat: 10:00 AM – 7:00 PM" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{c.icon}</span>
                  <div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif", letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} style={{ fontSize: 15, fontWeight: 500, color: "#D4A847", fontFamily: "'DM Sans', sans-serif", textDecoration: "none" }}>{c.val}</a>
                    ) : (
                      <div style={{ fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.8)", fontFamily: "'DM Sans', sans-serif" }}>{c.val}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <WhatsAppBtn />
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ transform: visible ? "translateX(0)" : "translateX(30px)", opacity: visible ? 1 : 0, transition: "all 0.6s ease 0.15s" }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,168,71,0.15)", borderRadius: 16, padding: "32px" }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#fff", fontSize: 18, margin: "0 0 24px" }}>Request a Free Quote</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Full Name", type: "text", placeholder: "e.g. Priya Sharma" },
                  { label: "Mobile Number", type: "tel", placeholder: "+91 98XXX XXXXX" },
                  { label: "City / Area", type: "text", placeholder: "e.g. Karol Bagh, Delhi" },
                ].map((field, i) => (
                  <div key={i}>
                    <label style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 6 }}>{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} style={{
                      width: "100%", boxSizing: "border-box", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8,
                      padding: "12px 16px", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                      outline: "none",
                    }} onFocus={e => e.target.style.borderColor = "rgba(212,168,71,0.5)"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 6 }}>What are you selling?</label>
                  <select style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "12px 16px", color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: 14, outline: "none" }}>
                    <option value="" style={{ background: "#1a1005" }}>Select gold type</option>
                    {["Gold Jewellery", "Gold Coins / Bars", "Broken / Scrap Gold", "Silver", "Mixed (Gold + Silver)"].map(v => <option key={v} value={v} style={{ background: "#1a1005" }}>{v}</option>)}
                  </select>
                </div>
                <button style={{
                  background: "linear-gradient(135deg, #D4A847, #B8872E)",
                  color: "#0d0900", padding: "14px 24px", borderRadius: 50, border: "none",
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, cursor: "pointer",
                  width: "100%", marginTop: 8,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(212,168,71,0.45)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
                onClick={e => { e.preventDefault(); alert("Thank you! We'll call you within 30 minutes."); }}
                >
                  Get Free Quote →
                </button>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", textAlign: "center", margin: 0 }}>No obligation. No fees. 100% free consultation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [
    { label: "Rates", href: "#rates" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#trust" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(8,6,0,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(212,168,71,0.12)" : "1px solid transparent",
      transition: "all 0.3s ease",
      padding: "0 24px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg, #D4A847, #B8872E)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🏅</div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, color: "#fff", fontSize: 16, lineHeight: 1 }}>Bharat Gold</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#D4A847", letterSpacing: 2, textTransform: "uppercase" }}>Buyers</div>
          </div>
        </a>
        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#D4A847"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>{l.label}</a>
          ))}
          <a href="tel:+919810000000" style={{ background: "linear-gradient(135deg, #D4A847, #B8872E)", color: "#0d0900", padding: "9px 20px", borderRadius: 50, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>📞 Call Now</a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#050400", borderTop: "1px solid rgba(212,168,71,0.1)", padding: "48px 24px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, color: "#fff", fontSize: 20, marginBottom: 8 }}>Bharat Gold Buyers</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>India's most trusted gold buyer since 2005. BIS certified, PMLA compliant, instant payment.</p>
            <div style={{ marginTop: 16, fontSize: 12, color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>GSTIN: 07ABCFB1234A1ZX</div>
          </div>
          {[
            { title: "Quick Links", items: [{ label: "Today's Gold Rates", href: "#rates" }, { label: "How It Works", href: "#process" }, { label: "Certifications", href: "#trust" }, { label: "Customer Reviews", href: "#reviews" }] },
            { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }, { label: "Refund Policy", href: "#" }, { label: "Disclaimer", href: "#" }] },
            { title: "Contact", items: [{ label: "+91-98100-00000", href: "tel:+919810000000" }, { label: "info@bharatgoldbuyer.com", href: "mailto:info@bharatgoldbuyer.com" }, { label: "23, Karol Bagh, New Delhi", href: "#" }, { label: "Mon–Sat 10am–7pm", href: "#" }] },
          ].map((col, i) => (
            <div key={i}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#D4A847", fontFamily: "'DM Sans', sans-serif", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>{col.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.items.map((item, j) => (
                  <a key={j} href={item.href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.8)"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>{item.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© {new Date().getFullYear()} Bharat Gold Buyers Pvt. Ltd. All rights reserved.</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Regulated under PMLA 2002 • BIS Certified • ISO 9001:2015</div>
        </div>
      </div>
    </footer>
  );
}

// Floating WhatsApp bubble
function FloatingWA() {
  return (
    <a href="https://wa.me/919810000000" target="_blank" rel="noopener noreferrer"
      style={{ position: "fixed", bottom: 24, right: 24, zIndex: 200, width: 56, height: 56, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(37,211,102,0.5)", transition: "transform 0.2s, box-shadow 0.2s", textDecoration: "none" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(37,211,102,0.65)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.5)"; }}
      title="Chat on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.121 1.531 5.851L0 24l6.303-1.651A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.012-1.376l-.36-.214-3.732.979.995-3.638-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
    </a>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    // Import Google Fonts
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);

    // Global styles
    const style = document.createElement("style");
    style.textContent = `
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { background: #080600; color: #fff; }
      @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
      select option { color: #fff; background: #1a1005; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #080600; }
      ::-webkit-scrollbar-thumb { background: rgba(212,168,71,0.3); border-radius: 3px; }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <>
      <SEOMeta />
      <Navbar />
      <main>
        <Hero />
        <LiveRates />
        <Process />
        <Trust />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </>
  );
}
