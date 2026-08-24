/**
 * Articles & Academic Writing Data
 * Muhammad Nawaz Sharif - Physics Lecturer
 */

export const articlesData = [
  {
    id: "art-01",
    title: "Demystifying Gravitational Fields & Newton's Third Law Symmetry",
    category: "Classical Mechanics",
    date: "Academic Year 2025-2026",
    author: "Muhammad Nawaz Sharif",
    readTime: "6 min read",
    summary: "An in-depth pedagogical exploration of why Newton's universal law of gravitation is fundamentally consistent with action-reaction pairs, and why gravitational field lines never form closed loops.",
    content: `
      <h3>Introduction</h3>
      <p>When introducing gravitation to intermediate students, one common conceptual stumbling block is understanding how a massive object like the Earth and a small apple pull on each other with precisely equal forces. Through Newton's Third Law (F₁₂ = -F₂₁), we discover that gravitational interaction is inherently symmetric.</p>
      
      <h3>The Symmetry of Gravitational Interaction</h3>
      <p>By defining gravitational force through Newton's Universal Law, the magnitude is given by:</p>
      <div class="equation-block">F = G·m₁m₂ / r²</div>
      <p>Notice that swapping m₁ and m₂ leaves the equation invariant. The Earth pulls on the object with force F_E = G·(M·m)/R², and the object pulls back on Earth with the exact same magnitude. The difference in noticeable motion arises not from force inequality, but from Newton's Second Law: a = F/m. Because Earth's mass is astronomical (5.97 × 10²⁴ kg), its resulting acceleration is virtually zero.</p>

      <h3>Gravitational Field Strength & Field Lines</h3>
      <p>Gravitational field strength $g$ is defined as the force experienced per unit mass ($g = F/m$). Field lines are imaginary paths whose tangents indicate the field's direction. Key properties include:</p>
      <ul>
        <li>They originate symmetrically at infinity and terminate perpendicularly on mass surfaces.</li>
        <li>They never intersect because field direction at any point in space is strictly unique.</li>
        <li>They never form closed loops because gravity is purely attractive in classical mechanics.</li>
      </ul>
    `
  },
  {
    id: "art-02",
    title: "Implementing Student Learning Outcomes (SLO) in College Physics",
    category: "Pedagogy & Teaching Strategy",
    date: "Academic Year 2025-2026",
    author: "Muhammad Nawaz Sharif",
    readTime: "8 min read",
    summary: "A practical framework for transitioning from traditional rote memorization toward outcome-based physics education, fostering visual intuition and analytical reasoning.",
    content: `
      <h3>The Paradigm Shift in Physics Education</h3>
      <p>Modern physics pedagogy in Pakistan is undergoing a vital transformation through Student Learning Outcome (SLO) frameworks. SLO-based teaching shifts the classroom focus from 'what was taught' to 'what the student can comprehend, demonstrate, and apply'.</p>

      <h3>Three Pillars of SLO Mastery</h3>
      <p>1. <strong>Knowledge (Recall & Definitions):</strong> Precise understanding of physical terms, units, and constants.<br>
      2. <strong>Understanding (Conceptual Reasoning):</strong> Deriving relationships, explaining graphs, and evaluating limiting cases.<br>
      3. <strong>Application (Problem Solving):</strong> Synthesizing multiple formulas to solve real-world and unseen numerical challenges.</p>

      <h3>Visualizing Derivations</h3>
      <p>Handwritten notes with clear visual diagrams allow students to track every algebraic step. When students see how the binomial approximation (1 + x)ⁿ ≈ 1 + nx simplifies the altitude gravity equation g_h ≈ g·(1 − 2h/R), mathematics ceases to be intimidating and becomes an elegant tool of discovery.</p>
    `
  },
  {
    id: "art-03",
    title: "From Earth to Orbit: An Intuitive Guide to Orbital Mechanics",
    category: "Astrophysics & Dynamics",
    date: "Academic Year 2025-2026",
    author: "Muhammad Nawaz Sharif",
    readTime: "7 min read",
    summary: "How centripetal force and gravitational attraction balance in orbital motion, why astronauts experience weightlessness in free fall, and how escape velocity is derived.",
    content: `
      <h3>What Keeps a Satellite in Orbit?</h3>
      <p>A common misconception among students is that satellites stay in orbit because gravity disappears in space. In reality, at low Earth orbit altitudes (such as 400 km), Earth's gravity is still approximately 8.8 m/s² — almost 90% of its surface value!</p>

      <h3>The Balance of Forces</h3>
      <p>A satellite remains in orbit because its horizontal velocity is high enough that the curvature of its falling trajectory matches the curvature of the Earth:</p>
      <div class="equation-block">mv²/r = G·Mm/r²  →  v_orb = √(GM/r)</div>
      <p>For low Earth orbit, this requires an orbital speed of roughly 7.9 km/s (28,000 km/h). The astronaut feels weightless because both the spacecraft and astronaut are continuously in free fall toward Earth.</p>
    `
  }
];
