"use client";
import { useState, useEffect, useCallback } from "react";

const ACCENT = "#7a9e87";

const TESTIMONIALS = [
  {
    quote: "Dr. Suraj made me feel completely at ease. Best dental experience I've ever had!",
    name: "Priya S.",
  },
  {
    quote: "Excellent care and attention to detail. My smile has never looked better!",
    name: "Rahul M.",
  },
  {
    quote: "Friendly staff and a welcoming clinic. I trust Dr. Suraj for all my dental needs.",
    name: "Anjali T.",
  },
  {
    quote: "Professional and caring. Highly recommended for anyone looking for quality dental care.",
    name: "Vikram P.",
  },
];

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback(
    (next: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setActive((next + TESTIMONIALS.length) % TESTIMONIALS.length);
        setAnimating(false);
      }, 300);
    },
    [animating]
  );

  // Auto-advance every 5 seconds
  useEffect(() => {
    const id = setInterval(() => go(active + 1), 5000);
    return () => clearInterval(id);
  }, [active, go]);

  const t = TESTIMONIALS[active];

  return (
    <div className="flex flex-col items-center" style={{ maxWidth: 760, margin: "0 auto" }}>
      {/* Card */}
      <div
        style={{
          opacity: animating ? 0 : 1,
          transform: animating ? "translateY(12px)" : "translateY(0)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          width: "100%",
          background: "white",
          border: "0.5px solid rgba(0,0,0,0.06)",
          borderRadius: 6,
          padding: "clamp(1.5rem, 5vw, 3rem) clamp(1.25rem, 5vw, 3.5rem)",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#c8a84b", fontSize: 18, letterSpacing: 4, marginBottom: "1.5rem" }}>★★★★★</p>
        <p
          style={{
            fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)",
            fontSize: "clamp(22px, 3vw, 30px)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.65,
            color: "#222",
            marginBottom: "2rem",
          }}
        >
          &ldquo;{t.quote}&rdquo;
        </p>
        <span
          style={{
            fontFamily: "var(--font-dm-sans,'DM Sans',sans-serif)",
            fontSize: 13,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
            color: "#888",
          }}
        >
          — {t.name}
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6 mt-8">
        <button
          onClick={() => go(active - 1)}
          aria-label="Previous"
          style={{
            width: 40,
            height: 40,
            border: "0.5px solid rgba(0,0,0,0.18)",
            borderRadius: "50%",
            background: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1a1a1a")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                borderRadius: 4,
                border: "none",
                background: i === active ? ACCENT : "rgba(0,0,0,0.15)",
                cursor: "pointer",
                transition: "width 0.35s ease, background 0.2s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={() => go(active + 1)}
          aria-label="Next"
          style={{
            width: 40,
            height: 40,
            border: "0.5px solid rgba(0,0,0,0.18)",
            borderRadius: "50%",
            background: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1a1a1a")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Counter */}
      <p style={{ marginTop: "1rem", fontSize: 12, color: "#aaa", letterSpacing: "0.1em" }}>
        {String(active + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
      </p>
    </div>
  );
}
