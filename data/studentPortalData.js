/**
 * Student Portal Hub Data ("For My Students")
 * Quick-access resources, formula cheat-sheet, past papers, assignments
 */

export const studentPortalData = {
  quickCards: [
    {
      id: "stud-notes",
      title: "Class Handouts & Notes",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
      description: "Direct chapter-wise handwritten handouts, summaries, and key points to remember.",
      actionText: "View Handouts",
      target: "notes-section"
    },
    {
      id: "stud-formulas",
      title: "Essential Physics Formulas",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12h8M12 8v8"/></svg>`,
      description: "Quick formula lookup tool with units, dimensions, and physical constants.",
      actionText: "Open Formula Sheet",
      actionType: "open-formula-modal"
    },
    {
      id: "stud-numericals",
      title: "Solved Numericals Bank",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
      description: "Step-by-step solutions for challenging textbook and board examination numericals.",
      actionText: "Browse Numericals",
      target: "resources-section"
    },
    {
      id: "stud-mcqs",
      title: "SLO-Based MCQs Bank",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
      description: "Self-assessment question sets with conceptual rationales for entry tests and board exams.",
      actionText: "Practice MCQs",
      target: "resources-section"
    },
    {
      id: "stud-pastpapers",
      title: "Board Past Papers",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
      description: "Archive of previous intermediate board examination question papers and marking schemes.",
      actionText: "Download Papers",
      target: "resources-section"
    },
    {
      id: "stud-examtips",
      title: "Exam Preparation Strategy",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      description: "Time management techniques, answer presentation tips, and common pitfalls to avoid.",
      actionText: "Read Tips",
      actionType: "open-tips-modal"
    }
  ],

  formulaSheet: [
    {
      category: "Kinematics & Dynamics",
      items: [
        { name: "Equations of Motion", formula: "v_f = v_i + at, \\quad s = v_i t + \\frac{1}{2}at^2, \\quad 2as = v_f^2 - v_i^2", note: "Uniform acceleration only" },
        { name: "Newton's 2nd Law", formula: "F = ma = \\frac{\\Delta p}{\\Delta t}", note: "Force is rate of change of momentum" },
        { name: "Projectile Range", formula: "R = \\frac{v_0^2 \\sin 2\\theta}{g}", note: "Max range at θ = 45°" },
        { name: "Projectile Max Height", formula: "H_{max} = \\frac{v_0^2 \\sin^2\\theta}{2g}", note: "Vertical velocity component is zero at apex" }
      ]
    },
    {
      category: "Gravitation & Circular Motion",
      items: [
        { name: "Universal Gravitation", formula: "F = G \\frac{m_1 m_2}{r^2}", note: "G = 6.674 × 10⁻¹¹ N m² kg⁻²" },
        { name: "Mass of Earth", formula: "M_E = \\frac{g R_E^2}{G} \\approx 5.97 \\times 10^{24} \\text{ kg}", note: "R_E = 6.371 × 10⁶ m" },
        { name: "Variation of g with Altitude", formula: "g_h \\approx g \\left(1 - \\frac{2h}{R}\\right)", note: "Valid for small altitudes h << R" },
        { name: "Orbital Velocity", formula: "v_{orb} = \\sqrt{\\frac{GM}{r}} \\approx 7.91 \\text{ km/s}", note: "Low Earth orbit condition" },
        { name: "Escape Velocity", formula: "v_{esc} = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2} v_{orb} \\approx 11.2 \\text{ km/s}", note: "Independent of projectile mass" }
      ]
    },
    {
      category: "Work, Energy & Power",
      items: [
        { name: "Work Definition", formula: "W = \\vec{F} \\cdot \\vec{d} = F d \\cos\\theta", note: "Unit: Joule (J = N·m)" },
        { name: "Work-Energy Theorem", formula: "W_{net} = \\Delta K = \\frac{1}{2}m v_f^2 - \\frac{1}{2}m v_i^2", note: "Valid for all forces" },
        { name: "Absolute Potential Energy", formula: "U = -\\frac{G M m}{r}", note: "Zero reference at infinity (r → ∞)" }
      ]
    },
    {
      category: "Oscillations & Waves",
      items: [
        { name: "Simple Pendulum Period", formula: "T = 2\\pi \\sqrt{\\frac{L}{g}}", note: "Independent of bob mass for small angles" },
        { name: "Spring-Mass Period", formula: "T = 2\\pi \\sqrt{\\frac{m}{k}}", note: "k is spring stiffness constant" },
        { name: "Wave Velocity Relation", formula: "v = f \\lambda", note: "v depends purely on medium properties" }
      ]
    }
  ]
};
