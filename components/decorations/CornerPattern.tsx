export default function CornerPattern({ className = "", position = "top-left" }: { className?: string, position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const rotation = {
    "top-left": "rotate(0)",
    "top-right": "rotate(90)",
    "bottom-right": "rotate(180)",
    "bottom-left": "rotate(270)",
  };

  return (
    <div className={`absolute w-32 h-32 md:w-48 md:h-48 pointer-events-none z-0 ${className}`} 
         style={{ 
           top: position.includes("top") ? 0 : undefined,
           bottom: position.includes("bottom") ? 0 : undefined,
           left: position.includes("left") ? 0 : undefined,
           right: position.includes("right") ? 0 : undefined,
         }}>
      <svg viewBox="0 0 100 100" className="w-full h-full text-gold/40 fill-current" transform={rotation[position]}>
        <path d="M0 0 L100 0 L100 10 Q60 10 40 40 Q10 60 10 100 L0 100 Z" />
        <path d="M15 15 Q40 15 55 40 Q70 65 70 90 L65 90 Q65 70 50 50 Q30 30 10 30 L10 15 Z" fillOpacity="0.6" />
        <circle cx="20" cy="20" r="3" />
        <circle cx="35" cy="15" r="2" />
        <circle cx="15" cy="35" r="2" />
      </svg>
    </div>
  );
}
