/**
 * Physics Visual Lab Simulations Data
 * Configuration, equations, default parameters, and descriptions for 6 interactive simulations
 * Equations use clean Unicode/HTML — no LaTeX dependency required.
 */

export const simulationsData = [
  {
    id: "projectile",
    name: "Projectile Motion",
    badge: "Kinematics",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20h16M4 20C8 10 16 10 20 20"/></svg>`,
    description: "Launch projectiles at customizable velocities and angles to observe parabolic trajectories, maximum height, range, and flight time.",
    formulaPrimary: "y = x·tan θ − gx² / (2v₀²·cos²θ)",
    formulaLines: [
      "Range:   R = v₀²·sin(2θ) / g",
      "Height:  H = v₀²·sin²θ / (2g)",
      "Time:    T = 2v₀·sinθ / g"
    ],
    metrics: [
      { id: "maxHeight", label: "Max Height (H)", unit: "m" },
      { id: "range", label: "Range (R)", unit: "m" },
      { id: "flightTime", label: "Flight Time (T)", unit: "s" }
    ],
    parameters: [
      { id: "velocity", label: "Initial Velocity (v₀)", min: 10, max: 100, step: 1, default: 45, unit: "m/s" },
      { id: "angle", label: "Launch Angle (θ)", min: 5, max: 85, step: 1, default: 45, unit: "°" },
      { id: "gravity", label: "Gravity (g)", min: 1.6, max: 25.0, step: 0.1, default: 9.8, unit: "m/s²" }
    ]
  },
  {
    id: "pendulum",
    name: "Simple Pendulum & SHM",
    badge: "Oscillations",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="16" y2="19"/><circle cx="16" cy="19" r="3"/></svg>`,
    description: "Explore Simple Harmonic Motion with variable pendulum length, gravity, and damping. Observe real-time kinetic and potential energy exchange.",
    formulaPrimary: "T = 2π √(L/g)",
    formulaLines: [
      "Period:    T = 2π √(L/g)",
      "Motion:    θ(t) = θ₀ · cos(ωt)",
      "Frequency: f = 1/T = (1/2π) √(g/L)"
    ],
    metrics: [
      { id: "period", label: "Time Period (T)", unit: "s" },
      { id: "frequency", label: "Frequency (f)", unit: "Hz" },
      { id: "totalEnergy", label: "Mechanical Energy", unit: "J" }
    ],
    parameters: [
      { id: "length", label: "String Length (L)", min: 0.5, max: 5.0, step: 0.1, default: 2.0, unit: "m" },
      { id: "amplitude", label: "Initial Angle (θ₀)", min: 5, max: 60, step: 1, default: 25, unit: "°" },
      { id: "damping", label: "Damping Factor (b)", min: 0, max: 0.05, step: 0.005, default: 0.005, unit: "N·s/m" }
    ]
  },
  {
    id: "wave",
    name: "Wave Propagation & Interference",
    badge: "Wave Mechanics",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12c3-6 6-6 9 0s6 6 9 0"/></svg>`,
    description: "Generate travelling harmonic waves and observe superposition, constructive/destructive interference, and standing wave patterns.",
    formulaPrimary: "y(x,t) = A·sin(kx − ωt + φ)",
    formulaLines: [
      "Wave 1:  y₁ = A₁·sin(k₁x − ω₁t)",
      "Wave 2:  y₂ = A₂·sin(k₂x − ω₂t + φ)",
      "Result:  y = y₁ + y₂  (Superposition)"
    ],
    metrics: [
      { id: "wavelength", label: "Wavelength (λ)", unit: "m" },
      { id: "waveSpeed", label: "Wave Speed (v)", unit: "m/s" },
      { id: "state", label: "Interference Mode", unit: "" }
    ],
    parameters: [
      { id: "frequency", label: "Frequency (f)", min: 0.2, max: 3.0, step: 0.1, default: 1.0, unit: "Hz" },
      { id: "amplitude", label: "Amplitude (A)", min: 10, max: 60, step: 2, default: 35, unit: "px" },
      { id: "phaseShift", label: "Phase Difference (Δφ)", min: 0, max: 360, step: 15, default: 0, unit: "°" }
    ]
  },
  {
    id: "orbit",
    name: "Satellite Orbit & Gravitation",
    badge: "Astrophysics",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><ellipse cx="12" cy="12" rx="10" ry="5"/></svg>`,
    description: "Simulate celestial orbits around Earth. Adjust orbital radius to observe orbital speed, Kepler's 3rd Law, and escape velocity boundary.",
    formulaPrimary: "v_orb = √(GM/r)",
    formulaLines: [
      "Orbital speed:  v = √(GM/r)",
      "Kepler 3rd:     T² = (4π²/GM) · r³",
      "Escape speed:   v_esc = √(2GM/r)"
    ],
    metrics: [
      { id: "orbitalSpeed", label: "Orbital Velocity (v)", unit: "km/s" },
      { id: "orbitalPeriod", label: "Period (T)", unit: "min" },
      { id: "escapeSpeed", label: "Escape Velocity (v_esc)", unit: "km/s" }
    ],
    parameters: [
      { id: "altitude", label: "Altitude above Earth (h)", min: 200, max: 36000, step: 200, default: 1200, unit: "km" },
      { id: "massScale", label: "Central Body Mass (M)", min: 0.5, max: 3.0, step: 0.1, default: 1.0, unit: "× M_Earth" }
    ]
  },
  {
    id: "lorentz",
    name: "Lorentz Force & Magnetic Deflection",
    badge: "Electrodynamics",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg>`,
    description: "Inject charged particles into magnetic and electric fields to observe circular cyclotron orbits and helical deflection trajectories.",
    formulaPrimary: "F = q(E + v × B)",
    formulaLines: [
      "Lorentz Force:    F = q(E + v × B)",
      "Cyclotron Radius: r = mv / (qB)",
      "Cyclotron Freq:   f_c = qB / (2πm)"
    ],
    metrics: [
      { id: "gyroRadius", label: "Cyclotron Radius (r)", unit: "cm" },
      { id: "cyclotronFreq", label: "Cyclotron Freq (f_c)", unit: "MHz" },
      { id: "deflectionDir", label: "Force Direction", unit: "" }
    ],
    parameters: [
      { id: "bField", label: "Magnetic Field (B)", min: 0.1, max: 2.0, step: 0.1, default: 0.8, unit: "Tesla" },
      { id: "particleSpeed", label: "Particle Velocity (v)", min: 1, max: 20, step: 1, default: 10, unit: "×10⁵ m/s" },
      { id: "chargeSign", label: "Particle Charge (q)", min: -1, max: 1, step: 2, default: 1, unit: "e" }
    ]
  },
  {
    id: "gas",
    name: "Kinetic Theory of Ideal Gases",
    badge: "Thermodynamics",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="10" cy="16" r="1.5"/></svg>`,
    description: "Microscopic simulation of elastic molecular collisions inside a container. Adjust temperature and volume to witness real-time pressure changes.",
    formulaPrimary: "PV = Nk_B T",
    formulaLines: [
      "Ideal Gas:    PV = Nk_B T",
      "Pressure:     P = (1/3) · Nm⟨v²⟩ / V",
      "RMS Speed:    v_rms = √(3k_B T / m)"
    ],
    metrics: [
      { id: "pressure", label: "Pressure (P)", unit: "kPa" },
      { id: "vRms", label: "RMS Speed (v_rms)", unit: "m/s" },
      { id: "collisions", label: "Wall Collisions / sec", unit: "Hz" }
    ],
    parameters: [
      { id: "temperature", label: "Temperature (T)", min: 100, max: 800, step: 20, default: 300, unit: "K" },
      { id: "numParticles", label: "Molecule Count (N)", min: 20, max: 100, step: 5, default: 50, unit: "particles" }
    ]
  }
];
