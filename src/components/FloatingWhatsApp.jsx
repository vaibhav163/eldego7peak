import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = ({ phoneNumber = "919990780499", message = "Hi, I want to know more" }) => {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
         borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      <FaWhatsapp size={30} color="#fff" />
    </div>
  );
};

export default FloatingWhatsApp;