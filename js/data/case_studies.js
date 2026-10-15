/**
 * PASADO - Unfolding Clinical Case Studies (Next-Gen Clinical Judgment Model)
 * Aligned with the 2025 Enhanced Table of Specifications (TOS) & 6-Step CJMM:
 * 1. Recognize Cues
 * 2. Analyze Cues
 * 3. Prioritize Hypotheses
 * 4. Generate Solutions
 * 5. Take Actions
 * 6. Evaluate Outcomes
 */

const CLINICAL_CASE_STUDIES = [
  {
    id: "case-001",
    title: "Unfolding Case: Severe Preeclampsia with Impending Eclampsia",
    patient: {
      name: "Maria Santos",
      age: "29 years old",
      gravidaPara: "G1P0 at 35 weeks AOG",
      admissionReason: "Transferred from RHU with severe headache, visual blurring, and epigastric pain",
      allergies: "NKDA"
    },
    stages: [
      {
        stageIndex: 1,
        stepName: "Step 1: Recognize Cues",
        chartData: {
          vitals: "BP: 172/112 mmHg | HR: 94 bpm | RR: 20 bpm | Temp: 37.1°C | FHR: 146 bpm",
          assessment: "Client appears agitated and wincing. Reports a persistent pounding frontal headache unresponsive to Paracetamol, visual floating spots (scotoma), and sharp right upper quadrant (epigastric) pain.",
          labs: "Urine dipstick: 3+ Proteinuria | Platelets: 98,000/mm³ (Low) | AST/ALT: Elevated 3x normal"
        },
        questionType: "sata",
        prompt: "The triage nurse reviews Maria's admission chart. Which clinical cues require IMMEDIATE nurse escalation to the obstetric team as red flags for impending eclamptic seizure or HELLP syndrome? (Select All That Apply)",
        options: [
          { id: "A", text: "Persistent frontal headache and visual scotoma" },
          { id: "B", text: "Severe right upper quadrant / epigastric pain" },
          { id: "C", text: "Fetal heart rate baseline of 146 beats per minute" },
          { id: "D", text: "Platelet count of 98,000/mm³ with elevated liver enzymes" },
          { id: "E", text: "Blood pressure of 172/112 mmHg" }
        ],
        correctAnswers: ["A", "B", "D", "E"],
        rationale: {
          whyCorrect: "Options A, B, D, and E are critical danger cues. Frontal headache and scotoma signal cerebral edema and imminent eclamptic seizure. Epigastric/RUQ pain indicates hepatic capsule distension (Glisson's capsule stretch), warning of impending liver rupture. Platelets < 100,000 with elevated liver transaminases indicate HELLP syndrome. BP ≥ 160/110 mmHg defines severe-range hypertension.",
          distractorExplanation: "Option C is normal: a baseline fetal heart rate of 146 bpm is within the normal reassuring range of 110 to 160 bpm and is not an acute danger cue."
        }
      },
      {
        stageIndex: 2,
        stepName: "Step 2 & 3: Analyze Cues & Prioritize Hypotheses",
        chartData: {
          vitals: "BP: 178/116 mmHg | HR: 98 bpm | Patellar Reflexes: +4 Bilateral with 3 beats of ankle clonus",
          assessment: "Client is placed in a quiet, darkened room. Bed rails padded. IV infusion of Magnesium Sulfate 4g loading dose in 100 mL D5W over 20 minutes ordered by the obstetrician.",
          labs: "Pending stat coagulation panel and serum creatinine"
        },
        questionType: "single",
        prompt: "While preparing the Magnesium Sulfate loading infusion, what is the primary pathophysiological hypothesis the nurse must address with this medication?",
        options: [
          { id: "A", text: "Magnesium Sulfate acts primarily as a potent antihypertensive agent to bring BP below 120/80 mmHg." },
          { id: "B", text: "Magnesium Sulfate is a central nervous system depressant and neuromuscular blocker administered strictly for seizure prophylaxis." },
          { id: "C", text: "Magnesium Sulfate is administered to accelerate fetal lung maturity before urgent delivery." },
          { id: "D", text: "Magnesium Sulfate is an osmotic diuretic intended to reduce peripheral dependent edema." }
        ],
        correctAnswers: ["B"],
        rationale: {
          whyCorrect: "Magnesium Sulfate is the global gold standard for SEIZURE PROPHYLAXIS in severe preeclampsia. It blocks peripheral neuromuscular transmission and decreases acetylcholine release at the motor endplate. It is NOT primarily an antihypertensive (antihypertensives like Hydralazine or Labetalol are used for BP control) nor a steroid for fetal lungs.",
          distractorExplanation: "A is false because MgSO4 has only a minor, transient effect on BP; C describes Betamethasone/Dexamethasone; D is false as diuretics are contraindicated in preeclampsia due to hemoconcentration."
        }
      },
      {
        stageIndex: 3,
        stepName: "Step 4 & 5: Generate Solutions & Take Action",
        chartData: {
          vitals: "BP: 154/96 mmHg | RR: 9 breaths/min | Absent Patellar Reflexes | Urine Output: 14 mL/hr",
          assessment: "Client has received maintenance Magnesium Sulfate at 2g/hr for 3 hours. Client is difficult to arouse.",
          labs: "Serum Magnesium: 9.8 mEq/L (Critical Toxic Range: Normal therapeutic is 4 - 7 mEq/L)"
        },
        questionType: "single",
        prompt: "The nurse assesses Maria at the 3-hour mark. In what precise sequence should the nurse execute the emergency interventions?",
        options: [
          { id: "A", text: "Administer 10% Calcium Gluconate IV push -> Discontinue Magnesium Sulfate infusion -> Notify physician" },
          { id: "B", text: "Immediately STOP the Magnesium Sulfate infusion -> Administer 10% Calcium Gluconate IV slow push over 3 minutes -> Call for emergency help and notify obstetrician" },
          { id: "C", text: "Increase IV fluid rate to flush kidneys -> Turn client to prone position -> Document findings" },
          { id: "D", text: "Administer Naloxone (Narcan) IV -> Check pupillary reflexes -> Draw repeat magnesium level" }
        ],
        correctAnswers: ["B"],
        rationale: {
          whyCorrect: "Immediate cessation of the offending drug (STOP the MgSO4 drip) is the foundational rule of pharmacology emergencies to halt further toxic entry. Next, administer the antidote (10 mL of 10% Calcium Gluconate IV slow push over 3-5 minutes) while summoning emergency obstetric assistance to support airway/breathing.",
          distractorExplanation: "In option A, failing to shut off the infusion first means the toxic drug continues to enter the patient while giving the antidote. Option C risks fatal pulmonary edema. Option D is irrelevant (Naloxone is an opioid antidote)."
        }
      },
      {
        stageIndex: 4,
        stepName: "Step 6: Evaluate Outcomes",
        chartData: {
          vitals: "BP: 142/90 mmHg | RR: 15 breaths/min | Patellar Reflexes: +1 Bilateral | Urine Output: 38 mL for the next hour",
          assessment: "Client is awake and oriented to person and place. Continuous fetal monitoring shows baseline 140 bpm with moderate variability and no decelerations.",
          labs: "Repeat serum magnesium has declined to 5.4 mEq/L (within target therapeutic range)"
        },
        questionType: "single",
        prompt: "Which clinical parameter indicates to the nursing team that the emergency antidote was effective and clinical stability has been restored?",
        options: [
          { id: "A", text: "Respiratory rate recovered to ≥ 12 bpm and return of deep tendon reflexes" },
          { id: "B", text: "Complete disappearance of proteinuria on repeat urinalysis" },
          { id: "C", text: "Resolution of maternal peripheral ankle edema" },
          { id: "D", text: "Drop in maternal blood pressure below 100/60 mmHg" }
        ],
        correctAnswers: ["A"],
        rationale: {
          whyCorrect: "The earliest and most reliable indicators of reversal of magnesium toxicity are the recovery of spontaneous respiratory rate to ≥ 12 bpm and the return of deep tendon reflexes (+1 to +2). Proteinuria and edema do not immediately vanish after antidote administration.",
          distractorExplanation: "Proteinuria (B) and edema (C) take days postpartum to resolve. Severe hypotension (D) would indicate maternal cardiovascular collapse, not therapeutic success."
        }
      }
    ]
  },
  {
    id: "case-002",
    title: "Unfolding Case: Post-Thyroidectomy Respiratory Emergency & Hypocalcemia",
    patient: {
      name: "Rolando Cruz",
      age: "45 years old",
      gravidaPara: "Male, Post-Op Day 1",
      admissionReason: "Total thyroidectomy for multinodular toxic goiter",
      allergies: "Penicillin"
    },
    stages: [
      {
        stageIndex: 1,
        stepName: "Step 1 & 2: Recognize & Analyze Cues",
        chartData: {
          vitals: "BP: 136/84 mmHg | HR: 88 bpm | RR: 22 bpm | SpO2: 95% on room air",
          assessment: "Client is 4 hours post-total thyroidectomy. Reports feelings of fullness and tightness in the neck dressing. Nurse notes the neck dressing is moderately saturated with bright red blood.",
          equipment: "Tracheostomy tray kept at bedside"
        },
        questionType: "single",
        prompt: "The nurse observes that Rolando's neck circumference has visibly increased and high-pitched inspiratory crowing (stridor) is now audible. What acute pathophysiological emergency is occurring?",
        options: [
          { id: "A", text: "Tracheal compression from an expanding post-operative neck hematoma" },
          { id: "B", text: "Expected post-extubation vocal cord fatigue" },
          { id: "C", text: "Bronchospasm secondary to penicillin allergy" },
          { id: "D", text: "Acute pulmonary edema from IV fluid overload" }
        ],
        correctAnswers: ["A"],
        rationale: {
          whyCorrect: "In post-thyroidectomy clients, sudden neck swelling, dressing tightness, and inspiratory stridor are cardinal hallmarks of an EXPANDING NECK HEMATOMA compressing the trachea. This is an acute airway emergency requiring immediate surgical decompression at the bedside to prevent complete suffocation.",
          distractorExplanation: "B trivializes life-threatening stridor. C is incorrect as the patient has not received penicillin post-op. D would present with bilateral diffuse crackles and pink frothy sputum, not localized neck swelling with stridor."
        }
      },
      {
        stageIndex: 2,
        stepName: "Step 3, 4 & 5: Prioritize & Take Emergency Action",
        chartData: {
          vitals: "BP: 148/92 mmHg | HR: 112 bpm | RR: 28 bpm | SpO2: 89%",
          assessment: "Client is in severe respiratory distress, cyanotic around lips, clutching his neck. Surgeon is on the floor.",
          equipment: "Bedside suture removal kit and tracheostomy tray available"
        },
        questionType: "single",
        prompt: "While the surgeon prepares to reopen the wound at bedside to evacuate the hematoma, what is the nurse's immediate collaborative action?",
        options: [
          { id: "A", text: "Administer 100% Oxygen via Non-Rebreather Mask and open the bedside tracheostomy/suture tray immediately" },
          { id: "B", text: "Place the client in flat Trendelenburg position to improve blood flow to the brain" },
          { id: "C", text: "Administer a dose of IV Morphine to relieve patient agitation" },
          { id: "D", text: "Send the patient to the radiology suite for a stat neck CT scan" }
        ],
        correctAnswers: ["A"],
        rationale: {
          whyCorrect: "High-flow 100% oxygen via non-rebreather mask combats acute hypoxia, while immediately opening and providing the bedside tracheostomy tray/suture removal instruments allows the surgical team to release wound clips/sutures to evacuate the compressive blood clot.",
          distractorExplanation: "Trendelenburg (B) will worsen venous engorgement in the neck; Morphine (C) depresses respiratory drive; transport to radiology (D) causes fatal delay during imminent airway closure."
        }
      },
      {
        stageIndex: 3,
        stepName: "Step 6: Evaluate Subsequent Complications (Hypocalcemia)",
        chartData: {
          vitals: "Post-decompression: SpO2: 98% on 2L nasal cannula | RR: 16 bpm | Airway patent",
          assessment: "24 hours post-op: Client complains of numbness and tingling around the mouth (perioral paresthesia) and tingling in fingertips. When inflating blood pressure cuff on arm, carpal spasm occurs (hand flexes inward).",
          labs: "Serum Calcium: 6.8 mg/dL (Normal: 8.5 - 10.5 mg/dL)"
        },
        questionType: "single",
        prompt: "The nurse identifies the involuntary carpal spasm upon BP cuff inflation as a positive Trousseau's sign. What complication of total thyroidectomy has occurred, and what is the emergency drug required?",
        options: [
          { id: "A", text: "Accidental parathyroid gland trauma/removal causing Hypocalcemia; administer IV Calcium Gluconate" },
          { id: "B", text: "Thyroid Storm causing Hypercalcemia; administer Propylthiouracil (PTU)" },
          { id: "C", text: "Hypokalemia; administer Potassium Chloride IV push" },
          { id: "D", text: "Recurrent laryngeal nerve paralysis; administer IV Dexamethasone" }
        ],
        correctAnswers: ["A"],
        rationale: {
          whyCorrect: "During total thyroidectomy, the adjacent parathyroid glands can be accidentally devascularized or excised, causing sudden drop in Parathyroid Hormone (PTH) and acute severe HYPOCALCEMIA. Classic signs: Perioral tingling, Chvostek's sign, and Trousseau's sign (carpal spasm). Emergency treatment is slow IV CALCIUM GLUCONATE.",
          distractorExplanation: "Thyroid storm (B) causes severe fever and tachycardia; IV Potassium push (C) is lethal and potassium does not cause Trousseau's sign; nerve paralysis (D) causes hoarseness, not carpal spasms."
        }
      }
    ]
  }
];

if (typeof window !== 'undefined') window.CLINICAL_CASE_STUDIES = CLINICAL_CASE_STUDIES;
if (typeof globalThis !== 'undefined') globalThis.CLINICAL_CASE_STUDIES = CLINICAL_CASE_STUDIES;
