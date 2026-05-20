/* ─────────────────────────────────────────────────────────────
   CHATBOT COMPONENT FOR ELDECO ECHOES OF EDEN
   ADD THIS BELOW YOUR MAIN COMPONENT
───────────────────────────────────────────── */

import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const chatbotQuestions = [
  {
    id: 1,
    question: "Hi 👋 What type of property are you looking for?",
    options: ["3 BHK", "4 BHK", "Penthouse"],
  },
  {
    id: 2,
    question: "What is your budget range?",
    options: ["1.5 Cr - 2 Cr", "2 Cr - 3 Cr", "3 Cr+"],
  },
  {
    id: 3,
    question: "When are you planning to buy?",
    options: ["Immediately", "Within 3 Months", "Just Exploring"],
  },
  {
    id: 4,
    question: "Would you like a site visit?",
    options: ["Yes", "No"],
  },
];

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [step, setStep] = useState(0);

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: chatbotQuestions[0].question,
    },
  ]);

  const [answers, setAnswers] = useState({});

  const [showForm, setShowForm] = useState(false);

  const chatEndRef = useRef(null);

  const formRef = useRef();

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleOptionClick = (option) => {
    const currentQuestion = chatbotQuestions[step];

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: option,
      },
    ]);

    const updatedAnswers = {
      ...answers,
      [currentQuestion.question]: option,
    };

    setAnswers(updatedAnswers);

    if (step + 1 < chatbotQuestions.length) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: chatbotQuestions[step + 1].question,
          },
        ]);
      }, 500);

      setStep(step + 1);
    } else {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Great 👍 Please share your details to get price list & site visit.",
          },
        ]);

        setShowForm(true);
      }, 500);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const templateParams = {
      from_name: formData.get("name"),
      mobile: formData.get("mobile"),
      email: formData.get("email"),
      project: "Eldeco Echoes of Eden",
      location: "Sector 22D Yamuna Expressway",
      message: JSON.stringify(answers, null, 2),
    };

    try {
      await emailjs.send(
        "service_fkmfynb",
        "template_bdjcyq6",
        templateParams,
        "xLfYDZXLlR6IeQ-C6"
      );

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "✅ Thank you! Our team will contact you shortly.",
        },
      ]);

      formRef.current.reset();

      setShowForm(false);

      setTimeout(() => {
        window.open(
          "https://wa.me/919899911553?text=Hi%20I%20am%20interested%20in%20Eldeco%20Echoes%20of%20Eden",
          "_blank"
        );
      }, 1000);
    } catch (error) {
      alert("Something went wrong.");
      console.log(error);
    }
  };

  return (
    <>
      {/* FLOATING BUTTON */}

      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {/* CHATBOX */}

      {isOpen && (
        <div className="chatbot-box">
          {/* HEADER */}

          <div className="chatbot-header">
            <div>
              <h3>Eldeco Assistant</h3>
              <p>Instant Property Help</p>
            </div>
          </div>

          {/* BODY */}

          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.type === "bot" ? "bot" : "user"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* OPTIONS */}

            {!showForm && step < chatbotQuestions.length && (
              <div className="options-container">
                {chatbotQuestions[step].options.map(
                  (option, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        handleOptionClick(option)
                      }
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            )}

            {/* FORM */}

            {showForm && (
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="chat-form"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Phone Number"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />

                <button type="submit">
                  Submit Details
                </button>
              </form>
            )}

            <div ref={chatEndRef}></div>
          </div>
        </div>
      )}

      {/* STYLES */}

      <style jsx>{`
        .chatbot-toggle {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 65px;
          height: 65px;
          border-radius: 50%;
          border: none;
          background: #02994a;
          color: white;
          font-size: 28px;
          cursor: pointer;
          z-index: 9999;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
        }

        .chatbot-box {
          position: fixed;
          bottom: 100px;
          right: 20px;
          width: 380px;
          max-width: calc(100vw - 20px);
          height: 620px;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          z-index: 9999;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
        }

        .chatbot-header {
          background: #012518;
          color: white;
          padding: 18px;
        }

        .chatbot-header h3 {
          margin: 0;
          font-size: 20px;
        }

        .chatbot-header p {
          margin: 4px 0 0;
          font-size: 12px;
          opacity: 0.7;
        }

        .chatbot-body {
          flex: 1;
          overflow-y: auto;
          padding: 18px;
          background: #f6f6f6;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .chat-message {
          max-width: 85%;
          padding: 14px 16px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.5;
        }

        .chat-message.bot {
          background: white;
          align-self: flex-start;
        }

        .chat-message.user {
          background: #02994a;
          color: white;
          align-self: flex-end;
        }

        .options-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .options-container button {
          border: none;
          background: #012518;
          color: white;
          padding: 10px 14px;
          border-radius: 30px;
          cursor: pointer;
          font-size: 13px;
          transition: 0.3s;
        }

        .options-container button:hover {
          background: #02994a;
        }

        .chat-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
        }

        .chat-form input {
          padding: 14px;
          border-radius: 12px;
          border: 1px solid #ddd;
          outline: none;
          font-size: 14px;
        }

        .chat-form button {
          border: none;
          background: #02994a;
          color: white;
          padding: 14px;
          border-radius: 12px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .chatbot-box {
            width: calc(100vw - 20px);
            right: 10px;
            left: 10px;
            bottom: 90px;
            height: 75vh;
          }

          .chatbot-toggle {
            right: 15px;
            bottom: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingChatbot;