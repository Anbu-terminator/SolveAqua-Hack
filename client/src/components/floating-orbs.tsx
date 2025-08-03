export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-floating-orbs opacity-20"
          style={{
            left: `${5 + (i * 12)}%`,
            top: `${15 + (i * 8)}%`,
            width: `${30 + (i * 15)}px`,
            height: `${30 + (i * 15)}px`,
            background: `radial-gradient(circle, ${
              ['var(--smart-cities)', 'var(--healthtech)', 'var(--agritech)', 'var(--green-energy)', 'var(--mobility)', 'rgba(255,255,255,0.4)', 'rgba(0,191,255,0.3)', 'rgba(255,215,0,0.3)'][i]
            }, transparent)`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${8 + (i * 1.5)}s`,
          }}
        />
      ))}
      {/* Additional spiral orbs */}
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={`spiral-${i}`}
          className="absolute rounded-full animate-spiral opacity-25"
          style={{
            right: `${10 + (i * 20)}%`,
            bottom: `${20 + (i * 15)}%`,
            width: `${50 + (i * 10)}px`,
            height: `${50 + (i * 10)}px`,
            background: `radial-gradient(circle, ${
              ['rgba(147,144,195,0.4)', 'rgba(123,104,184,0.4)', 'rgba(255,165,0,0.4)', 'rgba(0,255,127,0.4)'][i]
            }, transparent)`,
            animationDelay: `${i * 3}s`,
            animationDuration: `${15 + (i * 2)}s`,
          }}
        />
      ))}
    </div>
  );
}