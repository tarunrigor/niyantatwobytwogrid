import { useState } from "react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
type Competitor = {
  id: string;
  label: string;
  role: string;
  icon: string;
  x: number;
  y: number;
  dotColor: string;
  tagLabel: string;
  tagColor: string;
  tagBg: string;
  summary: string;
  description: string;
  highlight?: boolean;
};

const competitors: Competitor[] = [
  {
    id: "pearson",
    label: "Pearson / Exseed",
    role: "Ed-tech Platform",
    icon: "📦",
    x: 18,
    y: 75,
    dotColor: "#94a3b8",
    tagLabel: "Scale without soul",
    tagColor: "#b45309",
    tagBg: "#fef3c7",
    summary: "Broad reach, legacy thinking",
    description:
      "High scalability via platforms and products, but built on legacy subject-delivery thinking. NEP is an afterthought. AI is retrofitted, not native. No lived school experience.",
  },
  {
    id: "principal",
    label: "Retired Elite Principal",
    role: "Expert Consultant",
    icon: "🎓",
    x: 78,
    y: 22,
    dotColor: "#94a3b8",
    tagLabel: "Wisdom with no wings",
    tagColor: "#7c3aed",
    tagBg: "#f5f3ff",
    summary: "Deep insight, zero scale",
    description:
      "Deep relevance — understands NEP, school culture, teacher psychology. But entirely person-dependent. Cannot be in 50 schools at once. Zero infrastructure for scale.",
  },
  {
    id: "ai",
    label: "ChatGPT / Claude",
    role: "General AI Tool",
    icon: "🤖",
    x: 15,
    y: 20,
    dotColor: "#94a3b8",
    tagLabel: "Speed without substance",
    tagColor: "#0369a1",
    tagBg: "#f0f9ff",
    summary: "Always on, context-free",
    description:
      "Infinitely available but hollow. No NEP context, no school operations grounding, no pedagogical structure. Scalability without relevance is just noise.",
  },
  {
    id: "twc",
    label: "The Why Company",
    role: "AI-Native School Partner",
    icon: "✦",
    x: 80,
    y: 80,
    dotColor: "#d97706",
    tagLabel: "The White Space",
    tagColor: "#92400e",
    tagBg: "#fffbeb",
    summary: "NEP-native. AI-native. School-delivery native.",
    description:
      "NEP-native — not adapted to NEP, but built from within schools implementing it. AI-native — activities, coaching, and delivery are designed around AI tools from the ground up, not retrofitted. School-delivery native — founded by a leadership team currently running schools, with active classroom teachers as coach practitioners. The only player where relevance is lived and scale is structural.",
    highlight: true,
  },
];

const quadrantMeta = [
  { x: "25%", y: "25%", title: "Hollow Scalability", bg: "#f8fafc" },
  { x: "75%", y: "25%", title: "Wisdom Trap", bg: "#f8fafc" },
  { x: "25%", y: "75%", title: "Mass-Market Irrelevance", bg: "#f8fafc" },
  { x: "75%", y: "75%", title: "The White Space", bg: "#fffdf5", highlight: true },
];

// ─────────────────────────────────────────────
// STYLES (injected once)
// ─────────────────────────────────────────────
const css = `
  * { box-sizing: border-box; }

  @keyframes pulse-ring {
    0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.6; }
    70%  { transform: translate(-50%,-50%) scale(2.4); opacity: 0; }
    100% { transform: translate(-50%,-50%) scale(2.4); opacity: 0; }
  }
  @keyframes slide-down {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fade-up {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .pg-dot-btn {
    position: absolute;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
    outline: none;
  }
  .pg-dot-btn:hover  { transform: translate(-50%,-50%) scale(1.4); }
  .pg-dot-btn:focus-visible { outline: 2px solid #d97706; outline-offset: 3px; }

  .pg-player-row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    border-radius: 8px;
    cursor: pointer;
    border: 1.5px solid transparent;
    background: transparent;
    text-align: left;
    width: 100%;
    transition: background 0.15s, border-color 0.15s;
    margin-bottom: 6px;
  }
  .pg-player-row:hover  { background: #f9fafb; border-color: #e5e7eb; }
  .pg-player-row.active { background: #fffbeb; border-color: #fcd34d; }
  .pg-player-row.active-twc { background: #fffbeb; border-color: #f59e0b; }

  .pg-expand-body {
    overflow: hidden;
    animation: slide-down 0.22s ease;
  }

  .pg-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    font-family: 'Inter', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 3px 9px;
    border-radius: 99px;
    white-space: nowrap;
  }
`;

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────
export default function PositioningGrid() {
  const [active, setActive] = useState<string>("twc");
  const [expanded, setExpanded] = useState<string>("twc");
  const [hovered, setHovered] = useState<string | null>(null);

  function handleSelect(id: string) {
    setActive(id);
    setExpanded((prev) => (prev === id ? "" : id));
  }

  const activeC = competitors.find((c) => c.id === active)!;

  return (
    <>
      <style>{css}</style>
      <div
        style={{
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          background: "#f7f6f3",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "56px 24px 72px",
          color: "#1c1917",
        }}
      >

        {/* ── LEVEL 1: Page title ─────────────────────── */}
        <div style={{ textAlign: "center", marginBottom: "8px" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#d97706",
            }}
          >
            Competitive Positioning
          </span>
          <h1
            style={{
              fontSize: "clamp(24px, 3vw, 34px)",
              fontWeight: 300,
              margin: "8px 0 6px",
              color: "#1c1917",
              letterSpacing: "-0.8px",
            }}
          >
            The Why Company
          </h1>
          <p
            style={{
              fontSize: "13px",
              color: "#78716c",
              margin: 0,
              letterSpacing: "0.5px",
            }}
          >
            Curriculum Approach &nbsp;×&nbsp; Delivery Infrastructure
          </p>
        </div>

        {/* ── LEVEL 2: Axis legend ─────────────────────── */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "24px",
            marginBottom: "44px",
            padding: "14px 24px",
            background: "#fff",
            borderRadius: "10px",
            border: "1px solid #e7e5e4",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            maxWidth: "600px",
          }}
        >
          <div style={{ fontSize: "12px", color: "#44403c", lineHeight: "1.7" }}>
            <span style={{ fontWeight: 700, color: "#1c1917" }}>X-axis → </span>
            Curriculum approach:{" "}
            <em style={{ color: "#78716c" }}>legacy subject-delivery</em> to{" "}
            <em style={{ color: "#1c1917", fontStyle: "normal", fontWeight: 600 }}>holistic NEP-aligned</em>
          </div>
          <div style={{ fontSize: "12px", color: "#44403c", lineHeight: "1.7" }}>
            <span style={{ fontWeight: 700, color: "#1c1917" }}>Y-axis ↑ </span>
            Delivery infrastructure:{" "}
            <em style={{ color: "#78716c" }}>person-dependent</em> to{" "}
            <em style={{ color: "#1c1917", fontStyle: "normal", fontWeight: 600 }}>AI-native & systemised</em>
          </div>
        </div>

        {/* ── LEVEL 3: Main grid + player list ────────── */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "1000px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >

          {/* LEFT: 2×2 Grid ───────────────────────────── */}
          <div style={{ position: "relative", flex: "0 0 auto" }}>

            {/* Y-axis labels */}
            <div style={{ position: "absolute", left: "-64px", top: "50%", transform: "translateY(-50%) rotate(-90deg)", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#a8a29e", whiteSpace: "nowrap" }}>
              Delivery Infrastructure
            </div>
            <div style={{ position: "absolute", left: "-4px", top: 0, transform: "translateX(-100%) translateY(2px)", fontSize: "10px", color: "#a8a29e", whiteSpace: "nowrap", textAlign: "right" }}>
              AI-Native ↑
            </div>
            <div style={{ position: "absolute", left: "-4px", bottom: 0, transform: "translateX(-100%) translateY(-2px)", fontSize: "10px", color: "#a8a29e", whiteSpace: "nowrap", textAlign: "right" }}>
              ↓ Human-Only
            </div>

            {/* Grid canvas */}
            <div
              style={{
                position: "relative",
                width: "460px",
                height: "460px",
                maxWidth: "min(460px, 82vw)",
                maxHeight: "min(460px, 82vw)",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #e7e5e4",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              {/* Quadrant fills */}
              <div style={{ position: "absolute", inset: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "1px", background: "#e7e5e4" }}>
                {["#fafaf8", "#fafaf8", "#fafaf8", "#fffdf5"].map((bg, i) => (
                  <div key={i} style={{ background: bg }} />
                ))}
              </div>

              {/* Axis dividers */}
              <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "#e0ddd9", transform: "translateX(-50%)" }} />
              <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", background: "#e0ddd9", transform: "translateY(-50%)" }} />

              {/* Quadrant names */}
              {quadrantMeta.map((q, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: q.x,
                    top: q.y,
                    transform: "translate(-50%, -50%)",
                    fontSize: "10px",
                    fontWeight: q.highlight ? 700 : 500,
                    color: q.highlight ? "#b45309" : "#d6d3d1",
                    textAlign: "center",
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                    lineHeight: "1.6",
                    pointerEvents: "none",
                    whiteSpace: "pre-line",
                  }}
                >
                  {q.title.replace(" ", "\n")}
                </div>
              ))}

              {/* Dots */}
              {competitors.map((c) => {
                const isActive = active === c.id;
                const isHov = hovered === c.id;
                const size = c.highlight ? 22 : 16;
                return (
                  <div key={c.id}>
                    {c.highlight && (
                      <div
                        style={{
                          position: "absolute",
                          left: `${c.x}%`,
                          top: `${100 - c.y}%`,
                          width: `${size}px`,
                          height: `${size}px`,
                          borderRadius: "50%",
                          border: "2px solid #d97706",
                          animation: "pulse-ring 2.2s ease-out infinite",
                          pointerEvents: "none",
                        }}
                      />
                    )}
                    <button
                      className="pg-dot-btn"
                      onClick={() => handleSelect(c.id)}
                      onMouseEnter={() => setHovered(c.id)}
                      onMouseLeave={() => setHovered(null)}
                      aria-label={`Select ${c.label}`}
                      style={{
                        left: `${c.x}%`,
                        top: `${100 - c.y}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        transform: `translate(-50%, -50%) scale(${isActive || isHov ? 1.4 : 1})`,
                        background: isActive || isHov ? c.dotColor : c.highlight ? c.dotColor : "#cbd5e1",
                        boxShadow: isActive
                          ? c.highlight
                            ? "0 0 0 4px #fde68a, 0 0 16px rgba(217,119,6,0.35)"
                            : "0 0 0 3px #e2e8f0"
                          : "none",
                        zIndex: 10,
                      }}
                    />
                  </div>
                );
              })}

              {/* Dot labels */}
              {competitors.map((c) => (
                <div
                  key={`lbl-${c.id}`}
                  style={{
                    position: "absolute",
                    left: `${c.x}%`,
                    top: `${100 - c.y}%`,
                    transform: `translate(${c.x > 50 ? "-108%" : "18px"}, -50%)`,
                    fontSize: "10px",
                    fontWeight: c.highlight ? 700 : 500,
                    color: active === c.id
                      ? c.highlight ? "#b45309" : "#44403c"
                      : hovered === c.id ? "#78716c" : "#c7c3be",
                    whiteSpace: "nowrap",
                    transition: "color 0.15s",
                    pointerEvents: "none",
                    letterSpacing: "0.2px",
                  }}
                >
                  {c.label}
                </div>
              ))}
            </div>

            {/* X-axis labels */}
            <div style={{ textAlign: "center", marginTop: "12px", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#a8a29e" }}>
              Holistic · NEP-Future Aligned
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px", fontSize: "10px", color: "#c7c3be" }}>
              <span>← Legacy / Subject-Delivery</span>
              <span>Future-Ready →</span>
            </div>
          </div>

          {/* RIGHT: Player cards ──────────────────────── */}
          <div style={{ flex: "1 1 260px", minWidth: "240px", maxWidth: "340px" }}>

            {/* Section label */}
            <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#a8a29e", marginBottom: "12px" }}>
              All Players &nbsp;— click to expand
            </div>

            {competitors.map((c) => {
              const isActive = active === c.id;
              const isOpen = expanded === c.id;

              return (
                <div
                  key={c.id}
                  style={{
                    background: "#fff",
                    border: `1.5px solid ${isActive ? (c.highlight ? "#fcd34d" : "#e2e8f0") : "#f0eeec"}`,
                    borderRadius: "10px",
                    marginBottom: "8px",
                    overflow: "hidden",
                    boxShadow: isActive ? "0 2px 10px rgba(0,0,0,0.07)" : "0 1px 3px rgba(0,0,0,0.03)",
                    transition: "box-shadow 0.18s, border-color 0.18s",
                  }}
                >
                  {/* ── Card header (always visible, pre-cognitive) ── */}
                  <button
                    onClick={() => handleSelect(c.id)}
                    onMouseEnter={() => setHovered(c.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      width: "100%",
                      padding: "13px 16px",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    {/* Icon — pre-cognitive: you know the archetype before reading the name */}
                    <span
                      style={{
                        fontSize: "18px",
                        lineHeight: 1,
                        flexShrink: 0,
                        opacity: isActive ? 1 : 0.55,
                        transition: "opacity 0.15s",
                      }}
                    >
                      {c.icon}
                    </span>

                    {/* Name + role */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: isActive ? (c.highlight ? "#b45309" : "#1c1917") : "#57534e",
                          transition: "color 0.15s",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {c.label}
                      </div>
                      <div style={{ fontSize: "11px", color: "#a8a29e", marginTop: "1px" }}>
                        {c.role}
                      </div>
                    </div>

                    {/* Badge — pre-cognitive: weakness / strength at a glance */}
                    <span
                      className="pg-badge"
                      style={{
                        color: c.tagColor,
                        background: c.tagBg,
                        flexShrink: 0,
                      }}
                    >
                      {c.highlight ? "✦" : "⚠"} {c.tagLabel}
                    </span>

                    {/* Chevron */}
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#c7c3be",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                        flexShrink: 0,
                      }}
                    >
                      ▾
                    </span>
                  </button>

                  {/* ── Summary line (visible when collapsed, below header) ── */}
                  {!isOpen && (
                    <div
                      style={{
                        padding: "0 16px 12px 48px",
                        fontSize: "12px",
                        color: "#a8a29e",
                        fontStyle: "italic",
                      }}
                    >
                      {c.summary}
                    </div>
                  )}

                  {/* ── Expanded body ── */}
                  {isOpen && (
                    <div
                      className="pg-expand-body"
                      style={{
                        padding: "0 18px 16px 18px",
                        borderTop: "1px solid #f5f4f2",
                      }}
                    >
                      {/* Dot on grid context */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px 0 14px",
                        }}
                      >
                        <span
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: c.dotColor,
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontSize: "11px", color: "#a8a29e" }}>
                          Positioned in the grid at ({c.x}% across, {c.y}% up)
                        </span>
                      </div>

                      {/* Full description */}
                      <p
                        style={{
                          fontSize: "13px",
                          lineHeight: "1.85",
                          color: "#57534e",
                          margin: 0,
                        }}
                      >
                        {c.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Footer affordance hint */}
            <p
              style={{
                marginTop: "16px",
                fontSize: "11px",
                color: "#c7c3be",
                textAlign: "center",
                letterSpacing: "0.5px",
              }}
            >
              Click a dot on the grid or a card above to explore
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
