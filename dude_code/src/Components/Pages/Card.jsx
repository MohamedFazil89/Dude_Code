import React from "react";
import "./Card.css"
import { Sparkles, Cpu, BarChart3, Code } from "lucide-react";

const features = [
  {
    title: "Natural Language Testing",
    desc: "Run API tests by typing simple English commands — no code required.",
    icon: <Sparkles size={28} color="#22d3ee" />,
    glow: "cyan",
  },
  {
    title: "Automated Test Case Generation",
    desc: "Generate multiple test cases instantly with AI-suggested inputs.",
    icon: <Cpu size={28} color="#3b82f6" />,
    glow: "blue",
  },
  {
    title: "Smart Output Visualization",
    desc: "Get results in JSON or CLI + clean, interactive GUI for debugging.",
    icon: <BarChart3 size={28} color="#a855f7" />,
    glow: "purple",
  },
  {
    title: "Code Aware API Detection",
    desc: "Scans your project, finds APIs in code, and test APIs directly.",
    icon: <Code size={28} color="#14b8a6" />,
    glow: "teal",
  },
];

export default function KeyFeatures() {
  return (
    <section className="features-section">
      <h2 className="features-title">
        <span className="highlight">Key</span> Features
      </h2>

      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className={`feature-card glow-${f.glow}`}>
            <div className="feature-header">
              {f.icon}
              <h3>{f.title}</h3>
            </div>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
