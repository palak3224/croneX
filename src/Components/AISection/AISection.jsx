import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AISection.css";

const AISection = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const buttonRef = useRef(null);

  const handleContactNavigation = () => {
    navigate("/contact");
  };

  const handleMouseMove = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 });
  };
  const services = [
    {
      title: "AI Development",
      description: "We optimize processes, decision-making, efficiency, and business growth through intelligent AI solutions that we create."
    },
    {
      title: "Generative AI",
      description: "Generative AI models that seamlessly enhance user engagement through the creation of content, automation of workflows, and boosting productivity."
    },
    {
      title: "Blockchain Development",
      description: "Offer blockchain development solutions, such as DApps and smart contracts, that run on existing blockchain platforms."
    },
    {
      title: "Chatbot Development",
      description: "Building AI-powered applications that simulate human conversion via various types of tools, such as ML and NLP."
    },
    {
      title: "Cryptocurrency Exchange Development",
      description: "We have expertise in building robust cryptocurrency exchange solutions like Bitcoin and Ethereum for trading digital currencies."
    }
  ];

  return (
    <section className="ai-section">
      <div className="ai-container">
        <div className="ai-layout">
          {/* Left Side - Sticky */}
          <div className="ai-left">
            <h2 className="ai-heading">
              Revolutionizing Solutions with Cutting-Edge Technology — Faster, Smarter, and Beyond Industry Standards!
            </h2>
            <div className="ai-cta-card">
              <div className="ai-cta-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="ai-cta-title">Fuel your digital-first idea</h3>
              <p className="ai-cta-subtitle">With 1600+ transformation experts</p>
              <button 
                ref={buttonRef}
                className="ai-cta-button" 
                onClick={handleContactNavigation}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  '--mouse-x': `${mousePosition.x}%`,
                  '--mouse-y': `${mousePosition.y}%`
                }}
              >
                <span className="ai-cta-button-text">Innovate with us</span>
              </button>
            </div>
          </div>

          {/* Right Side - Scrollable */}
          <div className="ai-right">
            <div className="ai-services-list">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="ai-service-card"
                  onClick={handleContactNavigation}
                >
                  <div className="ai-service-content">
                    <h3 className="ai-service-title">{service.title}</h3>
                    <p className="ai-service-description">{service.description}</p>
                  </div>
                  <div className="ai-service-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
