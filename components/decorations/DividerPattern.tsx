export default function DividerPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full h-12 flex items-center justify-center opacity-60 ${className}`}>
      <svg viewBox="0 0 300 40" className="h-full w-auto text-gold fill-current">
        {/* Center Motif */}
        <circle cx="150" cy="20" r="5" />
        <path d="M150 10 Q160 20 150 30 Q140 20 150 10" />
        
        {/* Left Wing */}
        <path d="M140 20 Q120 10 100 20 T60 20 T20 20" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="20" r="2" />
        <circle cx="60" cy="20" r="2" />
        <circle cx="20" cy="20" r="3" />
        
        {/* Right Wing */}
        <path d="M160 20 Q180 10 200 20 T240 20 T280 20" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="200" cy="20" r="2" />
        <circle cx="240" cy="20" r="2" />
        <circle cx="280" cy="20" r="3" />
      </svg>
    </div>
  );
}
