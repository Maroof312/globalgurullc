import './ParticleCanvas.scss';

export default function ParticleCanvas() {
  // Generate random values in JavaScript instead of SCSS
  const particles = [...Array(25)].map((_, i) => ({
    id: i,
    size: `${Math.random() * 5 + 2}px`,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    duration: `${Math.random() * 25 + 15}s`,
    delay: `${Math.random() * 3}s`,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`
  }));

  return (
    <div className="particle-canvas">
      {particles.map((particle) => (
        <div 
          key={particle.id}
          className="particle"
          style={{
            '--size': particle.size,
            '--color': particle.color,
            '--duration': particle.duration,
            '--delay': particle.delay,
            '--x': particle.x,
            '--y': particle.y
          }}
        />
      ))}
    </div>
  );
}