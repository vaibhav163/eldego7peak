// import React from "react";
// import { FaWhatsapp } from "react-icons/fa";

// const FloatingWhatsApp = ({ phoneNumber = "919990780499", message = "Hi, I want to know more" }) => {
//   const handleClick = () => {
//     const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div
//       onClick={handleClick}
//       style={{
//         position: "fixed",
//         bottom: "20px",
//         right: "20px",
//         backgroundColor: "#25D366",
//          borderRadius: "50%",
//         width: "60px",
//         height: "60px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
//         cursor: "pointer",
//         zIndex: 1000,
//       }}
//     >
//       <FaWhatsapp size={30} color="#fff" />
//     </div>
//   );
// };

// export default FloatingWhatsApp;
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/919899911553"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp className="whatsapp-icon" />

      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          width: 65px;
          height: 65px;
          bottom: 25px;
          right: 25px;
          background: #25d366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
          z-index: 9999;
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          background: #1ebe5d;
        }

        .whatsapp-icon {
          font-size: 38px;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }

          70% {
            box-shadow: 0 0 0 18px rgba(37, 211, 102, 0);
          }

          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @media (max-width: 768px) {
          .whatsapp-float {
            width: 58px;
            height: 58px;
            bottom: 20px;
            right: 20px;
          }

          .whatsapp-icon {
            font-size: 34px;
          }
        }
      `}</style>
    </a>
  );
};

export default FloatingWhatsApp;