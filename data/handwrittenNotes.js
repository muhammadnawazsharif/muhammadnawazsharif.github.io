/**
 * Handwritten Physics Notes Showcase Data
 * Authentic verified handwritten lecture notes by Muhammad Nawaz Sharif
 * Lecturer in Physics, Govt. Boys Inter College Gamba, Skardu
 * Domain: https://muhammadnawazsharif.github.io/
 */

export const handwrittenNotes = [
  {
    id: "note-gravitation-intro",
    title: "Chapter 1: Gravitation & Newton's Law",
    subtitle: "Newton's Law of Universal Gravitation, Cavendish Experiment & Inverse Square Law",
    chapter: "Chapter 01",
    classLevel: "2nd Year Physics",
    image: "./assets/images/notes/note_gravitation_intro.png",
    downloadPdf: "./assets/documents/Physics_First_Year_Complete_Notes.pdf",
    tags: ["Gravitation", "Inverse Square Law", "Cavendish", "G Constant"],
    summary: "Complete handwritten derivation of Newton's Law of Universal Gravitation, statement, Cavendish experiment confirmation, and Inverse Square Law graphing (F vs r).",
    equations: ["F = G \\frac{m_1 m_2}{r^2}", "G = 6.67 \\times 10^{-11} \\text{ N m}^2\\text{kg}^{-2}"]
  },
  {
    id: "note-newtons-3rd-law",
    title: "Gravitation Consistent with Newton's 3rd Law & G vs g",
    subtitle: "Mutual force symmetry (F₁₂ = -F₂₁) & 8-point comparison table of G with g",
    chapter: "Chapter 01",
    classLevel: "2nd Year Physics",
    image: "./assets/images/notes/note_newtons_3rd_law.png",
    downloadPdf: "./assets/documents/Physics_First_Year_Complete_Notes.pdf",
    tags: ["Newton's 3rd Law", "G vs g", "Comparison Table", "Dimensions"],
    summary: "Step-by-step proof that Newton's law of gravitation perfectly satisfies Newton's 3rd law of motion, accompanied by a rigorous 8-row comparison between Universal Gravitational Constant (G) and Acceleration due to gravity (g).",
    equations: ["F_{12} = -F_{21}", "g = \\frac{GM}{R^2}"]
  },
  {
    id: "note-mass-of-earth",
    title: "Determination of the Mass of the Earth",
    subtitle: "Complete mathematical derivation & numerical computation (M_E = 5.97 × 10²⁴ kg)",
    chapter: "Chapter 01",
    classLevel: "2nd Year Physics",
    image: "./assets/images/notes/note_mass_of_earth.png",
    downloadPdf: "./assets/documents/Physics_First_Year_Complete_Notes.pdf",
    tags: ["Mass of Earth", "Derivation", "Numerical Calculation", "Earth Radius"],
    summary: "Derivation of formula M_E = (g R_E²) / G by equating weight with gravitational force, followed by step-by-step numerical substitution yielding M_E ≈ 5.97 × 10²⁴ kg.",
    equations: ["M_E = \\frac{g R_E^2}{G}", "M_E = 5.97 \\times 10^{24} \\text{ kg}"]
  },
  {
    id: "note-value-of-g",
    title: "Value of 'g' on Earth's Surface & Variations",
    subtitle: "Surface calculation (9.83 m/s²) and variation with altitude, depth & latitude",
    chapter: "Chapter 01",
    classLevel: "2nd Year Physics",
    image: "./assets/images/notes/note_value_of_g.png",
    downloadPdf: "./assets/documents/Physics_First_Year_Complete_Notes.pdf",
    tags: ["Acceleration due to gravity", "Earth Shape", "Depth", "Latitude"],
    summary: "Numerical derivation of surface g = 9.83 m/s², alongside detailed physical explanations and formulas for variation with altitude, variation with depth g_d = g(1 - d/R), and oblate spheroid equator-pole effects.",
    equations: ["g = \\frac{GM}{R^2} \\approx 9.83 \\text{ ms}^{-2}", "g_d = g(1 - \\frac{d}{R})"]
  },
  {
    id: "note-variation-altitude-binomial",
    title: "Variation of 'g' at an Altitude (Binomial Expansion)",
    subtitle: "Rigorous binomial derivation for small altitudes (h << R) & g vs h curve",
    chapter: "Chapter 01",
    classLevel: "2nd Year Physics",
    image: "./assets/images/notes/note_variation_of_g_altitude.png",
    downloadPdf: "./assets/documents/Physics_First_Year_Complete_Notes.pdf",
    tags: ["Binomial Expansion", "Altitude", "Linear Decrease", "Graph g vs h"],
    summary: "Proof of g_h = g (R / (R+h))², application of binomial theorem for small heights giving g_h ≈ g(1 - 2h/R), and asymptotic table of g values at h = 0, R/2, R, 2R, ∞.",
    equations: ["g_h = g \\left(\\frac{R}{R+h}\\right)^2", "g_h \\approx g \\left(1 - \\frac{2h}{R}\\right)"]
  },
  {
    id: "note-gravitational-field-strength",
    title: "Gravitational Field Strength & Field Lines",
    subtitle: "Definition, formula, units, and radial vs uniform gravitational field line diagrams",
    chapter: "Chapter 01",
    classLevel: "2nd Year Physics",
    image: "./assets/images/notes/note_gravitational_field_strength.png",
    downloadPdf: "./assets/documents/Physics_First_Year_Complete_Notes.pdf",
    tags: ["Field Strength", "Field Lines", "Mean Density", "Vector Field"],
    summary: "Comprehensive breakdown of Gravitational Field Strength g = F/m, planetary surface formula in terms of mean density ρ, and 5 key properties of continuous gravitational field lines.",
    equations: ["g = \\frac{GM}{r^2}", "g = \\frac{4}{3}\\pi G \\rho R"]
  },
  {
    id: "note-satellites-and-orbits",
    title: "Satellites and Orbits (Orbital & Escape Velocity)",
    subtitle: "Orbital velocity derivation, circular orbit conditions & escape speed comparison",
    chapter: "Chapter 01",
    classLevel: "2nd Year Physics",
    image: "./assets/images/notes/note_satellites_and_orbits.png",
    downloadPdf: "./assets/documents/Physics_First_Year_Complete_Notes.pdf",
    tags: ["Satellites", "Orbital Velocity", "Escape Velocity", "Kepler Orbits"],
    summary: "Step-by-step derivation of orbital velocity v = √(GM/r), computation at low altitude v = 7.91 km/s, comparison with Escape Velocity v_esc = √(2GM/R) = 11.2 km/s, and orbital altitude relationships.",
    equations: ["v = \\sqrt{\\frac{GM}{r}}", "v_{esc} = \\sqrt{2} v_{orb} = 11.2 \\text{ km/s}"]
  },
  {
    id: "note-variation-altitude-proof",
    title: "Variation of 'g' with Altitude - Detailed Proof",
    subtitle: "Complete mathematical presentation for college board examinations",
    chapter: "Chapter 01",
    classLevel: "2nd Year Physics",
    image: "./assets/images/notes/note_variation_of_g_formula.png",
    downloadPdf: "./assets/documents/Physics_First_Year_Complete_Notes.pdf",
    tags: ["Board Exam Preparation", "Altitude Formula", "Summary Sheet"],
    summary: "Clear summary notes formatted for board exam answer writing, detailing introductory statement, diagram, altitude formula, and numerical calculation example.",
    equations: ["g_h = g \\left(1 - \\frac{2h}{R}\\right)", "g_{surface} = 9.8 \\text{ ms}^{-2}"]
  }
];
