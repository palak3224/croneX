import { useState } from "react";
import IndustryTabs from "./IndustryTabs";
import IndustryContent from "./IndustryContent";
import "./Industry.css";

export default function IndustrySection() {
  const [active, setActive] = useState("Finance");

  return (
    <section className="industry">
      <div className="industry-header">
        <h1>
          Industry-Leading Digital Solutions <br />
          Tailored for Every Business
        </h1>
        <button>Explore More In Industries →</button>
      </div>

      {/* Background behind navbar + content */}
      <div className="industry-box">
        <IndustryTabs active={active} setActive={setActive} />
        <IndustryContent active={active} />
      </div>
    </section>
  );
}
