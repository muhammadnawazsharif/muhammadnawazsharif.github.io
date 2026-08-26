/**
 * Profile & Academic Identity Data
 * Muhammad Nawaz Sharif - Lecturer in Physics
 * Govt. Boys Inter College Gamba, Skardu, Gilgit-Baltistan
 * Domain: https://muhammadnawazsharif.github.io/
 */

export const profileData = {
  name: "Muhammad Nawaz Sharif",
  title: "Lecturer in Physics",
  badge: "PHYSICS EDUCATOR • LECTURER • MENTOR",
  avatar: "./assets/images/profile/Muhammad-Nawaz-Sharif (1).jpeg",
  photos: [
    { src: "./assets/images/profile/Muhammad-Nawaz-Sharif (1).jpeg", caption: "Official Academic Portrait - Lecturer in Physics", alt: "Official Academic Portrait - Muhammad Nawaz Sharif - Lecturer in Physics", author: "Muhammad Nawaz Sharif - Lecturer in Physics", description: "Official academic portrait of Muhammad Nawaz Sharif, Lecturer in Physics at Govt. Boys Inter College Gamba, Skardu.", category: "Portrait" },
    { src: "./assets/images/profile/Muhammad-Nawaz-Sharif (2).jpeg", caption: "Faculty & Campus Life - Govt. Boys Inter College Gamba, Skardu", alt: "Faculty & Campus Life - Muhammad Nawaz Sharif - Lecturer in Physics", author: "Muhammad Nawaz Sharif - Lecturer in Physics", description: "Muhammad Nawaz Sharif with faculty members at Govt. Boys Inter College Gamba, Skardu.", category: "Campus" },
    { src: "./assets/images/profile/Muhammad-Nawaz-Sharif (4).jpeg", caption: "Cultural Heritage - Skardu, Gilgit-Baltistan", alt: "Cultural Heritage Skardu - Muhammad Nawaz Sharif - Lecturer in Physics", author: "Muhammad Nawaz Sharif - Lecturer in Physics", description: "Muhammad Nawaz Sharif representing cultural heritage in Skardu, Gilgit-Baltistan.", category: "Culture" },
    { src: "./assets/images/profile/Muhammad-Nawaz-Sharif (3).jpeg", caption: "Educator & Academic Leadership", alt: "Academic Leadership - Muhammad Nawaz Sharif - Lecturer in Physics", author: "Muhammad Nawaz Sharif - Lecturer in Physics", description: "Muhammad Nawaz Sharif dedicated to physics education and academic leadership.", category: "Academic" },
    { src: "./assets/images/profile/Muhammad-Nawaz-Sharif (5).jpeg", caption: "Field & Outdoor Mentorship", alt: "Field Mentorship - Muhammad Nawaz Sharif - Lecturer in Physics", author: "Muhammad Nawaz Sharif - Lecturer in Physics", description: "Muhammad Nawaz Sharif conducting outdoor student science mentorship in Skardu.", category: "Field" }
  ],
  tagline: "Teaching Physics with Clarity, Curiosity & Purpose.",
  statement: "Making Physics understandable, visual, intuitive, and inspiring for the next generation of learners.",
  
  institution: {
    name: "Govt. Boys Inter College Gamba",
    city: "Skardu",
    region: "Gilgit-Baltistan",
    country: "Pakistan",
    department: "Department of Physics"
  },

  education: [
    {
      degree: "M.Sc. in Physics",
      institution: "University of Karachi",
      location: "Karachi, Pakistan",
      status: "Completed",
      badge: "Master's Degree"
    },
    {
      degree: "B.Sc.",
      institution: "University of the Punjab",
      location: "Lahore, Pakistan",
      status: "Completed",
      badge: "Bachelor's Degree"
    }
  ],

  about: {
    lead: "Dedicated physics educator holding an M.Sc. in Physics from the University of Karachi and B.Sc. from the University of the Punjab, committed to conceptual learning, Student Learning Outcomes (SLOs), and scientific problem-solving in Gilgit-Baltistan.",
    paragraphs: [
      "Muhammad Nawaz Sharif serves as a Lecturer in Physics at Govt. Boys Inter College Gamba, Skardu, Gilgit-Baltistan, Pakistan. With a solid academic foundation comprising an M.Sc. in Physics from the University of Karachi and a B.Sc. from the University of the Punjab, he is passionately committed to demystifying physical laws and mathematical principles for intermediate and college students.",
      "His educational approach emphasizes moving away from rote memorization toward deep conceptual mastery, visual problem-solving, and comprehensive handwritten study material aligned with modern national curriculum standards and board requirements."
    ],
    journey: [
      { step: "Teaching", description: "Delivering engaging lectures in classical mechanics, thermodynamics, electromagnetism, and modern physics." },
      { step: "Mentoring", description: "Guiding students through academic challenges, numerical mastery, and board examination excellence." },
      { step: "Creating", description: "Authoring high-clarity handwritten notes, derivation guides, and visual physics illustrations." },
      { step: "Inspiring", description: "Cultivating scientific curiosity and rational inquiry among young scholars across Skardu and beyond." }
    ]
  },

  philosophy: [
    {
      id: "conceptual",
      title: "Conceptual Understanding",
      tag: "Core Principle",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
      description: "Physics should be understood rather than memorized. Students learn the foundational why behind every physical phenomenon before applying formulas."
    },
    {
      id: "mathematical",
      title: "Mathematical Reasoning",
      tag: "Analytical Rigor",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12h8M12 8v8"/></svg>`,
      description: "Mathematics is the language of nature. We emphasize how equations tell physical stories, transforming abstract calculus and algebra into tangible insights."
    },
    {
      id: "visual",
      title: "Visual Learning",
      tag: "Intuitive Grasp",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12a4 4 0 0 1 8 0M12 8v8"/></svg>`,
      description: "Diagrams, vector sketches, interactive simulations, and real-time demonstrations make invisible fields, forces, and orbits clear and memorable."
    },
    {
      id: "problem-solving",
      title: "Problem Solving",
      tag: "Critical Thinking",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
      description: "Equipping students with systematic problem-solving frameworks to analyze, decompose, and solve complex multi-step physics numericals with confidence."
    }
  ],

  highlights: [
    { label: "Designation", value: "Lecturer in Physics", isPlaceholder: false },
    { label: "Institution", value: "Govt. Boys Inter College Gamba", isPlaceholder: false },
    { label: "Master's Degree", value: "M.Sc. Physics (University of Karachi)", isPlaceholder: false },
    { label: "Bachelor's Degree", value: "B.Sc. (University of the Punjab)", isPlaceholder: false },
    { label: "Faculty Feature", value: "Faculty Highlight • MSST Skardu", isPlaceholder: false, link: "https://www.instagram.com/p/DL17UqGMUAs/" }
  ],

  affiliations: [
    {
      institution: "Govt. Boys Inter College Gamba",
      role: "Lecturer in Physics",
      location: "Skardu, Gilgit-Baltistan",
      type: "Public Higher Secondary College"
    },
    {
      institution: "Muhaddisa School of Science & Technology (MSST)",
      role: "Physics Lecturer (Featured Faculty)",
      location: "Skardu, Gilgit-Baltistan",
      type: "Science & Technology Institute",
      featureUrl: "https://www.instagram.com/p/DL17UqGMUAs/"
    }
  ],

  social: {
    facebook: "https://www.facebook.com/nawaz.sharif.79/",
    facebookName: "Muhammad Nawaz Sharif",
    linkedin: "https://www.linkedin.com/in/muhammad-nawaz-sharif-54481a241/",
    linkedinName: "Muhammad Nawaz Sharif",
    instagramFeature: "https://www.instagram.com/p/DL17UqGMUAs/",
    email: "nawazshariflecturer@gmail.com",
    whatsapp: "https://wa.me/923475882592",
    phone: "+923475882592"
  }
};
