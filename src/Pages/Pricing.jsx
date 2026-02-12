import React, { useState, useRef, useEffect } from 'react';
import {
  Android, Apple, Language, ViewQuilt,
  Favorite, PlayCircle, LocalTaxi, Flight, FitnessCenter, ShoppingCart,
  PointOfSale, School, RocketLaunch, CurrencyBitcoin, Psychology,
  LocalHospital, LocalGroceryStore, Restaurant, AccountBalanceWallet,
  TrendingUp, DirectionsCar, Info, CheckCircle, Settings, Brush, Movie,
  ViewModule, ViewColumn, ViewCompact, Widgets, People
} from '@mui/icons-material';
import './pricing.css';
import PricingHeader from './PricingHeader';
import Whatsapp from '../assets/images/whatsapp.png';

const Pricing = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    tech: [],
    appType: [],
    uiType: [],
    screens: [],
    urgency: []
  });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const calculatorRef = useRef(null);

  const techOptions = [
    { id: 'android', label: 'Android', icon: <Android /> },
    { id: 'ios', label: 'iOS', icon: <Apple /> },
    { id: 'web', label: 'Web App', icon: <Language /> },
    { id: 'hybrid', label: 'Hybrid (Android+iOS)', icon: <ViewQuilt /> },
  ];

  const appTypeOptions = [
    { id: 'dating', label: 'Dating App', icon: <Favorite /> },
    { id: 'video', label: 'Video Streaming', icon: <PlayCircle /> },
    { id: 'taxi', label: 'Taxi App', icon: <LocalTaxi /> },
    { id: 'travel', label: 'Tours & Travel App', icon: <Flight /> },
    { id: 'fitness', label: 'Fitness App', icon: <FitnessCenter /> },
    { id: 'ecommerce', label: 'E-commerce App', icon: <ShoppingCart /> },
    { id: 'pos', label: 'POS App', icon: <PointOfSale /> },
    { id: 'elearning', label: 'E-learning App', icon: <School /> },
    { id: 'mvp', label: 'MVP', icon: <RocketLaunch /> },
    { id: 'blockchain', label: 'Blockchain', icon: <CurrencyBitcoin /> },
    { id: 'ai', label: 'AI', icon: <Psychology /> },
    { id: 'healthcare', label: 'Healthcare', icon: <LocalHospital /> },
    { id: 'grocery', label: 'Grocery', icon: <LocalGroceryStore /> },
    { id: 'food', label: 'Food', icon: <Restaurant /> },
    { id: 'ewallet', label: 'ewallet', icon: <AccountBalanceWallet /> },
    { id: 'trading', label: 'Trading', icon: <TrendingUp /> },
    { id: 'automobile', label: 'Automobile', icon: <DirectionsCar /> },
    { id: 'others', label: 'Others', icon: <Info /> },
  ];

  const uiTypeOptions = [
    { id: 'basic', label: 'Basic UX/UI', icon: <Settings /> },
    { id: 'custom', label: 'Custom UI', icon: <Brush /> },
    { id: 'animated', label: 'Animated UI', icon: <Movie /> },
  ];

  const screensOptions = [
    { id: '5', label: '5 Screens', icon: <ViewModule /> },
    { id: '5-10', label: '5-10 Screens', icon: <ViewColumn /> },
    { id: '10-15', label: '10-15 Screens', icon: <ViewCompact /> },
    { id: '15+', label: 'Above 15 Screens', icon: <Widgets /> },
  ];

  const urgencyOptions = [
    { id: 'low', label: 'Low', icon: <TrendingUp style={{ transform: 'rotate(-45deg)' }} /> },
    { id: 'medium', label: 'Medium', icon: <TrendingUp /> },
    { id: 'high', label: 'High', icon: <TrendingUp style={{ transform: 'rotate(45deg)' }} /> },
  ];

  const toggleSelection = (category, id) => {
    setSelections(prev => {
      const current = prev[category];
      const exists = current.includes(id);
      if (exists) {
        return { ...prev, [category]: current.filter(item => item !== id) };
      } else {
        return { ...prev, [category]: [...current, id] };
      }
    });
  };

  const scrollToCalculator = () => {
    if (calculatorRef.current) {
      const element = calculatorRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset for header
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    if (step === 1 && selections.tech.length === 0) {
      alert('Please select at least one technology stack.');
      return;
    }
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSkip = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  // Auto-scroll when step changes
  useEffect(() => {
    // Small delay to ensure DOM has updated
    const timer = setTimeout(() => {
      scrollToCalculator();
    }, 150);
    
    return () => clearTimeout(timer);
  }, [step]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Format selections for email
    const formatSelections = (category, options) => {
      const selectedItems = selections[category] || [];
      if (selectedItems.length === 0) return 'Not selected';
      
      const labels = selectedItems.map(id => {
        const option = options.find(opt => opt.id === id);
        return option ? option.label : id;
      });
      return labels.join(', ');
    };

    const emailBody = `
Software Query Submission - Cost Calculator

Contact Information:
- Full Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone}
${formData.projectDetails ? `- Project Details: ${formData.projectDetails}` : ''}

Project Requirements:

1. Technology Stack:
${formatSelections('tech', techOptions)}

2. App Type:
${formatSelections('appType', appTypeOptions)}

3. UI Type:
${formatSelections('uiType', uiTypeOptions)}

4. Number of Screens:
${formatSelections('screens', screensOptions)}

5. Development Urgency:
${formatSelections('urgency', urgencyOptions)}
    `.trim();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("access_key", "a7efff45-107d-4674-bc14-850db37cdc98");
    formDataToSubmit.append("subject", "Software Query - Cost Calculator Submission");
    formDataToSubmit.append("from_name", formData.fullName);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("phone", formData.phone);
    formDataToSubmit.append("message", emailBody);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit
      });

      const data = await response.json();
      
      if (data.success) {
        // Reset form
        setStep(1);
        setSelections({
          tech: [],
          appType: [],
          uiType: [],
          screens: [],
          urgency: []
        });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          projectDetails: ''
        });
        setShowSuccessModal(true);
      } else {
        setErrorMessage("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      setErrorMessage("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const phoneNumber = "919407084533";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const closeModal = () => {
    setShowSuccessModal(false);
    setErrorMessage("");
  };

  return (
    <div className="">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="contact-success-modal-overlay" onClick={closeModal}>
          <div className="contact-success-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="contact-success-modal-close" 
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="contact-success-modal-content">
              <div className="contact-success-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="contact-success-title">
                Thank You for Your Query!
              </h2>
              <p className="contact-success-message">
                Your software query has been submitted successfully. We will reach out to you soon with the cost estimation.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-success-whatsapp-button"
              >
                <img
                  src={Whatsapp}
                  alt="WhatsApp"
                  className="contact-success-whatsapp-icon"
                />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

<div>
    <PricingHeader/>
</div>

{/* MFD Pricing Section */}
      <section className="mfd-pricing-section">
        <div className="container">
          <div className="mfd-header">
            <h1 className="mfd-title">A plan for every need</h1>
            <p className="mfd-subtitle">Safety trade, earn, & borrow digital assets with top-tier security.</p>
          </div>

          <div className="mfd-grid">
            <div className="mfd-card">
              <div className="card-top">
                <span className="plan-name">MFD Starter Plan</span>
                <p className="plan-deliver"> DELIVERY (6–8 DAYS)</p>
                <h2 className="plan-price">₹12,000 – ₹18,000</h2>
                <p className="plan-desc">Ideal for individual MFDs & new financial advisors</p>
                <button className="mfd-btn ghost">Get started</button>
              </div>
              <div className="card-features">
                <p className="features-label">FEATURES</p>
                <ul>
                  <li><CheckCircle className="icon" /> Up to 5 Pages</li>
                  <li><CheckCircle className="icon" /> Finance-Themed UI</li>
                  <li><CheckCircle className="icon" /> Mobile-Responsive</li>
                  <li><CheckCircle className="icon" /> WhatsApp Integration</li>
                  <li><CheckCircle className="icon" /> Basic SEO</li>
                  <li className="icon rev">1 Revision</li>
                </ul>
              </div>
            </div>

          
            <div className="mfd-card popular">
              <div className="popular-badge">Most Preferred</div>
              <div className="card-top">
                <span className="plan-name">MFD Growth Plan</span>
                  <p className="plan-deliver"> DELIVERY (10-14 DAYS)</p>
                <h2 className="plan-price">₹25,000 – ₹40,000</h2>
                <p className="plan-desc">Established MFDs & wealth advisors</p>
                <button className="mfd-btn solid">Get started</button>
              </div>
              <div className="card-features">
                <p className="features-label">FEATURES</p>
                <ul>
                  <li><CheckCircle className="icon" /> Up to 12 Pages</li>
                  <li><CheckCircle className="icon" /> Investor Onboarding</li>
                  <li><CheckCircle className="icon" /> SIP / Lumpsum CTA</li>
                  <li><CheckCircle className="icon" /> Compliance-Ready</li>
                  <li><CheckCircle className="icon" /> Market Updates Blog</li>
           
                  <li className='icon rev'>3 Revision</li>
                </ul>
              </div>
            </div>

         
            <div className="mfd-card">
              <div className="card-top">
                <span className="plan-name">Fintech Pro Plan</span>
                  <p className="plan-deliver"> DELIVERY (18-30 DAYS)</p>
                <h2 className="plan-price">₹60,000+<span className='add'>(Custom quotes)</span></h2>
                <p className="plan-desc">Fintech platforms & digital wealth startups</p>
                <button className="mfd-btn ghost">Get started</button>
              </div>
              <div className="card-features">
                <p className="features-label">FEATURES</p>
                <ul>
                  <li><CheckCircle className="icon" /> Unlimited Pages</li>
                  <li><CheckCircle className="icon" /> BSE / RTA Integration</li>
                  <li><CheckCircle className="icon" /> AI Chatbot Integration</li>
                  <li><CheckCircle className="icon" /> Multi-Language Support</li>
                  <li><CheckCircle className="icon" /> Priority Support</li>
                  <li className="icon rev">Unlimited Revision</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Features & Add-ons Section */}
<section className="mfd-extras">
  <div className="mfd-container">
    
    <div className="trust-box">
      <div className="trust-header">
        <div className="trust-title-wrapper">
          <h3 className="trust-title">Standard Trust Features <span className="label-included">(Included in All Plans)</span></h3>
        </div>
        <p className="trust-subtitle">Stay compliant with SEBI and industry standards automatically.</p>
      </div>
      
      <div className="trust-grid">
        <div className="trust-item">
          <CheckCircle className="check-icon" />
          <div>
            <strong>SEBI-Friendly Disclosures</strong>
            <p>Automated placement for regulatory text.</p>
          </div>
        </div>
        <div className="trust-item">
          <CheckCircle className="check-icon" />
          <div>
            <strong>Risk Disclaimers</strong>
            <p>Standardized Mutual Fund risk sections.</p>
          </div>
        </div>
        <div className="trust-item">
          <CheckCircle className="check-icon" />
          <div>
            <strong>Data Privacy</strong>
            <p>GDPR/Data security compliant forms.</p>
          </div>
        </div>
        <div className="trust-item">
          <CheckCircle className="check-icon" />
          <div>
            <strong>HTTPS & Security</strong>
            <p>Fully encrypted browsing for investor safety.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="addons-section">
      <h1 className="addons-title">Optional Fintech Add-Ons</h1>
      <div className="addons-grid">
        <div className="addon-tag">Investor Onboarding Automation</div>
        <div className="addon-tag">SIP Calculator & Goal Planner</div>
        <div className="addon-tag">CRM Integration (Zoho/Salesforce)</div>
        <div className="addon-tag">Mobile App Development</div>
         <div className="addon-tag">AMC / RTA Integration</div>
        <div className="addon-tag">Ongoing Compliance Updates</div>
      </div>
    </div>

  </div>
</section>

      <hr className="section-divider" />

      

    <div className='page-container' ref={calculatorRef}>
          <h1 className="title">App and Web <span className="text-gradient-grey">Cost Calculator</span></h1>
      <p className="subtitle">Get a cost estimation for your mobile app or website by answering the following questions</p>

      <div className="progress-container">
        {[1, 2, 3, 4, 5, 6].map((num, index) => (
          <React.Fragment key={num}>
            <div className={`step-circle ${step === num ? 'active' : ''}`}>{num}</div>
            {index < 5 && <div className="step-line" />}
          </React.Fragment>
        ))}
      </div>

      {step === 1 && (
        <>
          <h2 className="question-title">What Type of App You Want to Develop?</h2>
          <p className="selection-instruction">(Select Atleast One Option)</p>
          <div className="options-grid">
            {techOptions.map(option => (
              <div
                key={option.id}
                className={`option-card ${selections.tech.includes(option.id) ? 'selected' : ''}`}
                onClick={() => toggleSelection('tech', option.id)}
              >
                <div className="icon-wrapper">{option.icon}</div>
                <span className="label">{option.label}</span>
                <div className={`check-mark ${selections.tech.includes(option.id) ? 'selected' : ''}`}>
                  <CheckCircle />
                </div>
              </div>
            ))}
          </div>
          <div className="button-container">
            <button className="btn btn-primary" onClick={handleNext} disabled={selections.tech.length === 0}>
              Continue to next step
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="question-title">What is Your App About?</h2>
          <p className="selection-instruction">(Select Atleast One Option)</p>
          <div className="options-grid">
            {appTypeOptions.map(option => (
              <div
                key={option.id}
                className={`option-card ${selections.appType.includes(option.id) ? 'selected' : ''}`}
                onClick={() => toggleSelection('appType', option.id)}
              >
                <div className="icon-wrapper">{option.icon}</div>
                <span className="label">{option.label}</span>
                <div className={`check-mark ${selections.appType.includes(option.id) ? 'selected' : ''}`}>
                  <CheckCircle />
                </div>
              </div>
            ))}
          </div>
          <div className="button-container">
            <button className="btn btn-secondary" onClick={handleBack}>Back</button>
            <button className="btn btn-danger" onClick={handleSkip}>Skip</button>
            <button className="btn btn-primary" onClick={handleNext}>Continue</button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h2 className="question-title">What Type of UI Do You Prefer?</h2>
          <p className="selection-instruction">(Select Atleast One Option)</p>
          <div className="options-grid options-grid-three">
            {uiTypeOptions.map(option => (
              <div
                key={option.id}
                className={`option-card ${selections.uiType.includes(option.id) ? 'selected' : ''}`}
                onClick={() => toggleSelection('uiType', option.id)}
              >
                <div className="icon-wrapper">{option.icon}</div>
                <span className="label">{option.label}</span>
                <div className={`check-mark ${selections.uiType.includes(option.id) ? 'selected' : ''}`}>
                  <CheckCircle />
                </div>
              </div>
            ))}
          </div>
          <div className="button-container">
            <button className="btn btn-secondary" onClick={handleBack}>Back</button>
            <button className="btn btn-danger" onClick={handleSkip}>Skip</button>
            <button className="btn btn-primary" onClick={handleNext}>Continue</button>
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <h2 className="question-title">How Many Screens Your App or Website Will Contain?</h2>
          <p className="selection-instruction">(Select Atleast One Option)</p>
          <div className="options-grid options-grid-screens">
            {screensOptions.map(option => (
              <div
                key={option.id}
                className={`option-card ${selections.screens.includes(option.id) ? 'selected' : ''}`}
                onClick={() => toggleSelection('screens', option.id)}
              >
                <div className="icon-wrapper">{option.icon}</div>
                <span className="label">{option.label}</span>
                <div className={`check-mark ${selections.screens.includes(option.id) ? 'selected' : ''}`}>
                  <CheckCircle />
                </div>
              </div>
            ))}
          </div>
          <div className="button-container">
            <button className="btn btn-secondary" onClick={handleBack}>Back</button>
            <button className="btn btn-danger" onClick={handleSkip}>Skip</button>
            <button className="btn btn-primary" onClick={handleNext}>Continue</button>
          </div>
        </>
      )}

      {step === 5 && (
        <>
          <h2 className="question-title">What is Your App/Web Development Urgency?</h2>
          <p className="selection-instruction">(Select Atleast One Option)</p>
          <div className="options-grid options-grid-three">
            {urgencyOptions.map(option => (
              <div
                key={option.id}
                className={`option-card ${selections.urgency.includes(option.id) ? 'selected' : ''}`}
                onClick={() => toggleSelection('urgency', option.id)}
              >
                <div className="icon-wrapper">{option.icon}</div>
                <span className="label">{option.label}</span>
                <div className={`check-mark ${selections.urgency.includes(option.id) ? 'selected' : ''}`}>
                  <CheckCircle />
                </div>
              </div>
            ))}
          </div>
          <div className="button-container">
            <button className="btn btn-secondary" onClick={handleBack}>Back</button>
            <button className="btn btn-finish" onClick={handleNext}>Finish</button>
          </div>
        </>
      )}

      {step === 6 && (
        <>
          <h2 className="question-title">Almost Done!</h2>
          <p className="selection-instruction">Let Us Know Where We Should Send Your Final Estimation</p>
          <div className="form-container">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="form-input"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <div className="email-input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
              />
              <span className="email-icon">✉</span>
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="form-input"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <textarea
              name="projectDetails"
              placeholder="Whats your project all about ?"
              className="form-textarea"
              value={formData.projectDetails}
              onChange={handleInputChange}
            />
            {errorMessage && (
              <div className="form-message" style={{
                marginBottom: '1rem',
                padding: '0.75rem',
                borderRadius: '0.5rem',
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                color: '#ff4444',
                fontSize: '0.875rem',
                textAlign: 'left'
              }}>
                {errorMessage}
              </div>
            )}
            <button 
              className="btn btn-submit" 
              onClick={handleSubmit}
              disabled={isSubmitting}
              style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}
            >
              {isSubmitting ? 'SUBMITTING...' : 'SEND YOUR INQUIRY'}
            </button>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Pricing;