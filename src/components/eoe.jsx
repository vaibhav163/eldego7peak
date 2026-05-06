// import { useState, useEffect, useRef } from "react";
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Ame1 from "../../eldeco-echoes/images/ame-01.jpg";
// import Ame2 from "../../eldeco-echoes/images/ame-02.webp";
// import Ame3 from "../../eldeco-echoes/images/ame-03.jpg";
// import Ame4 from "../../eldeco-echoes/images/ame-04.webp";
// import Ame5 from "../../eldeco-echoes/images/ame-05.jpg";
// import Ame6 from "../../eldeco-echoes/images/ame-06.webp";  
// import Ame7 from "../../eldeco-echoes/images/ame-07.jpg";
// import Ame9 from "../../eldeco-echoes/images/ame-09.jpg";
// import G1 from "../../eldeco-echoes/images/g1.jpg";
// import G2 from "../../eldeco-echoes/images/g2.jpg";
// import G3 from "../../eldeco-echoes/images/g3.jpg";
// import G4 from "../../eldeco-echoes/images/g4.jpg";
// import Ab from "../../eldeco-echoes/images/3-b.webp";
// import Bb from "../../eldeco-echoes/images/4-b.webp";
// import BannerMobile from "../../eldeco-echoes/images/mobile.jpeg";
// import BannerDesktop from "../../eldeco-echoes/images/desktop.jpeg";
// import AmenityBg from "../../eldeco-echoes/images/amen.jpeg";
// import TaglineBg from "../../eldeco-echoes/images/bgg.jpeg";
// import FormSide from "../../eldeco-echoes/images/side.jpg";
// import Logo1 from "../../eldeco-echoes/images/eldeco.webp";
// import Download from "../../eldeco-echoes/images/download.gif";
// import Loc from "../../eldeco-echoes/images/loc.jpg";
// import Side from "../../eldeco-echoes/images/side.jpg";
// import QR from "../../eldeco-echoes/images/qr.webp";
// import Privacy from "./privacypolicy.jsx";


// /* ─── Inline styles ─── */
// const styles = `
//   @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Marcellus&display=swap");
//   @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css");
//   @import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css");
//   @import url("https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.1/swiper-bundle.min.css");
//   @import url("https://unpkg.com/aos@2.3.0/dist/aos.css");

//   :root {
//     --primary-color: #02994a;
//     --body-color: #35312f;
//     --light: #fff7e8;
//     --facebook: #4267b2;
//     --twitter: #00acee;
//     --linkedin: #0e76a8;
//     --youtube: #ff0000;
//     --whatsapp: #25d366;
//     --instagram: #c92bb7;
//     --serif: "Marcellus", serif;
//     --golden-gradient: radial-gradient(ellipse farthest-corner at right bottom, #ffe5d4 0%, #ffac75 8%, #c18761 30%, var(--primary-color) 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, var(--primary-color) 8%, #54331f 25%, #63422d 62.5%, #54331f 100%);
//     --golden-gradient-hover: radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%), radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, var(--primary-color) 40%, transparent 80%);
//   }
//   html { scroll-behavior: smooth; }
//   body { color: var(--body-color); font: 400 1rem "Montserrat", sans-serif; overflow-x: hidden; }
//   svg:not([fill]) { fill: currentColor; }
//   ul { padding-left: 0; margin-bottom: 0; }
//   a, a:hover { text-decoration: none; color: inherit; }
//   a { color: var(--body-color); transition: all 300ms ease-in-out; }
//   a.bg-primary:hover { background-color: var(--primary-color) !important; }
//   img { width: 100%; display: block; }
//   .object-cover { object-fit: cover; }
//   .container-fluid { padding-left: 3rem; padding-right: 3rem; }
//   .filter-white { filter: brightness(70); }
//   .filter-dark { filter: grayscale(1) brightness(0.5); }

//   /* Header */
//   .header { width: 100%; position: fixed; top: 0; left: 0; z-index: 997; background-image: linear-gradient(rgb(0 0 0 / 52%), transparent); transition: all 300ms ease-in-out; }
//   .header:hover, .header.fixed { background: #fff; box-shadow: 0 10px 20px rgb(0 0 0 / 10%); }
//   .header .container-fluid { display: flex; align-items: center; justify-content: space-between; }
//   .logo { width: 82px; position: relative; padding: 5px 0; min-height: 1px; transition: all 300ms ease-in-out; }
//   .logo img { width: 100%; padding: 5px 0; }
//   .header .logo1 { display: none; }
//   .header.fixed .logo2 { display: none; }
//   .header.fixed .logo1 { display: block; }
//   .navi { display: flex; gap: 30px; }
//   .navi ul { gap: 0 10px; }
//   .navi li a { color: #ffff; display: flex; align-items: center; gap: 6px; white-space: nowrap; padding: 12px; font: 500 1rem var(--serif); text-transform: uppercase; position: relative; transition: all 300ms ease-in-out; letter-spacing: 1px; font-size: 14px; }
//   .header:hover .navi li a, .header.fixed .navi li a { color: var(--body-color); }
//   .header .navi li a.active, .header .navi li:hover > a { color: var(--primary-color); }
//   .navi li a i { font-size: 11px; color: var(--primary-color); }
//   .cta-box ul { display: flex; gap: 0.5rem; }
//   .cta-box a { display: flex; flex-direction: column; align-items: center; gap: 5px; text-transform: uppercase; font-size: 0.75rem; }
//   .cta-box i { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; border-radius: 50%; color: #fff; box-shadow: 0 0 0 1px rgba(255,255,255,0.5) inset; transition: all 300ms ease-in-out; }
//   .header:hover .cta-box i, .header.fixed .cta-box i { color: var(--body-color); box-shadow: 0 0 0 1px rgba(0,0,0,0.25) inset; }
//   .cta-box i:hover { color: #fff !important; background-color: var(--primary-color); }
//   .cta-box .whatsappBtn { background-color: var(--whatsapp); color: #fff; padding: 4px 4px 4px 1rem; margin-left: 1.5rem; border-radius: 40px; flex-direction: row; animation: enq 2s cubic-bezier(0.55, 0.76, 0.27, 1.29) infinite; }
//   @keyframes enq { 50% { box-shadow: 0 0 0 1px rgb(14 121 0 / 45%), 0 0 0 0px rgb(11 74 0 / 63%), 1rem 1rem 2rem rgb(0 0 0 / 25%); } }
//   .cta-box .whatsappBtn:hover { background-color: #fff; color: var(--whatsapp); animation-play-state: paused; }
//   .cta-box .whatsappBtn i { box-shadow: 0 0 0 50px #fff inset; color: var(--whatsapp); }
//   .cta-box .whatsappBtn:hover i { box-shadow: 0 0 0 50px var(--whatsapp) inset; color: #fff; }

//   /* Menu Button */
//   .menuBtn { padding: 5px; border: 0; border-radius: 0; background-color: #fff; width: 30px; height: 30px; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; transition: all 300ms ease-in-out; position: relative; cursor: pointer; z-index: 99999; right: 0; }
//   .menuBtn span { display: block; position: relative; width: 100%; height: 2px; background-color: var(--body-color); transition: all 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86); }
//   .menuBtn.closeMenuBtn span#menuLine1 { transform: rotate(45deg) translate(4px, 4px); }
//   .menuBtn.closeMenuBtn span#menuLine2 { right: 100px; }
//   .menuBtn.closeMenuBtn span#menuLine3 { transform: rotate(-45deg) translate(4px, -4px); }
//   .menuContainer { position: fixed; top: 80px; max-width: 360px; width: calc(100% - 40px); right: 20px; overflow: auto; background-color: #123939; padding: 2rem; box-shadow: 0 10px 2rem rgb(0 0 0 / 15%); display: none; z-index: 995; }
//   .menuContainer.open { display: block; }
//   .menuContainer ul li a { display: block; font-size: 1.25rem; font-weight: 700; font-family: var(--serif); color: var(--light); letter-spacing: 0.5px; padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
//   .menuContainer ul li a:hover { color: var(--primary-color); }

//   /* Banner */
//   .banner { height: 100vh; position: relative; z-index: 1; }
//   .bannerText { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); color: #fff; z-index: 2; padding: 3rem; width: fit-content; border: 3px solid #fff; backdrop-filter: blur(5px); text-align: center; box-shadow: 0 10px 2rem rgb(0 0 0 / 25%); }
//   .bannerText .bannerTitle { font: 400 1.75rem var(--serif); text-transform: uppercase; letter-spacing: 0.5px; }
//   .bannerText .projectHead { text-transform: uppercase; }

//   /* Overview */
//   .configuration { display: flex; margin-top: 2rem; flex-wrap: wrap; }
//   .configuration-box { border-right: 1px dashed var(--primary-color); padding: 0 1rem; flex: auto; }
//   .configuration-box:nth-last-child(1) { border-right: none; }

//   /* Floor Plans */
//   .fpContainer .fpBox .inner { padding: 1rem; box-shadow: 10px 10px 0 rgb(0 0 0 / 15%); border: 1px solid rgb(0 0 0 / 15%); transition: all 300ms ease-in-out; }
//   .fpContainer .fpBox .inner:hover { transform: translateY(-5px); box-shadow: 0 1rem 3rem rgb(0 0 0 / 24%); }
//   .planBase { margin: 1rem 0 1.5rem; color: #000; }
//   .planBase .priceBOxInner { display: flex; justify-content: space-between; }
//   .fpDetails:not(:last-child) { margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed rgb(0 0 0 / 15%); color: #000; }
//   .planBase .fpDetails h6 { margin-bottom: 0; font-weight: 600; }
//   .fpWrapper .readmore .downIcon { width: 30px; height: 30px; padding: 5px; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; border-radius: 50%; box-shadow: 0 0 0 1px rgba(255,255,255,0.5) inset; transition: all 300ms ease-in-out; }

//   /* Amenities */
//   .amenitiesitem .inner { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem; text-transform: uppercase; color: #fff; background-color: #02994a; font-family: var(--serif); letter-spacing: 0.5px; backdrop-filter: blur(5px); border-radius: 20px; min-height: 110px; }
//   .amenitiesitem .inner:hover { background-color: #006161; }
//   .amenitiesitem .inner .icon { width: 100%; }

//   /* Gallery */
//   .galBox .inner { position: relative; }
//   .galBox .inner img { object-fit: cover; }
//   .galBox .caption { position: absolute; left: 10px; bottom: 10px; background-color: var(--body-color); border-left: 4px solid var(--primary-color); font-size: 14px; color: #fff; padding: 8px 20px 8px 10px; clip-path: polygon(0 0, 96% 0, 100% 100%, 0% 100%); }

//   /* Location */
//   .locationWrapper { color: var(--body-color); position: relative; z-index: 1; }
//   .locationWrapper::before { content: ""; position: absolute; inset: 0; background: url(../images/dotted-map-bg.png) center / cover no-repeat; filter: brightness(55); opacity: 0.15; z-index: -1; }
//   .loc-container .loc-text ul li { font-weight: 700; display: flex; justify-content: space-between; align-items: center; padding: 5px 0; border-bottom: 1px dashed rgba(255,255,255,0.2); }
//   .locBox .inner { padding: 1.5rem; background-color: #fff; box-shadow: 0 5px 1.25rem rgb(0 0 0 / 15%); height: 100%; font-size: 0.875rem; }
//   .location-img a { height: 100%; padding: 1rem; background-color: #fff; box-shadow: 0 5px 1.25rem rgb(0 0 0 / 15%); }

//   /* Form */
//   .fixed-form .innerform { background-color: #fff; box-shadow: 0 8px 32px 0 rgba(50,50,50,0.2); position: sticky; top: 20px; isolation: isolate; }
//   .form-strip { padding: 1rem; font-family: var(--serif); text-align: center; text-transform: uppercase; border-top: 4px solid var(--primary-color); border-bottom: 1px dashed rgba(0,0,0,0.2); }
//   .fixed-form .innerform form { padding: 2rem; }
//   .fixed-form .form-group { margin-bottom: 10px; }
//   .fixed-form .form-control { padding: 8px 10px; }
//   .form-control { font-size: 14px; font-weight: 600; padding: 1rem; height: auto; background-color: #f6f6f6; border: none; border-bottom: 2px solid var(--primary-color); color: #181818; border-radius: 0; transition: all 300ms ease; }
//   .formContainer { background-color: #fff; color: var(--body-color); position: relative; z-index: 1; }
//   .enquiry-form .inner { padding: 4rem; }

//   /* Form status messages */
//   .form-status { font-size: 13px; font-weight: 600; padding: 8px 12px; border-radius: 4px; margin-bottom: 10px; }
//   .form-status.sending { background: #fff3cd; color: #856404; border: 1px solid #ffc107; }
//   .form-status.success { background: #d1e7dd; color: #0a3622; border: 1px solid #02994a; }
//   .form-status.error { background: #f8d7da; color: #842029; border: 1px solid #dc3545; }

//   /* Utility */
//   .padding { padding-top: 4rem; padding-bottom: 4rem; }
//   .headingContainer { margin-bottom: 30px; display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: space-between; }
//   .heading { display: table; position: relative; margin-bottom: 30px; z-index: 1; }
//   .heading .h1, .heading h2, .heading h3, .heading h4, .heading h5, .heading h6 { display: block; font-family: var(--serif); }
//   .heading .h3 { line-height: 1.25; text-transform: uppercase; }
//   .text-serif { font-family: var(--serif); letter-spacing: 0.5px; }
//   .text-primary { color: var(--primary-color) !important; }
//   .bg-primary { background-color: var(--primary-color) !important; }
//   .bg-light { background-color: var(--light) !important; }
//   .bg-dark { background-color: #161f26 !important; color: #fff; }
//   .bg-sec { background: url(./images/17884.jpg) center / cover; }
//   .bg-image { background: center / cover no-repeat fixed; }
//   .bg-image::before { content: ""; position: absolute; inset: 0; background-color: rgb(0 0 0 / 50%); z-index: -1; }
//   .bg-image.overlay-white::before { background: linear-gradient(to left, rgb(255 255 255 / 40%), rgb(255 255 255 / 95%)); }
//   .gap-row { row-gap: 30px; }
//   .readmore { width: 100%; margin-top: 2.5rem; }
//   .readmore.d-flex { gap: 5px; }
//   .readmore .button { display: flex; align-items: center; justify-content: center; gap: 5px; padding: 1rem; min-width: 140px; width: max-content; color: #fff; background-color: var(--primary-color); font-size: 12px; font-weight: 500; text-align: center; text-transform: uppercase; transition: all ease-in-out 0.3s; position: relative; z-index: 1; }
//   .readmore button { border-radius: 0; border: none; font-size: 14px; background: none; }
//   .readmore .button:hover { color: #fff; background-color: var(--body-color); box-shadow: 0 0 0 1px rgb(255 255 255 / 15%); }
//   .readmore .button i { width: 14px; }
//   .readmore .button.bg-white { color: var(--body-color); background-color: #fff; }
//   .readmore .button.bg-white:hover { color: #fff; background-color: var(--primary-color) !important; }

//   /* Swiper buttons */
//   div[class^="swiper-button"] { color: #fff; background-color: var(--body-color); width: 40px; height: 40px; border-radius: 50%; transition: all 300ms ease-in-out; }
//   div[class^="swiper-button"]:hover { background-color: var(--primary-color); }
//   div[class^="swiper-button"]:after { font-size: 1rem; }
//   .bottomControls { display: flex; align-items: center; justify-content: center; gap: 10px; }
//   .bottomControls div[class^="swiper-"] { position: static; margin: 0 !important; }
//   .bottomControls .swiper-pagination { width: 40px; }

//   /* Footer */
//   .footer { font-size: 0.75rem; padding: 2rem 0; }
//   .footer a { color: #fff; }
//   .footer-enquiryBtn { position: fixed; bottom: 0; left: 0; right: 0; display: flex; justify-content: space-between; z-index: 99; background: #123939; text-align: center; }
//   .footer-enquiryBtn a { color: #fff; text-align: center; text-transform: uppercase; display: block; width: calc(100% / 2); padding: 12px 5px; border: 1px solid rgb(0 0 0 / 15%); border-left: 0; }
//   a.whatsCall { color: #fff !important; background: #123939; border: 0; min-width: 30px !important; }
//   a.whatsCall:hover { background: linear-gradient(135deg, #0db634, #015c16) !important; }
//   .button-top { background: var(--primary-color); position: fixed; cursor: pointer; left: 10px; bottom: 10px; color: #ffffff; font-size: 13px; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 500ms ease; z-index: 99; opacity: 0; }
//   .button-top.visible { opacity: 1; }

//   /* Modal */
//   .modal-backdrop.show { opacity: 1; background: rgb(0 10 12 / 95%); backdrop-filter: blur(5px); }
//   .modal-content { border: none; border-radius: 0; box-shadow: 0 8px 32px 0 rgba(0 0 0 / 20%); }
//   .modal-content .modal-header { padding: 0; border: none; }
//   .modal-content button.close { position: absolute; top: -10px; right: -10px; padding: 0; margin: 0; width: 40px; height: 40px; z-index: 1; text-shadow: none; color: maroon; border: 0; background-color: #fff; opacity: 1; font-size: 35px; }
//   .modal-body { padding: 25px; }
//   .modal-details { height: 100%; padding: 2rem; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; font-family: var(--serif); gap: 10px; background-color: #02994a; color: #fff; }
//   .modal-details .banner-price { color: #ffffff; padding: 10px 0; border: dashed rgb(255 255 255 / 35%); border-width: 1px 0; width: 100%; }

//   /* Tagline */
//   .tagline { max-width: 800px; color: #fff; text-align: center; line-height: 1.7; }

//   /* Responsive */
//   @media (max-width: 991px) {
//     body { text-align: center; }
//     .menuContainer { position: fixed; top: 55px; }
//     .banner { height: 80vh; }
//     .bannerText { width: calc(100% - 4rem); }
//     .overviewContent { margin-top: 4rem; }
//     .enquiry-form .inner { padding: 2rem; }
//     .heading, .readmore .button { margin-left: auto; margin-right: auto; text-align: center; }
//     .headingContainer .heading { margin-left: 0; text-align: left; }
//   }
//   @media (max-width: 767px) {
//     html { font-size: 87.5%; }
//     .padding { padding-top: 3rem; padding-bottom: 3rem; }
//     .container-lg, .container-fluid { padding-left: 20px; padding-right: 20px; }
//     .banner { height: auto; aspect-ratio: 1/1; margin-top: 4rem; }
//     .bannerText { padding: 2rem; }
//     .bannerText .bannerTitle { font-size: 1.5rem; }
//     .heading { margin-bottom: 20px; }
//     .heading .h1 { font-size: 2rem; }
//   }
//   @media (max-width: 575px) {
//     html { font-size: 81.25%; }
//     .logo { width: 100px; }
//     .bannerText { width: calc(100% - 2rem); text-align: center; }
//     .heading .h1 { font-size: 1.75rem; }
//     .iconBox { width: 50%; }
//     .footer { padding-bottom: 5rem; padding-top: 1.5rem; }
//     .fixed-form .innerform form { padding: 0rem; }
//   }
//   @media (max-width: 480px) {
//     .configuration { row-gap: 20px; background: #02994a; color: #fff; padding: 10px; }
//     .configuration-box h6 { color: #fff !important; }
//     .configuration-box { border-right: 1px dashed #ffffff; width: 50%; }
//     .configuration-box:nth-child(2n) { border-right: 0; }
//   }
// `;

// /* ─── EmailJS Config ─────────────────────────────────────────────────────────
//    Replace these values if your EmailJS credentials change.
//    PUBLIC_KEY  → found in EmailJS dashboard → Account → API Keys
//    SERVICE_ID  → EmailJS dashboard → Email Services
//    TEMPLATE_ID → EmailJS dashboard → Email Templates
// ────────────────────────────────────────────────────────────────────────────── */
// const EMAILJS_PUBLIC_KEY  = "xLfYDZXLlR6IeQ-C6";
// const EMAILJS_SERVICE_ID  = "service_fkmfynb";
// const EMAILJS_TEMPLATE_ID = "template_bdjcyq6";

// /* ─── Load EmailJS SDK once and return a stable Promise ─────────────────── */
// let emailjsReady = null;

// function loadEmailJS() {
//   if (emailjsReady) return emailjsReady;

//   emailjsReady = new Promise((resolve, reject) => {
//     // Already loaded by a previous render
//     if (window.emailjs) {
//       window.emailjs.init(EMAILJS_PUBLIC_KEY);
//       resolve(window.emailjs);
//       return;
//     }

//     const script = document.createElement("script");
//     script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
//     script.onload = () => {
//       if (window.emailjs) {
//         window.emailjs.init(EMAILJS_PUBLIC_KEY);
//         resolve(window.emailjs);
//       } else {
//         reject(new Error("EmailJS failed to initialise"));
//       }
//     };
//     script.onerror = () => reject(new Error("EmailJS script failed to load"));
//     document.body.appendChild(script);
//   });

//   return emailjsReady;
// }

// /* ─── Core send function ─────────────────────────────────────────────────── */
// async function sendEnquiry(templateParams) {
//   const ejs = await loadEmailJS();
//   return ejs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
// }

// /* ─── Reusable EnquiryForm ───────────────────────────────────────────────── */
// /*
//   Props
//   ─────
//   formId       – unique HTML id for the <form> element
//   requireEmail – show an optional / required email field (default false)
//   source       – label string sent as part of the email so you know which
//                  form triggered the submission (e.g. "Sidebar", "Modal")
// */
// function EnquiryForm({ formId, requireEmail = false, source = "Website" }) {
//   const INITIAL = { name: "", mobile: "", email: "" };
//   const [values,  setValues]  = useState(INITIAL);
//   const [status,  setStatus]  = useState({ text: "", type: "" }); // type: sending | success | error
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) =>
//     setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic mobile validation
//     if (!/^\d{10}$/.test(values.mobile.trim())) {
//       setStatus({ text: "Please enter a valid 10-digit mobile number.", type: "error" });
//       return;
//     }

//     setLoading(true);
//     setStatus({ text: "Sending your enquiry…", type: "sending" });

//     const templateParams = {
//       from_name:   values.name.trim(),
//       mobile:      values.mobile.trim(),
//       email:       values.email.trim() || "Not provided",
//       source_form: source,                  // tells you which form was used
//       project:     "Eldeco Echoes of Eden",
//       location:    "Sector 22D, Yamuna Expressway",
//       reply_to:    values.email.trim() || "noreply@eldeco.com",
//     };

//     try {
//       await sendEnquiry(templateParams);
//       setStatus({ text: "✅ Enquiry sent successfully! We'll be in touch soon.", type: "success" });
//       setValues(INITIAL);

//       // Open WhatsApp after a short delay so the user sees the success message
//       setTimeout(() => {
//         window.open(
//           `https://wa.me/919899911553?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20for%20Eldeco%20Echoes%20of%20Eden%20from%20the%20${encodeURIComponent(source)}%20form.`,
//           "_blank"
//         );
//       }, 800);
//     } catch (err) {
//       console.error("EmailJS error:", err);
//       setStatus({
//         text: "❌ Failed to send enquiry. Please try again or call us directly.",
//         type: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
    
//   };
//   const handleReportConversion = (e) => {
//     // Prevent default behavior if it's a link or form submission
//     // e.preventDefault(); 

//     if (window.gtag) {
//       window.gtag('event', 'conversion', {
//         'send_to': 'AW-18122446172/VeIkCMGpqqMcENyqusFD',
//         'value': 50.0,
//         'currency': 'INR',
//         'event_callback': () => {
//           console.log('Conversion tracked successfully!');
//           // If you need to redirect the user after tracking:
//           // window.location.href = 'https://your-success-page.com';
//         }
//       });
//     } else {
//       console.warn("gtag is not defined. Check if your Google Tag script is loaded.");
//     }
//   };

//   return (
//     <form id={formId} className="form-container" onSubmit={handleSubmit} onClick={handleReportConversion} noValidate>
//       {/* Status message */}
//       {status.text && (
//         <p className={`form-status ${status.type}`}>{status.text}</p>
//       )}

//       <div className="row">
//         {/* Name */}
//         <div className="col-12 form-group">
//           <div className="form-floating">
//             <input
//               type="text"
//               id={`${formId}_name`}
//               className="form-control"
//               name="name"
//               placeholder=" "
//               required
//               disabled={loading}
//               value={values.name}
//               onChange={handleChange}
//             />
//             <label htmlFor={`${formId}_name`}>Name *</label>
//           </div>
//         </div>

//         {/* Mobile */}
//         <div className="col-12 form-group">
//           <div className="form-floating">
//             <input
//               type="tel"
//               id={`${formId}_mobile`}
//               className="form-control"
//               name="mobile"
//               placeholder=" "
//               required
//               maxLength={10}
//               pattern="\d{10}"
//               disabled={loading}
//               value={values.mobile}
//               onChange={handleChange}
//             />
//             <label htmlFor={`${formId}_mobile`}>Mobile * (10 digits)</label>
//           </div>
//         </div>

//         {/* Email – shown when requireEmail is true */}
//         {requireEmail && (
//           <div className="col-12 form-group">
//             <div className="form-floating">
//               <input
//                 type="email"
//                 id={`${formId}_email`}
//                 className="form-control"
//                 name="email"
//                 placeholder=" "
//                 required
//                 disabled={loading}
//                 value={values.email}
//                 onChange={handleChange}
//               />
//               <label htmlFor={`${formId}_email`}>Email *</label>
//             </div>
//           </div>
//         )}

//         {/* Submit */}
//         <div className="col-12">
//           <div className="readmore mt-3">
//             <button
//               type="submit"
//               className="button w-100"
//               disabled={loading}
//               style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
//             >
//               {loading ? "Sending…" : "Submit Enquiry"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }

// /* ─── Main Home Component ─────────────────────────────────────────────────────── */
// function EldecoEchoesOfEden() {
//   const [menuOpen,       setMenuOpen]       = useState(false);
//   const [showModal,      setShowModal]      = useState(false);
//   const [showScrollTop,  setShowScrollTop]  = useState(false);
//   const swiperInitialized = useRef(false);

//   /* Load external scripts */
//   useEffect(() => {
//     const loadScript = (src, onLoad) => {
//       const existing = document.querySelector(`script[src="${src}"]`);
//       if (existing) { if (onLoad) onLoad(); return; }
//       const s = document.createElement("script");
//       s.src = src;
//       s.onload = onLoad;
//       document.body.appendChild(s);
//     };

//     // Bootstrap
//     loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js");
//     loadScript("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js");

//     // Swiper → init
//     loadScript(
//       "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.1/swiper-bundle.min.js",
//       () => {
//         if (!swiperInitialized.current && window.Swiper) {
//           swiperInitialized.current = true;
//           new window.Swiper(".gallerySlider", {
//             slidesPerView: 1,
//             spaceBetween: 10,
//             speed: 800,
//             loop: true,
//             autoplay: { delay: 2500, disableOnInteraction: false },
//             navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
//             breakpoints: {
//               540:  { slidesPerView: 2, spaceBetween: 20 },
//               1200: { slidesPerView: 2, spaceBetween: 30 },
//             },
//           });
//         }
//       }
//     );

//     // AOS
//     loadScript("https://unpkg.com/aos@2.3.0/dist/aos.js", () => {
//       if (window.AOS) window.AOS.init({ duration: 1200 });
//     });

//     // Pre-load EmailJS so it's ready before the first form submit
//     loadEmailJS().catch((err) => console.warn("EmailJS pre-load failed:", err));
//   }, []);

//   /* Auto-open modal after 5 s */
//   useEffect(() => {
//     const timer = setTimeout(() => setShowModal(true), 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   /* Scroll-to-top visibility */
//   useEffect(() => {
//     const onScroll = () => setShowScrollTop(window.scrollY > 100);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const closeMenu = () => setMenuOpen(false);
//   const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   const amenities = [
//     { img: Ame1,  label: "Jogging Track"   },
//     { img: Ame2, label: "Yoga"            },
//     { img: Ame3,  label: "The Sports Block" },
//     { img: Ame4, label: "Play Ground"     },
//     { img: Ame5,  label: "Barbecue Area"   },
//     { img: Ame6, label: "Kids Play Area"  },
//     { img: Ame7,  label: "Swimming Pool"   },
//     { img: Ame9,  label: "Gymnasium"       },
//   ];

//   const galleryImages = [
//     G1,
//     G2,
//     G3,
//     G4,
//   ];

//   return (
//     <>
//       <style>{styles}</style>

//       <main>
//         {/* ── Header ── */}
//         <div className="header fixed">
//           <div className="container-fluid">
//             <div className="logo">
//               <Link to="/">
//                 <img src={Logo1} alt="Eldeco" />
//               </Link>
//             </div>

//             <div className="menu-section">
//               <nav className="navi d-none d-lg-flex align-items-center">
//                 <ul className="list-inline menu d-flex justify-content-center align-items-center">
//                   {["overview", "floorplan", "pricelist" , "amenities", "gallery", "location"].map((s) => (
//                     <li key={s}>
//                       <a href={`#${s}`}>
//                         {s === "floorplan" ? "Floor Plans" : s.charAt(0).toUpperCase() + s.slice(1)}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>

//               <button
//                 className={`menuBtn d-flex d-lg-none ${menuOpen ? "closeMenuBtn" : ""}`}
//                 onClick={() => setMenuOpen((o) => !o)}
//               >
//                 <span id="menuLine1" />
//                 <span id="menuLine2" />
//                 <span id="menuLine3" />
//               </button>
//             </div>

//             <div className="topHead cta-box d-none d-lg-block">
//               <ul className="list-inline justify-content-end align-items-center">
//                 <li>
//                   <a
//                     href="tel:9899911553"
//                     style={{
//                       backgroundColor: "var(--whatsapp)", color: "#fff",
//                       padding: "6px", marginLeft: "1.5rem", borderRadius: "40px",
//                       flexDirection: "row", width: "100px",
//                     }}
//                   >
//                     <i className="fa fa-phone" /> Call
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://api.whatsapp.com/send?phone=+919899911553&text=Hi! I am interested in Eldeco Echoes of Eden, please share the details."
//                     target="_blank" rel="noreferrer" className="whatsappBtn"
//                   >
//                     Get details on <i className="fab fa-whatsapp" />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className={`menuContainer ${menuOpen ? "open" : ""}`}>
//           <ul className="list-inline">
//             {[
//               { href: "#overview",  label: "Overview"    },
//               { href: "#floorplan", label: "Floor Plans" },
//               { href: "#amenities", label: "Amenities"   },
//               { href: "#pricelist", label: "Price List"   },
//               { href: "#gallery",   label: "Gallery"     },
//               { href: "#location",  label: "Location"    },
//             ].map(({ href, label }) => (
//               <li key={href}><a href={href} onClick={closeMenu}>{label}</a></li>
//             ))}
//           </ul>
//         </div>

//         {/* ── Banner ── */}
//         <div id="banner" className="banner">
//           <div className="h-100">
//             <picture>
//               <source media="(max-width:560px)" srcSet={BannerMobile} />
//               <img src={BannerDesktop} className="h-100 object-cover" alt="Banner" />
//             </picture>
//           </div>
//         </div>

//         {/* ── Overview ── */}
//         <div className="w-100 padding bg-sec overviewWrapper" id="overview">
//           <div className="container-lg">
//             <div className="row g-4 flex-row-reverse">

//               {/* ① Sidebar Form — source: "Sidebar" */}
//               <div className="col-lg-4 fixed-form">
//                 <div className="innerform">
//                   <div className="form-strip">Express your Interest</div>
//                   <EnquiryForm
//                     formId="enquiryForm"
//                     source="Sidebar"
//                   />
//                 </div>
//               </div>

//               <div className="col-lg-8 overviewContent">
//                 <div className="inner pr-lg-4" data-aos="fade-right">
//                   <div className="heading has-border">
//                     <h2 className="h1 text-primary">Eldeco Echoes of Eden</h2>
//                     <h4 className="h4 mb-0">At Sector 22D Yamuna Expressway</h4>
//                   </div>
//                   <p>
//                     Eldeco Echoes of Eden unveils 3BHK and 4BHK residences at Yamuna Expressway,
//                     Greater Noida. At Sector 22D, thoughtfully designed amidst lush green
//                     surroundings, this premium residential development offers an elevated lifestyle
//                     for families who seek comfort, elegance, and future-ready living.
//                   </p>
//                   <p>
//                     Strategically located in Sector 22D, Yamuna Expressway, the project blends
//                     urban connectivity with peaceful surroundings, making it an ideal destination
//                     for both end-users and investors.
//                   </p>
//                   <div className="configuration">
//                     <div className="configuration-box">
//                       <h6 className="text-primary text-serif">Type</h6>
//                       <p className="mb-0">3/4 BHK Luxury Residences</p>
//                     </div>
//                     <div className="configuration-box">
//                       <h6 className="text-primary text-serif">LOCATION</h6>
//                       <p className="mb-0">Sector 22D Yamuna Expressway</p>
//                     </div>
//                   </div>
//                   <div className="readmore d-flex">
//                     <button className="button" onClick={() => setShowModal(true)}>
//                       Download Brochure
//                     </button>
//                     <button className="button d-none d-md-block" onClick={() => setShowModal(true)}>
//                       Schedule A Site Visit
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Amenities ── */}
//         <div
//           className="w-100 padding position-relative overflow-hidden amenitiesWrapper bg-image"
//           id="amenities"
//           style={{ backgroundImage: `url(${AmenityBg})`, height: "auto" }}
//         >
//           <div className="container-lg">
//             <div className="headingContainer" data-aos="fade-up">
//               <div className="heading mb-0 text-white mx-auto text-center">
//                 <h2 className="h1 mb-0">Amenities</h2>
//                 <h4 className="h4 mb-0">A bouquet of amenities for every lifestyle</h4>
//               </div>
//             </div>
//             <div className="amenitiesContainer" data-aos="fade-up">
//               <div className="row g-2 justify-content-center">
//                 {amenities.map(({ img, label }) => (
//                   <div key={label} className="col-md-3 col-6 amenitiesitem">
//                     <div className="inner">
//                       <div className="icon"><img src={img} alt={label} /></div>
//                       <span>{label}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Floor Plans ── */}
//         <div className="w-100 padding fpWrapper" id="floorplan">
//           <div className="container-lg">
//             <div className="headingContainer" data-aos="fade-up">
//               <div className="heading mb-0">
//                 <h2 className="h1 text-primary mb-0">Floor Plans</h2>
//                 <h4 className="h4 mb-0">Eldeco Echoes of Eden</h4>
//               </div>
//               <div className="viewmore w-auto d-none d-md-block">
//                 <button className="button" onClick={() => setShowModal(true)}>
//                   Download Master Plan <i className="fa fa-long-arrow-right" />
//                 </button>
//               </div>
//             </div>

//             <div className="fpContainer" data-aos="fade-up">
//               <div className="row g-4 justify-content-center">
//                 {[
//                   { type: "3 BHK", img: "https://image2url.com/r2/default/images/1775586904581-ab466bb8-ff75-4271-b4e6-014cda43391b.webp", alt: "3bhk" },
//                   { type: "4 BHK", img: "https://image2url.com/r2/default/images/1775587018708-732efb18-f374-41d6-a387-5fd471436f4a.webp", alt: "4bhk" },
//                 ].map(({ type, img, alt }) => (
//                   <div key={type} className="col-lg-4 col-md-6 fpBox">
//                     <div className="inner">
//                       <button
//                         style={{ all: "unset", cursor: "pointer", display: "block" }}
//                         onClick={() => setShowModal(true)}
//                       >
//                         <div className="img-fluid">
//                           <img style={{ filter: "blur(4px)" }} src={img} alt={alt} />
//                         </div>
//                       </button>
//                       <div className="planBase">
//                         <div className="fpDetails">
//                           <small>Type</small>
//                           <h6 className="mb-0 text-primary">{type}</h6>
//                         </div>
//                       </div>
//                       <div className="readmore mt-0">
//                         <button className="button" onClick={() => setShowModal(true)}>
//                           <div className="downIcon">
//                             <img src="./eldeco-echoes/images/download.gif" alt="" />
//                           </div>
//                           Download Floor Plan
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Tagline ── */}
//         <div
//           className="w-100 padding position-relative overflow-hidden bg-image"
//           style={{ backgroundImage: `url(${TaglineBg})`, height: "60vh" }}
//         >
//           <div className="container-lg h-100 d-flex align-items-center justify-content-center">
//             <div className="tagline" data-aos="fade-up">
//               <span className="text-serif fs-3">
//                 Welcome to Eldeco Echoes of Eden — a thoughtfully curated residential destination
//                 where nature, luxury, and modern living come together in perfect harmony.
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* ── Price List ── */}
//         <div className="w-100 padding position-relative overflow-hidden" id="pricelist">
//           <div className="container">
//             <div className="heading">
//               <h2 className="h1 text-primary text-uppercase mb-0">Price List</h2>
//               <h4 className="h4 text-uppercase mb-0">Eldeco Echoes of Eden</h4>
//             </div>
//             <div className="table-responsive">
//               <table className="table text-center table-pricing table-bordered">
//                 <thead>
//                   <tr>
//                     <th className="bg-primary text-white" width="30%">Type</th>
//                     <th className="bg-primary text-white" width="30%">Size (Sq.Ft)</th>
//                     <th className="bg-primary text-white">Price Breakup</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {["3 BHK", "4 BHK"].map((t) => (
//                     <tr key={t}>
//                       <td>{t}</td>
//                       <td>On Request</td>
//                       <td className="readmore mt-0">
//                         <button className="button mx-auto" onClick={() => setShowModal(true)}>
//                           Download Price List
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* ── Gallery ── */}
//         <div
//           className="w-100 padding position-relative overflow-hidden amenitiesWrapper bg-light"
//           id="gallery"
//         >
//           <div className="container-lg">
//             <div className="swiper gallerySlider" data-aos="fade-up">
//               <div className="headingContainer">
//                 <div className="heading mb-0">
//                   <h2 className="h1 text-primary mb-0">A Glimpse of</h2>
//                   <h4 className="h4 mb-0">Ultra luxury lifestyle</h4>
//                 </div>
//                 <div className="bottomControls">
//                   <div className="swiper-button-prev" />
//                   <div className="swiper-button-next" />
//                 </div>
//               </div>
//               <div className="swiper-wrapper">
//                 {galleryImages.map((src, i) => (
//                   <div key={i} className="swiper-slide galBox">
//                     <div className="inner"><img src={src} alt="Gallery" /></div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Location ── */}
//         <div className="w-100" id="location">
//           <div className="w-100 padding overflow-hidden bg-sec hm-entertainmentContainer">
//             <div className="container-lg">
//               <div className="row g-4 justify-content-center">
//                 <div className="col-lg-10 bedroomBox" data-aos="fade-up">
//                   <div className="inner text-center">
//                     <div className="heading mx-auto">
//                       <h2 className="h1 text-primary">Location Advantages</h2>
//                       <h4 className="mb-0">
//                         <i className="fa fa-map-marker-alt text-primary" /> Sector 22D Yamuna Expressway
//                       </h4>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-lg-5 location-img" data-aos="fade-right">
//                   <button
//                     style={{ all: "unset", cursor: "pointer", display: "block", height: "100%" }}
//                     onClick={() => setShowModal(true)}
//                   >
//                     <img
//                       style={{ filter: "blur(7px)" }}
//                       src={Loc}
//                       className="h-100 object-fit-cover locationmap"
//                       alt="Location Map"
//                     />
//                   </button>
//                 </div>

//                 <div className="col-lg-7 bedroomBox" data-aos="fade-left">
//                   <div className="row g-3">
//                     {[
//                       {
//                         title: "Connectivity",
//                         items: [
//                           "Yamuna Expressway – 2 mins",
//                           "Noida International Airport (Jewar) – 15 mins",
//                           "Eastern Peripheral Expressway – 20 mins",
//                         ],
//                       },
//                       {
//                         title: "Shopping Malls",
//                         items: [
//                           "Omaxe Connaught Place – 20 mins",
//                           "The Grand Venice Mall – 25 mins",
//                         ],
//                       },
//                       {
//                         title: "Education Centres",
//                         items: [
//                           "Galgotias University – 10 mins",
//                           "Sharda University – 20 mins",
//                           "Noida International University – 25 mins",
//                         ],
//                       },
//                       {
//                         title: "5/7 Star Hotels",
//                         items: [
//                           "Radisson Blu Greater Noida – 25 mins",
//                           "Jaypee Greens Golf Resort – 30 mins",
//                           "Crowne Plaza Greater Noida – 30 mins",
//                         ],
//                       },
//                     ].map(({ title, items }) => (
//                       <div key={title} className="col-sm-6 locBox">
//                         <div className="inner">
//                           <h5 className="text-serif text-primary"><b>{title}</b></h5>
//                           <ul className="list-unstyled list">
//                             {items.map((item) => <li key={item}>{item}</li>)}
//                           </ul>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Enquiry Section ── */}
//         <div className="w-100 padding enquiryWrapper">
//           <div className="container-lg">
//             <div className="formContainer shadow-lg" data-aos="fade-up">
//               <div className="row g-0">

//                 {/* ② Bottom enquiry form — source: "Enquiry Section" */}
//                 <div className="col-lg-7 enquiry-form">
//                   <div className="inner">
//                     <div className="heading">
//                       <h2 className="h1 text-primary">Enquire Now</h2>
//                       <h4 className="mb-0">
//                         To know more about the project, please fill the form
//                       </h4>
//                     </div>
//                     <EnquiryForm
//                       formId="enquiryForm2"
//                       requireEmail
//                       source="Enquiry Section"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-lg-5 form-img">
//                   <img src={FormSide} className="h-100 object-cover" alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Footer ── */}
//         <div className="w-100 footer bg-primary">
//           <div className="container-lg">
//             <div className="row g-4 text-center align-items-center">
//               <div className="col-md-6">
//                 <p style={{ color: "#fff" }}>
//                   Project RERA No.: UPRERAPRJ125342/02/2026
//                   <br />
//                   <br />
//                   <p>Disclaimer - Authorized marketing partner with Eldeco Builders. The content provided on this website is for information purposes only and does not constitute an offer to avail any service. The prices mentioned are subject to change without prior notice, and the availability of properties mentioned is not guaranteed.

// The images displayed on the website are for representation purposes only and may not reflect the actual properties accurately. Please note that this is the official website of an authorized marketing partner. We may share data with Real Estate Regulatory Authority (RERA) registered brokers/companies for further processing as required. We may also send updates and information to the mobile number or email ID registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is advisable to contact us directly through the provided contact information on this website. Thank you for visiting our website.</p>
//                   <a href="https://up-rera.in/projects/" target="_blank" rel="noreferrer">
//                     https://up-rera.in/projects/
//                   </a>
//                   <br />
//                   <Link to="/privacy-policy" style={{ color: "#fff", textDecoration: "underline" }}>
//                     <b>Privacy Policy</b>
//                   </Link>
//                 </p>
//               </div>
//               <div className="col-md-6">
//                 <p style={{ color: "#fff" }}>
//                   <img src={QR} style={{ width: "100px" }} alt="QR Code" />
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div
//             className={`button-top ${showScrollTop ? "visible" : ""}`}
//             onClick={scrollTop}
//           >
//             <i className="fa fa-chevron-up" />
//           </div>
//         </div>

//         {/* ── Mobile CTA Bar ── */}
//         <div className="footer-enquiryBtn d-flex d-sm-none">
//           <a
//             className="whatsCall"
//             href="https://api.whatsapp.com/send?phone=+919355019172&text=Hi I am Interested in Eldeco Echoes of Eden, Please Share The Details."
//             target="_blank" rel="noreferrer"
//           >
//             <strong><i className="fab fa-whatsapp" /> WhatsApp</strong>
//           </a>
//           <a href="tel:9899911553">
//             <strong><i className="fa fa-phone" /> Call</strong>
//           </a>
//           <button style={{ all: "unset", cursor: "pointer" }} onClick={() => setShowModal(true)}>
//             <strong><i className="fa fa-envelope" /> Enquiry</strong>
//           </button>
//         </div>

//         {/* ── Modal ── */}
//         {showModal && (
//           <div
//             className="modal fade show"
//             style={{ display: "block", background: "rgba(0,10,12,0.95)", backdropFilter: "blur(5px)" }}
//             tabIndex="-1"
//             role="dialog"
//           >
//             <div className="modal-dialog modal-dialog-centered" role="document">
//               <div className="modal-content" style={{ position: "relative" }}>
//                 <div className="modal-header">
//                   <button
//                     type="button"
//                     className="close d-flex align-items-center justify-content-center"
//                     onClick={() => setShowModal(false)}
//                     style={{
//                       position: "absolute", top: -10, right: -10,
//                       width: 40, height: 40, zIndex: 1,
//                       color: "maroon", border: 0, backgroundColor: "#fff",
//                       fontSize: 35, cursor: "pointer",
//                     }}
//                   >
//                     ×
//                   </button>
//                 </div>
//                 <div className="row g-0">
//                   <div className="col-md-12">
//                     <div className="modal-details">
//                       <h5 className="mb-0">Eldeco Echoes of Eden</h5>
//                       <h5 className="banner-price mb-1">
//                         <i className="fa-solid fa-location-dot" /> Sector 22D Yamuna Expressway
//                       </h5>
//                     </div>
//                   </div>

//                   {/* ③ Modal form — source: "Modal Popup" */}
//                   <div className="col-md-12">
//                     <div className="modal-body">
//                       <h5 className="mb-3 text-serif text-center">Express Your Interest</h5>
//                       <EnquiryForm
//                         formId="enquiryForm3"
//                         requireEmail
//                         source="Modal Popup"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//     </>
//   );
// }

// /* ─── App Component with Router ─────────────────────────────────────────────── */
// export default function App() {
//   return (
    
//       <Routes>
//         <Route path="/" element={<EldecoEchoesOfEden />} />
//         <Route path="/privacy-policy" element={<Privacy />} />
//       </Routes>
//   );
// }
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Ame1 from "../../eldeco-echoes/images/ame-01.jpg";
import Ame2 from "../../eldeco-echoes/images/ame-02.webp";
import Ame3 from "../../eldeco-echoes/images/ame-03.jpg";
import Ame4 from "../../eldeco-echoes/images/ame-04.webp";
import Ame5 from "../../eldeco-echoes/images/ame-05.jpg";
import Ame6 from "../../eldeco-echoes/images/ame-06.webp";
import Ame7 from "../../eldeco-echoes/images/ame-07.jpg";
import Ame9 from "../../eldeco-echoes/images/ame-09.jpg";
import G1 from "../../eldeco-echoes/images/g1.jpg";
import G2 from "../../eldeco-echoes/images/g2.jpg";
import G3 from "../../eldeco-echoes/images/g3.jpg";
import G4 from "../../eldeco-echoes/images/g4.jpg";
import Ab from "../../eldeco-echoes/images/3-b.webp";
import Bb from "../../eldeco-echoes/images/4-b.webp";
import BannerMobile from "../../eldeco-echoes/images/mobile.jpeg";
import BannerDesktop from "../../eldeco-echoes/images/desktop.jpeg";
import AmenityBg from "../../eldeco-echoes/images/amen.jpeg";
import TaglineBg from "../../eldeco-echoes/images/bgg.jpeg";
import FormSide from "../../eldeco-echoes/images/side.jpg";
import Logo1 from "../../eldeco-echoes/images/eldeco.webp";
import Download from "../../eldeco-echoes/images/download.gif";
import Loc from "../../eldeco-echoes/images/loc.jpg";
import Side from "../../eldeco-echoes/images/side.jpg";
import QR from "../../eldeco-echoes/images/qr.webp";
import Privacy from "./privacypolicy.jsx";

/* ─── Inline styles ─── */
const styles = `
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Marcellus&display=swap");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css");
  @import url("https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.1/swiper-bundle.min.css");
  @import url("https://unpkg.com/aos@2.3.0/dist/aos.css");

  :root {
    --primary-color: #02994a;
    --body-color: #35312f;
    --light: #fff7e8;
    --facebook: #4267b2;
    --twitter: #00acee;
    --linkedin: #0e76a8;
    --youtube: #ff0000;
    --whatsapp: #25d366;
    --instagram: #c92bb7;
    --serif: "Marcellus", serif;
    --golden-gradient: radial-gradient(ellipse farthest-corner at right bottom, #ffe5d4 0%, #ffac75 8%, #c18761 30%, var(--primary-color) 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, var(--primary-color) 8%, #54331f 25%, #63422d 62.5%, #54331f 100%);
    --golden-gradient-hover: radial-gradient(ellipse farthest-corner at left top, #ffffff 0%, #ffffac 8%, #d1b464 25%, #5d4a1f 62.5%, #5d4a1f 100%), radial-gradient(ellipse farthest-corner at right bottom, #fedb37 0%, #fdb931 8%, #9f7928 30%, var(--primary-color) 40%, transparent 80%);
  }
  html { scroll-behavior: smooth; }
  body { color: var(--body-color); font: 400 1rem "Montserrat", sans-serif; overflow-x: hidden; }
  svg:not([fill]) { fill: currentColor; }
  ul { padding-left: 0; margin-bottom: 0; }
  a, a:hover { text-decoration: none; color: inherit; }
  a { color: var(--body-color); transition: all 300ms ease-in-out; }
  a.bg-primary:hover { background-color: var(--primary-color) !important; }
  img { width: 100%; display: block; }
  .object-cover { object-fit: cover; }
  .container-fluid { padding-left: 3rem; padding-right: 3rem; }
  .filter-white { filter: brightness(70); }
  .filter-dark { filter: grayscale(1) brightness(0.5); }

  /* Header */
  .header { width: 100%; position: fixed; top: 0; left: 0; z-index: 997; background-image: linear-gradient(rgb(0 0 0 / 52%), transparent); transition: all 300ms ease-in-out; }
  .header:hover, .header.fixed { background: #fff; box-shadow: 0 10px 20px rgb(0 0 0 / 10%); }
  .header .container-fluid { display: flex; align-items: center; justify-content: space-between; }
  .logo { width: 82px; position: relative; padding: 5px 0; min-height: 1px; transition: all 300ms ease-in-out; }
  .logo img { width: 100%; padding: 5px 0; }
  .header .logo1 { display: none; }
  .header.fixed .logo2 { display: none; }
  .header.fixed .logo1 { display: block; }
  .navi { display: flex; gap: 30px; }
  .navi ul { gap: 0 10px; }
  .navi li a { color: #ffff; display: flex; align-items: center; gap: 6px; white-space: nowrap; padding: 12px; font: 500 1rem var(--serif); text-transform: uppercase; position: relative; transition: all 300ms ease-in-out; letter-spacing: 1px; font-size: 14px; }
  .header:hover .navi li a, .header.fixed .navi li a { color: var(--body-color); }
  .header .navi li a.active, .header .navi li:hover > a { color: var(--primary-color); }
  .navi li a i { font-size: 11px; color: var(--primary-color); }
  .cta-box ul { display: flex; gap: 0.5rem; }
  .cta-box a { display: flex; flex-direction: column; align-items: center; gap: 5px; text-transform: uppercase; font-size: 0.75rem; }
  .cta-box i { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; border-radius: 50%; color: #fff; box-shadow: 0 0 0 1px rgba(255,255,255,0.5) inset; transition: all 300ms ease-in-out; }
  .header:hover .cta-box i, .header.fixed .cta-box i { color: var(--body-color); box-shadow: 0 0 0 1px rgba(0,0,0,0.25) inset; }
  .cta-box i:hover { color: #fff !important; background-color: var(--primary-color); }
  .cta-box .whatsappBtn { background-color: var(--whatsapp); color: #fff; padding: 4px 4px 4px 1rem; margin-left: 1.5rem; border-radius: 40px; flex-direction: row; animation: enq 2s cubic-bezier(0.55, 0.76, 0.27, 1.29) infinite; }
  @keyframes enq { 50% { box-shadow: 0 0 0 1px rgb(14 121 0 / 45%), 0 0 0 0px rgb(11 74 0 / 63%), 1rem 1rem 2rem rgb(0 0 0 / 25%); } }
  .cta-box .whatsappBtn:hover { background-color: #fff; color: var(--whatsapp); animation-play-state: paused; }
  .cta-box .whatsappBtn i { box-shadow: 0 0 0 50px #fff inset; color: var(--whatsapp); }
  .cta-box .whatsappBtn:hover i { box-shadow: 0 0 0 50px var(--whatsapp) inset; color: #fff; }

  /* Menu Button */
  .menuBtn { padding: 5px; border: 0; border-radius: 0; background-color: #fff; width: 30px; height: 30px; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; transition: all 300ms ease-in-out; position: relative; cursor: pointer; z-index: 99999; right: 0; }
  .menuBtn span { display: block; position: relative; width: 100%; height: 2px; background-color: var(--body-color); transition: all 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86); }
  .menuBtn.closeMenuBtn span#menuLine1 { transform: rotate(45deg) translate(4px, 4px); }
  .menuBtn.closeMenuBtn span#menuLine2 { right: 100px; }
  .menuBtn.closeMenuBtn span#menuLine3 { transform: rotate(-45deg) translate(4px, -4px); }
  .menuContainer { position: fixed; top: 80px; max-width: 360px; width: calc(100% - 40px); right: 20px; overflow: auto; background-color: #123939; padding: 2rem; box-shadow: 0 10px 2rem rgb(0 0 0 / 15%); display: none; z-index: 995; }
  .menuContainer.open { display: block; }
  .menuContainer ul li a { display: block; font-size: 1.25rem; font-weight: 700; font-family: var(--serif); color: var(--light); letter-spacing: 0.5px; padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
  .menuContainer ul li a:hover { color: var(--primary-color); }

  /* Banner */
  .banner { height: 100vh; position: relative; z-index: 1; }
  .bannerText { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); color: #fff; z-index: 2; padding: 3rem; width: fit-content; border: 3px solid #fff; backdrop-filter: blur(5px); text-align: center; box-shadow: 0 10px 2rem rgb(0 0 0 / 25%); }
  .bannerText .bannerTitle { font: 400 1.75rem var(--serif); text-transform: uppercase; letter-spacing: 0.5px; }
  .bannerText .projectHead { text-transform: uppercase; }

  /* Overview */
  .configuration { display: flex; margin-top: 2rem; flex-wrap: wrap; }
  .configuration-box { border-right: 1px dashed var(--primary-color); padding: 0 1rem; flex: auto; }
  .configuration-box:nth-last-child(1) { border-right: none; }

  /* Floor Plans */
  .fpContainer .fpBox .inner { padding: 1rem; box-shadow: 10px 10px 0 rgb(0 0 0 / 15%); border: 1px solid rgb(0 0 0 / 15%); transition: all 300ms ease-in-out; }
  .fpContainer .fpBox .inner:hover { transform: translateY(-5px); box-shadow: 0 1rem 3rem rgb(0 0 0 / 24%); }
  .planBase { margin: 1rem 0 1.5rem; color: #000; }
  .planBase .priceBOxInner { display: flex; justify-content: space-between; }
  .fpDetails:not(:last-child) { margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px dashed rgb(0 0 0 / 15%); color: #000; }
  .planBase .fpDetails h6 { margin-bottom: 0; font-weight: 600; }
  .fpWrapper .readmore .downIcon { width: 30px; height: 30px; padding: 5px; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; border-radius: 50%; box-shadow: 0 0 0 1px rgba(255,255,255,0.5) inset; transition: all 300ms ease-in-out; }

  /* Amenities */
  .amenitiesitem .inner { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem; text-transform: uppercase; color: #fff; background-color: #02994a; font-family: var(--serif); letter-spacing: 0.5px; backdrop-filter: blur(5px); border-radius: 20px; min-height: 110px; }
  .amenitiesitem .inner:hover { background-color: #006161; }
  .amenitiesitem .inner .icon { width: 100%; }

  /* Gallery */
  .galBox .inner { position: relative; }
  .galBox .inner img { object-fit: cover; }
  .galBox .caption { position: absolute; left: 10px; bottom: 10px; background-color: var(--body-color); border-left: 4px solid var(--primary-color); font-size: 14px; color: #fff; padding: 8px 20px 8px 10px; clip-path: polygon(0 0, 96% 0, 100% 100%, 0% 100%); }

  /* Location */
  .locationWrapper { color: var(--body-color); position: relative; z-index: 1; }
  .locationWrapper::before { content: ""; position: absolute; inset: 0; background: url(../images/dotted-map-bg.png) center / cover no-repeat; filter: brightness(55); opacity: 0.15; z-index: -1; }
  .loc-container .loc-text ul li { font-weight: 700; display: flex; justify-content: space-between; align-items: center; padding: 5px 0; border-bottom: 1px dashed rgba(255,255,255,0.2); }
  .locBox .inner { padding: 1.5rem; background-color: #fff; box-shadow: 0 5px 1.25rem rgb(0 0 0 / 15%); height: 100%; font-size: 0.875rem; }
  .location-img a { height: 100%; padding: 1rem; background-color: #fff; box-shadow: 0 5px 1.25rem rgb(0 0 0 / 15%); }

  /* Form */
  .fixed-form .innerform { background-color: #fff; box-shadow: 0 8px 32px 0 rgba(50,50,50,0.2); position: sticky; top: 20px; isolation: isolate; }
  .form-strip { padding: 1rem; font-family: var(--serif); text-align: center; text-transform: uppercase; border-top: 4px solid var(--primary-color); border-bottom: 1px dashed rgba(0,0,0,0.2); }
  .fixed-form .innerform form { padding: 2rem; }
  .fixed-form .form-group { margin-bottom: 10px; }
  .fixed-form .form-control { padding: 8px 10px; }
  .form-control { font-size: 14px; font-weight: 600; padding: 1rem; height: auto; background-color: #f6f6f6; border: none; border-bottom: 2px solid var(--primary-color); color: #181818; border-radius: 0; transition: all 300ms ease; }
  .formContainer { background-color: #fff; color: var(--body-color); position: relative; z-index: 1; }
  .enquiry-form .inner { padding: 4rem; }

  /* Form status messages */
  .form-status { font-size: 13px; font-weight: 600; padding: 8px 12px; border-radius: 4px; margin-bottom: 10px; }
  .form-status.sending { background: #fff3cd; color: #856404; border: 1px solid #ffc107; }
  .form-status.success { background: #d1e7dd; color: #0a3622; border: 1px solid #02994a; }
  .form-status.error { background: #f8d7da; color: #842029; border: 1px solid #dc3545; }

  /* Utility */
  .padding { padding-top: 4rem; padding-bottom: 4rem; }
  .headingContainer { margin-bottom: 30px; display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: space-between; }
  .heading { display: table; position: relative; margin-bottom: 30px; z-index: 1; }
  .heading .h1, .heading h2, .heading h3, .heading h4, .heading h5, .heading h6 { display: block; font-family: var(--serif); }
  .heading .h3 { line-height: 1.25; text-transform: uppercase; }
  .text-serif { font-family: var(--serif); letter-spacing: 0.5px; }
  .text-primary { color: var(--primary-color) !important; }
  .bg-primary { background-color: var(--primary-color) !important; }
  .bg-light { background-color: var(--light) !important; }
  .bg-dark { background-color: #161f26 !important; color: #fff; }
  .bg-sec { background: url(./images/17884.jpg) center / cover; }
  .bg-image { background: center / cover no-repeat fixed; }
  .bg-image::before { content: ""; position: absolute; inset: 0; background-color: rgb(0 0 0 / 50%); z-index: -1; }
  .bg-image.overlay-white::before { background: linear-gradient(to left, rgb(255 255 255 / 40%), rgb(255 255 255 / 95%)); }
  .gap-row { row-gap: 30px; }
  .readmore { width: 100%; margin-top: 2.5rem; }
  .readmore.d-flex { gap: 5px; }
  .readmore .button { display: flex; align-items: center; justify-content: center; gap: 5px; padding: 1rem; min-width: 140px; width: max-content; color: #fff; background-color: var(--primary-color); font-size: 12px; font-weight: 500; text-align: center; text-transform: uppercase; transition: all ease-in-out 0.3s; position: relative; z-index: 1; }
  .readmore button { border-radius: 0; border: none; font-size: 14px; background: none; }
  .readmore .button:hover { color: #fff; background-color: var(--body-color); box-shadow: 0 0 0 1px rgb(255 255 255 / 15%); }
  .readmore .button i { width: 14px; }
  .readmore .button.bg-white { color: var(--body-color); background-color: #fff; }
  .readmore .button.bg-white:hover { color: #fff; background-color: var(--primary-color) !important; }

  /* Swiper buttons */
  div[class^="swiper-button"] { color: #fff; background-color: var(--body-color); width: 40px; height: 40px; border-radius: 50%; transition: all 300ms ease-in-out; }
  div[class^="swiper-button"]:hover { background-color: var(--primary-color); }
  div[class^="swiper-button"]:after { font-size: 1rem; }
  .bottomControls { display: flex; align-items: center; justify-content: center; gap: 10px; }
  .bottomControls div[class^="swiper-"] { position: static; margin: 0 !important; }
  .bottomControls .swiper-pagination { width: 40px; }

  /* Footer */
  .footer { font-size: 0.75rem; padding: 2rem 0; }
  .footer a { color: #fff; }
  .footer-enquiryBtn { position: fixed; bottom: 0; left: 0; right: 0; display: flex; justify-content: space-between; z-index: 99; background: #123939; text-align: center; }
  .footer-enquiryBtn a { color: #fff; text-align: center; text-transform: uppercase; display: block; width: calc(100% / 2); padding: 12px 5px; border: 1px solid rgb(0 0 0 / 15%); border-left: 0; }
  a.whatsCall { color: #fff !important; background: #123939; border: 0; min-width: 30px !important; }
  a.whatsCall:hover { background: linear-gradient(135deg, #0db634, #015c16) !important; }
  .button-top { background: var(--primary-color); position: fixed; cursor: pointer; left: 10px; bottom: 10px; color: #ffffff; font-size: 13px; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 500ms ease; z-index: 99; opacity: 0; }
  .button-top.visible { opacity: 1; }

  /* Modal */
  .modal-backdrop.show { opacity: 1; background: rgb(0 10 12 / 95%); backdrop-filter: blur(5px); }
  .modal-content { border: none; border-radius: 0; box-shadow: 0 8px 32px 0 rgba(0 0 0 / 20%); }
  .modal-content .modal-header { padding: 0; border: none; }
  .modal-content button.close { position: absolute; top: -10px; right: -10px; padding: 0; margin: 0; width: 40px; height: 40px; z-index: 1; text-shadow: none; color: maroon; border: 0; background-color: #fff; opacity: 1; font-size: 35px; }
  .modal-body { padding: 25px; }
  .modal-details { height: 100%; padding: 2rem; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; font-family: var(--serif); gap: 10px; background-color: #02994a; color: #fff; }
  .modal-details .banner-price { color: #ffffff; padding: 10px 0; border: dashed rgb(255 255 255 / 35%); border-width: 1px 0; width: 100%; }

  /* Tagline */
  .tagline { max-width: 800px; color: #fff; text-align: center; line-height: 1.7; }

  /* SEO text block */
  .seo-text { font-size: 0.78rem; color: #999; line-height: 1.7; margin-top: 1.5rem; border-top: 1px dashed #ddd; padding-top: 1rem; }

  /* Responsive */
  @media (max-width: 991px) {
    body { text-align: center; }
    .menuContainer { position: fixed; top: 55px; }
    .banner { height: 80vh; }
    .bannerText { width: calc(100% - 4rem); }
    .overviewContent { margin-top: 4rem; }
    .enquiry-form .inner { padding: 2rem; }
    .heading, .readmore .button { margin-left: auto; margin-right: auto; text-align: center; }
    .headingContainer .heading { margin-left: 0; text-align: left; }
  }
  @media (max-width: 767px) {
    html { font-size: 87.5%; }
    .padding { padding-top: 3rem; padding-bottom: 3rem; }
    .container-lg, .container-fluid { padding-left: 20px; padding-right: 20px; }
    .banner { height: auto; aspect-ratio: 1/1; margin-top: 4rem; }
    .bannerText { padding: 2rem; }
    .bannerText .bannerTitle { font-size: 1.5rem; }
    .heading { margin-bottom: 20px; }
    .heading .h1 { font-size: 2rem; }
  }
  @media (max-width: 575px) {
    html { font-size: 81.25%; }
    .logo { width: 100px; }
    .bannerText { width: calc(100% - 2rem); text-align: center; }
    .heading .h1 { font-size: 1.75rem; }
    .iconBox { width: 50%; }
    .footer { padding-bottom: 5rem; padding-top: 1.5rem; }
    .fixed-form .innerform form { padding: 0rem; }
  }
  @media (max-width: 480px) {
    .configuration { row-gap: 20px; background: #02994a; color: #fff; padding: 10px; }
    .configuration-box h6 { color: #fff !important; }
    .configuration-box { border-right: 1px dashed #ffffff; width: 50%; }
    .configuration-box:nth-child(2n) { border-right: 0; }
  }
`;

/* ═══════════════════════════════════════════════════════════════════════════
   SEO HOOK
   Injects all meta tags, Open Graph, Twitter Card, geo tags, canonical URL,
   and 5 JSON-LD structured data schemas into <head> on mount.
   Update SITE_URL to your live domain before deploying.
   ═══════════════════════════════════════════════════════════════════════════ */
const SITE_URL   = "https://www.eldecogrp.com";   // ← UPDATE to your live domain
const SITE_IMAGE = `${SITE_URL}/eldeco-echoes/images/desktop.jpeg`;

function useSEO() {
  useEffect(() => {
    /* ── Page title ── */
    document.title =
      "Eldeco Echoes of Eden | 3/4 BHK Luxury Apartments Sector 22D Yamuna Expressway | Near Jewar Airport";

    /* ── Helpers ── */
    const setMeta = (nameAttr, nameVal, contentVal) => {
      let el = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(nameAttr, nameVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", contentVal);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    const setJsonLd = (id, data) => {
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement("script");
        el.id = id;
        el.type = "application/ld+json";
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data);
    };

    /* ════════════════════════════
       CORE META TAGS
    ════════════════════════════ */
    setMeta("name", "description",
      "Eldeco Echoes of Eden – Premium 3 BHK & 4 BHK luxury residences at Sector 22D, Yamuna Expressway, Greater Noida. Just 15 mins from Noida International Airport (Jewar Airport). RERA No. UPRERAPRJ125342/02/2026. Enquire for price list, floor plans & site visit."
    );

    setMeta("name", "keywords", [
      /* ── Project exact-match ── */
      "eldeco echoes of eden", "eldeco eoe", "eldeco echoes of eden sector 22d",
      "eldeco eoe yamuna expressway", "eldeco echoes of eden price list",
      "eldeco echoes of eden floor plan", "eldeco echoes of eden brochure",
      "eldeco echoes of eden RERA", "eldeco echoes of eden greater noida",
      /* ── Builder brand ── */
      "eldeco group", "eldeco projects greater noida", "eldeco new launch 2025",
      "eldeco new project yamuna expressway", "eldeco residential project",
      "eldeco 3 bhk", "eldeco 4 bhk", "eldeco luxury apartments",
      /* ── Yamuna Expressway ── */
      "new project on yamuna expressway", "new launch yamuna expressway 2025",
      "upcoming residential projects yamuna expressway",
      "luxury apartments yamuna expressway", "3 bhk yamuna expressway",
      "4 bhk yamuna expressway", "sector 22d yamuna expressway",
      "sector 22d greater noida", "buy flat yamuna expressway",
      "property yamuna expressway", "yamuna expressway real estate",
      "YEIDA approved project", "yamuna authority residential project",
      "yamuna expressway new launch 2025", "residential project yamuna expressway",
      /* ── Jewar Airport ── */
      "new project near jewar airport", "residential project near jewar airport",
      "flat near jewar airport", "property near jewar airport",
      "apartment near noida international airport",
      "buy flat near jewar airport", "jewar airport real estate",
      "housing near jewar airport", "noida international airport residential project",
      "property investment near jewar airport", "jewar airport property",
      "investment near noida international airport",
      /* ── Greater Noida ── */
      "greater noida luxury apartments", "greater noida new project 2025",
      "luxury flats greater noida", "premium apartments greater noida",
      "greater noida 3 bhk", "greater noida 4 bhk",
      /* ── Generic high-intent ── */
      "gated community yamuna expressway", "luxury residential project NCR",
      "RERA registered project yamuna expressway",
      "investment property near jewar airport NCR",
      "new residential project greater noida",
      "premium housing noida expressway",
    ].join(", "));

    setMeta("name", "robots",
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    );
    setMeta("name", "author", "Eldeco Group");

    /* ════════════════════════════
       GEO / LOCAL SEO
    ════════════════════════════ */
    setMeta("name", "geo.region", "IN-UP");
    setMeta("name", "geo.placename",
      "Sector 22D, Yamuna Expressway, Greater Noida, Uttar Pradesh, India"
    );
    setMeta("name", "geo.position", "28.3180;77.5452");
    setMeta("name", "ICBM", "28.3180, 77.5452");

    /* ════════════════════════════
       OPEN GRAPH (Facebook / WhatsApp / LinkedIn previews)
    ════════════════════════════ */
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Eldeco Echoes of Eden");
    setMeta("property", "og:title",
      "Eldeco Echoes of Eden | Luxury 3/4 BHK Near Jewar Airport | Sector 22D Yamuna Expressway"
    );
    setMeta("property", "og:description",
      "Live amidst nature at Eldeco Echoes of Eden – premium 3 & 4 BHK residences at Sector 22D, Yamuna Expressway. Just 15 mins from Noida International Airport (Jewar). Limited units. Enquire now."
    );
    setMeta("property", "og:url", `${SITE_URL}/`);
    setMeta("property", "og:image", SITE_IMAGE);
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:image:alt",
      "Eldeco Echoes of Eden – Luxury 3/4 BHK residences at Yamuna Expressway"
    );
    setMeta("property", "og:locale", "en_IN");

    /* ════════════════════════════
       TWITTER / X CARD
    ════════════════════════════ */
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title",
      "Eldeco Echoes of Eden | 3/4 BHK Near Jewar Airport | Yamuna Expressway"
    );
    setMeta("name", "twitter:description",
      "Premium 3 & 4 BHK residences at Sector 22D, Yamuna Expressway — 15 mins from Noida International Airport. RERA registered. Enquire for price & floor plans."
    );
    setMeta("name", "twitter:image", SITE_IMAGE);
    setMeta("name", "twitter:image:alt",
      "Eldeco Echoes of Eden luxury apartments Yamuna Expressway"
    );

    /* ════════════════════════════
       CANONICAL URL
    ════════════════════════════ */
    setLink("canonical", `${SITE_URL}/`);

    /* ════════════════════════════
       JSON-LD 1 — ApartmentComplex
    ════════════════════════════ */
    setJsonLd("jsonld-realestate", {
      "@context": "https://schema.org",
      "@type": "ApartmentComplex",
      "name": "Eldeco Echoes of Eden",
      "alternateName": ["Eldeco EOE", "Eldeco Echoes of Eden Sector 22D"],
      "description":
        "Premium 3 BHK and 4 BHK luxury residences by Eldeco Group at Sector 22D, Yamuna Expressway, Greater Noida. 15 minutes from Noida International Airport (Jewar Airport). RERA No. UPRERAPRJ125342/02/2026.",
      "url": `${SITE_URL}/`,
      "telephone": "+919899911553",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 22D",
        "addressLocality": "Yamuna Expressway",
        "addressRegion": "Greater Noida, Uttar Pradesh",
        "postalCode": "201310",
        "addressCountry": "IN",
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "28.3180", "longitude": "77.5452" },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Swimming Pool",  "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Gymnasium",      "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Jogging Track",  "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Kids Play Area", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Yoga Area",      "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Barbecue Area",  "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Sports Block",   "value": true },
        { "@type": "LocationFeatureSpecification", "name": "24x7 Security",  "value": true },
      ],
      "containsPlace": [
        { "@type": "Accommodation", "name": "3 BHK Luxury Residence", "numberOfRooms": 3 },
        { "@type": "Accommodation", "name": "4 BHK Luxury Residence", "numberOfRooms": 4 },
      ],
    });

    /* ── JSON-LD 2 — Organization ── */
    setJsonLd("jsonld-org", {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Eldeco Group",
      "url": `${SITE_URL}/`,
      "logo": `${SITE_URL}/eldeco-echoes/images/eldeco.webp`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9899911553",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
      },
    });

    /* ── JSON-LD 3 — BreadcrumbList ── */
    setJsonLd("jsonld-breadcrumb", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",                    "item": `${SITE_URL}/` },
        { "@type": "ListItem", "position": 2, "name": "Eldeco Echoes of Eden",   "item": `${SITE_URL}/` },
      ],
    });

    /* ── JSON-LD 4 — FAQPage (rich results) ── */
    setJsonLd("jsonld-faq", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Eldeco Echoes of Eden?",
          "acceptedAnswer": { "@type": "Answer", "text": "Eldeco Echoes of Eden (Eldeco EOE) is a premium residential project by Eldeco Group offering 3 BHK and 4 BHK luxury apartments at Sector 22D, Yamuna Expressway, Greater Noida. RERA No. UPRERAPRJ125342/02/2026." },
        },
        {
          "@type": "Question",
          "name": "Where is Eldeco Echoes of Eden located?",
          "acceptedAnswer": { "@type": "Answer", "text": "Eldeco Echoes of Eden is at Sector 22D, Yamuna Expressway, Greater Noida, Uttar Pradesh. It is approximately 15 minutes from Noida International Airport (Jewar Airport)." },
        },
        {
          "@type": "Question",
          "name": "How far is Eldeco Echoes of Eden from Jewar Airport?",
          "acceptedAnswer": { "@type": "Answer", "text": "Eldeco Echoes of Eden is approximately 15 minutes from Noida International Airport (Jewar Airport) via Yamuna Expressway." },
        },
        {
          "@type": "Question",
          "name": "What apartment types are available in Eldeco Echoes of Eden?",
          "acceptedAnswer": { "@type": "Answer", "text": "Eldeco Echoes of Eden offers 3 BHK and 4 BHK luxury residences. Contact us for current pricing and availability." },
        },
        {
          "@type": "Question",
          "name": "What is the RERA number for Eldeco Echoes of Eden?",
          "acceptedAnswer": { "@type": "Answer", "text": "The RERA number is UPRERAPRJ125342/02/2026, registered with the Uttar Pradesh Real Estate Regulatory Authority." },
        },
        {
          "@type": "Question",
          "name": "What amenities does Eldeco Echoes of Eden offer?",
          "acceptedAnswer": { "@type": "Answer", "text": "Amenities include a swimming pool, gymnasium, jogging track, yoga area, kids play area, barbecue zone, sports block, and 24x7 security." },
        },
        {
          "@type": "Question",
          "name": "Is Eldeco Echoes of Eden a good investment near Jewar Airport?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Located at Sector 22D on the Yamuna Expressway, Eldeco Echoes of Eden benefits from proximity to Noida International Airport (Jewar), Eastern Peripheral Expressway, and major universities — all key drivers for property appreciation in the region." },
        },
        {
          "@type": "Question",
          "name": "How do I book a site visit for Eldeco Echoes of Eden?",
          "acceptedAnswer": { "@type": "Answer", "text": "Fill the enquiry form on this page, call +91-9899911553, or WhatsApp us for instant assistance." },
        },
      ],
    });

    /* ── JSON-LD 5 — LocalBusiness / RealEstateAgent ── */
    setJsonLd("jsonld-localbusiness", {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Eldeco Echoes of Eden – Authorised Marketing Partner",
      "image": SITE_IMAGE,
      "telephone": "+919899911553",
      "url": `${SITE_URL}/`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sector 22D",
        "addressLocality": "Yamuna Expressway, Greater Noida",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201310",
        "addressCountry": "IN",
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "28.3180", "longitude": "77.5452" },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "09:00",
        "closes": "20:00",
      },
      "priceRange": "₹₹₹",
    });

    /* ── Cleanup on unmount ── */
    return () => {
      document.title = "Eldeco";
      ["jsonld-realestate","jsonld-org","jsonld-breadcrumb","jsonld-faq","jsonld-localbusiness"]
        .forEach((id) => { const el = document.getElementById(id); if (el) el.remove(); });
    };
  }, []);
}

/* ─── EmailJS Config ─────────────────────────────────────────────────────────
   Replace these values if your EmailJS credentials change.
────────────────────────────────────────────────────────────────────────────── */
const EMAILJS_PUBLIC_KEY  = "xLfYDZXLlR6IeQ-C6";
const EMAILJS_SERVICE_ID  = "service_fkmfynb";
const EMAILJS_TEMPLATE_ID = "template_bdjcyq6";

let emailjsReady = null;

function loadEmailJS() {
  if (emailjsReady) return emailjsReady;
  emailjsReady = new Promise((resolve, reject) => {
    if (window.emailjs) { window.emailjs.init(EMAILJS_PUBLIC_KEY); resolve(window.emailjs); return; }
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      if (window.emailjs) { window.emailjs.init(EMAILJS_PUBLIC_KEY); resolve(window.emailjs); }
      else reject(new Error("EmailJS failed to initialise"));
    };
    script.onerror = () => reject(new Error("EmailJS script failed to load"));
    document.body.appendChild(script);
  });
  return emailjsReady;
}

async function sendEnquiry(templateParams) {
  const ejs = await loadEmailJS();
  return ejs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
}

/* ─── Reusable EnquiryForm ───────────────────────────────────────────────── */
function EnquiryForm({ formId, requireEmail = false, source = "Website" }) {
  const INITIAL = { name: "", mobile: "", email: "" };
  const [values,  setValues]  = useState(INITIAL);
  const [status,  setStatus]  = useState({ text: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(values.mobile.trim())) {
      setStatus({ text: "Please enter a valid 10-digit mobile number.", type: "error" });
      return;
    }
    setLoading(true);
    setStatus({ text: "Sending your enquiry…", type: "sending" });
    const templateParams = {
      from_name:   values.name.trim(),
      mobile:      values.mobile.trim(),
      email:       values.email.trim() || "Not provided",
      source_form: source,
      project:     "Eldeco Echoes of Eden",
      location:    "Sector 22D, Yamuna Expressway",
      reply_to:    values.email.trim() || "noreply@eldeco.com",
    };
    try {
      await sendEnquiry(templateParams);
      setStatus({ text: "✅ Enquiry sent successfully! We'll be in touch soon.", type: "success" });
      setValues(INITIAL);
      setTimeout(() => {
        window.open(
          `https://wa.me/919899911553?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20for%20Eldeco%20Echoes%20of%20Eden%20from%20the%20${encodeURIComponent(source)}%20form.`,
          "_blank"
        );
      }, 800);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({ text: "❌ Failed to send enquiry. Please try again or call us directly.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleReportConversion = () => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18122446172/VeIkCMGpqqMcENyqusFD",
        value: 50.0,
        currency: "INR",
      });
    }
  };

  return (
    <form id={formId} className="form-container" onSubmit={handleSubmit} onClick={handleReportConversion} noValidate>
      {status.text && <p className={`form-status ${status.type}`}>{status.text}</p>}
      <div className="row">
        <div className="col-12 form-group">
          <div className="form-floating">
            <input type="text" id={`${formId}_name`} className="form-control" name="name" placeholder=" " required disabled={loading} value={values.name} onChange={handleChange} />
            <label htmlFor={`${formId}_name`}>Name *</label>
          </div>
        </div>
        <div className="col-12 form-group">
          <div className="form-floating">
            <input type="tel" id={`${formId}_mobile`} className="form-control" name="mobile" placeholder=" " required maxLength={10} pattern="\d{10}" disabled={loading} value={values.mobile} onChange={handleChange} />
            <label htmlFor={`${formId}_mobile`}>Mobile * (10 digits)</label>
          </div>
        </div>
        {requireEmail && (
          <div className="col-12 form-group">
            <div className="form-floating">
              <input type="email" id={`${formId}_email`} className="form-control" name="email" placeholder=" " required disabled={loading} value={values.email} onChange={handleChange} />
              <label htmlFor={`${formId}_email`}>Email *</label>
            </div>
          </div>
        )}
        <div className="col-12">
          <div className="readmore mt-3">
            <button type="submit" className="button w-100" disabled={loading} style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}>
              {loading ? "Sending…" : "Submit Enquiry"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

/* ─── Main Home Component ─────────────────────────────────────────────────── */
function EldecoEchoesOfEden() {
  /* ✅ SEO hook — injects all meta / structured data */
  useSEO();

  const [menuOpen,       setMenuOpen]       = useState(false);
  const [showModal,      setShowModal]      = useState(false);
  const [showScrollTop,  setShowScrollTop]  = useState(false);
  const swiperInitialized = useRef(false);

  useEffect(() => {
    const loadScript = (src, onLoad) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) { if (onLoad) onLoad(); return; }
      const s = document.createElement("script");
      s.src = src; s.onload = onLoad;
      document.body.appendChild(s);
    };
    loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js");
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js");
    loadScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.1/swiper-bundle.min.js", () => {
      if (!swiperInitialized.current && window.Swiper) {
        swiperInitialized.current = true;
        new window.Swiper(".gallerySlider", {
          slidesPerView: 1, spaceBetween: 10, speed: 800, loop: true,
          autoplay: { delay: 2500, disableOnInteraction: false },
          navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
          breakpoints: { 540: { slidesPerView: 2, spaceBetween: 20 }, 1200: { slidesPerView: 2, spaceBetween: 30 } },
        });
      }
    });
    loadScript("https://unpkg.com/aos@2.3.0/dist/aos.js", () => {
      if (window.AOS) window.AOS.init({ duration: 1200 });
    });
    loadEmailJS().catch((err) => console.warn("EmailJS pre-load failed:", err));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const amenities = [
    { img: Ame1, label: "Jogging Track"   },
    { img: Ame2, label: "Yoga"            },
    { img: Ame3, label: "The Sports Block" },
    { img: Ame4, label: "Play Ground"     },
    { img: Ame5, label: "Barbecue Area"   },
    { img: Ame6, label: "Kids Play Area"  },
    { img: Ame7, label: "Swimming Pool"   },
    { img: Ame9, label: "Gymnasium"       },
  ];

  const galleryImages = [G1, G2, G3, G4];

  return (
    <>
      <style>{styles}</style>

      <main>
        {/* ── Header ── */}
        <div className="header fixed">
          <div className="container-fluid">
            <div className="logo">
              <Link to="/">
                <img src={Logo1} alt="Eldeco Group – Eldeco Echoes of Eden" />
              </Link>
            </div>
            <div className="menu-section">
              <nav className="navi d-none d-lg-flex align-items-center" aria-label="Main navigation">
                <ul className="list-inline menu d-flex justify-content-center align-items-center">
                  {["overview", "floorplan", "pricelist", "amenities", "gallery", "location"].map((s) => (
                    <li key={s}>
                      <a href={`#${s}`}>
                        {s === "floorplan" ? "Floor Plans" : s.charAt(0).toUpperCase() + s.slice(1)}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <button
                className={`menuBtn d-flex d-lg-none ${menuOpen ? "closeMenuBtn" : ""}`}
                onClick={() => setMenuOpen((o) => !o)}
                aria-label="Toggle navigation menu"
              >
                <span id="menuLine1" />
                <span id="menuLine2" />
                <span id="menuLine3" />
              </button>
            </div>
            <div className="topHead cta-box d-none d-lg-block">
              <ul className="list-inline justify-content-end align-items-center">
                <li>
                  <a href="tel:9899911553" aria-label="Call us" style={{ backgroundColor: "var(--whatsapp)", color: "#fff", padding: "6px", marginLeft: "1.5rem", borderRadius: "40px", flexDirection: "row", width: "100px" }}>
                    <i className="fa fa-phone" /> Call
                  </a>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=+919899911553&text=Hi! I am interested in Eldeco Echoes of Eden, please share the details." target="_blank" rel="noreferrer" className="whatsappBtn" aria-label="WhatsApp us">
                    Get details on <i className="fab fa-whatsapp" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`menuContainer ${menuOpen ? "open" : ""}`} role="navigation" aria-label="Mobile navigation">
          <ul className="list-inline">
            {[
              { href: "#overview",  label: "Overview"    },
              { href: "#floorplan", label: "Floor Plans" },
              { href: "#amenities", label: "Amenities"   },
              { href: "#pricelist", label: "Price List"  },
              { href: "#gallery",   label: "Gallery"     },
              { href: "#location",  label: "Location"    },
            ].map(({ href, label }) => (
              <li key={href}><a href={href} onClick={closeMenu}>{label}</a></li>
            ))}
          </ul>
        </div>

        {/* ── Banner ── */}
        <div id="banner" className="banner" role="banner">
          <div className="h-100">
            <picture>
              <source media="(max-width:560px)" srcSet={BannerMobile} />
              <img
                src={BannerDesktop}
                className="h-100 object-cover"
                alt="Eldeco Echoes of Eden – Luxury 3/4 BHK Residences at Sector 22D Yamuna Expressway, Greater Noida"
                loading="eager"
              />
            </picture>
          </div>
        </div>

        {/* ── Overview ── */}
        <section className="w-100 padding bg-sec overviewWrapper" id="overview" aria-label="Project Overview">
          <div className="container-lg">
            <div className="row g-4 flex-row-reverse">

              <div className="col-lg-4 fixed-form">
                <div className="innerform">
                  <div className="form-strip">Express your Interest</div>
                  <EnquiryForm formId="enquiryForm" source="Sidebar" />
                </div>
              </div>

              <div className="col-lg-8 overviewContent">
                <div className="inner pr-lg-4" data-aos="fade-right">
                  <div className="heading has-border">
                    {/* h1 — the most important on-page SEO signal */}
                    <h1 className="h1 text-primary">Eldeco Echoes of Eden</h1>
                    <h2 className="h4 mb-0">
                      3 &amp; 4 BHK Luxury Residences at Sector 22D, Yamuna Expressway, Greater Noida
                    </h2>
                  </div>
                  <p>
                    <strong>Eldeco Echoes of Eden</strong> (Eldeco EOE) unveils premium 3 BHK and 4 BHK
                    residences on the <strong>Yamuna Expressway, Greater Noida</strong>. Thoughtfully
                    designed amidst lush green surroundings at <strong>Sector 22D</strong>, this
                    RERA-registered luxury development offers an elevated lifestyle for families who
                    seek comfort, elegance, and future-ready living near the upcoming{" "}
                    <strong>Noida International Airport (Jewar Airport)</strong>.
                  </p>
                  <p>
                    Strategically positioned on the <strong>Yamuna Expressway</strong>, the project
                    blends urban connectivity with peaceful surroundings — just 15 minutes from
                    Jewar Airport and 20 minutes from the Eastern Peripheral Expressway — making it
                    an ideal destination for both end-users and investors seeking high ROI in NCR.
                  </p>

                  <div className="configuration">
                    <div className="configuration-box">
                      <h3 className="text-primary text-serif" style={{ fontSize: "1rem" }}>Type</h3>
                      <p className="mb-0">3 &amp; 4 BHK Luxury Residences</p>
                    </div>
                    <div className="configuration-box">
                      <h3 className="text-primary text-serif" style={{ fontSize: "1rem" }}>Location</h3>
                      <p className="mb-0">Sector 22D, Yamuna Expressway, Greater Noida</p>
                    </div>
                    <div className="configuration-box">
                      <h3 className="text-primary text-serif" style={{ fontSize: "1rem" }}>Jewar Airport</h3>
                      <p className="mb-0">~15 mins away</p>
                    </div>
                  </div>

                  {/* ── SEO paragraph – visible to crawlers and users ── */}
                  <p className="seo-text">
                    <strong>Eldeco Echoes of Eden</strong> is a RERA-registered project by{" "}
                    <strong>Eldeco Group</strong> (RERA No. UPRERAPRJ125342/02/2026). Located at{" "}
                    <strong>Sector 22D, Yamuna Expressway</strong>, the project is one of the most
                    anticipated new launches near <strong>Jewar Airport</strong> (Noida International
                    Airport). Whether you're searching for a{" "}
                    <em>3 BHK flat on Yamuna Expressway</em>,{" "}
                    <em>property near Jewar Airport</em>, or a{" "}
                    <em>new residential project by Eldeco</em> in Greater Noida — Eldeco EOE delivers
                    luxury, connectivity, and long-term investment value on the{" "}
                    <strong>Yamuna Expressway real estate</strong> corridor.
                  </p>

                  <div className="readmore d-flex">
                    <button className="button" onClick={() => setShowModal(true)}>
                      Download Brochure
                    </button>
                    <button className="button d-none d-md-block" onClick={() => setShowModal(true)}>
                      Schedule A Site Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Amenities ── */}
        <section
          className="w-100 padding position-relative overflow-hidden amenitiesWrapper bg-image"
          id="amenities"
          aria-label="Amenities"
          style={{ backgroundImage: `url(${AmenityBg})`, height: "auto" }}
        >
          <div className="container-lg">
            <div className="headingContainer" data-aos="fade-up">
              <div className="heading mb-0 text-white mx-auto text-center">
                <h2 className="h1 mb-0">World-Class Amenities</h2>
                <p className="h4 mb-0">A bouquet of amenities for every lifestyle at Eldeco Echoes of Eden</p>
              </div>
            </div>
            <div className="amenitiesContainer" data-aos="fade-up">
              <div className="row g-2 justify-content-center">
                {amenities.map(({ img, label }) => (
                  <div key={label} className="col-md-3 col-6 amenitiesitem">
                    <div className="inner">
                      <div className="icon">
                        <img src={img} alt={`${label} – Eldeco Echoes of Eden amenity`} loading="lazy" />
                      </div>
                      <span>{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Floor Plans ── */}
        <section className="w-100 padding fpWrapper" id="floorplan" aria-label="Floor Plans">
          <div className="container-lg">
            <div className="headingContainer" data-aos="fade-up">
              <div className="heading mb-0">
                <h2 className="h1 text-primary mb-0">Floor Plans</h2>
                <p className="h4 mb-0">3 BHK &amp; 4 BHK Luxury Floor Plans – Eldeco Echoes of Eden, Sector 22D</p>
              </div>
              <div className="viewmore w-auto d-none d-md-block">
                <button className="button" onClick={() => setShowModal(true)}>
                  Download Master Plan <i className="fa fa-long-arrow-right" />
                </button>
              </div>
            </div>
            <div className="fpContainer" data-aos="fade-up">
              <div className="row g-4 justify-content-center">
                {[
                  { type: "3 BHK", img: "https://image2url.com/r2/default/images/1775586904581-ab466bb8-ff75-4271-b4e6-014cda43391b.webp", alt: "Eldeco Echoes of Eden 3 BHK floor plan" },
                  { type: "4 BHK", img: "https://image2url.com/r2/default/images/1775587018708-732efb18-f374-41d6-a387-5fd471436f4a.webp", alt: "Eldeco Echoes of Eden 4 BHK floor plan" },
                ].map(({ type, img, alt }) => (
                  <div key={type} className="col-lg-4 col-md-6 fpBox">
                    <div className="inner">
                      <button style={{ all: "unset", cursor: "pointer", display: "block" }} onClick={() => setShowModal(true)}>
                        <div className="img-fluid">
                          <img style={{ filter: "blur(4px)" }} src={img} alt={alt} loading="lazy" />
                        </div>
                      </button>
                      <div className="planBase">
                        <div className="fpDetails">
                          <small>Type</small>
                          <h3 className="mb-0 text-primary" style={{ fontSize: "1.1rem" }}>{type} – Eldeco Echoes of Eden</h3>
                        </div>
                      </div>
                      <div className="readmore mt-0">
                        <button className="button" onClick={() => setShowModal(true)}>
                          <div className="downIcon">
                            <img src="./eldeco-echoes/images/download.gif" alt="" aria-hidden="true" />
                          </div>
                          Download Floor Plan
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Tagline ── */}
        <div
          className="w-100 padding position-relative overflow-hidden bg-image"
          style={{ backgroundImage: `url(${TaglineBg})`, height: "60vh" }}
          aria-hidden="true"
        >
          <div className="container-lg h-100 d-flex align-items-center justify-content-center">
            <div className="tagline" data-aos="fade-up">
              <span className="text-serif fs-3">
                Welcome to Eldeco Echoes of Eden — a thoughtfully curated residential destination
                where nature, luxury, and modern living come together in perfect harmony on the
                Yamuna Expressway, Greater Noida.
              </span>
            </div>
          </div>
        </div>

        {/* ── Price List ── */}
        <section className="w-100 padding position-relative overflow-hidden" id="pricelist" aria-label="Price List">
          <div className="container">
            <div className="heading">
              <h2 className="h1 text-primary text-uppercase mb-0">Price List</h2>
              <p className="h4 text-uppercase mb-0">Eldeco Echoes of Eden – Sector 22D, Yamuna Expressway</p>
            </div>
            <div className="table-responsive">
              <table className="table text-center table-pricing table-bordered" aria-label="Eldeco Echoes of Eden price list">
                <thead>
                  <tr>
                    <th className="bg-primary text-white" width="30%">Type</th>
                    <th className="bg-primary text-white" width="30%">Size (Sq.Ft)</th>
                    <th className="bg-primary text-white">Price Breakup</th>
                  </tr>
                </thead>
                <tbody>
                  {["3 BHK", "4 BHK"].map((t) => (
                    <tr key={t}>
                      <td>{t} – Eldeco Echoes of Eden</td>
                      <td>On Request</td>
                      <td className="readmore mt-0">
                        <button className="button mx-auto" onClick={() => setShowModal(true)}>
                          Download Price List
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section
          className="w-100 padding position-relative overflow-hidden amenitiesWrapper bg-light"
          id="gallery"
          aria-label="Gallery"
        >
          <div className="container-lg">
            <div className="swiper gallerySlider" data-aos="fade-up">
              <div className="headingContainer">
                <div className="heading mb-0">
                  <h2 className="h1 text-primary mb-0">A Glimpse of</h2>
                  <p className="h4 mb-0">Ultra luxury lifestyle – Eldeco Echoes of Eden</p>
                </div>
                <div className="bottomControls">
                  <div className="swiper-button-prev" />
                  <div className="swiper-button-next" />
                </div>
              </div>
              <div className="swiper-wrapper">
                {galleryImages.map((src, i) => (
                  <div key={i} className="swiper-slide galBox">
                    <div className="inner">
                      <img src={src} alt={`Eldeco Echoes of Eden gallery image ${i + 1}`} loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Location ── */}
        <section className="w-100" id="location" aria-label="Location">
          <div className="w-100 padding overflow-hidden bg-sec hm-entertainmentContainer">
            <div className="container-lg">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-10 bedroomBox" data-aos="fade-up">
                  <div className="inner text-center">
                    <div className="heading mx-auto">
                      <h2 className="h1 text-primary">Location Advantages</h2>
                      <p className="mb-0">
                        <i className="fa fa-map-marker-alt text-primary" />{" "}
                        <strong>Sector 22D, Yamuna Expressway, Greater Noida</strong> – Near Noida International Airport (Jewar)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 location-img" data-aos="fade-right">
                  <button style={{ all: "unset", cursor: "pointer", display: "block", height: "100%" }} onClick={() => setShowModal(true)}>
                    <img
                      style={{ filter: "blur(7px)" }}
                      src={Loc}
                      className="h-100 object-fit-cover locationmap"
                      alt="Eldeco Echoes of Eden location map – Sector 22D Yamuna Expressway near Jewar Airport"
                      loading="lazy"
                    />
                  </button>
                </div>

                <div className="col-lg-7 bedroomBox" data-aos="fade-left">
                  <div className="row g-3">
                    {[
                      {
                        title: "Connectivity",
                        items: [
                          "Yamuna Expressway – 2 mins",
                          "Noida International Airport (Jewar) – 15 mins",
                          "Eastern Peripheral Expressway – 20 mins",
                        ],
                      },
                      {
                        title: "Shopping Malls",
                        items: [
                          "Omaxe Connaught Place – 20 mins",
                          "The Grand Venice Mall – 25 mins",
                        ],
                      },
                      {
                        title: "Education Centres",
                        items: [
                          "Galgotias University – 10 mins",
                          "Sharda University – 20 mins",
                          "Noida International University – 25 mins",
                        ],
                      },
                      {
                        title: "5/7 Star Hotels",
                        items: [
                          "Radisson Blu Greater Noida – 25 mins",
                          "Jaypee Greens Golf Resort – 30 mins",
                          "Crowne Plaza Greater Noida – 30 mins",
                        ],
                      },
                    ].map(({ title, items }) => (
                      <div key={title} className="col-sm-6 locBox">
                        <div className="inner">
                          <h3 className="text-serif text-primary" style={{ fontSize: "1.1rem" }}>
                            <b>{title}</b>
                          </h3>
                          <ul className="list-unstyled list">
                            {items.map((item) => <li key={item}>{item}</li>)}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Enquiry Section ── */}
        <section className="w-100 padding enquiryWrapper" aria-label="Enquiry Form">
          <div className="container-lg">
            <div className="formContainer shadow-lg" data-aos="fade-up">
              <div className="row g-0">
                <div className="col-lg-7 enquiry-form">
                  <div className="inner">
                    <div className="heading">
                      <h2 className="h1 text-primary">Enquire Now</h2>
                      <p className="mb-0">
                        Interested in Eldeco Echoes of Eden? Fill the form for price, floor plans &amp; site visit.
                      </p>
                    </div>
                    <EnquiryForm formId="enquiryForm2" requireEmail source="Enquiry Section" />
                  </div>
                </div>
                <div className="col-lg-5 form-img">
                  <img src={FormSide} className="h-100 object-cover" alt="Eldeco Echoes of Eden luxury apartment interiors" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="w-100 footer bg-primary" role="contentinfo">
          <div className="container-lg">
            <div className="row g-4 text-center align-items-center">
              <div className="col-md-6">
                <p style={{ color: "#fff" }}>
                  Project RERA No.: UPRERAPRJ125342/02/2026
                  <br /><br />
                  <small>
                    Disclaimer – Authorized marketing partner with Eldeco Builders. The content provided on
                    this website is for information purposes only and does not constitute an offer to avail
                    any service. Prices are subject to change without prior notice. Images are for
                    representation purposes only. This is the official website of an authorized marketing
                    partner. We may share data with RERA-registered brokers/companies for further processing.
                    All rights reserved.
                  </small>
                  <br /><br />
                  <a href="https://up-rera.in/projects/" target="_blank" rel="noreferrer" style={{ color: "#fff" }}>
                    https://up-rera.in/projects/
                  </a>
                  <br />
                  <Link to="/privacy-policy" style={{ color: "#fff", textDecoration: "underline" }}>
                    <b>Privacy Policy</b>
                  </Link>
                </p>
              </div>
              <div className="col-md-6">
                <p style={{ color: "#fff" }}>
                  <img src={QR} style={{ width: "100px" }} alt="Scan QR to enquire about Eldeco Echoes of Eden" loading="lazy" />
                  <br /><small>Scan to enquire</small>
                </p>
              </div>
            </div>
          </div>

          <div
            className={`button-top ${showScrollTop ? "visible" : ""}`}
            onClick={scrollTop}
            role="button"
            aria-label="Scroll to top"
            tabIndex={0}
          >
            <i className="fa fa-chevron-up" />
          </div>
        </footer>

        {/* ── Mobile CTA Bar ── */}
        <div className="footer-enquiryBtn d-flex d-sm-none">
          <a
            className="whatsCall"
            href="https://api.whatsapp.com/send?phone=+919355019172&text=Hi I am Interested in Eldeco Echoes of Eden, Please Share The Details."
            target="_blank" rel="noreferrer"
            aria-label="WhatsApp enquiry for Eldeco Echoes of Eden"
          >
            <strong><i className="fab fa-whatsapp" /> WhatsApp</strong>
          </a>
          <a href="tel:9899911553" aria-label="Call for Eldeco Echoes of Eden">
            <strong><i className="fa fa-phone" /> Call</strong>
          </a>
          <button style={{ all: "unset", cursor: "pointer" }} onClick={() => setShowModal(true)}>
            <strong><i className="fa fa-envelope" /> Enquiry</strong>
          </button>
        </div>

        {/* ── Modal ── */}
        {showModal && (
          <div
            className="modal fade show"
            style={{ display: "block", background: "rgba(0,10,12,0.95)", backdropFilter: "blur(5px)" }}
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
            aria-label="Enquiry popup – Eldeco Echoes of Eden"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content" style={{ position: "relative" }}>
                <div className="modal-header">
                  <button
                    type="button"
                    className="close d-flex align-items-center justify-content-center"
                    onClick={() => setShowModal(false)}
                    aria-label="Close enquiry form"
                    style={{ position: "absolute", top: -10, right: -10, width: 40, height: 40, zIndex: 1, color: "maroon", border: 0, backgroundColor: "#fff", fontSize: 35, cursor: "pointer" }}
                  >
                    ×
                  </button>
                </div>
                <div className="row g-0">
                  <div className="col-md-12">
                    <div className="modal-details">
                      <h2 style={{ fontSize: "1.2rem" }} className="mb-0">Eldeco Echoes of Eden</h2>
                      <p className="banner-price mb-1">
                        <i className="fa-solid fa-location-dot" /> Sector 22D, Yamuna Expressway, Greater Noida
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="modal-body">
                      <h3 style={{ fontSize: "1.1rem" }} className="mb-3 text-serif text-center">Express Your Interest</h3>
                      <EnquiryForm formId="enquiryForm3" requireEmail source="Modal Popup" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

/* ─── App Component with Router ─────────────────────────────────────────── */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<EldecoEchoesOfEden />} />
      <Route path="/privacy-policy" element={<Privacy />} />
    </Routes>
  );
}