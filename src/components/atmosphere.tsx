"use client";

const STARS = [
  { top: "12%", left: "18%", delay: "0s", size: 2 },
  { top: "22%", left: "72%", delay: "1.4s", size: 2 },
  { top: "8%", left: "46%", delay: "2.2s", size: 1.5 },
  { top: "30%", left: "88%", delay: "0.6s", size: 1.5 },
  { top: "18%", left: "8%", delay: "3s", size: 1.5 },
  { top: "40%", left: "34%", delay: "1.8s", size: 2 },
  { top: "14%", left: "60%", delay: "2.8s", size: 1 },
  { top: "36%", left: "54%", delay: "0.2s", size: 1 },
];

export function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="sky absolute inset-0" />
      <div className="moon" />
      <div className="lamp" />
      {STARS.map((star) => (
        <span
          key={`${star.top}-${star.left}`}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}
      <div className="grain" />
    </div>
  );
}
