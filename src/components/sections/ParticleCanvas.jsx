import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticleCanvas() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="hero-particles"
      init={particlesInit}
      options={{
        background: { color: "#0f172a" },
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: ["#0d6efd", "#6f42c1", "#0dcaf0"] },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 4, random: true },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: "out"
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
            width: 1
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" }
            }
          }
        }
      }}
      className="particle-canvas"
    />
  );
}