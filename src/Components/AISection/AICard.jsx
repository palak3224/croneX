import PsychologyIcon from "@mui/icons-material/Psychology";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

export default function AICard({ type, variant }) {
  const content = {
    risk: {
      icon: <PsychologyIcon fontSize="large" />,
      title: "AI Risk & Fraud Detection",
      desc: "Real-time anomaly detection, transaction monitoring, and predictive fraud prevention using ML models.",
    },
    chatbot: {
      icon: <SmartToyIcon fontSize="large" />,
      title: "AI Chatbots & Virtual Assistants",
      desc: "Intelligent chatbots for customer support, KYC guidance, onboarding, and advisory services.",
    },
    analytics: {
      icon: <AutoGraphIcon fontSize="large" />,
      title: "Predictive Analytics & Insights",
      desc: "AI-driven insights for portfolio optimization, investment predictions, and customer behavior analysis.",
    },
  };

  return (
    <div className={`ai-card glow-${variant}`}>
      <div className="ai-icon">{content[type].icon}</div>
      <h3>{content[type].title}</h3>
      <p>{content[type].desc}</p>
    </div>
  );
}
