
import React, { useState, useEffect } from "react";
import "../App.css";

const PopupMessage = () => {
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem("popupDone")) {
        setShow(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "a7efff45-107d-4674-bc14-850db37cdc98");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        sessionStorage.setItem("popupDone", "true");
        setTimeout(() => setShow(false), 4000);
      }
    } catch (error) {
      console.error("Popup Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-card why_item">
        <button className="popup-close" onClick={() => setShow(false)}>&times;</button>
        
        <div className="why_item-link" style={{ padding: '2rem' }}>
          {showSuccess ? (
            <div className="contact-success-modal-content">
               <div className="contact-success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#4A94F9" strokeWidth="2" fill="none"/>
                  <path d="M8 12L11 15L16 9" stroke="#4A94F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-gradient-blue">Message Sent!</h3>
              <p className="text-size-small">We'll get back to you shortly.</p>
            </div>
          ) : (
            <>
              <h3 className="heading-style-h5">
                <span className="text-gradient-grey">Quick </span>
                <span className="text-gradient-blue">Inquiry</span>
              </h3>
              <p className="text-size-small" style={{ marginBottom: '1rem' }}>
                Need help with your FinTech vision? Drop a message!
              </p>

              <form onSubmit={onSubmit} className="popup-form-layout">
                <div className="formInput">
                  <input type="text" name="name" placeholder="Full Name" required />
                </div>
                <div className="formInput">
                  <input type="email" name="email" placeholder="Email Address" required />
                </div>
                <div className="formInput">
                  <textarea name="message" placeholder="Your Message" required rows="3"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="button-primary w-inline-block"
                  style={{ width: '100%', marginTop: '10px' }}
                >
                  <div className="button_content">
                    <div className="text-size-regular">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </div>
                  </div>
                  <div className="button-primary_border"></div>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupMessage;