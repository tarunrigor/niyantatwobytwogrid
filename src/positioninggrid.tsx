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

// ─────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────
const css = `
  * { box-sizing: border-box; }

  @keyframes pulse-ring {
    0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.6; }
    70%  { transform: translate(-50%,-50%) scale(2.8); opacity: 0; }
    100% { transform: translate(-50%,-50%) scale(2.8); opacity: 0; }
  }
  @keyframes slide-down {
    from { opacity: 0; transform: translateY(-5px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .pg-dot-btn {
    position: absolute;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    outline: none;
  }
  .pg-dot-btn:focus-visible { outline: 2px solid #d97706; outline-offset: 4px; }

  /* Dot name label — hidden at rest, revealed on active/hover */
  .pg-dot-label {
    position: absolute;
    font-size: 11px;
    font-weight: 600;
    white-space: nowrap;
    pointer-events: none;
    letter-spacing: 0.1px;
    line-height: 1.3;
    opacity: 0;
    transition: opacity 0.18s ease;
    z-index: 20;
  }
  .pg-dot-label.visible { opacity: 1; }

  .pg-expand-body {
    overflow: hidden;
    animation: slide-down 0.2s ease;
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
    padding: 3px 10px;
    border-radius: 99px;
    white-space: nowrap;
  }

  .pg-player-card {
    background: #fff;
    border-radius: 12px;
    border: 1.5px solid #eeece9;
    overflow: hidden;
    transition: box-shadow 0.2s, border-color 0.2s;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  }
  .pg-player-card.is-active-highlight {
    border-color: #fbbf24;
    box-shadow: 0 4px 20px rgba(217,119,6,0.14);
  }
  .pg-player-card.is-active-normal {
    border-color: #cbd5e1;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  }

  /* Axis track — sits outside the grid, clean label rows */
  .pg-axis-x {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding: 0 2px;
  }
  .pg-axis-y {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 2px 0;
    margin-right: 14px;
  }
  .pg-axis-label {
    font-size: 11px;
    font-weight: 600;
    color: #374151;
    letter-spacing: 0.1px;
    white-space: nowrap;
  }
  .pg-axis-label.dim { color: #9ca3af; font-weight: 500; }
`;

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────
export default function PositioningGrid() {
  const [active, setActive]     = useState<string>("twc");
  const [expanded, setExpanded] = useState<string>("twc");
  const [hovered, setHovered]   = useState<string | null>(null);

  function handleSelect(id: string) {
    setActive(id);
    setExpanded((prev) => (prev === id ? "" : id));
  }

  return (
    <>
      <style>{css}</style>
      <div
        style={{
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          background: "#f5f4f1",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "48px 40px 80px",
          color: "#1c1917",
        }}
      >

        {/* ── TITLE ──────────────────────────────────────── */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <p style={{ margin: "0 0 8px", fontSize: "10px", fontWeight: 700, letterSpacing: "3.5px", textTransform: "uppercase", color: "#d97706" }}>
            Competitive Positioning
          </p>
          <h1 style={{ fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 300, margin: "0 0 8px", color: "#111827", letterSpacing: "-0.5px" }}>
            The Why Company
          </h1>
          <p style={{ fontSize: "12px", color: "#9ca3af", margin: 0 }}>
            Where does each player sit on curriculum approach and delivery scale?
          </p>
        </div>

        {/* ── MAIN ROW: [Y-axis + Grid + X-axis]  |  [All Players] ── */}
        <div style={{ display: "flex", gap: "40px", alignItems: "flex-start", width: "100%", maxWidth: "1080px", flexWrap: "wrap", justifyContent: "center" }}>

          {/* LEFT: grid frame */}
          <div style={{ flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "stretch" }}>

              {/* Y-axis column */}
              <div className="pg-axis-y" style={{ height: "420px", maxHeight: "min(420px, 80vw)" }}>
                <span className="pg-axis-label">AI-Native &nbsp;↑</span>
                <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#d1cdc8", transform: "rotate(-90deg)", whiteSpace: "nowrap", display: "block" }}>
                  Delivery
                </span>
                <span className="pg-axis-label">↓ &nbsp;Human-Only</span>
              </div>

              {/* Grid + X-axis stacked */}
              <div>
                {/* ── GRID CANVAS ── */}
                <div
                  style={{
                    position: "relative",
                    width: "420px",
                    height: "420px",
                    maxWidth: "min(420px, 80vw)",
                    maxHeight: "min(420px, 80vw)",
                    borderRadius: "14px",
                    overflow: "hidden",
                    border: "1px solid #ddd8d2",
                    boxShadow: "0 8px 48px rgba(0,0,0,0.11), 0 1px 4px rgba(0,0,0,0.05)",
                    background: "#fff",
                  }}
                >
                  {/* Quadrant fills */}
                  <div style={{ position: "absolute", left: 0,     top: 0,     width: "50%", height: "50%", background: "#f9fafb" }} />
                  <div style={{ position: "absolute", left: "50%", top: 0,     width: "50%", height: "50%", background: "#fffdf4" }} />
                  <div style={{ position: "absolute", left: 0,     top: "50%", width: "50%", height: "50%", background: "#f9fafb" }} />
                  <div style={{ position: "absolute", left: "50%", top: "50%", width: "50%", height: "50%", background: "#fafaf8" }} />

                  {/* Axis lines */}
                  <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "#e5e1db", transform: "translateX(-50%)", zIndex: 1 }} />
                  <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", background: "#e5e1db", transform: "translateY(-50%)", zIndex: 1 }} />

                  {/* Quadrant labels — top-left corner of each quadrant, clear of dots */}
                  <div style={{ position: "absolute", left: "8px", top: "8px", fontSize: "8px", fontWeight: 600, color: "#d1cdc7", letterSpacing: "1.5px", textTransform: "uppercase", lineHeight: "1.7", pointerEvents: "none", userSelect: "none", zIndex: 2 }}>
                    Hollow<br/>Scalability
                  </div>
                  <div style={{ position: "absolute", left: "calc(50% + 8px)", top: "8px", fontSize: "8px", fontWeight: 800, color: "#b45309", letterSpacing: "1.5px", textTransform: "uppercase", lineHeight: "1.7", pointerEvents: "none", userSelect: "none", zIndex: 2 }}>
                    The White<br/>Space ✦
                  </div>
                  <div style={{ position: "absolute", left: "8px", top: "calc(50% + 8px)", fontSize: "8px", fontWeight: 600, color: "#d1cdc7", letterSpacing: "1.5px", textTransform: "uppercase", lineHeight: "1.7", pointerEvents: "none", userSelect: "none", zIndex: 2 }}>
                    Mass-Market<br/>Irrelevance
                  </div>
                  <div style={{ position: "absolute", left: "calc(50% + 8px)", top: "calc(50% + 8px)", fontSize: "8px", fontWeight: 600, color: "#d1cdc7", letterSpacing: "1.5px", textTransform: "uppercase", lineHeight: "1.7", pointerEvents: "none", userSelect: "none", zIndex: 2 }}>
                    Wisdom<br/>Trap
                  </div>

                  {/* Dots + hover labels */}
                  {competitors.map((c) => {
                    const isActive = active === c.id;
                    const isHov    = hovered === c.id;
                    const lit      = isActive || isHov;
                    const size     = c.highlight ? 18 : 13;
                    const gridLeft = `${c.x}%`;
                    const gridTop  = `${100 - c.y}%`;
                    const lx = c.x > 50 ? "calc(-100% - 10px)" : "calc(100% + 10px)";
                    const ly = c.y > 50 ? "4px" : "-28px";

                    return (
                      <div key={c.id}>
                        {c.highlight && (
                          <div style={{ position: "absolute", left: gridLeft, top: gridTop, width: `${size}px`, height: `${size}px`, borderRadius: "50%", border: "1.5px solid #d97706", animation: "pulse-ring 2.4s ease-out infinite", pointerEvents: "none", zIndex: 3 }} />
                        )}
                        <button
                          className="pg-dot-btn"
                          onClick={() => handleSelect(c.id)}
                          onMouseEnter={() => setHovered(c.id)}
                          onMouseLeave={() => setHovered(null)}
                          aria-label={`Select ${c.label}`}
                          style={{
                            left: gridLeft, top: gridTop,
                            width: `${size}px`, height: `${size}px`,
                            transform: `translate(-50%, -50%) scale(${lit ? 1.45 : 1})`,
                            background: lit ? c.dotColor : c.highlight ? c.dotColor : "#b8c1cc",
                            boxShadow: lit ? (c.highlight ? "0 0 0 5px rgba(251,191,36,0.35), 0 0 22px rgba(217,119,6,0.45)" : "0 0 0 4px rgba(148,163,184,0.3)") : "none",
                            zIndex: 10,
                          }}
                        />
                        <div
                          className={`pg-dot-label${lit ? " visible" : ""}`}
                          style={{
                            left: gridLeft, top: gridTop,
                            transform: `translate(${lx}, ${ly})`,
                            color: isActive ? (c.highlight ? "#92400e" : "#111827") : "#374151",
                            background: "rgba(255,255,255,0.93)",
                            backdropFilter: "blur(4px)",
                            padding: "3px 8px",
                            borderRadius: "6px",
                            boxShadow: "0 1px 6px rgba(0,0,0,0.10)",
                          }}
                        >
                          {c.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* X-axis row */}
                <div className="pg-axis-x" style={{ width: "420px", maxWidth: "min(420px, 80vw)" }}>
                  <span className="pg-axis-label">← Legacy</span>
                  <span className="pg-axis-label dim" style={{ fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase" }}>Curriculum</span>
                  <span className="pg-axis-label">NEP Future-Aligned →</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: All Players panel */}
          <div style={{ flex: "1 1 260px", minWidth: "240px", maxWidth: "360px" }}>
            <p style={{ margin: "0 0 14px", fontSize: "9px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#c4bfba" }}>
              All Players — click to expand
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {competitors.map((c) => {
                const isActive = active === c.id;
                const isOpen   = expanded === c.id;
                const cls = `pg-player-card${isActive ? (c.highlight ? " is-active-highlight" : " is-active-normal") : ""}`;

                return (
                  <div key={c.id} className={cls}>

                    {/* Header */}
                    <button
                      onClick={() => handleSelect(c.id)}
                      onMouseEnter={() => setHovered(c.id)}
                      onMouseLeave={() => setHovered(null)}
                      style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%", padding: "11px 14px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                    >
                      <span style={{ fontSize: "16px", lineHeight: 1, flexShrink: 0, opacity: isActive ? 1 : 0.4, transition: "opacity 0.18s" }}>
                        {c.icon}
                      </span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: "12px", fontWeight: 600, color: isActive ? (c.highlight ? "#92400e" : "#111827") : "#6b7280", transition: "color 0.18s", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {c.label}
                        </div>
                        <div style={{ fontSize: "10px", color: "#c4bfba", marginTop: "1px" }}>
                          {c.role}
                        </div>
                      </div>
                      <span style={{ fontSize: "11px", color: "#d1cdc8", transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s", flexShrink: 0 }}>
                        ▾
                      </span>
                    </button>

                    {/* Badge + summary (collapsed) */}
                    {!isOpen && (
                      <div style={{ padding: "0 14px 10px 38px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                        <span className="pg-badge" style={{ color: c.tagColor, background: c.tagBg, opacity: isActive ? 1 : 0.7, fontSize: "9px", padding: "2px 7px" }}>
                          {c.highlight ? "✦" : "⚠"} {c.tagLabel}
                        </span>
                        <span style={{ fontSize: "11px", color: "#b0acaa", fontStyle: "italic" }}>{c.summary}</span>
                      </div>
                    )}

                    {/* Expanded body */}
                    {isOpen && (
                      <div className="pg-expand-body" style={{ padding: "0 14px 14px", borderTop: "1px solid #f3f1ef" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 0 10px" }}>
                          <span className="pg-badge" style={{ color: c.tagColor, background: c.tagBg, fontSize: "9px", padding: "2px 7px" }}>
                            {c.highlight ? "✦" : "⚠"} {c.tagLabel}
                          </span>
                        </div>
                        <p style={{ fontSize: "11.5px", lineHeight: "1.85", color: "#57534e", margin: 0 }}>
                          {c.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p style={{ marginTop: "16px", fontSize: "10px", color: "#d1cdc8", letterSpacing: "0.3px" }}>
              Hover a dot · click a card to read more
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
