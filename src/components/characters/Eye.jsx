import { useEffect, useRef } from "react";

export default function Eye({ mode }) {
  const pupilRef = useRef(null);

  useEffect(() => {
    if (mode !== "track") return;

    const move = (e) => {
      const pupil = pupilRef.current;
      if (!pupil) return;
      
      const rect = pupil.parentElement.getBoundingClientRect();
      const angle = Math.atan2(
        e.clientY - (rect.top + rect.height / 2),
        e.clientX - (rect.left + rect.width / 2)
      );

      const r = 5; // Raio de movimento da pupila
      pupil.style.transform = `translate(${Math.cos(angle) * r}px, ${Math.sin(angle) * r}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mode]);

  return (
    <div className={`eye ${mode || ''}`}>
      <div ref={pupilRef} className="pupil" />
    </div>
  );
}

