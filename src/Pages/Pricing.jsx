import React, { useState } from 'react';
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

  const handleNext = () => {
    if (step === 1 && selections.tech.length === 0) {
      alert('Please select at least one technology stack.');
      return;
    }
    if (step < 6) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSkip = () => {
    if (step < 6) setStep(step + 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }
    alert('Thank you! Your inquiry has been submitted.');
    console.log('Form Data:', formData);
    console.log('Selections:', selections);
  };

  return (
    <div className="">

<div>
    <PricingHeader/>
</div>

    <div className='page-container'>
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
            <button className="btn btn-submit" onClick={handleSubmit}>
              SEND YOUR INQUIRY
            </button>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Pricing;