import React from 'react';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticleBackground = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  return (
  <div>
<Particles
  id="tsparticles" 
  init={particlesInit} 
  loaded={particlesLoaded}
  options={{
  fpsLimit: 40,
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true,
      onHover: {
        enable: true,
        mode: "repulse",
    },
    },
    
  modes: {
    push: {
        quantity: 4,
    },
    repulse: {
        distance: 30,
        duration: 0.5,
    },
},
  },
  particles: {
    color: {
      value: "#f1f1f1",
    },
    collisions: {
      enable: true,
  },
  move: {
      direction: "none",
      enable: true,
      outModes: {
          default: "bounce",
      },
      random: false,
      speed: 0.2,
      straight: false,
  },
    number: {
      density: {
        enable: true,
        area: 1080
      },
      limit: 0,
      value: 200,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.5,
        speed: 1,
        sync: false
      },
      random: {
        enable: true,
        minimumValue: 0.1,
      },
      value: 1
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: {
        enable: true,
        minimumValue: 0.5,
      },
      value: 2,
    },
  },
}}/>
  </div>
  )
}
