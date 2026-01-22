import { memo } from "react";

const industryData = {
  Finance: {
    title: "Fintech App Development",
    desc: "We deliver secure, innovative fintech solutions, such as digital banking, investment platforms, payment gateways, and more, to enable seamless financial operations on a scalable level.",
    points: [
      "Banking App Development",
      "Investment & Trading Platforms",
      "Payment Gateway Solutions",
      "Cryptocurrency & Blockchain Development",
    ],
    image: "https://www.smartosc.com/wp-content/uploads/2024/02/fintech-apps-01-e1707126719700.png",
  },

  Healthcare: {
    title: "Healthcare App Development",
    desc: "We cater to HIPAA-compliant healthcare development solutions through advanced telemedicine EHR systems and AI diagnostics for improved patient care.",
    points: [
      "Telemedicine App Development",
      "EHR & EMR Software Solutions",
      "AI-Powered Healthcare Analytics",
      "Remote Patient Monitoring Systems",
    ],
    image: "https://devtechnosys.com/assets/images/home/industry02.webp",
  },

  Education: {
    title: "Education App Development",
    desc: "Our innovative e-learning development solutions, which integrate AI, AR/VR, and LMS, can benefit students and educators worldwide.",
    points: [
      "E-Learning Platforms",
      "Learning Management Systems (LMS)",
      "Virtual Classrooms",
      "Education Management Solutions",
    ],
    image: "https://devtechnosys.com/assets/images/home/industry03.webp",
  },

  Logistics: {
    title: "Logistics App Development",
    desc: "We create optimization-focused fleet management and routing solutions and real-time tracking AI for streamlined operations in logistics and supply chains.",
    points: [
      "Fleet Tracking Systems",
      "Warehouse Management Systems",
      "Supply Chain Solutions",
      "Route Optimization Apps",
    ],
    image: "https://devtechnosys.com/assets/images/home/industry04.webp",
  },

  Travel: {
    title: "Travel App Development",
    desc: "We provide seamless reservations, AI-driven recommendations, active travel support, and an overall itinerary structure that significantly improves users' experience.",
    points: [
      "Travel Booking App Development",
      "AI-Based Travel Planning Solutions",
      "Hotel & Flight Aggregator Platforms",
      "Virtual Tour & AR-Based Travel Apps",
    ],
    image: "https://devtechnosys.com/assets/images/home/industry05.webp",
  },

  "Real Estate": {
    title: "Real Estate App Development",
    desc: "We specialize in creating new property management solutions, AR/VR property tours, real estate trade platforms, and CRM systems that simplify the processes of buying, selling, and renting.",
    points: [
      "Real Estate Marketplace Development",
      "Property Management Software",
      "AR/VR Real Estate Tours",
      "Real Estate CRM Solutions",
    ],
    image: "https://devtechnosys.com/assets/images/home/industry06.webp",
  },

  Entertainment: {
    title: "Entertainment App Development",
    desc: "We offer the creation of engaging OTT app entertainment platforms, live streaming solutions, gaming applications, and AI-based content recommendation systems.",
    points: [
      "OTT & Video Streaming Apps",
      "Music & Podcast Streaming Platforms",
      "AR/VR Gaming Solutions",
      "Live Streaming & Event Apps",
    ],
    image: "https://devtechnosys.com/assets/images/home/industry07.webp",
  },

  eCommerce: {
    title: "eCommerce App Development",
    desc: "Our e-commerce solutions include creating AI-powered marketplaces, M-commerce applications, inventory management systems and secure online payment integration for intuitive shopping experiences.",
    points: [
      "Custom Ecommerce Website Development",
      "Multi-Vendor Marketplace Solutions",
      "AI-Powered Shopping Assistants",
      "M-Commerce App Development",
    ],
    image: "https://devtechnosys.com/assets/images/home/industry08.webp",
  },
};

function IndustryContent({ active }) {
  const content = industryData[active];
  if (!content) return null;

  return (
    <div className="industry-content">
      <div className="text">
        <h2>
          <span className="text-gradient-vertical">{content.title}</span>
        </h2>
        <p>{content.desc}</p>

        <ul className="industry-points">
          {content.points.map((point, index) => (
            <li key={index}>
              <i className="ti ti-circle-check"></i>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="image-wrapper">
        <img 
          src={content.image} 
          alt={content.title}
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      </div>
    </div>
  );
}

export default memo(IndustryContent);
