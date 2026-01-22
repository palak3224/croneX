import React, { useState } from "react";
import Whatsapp from '../assets/images/whatsapp.png';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "a7efff45-107d-4674-bc14-850db37cdc98");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        event.target.reset();
        setShowSuccessModal(true);
      } else {
        setResult("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      setResult("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const phoneNumber = "919407084533";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const closeModal = () => {
    setShowSuccessModal(false);
    setResult("");
  };

  return (
    <>
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
                Thank You for Contacting Us!
              </h2>
              <p className="contact-success-message">
                We have received your message and will reach out to you soon.
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

      <div className="background-border_wrapper">
        <img
          loading="lazy"
          alt=""
          className="background-border_left"
          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ff857be08695343437f37f_product_hero_left_Box.avif"
        />
        <img
          loading="lazy"
          alt=""
          className="backhground_border_right"
          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67ff857b97f89d74677594e7_product_hero_right_box.avif"
        />
      </div>

      <section className="section_home_platform">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-medium">
              <div className="home_platform_component">
                <div className="max-width-xlarge align-center">
                  <div className="text-align-center">
                    <h2 className="heading-style-h3">
                      <span className="text-gradient-grey">
                        Get in Touch with
                      </span>
                      <span className="text-gradient-blue"> croneX Tech</span>
                    </h2>
                    <div className="spacer-xsmall"></div>
                    <div>
                      <p className="text-size-large">
                        We’re here to help you transform your FinTech vision
                        into reality. Whether you have questions, want to
                        explore our services, or discuss a custom solution, our
                        team is ready to assist.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="spacer-large"></div>
                
                {/* Contact Cards Section */}
                <div className="contact-cards-wrapper">
                  <div className="contact-card why_item">
                    <div className="why_item-link" style={{
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%'
                    }}>
                      <div className="why_background-image-wrapper">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eca5d786370cc1f2221836_home_why_bg.avif"
                          alt=""
                          className="why_background-image"
                        />
                      </div>
                      <div className="why_card-content" style={{
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                      }}>
                        <div className="contact-icon-wrapper">
                          <div className="icon-embed-custom1 w-embed">
                            <svg
                              currentwidth="100%"
                              currentheight="100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                        <h3 className="heading-style-h5" style={{ margin: 0 }}>
                          <span className="text-gradient-blue">Phone Number</span>
                        </h3>
                        <p className="text-size-medium" style={{ 
                          margin: 0, 
                          color: 'var(--color-scheme-1--text-secondary)',
                          lineHeight: '1.6'
                        }}>
                          +91 94070 84533
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-card why_item">
                    <div className="why_item-link" style={{
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%'
                    }}>
                      <div className="why_background-image-wrapper">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eca5d786370cc1f2221836_home_why_bg.avif"
                          alt=""
                          className="why_background-image"
                        />
                      </div>
                      <div className="why_card-content" style={{
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                      }}>
                        <div className="contact-icon-wrapper">
                          <div className="icon-embed-custom1 w-embed">
                            <svg
                              currentwidth="100%"
                              currentheight="100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                        <h3 className="heading-style-h5" style={{ margin: 0 }}>
                          <span className="text-gradient-blue">Official Email</span>
                        </h3>
                        <p className="text-size-medium" style={{ 
                          margin: 0, 
                          color: 'var(--color-scheme-1--text-secondary)',
                          lineHeight: '1.6'
                        }}>
                          info@cronextech.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-card why_item">
                    <div className="why_item-link" style={{
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%'
                    }}>
                      <div className="why_background-image-wrapper">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/67eb571d0fe797071c2c2759/67eca5d786370cc1f2221836_home_why_bg.avif"
                          alt=""
                          className="why_background-image"
                        />
                      </div>
                      <div className="why_card-content" style={{
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                      }}>
                        <div className="contact-icon-wrapper">
                          <div className="icon-embed-custom1 w-embed">
                            <svg
                              currentwidth="100%"
                              currentheight="100%"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                        <h3 className="heading-style-h5" style={{ margin: 0 }}>
                          <span className="text-gradient-blue">Office Address</span>
                        </h3>
                        <p className="text-size-medium" style={{ 
                          margin: 0, 
                          color: 'var(--color-scheme-1--text-secondary)',
                          lineHeight: '1.6'
                        }}>
                          Scheme No 54, Vijay Nagar, Indore - 452010
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="spacer-large"></div>
                <div className="contactRow">
                  <div className="demo_content-left">
                    <div className="">
                      <div className="demo_heading-wrapper">
                        <h1 className="heading-style-h4 z-index-1">
                          <span className="text-gradient-grey">
                            You're minutes away from
                          </span>{" "}
                          <span className="text-gradient-blue">
                            smarter data control.
                          </span>
                        </h1>
                        <div className="spacer-xsmall"></div>
                        <p className="text-size-medium">
                          Reach out to croneX Tech today and let's start
                          building innovative, secure, and high-impact IT
                          solutions together.
                        </p>
                        <div className="spacer-large"></div>
                      </div>
                    </div>
                  </div>
                  <div slide-in="" className="why_item">
                    <div className="why_item-link contactFormDiv">
                      <form onSubmit={onSubmit}>
                        <div className="formRow">
                          <div className="formInput">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" id="firstName" required />
                          </div>
                          <div className="formInput">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" id="lastName" required />
                          </div>
                        </div>
                        <div className="formInput">
                          <label htmlFor="phone">Mobile Number</label>
                          <input type="tel" name="phone" id="phone" required />
                        </div>
                        <div className="formInput">
                          <label htmlFor="email">Email Address</label>
                          <input type="email" name="email" id="email" required />
                        </div>
                        <div className="formInput">
                          <label htmlFor="message">Message</label>
                          <textarea name="message" id="message" required></textarea>
                        </div>
                        {result && (
                          <div className="form-message" style={{
                            marginBottom: '1rem',
                            padding: '0.75rem',
                            borderRadius: '0.5rem',
                            backgroundColor: result.includes('Thank you') ? 'rgba(74, 148, 249, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                            color: result.includes('Thank you') ? 'var(--_primitives---colors--blue)' : '#ff4444',
                            fontSize: '0.875rem'
                          }}>
                            {result}
                          </div>
                        )}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          data-wf--button-primary--variant="base"
                          className="button-primary w-inline-block"
                          style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}
                        >
                          <div className="button_content">
                            <div className="text-size-regular">
                              {isSubmitting ? "Submitting..." : "Submit"}
                            </div>
                            <div className="arrow">
                              <div className="icon-embed-custom1 w-embed">
                                <svg
                                  className="arrow_svg"
                                  currentwidth=" 100%"
                                  currentheight=" 100%"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.6666 15.6667C10.2064 15.6667 9.83337 15.2936 9.83337 14.8333C9.83337 14.3731 10.2064 14 10.6666 14C11.1269 14 11.5 14.3731 11.5 14.8333C11.5 15.2936 11.1269 15.6667 10.6666 15.6667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M10.6666 5.66666C10.2064 5.66666 9.83337 5.29357 9.83337 4.83334C9.83337 4.3731 10.2064 4 10.6666 4C11.1269 4 11.5 4.3731 11.5 4.83334C11.5 5.29357 11.1269 5.66666 10.6666 5.66666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M13.1667 15.6667C12.7064 15.6667 12.3333 15.2936 12.3333 14.8333C12.3333 14.3731 12.7064 14 13.1667 14C13.6269 14 14 14.3731 14 14.8333C14 15.2936 13.6269 15.6667 13.1667 15.6667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M13.1667 5.66666C12.7064 5.66666 12.3333 5.29357 12.3333 4.83334C12.3333 4.3731 12.7064 4 13.1667 4C13.6269 4 14 4.3731 14 4.83334C14 5.29357 13.6269 5.66666 13.1667 5.66666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M13.1667 8.16666C12.7064 8.16666 12.3333 7.79358 12.3333 7.33334C12.3333 6.8731 12.7064 6.5 13.1667 6.5C13.6269 6.5 14 6.8731 14 7.33334C14 7.79358 13.6269 8.16666 13.1667 8.16666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M13.1667 13.1667C12.7064 13.1667 12.3333 12.7936 12.3333 12.3333C12.3333 11.8731 12.7064 11.5 13.1667 11.5C13.6269 11.5 14 11.8731 14 12.3333C14 12.7936 13.6269 13.1667 13.1667 13.1667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M15.6667 8.16666C15.2064 8.16666 14.8333 7.79358 14.8333 7.33334C14.8333 6.8731 15.2064 6.5 15.6667 6.5C16.1269 6.5 16.5 6.8731 16.5 7.33334C16.5 7.79358 16.1269 8.16666 15.6667 8.16666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M15.6667 13.1667C15.2064 13.1667 14.8333 12.7936 14.8333 12.3333C14.8333 11.8731 15.2064 11.5 15.6667 11.5C16.1269 11.5 16.5 11.8731 16.5 12.3333C16.5 12.7936 16.1269 13.1667 15.6667 13.1667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M15.6667 10.6667C15.2064 10.6667 14.8333 10.2936 14.8333 9.83334C14.8333 9.3731 15.2064 9 15.6667 9C16.1269 9 16.5 9.3731 16.5 9.83334C16.5 10.2936 16.1269 10.6667 15.6667 10.6667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M18.1667 10.6667C17.7064 10.6667 17.3333 10.2936 17.3333 9.83334C17.3333 9.3731 17.7064 9 18.1667 9C18.6269 9 19 9.3731 19 9.83334C19 10.2936 18.6269 10.6667 18.1667 10.6667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M1.5 15.6667C1.03975 15.6667 0.666748 15.2936 0.666748 14.8333C0.666748 14.3731 1.03975 14 1.5 14C1.96025 14 2.33337 14.3731 2.33337 14.8333C2.33337 15.2936 1.96025 15.6667 1.5 15.6667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M1.5 5.66666C1.03975 5.66666 0.666748 5.29357 0.666748 4.83334C0.666749 4.3731 1.03975 4 1.5 4C1.96025 4 2.33337 4.3731 2.33337 4.83334C2.33337 5.29357 1.96025 5.66666 1.5 5.66666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M4.00004 15.6667C3.5398 15.6667 3.16671 15.2936 3.16671 14.8333C3.16671 14.3731 3.5398 14 4.00004 14C4.46027 14 4.83337 14.3731 4.83337 14.8333C4.83337 15.2936 4.46027 15.6667 4.00004 15.6667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M4.00004 5.66666C3.5398 5.66666 3.16671 5.29357 3.16671 4.83334C3.16671 4.3731 3.5398 4 4.00004 4C4.46027 4 4.83337 4.3731 4.83337 4.83334C4.83337 5.29357 4.46027 5.66666 4.00004 5.66666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M4.00004 8.16666C3.5398 8.16666 3.16671 7.79358 3.16671 7.33334C3.16671 6.8731 3.5398 6.5 4.00004 6.5C4.46027 6.5 4.83337 6.8731 4.83337 7.33334C4.83337 7.79358 4.46027 8.16666 4.00004 8.16666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M4.00004 13.1667C3.5398 13.1667 3.16671 12.7936 3.16671 12.3333C3.16671 11.8731 3.5398 11.5 4.00004 11.5C4.46027 11.5 4.83337 11.8731 4.83337 12.3333C4.83337 12.7936 4.46027 13.1667 4.00004 13.1667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M6.50004 8.16666C6.0398 8.16666 5.66671 7.79358 5.66671 7.33334C5.66671 6.8731 6.0398 6.5 6.50004 6.5C6.96027 6.5 7.33337 6.8731 7.33337 7.33334C7.33337 7.79358 6.96027 8.16666 6.50004 8.16666Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M6.50004 13.1667C6.0398 13.1667 5.66671 12.7936 5.66671 12.3333C5.66671 11.8731 6.0398 11.5 6.50004 11.5C6.96027 11.5 7.33337 11.8731 7.33337 12.3333C7.33337 12.7936 6.96027 13.1667 6.50004 13.1667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M6.50004 10.6667C6.0398 10.6667 5.66671 10.2936 5.66671 9.83334C5.66671 9.3731 6.0398 9 6.50004 9C6.96027 9 7.33337 9.3731 7.33337 9.83334C7.33337 10.2936 6.96027 10.6667 6.50004 10.6667Z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M9.00004 10.6667C8.5398 10.6667 8.16671 10.2936 8.16671 9.83334C8.16671 9.3731 8.5398 9 9.00004 9C9.46027 9 9.83337 9.3731 9.83337 9.83334C9.83337 10.2936 9.46027 10.6667 9.00004 10.6667Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="button-primary_pattern"></div>
                          <div className="button-primary_border"></div>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
