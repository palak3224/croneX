import React from "react";
import "./TechStack.css";
import TechCard from "./TechCard";

const techData = [
  { title: "Web Development", icon: "🌐" },
  { title: "App Development", icon: "📱" },
  { title: "Automation", icon: "⚙️" },
  { title: "Custom Software Development", icon: "🧩" },
  { title: "API Integration", icon: "🔗" },
  { title: "DevOps & Cloud Automation", icon: "☁️" },
  { title: "Cybersecurity", icon: "🛡️" },
  { title: "SEO", icon: "📈" },
];

const TechStack = () => {
  return (
    <section className="tech-section">
      <h2 className="tech-heading">Languages We Work On</h2>
      <p className="tech-subheading">
        We leverage modern technologies and platforms to build scalable,
        secure, and high-performance solutions.
      </p>

      <div className="tech-grid">
        {techData.map((item, index) => (
          <TechCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
