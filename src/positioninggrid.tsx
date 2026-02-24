import { useState, useEffect } from "react";

const competitors = [
  {
    id: "pearson",
    label: "Pearson / Exseed",
    x: 18,
    y: 75,
    color: "#94a3b8",
    quadrant: "Top-Left",
    weakness: "Scale without soul",
    description: "High scalability via platforms and products, but built on legacy subject-delivery thinking. NEP is an afterthought. AI is retrofitted, not native. No lived school experience.",
  },
  {
    id: "principal",
    label: "Retired Elite Principal",
    x: 78,
    y: 22,
    color: "#94a3b8",
    quadrant: "Bottom-Right",
    weakness: "Wisdom with no wings",
    description: "Deep relevance — understands NEP, school culture, teacher psychology. But entirely person-dependent. Cannot be in 50 schools at once. Zero infrastructure for scale.",
  },
  {
    id: "ai",
    label: "ChatGPT / Claude",
    x: 15,
    y: 20,
    color: "#94a3b8",
    quadrant: "Bottom-Left",
    weakness: "Speed without substance",
    description: "Infinitely available but hollow. No NEP context, no school operations grounding, no pedagogical structure. Scalability without relevance is just noise.",
  },
  {
    id: "twc",
    label: "The Why Company",
    x: 80,
    y: 80,
    color: "#f97316",
    quadrant: "Top-Right",
    weakness: null,
    description: "NEP-native — not adapted to NEP, but built from within schools implementing it. AI-native — activities, coaching, and delivery are designed around AI tools from the ground up, not retrofitted. School-delivery native — founded by a leadership team currently running schools, with active classroom teachers as coach practitioners. The only player where relevance is lived and scale is structural.",
    highlight: true,
  },
];

const pulseKeyframes = `
  @keyframes pulse-ring {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
    70% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
    100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
  }
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slide-in {
    from { opacity: 0; transform: translateX(10px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;

export default function PositioningGrid() {
  const [active, setActive] = useState("twc");
  const [hovered, setHovered] = useState<string | null>(null);
  const [prevActive, setPrevActive] = useState("twc");
  const [descKey, setDescKey] = useState(0);

  useEffect(() => {
    if (active !== prevActive) {
      setDescKey((k) => k + 1);
      setPrevActive(active);
    }
  }, [active, prevActive]);

  const activeCompetitor = competitors.find((c) => c.id === active);

  const quadrants = [
    { text: "Hollow\nScalability", x: "25%", y: "25%", highlight: false, tooltip: "Scale without pedagogical soul" },
    { text: "Wisdom\nTrap", x: "75%", y: "25%", highlight: false, tooltip: "Great insight, zero reach" },
    { text: "Mass-Market\nIrrelevance", x: "25%", y: "75%", highlight: false, tooltip: "Fast but context-free" },
    { text: "The\nWhite Space", x: "75%", y: "75%", highlight: true, tooltip: "Where TWC operates — uniquely" },
  ];

  return (
    <>
      <style>{pulseKeyframes}</style>
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
        <div style={{ textAlign: "center", marginBottom: "12px" }}>
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

        {/* Onboarding context — Norman: support the user's mental model */}
        <div
          style={{
            maxWidth: "520px",
            textAlign: "center",
            marginBottom: "36px",
            padding: "14px 20px",
            border: "1px solid #1e1e1e",
            borderRadius: "4px",
            background: "#111",
          }}
        >
          <p style={{ fontSize: "12px", color: "#6b7280", margin: 0, lineHeight: "1.8", fontFamily: "'Courier New', monospace" }}>
            The X-axis measures <span style={{ color: "#e8e0d5" }}>how future-ready the curriculum approach is</span> (legacy subject-delivery → holistic NEP-aligned).
            The Y-axis measures <span style={{ color: "#e8e0d5" }}>how scalable the delivery is</span> (person-dependent → AI-native & systemised).{" "}
            <span style={{ color: "#f97316" }}>Click any dot to explore each player's position.</span>
          </p>
        </div>

        {/* Main layout */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "960px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Grid */}
          <div style={{ position: "relative", flex: "0 0 auto" }}>
            {/* Y axis label */}
            <div
              style={{
                position: "absolute",
                left: "-56px",
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
            {/* Y axis top label — now visible */}
            <div
              style={{
                position: "absolute",
                left: "-8px",
                top: "0",
                transform: "translateX(-100%) translateY(4px)",
                fontSize: "10px",
                color: "#6b7280",
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
                color: "#6b7280",
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
                  width: "1px",
                  background: "#2e2e2e",
                  transform: "translateX(-50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  height: "1px",
                  background: "#2e2e2e",
                  transform: "translateY(-50%)",
                }}
              />

              {/* Quadrant labels — now readable */}
              {quadrants.map((q, i) => (
                <div
                  key={i}
                  title={q.tooltip}
                  style={{
                    position: "absolute",
                    left: q.x,
                    top: q.y,
                    transform: "translate(-50%, -50%)",
                    fontSize: "10px",
                    color: q.highlight ? "#c2410c" : "#3d3d3d",
                    textAlign: "center",
                    fontFamily: "'Courier New', monospace",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    lineHeight: "1.7",
                    pointerEvents: "none",
                    whiteSpace: "pre",
                    fontWeight: q.highlight ? "700" : "400",
                  }}
                >
                  {q.text}
                </div>
              ))}

              {/* Competitor dots — larger hit targets, hover states, pulse on TWC */}
              {competitors.map((c) => {
                const isActive = active === c.id;
                const isHovered = hovered === c.id;
                const dotSize = c.highlight ? 22 : 16;
                return (
                  <div key={c.id}>
                    {/* Pulse ring for TWC */}
                    {c.highlight && (
                      <div
                        style={{
                          position: "absolute",
                          left: `${c.x}%`,
                          top: `${100 - c.y}%`,
                          width: `${dotSize}px`,
                          height: `${dotSize}px`,
                          borderRadius: "50%",
                          border: "2px solid #f97316",
                          animation: "pulse-ring 2s ease-out infinite",
                          pointerEvents: "none",
                        }}
                      />
                    )}
                    <button
                      onClick={() => setActive(c.id)}
                      onMouseEnter={() => setHovered(c.id)}
                      onMouseLeave={() => setHovered(null)}
                      aria-label={`View ${c.label} positioning`}
                      style={{
                        position: "absolute",
                        left: `${c.x}%`,
                        top: `${100 - c.y}%`,
                        transform: `translate(-50%, -50%) scale(${isActive || isHovered ? 1.35 : 1})`,
                        width: `${dotSize}px`,
                        height: `${dotSize}px`,
                        borderRadius: "50%",
                        background: isActive ? c.color : isHovered ? c.color : c.highlight ? c.color : "#3a3a3a",
                        border: `2px solid ${c.color}`,
                        cursor: "pointer",
                        transition: "all 0.18s ease",
                        zIndex: 10,
                        outline: "none",
                        boxShadow: isActive && c.highlight
                          ? "0 0 24px rgba(249,115,22,0.55)"
                          : isActive
                          ? "0 0 12px rgba(148,163,184,0.3)"
                          : isHovered
                          ? `0 0 10px ${c.color}55`
                          : "none",
                      }}
                    />
                  </div>
                );
              })}

              {/* Dot labels — brighter when active */}
              {competitors.map((c) => (
                <div
                  key={`label-${c.id}`}
                  style={{
                    position: "absolute",
                    left: `${c.x}%`,
                    top: `${100 - c.y}%`,
                    transform: `translate(${c.x > 50 ? "-110%" : "18px"}, -50%)`,
                    fontSize: "11px",
                    color: active === c.id ? (c.highlight ? "#f97316" : "#e8e0d5") : hovered === c.id ? "#9ca3af" : "#4a4a4a",
                    fontFamily: "'Courier New', monospace",
                    whiteSpace: "nowrap",
                    transition: "color 0.18s",
                    pointerEvents: "none",
                    fontWeight: c.highlight ? "700" : "400",
                    letterSpacing: "0.3px",
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
                marginTop: "14px",
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#6b7280",
                fontFamily: "'Courier New', monospace",
              }}
            >
              Holistic · NEP-Future Aligned
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5px",
                fontSize: "10px",
                color: "#4b5563",
                fontFamily: "'Courier New', monospace",
              }}
            >
              <span>← Legacy / Subject-Delivery</span>
              <span>Future-Ready →</span>
            </div>
          </div>

          {/* Description panel — animated on change */}
          <div
            style={{
              flex: "1 1 240px",
              minWidth: "220px",
              maxWidth: "300px",
              paddingTop: "4px",
            }}
          >
            {/* Active player detail */}
            <div
              key={descKey}
              style={{
                borderLeft: `3px solid ${activeCompetitor?.highlight ? "#f97316" : "#4b5563"}`,
                paddingLeft: "20px",
                transition: "border-color 0.3s",
                animation: "slide-in 0.25s ease",
              }}
            >
              {/* Quadrant badge */}
              {activeCompetitor?.weakness && (
                <div style={{
                  display: "inline-block",
                  fontSize: "10px",
                  fontFamily: "'Courier New', monospace",
                  color: "#6b7280",
                  border: "1px solid #2a2a2a",
                  borderRadius: "2px",
                  padding: "2px 8px",
                  marginBottom: "10px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}>
                  ⚠ {activeCompetitor.weakness}
                </div>
              )}
              {activeCompetitor?.highlight && (
                <div style={{
                  display: "inline-block",
                  fontSize: "10px",
                  fontFamily: "'Courier New', monospace",
                  color: "#f97316",
                  border: "1px solid #f9731644",
                  borderRadius: "2px",
                  padding: "2px 8px",
                  marginBottom: "10px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}>
                  ✦ The White Space
                </div>
              )}
              <div
                style={{
                  fontSize: "15px",
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
                  lineHeight: "1.85",
                  color: "#9a9a9a",
                  margin: 0,
                  fontFamily: "'Georgia', serif",
                }}
              >
                {activeCompetitor?.description}
              </p>
            </div>

            {/* Player list — clear signifiers of interactivity */}
            <div style={{ marginTop: "36px" }}>
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#4b5563",
                  marginBottom: "8px",
                  fontFamily: "'Courier New', monospace",
                }}
              >
                All Players
              </div>
              {competitors.map((c) => {
                const isActive = active === c.id;
                const isHov = hovered === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActive(c.id)}
                    onMouseEnter={() => setHovered(c.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      width: "100%",
                      textAlign: "left",
                      background: isActive ? "#161616" : isHov ? "#131313" : "none",
                      border: "none",
                      borderBottom: "1px solid #1e1e1e",
                      borderLeft: isActive ? `2px solid ${c.color}` : "2px solid transparent",
                      cursor: "pointer",
                      padding: "9px 10px",
                      fontSize: "12px",
                      color: isActive ? (c.highlight ? "#f97316" : "#e8e0d5") : isHov ? "#9ca3af" : "#4b5563",
                      fontFamily: "'Courier New', monospace",
                      transition: "all 0.15s ease",
                      letterSpacing: "0.5px",
                    }}
                  >
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: isActive ? c.color : "#2a2a2a",
                        border: `1.5px solid ${c.color}`,
                        flexShrink: 0,
                        transition: "background 0.15s",
                      }}
                    />
                    {c.label}
                  </button>
                );
              })}
            </div>

            {/* Visible affordance hint — good contrast now */}
            <p style={{
              marginTop: "24px",
              fontSize: "11px",
              color: "#4b5563",
              fontFamily: "'Courier New', monospace",
              letterSpacing: "1px",
            }}>
              ↑ Click any dot or player name to explore its position
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
