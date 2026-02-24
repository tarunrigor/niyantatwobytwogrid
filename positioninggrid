import { useState } from "react";

const competitors = [
  {
    id: "pearson",
    label: "Pearson / Exseed",
    x: 18,
    y: 75,
    color: "#94a3b8",
    description: "High scalability via platforms and products, but built on legacy subject-delivery thinking. NEP is an afterthought. AI is retrofitted, not native. No lived school experience.",
  },
  {
    id: "principal",
    label: "Retired Elite Principal",
    x: 78,
    y: 22,
    color: "#94a3b8",
    description: "Deep relevance — understands NEP, school culture, teacher psychology. But entirely person-dependent. Cannot be in 50 schools at once. Zero infrastructure for scale.",
  },
  {
    id: "ai",
    label: "ChatGPT / Claude",
    x: 15,
    y: 20,
    color: "#94a3b8",
    description: "Infinitely available but hollow. No NEP context, no school operations grounding, no pedagogical structure. Scalability without relevance is just noise.",
  },
  {
    id: "twc",
    label: "The Why Company",
    x: 80,
    y: 80,
    color: "#f97316",
    description: "NEP-native — not adapted to NEP, but built from within schools implementing it. AI-native — activities, coaching, and delivery are designed around AI tools from the ground up, not retrofitted. School-delivery native — founded by a leadership team currently running schools, with active classroom teachers as coach practitioners. The only player where relevance is lived and scale is structural.",
    highlight: true,
  },
];

export default function App() {
  const [active, setActive] = useState("twc");

  const activeCompetitor = competitors.find((c) => c.id === active);

  return (
    <div
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: "#0f0f0f",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        color: "#e8e0d5",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#f97316",
            marginBottom: "10px",
            fontFamily: "'Courier New', monospace",
          }}
        >
          Competitive Positioning
        </div>
        <h1
          style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: "400",
            margin: 0,
            color: "#f5f0eb",
            letterSpacing: "-0.5px",
          }}
        >
          The Why Company
        </h1>
        <p
          style={{
            fontSize: "13px",
            color: "#6b7280",
            marginTop: "6px",
            fontFamily: "'Courier New', monospace",
            letterSpacing: "1px",
          }}
        >
          Curriculum Approach × Delivery Infrastructure
        </p>
      </div>

      {/* Main layout */}
      <div
        style={{
          display: "flex",
          gap: "32px",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "900px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Grid */}
        <div style={{ position: "relative", flex: "0 0 auto" }}>
          {/* Axis labels */}
          {/* Y axis label - center */}
          <div
            style={{
              position: "absolute",
              left: "-52px",
              top: "50%",
              transform: "translateY(-50%) rotate(-90deg)",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#6b7280",
              whiteSpace: "nowrap",
              fontFamily: "'Courier New', monospace",
            }}
          >
            Delivery Infrastructure
          </div>
          {/* Y axis top label */}
          <div
            style={{
              position: "absolute",
              left: "-8px",
              top: "0",
              transform: "translateX(-100%) translateY(4px)",
              fontSize: "10px",
              color: "#3a3a3a",
              fontFamily: "'Courier New', monospace",
              whiteSpace: "nowrap",
              textAlign: "right",
            }}
          >
            AI-Native & Scalable ↑
          </div>
          {/* Y axis bottom label */}
          <div
            style={{
              position: "absolute",
              left: "-8px",
              bottom: "0",
              transform: "translateX(-100%) translateY(-4px)",
              fontSize: "10px",
              color: "#3a3a3a",
              fontFamily: "'Courier New', monospace",
              whiteSpace: "nowrap",
              textAlign: "right",
            }}
          >
            ↓ Human-Dependent
          </div>

          <div
            style={{
              position: "relative",
              width: "460px",
              height: "460px",
              maxWidth: "min(460px, 80vw)",
              maxHeight: "min(460px, 80vw)",
            }}
          >
            {/* Quadrant backgrounds */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gap: "2px",
                background: "#1a1a1a",
              }}
            >
              {["#111", "#111", "#111", "#1a1208"].map((bg, i) => (
                <div key={i} style={{ background: bg }} />
              ))}
            </div>

            {/* Center lines */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "2px",
                background: "#2a2a2a",
                transform: "translateX(-50%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                height: "2px",
                background: "#2a2a2a",
                transform: "translateY(-50%)",
              }}
            />

            {/* Quadrant subtle labels */}
            {[
              { text: "Hollow\nScalability", x: "25%", y: "25%", align: "center" },
              { text: "Wisdom\nTrap", x: "75%", y: "25%", align: "center" },
              { text: "Mass-Market\nIrrelevance", x: "25%", y: "75%", align: "center" },
              { text: "The\nWhite Space", x: "75%", y: "75%", align: "center", highlight: true },
            ].map((q, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: q.x,
                  top: q.y,
                  transform: "translate(-50%, -50%)",
                  fontSize: "10px",
                  color: q.highlight ? "#f97316" : "#2d2d2d",
                  textAlign: "center",
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  lineHeight: "1.6",
                  pointerEvents: "none",
                  whiteSpace: "pre",
                }}
              >
                {q.text}
              </div>
            ))}

            {/* Competitor dots */}
            {competitors.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                style={{
                  position: "absolute",
                  left: `${c.x}%`,
                  top: `${100 - c.y}%`,
                  transform: "translate(-50%, -50%)",
                  width: c.highlight ? "18px" : "13px",
                  height: c.highlight ? "18px" : "13px",
                  borderRadius: "50%",
                  background: active === c.id ? c.color : c.highlight ? c.color : "#3a3a3a",
                  border: `2px solid ${c.color}`,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  zIndex: 10,
                  boxShadow:
                    c.highlight && active === c.id
                      ? "0 0 20px rgba(249,115,22,0.5)"
                      : "none",
                }}
              />
            ))}

            {/* Dot labels */}
            {competitors.map((c) => (
              <div
                key={`label-${c.id}`}
                style={{
                  position: "absolute",
                  left: `${c.x}%`,
                  top: `${100 - c.y}%`,
                  transform: `translate(${c.x > 50 ? "-110%" : "16px"}, -50%)`,
                  fontSize: "10px",
                  color: active === c.id ? (c.highlight ? "#f97316" : "#e8e0d5") : "#4a4a4a",
                  fontFamily: "'Courier New', monospace",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s",
                  pointerEvents: "none",
                  fontWeight: c.highlight ? "bold" : "normal",
                }}
              >
                {c.label}
              </div>
            ))}
          </div>

          {/* X axis label */}
          <div
            style={{
              textAlign: "center",
              marginTop: "12px",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#6b7280",
              fontFamily: "'Courier New', monospace",
            }}
          >
            Holistic · NEP-Future Aligned
          </div>

          {/* Axis arrows hint */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "4px",
              fontSize: "10px",
              color: "#3a3a3a",
              fontFamily: "'Courier New', monospace",
            }}
          >
            <span>← Legacy / Subject-Delivery</span>
            <span>Future-Ready →</span>
          </div>
        </div>

        {/* Description panel */}
        <div
          style={{
            flex: "1 1 220px",
            minWidth: "200px",
            maxWidth: "280px",
            paddingTop: "8px",
          }}
        >
          <div
            style={{
              borderLeft: `3px solid ${activeCompetitor?.highlight ? "#f97316" : "#3a3a3a"}`,
              paddingLeft: "20px",
              transition: "border-color 0.3s",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: activeCompetitor?.highlight ? "#f97316" : "#e8e0d5",
                marginBottom: "12px",
                letterSpacing: "0.3px",
              }}
            >
              {activeCompetitor?.label}
            </div>
            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.8",
                color: "#9a9a9a",
                margin: 0,
                fontFamily: "'Georgia', serif",
              }}
            >
              {activeCompetitor?.description}
            </p>
          </div>

          <div style={{ marginTop: "40px" }}>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#3a3a3a",
                marginBottom: "16px",
                fontFamily: "'Courier New', monospace",
              }}
            >
              All Players
            </div>
            {competitors.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 0",
                  borderBottom: "1px solid #1e1e1e",
                  fontSize: "12px",
                  color: active === c.id ? (c.highlight ? "#f97316" : "#e8e0d5") : "#3a3a3a",
                  fontFamily: "'Courier New', monospace",
                  transition: "color 0.2s",
                  letterSpacing: "0.5px",
                }}
              >
                {active === c.id ? "→ " : "  "}
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          fontSize: "11px",
          color: "#2d2d2d",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Click any dot or name to explore
      </div>
    </div>
  );
}
