/**
 * PASADO - High-Yield Spaced Repetition Flashcard Deck
 * Implements Leitner Box spaced repetition for board exam memory retention.
 */

const FLASHCARD_DECKS = [
  // --- PHARMACOLOGY & CRITICAL ANTIDOTES ---
  {
    id: "fc-001",
    category: "Pharmacology",
    front: "What is the specific antidote for Magnesium Sulfate toxicity in severe preeclampsia?",
    back: "10% Calcium Gluconate (1g / 10 mL administered IV slow push over 3-5 minutes). Keep at bedside whenever MgSO4 is infusing!",
    mnemonic: "MgSO4 toxicity signs: BURP (Blood pressure drop, Urine <30 mL/hr, RR <12, Patellar reflex absent). Antidote = Calcium Gluconate.",
    box: 1
  },
  {
    id: "fc-002",
    category: "Pharmacology",
    front: "What is the specific antidote for Heparin overdose, and what lab monitors heparin?",
    back: "Antidote: Protamine Sulfate.\nLab to monitor: Activated Partial Thromboplastin Time (aPTT). Therapeutic target is 1.5 to 2.5 times the control baseline.",
    mnemonic: "Heparin = aPTT (4 letters = short word 'Heparin'). Warfarin = PT/INR.",
    box: 1
  },
  {
    id: "fc-003",
    category: "Pharmacology",
    front: "What is the specific antidote for Warfarin (Coumadin) toxicity, and what lab monitors it?",
    back: "Antidote: Vitamin K (Phytonadione). For life-threatening hemorrhage, add Fresh Frozen Plasma (FFP).\nLab: PT / INR (Target INR 2.0 - 3.0 for DVT/Afib; 2.5 - 3.5 for mechanical valves).",
    mnemonic: "Warfarin = Vitamin K. Avoid abrupt changes in dietary green leafy vegetables.",
    box: 1
  },
  {
    id: "fc-004",
    category: "Pharmacology",
    front: "What is the specific antidote for Acetaminophen (Paracetamol) toxicity?",
    back: "N-Acetylcysteine (NAC / Mucomyst). Most effective when given within 8 to 10 hours of acute ingestion to prevent fulminant hepatic necrosis.",
    mnemonic: "Acetylcysteine replenishes glutathione stores in the liver.",
    box: 1
  },
  {
    id: "fc-005",
    category: "Pharmacology",
    front: "What is the specific antidote for Opioid overdose (Morphine, Fentanyl, Oxycodone)?",
    back: "Naloxone (Narcan). Titrate slowly. Warning: Half-life of naloxone is SHORTER than most opioids; monitor for rebound respiratory depression!",
    mnemonic: "Opioid Triad: Coma, Pinpoint pupils (Miosis), Respiratory depression (<10 bpm).",
    box: 1
  },
  {
    id: "fc-006",
    category: "Pharmacology",
    front: "What is the therapeutic serum level of Lithium Carbonate, and what are early vs late toxicity signs?",
    back: "Therapeutic level: 0.6 - 1.2 mEq/L.\nEarly signs: Nausea, fine hand tremor, thirst.\nToxic level (≥1.5 mEq/L): Coarse hand tremors, severe vomiting, persistent diarrhea, ataxia, confusion, seizures.",
    mnemonic: "Maintain consistent fluid (2-3 L/day) and sodium intake. Low sodium triggers toxic lithium retention!",
    box: 1
  },
  {
    id: "fc-007",
    category: "Pharmacology",
    front: "What is the therapeutic range of Digoxin, and what electrolyte imbalance worsens toxicity?",
    back: "Therapeutic range: 0.5 - 2.0 ng/mL.\nHypokalemia (<3.5 mEq/L) dramatically increases the risk of fatal digoxin toxicity! Always check potassium before giving digoxin.",
    mnemonic: "Signs of toxicity: Anorexia, yellow/green visual halos, bradycardia. Hold if apical pulse <60 bpm.",
    box: 1
  },

  // --- NURSING JURISPRUDENCE & RA 9173 ---
  {
    id: "fc-008",
    category: "Jurisprudence",
    front: "Under RA 9173 Section 28, what two specialized procedures require accredited training before an RN can perform them?",
    back: "1. Administration of Intravenous (IV) injections.\n2. Suturing of perineal lacerations during childbirth.",
    mnemonic: "RA 9173 Sec. 28: Nurses cannot independently prescribe medications, but can suture lacerations with training.",
    box: 1
  },
  {
    id: "fc-009",
    category: "Jurisprudence",
    front: "What are the statutory requirements to pass the Philippine Nurse Licensure Examination (PNLE)?",
    back: "A General Average rating of at least 75% with NO RATING BELOW 60% in any subject.\nIf overall is ≥75% but a subject is <60%, status is CONDITIONAL (must re-take failed subject within 2 years).",
    mnemonic: "Passing rule: 75% composite + zero subjects < 60%. (RA 9173 Sec. 15).",
    box: 1
  },
  {
    id: "fc-010",
    category: "Jurisprudence",
    front: "Define the legal doctrine 'Res Ipsa Loquitur' and give a classic medical example.",
    back: "'The thing speaks for itself.' Negligence is inferred because the harm ordinarily does not occur without negligence, the cause was under defendant's control, and patient was blameless.\nClassic example: Retained surgical sponge inside a patient's abdomen.",
    mnemonic: "Res Ipsa Loquitur eliminates need for direct witness proof of negligence.",
    box: 1
  },
  {
    id: "fc-011",
    category: "Jurisprudence",
    front: "Define 'Respondeat Superior' in healthcare legal torts.",
    back: "'Let the master answer.' An employer/hospital is legally and financially responsible for the negligent acts of its employees performed within the scope of their employment.",
    mnemonic: "Hospital liability for staff nurse medication errors.",
    box: 1
  },
  {
    id: "fc-012",
    category: "Jurisprudence",
    front: "What are the required qualifications for a Member of the PRC Board of Nursing (BON) under RA 9173 Sec. 4?",
    back: "1. Natural-born citizen and resident of the Philippines.\n2. RN with Master's degree in nursing or allied health.\n3. At least 10 years of continuous nursing practice, the LAST 5 YEARS of which must be in the Philippines.\n4. No conviction of moral turpitude.",
    mnemonic: "BON = 1 Chair + 6 Members (Total: 7). Appointed by the President of the Philippines.",
    box: 1
  },

  // --- MATERNAL & CHILD NURSING ---
  {
    id: "fc-013",
    category: "Maternal & Child",
    front: "What does the GTPAL obstetric notation stand for?",
    back: "G = Gravida (Total number of pregnancies, including current)\nT = Term births (Delivered at ≥ 37 weeks)\nP = Preterm births (Delivered 20 to 36 6/7 weeks)\nA = Abortions / Miscarriages (Terminated before 20 weeks)\nL = Living children currently alive.",
    mnemonic: "Twins count as ONE pregnancy event for T or P, but TWO for Living (L)!",
    box: 1
  },
  {
    id: "fc-014",
    category: "Maternal & Child",
    front: "State Naegele's Rule for calculating the Estimated Date of Delivery (EDD).",
    back: "First day of Last Menstrual Period (LMP) + 7 Days - 3 Months + 1 Year.\n(Or: LMP + 9 Months + 7 Days).",
    mnemonic: "Example: LMP on March 10 -> + 7 days (17), - 3 months (Dec) -> EDD = Dec 17.",
    box: 1
  },
  {
    id: "fc-015",
    category: "Maternal & Child",
    front: "What is the LION protocol for fetal distress and late decelerations?",
    back: "L = Left lateral position (relieves inferior vena cava compression)\nI = Increase IV fluid infusion rate (restores placental perfusion)\nO = Oxygen at 8-10 L/min via non-rebreather mask\nN = Notify physician immediately, while STOPPING Oxytocin (Pitocin) infusion!",
    mnemonic: "Intrauterine Resuscitation = LION.",
    box: 1
  },
  {
    id: "fc-016",
    category: "Maternal & Child",
    front: "At what age do the anterior and posterior fontanelles normally close?",
    back: "Posterior fontanelle: Closes at 2 to 3 months (triangular shape).\nAnterior fontanelle: Closes at 12 to 18 months (diamond shape).",
    mnemonic: "Posterior = 2 months. Anterior = 18 months. Bulging = Increased ICP. Sunken = Dehydration.",
    box: 1
  },

  // --- MEDICAL-SURGICAL & CRITICAL CARE ---
  {
    id: "fc-017",
    category: "Medical-Surgical",
    front: "State the Parkland (Baxter) Formula for burns resuscitation.",
    back: "Total 24-hr Volume = 4 mL x Weight (kg) x % TBSA burned.\nFirst 8 hours: Give 50% of total FROM THE EXACT TIME OF INJURY.\nNext 16 hours: Give remaining 50% (25% in next 8 hrs, 25% in final 8 hrs).\nPreferred IV fluid: Lactated Ringer's.",
    mnemonic: "Parkland: 4 x kg x %TBSA. Urine output target = 30-50 mL/hr.",
    box: 1
  },
  {
    id: "fc-018",
    category: "Medical-Surgical",
    front: "Contrast Cushing's Triad (Elevated ICP) with Shock vitals.",
    back: "Cushing's Triad (High ICP): BP UP (Widening Pulse Pressure), Heart Rate DOWN (Bradycardia), Respirations DOWN/IRREGULAR (Cheyne-Stokes).\nShock: BP DOWN, Heart Rate UP (Tachycardia), Respirations UP (Tachypnea).",
    mnemonic: "Cushing's is the exact polar opposite of Shock vitals!",
    box: 1
  },
  {
    id: "fc-019",
    category: "Medical-Surgical",
    front: "What are the three components and score range of the Glasgow Coma Scale (GCS)?",
    back: "Eye Opening: 1 to 4 points\nVerbal Response: 1 to 5 points\nMotor Response: 1 to 6 points\nTotal Score: 3 (deep coma/dead) to 15 (fully awake & alert).\nScore ≤ 8: 'Less than 8, Intubate!'",
    mnemonic: "E4 V5 M6 = 15 points maximum.",
    box: 1
  },
  {
    id: "fc-020",
    category: "Medical-Surgical",
    front: "What are early vs late signs of Hypoxia in respiratory care?",
    back: "Early signs: Restlessness, Anxiety, Tachycardia/Tachypnea, Agitation (RAT).\nLate signs: Bradycardia, Extreme restlessness, Dyspnea severe, Cyanosis (BED).",
    mnemonic: "Early = RAT. Late = BED. Restlessness is ALWAYS the #1 earliest sign of hypoxia!",
    box: 1
  }
];

if (typeof window !== 'undefined') window.FLASHCARD_DECKS = FLASHCARD_DECKS;
if (typeof globalThis !== 'undefined') globalThis.FLASHCARD_DECKS = FLASHCARD_DECKS;
