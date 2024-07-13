import ReactParticles from 'react-tsparticles';
import { useThemeContext } from '../hooks/themeHook';

const LIGHT_THEME_PARTICLES = {
  number: {
    value: 10, // Lower density
    density: {
      enable: true,
      value_area: 800,
    },
  },
  color: {
    value: '#0e4429',
  },
  opacity: {
    value: 0.6, // Reduced opacity
    random: true,
    anim: {
      enable: true,
      speed: 1,
      opacity_min: 0.1,
      sync: false,
    },
  },
  size: {
    value: 3,
    random: true,
    anim: {
      enable: true,
      speed: 2,
      size_min: 1,
      sync: false,
    },
  },
  links: {
    enable: true,
    color: '#0e4429',
    distance: 50,
    width: 1,
    consent: false,
  },
  move: {
    enable: true,
    speed: 1,
    direction: 'none',
    random: false,
    straight: false,
    out_mode: 'bounce', // Keep particles within view
    bounce: true,
    attract: {
      enable: false,
      rotateX: 600,
      rotateY: 1200,
    },
  },
};

export const DARK_THEME_PARTICLES = {
  number: {
    value: 100,
    density: {
      enable: true,
      area: 800,
    },
  },
  move: {
    enable: true,
    direction: 'right',
    speed: 0.05,
  },
  size: {
    value: 1,
  },
  opacity: {
    anim: {
      enable: true,
      speed: 1,
      opacity_min: 0.05,
    },
  },
};

function Particle() {
  const { dark } = useThemeContext();

  const particles = dark
    ? DARK_THEME_PARTICLES
    : LIGHT_THEME_PARTICLES;

  return (
    <ReactParticles
      id="tsparticles"
      params={{
        particles: particles,
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
