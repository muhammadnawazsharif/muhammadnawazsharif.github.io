/**
 * Student Portal Hub Data ("For My Students")
 * Quick-access resources, formula cheat-sheet, past papers, assignments
 * Formulas use clean Unicode — no LaTeX dependency.
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
        { name: "Equations of Motion",    formula: "v_f = v_i + at  |  s = v_i·t + ½at²  |  v_f² = v_i² + 2as", note: "Uniform acceleration only" },
        { name: "Newton's 2nd Law",        formula: "F = ma = Δp / Δt",                                              note: "Force is rate of change of momentum" },
        { name: "Projectile Range",        formula: "R = v₀²·sin(2θ) / g",                                          note: "Maximum range when θ = 45°" },
        { name: "Projectile Max Height",   formula: "H = v₀²·sin²θ / (2g)",                                         note: "Vertical velocity = 0 at apex" }
      ]
    },
    {
      category: "Gravitation & Circular Motion",
      items: [
        { name: "Universal Gravitation",          formula: "F = G·m₁m₂ / r²",                             note: "G = 6.674 × 10⁻¹¹ N m² kg⁻²" },
        { name: "Mass of Earth",                  formula: "M_E = g·R_E² / G  ≈  5.97 × 10²⁴ kg",       note: "R_E = 6.371 × 10⁶ m" },
        { name: "Variation of g with Altitude",   formula: "g_h ≈ g·(1 − 2h/R)",                          note: "Valid for small altitudes h << R" },
        { name: "Orbital Velocity",               formula: "v_orb = √(GM/r)  ≈  7.91 km/s",              note: "Low Earth orbit condition" },
        { name: "Escape Velocity",                formula: "v_esc = √(2GM/R)  = √2 · v_orb  ≈  11.2 km/s", note: "Independent of projectile mass" }
      ]
    },
    {
      category: "Work, Energy & Power",
      items: [
        { name: "Work Definition",          formula: "W = F·d·cosθ",                              note: "Unit: Joule (J = N·m)" },
        { name: "Work-Energy Theorem",      formula: "W_net = ΔKE = ½mv_f² − ½mv_i²",            note: "Valid for all forces" },
        { name: "Absolute Potential Energy",formula: "U = −G·M·m / r",                            note: "Zero reference at infinity (r → ∞)" }
      ]
    },
    {
      category: "Oscillations & Waves",
      items: [
        { name: "Simple Pendulum Period",   formula: "T = 2π √(L/g)",        note: "Independent of bob mass for small angles" },
        { name: "Spring-Mass Period",       formula: "T = 2π √(m/k)",        note: "k is spring stiffness constant" },
        { name: "Wave Velocity Relation",   formula: "v = f · λ",             note: "v depends purely on medium properties" }
      ]
    }
  ]
};
