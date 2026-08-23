/**
 * Physics Universe Topics Data
 * 12 Comprehensive Intermediate & College Physics Modules
 */

export const physicsTopics = [
  {
    id: "mechanics",
    title: "Mechanics & Kinematics",
    category: "Classical Physics",
    badge: "Chapter 01 - 03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
    formula: "v_f^2 = v_i^2 + 2as",
    description: "Vector analysis, 1D/2D motion, projectile trajectories, Newton's laws of motion, momentum conservation, and collision dynamics.",
    keyConcepts: [
      "Vector resolution and rectangular components",
      "Equations of uniformly accelerated linear motion",
      "Projectile motion (Range, Max Height, Time of Flight)",
      "Newton's 1st, 2nd, and 3rd Laws of Motion",
      "Law of Conservation of Linear Momentum & Elastic Collisions"
    ],
    slos: [
      "Derive projectile trajectories and solve multi-variable kinematics problems.",
      "Apply Newton's second law in non-inertial and inertial reference frames.",
      "Analyze 1D and 2D elastic and inelastic collisions using conservation laws."
    ]
  },
  {
    id: "circular-gravitation",
    title: "Circular Motion & Gravitation",
    category: "Classical Mechanics",
    badge: "Core Topic",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="9" stroke-dasharray="4 4"/></svg>`,
    formula: "F_g = G \\frac{m_1 m_2}{r^2}",
    description: "Centripetal acceleration, angular displacement, Newton's law of universal gravitation, variation of g with altitude, and orbital dynamics.",
    keyConcepts: [
      "Centripetal acceleration a_c = v²/r = rω²",
      "Newton's Universal Law of Gravitation & Cavendish Experiment",
      "Determination of Mass of the Earth (M_E = 5.97 × 10²⁴ kg)",
      "Variation of 'g' with altitude, depth, and Earth's shape",
      "Orbital velocity (v = √(GM/r)) and Escape velocity (v_esc = √(2GM/R))"
    ],
    slos: [
      "Prove consistency between Newton's Gravitation and 3rd Law of Motion.",
      "Derive expression for acceleration due to gravity at height h using binomial expansion.",
      "Calculate orbital parameters for low-Earth and geostationary satellites."
    ]
  },
  {
    id: "work-energy",
    title: "Work, Energy & Power",
    category: "Classical Mechanics",
    badge: "Core Topic",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
    formula: "W = \\int \\vec{F} \\cdot d\\vec{r} = \\Delta K",
    description: "Work done by constant and variable forces, Work-Energy Theorem, conservative forces, potential energy, and non-conventional energy sources.",
    keyConcepts: [
      "Scalar product formulation of Work (W = F d cos θ)",
      "Work done by gravitational and spring variable forces",
      "Absolute Gravitational Potential Energy (U = -GMm/r)",
      "Conservation of Mechanical Energy in isolated systems",
      "Power definition and instantaneous power (P = F · v)"
    ],
    slos: [
      "Calculate work from Force-Displacement graphs for variable forces.",
      "Derive absolute gravitational potential energy from infinity to distance r.",
      "Analyze energy conversion in conservative and dissipative systems."
    ]
  },
  {
    id: "rotational-dynamics",
    title: "Rotational Dynamics",
    category: "Classical Mechanics",
    badge: "Advanced Mechanics",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`,
    formula: "\\tau = I \\alpha, \\quad L = I \\omega",
    description: "Torque, moment of inertia of geometric bodies, rotational kinetic energy, angular momentum, and gyroscopic motion principles.",
    keyConcepts: [
      "Torque as vector cross product (τ = r × F)",
      "Moment of Inertia (I = ∑ m_i r_i²) for disks, spheres, and rods",
      "Rotational Kinetic Energy (K_rot = 1/2 I ω²)",
      "Conservation of Angular Momentum (L = const)",
      "Rolling without slipping down an inclined plane"
    ],
    slos: [
      "Compare translational and rotational kinematic equations side by side.",
      "Calculate speeds of hoop and disc rolling down an incline.",
      "Apply conservation of angular momentum to astrophysical and mechanical systems."
    ]
  },
  {
    id: "fluid-mechanics",
    title: "Fluid Mechanics",
    category: "Continuous Media",
    badge: "Fluid Dynamics",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    formula: "P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{const}",
    description: "Viscosity, Stokes' Law, terminal velocity, equation of continuity, Bernoulli's equation, and real-world aerodynamic lift.",
    keyConcepts: [
      "Fluid friction and viscosity (η)",
      "Stokes' Law (F_d = 6πηrv) and Terminal Velocity derivation",
      "Equation of Continuity (A_1 v_1 = A_2 v_2)",
      "Bernoulli's Principle and Torricelli's Theorem",
      "Venturi meter, carburetor, and dynamic lift on airplane wings"
    ],
    slos: [
      "Derive terminal velocity for spherical droplet falling in air.",
      "State and mathematically derive Bernoulli's equation from work-energy theorem.",
      "Explain aerodynamic lift and blood pressure measurements using fluid laws."
    ]
  },
  {
    id: "thermodynamics",
    title: "Thermodynamics & Kinetic Theory",
    category: "Thermal Physics",
    badge: "Heat & Energy",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`,
    formula: "PV = N k_B T, \\quad \\Delta Q = \\Delta U + W",
    description: "Microscopic model of gases, First and Second Laws of Thermodynamics, Carnot heat engines, entropy, and statistical distributions.",
    keyConcepts: [
      "Kinetic Theory interpretation of Gas Pressure and Temperature",
      "First Law of Thermodynamics (Isothermal, Adiabatic, Isochoric, Isobaric)",
      "Molar specific heat capacities (C_p - C_v = R)",
      "Second Law of Thermodynamics (Kelvin-Planck & Clausius statements)",
      "Carnot Engine cycle, Maximum Theoretical Efficiency, and Entropy"
    ],
    slos: [
      "Derive pressure of an ideal gas P = 1/3 ρ <v²> from kinetic theory.",
      "Calculate work done during isothermal and adiabatic expansions.",
      "Determine maximum efficiency of Carnot heat engine operating between two reservoirs."
    ]
  },
  {
    id: "waves-oscillations",
    title: "Waves, Oscillations & Sound",
    category: "Periodic Motion",
    badge: "Wave Mechanics",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12c3-6 6-6 9 0s6 6 9 0"/></svg>`,
    formula: "T = 2\\pi \\sqrt{\\frac{m}{k}}, \\quad v = f\\lambda",
    description: "Simple Harmonic Motion (SHM), simple pendulum, resonance, damping, stationary waves in strings/pipes, and Doppler Effect.",
    keyConcepts: [
      "Characteristics of SHM (Displacement, Velocity, Acceleration)",
      "Energy conservation in simple pendulum and spring-mass systems",
      "Free, forced, and damped oscillations & Resonance",
      "Transverse and longitudinal waves & Speed of sound (Laplace correction)",
      "Doppler effect for moving sources and observers"
    ],
    slos: [
      "Derive time period for a simple pendulum of length L.",
      "Explain the Laplace correction to Newton's formula for speed of sound in air.",
      "Calculate apparent frequency shifts in sound for all 4 Doppler cases."
    ]
  },
  {
    id: "electromagnetism",
    title: "Electricity & Magnetism",
    category: "Electrodynamics",
    badge: "Field Theory",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
    formula: "\\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B})",
    description: "Coulomb's law, Gauss's law, electric potential, capacitance, Kirchhoff's rules, Ampere's law, Faraday's induction, and Lenz's law.",
    keyConcepts: [
      "Electric Field and Potential due to discrete and continuous charges",
      "Gauss's Law and applications to symmetrical charge distributions",
      "Capacitors, Dielectrics, and Energy density in electric fields",
      "Magnetic force on moving charges and current-carrying conductors",
      "Faraday's Law of Electromagnetic Induction & Motional EMF"
    ],
    slos: [
      "Apply Gauss's Law to calculate field strength near infinite charged sheet.",
      "Solve complex DC networks using Kirchhoff's Current and Voltage Rules.",
      "Explain electromagnetic induction and derive self & mutual inductance."
    ]
  },
  {
    id: "electronics",
    title: "Electronics & Semiconductors",
    category: "Applied Physics",
    badge: "Modern Tech",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="4"/><circle cx="12" cy="12" r="4"/></svg>`,
    formula: "I_E = I_B + I_C, \\quad A_v = -\\frac{R_f}{R_{in}}",
    description: "P-N junctions, diodes, half/full-wave rectification, bipolar junction transistors (BJT), operational amplifiers, and digital logic gates.",
    keyConcepts: [
      "Intrinsic and extrinsic semiconductors (P-type and N-type)",
      "P-N junction diode forward and reverse bias characteristics",
      "Rectification (Half-wave and Full-wave bridge rectifiers)",
      "Transistor as an amplifier and switch in CE configuration",
      "Operational Amplifiers as inverting, non-inverting, and comparator circuits"
    ],
    slos: [
      "Sketch and explain V-I characteristics of silicon and germanium diodes.",
      "Calculate voltage gain of inverting and non-inverting operational amplifiers.",
      "Design combinational logic circuits using basic and universal gates."
    ]
  },
  {
    id: "modern-physics",
    title: "Modern Physics & Quantum Theory",
    category: "Quantum Physics",
    badge: "20th Century Physics",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/></svg>`,
    formula: "E = h\\nu, \\quad \\lambda = \\frac{h}{p}",
    description: "Blackbody radiation, Photoelectric effect, Compton scattering, de Broglie matter waves, Heisenberg uncertainty principle, and Bohr atom.",
    keyConcepts: [
      "Planck's Quantum Hypothesis and Blackbody Radiation curves",
      "Einstein's Photoelectric Equation and work function",
      "Compton effect and photon momentum",
      "Wave-particle duality & de Broglie matter wavelength",
      "Heisenberg's Uncertainty Principle (Δx Δp ≥ ℏ/2)"
    ],
    slos: [
      "Derive Einstein's photoelectric equation and explain stopping potential.",
      "Calculate de Broglie wavelength for electrons and macroscopic particles.",
      "Explain quantized energy levels in hydrogen atom using Bohr's postulates."
    ]
  },
  {
    id: "relativity",
    title: "Special Theory of Relativity",
    category: "Relativistic Physics",
    badge: "Space-Time",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17 12 12 2 17"/></svg>`,
    formula: "E = mc^2, \\quad \\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}",
    description: "Postulates of Special Relativity, Lorentz transformations, time dilation, length contraction, relativistic mass, and mass-energy equivalence.",
    keyConcepts: [
      "Einstein's Postulates of Special Relativity",
      "Lorentz Transformation vs Galilean Relativity",
      "Time Dilation (t = γ t₀) and Twin Paradox",
      "Length Contraction (L = L₀ / γ)",
      "Mass-Energy Equivalence (E² = (pc)² + (m₀c²)²)"
    ],
    slos: [
      "Explain the physical significance of constancy of the speed of light.",
      "Calculate time dilation and length contraction for relativistic speeds.",
      "Derive and explain mass-energy equivalence E = mc²."
    ]
  },
  {
    id: "nuclear-particle",
    title: "Nuclear & Particle Physics",
    category: "High Energy Physics",
    badge: "Subatomic Physics",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>`,
    formula: "N(t) = N_0 e^{-\\lambda t}, \\quad Q = \\Delta m \\cdot c^2",
    description: "Atomic nucleus, mass defect and binding energy, radioactivity (alpha, beta, gamma), nuclear fission & fusion, and Standard Model quarks.",
    keyConcepts: [
      "Nuclear structure, isotopes, and nuclear forces",
      "Mass defect (Δm) and Binding Energy per nucleon curve",
      "Radioactive decay law, half-life (T_1/2), and decay constant",
      "Nuclear Fission (controlled chain reaction in reactors) & Nuclear Fusion",
      "Introduction to elementary particles: Quarks, Leptons, and Bosons"
    ],
    slos: [
      "Calculate mass defect and total binding energy for nuclei.",
      "Solve radioactive decay problems using exponential decay equations.",
      "Distinguish between fission and fusion energy release mechanisms."
    ]
  }
];
