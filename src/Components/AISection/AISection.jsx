import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AICard from "./AICard";
import "./AISection.css";

gsap.registerPlugin(ScrollTrigger);

export default function AISection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".ai-card",
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="ai-section" ref={sectionRef}>
      <div className="ai-container">
        <h2 className="ai-title">AI-Powered Financial Intelligence</h2>
        <p className="ai-subtitle">
          We integrate cutting-edge Artificial Intelligence to automate
          decision-making, enhance security, and deliver personalized financial
          experiences.
        </p>

        <div className="ai-grid">
          <AICard type="risk" variant="blue" />
          <AICard type="chatbot" variant="cyan" />
          <AICard type="analytics" variant="purple" />
        </div>
      </div>
    </section>
  );
}
