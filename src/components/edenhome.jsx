import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import emailjs from "@emailjs/browser";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
];

const HeroSection = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Form Submitted Successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <section className="hero-section">
      {/* SWIPER BACKGROUND */}
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        navigation
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide-bg"
              style={{
                backgroundImage: `url(${slide})`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* DARK OVERLAY */}
      <div className="overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">
        {/* LEFT CONTENT */}
        <div className="left-content">
          <div className="vertical-text">
            Sector 22D, Yamuna Expressway
          </div>

          <div className="main-content">
            <h1>ELDECO ECHOES OF EDEN</h1>
            <h3>Sector 22D, Yamuna Expressway</h3>

            <ul>
              <li>Land Parcel : 5 Acre</li>
              <li>3 BHK Apartments & Penthouse</li>
              <li>80% Open With 3-Acre Central Greens</li>
              <li>Payment Plan 30:40:30</li>
            </ul>

            {/* INFO BOXES */}
            <div className="info-boxes">
              <div className="info-box">
                <h4>Starting Price</h4>
                <p>₹ 1.39 Cr*</p>
              </div>

              <div className="info-box">
                <h4>TYPE</h4>
                <p>3 BHK Flats & Penthouse</p>
              </div>

              <div className="info-box">
                <h4>Land Area</h4>
                <p>5 Acres</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="form-container">
          <h2>Book A Site Visit !</h2>

          <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Enter Name" required />

            <input type="email" name="user_email" placeholder="Enter Email" required />

            <input type="tel" name="user_phone" placeholder="Enter Number" required />

            <textarea
              name="message"
              placeholder="Message.."
              rows="4"
            ></textarea>

            <button type="submit">Submit Now</button>

            <div className="checkbox">
              <input type="checkbox" required />
              <p>
                I authorize company representatives to Call, SMS, Email or
                WhatsApp me about its products and offers.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* STYLING */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        .hero-section {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .hero-swiper {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .slide-bg {
          width: 100%;
          height: 100vh;
          background-size: cover;
          background-position: center;
        }

        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.45);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 5;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          padding: 50px;
          color: white;
        }

        .left-content {
          display: flex;
          align-items: center;
          gap: 25px;
          width: 65%;
        }

        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 22px;
          font-weight: 500;
          opacity: 0.8;
        }

        .main-content h1 {
          font-size: 62px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .main-content h3 {
          font-size: 32px;
          margin-bottom: 35px;
        }

        .main-content ul {
          list-style: none;
        }

        .main-content ul li {
          font-size: 24px;
          margin-bottom: 18px;
          position: relative;
          padding-left: 35px;
          font-weight: 500;
        }

        .main-content ul li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: white;
        }

        .info-boxes {
          display: flex;
          gap: 20px;
          margin-top: 45px;
          flex-wrap: wrap;
        }

        .info-box {
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(8px);
          border-radius: 18px;
          padding: 25px;
          min-width: 240px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .info-box h4 {
          color: #f5b400;
          font-size: 28px;
          margin-bottom: 20px;
        }

        .info-box p {
          font-size: 28px;
          font-weight: 600;
        }

        .form-container {
          width: 420px;
          background: rgba(255, 255, 255, 0.9);
          padding: 35px;
          border-radius: 10px;
          color: black;
          height: fit-content;
          margin-top: auto;
          margin-bottom: auto;
        }

        .form-container h2 {
          font-size: 42px;
          margin-bottom: 25px;
          font-weight: 700;
        }

        .form-container form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-container input,
        .form-container textarea {
          width: 100%;
          padding: 18px;
          border: 1px solid #555;
          border-radius: 12px;
          font-size: 18px;
          outline: none;
        }

        .form-container button {
          background: black;
          color: white;
          border: none;
          padding: 18px;
          font-size: 22px;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
        }

        .form-container button:hover {
          transform: translateY(-2px);
        }

        .checkbox {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          line-height: 1.5;
        }

        .checkbox input {
          width: 18px;
          height: 18px;
          margin-top: 3px;
        }

        /* SWIPER NAVIGATION */
        .swiper-button-next,
        .swiper-button-prev {
          color: #f5b400 !important;
          width: 60px !important;
          height: 60px !important;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 24px !important;
        }

        /* RESPONSIVE */
        @media (max-width: 1200px) {
          .hero-content {
            flex-direction: column;
            overflow-y: auto;
            gap: 40px;
          }

          .left-content {
            width: 100%;
          }

          .form-container {
            width: 100%;
            max-width: 500px;
          }

          .main-content h1 {
            font-size: 42px;
          }

          .main-content h3 {
            font-size: 24px;
          }

          .main-content ul li {
            font-size: 20px;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 20px;
          }

          .left-content {
            flex-direction: column;
            align-items: flex-start;
          }

          .vertical-text {
            writing-mode: initial;
            transform: none;
          }

          .main-content h1 {
            font-size: 32px;
          }

          .info-box {
            width: 100%;
          }

          .form-container h2 {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;