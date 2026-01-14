import React from "react";
import { NavLink } from "react-router-dom";
import financeImg from "../assets/images/finance-img-home.png";

const FintechSolution = () => {
  return (
    <>
      <style>
        {`
          .text-gradient-yellow {
            background: linear-gradient(
              90deg,
              #FFD700 0%,
              #FFA500 25%,
              #FFF700 50%,
              #FFA500 75%,
              #FFD700 100%
            );
            background-size: 200% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
            display: inline-block;
            animation: shine 3s ease-in-out infinite;
          }
          
          @keyframes shine {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
          
          .fintech-capabilities-section {
            margin-top: 1.5rem;
          }
          
          .fintech-capabilities-title {
            text-align: center;
            margin-bottom: 3rem;
          }
          
          .fintech-capabilities-grid {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 3rem;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .fintech-capability-item {
            padding: 1.5rem;
            border-radius: 0.75rem;
            background-color: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          
          .fintech-capability-item:hover {
            background-color: rgba(255, 255, 255, 0.05);
            border-color: rgba(255, 215, 0, 0.3);
            transform: translateY(-4px);
          }
          
          .fintech-capability-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(180deg, #FFD700, #FFA500);
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .fintech-capability-item:hover::before {
            opacity: 1;
          }
          
          .fintech-capability-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            color: #ffffff;
          }
          
          .fintech-capability-content {
            font-size: 0.95rem;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.7);
          }
          
          .fintech-capabilities-image {
            max-width: 300px;
            width: 100%;
            height: auto;
            object-fit: contain;
            border-radius: 1rem;
          }
          
          .fintech-capabilities-left,
          .fintech-capabilities-right {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          
          @media (max-width: 991px) {
            .fintech-capabilities-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            
            .fintech-capabilities-image {
              max-width: 250px;
              margin: 0 auto;
            }
            
            .fintech-capabilities-image-wrapper {
              order: -1;
              margin-bottom: 1rem;
            }
          }
          
          @media (max-width: 767px) {
            .section_fintech_solution .container-small {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            
            .section_fintech_solution .fintech-main-heading {
              font-size: 1.75rem;
              line-height: 1.3;
              padding: 0;
              text-align: center;
            }
            
            .fintech-content-wrapper {
              text-align: center;
            }
            
            .section_fintech_solution .fintech-content-text {
              font-size: 0.95rem;
              text-align: center;
              padding: 0;
              margin-bottom: 1rem;
            }
            
            .section_fintech_solution .spacer-large {
              margin: 2rem 0;
            }
            
            .fintech-capabilities-section {
              margin-top: 2rem;
            }
            
            .fintech-capabilities-title {
              margin-bottom: 2rem;
            }
            
            .fintech-capabilities-title h3 {
              font-size: 1.5rem;
              padding: 0 1rem;
            }
            
            .fintech-capabilities-grid {
              gap: 1.5rem;
              padding: 0 0.5rem;
            }
            
            .fintech-capability-item {
              padding: 1.25rem;
            }
            
            .fintech-capability-title {
              font-size: 1.1rem;
              margin-bottom: 0.5rem;
            }
            
            .fintech-capability-content {
              font-size: 0.9rem;
              line-height: 1.6;
            }
            
            .fintech-capabilities-image {
              max-width: 200px;
            }
            
            .fintech-navigation-button {
              margin-top: 2rem;
              padding: 0 1rem;
            }
            
            .fintech-button {
              width: 100%;
              justify-content: center;
              padding: 0.875rem 1.5rem;
              font-size: 0.95rem;
            }
            
            .fintech-capabilities-left,
            .fintech-capabilities-right {
              gap: 1.25rem;
            }
          }
          
          @media (max-width: 480px) {
            .section_fintech_solution h2 {
              font-size: 1.5rem;
            }
            
            .section_fintech_solution .text-size-medium {
              font-size: 0.9rem;
              padding: 0;
            }
            
            .fintech-capabilities-title h3 {
              font-size: 1.25rem;
            }
            
            .fintech-capability-item {
              padding: 1rem;
            }
            
            .fintech-capability-title {
              font-size: 1rem;
            }
            
            .fintech-capability-content {
              font-size: 0.85rem;
            }
            
            .fintech-capabilities-image {
              max-width: 180px;
            }
            
            .fintech-button {
              padding: 0.75rem 1.25rem;
              font-size: 0.9rem;
            }
          }
          
          .fintech-main-heading {
            word-wrap: break-word;
            hyphens: auto;
          }
          
          .fintech-content-wrapper {
            max-width: 100%;
          }
          
          .fintech-content-text {
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
          
          .fintech-navigation-button {
            display: flex;
            justify-content: center;
            margin-top: 3rem;
          }
          
          .fintech-button {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem 2rem;
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
            color: #000000;
            font-weight: 600;
            font-size: 1rem;
            border-radius: 0.5rem;
            text-decoration: none;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
          }
          
          .fintech-button:hover {
            background: linear-gradient(135deg, #FFA500 0%, #FFD700 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(255, 215, 0, 0.3);
          }
          
          .fintech-button svg {
            width: 20px;
            height: 20px;
            transition: transform 0.3s ease;
          }
          
          .fintech-button:hover svg {
            transform: translateX(4px);
          }
        `}
      </style>
      <section className="section_fintech_solution">
        <div className="padding-global">
          <div className="container-small">
            <div className="padding-section-medium">
              <div className="text-align-center">
                <h2
                  slide-in=""
                  className="fintech-main-heading"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <span className="text-gradient-yellow">FinTech Solutions</span>{" "}
                  <span className="text-gradient-grey">
                    Built for Scale, Security & Compliance
                  </span>
                </h2>
              {/* <div className="spacer-large"></div>
              <p
                slide-in=""
                className="text-size-large text-color-secondary"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  opacity: 1,
                  transform: "translate(0px, 0px)",
                }}
              >
                We Power the Technology Behind Modern Investing Platforms
              </p> */}
              <div className="spacer-large"></div>
              <div className="fintech-content-wrapper">
                <p
                  slide-in=""
                  className="text-size-medium fintech-content-text"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    textAlign: "start",
                    marginBottom: "15px",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  At croneX, FinTech isn't just another service — it's our core
                  expertise. We build secure, compliant, and scalable FinTech
                  platforms for Mutual Funds, Stock Trading, Wealth Management,
                  and Investment Ecosystems.
                </p>
                <p
                  slide-in=""
                  className="text-size-medium fintech-content-text"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    textAlign: "start",
                    marginBottom: "15px",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  From investor onboarding to transaction processing and
                  reporting, we engineer end-to-end FinTech systems that handle
                  high volumes, strict regulations, and real-time performance
                  without compromise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FinTech Capabilities Section */}
      <div className="fintech-capabilities-section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
                <div className="fintech-capabilities-title">
                  <h3
                    slide-in=""
                    className="heading-style-h3"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      opacity: 1,
                      transform: "translate(0px, 0px)",
                    }}
                  >
                    <span className="text-gradient-grey">Our </span>
                    <span className="text-gradient-blue">FinTech Capabilities</span>
                  </h3>
                </div>
                
                <div className="fintech-capabilities-grid">
                  <div className="fintech-capabilities-left">
                    <div
                      slide-in=""
                      className="fintech-capability-item"
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        opacity: 1,
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      <h4 className="fintech-capability-title">
                        Mutual Fund Platforms
                      </h4>
                      <p className="fintech-capability-content">
                        Comprehensive platforms for fund management, NAV
                        calculation, investor services, and regulatory compliance
                        with real-time processing capabilities.
                      </p>
                    </div>
                    
                    <div
                      slide-in=""
                      className="fintech-capability-item"
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        opacity: 1,
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      <h4 className="fintech-capability-title">
                        Stock Trading & Investment Solutions
                      </h4>
                      <p className="fintech-capability-content">
                        Advanced trading systems with order management, market
                        data integration, risk analytics, and seamless execution
                        for brokers and investors.
                      </p>
                    </div>
                  </div>
                  
                  <div className="fintech-capabilities-image-wrapper">
                    <img
                      src={financeImg}
                      alt="FinTech Solutions"
                      className="fintech-capabilities-image"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="fintech-capabilities-right">
                    <div
                      slide-in=""
                      className="fintech-capability-item"
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        opacity: 1,
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      <h4 className="fintech-capability-title">
                        Wealth & Investment Technology
                      </h4>
                      <p className="fintech-capability-content">
                        End-to-end wealth management solutions with portfolio
                        analytics, financial planning tools, and personalized
                        investment advisory platforms.
                      </p>
                    </div>
                    
                    <div
                      slide-in=""
                      className="fintech-capability-item"
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        opacity: 1,
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      <h4 className="fintech-capability-title">
                        FinTech Infrastructure & Security
                      </h4>
                      <p className="fintech-capability-content">
                        Enterprise-grade infrastructure with multi-layer security,
                        encryption, fraud detection, and compliance frameworks for
                        mission-critical financial operations.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="fintech-navigation-button">
                  <NavLink to="/fintech-solutions" className="fintech-button">
                    <span>Explore FinTech Solutions</span>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 3L11 8L6 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FintechSolution;
