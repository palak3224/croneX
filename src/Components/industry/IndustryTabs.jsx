import React from "react";
import * as MuiIcons from "@mui/icons-material";

const tabs = [
  { name: "Finance", icon: "AttachMoney" },
  { name: "Healthcare", icon: "Favorite" },
  { name: "Education", icon: "School" },
  { name: "Logistics", icon: "LocalShipping" },
  { name: "Travel", icon: "Map" },
  { name: "Real Estate", icon: "Home" },
  { name: "Entertainment", icon: "SportsEsports" },
  { name: "eCommerce", icon: "ShoppingCart" },
];

export default function IndustryTabs({ active, setActive }) {
  return (
    <div className="industry-tabs">
      {tabs.map((tab) => {
        const IconComponent = MuiIcons[tab.icon];
        return (
          <div
            key={tab.name}
            className={`industry-tab ${active === tab.name ? "active" : ""}`}
            onClick={() => setActive(tab.name)}
          >
            <div className="icon">
              {IconComponent && <IconComponent fontSize="medium" />}
            </div>
            <span>{tab.name}</span>
          </div>
        );
      })}
    </div>
  );
}
