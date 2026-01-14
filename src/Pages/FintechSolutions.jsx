import React from "react";
import financeImg from "../assets/images/finance-img-main.png";

const FintechSolutions = () => {
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
          
          .fintech-solutions-page {
            padding-top: 2rem;
          }
          
          .fintech-hero-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
            padding: 4rem 0;
            margin-bottom: 4rem;
          }
          
          .fintech-hero-content-wrapper {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .fintech-hero-title {
            margin-bottom: 1rem;
          }
          
          .fintech-hero-subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 1rem;
          }
          
          .fintech-hero-text {
            color: rgba(255, 255, 255, 0.7);
            font-size: 1rem;
            line-height: 1.8;
          }
          
          .fintech-hero-image {
            width: 100%;
            height: auto;
            object-fit: contain;
            border-radius: 1rem;
          }
          
          .fintech-capabilities-section {
            margin: 4rem 0;
          }
          
          .fintech-capabilities-title {
            text-align: center;
            margin-bottom: 3rem;
          }
          
          .fintech-solutions-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-bottom: 4rem;
          }
          
          .fintech-solution-card {
            padding: 2rem;
            border-radius: 1rem;
            background-color: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          
          .fintech-solution-card:hover {
            background-color: rgba(255, 255, 255, 0.05);
            border-color: rgba(255, 215, 0, 0.3);
            transform: translateY(-4px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
          }
          
          .fintech-solution-card::before {
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
          
          .fintech-solution-card:hover::before {
            opacity: 1;
          }
          
          .fintech-solution-icon {
            width: 60px;
            height: 60px;
            background: #4a94f9;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
          }
          
          .fintech-solution-icon svg {
            width: 32px;
            height: 32px;
            fill: #ffffff;
          }
          
          .fintech-solution-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #ffffff;
          }
          
          .fintech-solution-features {
            list-style: none;
            padding: 0;
            margin: 0;
            margin-top: 1rem;
          }
          
          .fintech-solution-features li {
            padding: 0.5rem 0;
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.95rem;
            position: relative;
            padding-left: 1.5rem;
            display: flex;
            align-items: center;
          }
          
          .fintech-solution-features li svg {
            position: absolute;
            left: 0;
            width: 16px;
            height: 16px;
            fill: #FFD700;
          }
          
          .fintech-why-section {
            margin: 4rem 0;
            padding: 3rem;
            border-radius: 1rem;
            background-color: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .fintech-why-title {
            margin-bottom: 2rem;
          }
          
          .fintech-why-points {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            margin-bottom: 2rem;
          }
          
          .fintech-why-point {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            color: rgba(255, 255, 255, 0.8);
            font-size: 1rem;
            line-height: 1.7;
          }
          
          .fintech-why-point svg {
            width: 24px;
            height: 24px;
            fill: #FFD700;
            flex-shrink: 0;
            margin-top: 2px;
          }
          
          .fintech-why-text {
            color: rgba(255, 255, 255, 0.7);
            font-size: 1.1rem;
            line-height: 1.8;
            margin-top: 1rem;
          }
          
          .fintech-cta-section {
            margin: 4rem 0;
            padding: 4rem 3rem;
            border-radius: 1.5rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          
          .fintech-cta-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #FFD700, #FFA500, #FFD700);
            background-size: 200% 100%;
            animation: shine 3s ease-in-out infinite;
          }
          
          .fintech-cta-title {
            margin-bottom: 1.5rem;
          }
          
          .fintech-cta-text {
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.1rem;
            line-height: 1.8;
            margin-bottom: 2.5rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .fintech-cta-items {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            margin-bottom: 2.5rem;
            align-items: flex-start;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .fintech-cta-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.1rem;
            font-weight: 500;
            width: 100%;
          }
          
          .fintech-cta-item svg {
            width: 28px;
            height: 28px;
            flex-shrink: 0;
          }
          
          .fintech-cta-buttons {
            display: flex;
            justify-content: center;
          }
          
          .fintech-cta-button {
            display: inline-flex;
            align-items: center;
            gap: 1rem;
            padding: 1.25rem 3rem;
            background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
            color: #000000;
            font-weight: 700;
            font-size: 1.1rem;
            border-radius: 0.75rem;
            text-decoration: none;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(255, 215, 0, 0.2);
            position: relative;
            overflow: hidden;
          }
          
          .fintech-cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: left 0.5s ease;
          }
          
          .fintech-cta-button:hover::before {
            left: 100%;
          }
          
          .fintech-cta-button:hover {
            background: linear-gradient(135deg, #FFA500 0%, #FFD700 100%);
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
          }
          
          .fintech-cta-button svg {
            width: 20px;
            height: 20px;
            stroke: currentColor;
            transition: transform 0.3s ease;
          }
          
          .fintech-cta-button:hover svg {
            transform: translateX(4px);
          }
          
          @media (max-width: 991px) {
            .fintech-hero-section {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            
            .fintech-solutions-grid {
              grid-template-columns: 1fr;
            }
            
            .fintech-why-points {
              grid-template-columns: 1fr;
            }
            
            .fintech-cta-buttons {
              flex-direction: column;
            }
            
            .fintech-cta-button {
              width: 100%;
              justify-content: center;
            }
          }
        `}
      </style>
      <main className="main-wrapper">
        <section className="section_fintech_solutions_page fintech-solutions-page">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-medium">
                {/* Hero Section - Left Text, Right Image */}
                <div className="fintech-hero-section">
                  <div className="fintech-hero-content-wrapper">
                    <h1 className="fintech-hero-title heading-style-h2">
                      <span className="text-gradient-yellow">FinTech Solutions</span>{" "}
                      <span className="text-gradient-grey">
                        Built for Scale, Security & Compliance
                      </span>
                    </h1>
                    <p className="fintech-hero-subtitle">
                      We Power the Technology Behind Modern Investing Platforms
                    </p>
                    <div className="fintech-hero-text">
                      <p>
                        At croneX, FinTech isn't just another service — it's our core
                        expertise. We build secure, compliant, and scalable FinTech
                        platforms for Mutual Funds, Stock Trading, Wealth Management,
                        and Investment Ecosystems.
                      </p>
                      <p style={{ marginTop: "1rem" }}>
                        From investor onboarding to transaction processing and
                        reporting, we engineer end-to-end FinTech systems that handle
                        high volumes, strict regulations, and real-time performance
                        without compromise.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={financeImg}
                      alt="FinTech Solutions"
                      className="fintech-hero-image"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Our FinTech Capabilities Section */}
                <div className="fintech-capabilities-section">
                  <div className="fintech-capabilities-title">
                    <h2 className="heading-style-h3">
                      <span className="text-gradient-grey">Our </span>
                      <span className="text-gradient-blue">FinTech Capabilities</span>
                    </h2>
                  </div>
                  
                  <div className="fintech-solutions-grid">
                    {/* Mutual Fund Platforms */}
                    <div className="fintech-solution-card">
                      <div className="fintech-solution-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" fill="currentColor"/>
                          <path d="M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" fill="currentColor"/>
                        </svg>
                      </div>
                      <h3 className="fintech-solution-title">
                        Mutual Fund Platforms
                      </h3>
                      <ul className="fintech-solution-features">
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          Investor onboarding & KYC workflows
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          Transaction processing & reconciliation
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          Portfolio dashboards & reporting
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          Integration with exchanges, RTAs & payment gateways
                        </li>
                      </ul>
                    </div>
                    
                    {/* Stock Trading & Investment Solutions */}
                    <div className="fintech-solution-card">
                      <div className="fintech-solution-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" fill="currentColor"/>
                        </svg>
                      </div>
                      <h3 className="fintech-solution-title">
                        Stock Trading & Investment Solutions
                      </h3>
                      <ul className="fintech-solution-features">
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          Trading platforms & investor portals
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          Real-time data & API integrations
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          Secure order management systems
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          Scalable backend architecture
                        </li>
                      </ul>
                    </div>
                    
                    {/* Wealth & Investment Technology */}
                    <div className="fintech-solution-card">
                      <div className="fintech-solution-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor"/>
                        </svg>
                      </div>
                      <h3 className="fintech-solution-title">
                        Wealth & Investment Technology
                      </h3>
                      <ul className="fintech-solution-features">
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          Goal-based investment platforms
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          Advisory & distributor platforms
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          Portfolio analytics & insights
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          Custom reporting & compliance modules
                        </li>
                      </ul>
                    </div>
                    
                    {/* FinTech Infrastructure & Security */}
                    <div className="fintech-solution-card">
                      <div className="fintech-solution-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" fill="currentColor"/>
                        </svg>
                      </div>
                      <h3 className="fintech-solution-title">
                        FinTech Infrastructure & Security
                      </h3>
                      <ul className="fintech-solution-features">
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          High-availability system architecture
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          Data encryption & cybersecurity best practices
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          Regulatory & compliance-ready systems
                        </li>
                        <li>
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                          </svg>
                          Cloud-native & scalable deployments
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Why croneX for FinTech Section */}
                <div className="fintech-why-section">
                  <h2 className="fintech-why-title heading-style-h3">
                    <span className="text-gradient-grey">Why </span>
                    <span className="text-gradient-blue">croneX for FinTech?</span>
                  </h2>
                  <div className="fintech-why-points">
                    <div className="fintech-why-point">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                      </svg>
                      <span>
                        Deep understanding of <strong>financial workflows & compliance</strong>
                      </span>
                    </div>
                    <div className="fintech-why-point">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                      </svg>
                      <span>
                        Experience with <strong>Mutual Funds, Stocks & Investment products</strong>
                      </span>
                    </div>
                    <div className="fintech-why-point">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                      </svg>
                      <span>Secure, scalable & audit-ready architecture</span>
                    </div>
                    <div className="fintech-why-point">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor"/>
                      </svg>
                      <span>
                        Built for <strong>growth, performance & long-term reliability</strong>
                      </span>
                    </div>
                  </div>
                  <p className="fintech-why-text">
                    We don't just build FinTech products.
                    <br />
                    We build <strong>platforms that institutions trust and investors rely on.</strong>
                  </p>
                </div>
                
                {/* CTA Section */}
                <div className="fintech-cta-section">
                  <h2 className="fintech-cta-title heading-style-h3">
                    <span className="text-gradient-grey">Ready to Build Your </span>
                    <span className="text-gradient-blue">FinTech Platform?</span>
                  </h2>
                  <p className="fintech-cta-text">
                    Whether you're launching a new investment product or scaling an existing FinTech system,
                    <br />
                    <strong>croneX</strong> is your <strong>technology partner from day one.</strong>
                  </p>
                  <div className="fintech-cta-items">
                    <div className="fintech-cta-item">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="#FFD700" opacity="0.2"/>
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#FFD700"/>
                      </svg>
                      <span><strong>Let's Build Secure & Scalable FinTech Together</strong></span>
                    </div>
                    <div className="fintech-cta-item">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="#FFD700" opacity="0.2"/>
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#FFD700"/>
                      </svg>
                      <span><strong>Talk to Our FinTech Experts</strong></span>
                    </div>
                  </div>
                  <div className="fintech-cta-buttons">
                    <a
                      href="https://wa.me/919407084533?text=Hello!%20I'm%20interested%20in%20learning%20more%20about%20your%20FinTech%20Solutions.%20Can%20we%20discuss%20how%20croneX%20can%20help%20build%20our%20FinTech%20platform?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fintech-cta-button"
                    >
                      <span>Talk to Our FinTech Experts</span>
                      <svg
                        currentwidth="16"
                        currentheight="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 3L11 8L6 13"
                          stroke="CurrentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FintechSolutions;
