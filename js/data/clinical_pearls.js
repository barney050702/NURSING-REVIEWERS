/**
 * NURSPHERE - High-Yield Clinical Pearls, Reference Cram Sheets & Calculation Lab
 * Curated for rapid recall and clinical calculation mastery for PNLE examinees.
 */

const CLINICAL_PEARLS = {
  labValues: [
    { name: "Serum Sodium (Na+)", normal: "135 - 145 mEq/L", highYieldTip: "Major extracellular cation. Watch for neurological alterations and seizures in severe hyponatremia (<120 mEq/L). Correct slowly to prevent Osmotic Demyelination Syndrome!" },
    { name: "Serum Potassium (K+)", normal: "3.5 - 5.0 mEq/L", highYieldTip: "Major intracellular cation. Strict cardiac danger! Peaked T-waves in hyperkalemia (>5.0); Flat/Inverted T-waves & U-waves in hypokalemia (<3.5). Never give IV Push K+!" },
    { name: "Serum Calcium (Ca2+)", normal: "8.5 - 10.5 mg/dL", highYieldTip: "Hypocalcemia causes neuromuscular excitability: positive Chvostek's sign (facial twitch) and Trousseau's sign (carpopedal spasm). Antidote: IV Calcium Gluconate." },
    { name: "Serum Magnesium (Mg2+)", normal: "1.5 - 2.5 mEq/L", highYieldTip: "Calms neuromuscular transmission. Low Mg causes Torsades de Pointes. High Mg causes absent DTRs and respiratory depression in preeclampsia." },
    { name: "Blood Urea Nitrogen (BUN)", normal: "10 - 20 mg/dL", highYieldTip: "Reflects renal clearance & hydration. Elevated BUN with normal Creatinine indicates dehydration; both elevated indicates renal impairment." },
    { name: "Serum Creatinine", normal: "0.6 - 1.2 mg/dL", highYieldTip: "Most reliable specific indicator of renal function. Unaffected by diet or fluid volume." },
    { name: "Arterial pH", normal: "7.35 - 7.45", highYieldTip: "<7.35 = Acidosis; >7.45 = Alkalosis. Life-threatening below 6.8 or above 7.8." },
    { name: "PaCO2 (Respiratory)", normal: "35 - 45 mmHg", highYieldTip: ">45 = Respiratory Acidosis (hypoventilation); <35 = Respiratory Alkalosis (hyperventilation)." },
    { name: "HCO3- (Metabolic)", normal: "22 - 26 mEq/L", highYieldTip: "<22 = Metabolic Acidosis (DKA, renal failure, diarrhea); >26 = Metabolic Alkalosis (vomiting, NG suction)." },
    { name: "PaO2 (Oxygenation)", normal: "80 - 100 mmHg", highYieldTip: "<80 = Hypoxemia. <60 mmHg indicates acute respiratory failure." },
    { name: "Hemoglobin (Hgb)", normal: "Male: 14 - 18 g/dL | Female: 12 - 16 g/dL", highYieldTip: "Transfusion threshold typically <7.0 to 8.0 g/dL or symptomatic anemia." },
    { name: "Hematocrit (Hct)", normal: "Male: 42 - 52% | Female: 37 - 47%", highYieldTip: "Approximately 3x Hemoglobin. Elevated in dehydration (hemoconcentration) and Dengue critical phase." },
    { name: "White Blood Cells (WBC)", normal: "5,000 - 10,000 /mm3", highYieldTip: ">10,000 = Leukocytosis (infection/inflammation); <4,000 = Leukopenia (neutropenia, immunocompromise)." },
    { name: "Platelet Count", normal: "150,000 - 450,000 /mm3", highYieldTip: "<100,000 = Thrombocytopenia; <20,000 = Extreme risk of spontaneous intracranial/gastrointestinal hemorrhage." },
    { name: "Prothrombin Time (PT / INR)", normal: "PT: 11 - 13.5s | INR: 0.8 - 1.1", highYieldTip: "Monitors WARFARIN (Coumadin) therapy. Target therapeutic INR on Warfarin = 2.0 to 3.0. Antidote: Vitamin K (Phytonadione)." },
    { name: "Activated PTT (aPTT)", normal: "30 - 40s (Therapeutic: 60 - 80s)", highYieldTip: "Monitors continuous IV HEPARIN. Therapeutic range = 1.5 to 2.5 times baseline. Antidote: Protamine Sulfate." },
    { name: "Digoxin Level", normal: "0.5 - 2.0 ng/mL", highYieldTip: "Toxic >2.0 ng/mL (visual halos, nausea, bradycardia). Low Potassium increases digoxin toxicity risk! Antidote: DigiFab." },
    { name: "Lithium Level", normal: "0.6 - 1.2 mEq/L", highYieldTip: "Toxic >=1.5 mEq/L (coarse tremors, diarrhea, ataxia). Maintain consistent salt/water intake." },
    { name: "Phenytoin (Dilantin)", normal: "10 - 20 mcg/mL", highYieldTip: "Toxic >20 mcg/mL (nystagmus, ataxia, slurred speech). Gingival hyperplasia is common long-term side effect." },
    { name: "Theophylline Level", normal: "10 - 20 mcg/mL", highYieldTip: "Toxic >20 mcg/mL (tachycardia, tremors, seizures). Bronchodilator for asthma/COPD." }
  ],

  ra9173Highlights: [
    {
      article: "Title and Declaration of Policy",
      section: "Sec. 1 - 2",
      summary: "Known as the 'Philippine Nursing Act of 2002'. Approved on October 21, 2002, repealing Republic Act No. 7164."
    },
    {
      article: "Board of Nursing (BON) Composition",
      section: "Sec. 3 - 4",
      summary: "Composed of 1 Chairperson and 6 Members (Total: 7). Appointed by the President of the Philippines from a list of 3 nominees per vacancy submitted by PRC."
    },
    {
      article: "Qualifications of Board Members",
      section: "Sec. 4",
      summary: "Natural-born Filipino, Registered Nurse with valid PRC license, Master's degree in nursing or allied field, at least 10 years continuous practice (last 5 years in the Philippines), not convicted of moral turpitude."
    },
    {
      article: "Term of Office",
      section: "Sec. 5",
      summary: "Term of 3 years and can be reappointed for another 3 years (maximum total of 6 continuous years)."
    },
    {
      article: "Qualifications for PNLE Examinees",
      section: "Sec. 13",
      summary: "Citizen of the Philippines or foreign country with reciprocity, good moral character, holder of Bachelor of Science in Nursing (BSN) from a recognized university."
    },
    {
      article: "Licensure Passing Rating",
      section: "Sec. 15",
      summary: "General average of at least 75% with NO RATING BELOW 60% in any subject. If an examinee obtains 75% or higher overall but below 60% in any subject, they are CONDITIONAL and must re-take only the failed subject(s) within 2 years to obtain at least 75%."
    },
    {
      article: "Scope of Nursing Practice",
      section: "Sec. 28",
      summary: "Provision of safe nursing care. Special training required for: 1) Intravenous (IV) injections, and 2) Suturing of perineal lacerations. Nurses cannot prescribe medicines independently."
    },
    {
      article: "Revocation & Suspension of License",
      section: "Sec. 23",
      summary: "Causes include unprofessional conduct, gross incompetence, malpractice, use of fraud in securing license, or mental incompetence. Revoked licenses may be reissued after 2 years upon valid justification."
    }
  ],

  philippineLawsMatrix: [
    { law: "RA 9173", title: "Philippine Nursing Act of 2002", keyProvision: "Governs the practice of nursing in the PH; establishes the PRC Board of Nursing; requires BSN and PNLE; sets passing score (75% GWA, no grade <60%)." },
    { law: "RA 7160", title: "Local Government Code of 1991", keyProvision: "Devolution of health services to LGUs: Provincial = Provincial/District Hospitals; Municipal/City = RHUs and Barangay Health Stations." },
    { law: "RA 11223", title: "Universal Health Care Act (2019)", keyProvision: "Automatic PhilHealth enrollment for 100% of Filipinos; comprehensive primary care benefit package (PhilHealth Konsulta); Province-wide Health Systems." },
    { law: "RA 10354", title: "Responsible Parenthood & Reproductive Health Act", keyProvision: "Guarantees universal access to medically-safe modern natural and artificial family planning without coercion; adult reversible methods do NOT need spousal consent." },
    { law: "RA 9288", title: "Newborn Screening Act of 2004", keyProvision: "Mandatory screening for inborn metabolic and endocrine disorders at 24 to 72 hours of life; Expanded NBS tests for 28+ congenital disorders." },
    { law: "RA 7305", title: "Magna Carta of Public Health Workers", keyProvision: "Statutory benefits for government health personnel: Hazard pay (at least 25% for SG 19 and below), subsistence allowance, longevity pay, night differential (10%)." },
    { law: "RA 9262", title: "Anti-Violence Against Women and Children (VAWC)", keyProvision: "Penalizes physical, psychological, sexual, and economic abuse against women/children; provides for Barangay Protection Orders (BPO, 15 days) and Court TPOs." },
    { law: "RA 10173", title: "Data Privacy Act of 2012", keyProvision: "Strictly protects patient health information; prohibits unauthorized photography, recording, or social media sharing of patients or charts." },
    { law: "RA 7600 & RA 10028", title: "Rooming-In and Breastfeeding Act / Expanded", keyProvision: "Mandates rooming-in within 30 minutes of delivery; paid lactation breaks (40 mins per 8-hr shift); lactation stations in all workplaces." },
    { law: "PD 856", title: "Code on Sanitation of the Philippines", keyProvision: "Defines water supply safety: Level I (Point Source/protected well), Level II (Communal faucet), Level III (Individual piped household connections)." }
  ],

  maternalMilestones: [
    { week: "12 Weeks", landmark: "Fundus palpable at the upper border of the pubic symphysis. Fetal heart sounds audible with Doppler." },
    { week: "16 Weeks", landmark: "Fundus halfway between the pubic symphysis and the umbilicus. Quickening may be felt by multigravida." },
    { week: "20 Weeks", landmark: "Fundus reaches the level of the umbilicus. Quickening felt by primigravida." },
    { week: "36 Weeks", landmark: "Fundus at the xiphoid process (highest anatomical level). Shortness of breath is common." },
    { week: "38-40 Weeks", landmark: "Lightening occurs (fetal head drops into the pelvic inlet). Breathing eases, but urinary frequency returns." }
  ],

  startTriage: [
    { color: "RED (Immediate)", criteria: "Respiration >30 bpm, absent radial pulse / cap refill >2s, or cannot follow simple commands.", action: "Requires immediate lifesaving medical/surgical intervention within 60 minutes." },
    { color: "YELLOW (Delayed)", criteria: "Non-ambulatory, but RPM normal (RR <30, normal radial pulse, obeys commands). Examples: closed fractures, large wounds without shock.", action: "Care can be delayed 1-2 hours without threat to life or limb." },
    { color: "GREEN (Minimal)", criteria: "Walking wounded. Able to follow commands and walk to designated triage post.", action: "Minor abrasions, sprains; care can be delayed 2-4 hours." },
    { color: "BLACK (Expectant / Deceased)", criteria: "Apneic even after manual airway repositioning, or catastrophic injuries incompatible with life.", action: "Comfort measures only if alive; palliative care in disaster settings." }
  ],

  prioritizationFramework: [
    {
      rule: "1. The ABC Rule",
      detail: "Airway > Breathing > Circulation. Always address patent airway obstruction (stridor, choking, anaphylaxis) before breathing (hypoxia, wheezing), and breathing before circulation (shock, bleeding), unless in CPR where CAB applies."
    },
    {
      rule: "2. Acute vs. Chronic",
      detail: "A patient with a newly occurring, acute alteration (e.g., sudden chest pain, new confusion, acute asthma flare) takes priority over a patient with a chronic, stable baseline condition (e.g., long-standing COPD, chronic kidney disease)."
    },
    {
      rule: "3. Unstable vs. Stable",
      detail: "Unstable signs indicate imminent deterioration: worsening vital signs, changing neurological status (dropping GCS), respiratory distress, or severe hemorrhage. Stable includes expected post-op pain, scheduled medications, or routine discharge prep."
    },
    {
      rule: "4. Systemic vs. Local",
      detail: "Life-threatening systemic compromise (sepsis, anaphylaxis, shock, pulmonary embolism) always takes priority over localized signs (swollen ankle, localized rash, surgical wound redness without systemic fever)."
    },
    {
      rule: "5. Maslow's Hierarchy",
      detail: "Physiological needs (oxygen, fluids, nutrition, elimination) come before Safety and Security, which come before Love/Belonging, Self-esteem, and Self-actualization."
    }
  ],

  // Calculation practice drills
  practiceCalculations: [
    {
      id: "calc-1",
      title: "IV Drop Rate (Macrodrip)",
      problem: "Order: Infuse 1,000 mL of D5W IV over 8 hours. The infusion tubing drop factor is 15 gtts/mL.",
      question: "Calculate the IV flow rate in drops per minute (gtts/min):",
      correct: 31,
      unit: "gtts/min",
      tolerance: 1,
      explanation: "Formula: (Total Volume in mL x Drop Factor) / (Time in minutes) = (1,000 mL x 15) / (8 x 60 min) = 15,000 / 480 = 31.25 -> 31 gtts/min."
    },
    {
      id: "calc-2",
      title: "IV Drop Rate (Microdrip)",
      problem: "Order: Infuse 500 mL of 0.9% Normal Saline over 10 hours using microdrip tubing (drop factor = 60 gtts/mL).",
      question: "Calculate the flow rate in drops per minute (gtts/min):",
      correct: 50,
      unit: "gtts/min",
      tolerance: 0,
      explanation: "Formula: (500 mL x 60) / (10 x 60 min) = 30,000 / 600 = 50 gtts/min. Notice: With microdrip (60 gtts/mL), the gtts/min ALWAYS equals the mL/hr rate! 500 mL / 10 hr = 50 mL/hr = 50 gtts/min!"
    },
    {
      id: "calc-3",
      title: "Parkland Burn Resuscitation",
      problem: "A 60-kg patient sustains partial and full-thickness burns to 40% TBSA.",
      question: "Using the Parkland formula (4 mL x kg x %TBSA), how many mL of Lactated Ringer's must be infused in the FIRST 8 HOURS?",
      correct: 4800,
      unit: "mL",
      tolerance: 0,
      explanation: "Total 24h = 4 mL x 60 kg x 40% = 9,600 mL. The first 8 hours gets exactly 50% of total: 9,600 / 2 = 4,800 mL."
    },
    {
      id: "calc-4",
      title: "Pediatric Weight-Based Dosage",
      problem: "Order: Amoxicillin 40 mg/kg/day divided into 3 equal doses (q8h) for a child weighing 15 kg. Available concentration: 250 mg / 5 mL.",
      question: "How many mL should the nurse administer per single dose?",
      correct: 4,
      unit: "mL",
      tolerance: 0,
      explanation: "Total daily dose = 40 mg x 15 kg = 600 mg/day. Single dose = 600 mg / 3 doses = 200 mg per dose. Volume = (200 mg / 250 mg) x 5 mL = 0.8 x 5 = 4 mL."
    },
    {
      id: "calc-5",
      title: "Continuous Heparin Infusion",
      problem: "Order: Infuse Heparin at 1,200 units/hour IV. The IV bag contains 25,000 units of Heparin in 500 mL of 5% Dextrose.",
      question: "Set the electronic infusion pump rate in mL/hour:",
      correct: 24,
      unit: "mL/hr",
      tolerance: 0,
      explanation: "Concentration in bag = 25,000 units / 500 mL = 50 units/mL. Rate in mL/hr = Ordered units/hr / Concentration = 1,200 units/hr / 50 units/mL = 24 mL/hr."
    }
  ]
};

if (typeof window !== 'undefined') window.CLINICAL_PEARLS = CLINICAL_PEARLS;
if (typeof globalThis !== 'undefined') globalThis.CLINICAL_PEARLS = CLINICAL_PEARLS;
