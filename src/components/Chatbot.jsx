/**
 * Chatbot.jsx
 * ─────────────────────────────────────────────
 * Right-side chatbot widget for Eldeco Echoes of Eden
 * Flow: 3 MCQ questions → Name → Phone → Submit to Google Sheet
 *
 * ⚙️  SETUP: Replace GOOGLE_SHEET_URL below with your
 *     deployed Google Apps Script Web App URL.
 *     See GoogleAppsScript.js for the script to deploy.
 */

import { useState, useEffect, useRef } from "react";

/* ─── CONFIG ──────────────────────────────────────────────────────── */
// Replace with your deployed Google Apps Script Web App URL
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/14obYasCGbvNNISUQBnxiv9y_uYznenlrORJrKWfFzic/edit?usp=sharing";

const BOT_NAME    = "Eden AI";
const BOT_AVATAR  = "🏡";
const DELAY_MS    = 600;   // typing delay between bot messages

/* ─── MCQ FLOW DEFINITION ─────────────────────────────────────────── */
const FLOW = [
  {
    id: "q1",
    bot: "Hi there! 👋 Welcome to **Eldeco Echoes of Eden**. I'll help you find the perfect home in just 2 minutes. What type of apartment are you looking for?",
    type: "mcq",
    options: ["3 BHK", "4 BHK", "Both / Undecided", "Investment Only"],
    key: "apartment_type",
  },
  {
    id: "q2",
    bot: "Great choice! 🏗️ What's your budget range?",
    type: "mcq",
    options: ["₹1.7 – 2 Cr", "₹2 – 2.5 Cr", "₹2.5 Cr+", "Flexible / Need Info"],
    key: "budget",
  },
  {
    id: "q3",
    bot: "Perfect. When are you planning to make a purchase?",
    type: "mcq",
    options: ["Immediately / ASAP", "Within 3–6 months", "6–12 months", "Just Exploring"],
    key: "timeline",
  },
  {
    id: "name",
    bot: "Almost done! 😊 May I know your **name** please?",
    type: "input",
    inputType: "text",
    placeholder: "Your full name",
    key: "name",
  },
  {
    id: "phone",
    bot: "And your **WhatsApp / mobile number**? Our team will share the latest pricing & floor plans with you.",
    type: "input",
    inputType: "tel",
    placeholder: "10-digit mobile number",
    key: "phone",
  },
];

/* ─── UTILS ───────────────────────────────────────────────────────── */
function parseBold(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((p, i) =>
    i % 2 === 1 ? <strong key={i}>{p}</strong> : p
  );
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

/* ─── COMPONENT ───────────────────────────────────────────────────── */
export default function Chatbot() {
  const [open,     setOpen]     = useState(false);
  const [messages, setMessages] = useState([]);    // { from: "bot"|"user", text, options? }
  const [step,     setStep]     = useState(0);     // index in FLOW
  const [answers,  setAnswers]  = useState({});    // collected answers
  const [input,    setInput]    = useState("");
  const [typing,   setTyping]   = useState(false);
  const [done,     setDone]     = useState(false);
  const [error,    setError]    = useState("");
  const [nudge,    setNudge]    = useState(false); // pulsing badge
  const [submitted,setSubmitted]= useState(false);
  const bottomRef = useRef(null);

  /* Show nudge badge after 12 s */
  useEffect(() => {
    const t = setTimeout(() => setNudge(true), 12000);
    return () => clearTimeout(t);
  }, []);

  /* Auto-scroll to bottom */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  /* Open → start conversation */
  useEffect(() => {
    if (open && messages.length === 0) {
      pushBotMessage(FLOW[0].bot, FLOW[0].type === "mcq" ? FLOW[0].options : null);
    }
  }, [open]);

  /* ── helpers ── */
  async function pushBotMessage(text, options = null) {
    setTyping(true);
    await sleep(DELAY_MS);
    setTyping(false);
    setMessages(m => [...m, { from: "bot", text, options }]);
  }

  function pushUserMessage(text) {
    setMessages(m => [...m, { from: "user", text }]);
  }

  /* ── MCQ option click ── */
  async function handleOption(option) {
    const current = FLOW[step];
    pushUserMessage(option);
    const newAnswers = { ...answers, [current.key]: option };
    setAnswers(newAnswers);
    await advance(step + 1, newAnswers);
  }

  /* ── Text input submit ── */
  async function handleInputSubmit(e) {
    e?.preventDefault();
    const val = input.trim();
    const current = FLOW[step];
    setError("");

    if (!val) { setError("Please enter a value."); return; }

    if (current.id === "phone") {
      if (!/^\d{10}$/.test(val)) { setError("Please enter a valid 10-digit number."); return; }
    }
    if (current.id === "name" && val.length < 2) { setError("Please enter your full name."); return; }

    pushUserMessage(val);
    setInput("");
    const newAnswers = { ...answers, [current.key]: val };
    setAnswers(newAnswers);
    await advance(step + 1, newAnswers);
  }

  /* ── Advance to next step ── */
  async function advance(nextStep, currentAnswers) {
    setStep(nextStep);

    if (nextStep < FLOW.length) {
      const next = FLOW[nextStep];
      await pushBotMessage(next.bot, next.type === "mcq" ? next.options : null);
    } else {
      // All answered — submit
      await pushBotMessage("🎉 Thank you! Our property advisor will call you within **2 hours** with personalised pricing & a site visit invite.");
      await sleep(400);
      await pushBotMessage("You can also reach us instantly on WhatsApp 👇");
      setDone(true);
      await submitToGoogleSheet(currentAnswers);
    }
  }

  /* ── Google Sheet submission ── */
  async function submitToGoogleSheet(data) {
    if (submitted) return;
    setSubmitted(true);
    try {
      const payload = {
        timestamp:      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        source:         "Chatbot Widget",
        project:        "Eldeco Echoes of Eden",
        apartment_type: data.apartment_type || "",
        budget:         data.budget         || "",
        timeline:       data.timeline       || "",
        name:           data.name           || "",
        phone:          data.phone          || "",
        page_url:       window.location.href,
      };

      // Google Apps Script Web App accepts GET with URLSearchParams
      const params = new URLSearchParams(payload);
      await fetch(`${GOOGLE_SHEET_URL}?${params.toString()}`, {
        method: "GET",
        mode:   "no-cors",   // Apps Script requires no-cors for cross-origin GET
      });

      // Also fire Google Ads conversion if present
      if (window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-18122446172/VeIkCMGpqqMcENyqusFD",
          value: 50.0, currency: "INR",
        });
      }
    } catch (err) {
      console.warn("Chatbot sheet submit error:", err);
    }
  }

  const currentStep = FLOW[step];
  const showInput   = !done && currentStep?.type === "input";
  const showOptions = !done && currentStep?.type === "mcq"
    && messages.length > 0
    && messages[messages.length - 1]?.options?.length > 0;

  /* ── RENDER ── */
  return (
    <>
      <style>{`
        /* ── Launcher ── */
        .chatbot-launcher {
          position: fixed;
          right: 20px;
          bottom: 80px;
          z-index: 9999999;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0;
        }
        .chatbot-launcher-tooltip {
          background: #012518;
          color: #fff;
          font: 600 12px "Montserrat", sans-serif;
          white-space: nowrap;
          padding: 8px 14px;
          border-radius: 4px 0 0 4px;
          margin-right: -6px;
          border-right: 3px solid #02994a;
          box-shadow: -2px 3px 12px rgba(0,0,0,0.2);
          animation: bot-tooltip-in 0.4s ease forwards;
          line-height: 1;
        }
        @keyframes bot-tooltip-in {
          from { opacity: 0; transform: translateX(10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .chatbot-launcher-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #02994a, #016c34);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          box-shadow: 0 4px 20px rgba(2,153,74,0.45);
          transition: transform 0.25s, box-shadow 0.25s;
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          animation: bot-btn-pulse 3s ease-in-out infinite;
        }
        .chatbot-launcher-btn:hover {
          transform: scale(1.1);
          animation-play-state: paused;
        }
        @keyframes bot-btn-pulse {
          0%,100% { box-shadow: 0 4px 20px rgba(2,153,74,0.45), 0 0 0 0 rgba(2,153,74,0.25); }
          50%      { box-shadow: 0 4px 20px rgba(2,153,74,0.45), 0 0 0 12px rgba(2,153,74,0); }
        }
        .chatbot-badge {
          position: absolute;
          top: -4px; right: -4px;
          width: 18px; height: 18px;
          background: #ff3b30;
          border-radius: 50%;
          border: 2px solid #fff;
          font: 700 9px "Montserrat", sans-serif;
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          animation: badge-bounce 1.2s ease infinite;
        }
        @keyframes badge-bounce {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.2); }
        }

        /* ── Window ── */
        .chatbot-window {
          position: fixed;
          right: 20px;
          bottom: 142px;
          width: 340px;
          max-height: 520px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 16px 64px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          z-index: 9989;
          overflow: hidden;
          animation: window-pop 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards;
          font-family: "Montserrat", sans-serif;
        }
        @keyframes window-pop {
          from { opacity: 0; transform: scale(0.85) translateY(20px); transform-origin: bottom right; }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* ── Header ── */
        .chatbot-header {
          background: linear-gradient(135deg, #012518 0%, #024d24 100%);
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .chatbot-avatar {
          width: 36px; height: 36px;
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .chatbot-header-info { flex: 1; }
        .chatbot-header-name { color: #fff; font: 700 13px "Montserrat", sans-serif; line-height: 1; }
        .chatbot-header-status {
          color: #7dffb3; font: 500 11px "Montserrat", sans-serif;
          display: flex; align-items: center; gap: 4px; margin-top: 3px;
        }
        .status-dot {
          width: 6px; height: 6px; background: #7dffb3; border-radius: 50%;
          animation: status-blink 2s ease infinite;
        }
        @keyframes status-blink {
          0%,100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }
        .chatbot-close {
          background: rgba(255,255,255,0.1); border: none; color: #fff;
          width: 28px; height: 28px; border-radius: 50%; font-size: 16px;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: background 0.2s; line-height: 1;
          flex-shrink: 0;
        }
        .chatbot-close:hover { background: rgba(255,0,0,0.3); }

        /* ── Messages ── */
        .chatbot-messages {
          flex: 1;
          overflow-y: auto;
          padding: 14px 12px 8px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: #f7f9f7;
          scrollbar-width: thin;
          scrollbar-color: #ccc transparent;
        }
        .chatbot-messages::-webkit-scrollbar { width: 4px; }
        .chatbot-messages::-webkit-scrollbar-thumb { background: #ccc; border-radius: 2px; }

        /* ── Bubbles ── */
        .msg-bubble {
          max-width: 85%;
          padding: 10px 13px;
          border-radius: 12px;
          font-size: 13px;
          line-height: 1.55;
          word-break: break-word;
        }
        .msg-bot {
          background: #fff;
          color: #1a1a1a;
          border-radius: 4px 12px 12px 12px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          align-self: flex-start;
        }
        .msg-user {
          background: linear-gradient(135deg, #02994a, #016c34);
          color: #fff;
          border-radius: 12px 4px 12px 12px;
          align-self: flex-end;
        }

        /* ── Typing ── */
        .typing-indicator {
          display: flex; align-items: center; gap: 4px;
          padding: 10px 14px;
          background: #fff;
          border-radius: 4px 12px 12px 12px;
          align-self: flex-start;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          width: fit-content;
        }
        .typing-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #02994a; opacity: 0.5;
          animation: typing-bounce 1.2s ease infinite;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing-bounce {
          0%,60%,100% { transform: translateY(0); opacity: 0.5; }
          30%          { transform: translateY(-5px); opacity: 1; }
        }

        /* ── MCQ Options ── */
        .chatbot-options {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 4px 12px 10px;
          background: #f7f9f7;
          flex-shrink: 0;
        }
        .chatbot-option-btn {
          padding: 7px 12px;
          border: 1.5px solid #02994a;
          background: #fff;
          color: #02994a;
          font: 600 11px "Montserrat", sans-serif;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .chatbot-option-btn:hover {
          background: #02994a;
          color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 3px 10px rgba(2,153,74,0.3);
        }

        /* ── Input area ── */
        .chatbot-input-area {
          padding: 10px 12px;
          background: #fff;
          border-top: 1px solid #eee;
          display: flex;
          gap: 8px;
          align-items: center;
          flex-shrink: 0;
        }
        .chatbot-input {
          flex: 1;
          border: 1.5px solid #e0e0e0;
          border-radius: 20px;
          padding: 9px 14px;
          font: 500 13px "Montserrat", sans-serif;
          outline: none;
          color: #1a1a1a;
          transition: border-color 0.2s;
        }
        .chatbot-input:focus { border-color: #02994a; }
        .chatbot-input::placeholder { color: #bbb; }
        .chatbot-send-btn {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: #02994a;
          border: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s, transform 0.2s;
        }
        .chatbot-send-btn:hover { background: #016c34; transform: scale(1.05); }
        .chatbot-send-btn svg { width: 16px; height: 16px; fill: #fff; }

        /* ── Error ── */
        .chatbot-error {
          font-size: 11px; color: #c00; padding: 0 12px 6px;
          background: #f7f9f7;
          flex-shrink: 0;
        }

        /* ── Done state ── */
        .chatbot-done-cta {
          padding: 10px 12px 14px;
          background: #f7f9f7;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .chatbot-wa-btn {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          padding: 11px; border-radius: 8px;
          background: #25d366; color: #fff;
          font: 700 12px "Montserrat", sans-serif;
          text-decoration: none;
          transition: background 0.2s;
          border: none;
        }
        .chatbot-wa-btn:hover { background: #1da850; color: #fff; }
        .chatbot-call-btn {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          padding: 11px; border-radius: 8px;
          background: #012518; color: #fff;
          font: 700 12px "Montserrat", sans-serif;
          text-decoration: none;
          border: none;
        }
        .chatbot-call-btn:hover { background: #024d24; color: #fff; }

        /* ── Mobile ── */
        @media (max-width: 576px) {
          .chatbot-window {
            right: 8px; left: 8px; width: auto;
            bottom: 70px;
            max-height: 70vh;
          }
          .chatbot-launcher { right: 12px; bottom: 70px; }
        }
      `}</style>

      {/* ── Launcher Button ── */}
      <div
        className="chatbot-launcher"
        onClick={() => { setOpen(o => !o); setNudge(false); }}
        role="button"
        aria-label="Open property chatbot"
        title="Chat with Eden AI"
      >
        {nudge && !open && (
          <div className="chatbot-launcher-tooltip">Ask about pricing →</div>
        )}
        <div className="chatbot-launcher-btn">
          {open ? "✕" : BOT_AVATAR}
          {nudge && !open && <div className="chatbot-badge">1</div>}
        </div>
      </div>

      {/* ── Chat Window ── */}
      {open && (
        <div className="chatbot-window" role="dialog" aria-label="Property Chatbot">

          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-avatar">{BOT_AVATAR}</div>
            <div className="chatbot-header-info">
              <div className="chatbot-header-name">{BOT_NAME} — Eldeco EOE</div>
              <div className="chatbot-header-status">
                <div className="status-dot" />
                Online · Typically replies in &lt;2 hrs
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg-bubble ${m.from === "bot" ? "msg-bot" : "msg-user"}`}>
                {parseBold(m.text)}
              </div>
            ))}
            {typing && (
              <div className="typing-indicator">
                <div className="typing-dot" />
                <div className="typing-dot" />
                <div className="typing-dot" />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* MCQ Options */}
          {showOptions && !typing && (
            <div className="chatbot-options">
              {currentStep.options.map(opt => (
                <button key={opt} className="chatbot-option-btn" onClick={() => handleOption(opt)}>
                  {opt}
                </button>
              ))}
            </div>
          )}

          {/* Text Input */}
          {showInput && !typing && (
            <>
              {error && <div className="chatbot-error">⚠️ {error}</div>}
              <form className="chatbot-input-area" onSubmit={handleInputSubmit} noValidate>
                <input
                  className="chatbot-input"
                  type={currentStep.inputType}
                  placeholder={currentStep.placeholder}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  maxLength={currentStep.id === "phone" ? 10 : 60}
                  autoFocus
                  inputMode={currentStep.id === "phone" ? "numeric" : "text"}
                />
                <button type="submit" className="chatbot-send-btn" aria-label="Send">
                  <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
              </form>
            </>
          )}

          {/* Done CTA */}
          {done && !typing && (
            <div className="chatbot-done-cta">
              <a
                className="chatbot-wa-btn"
                href={`https://api.whatsapp.com/send?phone=918799756026&text=${encodeURIComponent(`Hi! I'm ${answers.name || "interested"} and I just filled the chatbot for Eldeco Echoes of Eden. Please share pricing & floor plans.`)}`}
                target="_blank" rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us Now
              </a>
              <a className="chatbot-call-btn" href="tel:8799756026">
                📞 Call +91 9821 59 8950
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
}