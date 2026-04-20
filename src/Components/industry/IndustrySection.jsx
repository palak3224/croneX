import { useState, memo } from "react";
import IndustryTabs from "./IndustryTabs";
import IndustryContent from "./IndustryContent";
import { NavLink } from "react-router-dom";
import "./Industry.css";

function IndustrySection() {
  const [active, setActive] = useState("Finance");

  return (
    <section className="industry">
      <div className="industry-header">
        <h1>
          <span className="text-gradient-grey">Industry-Leading</span>{" "}
          <span className="text-gradient-blue">Digital Solutions</span> <br />
          <span className="text-gradient-grey">
            Tailored for Every Business
          </span>
        </h1>
        <NavLink to="/contact">
          <button>Explore More In Industries →</button>
        </NavLink>
      </div>

      {/* Background behind navbar + content */}
      <div className="industry-box">
        <IndustryTabs active={active} setActive={setActive} />
        <IndustryContent active={active} />
      </div>
    </section>
  );
}

export default memo(IndustrySection);
