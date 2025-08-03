export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 9 }, (_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${(i + 1) * 10}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${15 + (i % 6)}s`,
          }}
        />
      ))}
    </div>
  );
}
