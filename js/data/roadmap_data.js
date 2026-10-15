/**
 * PASADO - Structured PNLE Review Roadmap
 * 
 * Aligned with the 2025 Enhanced Table of Specifications (TOS) released by the
 * Professional Regulatory Board of Nursing (PRC BON) and Republic Act No. 9173.
 */

const PNLE_ROADMAP = [
  {
    id: "stage-0",
    order: 1,
    code: "DIAG",
    title: "Diagnostic Assessment",
    subtitle: "Establish Your PNLE Baseline",
    icon: "compass",
    badge: "Milestone 1",
    status: "completed",
    score: 82,
    totalQuestions: 20,
    estHours: "2.5 hrs",
    description: "Evaluates your starting baseline across all 5 Nursing Practice areas to generate your personalized learning path and identify critical knowledge gaps early.",
    learningOutcomes: [
      "Benchmark overall readiness score against PRC 75% passing cut-off",
      "Identify high-risk practice domains requiring immediate reinforcement",
      "Calibrate study timeline according to the 2025 Enhanced TOS"
    ],
    tosReference: "PRC Board of Nursing Table of Specifications (Diagnostic Competency Matrix)",
    legalBasis: "PRC BON Resolution No. 24 series of 2012"
  },
  {
    id: "stage-1",
    order: 2,
    code: "NP I",
    title: "Nursing Practice I",
    subtitle: "Community Health Nursing & Communicable Diseases",
    icon: "users",
    badge: "Milestone 2",
    status: "in-progress",
    progressPercent: 65,
    score: 75,
    totalQuestions: 150,
    estHours: "18 hrs",
    description: "Focuses on health promotion, disease prevention, and community health management across rural and urban Philippine settings.",
    topics: [
      { name: "Expanded Program on Immunization (EPI) & Cold Chain", mastery: 85 },
      { name: "Integrated Management of Childhood Illness (IMCI)", mastery: 70 },
      { name: "COPAR: Community Organizing Participatory Action Research", mastery: 80 },
      { name: "Public Health Epidemiology & Vital Statistics Formulas", mastery: 65 },
      { name: "DOH National Programs (TB-DOTS, Dengue, Malaria, Non-Communicable)", mastery: 72 }
    ],
    tosReference: "TOS NP I: Care of Individuals, Families, and Population Groups in the Community",
    legalBasis: "Universal Health Care Act (RA 11223) & DOH Administrative Orders"
  },
  {
    id: "stage-2",
    order: 3,
    code: "NP II",
    title: "Nursing Practice II",
    subtitle: "Maternal and Child Nursing",
    icon: "heart-pulse",
    badge: "Milestone 3",
    status: "in-progress",
    progressPercent: 50,
    score: 68,
    isWeakArea: true,
    totalQuestions: 175,
    estHours: "22 hrs",
    description: "Covers the continuum of reproductive health, high-risk obstetrics, intrapartum emergencies, newborn care (EINC), and pediatric growth and disorders.",
    topics: [
      { name: "Hypertensive Disorders of Pregnancy (Preeclampsia/Eclampsia & MgSO4)", mastery: 60 },
      { name: "Intrapartum FHR Monitoring (Decelerations & LION Protocol)", mastery: 65 },
      { name: "Essential Intrapartum and Newborn Care (EINC) & APGAR Scoring", mastery: 90 },
      { name: "Postpartum Hemorrhage Management (4 Ts & Uterotonics)", mastery: 55 },
      { name: "Pediatric Congenital Disorders (Hirschsprung's, TOF, Spina Bifida)", mastery: 70 }
    ],
    tosReference: "TOS NP II: Care of Mother, Child, Adolescent, and High-Risk Perinatal Clients",
    legalBasis: "DOH Administrative Order 2009-0025 (EINC Protocol)"
  },
  {
    id: "stage-3",
    order: 4,
    code: "NP III",
    title: "Nursing Practice III",
    subtitle: "Medical-Surgical Nursing (Part 1)",
    icon: "activity",
    badge: "Milestone 4",
    status: "ready",
    progressPercent: 30,
    score: 72,
    totalQuestions: 200,
    estHours: "26 hrs",
    description: "Care of clients with problems in cellular aberrations (oncology), fluids & electrolytes, acid-base balance, perioperative nursing, and cardio-respiratory disorders.",
    topics: [
      { name: "Arterial Blood Gas (ABG) Analysis with Full & Partial Compensation", mastery: 80 },
      { name: "Clinical Prioritization & Triage (ABC vs Maslow's)", mastery: 75 },
      { name: "Severe Electrolyte Imbalances (Hyperkalemia, Hypocalcemia, Trousseau's)", mastery: 68 },
      { name: "Cardiovascular Emergencies (STEMI, MONA Protocol, Heart Failure)", mastery: 70 },
      { name: "Perioperative Phases & Surgical Complications", mastery: 65 }
    ],
    tosReference: "TOS NP III: Care of Clients with Systemic and Acute Physiological Alterations",
    legalBasis: "2025 Enhanced Table of Specifications Core Competency 1"
  },
  {
    id: "stage-4",
    order: 5,
    code: "NP IV",
    title: "Nursing Practice IV",
    subtitle: "Medical-Surgical Nursing (Part 2)",
    icon: "cpu",
    badge: "Milestone 5",
    status: "ready",
    progressPercent: 20,
    score: 62,
    isWeakArea: true,
    totalQuestions: 200,
    estHours: "26 hrs",
    description: "Care of clients with neurotrauma, endocrine crises, gastrointestinal & renal alterations, and extensive burns resuscitation.",
    topics: [
      { name: "Increased Intracranial Pressure (ICP) & Cushing's Triad vs Shock", mastery: 58 },
      { name: "Extensive Burns Resuscitation (Rule of Nines & Parkland Formula)", mastery: 50 },
      { name: "Diabetic Ketoacidosis (DKA) vs HHS Fluid & Insulin Protocols", mastery: 65 },
      { name: "Acute Kidney Injury & Renal Replacement Therapies", mastery: 70 },
      { name: "GI & Hepatic Disorders (Pancreatitis, Cirrhosis, Esophageal Varices)", mastery: 67 }
    ],
    tosReference: "TOS NP IV: Care of Clients with Complex Physiological Alterations and Critical Care",
    legalBasis: "Advanced Burn Life Support (ABLS) & Trauma Nursing Standards"
  },
  {
    id: "stage-5",
    order: 6,
    code: "NP V",
    title: "Nursing Practice V",
    subtitle: "Psychiatric & Mental Health Nursing",
    icon: "smile",
    badge: "Milestone 6",
    status: "ready",
    progressPercent: 15,
    score: 80,
    totalQuestions: 150,
    estHours: "16 hrs",
    description: "Principles of therapeutic communication, psychodynamics, maladaptive behavior patterns, psychopharmacology safety, and psychiatric emergencies.",
    topics: [
      { name: "Therapeutic Communication & Reality Presentation in Psychosis", mastery: 90 },
      { name: "Ego Defense Mechanisms (Reaction Formation, Projection, Sublimation)", mastery: 85 },
      { name: "Mood Stabilizers & Lithium Toxicity Management", mastery: 68 },
      { name: "Suicide Lethality Assessment & Crisis Intervention Protocols", mastery: 80 },
      { name: "Antipsychotic Extrapyramidal Symptoms (EPS & NMS)", mastery: 77 }
    ],
    tosReference: "TOS NP V: Care of Clients with Maladaptive Behavior and Psychosocial Integrity",
    legalBasis: "Philippine Mental Health Act (Republic Act No. 11036)"
  },
  {
    id: "stage-6",
    order: 7,
    code: "ETHICS",
    title: "Nursing Jurisprudence & Ethics",
    subtitle: "Philippine Nursing Law & Bioethics",
    icon: "shield-check",
    badge: "Milestone 7",
    status: "ready",
    progressPercent: 25,
    score: 84,
    totalQuestions: 100,
    estHours: "12 hrs",
    description: "Comprehensive review of Republic Act No. 9173, legal doctrines, malpractice/torts, professional boundaries, and the PRC Board of Nursing Code of Ethics.",
    topics: [
      { name: "Republic Act No. 9173 (Philippine Nursing Act of 2002 - Sec. 28)", mastery: 88 },
      { name: "Legal Doctrines: Res Ipsa Loquitur, Respondeat Superior, Captain of the Ship", mastery: 90 },
      { name: "PRC Board of Nursing: Composition, Powers, and Licensure Revocation", mastery: 80 },
      { name: "Informed Consent, Living Wills & Patient's Bill of Rights", mastery: 85 },
      { name: "Code of Ethics for Registered Nurses (PRC BON Res. 220 s. 2004)", mastery: 77 }
    ],
    tosReference: "TOS Domain 11: Legal and Ethical Responsibility in Philippine Nursing",
    legalBasis: "Republic Act No. 9173 & PRC Board of Nursing Resolutions"
  },
  {
    id: "stage-7",
    order: 8,
    code: "SIM",
    title: "Grand Mock Board Examination",
    subtitle: "Full-Length 100-Item Simulation",
    icon: "award",
    badge: "Final Gateway",
    status: "locked",
    progressPercent: 0,
    score: null,
    totalQuestions: 100,
    estHours: "2.5 hrs",
    description: "Real-time timed simulation mimicking the official PRC PNLE testing environment with comprehensive diagnostic score report across all 5 NP subjects.",
    learningOutcomes: [
      "Experience authentic time pacing (1.5 minutes per clinical vignette)",
      "Test stamina and mental endurance under board-exam conditions",
      "Receive automated Board Passing Probability report using official PRC 75% standard"
    ],
    tosReference: "Comprehensive PNLE Composite Test Matrix",
  }
];

if (typeof window !== 'undefined') window.PNLE_ROADMAP = PNLE_ROADMAP;
if (typeof globalThis !== 'undefined') globalThis.PNLE_ROADMAP = PNLE_ROADMAP;
