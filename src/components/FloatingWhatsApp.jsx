/**
 * FloatingWhatsApp.jsx
 * Left-side floating WhatsApp button with pulse animation
 */

import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "919821598950";
const WHATSAPP_MSG    = "Hi! I am interested in Eldeco Echoes of Eden (Sector 22D, Yamuna Expressway). Please share the latest price list and floor plans.";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useEffect(() => {
    // Show after 3 seconds
    const t1 = setTimeout(() => setVisible(true), 3000);
    // Hide tooltip after 6 seconds
    const t2 = setTimeout(() => setTooltip(false), 8000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const waUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MSG)}`;

  if (!visible) return null;

  return (
    <>
      <style>{`
        .fab-wa-left {
          position: fixed;
          left: 18px;
          bottom: 80px;
          z-index: 9999990;
          display: flex;
          align-items: center;
          gap: 0;
          cursor: pointer;
          text-decoration: none;
        }
        .fab-wa-left-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #25d366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37,211,102,0.45);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          flex-shrink: 0;
          animation: wa-pulse-left 2.5s ease-in-out infinite;
          position: relative;
          z-index: 2;
        }
        .fab-wa-left-btn svg {
          width: 26px;
          height: 26px;
          fill: #fff;
        }
        .fab-wa-left:hover .fab-wa-left-btn {
          transform: scale(1.12);
          box-shadow: 0 6px 28px rgba(37,211,102,0.6);
          animation-play-state: paused;
        }
        @keyframes wa-pulse-left {
          0%,100% { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0.3); }
          50%      { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 10px rgba(37,211,102,0); }
        }
        .fab-wa-tooltip {
          background: #012518;
          color: #fff;
          font: 600 12px "Montserrat", sans-serif;
          white-space: nowrap;
          padding: 8px 14px;
          border-radius: 0 4px 4px 0;
          margin-left: -6px;
          line-height: 1;
          box-shadow: 2px 3px 12px rgba(0,0,0,0.2);
          animation: tooltip-slide-in 0.4s ease forwards;
          border-left: 3px solid #25d366;
        }
        .fab-wa-tooltip-hide {
          animation: tooltip-slide-out 0.4s ease forwards;
        }
        @keyframes tooltip-slide-in {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes tooltip-slide-out {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-10px); }
        }
        @media (max-width: 576px) {
          .fab-wa-left { bottom: 70px; left: 12px; }
          .fab-wa-left-btn { width: 44px; height: 44px; }
          .fab-wa-tooltip { display: none; }
        }
      `}</style>

      <a
        className="fab-wa-left"
        href={waUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp about Eldeco Echoes of Eden"
        title="Chat on WhatsApp"
      >
        <div className="fab-wa-left-btn">
          {/* WhatsApp SVG icon */}
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
        {tooltip && (
          <div className={`fab-wa-tooltip${!tooltip ? " fab-wa-tooltip-hide" : ""}`}>
            Chat with us
          </div>
        )}
      </a>
    </>
  );
}