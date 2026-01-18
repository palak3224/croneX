import React from "react";

const TechCard = ({ item }) => {
  return (
    <div className="tech-card">
      <div className="tech-icon">{item.icon}</div>
      <h3 className="tech-title">{item.title}</h3>
    </div>
  );
};

export default TechCard;
