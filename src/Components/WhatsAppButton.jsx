import React from 'react';
import Whatsapp from '../assets/images/whatsapp.png';

const WhatsAppButton = () => {
  // WhatsApp number from Footer
  const phoneNumber = "919407084533";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '120px',
        zIndex: 9999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60px',
        height: '60px',
        background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
        borderRadius: '50%',
        boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)',
        cursor: 'pointer',
        textDecoration: 'none',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        visibility: 'visible',
        opacity: 1
      }}
    >
      <div className="whatsapp-button-content">
        <img
          src={Whatsapp}
          alt="WhatsApp"
          className="whatsapp-button-icon"
          style={{
            width: '36px',
            height: '36px',
            objectFit: 'contain',
            display: 'block'
          }}
        />
        <svg
          className="whatsapp-button-phone-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.384 17.752a2.108 2.108 0 01-.522 3.359 7.674 7.674 0 01-5.149.533C7.4 20.376 2.115 9.633 2.387 4.647a3.556 3.556 0 01.906-2.375A2.241 2.241 0 015.35 1.5l2.466.552a2.4 2.4 0 011.888 2.036l.445 3.386a2.4 2.4 0 01-1.02 2.2L7.32 10.907a12.847 12.847 0 004.773 4.773l1.234-1.81a2.4 2.4 0 012.2-1.02l3.386.445a2.4 2.4 0 012.036 1.888l.552 2.466a2.3 2.3 0 01-.717 2.083z"
            fill="#25d366"
            stroke="#25d366"
            strokeWidth="1"
          />
        </svg>
      </div>
      <span className="whatsapp-button-tooltip">Connect on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
