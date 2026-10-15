/**
 * PASADO - Philippine Nurse Licensure Examination (PNLE) Question Bank
 * Curated and structured according to the 2025 Enhanced Table of Specifications (TOS),
 * PRC Board of Nursing Resolutions, and Republic Act No. 9173.
 */

const PNLE_QUESTIONS = [
  // ==========================================
  // NURSING PRACTICE I: COMMUNITY HEALTH NURSING
  // ==========================================
  {
    id: "np1-001",
    area: "NP I",
    areaName: "Community Health Nursing",
    topic: "IMCI - Respiratory Assessment & Triage",
    subtopic: "Integrated Management of Childhood Illness",
    vignette: "A public health nurse in a rural health unit (RHU) in Tarlac is evaluating a 14-month-old child brought in for cough and fever for 3 days. On physical assessment, the child's respiratory rate is 46 breaths per minute. The child is calm and sitting on the mother's lap. The nurse auscultates audible harsh inspiratory sounds (stridor) while the child is resting quietly, with no chest indrawing.",
    question: "Based on the Integrated Management of Childhood Illness (IMCI) guidelines, what is the priority clinical classification and immediate nursing action?",
    options: [
      { id: "A", text: "Pneumonia; prescribe Oral Amoxicillin for 3 days and advise home care." },
      { id: "B", text: "Severe Pneumonia or Very Severe Disease; administer first dose of appropriate antibiotic and urgent referral." },
      { id: "C", text: "No Pneumonia: Cough or Cold; advise soothing remedies with home fluid management." },
      { id: "D", text: "Stridor in a Calm Child; administer nebulized Salbutamol and observe for 1 hour at the clinic." }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "Under DOH-WHO IMCI guidelines, the presence of STRIDOR in a CALM child classifies the condition as 'SEVERE PNEUMONIA OR VERY SEVERE DISEASE' (Pink row). Stridor when resting indicates upper airway narrowing/obstruction (such as viral croup or tracheitis). The urgent clinical protocol mandates giving the first dose of an appropriate antibiotic (e.g., Ampicillin/Gentamicin or Ceftriaxone) and urgently referring the child to the nearest hospital with supplemental oxygen.",
      distractorBreakdown: {
        A: "Prescribing oral amoxicillin is the treatment for Pneumonia (Yellow row), which requires fast breathing without danger signs and without stridor in a calm child.",
        C: "'No Pneumonia' applies when there is neither fast breathing nor general danger signs nor stridor. This child has both fast breathing (cutoff for 12-59 months is >= 40 bpm) and resting stridor.",
        D: "Salbutamol nebulization is indicated for wheezing/bronchospasm, not inspiratory stridor. Delaying hospital referral for an observation trial in the RHU places the infant at acute risk of total airway compromise."
      },
      clinicalPearl: "IMCI Cutoffs for Fast Breathing: <2 months = >=60 bpm; 2 to 11 months = >=50 bpm; 12 to 59 months = >=40 bpm. Remember: Stridor when agitated is common in croup; STRIDOR IN A CALM CHILD is a Red Flag (Severe Disease).",
      tosCompetency: "Safe and Quality Nursing Care: Assessment & Clinical Triage in Community Settings",
      reference: "DOH IMCI Chart Booklet (2024 Revision); WHO Integrated Management of Childhood Illness Protocols"
    }
  },
  {
    id: "np1-002",
    area: "NP I",
    areaName: "Community Health Nursing",
    topic: "EPI - Vaccine Cold Chain & Administration",
    subtopic: "Expanded Program on Immunization",
    vignette: "During a Wednesday immunization session at a Barangay Health Station, a brownout occurs. The rural health midwife checks the vaccine refrigerator. The nurse notices that the temperature inside the refrigerator compartment has risen to +12°C. Inside the main refrigerator compartment are vials of Oral Polio Vaccine (OPV), Pentavalent vaccine, and Measles-Rubella (MR) vaccine.",
    question: "Which of the following actions reflects the nurse's correct knowledge regarding vaccine temperature sensitivity and cold chain integrity?",
    options: [
      { id: "A", text: "Discard the Pentavalent vaccine immediately, as it is the most sensitive to elevated temperatures." },
      { id: "B", text: "Inspect the Vaccine Vial Monitor (VVM) of OPV and MR vaccines, as freeze-dried and viral vaccines tolerate brief elevations better than frozen temperatures." },
      { id: "C", text: "Perform the 'Shake Test' on the Oral Polio Vaccine before returning it to cold storage." },
      { id: "D", text: "Place ice packs directly touching the Pentavalent vaccine vials to rapidly restore proper temperature." }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "Under the DOH National Immunization Program (NIP) cold chain rules, the Vaccine Vial Monitor (VVM) is a heat-sensitive chemical indicator on the vial that reflects cumulative heat exposure. Before discarding or using OPV or MR vaccines after a brief excursion above +8°C, the nurse must examine the VVM stages (Stage 1 or 2 = usable; Stage 3 or 4 = discard). OPV and MR are heat-sensitive but freeze-tolerant, whereas aluminum-adsorbed vaccines (Pentavalent, Td, HepB) are destroyed by freezing, not temporary mild warming.",
      distractorBreakdown: {
        A: "Pentavalent vaccine is aluminum-adsorbed and most damaged by FREEZING (temperatures below 0°C), not mild elevation to +12°C for a brief period.",
        C: "The Shake Test is designed exclusively for aluminum-adsorbed liquid vaccines (Pentavalent, DTP-HepB-Hib, Td, TT, HepB) that are suspected of being FROZEN, never for viral oral vaccines like OPV.",
        D: "Placing frozen ice packs directly against Pentavalent vials will freeze and destroy the adjuvant lattice, rendering the vaccine irreversibly ineffective."
      },
      clinicalPearl: "Cold Chain Rule of Thumb: Most heat-sensitive = OPV (kept in freezer at -15°C to -25°C). Most freeze-sensitive = Hepatitis B, Pentavalent, Td (stored at +2°C to +8°C). Never freeze vaccines with liquid adjuvants!",
      tosCompetency: "Health Education and Prevention: Cold Chain Management & Vaccine Potency",
      reference: "DOH National Immunization Program Manual of Operations; WHO Vaccine Storage and Handling Guidelines"
    }
  },
  {
    id: "np1-003",
    area: "NP I",
    areaName: "Community Health Nursing",
    topic: "COPAR - Community Organizing Phases",
    subtopic: "Community Organizing Participatory Action Research",
    vignette: "A nurse is deploying to an underserved coastal barangay to implement a community development program using the Community Organizing Participatory Action Research (COPAR) methodology. The nurse conducts 'paglubog sa masa' (sensitization and integration), conducts courteous courtesy calls to the Barangay Captain and councilors, and resides with a humble family in the community.",
    question: "In which specific phase of COPAR is the nurse currently engaged?",
    options: [
      { id: "A", text: "Pre-entry Phase" },
      { id: "B", text: "Entry Phase" },
      { id: "C", text: "Community Diagnosis / Study Phase" },
      { id: "D", text: "Organization-Building Phase" }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "The Entry Phase (also known as the Social Preparation phase) begins once the nurse enters the actual community. Key activities include courtesy calls to local government unit (LGU) leaders, informal immersion and living with the community ('paglubog sa masa'), building rapport, and identifying potential indigenous community leaders. Pre-entry occurs before physically moving into the site (site selection and initial profile data).",
      distractorBreakdown: {
        A: "Pre-entry focuses on site selection using criteria (poverty incidence, accessibility, safety, willingness), ocular surveys, and orienting the deployment team before immersion.",
        C: "The Community Diagnosis phase involves training local community researchers, conducting the community health survey, analyzing community-generated data, and presenting findings in a general assembly.",
        D: "Organization-Building involves formulating the constitution and by-laws, electing formal Core Group officers, and establishing working committees."
      },
      clinicalPearl: "Key COPAR Sequence: Pre-entry (Selection) -> Entry (Integration & Courtesy Calls) -> Community Diagnosis (Survey & Assembly) -> Organization-Building (Core Group & Election) -> Action Phase (Mobilization) -> Sustenance & Phase-out (Self-reliance).",
      tosCompetency: "Collaboration and Leadership: Community Partnership and Participatory Action",
      reference: "Maglaya, A. (Community Health Nursing Practice in the Philippines); DOH Community Organizing Guidelines"
    }
  },
  {
    id: "np1-004",
    area: "NP I",
    areaName: "Community Health Nursing",
    topic: "Vital Statistics & Epidemiology",
    subtopic: "Public Health Indicators",
    vignette: "In a municipality with a total population of 45,000 in 2025, the Municipal Health Office recorded 900 live births. During the same year, 18 infant deaths (infants dying before reaching 1 year of age) and 3 maternal deaths directly related to obstetric complications occurred.",
    question: "What is the Infant Mortality Rate (IMR) of this municipality, and what does this indicator primarily reflect?",
    options: [
      { id: "A", text: "20 per 1,000 live births; it is the most sensitive indicator of overall community socioeconomic and sanitary conditions." },
      { id: "B", text: "0.4 per 1,000 total population; it measures crude community disease burden." },
      { id: "C", text: "3.3 per 1,000 live births; it evaluates maternal healthcare delivery." },
      { id: "D", text: "25 per 1,000 live births; it reflects neonatal intensive care capacity only." }
    ],
    correctAnswer: "A",
    rationale: {
      whyCorrect: "The formula for Infant Mortality Rate (IMR) is: (Number of deaths under 1 year of age / Total live births) x 1,000. Here: (18 / 900) x 1,000 = 0.02 x 1,000 = 20 per 1,000 live births. In public health epidemiology, IMR is recognized worldwide as the single most sensitive barometer of general health standards, environmental sanitation, nutrition, and socioeconomic development in a community.",
      distractorBreakdown: {
        B: "Dividing by total population yields a crude rate with incorrect units and obscures the child survival denominator.",
        C: "3.33 per 1,000 live births calculates the Maternal Mortality Rate (3 / 900 x 1,000 = 3.33), which specifically assesses maternal care rather than infant health.",
        D: "25 per 1,000 is a mathematical error, and IMR covers deaths up to 365 days of life (not only neonatal, which is the first 28 days)."
      },
      clinicalPearl: "Board Formula Checklist: IMR = (Infant deaths <1 yr / Live births) x 1,000. MMR = (Maternal deaths from pregnancy complications / Live births) x 1,000 (or 100,000 per DOH). Neonatal Mortality Rate = (Deaths <28 days / Live births) x 1,000.",
      tosCompetency: "Research and Quality Improvement: Public Health Epidemiology & Vital Statistics",
      reference: "Philippine Statistics Authority (PSA) Health Indicators; DOH Field Health Services Information System (FHSIS)"
    }
  },
  {
    id: "np1-005",
    area: "NP I",
    areaName: "Community Health Nursing",
    topic: "DOH Communicable Diseases - Dengue Clinical Warning Signs",
    subtopic: "Vector-Borne Disease Control & Triage",
    vignette: "A 9-year-old child in an urban barangay in Central Luzon has had high continuous fever for 4 days. On Day 5, the fever suddenly drops to 37.0°C (defervescence phase). However, the mother notices the child has become lethargic and complains of persistent abdominal pain and had three episodes of vomiting in the clinic waiting area.",
    question: "Under the DOH Revised Dengue Clinical Practice Guidelines, what does this clinical presentation signify, and what is the nurse's immediate priority?",
    options: [
      { id: "A", text: "Convalescent recovery phase; reassure the mother and discharge with oral rehydration solutions." },
      { id: "B", text: "Dengue with Warning Signs entering the Critical Plasma Leakage Phase; admit immediately for IV fluid resuscitation and close monitoring." },
      { id: "C", text: "Febrile phase complication; administer Aspirin to control lingering aches and promote rest." },
      { id: "D", text: "Severe Dengue with established irreversible shock; prepare immediate endotracheal intubation." }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "The critical phase of Dengue occurs during DEFERVESCENCE (Days 3-7 when fever drops). The appearance of warning signs (persistent vomiting, severe abdominal pain, lethargy/restlessness, mucosal bleeding, fluid accumulation, hematocrit rise with platelet drop) indicates imminent PLASMA LEAKAGE. This child must be hospitalized immediately for monitored intravenous crystalloid therapy to prevent fatal Dengue Shock Syndrome (DSS).",
      distractorBreakdown: {
        A: "Assuming the child is recovering because fever dropped is the most common fatal error in pediatric dengue care; defervescence marks the onset of the critical leak phase.",
        C: "Aspirin, Ibuprofen, and NSAIDs are STRICTLY CONTRAINDICATED in Dengue due to platelet inhibition and risk of catastrophic GI hemorrhage.",
        D: "The child has warning signs of plasma leakage but does not yet meet criteria for severe established shock (unrecordable BP, cold clammy extremities)."
      },
      clinicalPearl: "Dengue Phases: 1. Febrile (Days 1-3). 2. Critical/Plasma Leak (Days 3-7 around fever drop - WATCH OUT FOR WARNING SIGNS!). 3. Recovery/Reabsorption (Days 7-10). Never give NSAIDs/Aspirin!",
      tosCompetency: "Safe and Quality Care: Pediatric Triage & Communicable Disease Management",
      reference: "DOH Administrative Order on Revised Dengue Clinical Practice Guidelines; WHO Dengue Guidelines"
    }
  },

  // ==========================================
  // NURSING PRACTICE II: MATERNAL & CHILD NURSING
  // ==========================================
  {
    id: "np2-001",
    area: "NP II",
    areaName: "Maternal and Child Nursing",
    topic: "High-Risk Obstetrics - Preeclampsia & MgSO4",
    subtopic: "Hypertensive Disorders of Pregnancy",
    vignette: "A 28-year-old Primigravida at 34 weeks gestation is admitted to the labor and delivery room with severe preeclampsia (BP 168/110 mmHg, 3+ proteinuria, hyperreflexia +4 with bilateral clonus). The physician orders an intravenous infusion of Magnesium Sulfate (4g loading dose followed by 2g/hr continuous maintenance). During hourly monitoring, the nurse notes: BP 140/90 mmHg, respiratory rate of 10 breaths/min, absent patellar reflexes, and urine output of 18 mL for the past hour.",
    question: "What is the nurse's immediate sequence of priority interventions?",
    options: [
      { id: "A", text: "Increase IV fluid rate to flush the kidneys, turn the patient to the right lateral position, and document." },
      { id: "B", text: "Stop the Magnesium Sulfate infusion immediately, prepare Calcium Gluconate 10% IV, and notify the physician." },
      { id: "C", text: "Administer Hydralazine IV push, perform endotracheal suctioning, and draw serum magnesium levels." },
      { id: "D", text: "Continue the infusion because blood pressure has normalized, but elevate the head of the bed to 45 degrees." }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "The client is manifesting classic signs of MAGNESIUM SULFATE TOXICITY: respiratory depression (<12 breaths/min), loss of deep tendon reflexes (absent patellar reflex), and oliguria (<30 mL/hr, which allows toxic magnesium accumulation since it is excreted exclusively by the kidneys). The nurse must STOP the infusion immediately to prevent fatal cardiac or respiratory arrest, prepare the specific antidote (10% Calcium Gluconate, 1g / 10 mL given IV slow push over 3 minutes), and notify the obstetrician immediately.",
      distractorBreakdown: {
        A: "Increasing IV fluid in severe preeclampsia can precipitate acute pulmonary edema due to endothelial leak and low capillary oncotic pressure; failing to stop the toxic drug is lethal.",
        C: "Hydralazine is an antihypertensive, not a magnesium antidote. The client's BP is already 140/90; giving hydralazine will cause severe hypotension and fetal hypoperfusion.",
        D: "Never continue the infusion when signs of toxicity are present. Absent reflexes and a respiratory rate of 10 bpm indicate imminent respiratory failure regardless of blood pressure."
      },
      clinicalPearl: "BURP Toxicity Checklist for MgSO4: B = Blood pressure drops; U = Urine output <30 mL/hr; R = Respiratory rate <12 bpm (First danger sign!); P = Patellar reflex absent (First clinical sign to vanish). Antidote: Calcium Gluconate!",
      tosCompetency: "Safe and Quality Nursing Care: High-Risk Obstetric Emergencies & Pharmacological Safety",
      reference: "ACOG Practice Bulletin: Gestational Hypertension and Preeclampsia; Williams Obstetrics, 26th Ed."
    }
  },
  {
    id: "np2-002",
    area: "NP II",
    areaName: "Maternal and Child Nursing",
    topic: "Intrapartum Care - Fetal Heart Rate Monitoring",
    subtopic: "Fetal Well-being during Labor",
    vignette: "A laboring client at 39 weeks gestation is receiving an intravenous Oxytocin (Pitocin) infusion for labor augmentation. The continuous external fetal monitor reveals repetitive drops in the fetal heart rate (FHR) that begin after the peak of the uterine contraction and return to baseline only well after the contraction has completely ended. The baseline FHR is 148 bpm with moderate variability.",
    question: "What deceleration pattern is occurring, and what is the nurse's priority clinical response?",
    options: [
      { id: "A", text: "Early deceleration caused by fetal head compression; continue to monitor progress of labor." },
      { id: "B", text: "Variable deceleration caused by cord prolapse; place patient in Trendelenburg position immediately." },
      { id: "C", text: "Late deceleration caused by uteroplacental insufficiency; stop Oxytocin, reposition to left lateral, give oxygen, and increase IV fluids." },
      { id: "D", text: "Prolonged deceleration caused by maternal hypotension; administer subcutaneous Terbutaline and prepare for emergency vacuum extraction." }
    ],
    correctAnswer: "C",
    rationale: {
      whyCorrect: "Late decelerations are defined by a nadir occurring AFTER the peak of the contraction, caused by UTEROPLACENTAL INSUFFICIENCY (compromised oxygen transfer across the placenta). In a client receiving Oxytocin, uterine hyperstimulation is a frequent culprit. The priority intervention is intrauterine resuscitation using the 'LION' protocol: L = Turn to Left lateral position (relieves vena cava compression); I = Increase IV fluids; O = Oxygen at 8-10 L/min via non-rebreather mask; N = Notify physician, while immediately turning OFF the Oxytocin infusion.",
      distractorBreakdown: {
        A: "Early decelerations mirror contractions exactly (nadir matches peak) and are benign responses to head compression; late decelerations start after the peak and reflect hypoxia.",
        B: "Variable decelerations are abrupt, V- or W-shaped drops with rapid return, caused by umbilical cord compression, not smooth drops occurring after the contraction peak.",
        D: "Prolonged decelerations last 2 to 10 minutes; repetitive post-contraction patterns are classic late decelerations requiring immediate cessation of oxytocin first."
      },
      clinicalPearl: "VEAL CHOP Mnemonic: Variable = Cord compression; Early = Head compression; Acceleration = Okay/Oxygenation; Late = Placental insufficiency.",
      tosCompetency: "Safe and Quality Nursing Care: Intrapartum Triage & Fetal Distress Resuscitation",
      reference: "Association of Women's Health, Obstetric and Neonatal Nurses (AWHONN) Fetal Heart Monitoring Standards"
    }
  },
  {
    id: "np2-003",
    area: "NP II",
    areaName: "Maternal and Child Nursing",
    topic: "Immediate Newborn Care - APGAR Scoring & Resuscitation",
    subtopic: "Essential Intrapartum and Newborn Care (EINC)",
    vignette: "At exactly one minute following a spontaneous vaginal delivery, the nurse assesses the newborn: Heart rate is 114 bpm on apical auscultation; the baby has a vigorous, loud cry; active movement and well-flexed extremities; sneezes and coughs when bulb suction is applied; body is pink, but the hands and feet remain cyanotic.",
    question: "What is the 1-minute APGAR score for this infant, and what is the appropriate nursing management?",
    options: [
      { id: "A", text: "APGAR 10; wrap infant and place in the radiant warmer immediately." },
      { id: "B", text: "APGAR 9; continue skin-to-skin contact with mother and facilitate early breastfeeding." },
      { id: "C", text: "APGAR 7; provide blow-by oxygen via face mask for 5 minutes." },
      { id: "D", text: "APGAR 8; initiate positive pressure ventilation (PPV) at 40 breaths per minute." }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "The APGAR breakdown is: Appearance = 1 (Acrocyanosis: pink body, blue extremities); Pulse = 2 (>100 bpm, measured at 114); Grimace = 2 (Prompt response: sneeze/cough to stimulation); Activity = 2 (Active motion, well-flexed); Respiration = 2 (Vigorous loud cry). Total Score = 1 + 2 + 2 + 2 + 2 = 9 out of 10. A score of 7-10 indicates a vigorous newborn in excellent condition requiring routine Essential Intrapartum and Newborn Care (EINC): maintain uninterrupted skin-to-skin contact, keep warm, and encourage early breastfeeding within the first hour of life.",
      distractorBreakdown: {
        A: "An APGAR of 10 requires completely pink body AND extremities; acrocyanosis is normal at 1 minute and deducts 1 point.",
        C: "The score is 9, not 7; blow-by oxygen is not indicated for a vigorous infant with strong crying and heart rate >100.",
        D: "PPV is reserved for heart rate <100 bpm or apnea/gasping, which is entirely absent in this thriving infant."
      },
      clinicalPearl: "APGAR Components (0, 1, 2): Appearance (Cyanotic/Acrocyanotic/Pink), Pulse (Absent/<100/>100), Grimace (No response/Grimace/Cough-sneeze), Activity (Flaccid/Some flexion/Active), Respiration (Absent/Weak cry/Loud cry). Scores 7-10 = Normal; 4-6 = Moderate distress; 0-3 = Severe distress.",
      tosCompetency: "Safe and Quality Nursing Care: Essential Intrapartum and Newborn Care (EINC)",
      reference: "DOH Administrative Order 2009-0025 (EINC Protocol); American Academy of Pediatrics (NRP Guidelines)"
    }
  },
  {
    id: "np2-004",
    area: "NP II",
    areaName: "Maternal and Child Nursing",
    topic: "Pediatric Congenital Heart Disease - Tetralogy of Fallot",
    subtopic: "Cyanotic Heart Defects & Hypercyanotic Spells",
    vignette: "An 8-month-old infant with Tetralogy of Fallot (TOF) begins crying vigorously following an intramuscular injection. The nurse observes that the infant suddenly becomes tachypneic, deeply cyanotic around the lips and nailbeds, and increasingly irritable, indicating an acute hypercyanotic ('Tet') spell.",
    question: "What is the nurse's IMMEDIATE physical action to relieve right-to-left shunting and restore pulmonary blood flow?",
    options: [
      { id: "A", text: "Place the infant in the knee-chest (squatting) position immediately." },
      { id: "B", text: "Administer a bolus of IV Potassium Chloride." },
      { id: "C", text: "Lay the infant completely flat in the supine position with head tilted back." },
      { id: "D", text: "Initiate chest compressions at 100 per minute." }
    ],
    correctAnswer: "A",
    rationale: {
      whyCorrect: "Placing the child in the KNEE-CHEST POSITION (or encouraging an older child to squat) is the FIRST-LINE immediate nursing response for a Tet spell. Flexing the hips and knees increases systemic vascular resistance (SVR), which decreases the right-to-left shunt across the ventricular septal defect, forcing more deoxygenated blood through the stenotic pulmonary artery into the lungs to be oxygenated.",
      distractorBreakdown: {
        B: "Potassium chloride IV push is fatal and has no role in hypercyanotic spells.",
        C: "Supine positioning does not increase systemic vascular resistance and may worsen venous return dynamics.",
        D: "Chest compressions are indicated for pulseless cardiac arrest; the infant is tachypneic and has a pulse."
      },
      clinicalPearl: "Tetralogy of Fallot Components (DROPS): D = Displacement of aorta (overriding); R = Right ventricular hypertrophy; O = Obstruction of pulmonary outflow (pulmonary stenosis); P = Ventricular Septal defect (S = Septal defect). Emergency Tet spell action: 1. Knee-chest position. 2. 100% blow-by oxygen. 3. Morphine/propranolol as ordered.",
      tosCompetency: "Safe and Quality Care: Pediatric Critical Care Interventions",
      reference: "Wong's Essentials of Pediatric Nursing, 11th Ed."
    }
  },

  // ==========================================
  // NURSING PRACTICE III: MEDICAL-SURGICAL NURSING (PART 1)
  // ==========================================
  {
    id: "np3-001",
    area: "NP III",
    areaName: "Medical-Surgical Nursing I",
    topic: "Arterial Blood Gas (ABG) & Acid-Base Disorders",
    subtopic: "Fluid, Electrolyte, and Acid-Base Balance",
    vignette: "A 56-year-old male with a 25-year history of Chronic Obstructive Pulmonary Disease (COPD) is admitted with an acute exacerbation. He appears somnolent with shallow respirations. The arterial blood gas (ABG) report on 2 L/min nasal cannula reveals: pH 7.31, PaCO2 58 mmHg, HCO3- 32 mEq/L, and PaO2 62 mmHg.",
    question: "How should the nurse interpret these ABG values?",
    options: [
      { id: "A", text: "Uncompensated Respiratory Acidosis" },
      { id: "B", text: "Partially Compensated Respiratory Acidosis with mild hypoxemia" },
      { id: "C", text: "Fully Compensated Metabolic Alkalosis" },
      { id: "D", text: "Partially Compensated Metabolic Acidosis" }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "Step-by-step ABG analysis: 1) pH is 7.31 (Normal: 7.35-7.45) -> Acidosis. 2) PaCO2 is 58 mmHg (Normal: 35-45) -> Acidic/Elevated (matches the pH acidosis, indicating Respiratory origin). 3) HCO3- is 32 mEq/L (Normal: 22-26) -> Basic/Elevated (the kidneys have retained bicarbonate to buffer the high acid). Because the pH has NOT returned to the normal range (7.35-7.45), compensation is PARTIAL. Therefore, the patient is in Partially Compensated Respiratory Acidosis.",
      distractorBreakdown: {
        A: "In uncompensated respiratory acidosis, the kidneys have not had time to respond, so HCO3- would remain within the normal range (22-26 mEq/L). Here, HCO3- is elevated to 32.",
        C: "In fully compensated conditions, the pH MUST be strictly inside the normal range (7.35 to 7.45). A pH of 7.31 is frankly acidemic.",
        D: "Metabolic acidosis requires a LOW HCO3- (<22 mEq/L). Here HCO3- is high, acting as a compensatory buffer."
      },
      clinicalPearl: "ROME Formula: Respiratory Opposite (pH down, PaCO2 up = acidosis; pH up, PaCO2 down = alkalosis), Metabolic Equal (pH up, HCO3 up = alkalosis; pH down, HCO3 down = acidosis). Full compensation = pH normal. Partial compensation = all 3 parameters abnormal.",
      tosCompetency: "Physiological Integrity: Diagnostic Data Analysis and Pathophysiology",
      reference: "Brunner & Suddarth's Textbook of Medical-Surgical Nursing, 15th Ed."
    }
  },
  {
    id: "np3-002",
    area: "NP III",
    areaName: "Medical-Surgical Nursing I",
    topic: "Prioritization & Triage - Multidisciplinary Ward",
    subtopic: "Clinical Reasoning and Client Delegation",
    vignette: "The charge nurse on a medical-surgical floor is receiving change-of-shift endorsements for four assigned clients. Which client must the nurse assess FIRST?",
    options: [
      { id: "A", text: "A 48-year-old female who underwent a subtotal thyroidectomy 6 hours ago and has newly developed high-pitched inspiratory crowing sounds and restlessness." },
      { id: "B", text: "A 62-year-old male with deep vein thrombosis (DVT) who is complaining of 6/10 calf tenderness and awaiting scheduled Enoxaparin injection." },
      { id: "C", text: "A 35-year-old male 1 day post-appendectomy with a temperature of 38.2°C (100.8°F) and 200 mL of clear yellowish output in his Foley bag." },
      { id: "D", text: "A 70-year-old female with diabetes mellitus whose pre-breakfast fingerstick blood glucose reading is 210 mg/dL." },
    ],
    correctAnswer: "A",
    rationale: {
      whyCorrect: "The post-thyroidectomy client with inspiratory crowing (stridor) and restlessness is experiencing ACUTE AIRWAY OBSTRUCTION, likely secondary to laryngeal edema, tracheal compression from an expanding neck hematoma, or recurrent laryngeal nerve damage. By applying the ABC (Airway, Breathing, Circulation) framework, airway compromise takes absolute precedence over all other clients. Imminent total airway occlusion requires immediate emergency surgical decompression or tracheostomy.",
      distractorBreakdown: {
        B: "Calf pain is an expected finding of known DVT. While thromboembolism is a risk, there is no acute pulmonary compromise (chest pain/dyspnea) described at this moment.",
        C: "Low-grade fever 24 hours post-op is commonly due to mild atelectasis and is treated with incentive spirometry and hydration; urine output of 200 mL is adequate.",
        D: "A blood glucose of 210 mg/dL is elevated but not acutely life-threatening (no ketoacidosis or coma signs); it will be managed with routine sliding-scale insulin."
      },
      clinicalPearl: "Prioritization Rules: 1. Airway/Breathing/Circulation trumps pain or routine orders. 2. Unstable/New-onset trumps Chronic/Expected. 3. Systemic symptoms trump Local symptoms. In post-thyroidectomy patients, keep a Tracheostomy tray and Calcium Gluconate at bedside!",
      tosCompetency: "Management of Care: Clinical Prioritization & Triage Frameworks",
      reference: "Philippine Board of Nursing Table of Specifications (Core Competency 1: Safe and Quality Care)"
    }
  },
  {
    id: "np3-003",
    area: "NP III",
    areaName: "Medical-Surgical Nursing I",
    topic: "Electrolyte Imbalances - Hyperkalemia & Cardiac Risk",
    subtopic: "Cardiovascular and Renal Interventions",
    vignette: "A 64-year-old client with end-stage renal disease (ESRD) missed two consecutive hemodialysis sessions. The laboratory calls the nurse with a critical potassium level of 7.2 mEq/L. The client reports general muscle weakness and palpitations. The cardiac monitor displays tall, peaked T waves, prolonged PR intervals, and a widening QRS complex.",
    question: "Which physician order must the nurse implement FIRST to prevent lethal ventricular dysrhythmias?",
    options: [
      { id: "A", text: "Administer Sodium Polystyrene Sulfonate (Kayexalate) 30g orally in sorbitol." },
      { id: "B", text: "Administer 10% IV Calcium Gluconate over 3 to 5 minutes." },
      { id: "C", text: "Infuse 10 units of Regular Insulin in 50 mL of 50% Dextrose (D50W)." },
      { id: "D", text: "Administer high-dose inhaled Albuterol nebulization." }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "In severe hyperkalemia (>6.5 mEq/L) accompanied by ECG changes (peaked T waves, widening QRS), the most immediate threat to life is fatal ventricular fibrillation or asystole. INTRAVENOUS CALCIUM GLUCONATE is the FIRST priority because it immediately antagonizes the toxic membrane excitability effects of hyperkalemia on cardiac myocytes, stabilizing the cardiac resting membrane potential within 1 to 3 minutes, even though it does not lower the serum potassium level itself.",
      distractorBreakdown: {
        A: "Kayexalate removes potassium via the gastrointestinal tract, but it takes 1 to 2 hours to start working and days to achieve full effect. It is completely unsuitable for acute myocardial stabilization.",
        C: "Insulin with Dextrose is crucial to shift potassium intracellularly, but it takes 15 to 30 minutes to take effect. Cardiac membrane stabilization with Calcium Gluconate must occur first.",
        D: "Albuterol also shifts potassium into cells but has a slower onset (15-30 mins) and cannot protect the unstable myocardium as rapidly as Calcium Gluconate."
      },
      clinicalPearl: "Hyperkalemia Emergency Sequence: 1. STABILIZE the heart first (IV Calcium Gluconate). 2. SHIFT potassium into cells (Regular Insulin + D50W, Sodium Bicarbonate, Albuterol). 3. EXCRETE/ELIMINATE potassium from the body (Furosemide, Kayexalate/Patiromer, or Emergency Hemodialysis).",
      tosCompetency: "Physiological Integrity: Pharmacological Interventions & Advanced Cardiac Life Support",
      reference: "AHA Advanced Cardiovascular Life Support (ACLS) Guidelines; Brunner & Suddarth Med-Surg"
    }
  },
  {
    id: "np3-004",
    area: "NP III",
    areaName: "Medical-Surgical Nursing I",
    topic: "Blood Transfusion - Acute Hemolytic Reaction Protocol",
    subtopic: "Perioperative and Hematologic Emergencies",
    vignette: "Fifteen minutes after initiating a transfusion of Packed Red Blood Cells (PRBCs), the client complains of chills, lower back pain, shortness of breath, and a feeling of impending doom. The nurse notes tachycardia and hematuria in the urinary bag.",
    question: "What is the nurse's immediate sequence of actions?",
    options: [
      { id: "A", text: "Slow the infusion rate, administer oral Diphenhydramine, and reassess in 15 minutes." },
      { id: "B", text: "Stop the transfusion immediately, disconnect the blood tubing at the hub, infuse 0.9% Normal Saline via fresh tubing, and notify the physician and blood bank." },
      { id: "C", text: "Flush the existing blood administration line with 50 mL of Dextrose 5% in Water (D5W) to clear hemolysis." },
      { id: "D", text: "Place the client in high Fowler's position and administer IV Furosemide immediately." }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "The client is having an ACUTE HEMOLYTIC TRANSFUSION REACTION (ABO incompatibility), a life-threatening medical emergency. The nurse must STOP THE TRANSFUSION IMMEDIATELY. Crucially, disconnect the blood tubing from the IV cannula hub so no remaining blood in the line enters the patient. Connect fresh IV tubing with 0.9% Normal Saline to keep the vein open. Notify the physician and blood bank, and send the blood bag, tubing, and post-reaction blood/urine samples for workup.",
      distractorBreakdown: {
        A: "Slowing the infusion during acute hemolysis will allow more incompatible red cells to lyse, precipitating disseminated intravascular coagulation (DIC) and fatal renal shutdown.",
        C: "Flushing with D5W causes red blood cell hemolysis in the line and delivers more incompatible blood to the patient.",
        D: "Stopping the transfusion and disconnecting the contaminated set takes priority over diuretic administration."
      },
      clinicalPearl: "Blood Transfusion Golden Rules: 1. Stay with client for FIRST 15 MINUTES (run at 2 mL/min or 20-30 gtt/min). 2. Only compatible IV fluid is 0.9% Normal Saline! 3. In any reaction: STOP blood, DISCONNECT at hub, HANG fresh NS line!",
      tosCompetency: "Safe and Quality Care: Hematologic Safety & Blood Product Protocols",
      reference: "American Association of Blood Banks (AABB) Technical Manual; Brunner & Suddarth Med-Surg"
    }
  },

  // ==========================================
  // NURSING PRACTICE IV: MEDICAL-SURGICAL NURSING (PART 2)
  // ==========================================
  {
    id: "np4-001",
    area: "NP IV",
    areaName: "Medical-Surgical Nursing II",
    topic: "Neurological Assessment - ICP & Cushing's Triad",
    subtopic: "Neurological Crises and Cranial Trauma",
    vignette: "A 30-year-old male is admitted to the neuro-trauma ICU following a motor vehicular collision. Two hours post-admission, the nurse performs a neurological assessment. The patient's baseline Glasgow Coma Scale (GCS) of 13 has decreased to 9. His blood pressure changed from 124/80 mmHg to 178/56 mmHg, pulse dropped from 78 bpm to 48 bpm, and respiratory pattern has become irregular with Cheyne-Stokes breathing.",
    question: "The nurse identifies this classic physiological constellation as which condition, and what is the underlying mechanism?",
    options: [
      { id: "A", text: "Neurogenic Shock; caused by loss of sympathetic vasomotor tone." },
      { id: "B", text: "Cushing's Triad; caused by life-threatening intracranial pressure (ICP) causing brainstem ischemia." },
      { id: "C", text: "Spinal Shock; caused by transient suppression of reflex activity below cord lesion." },
      { id: "D", text: "Autonomic Dysreflexia; caused by noxious bladder distention in a spinal cord injured client." }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "The client is demonstrating CUSHING'S TRIAD: 1) Severe Systolic Hypertension with Widening Pulse Pressure (178/56 mmHg; pulse pressure = 122 mmHg), 2) Bradycardia (48 bpm), and 3) Irregular respirations (Cheyne-Stokes). This is a late and ominous sign of severely elevated INTRACRANIAL PRESSURE (ICP), resulting from brainstem compression and ischemia triggering a massive sympathetically mediated vasoconstrictor surge, followed by vagal baroreceptor bradycardia. It warns of imminent uncal herniation through the foramen magnum.",
      distractorBreakdown: {
        A: "Neurogenic shock presents with HYPOTENSION (due to vasodilation), bradycardia, and hypothermia, not severe systolic hypertension with wide pulse pressure.",
        C: "Spinal shock causes flaccid paralysis and loss of all sensation/reflexes below the level of spinal injury, without intracranial hypertension signs.",
        D: "Autonomic dysreflexia occurs in chronic T6 or higher spinal cord injuries (typically weeks to months later) with sudden pounding headache and hypertension, not traumatic brain swelling with Cheyne-Stokes respirations."
      },
      clinicalPearl: "Shock vs Cushing's Triad Comparison: Shock = BP DOWN, Pulse UP, Respirations UP. Cushing's Triad (Elevated ICP) = BP UP (Widening Pulse Pressure), Pulse DOWN, Respirations DOWN/IRREGULAR.",
      tosCompetency: "Safe and Quality Nursing Care: Critical Care Assessment & Emergency Neuro Interventions",
      reference: "Emergency Nurses Association (ENA) Trauma Nursing Core Course (TNCC); Brunner & Suddarth Med-Surg"
    }
  },
  {
    id: "np4-002",
    area: "NP IV",
    areaName: "Medical-Surgical Nursing II",
    topic: "Burns Resuscitation - Rule of Nines & Parkland Formula",
    subtopic: "Integumentary and Fluid Replacement",
    vignette: "A 70 kg industrial factory worker arrives at the burn unit at 10:00 AM after sustaining deep partial- and full-thickness burns from an explosion that occurred at 8:00 AM. Assessment reveals burns covering the entire anterior chest and abdomen (18%), the entire right upper extremity (9%), and the anterior surface of both lower extremities (9% + 9% = 18%). Total burn surface area (TBSA) is calculated at 45%.",
    question: "Using the standard Parkland (Baxter) Formula (4 mL x kg x % TBSA), how much Lactated Ringer's solution should the client receive in the first 8 hours post-injury, and by what time must that volume be completed?",
    options: [
      { id: "A", text: "12,600 mL to be completed by 4:00 PM (8 hours from arrival)." },
      { id: "B", text: "6,300 mL to be completed by 4:00 PM (8 hours from time of injury)." },
      { id: "C", text: "6,300 mL to be completed by 6:00 PM (8 hours from hospital admission)." },
      { id: "D", text: "3,150 mL to be completed by 8:00 PM." }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "Parkland Formula Calculation: Total 24-hour volume = 4 mL x weight (kg) x % TBSA = 4 x 70 x 45 = 12,600 mL. The formula dictates that HALF of the total 24-hour volume (12,600 / 2 = 6,300 mL) must be infused within the FIRST 8 HOURS CALCULATED FROM THE TIME OF INJURY (not time of arrival!). Since the injury occurred at 8:00 AM, the first 8-hour window closes at 4:00 PM (8:00 AM + 8 hrs = 4:00 PM). Because 2 hours have already elapsed prior to hospital arrival (10:00 AM), the remaining 6,300 mL must be infused over the remaining 6 hours.",
      distractorBreakdown: {
        A: "12,600 mL is the total 24-hour fluid requirement, not the first 8-hour volume, and fluid timing is never calculated from the time of arrival.",
        C: "Calculating 8 hours from hospital admission (giving until 6:00 PM) will severely under-resuscitate the patient, leading to acute tubular necrosis and hypovolemic burn shock.",
        D: "3,150 mL represents only 25% of the total fluid requirement, which is mathematically incorrect for Parkland protocol."
      },
      clinicalPearl: "Parkland Golden Rules: 1. Total = 4 mL x kg x %TBSA. 2. First 8 hours = 50% of total FROM TIME OF BURN. 3. Next 16 hours = remaining 50% (25% in second 8 hrs, 25% in third 8 hrs). Preferred solution = Lactated Ringer's. Urine output target = 0.5 to 1.0 mL/kg/hr (30-50 mL/hr).",
      tosCompetency: "Physiological Integrity: Complex Fluid Resuscitation and Dosage Calculation",
      reference: "American Burn Association (ABA) Practice Guidelines; Advanced Burn Life Support (ABLS)"
    }
  },
  {
    id: "np4-003",
    area: "NP IV",
    areaName: "Medical-Surgical Nursing II",
    topic: "Endocrine Emergencies - DKA vs HHS",
    subtopic: "Metabolic and Glycemic Crisis Management",
    vignette: "A 22-year-old female with Type 1 Diabetes Mellitus presents to the emergency room with nausea, vomiting, abdominal pain, deep and rapid Kussmaul respirations, and a fruity breath odor. Laboratory values: Blood glucose 490 mg/dL, arterial pH 7.18, serum bicarbonate 12 mEq/L, and positive urine ketones 4+.",
    question: "Which of the following interventions represents the nurse's immediate priority before initiating continuous IV insulin infusion?",
    options: [
      { id: "A", text: "Infuse 0.9% Normal Saline rapidly to restore circulating vascular volume and check serum potassium." },
      { id: "B", text: "Administer 100 mEq of Sodium Bicarbonate IV push to correct acidemia." },
      { id: "C", text: "Administer a Subcutaneous dose of Glargine (Lantus) insulin." },
      { id: "D", text: "Begin an immediate infusion of 5% Dextrose in 0.45% Saline (D5 1/2 NS)." }
    ],
    correctAnswer: "A",
    rationale: {
      whyCorrect: "The client is in severe Diabetic Ketoacidosis (DKA). In DKA management guidelines, the very FIRST priority is FLUID RESUSCITATION with 0.9% Normal Saline (1 to 1.5 L in the first hour) to correct hypovolemia and perfusion deficits caused by osmotic diuresis. Furthermore, checking the SERUM POTASSIUM is mandatory BEFORE starting insulin: insulin drives potassium into cells, and initiating insulin in a hypokalemic patient can induce lethal cardiac dysrhythmias. Insulin should only begin if potassium is >= 3.3 mEq/L.",
      distractorBreakdown: {
        A: "Hydration first prevents vascular collapse and reduces counter-regulatory stress hormones.",
        B: "Sodium bicarbonate is NOT routinely recommended unless pH is < 6.9, as it can cause paradoxical CSF acidosis, hypokalemia, and delay ketone clearance.",
        C: "Subcutaneous long-acting insulin has delayed absorption in dehydrated states and cannot be titrated during acute DKA crisis; continuous IV Regular insulin is the standard.",
        D: "Dextrose is only added to IV fluids when blood glucose drops below 200-250 mg/dL to prevent hypoglycemia and cerebral edema while continuing insulin to clear ketoacids."
      },
      clinicalPearl: "DKA Treatment Pillars: 1. Hydration first (0.9% NS). 2. Potassium check before Insulin. 3. Regular Insulin IV drip (0.1 units/kg/hr). 4. Add Dextrose when BG reaches 200 mg/dL to close the anion gap safely.",
      tosCompetency: "Safe and Quality Nursing Care: Acute Endocrine Protocols & Critical Hemodynamics",
      reference: "American Diabetes Association (ADA) Standards of Medical Care in Diabetes"
    }
  },
  {
    id: "np4-004",
    area: "NP IV",
    areaName: "Medical-Surgical Nursing II",
    topic: "Spinal Cord Injury - Autonomic Dysreflexia Emergency",
    subtopic: "Neurologic Rehabilitation & Emergency Protocols",
    vignette: "A client with a complete T4 spinal cord injury sustained 6 months ago suddenly develops a severe, pounding headache, flushed face, profuse diaphoresis above the level of injury, nasal congestion, and extreme hypertension (BP 210/115 mmHg) with bradycardia (HR 52 bpm).",
    question: "What is the nurse's very first immediate action?",
    options: [
      { id: "A", text: "Elevate the head of the bed to 90 degrees (High Fowler's) and loosen any constrictive clothing." },
      { id: "B", text: "Administer a dose of Sublingual Nitroglycerin immediately." },
      { id: "C", text: "Place the client in Trendelenburg position to prevent cerebral hypoperfusion." },
      { id: "D", text: "Perform immediate deep tracheal suctioning." }
    ],
    correctAnswer: "A",
    rationale: {
      whyCorrect: "The client is experiencing AUTONOMIC DYSREFLEXIA (Hyperreflexia), a neurological emergency in clients with spinal cord injuries at T6 or higher. The FIRST immediate intervention is to SIT THE PATIENT UPRIGHT (High Fowler's 90 degrees) with legs dependent to use gravity to cause venous pooling in the lower extremities, immediately reducing intracranial and central blood pressure and preventing hemorrhagic stroke. Loosen all constricting garments and then check for the noxious stimulus (most commonly a distended bladder/kinked Foley catheter or fecal impaction).",
      distractorBreakdown: {
        B: "Antihypertensive pharmacotherapy is used only if non-pharmacologic interventions fail or systolic BP remains >150 mmHg after clearing the bladder/bowel.",
        C: "Trendelenburg position would catastrophically worsen cerebral venous engorgement and precipitate intracranial hemorrhage.",
        D: "Tracheal suctioning is unnecessary and may trigger further vagal/sympathetic storming."
      },
      clinicalPearl: "Autonomic Dysreflexia Emergency Steps: 1. SIT PATIENT UP (High Fowler's 90°). 2. Check bladder (kinked Foley or distention - #1 trigger!). 3. Check bowel (fecal impaction - #2 trigger!). 4. Check skin (constrictive clothes, pressure sores).",
      tosCompetency: "Safe and Quality Care: Critical Neurological Interventions",
      reference: "Consortium for Spinal Cord Medicine Clinical Practice Guidelines; Brunner & Suddarth Med-Surg"
    }
  },

  // ==========================================
  // NURSING PRACTICE V: PSYCHIATRIC & MENTAL HEALTH NURSING
  // ==========================================
  {
    id: "np5-001",
    area: "NP V",
    areaName: "Psychiatric and Mental Health Nursing",
    topic: "Therapeutic Communication - Auditory Hallucinations",
    subtopic: "Psychotic Disorders and Schizophrenia Spectrum",
    vignette: "A 24-year-old male diagnosed with Paranoid Schizophrenia is admitted to the psychiatric unit. The nurse observes the client pacing agitatedly in the hallway, tilting his head toward the ceiling, talking to an empty corner, and shouting: 'Stop telling me that! I won't do it!' When the nurse approaches, the client looks terrified and asks: 'Can you hear them? The voices are telling me that everyone here wants to poison me!'",
    question: "Which response by the nurse demonstrates effective therapeutic communication and client safety?",
    options: [
      { id: "A", text: "'No one is trying to poison you. The food in this hospital is prepared under strict dietary standards.'" },
      { id: "B", text: "'I do not hear any voices, but I see that you are frightened. What are the voices telling you to do?'" },
      { id: "C", text: "'Why do you think people want to poison you when the doctors are here to help?'" },
      { id: "D", text: "'Just ignore the voices and come watch television with the other patients in the day room.'" }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "This response achieves three vital therapeutic communication goals: 1) It presents reality without arguing ('I do not hear any voices'); 2) It validates the client's underlying feeling/emotion ('I see that you are frightened'); and 3) Crucially, it assesses for COMMAND HALLUCINATIONS ('What are the voices telling you to do?'). Command hallucinations instructing self-harm or violence toward staff/others represent an acute psychiatric emergency requiring immediate safety precautions.",
      distractorBreakdown: {
        A: "Arguing with delusions or hallucinations invalidates the patient, escalates anxiety and paranoia, and closes therapeutic communication channels.",
        C: "'Why' questions demand justification, place the psychiatric client on the defensive, and increase paranoia.",
        D: "Telling a psychotic patient experiencing terrifying hallucinations to 'just ignore them' minimizes their distress and ignores the critical safety risk of command hallucinations."
      },
      clinicalPearl: "Golden Rule for Hallucinations: Present reality kindly, validate feelings, NEVER agree with the hallucination, and ALWAYS assess for command hallucinations to protect patient and staff safety.",
      tosCompetency: "Communication and Psychosocial Integrity: Mental Health Assessment & Safety Management",
      reference: "Stuart, G. Principles and Practice of Psychiatric Nursing, 11th Ed.; Townsend Psychiatric Mental Health Nursing"
    }
  },
  {
    id: "np5-002",
    area: "NP V",
    areaName: "Psychiatric and Mental Health Nursing",
    topic: "Psychopharmacology - Lithium Toxicity",
    subtopic: "Bipolar Disorder and Mood Stabilizers",
    vignette: "A 32-year-old client with Bipolar I Disorder has been taking Lithium Carbonate 300 mg TID for the past 6 months. During a follow-up visit at the outpatient clinic, the client's family reports that the client has been experiencing persistent nausea, vomiting, severe watery diarrhea, coarse hand tremors, muscle hyperirritability, and unsteady, drunken-like gait (ataxia) over the past 2 days.",
    question: "What is the nurse's primary clinical deduction and immediate required course of action?",
    options: [
      { id: "A", text: "These are expected, harmless early side effects; advise taking the lithium with milk and meals." },
      { id: "B", text: "The client is experiencing Lithium Toxicity; withhold the next dose immediately and obtain a stat serum lithium level." },
      { id: "C", text: "The client is developing extrapyramidal symptoms; prepare an intramuscular injection of Diphenhydramine." },
      { id: "D", text: "The client is in acute depressive relapse; advocate for an increase in Lithium dosage." }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "The symptoms described (persistent vomiting, watery diarrhea, coarse hand tremors, ataxia, and muscle hyperirritability) are hallmarks of MODERATE TO SEVERE LITHIUM TOXICITY (typically serum levels >1.5 to 2.0 mEq/L; normal therapeutic range is 0.6 to 1.2 mEq/L). The nurse must immediately WITHHOLD further lithium doses, order an urgent stat serum lithium level, assess electrolytes and renal function, and prepare for hydration and possible hemodialysis.",
      distractorBreakdown: {
        A: "Mild transient fine hand tremors and mild GI upset occur early in therapy; coarse tremors, vomiting, diarrhea, and ataxia are red-flag toxicity warnings. Continuing the medication can lead to irreversible neurotoxicity, seizures, or coma.",
        C: "Extrapyramidal symptoms (EPS) occur with dopamine-blocking antipsychotics (e.g., Haloperidol), not lithium mood stabilizers. Ataxia here is cerebellar toxicity from lithium.",
        D: "Increasing the dose in a toxic patient would be potentially fatal."
      },
      clinicalPearl: "Lithium Pearls: Therapeutic range = 0.6 to 1.2 mEq/L. Lithium is an alkali metal handled by the kidneys like sodium. Low sodium or dehydration causes kidneys to reabsorb lithium, triggering toxicity! Client education: Maintain steady dietary sodium and fluid intake (2-3 L/day); do NOT restrict salt.",
      tosCompetency: "Physiological and Psychosocial Integrity: Medication Safety in Psychiatric Practice",
      reference: "Kaplan & Sadock's Synopsis of Psychiatry, 12th Ed."
    }
  },
  {
    id: "np5-003",
    area: "NP V",
    areaName: "Psychiatric and Mental Health Nursing",
    topic: "Ego Defense Mechanisms",
    subtopic: "Psychodynamics and Stress Adaptation",
    vignette: "A nurse manager notices that a staff nurse who holds strong unconscious resentment and personal dislike toward a newly hired junior nurse behaves in an excessively warm, overwhelmingly sweet, and profusely complimentary manner whenever interacting with that junior nurse in public.",
    question: "Which ego defense mechanism is the staff nurse unconsciously utilizing?",
    options: [
      { id: "A", text: "Projection" },
      { id: "B", text: "Reaction Formation" },
      { id: "C", text: "Sublimation" },
      { id: "D", text: "Displacement" }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "REACTION FORMATION (also called overcompensation) is an unconscious defense mechanism where unacceptable thoughts, impulses, or feelings are mastered by adopting and exaggerating the exact OPPOSITE conscious behavior or attitude. Here, unacceptable hostility and resentment toward the colleague are converted into exaggerated public affection and sweetness.",
      distractorBreakdown: {
        A: "Projection involves attributing one's own unacceptable feelings or impulses onto someone else (e.g., 'She hates me' when in reality I hate her).",
        C: "Sublimation is the healthy, mature channeling of unacceptable aggressive or sexual urges into socially constructive activities (e.g., an aggressive person taking up competitive boxing).",
        D: "Displacement involves redirecting emotions from the original threatening object/person to a less threatening substitute (e.g., getting yelled at by a doctor and going home to yell at one's spouse)."
      },
      clinicalPearl: "Defense Mechanism Cheat Sheet: Reaction Formation = Behaving the exact opposite of true feelings. Projection = Blaming others for your own feelings. Displacement = Kicking the dog after a bad day. Sublimation = Healthy constructive transformation (mature).",
      tosCompetency: "Psychosocial Integrity: Human Behavior & Coping Mechanism Analysis",
      reference: "Videbeck, S. Psychiatric-Mental Health Nursing, 8th Ed."
    }
  },
  {
    id: "np5-004",
    area: "NP V",
    areaName: "Psychiatric and Mental Health Nursing",
    topic: "Crisis Intervention & Suicide Risk Assessment",
    subtopic: "Lethality Assessment & Direct Questioning",
    vignette: "A 40-year-old recently widowed client with severe major depressive disorder is admitted to the psychiatric ward. During morning rounds, the client hands her favorite gold necklace to the nurse and says: 'I won't be needing this anymore. Soon all my suffering will finally be over.'",
    question: "What is the nurse's priority therapeutic response?",
    options: [
      { id: "A", text: "'Are you having thoughts of killing yourself, and do you have a specific plan?'" },
      { id: "B", text: "'Thank you for the gift, but hospital policy does not allow staff to accept jewelry.'" },
      { id: "C", text: "'You shouldn't feel hopeless; your family still loves you very much.'" },
      { id: "D", text: "'Why do you say that all your suffering will be over?'" }
    ],
    correctAnswer: "A",
    rationale: {
      whyCorrect: "Giving away prized personal possessions and making statements about suffering ending are classic warning signs of acute SUICIDAL INTENT. In suicide risk assessment, the nurse must ask DIRECT, UNAMBIGUOUS QUESTIONS about suicidal ideation, intent, and specific plan ('Are you thinking of killing yourself?'). Direct inquiry does NOT give the patient the idea to commit suicide; rather, it demonstrates care, opens communication, and identifies lethal risk so immediate 1-to-1 constant observation can be instituted.",
      distractorBreakdown: {
        A: "Option A is direct, non-judgmental, and evidence-based to establish suicidal intent.",
        B: "Option B ignores the acute life-or-death crisis to discuss hospital gift policies.",
        C: "Option C offers false reassurance and invalidates the client's genuine psychological despair.",
        D: "Option D asks an accusatory 'Why' question that places the client on the defensive and closes communication."
      },
      clinicalPearl: "Suicide Assessment Rule: ALWAYS ask directly. Assess Plan, Means, and Intent. Lethality risk factors: Specific plan, violent means (firearm, hanging), giving away belongings, sudden unexplained peaceful mood after deep depression.",
      tosCompetency: "Psychosocial Integrity: Crisis Intervention and Suicide Safety Protocols",
      reference: "American Psychiatric Association Practice Guidelines for Suicide Risk Assessment"
    }
  },

  // ==========================================
  // NURSING JURISPRUDENCE & PROFESSIONAL ETHICS
  // ==========================================
  {
    id: "jur-001",
    area: "Jurisprudence",
    areaName: "Nursing Jurisprudence & Ethics",
    topic: "Republic Act No. 9173 - Scope of Nursing Practice",
    subtopic: "Philippine Nursing Act of 2002 (Sec. 28)",
    vignette: "A staff nurse in a primary district hospital in Pangasinan has completed the accredited training on Maternal and Child Health and suturing of perineal lacerations under DOH/PRC guidelines. A primiparous mother delivers with an uncomplicated second-degree perineal laceration. The attending obstetrician is en route handling a mass casualty at another facility.",
    question: "Under Section 28 of Republic Act No. 9173 (Philippine Nursing Act of 2002), is the registered nurse legally authorized to suture the perineal laceration?",
    options: [
      { id: "A", text: "No, suturing of any laceration is strictly an invasive surgical act exclusive to licensed physicians." },
      { id: "B", text: "Yes, provided the nurse has undergone special training according to protocol established by the Board of Nursing and DOH." },
      { id: "C", text: "No, nurses may only suture if supervised in person by a resident physician inside an operating theater." },
      { id: "D", text: "Yes, any registered nurse possesses inherent legal authority upon passing the PNLE without requiring additional training." }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "Under Section 28 (Scope of Nursing) of Republic Act No. 9173: 'In the administration of intravenous injections, special training shall be required according to protocol established. Provided, that in the administration of oral, topical, and parenteral medications and... in the SUTURING OF PERINEAL LACERATIONS, SPECIAL TRAINING SHALL BE PROVIDED according to protocol established.' Therefore, a registered nurse who has successfully completed this accredited specialized training protocol is legally empowered and protected by law to perform perineal suturing.",
      distractorBreakdown: {
        A: "RA 9173 explicitly provides an exception permitting trained nurses to suture perineal lacerations to reduce maternal morbidity in resource-limited or emergency settings.",
        C: "In-person physician presence is not mandated under Sec. 28 if the nurse is certified under established protocols.",
        D: "Passing the PNLE grants general nursing practice licensure, but specialized skills such as perineal suturing and IV therapy explicitly require completion of recognized specialized training."
      },
      clinicalPearl: "RA 9173 Sec. 28 Highlights: 1. Special training required for IV therapy. 2. Special training required for suturing perineal lacerations. 3. Nurses cannot prescribe medications (except in specific expanded DOH protocols/nurse practitioners where explicitly legislated).",
      tosCompetency: "Legal Responsibility: Scope and Standards of Nursing Practice under RA 9173",
      reference: "Republic Act No. 9173 (Philippine Nursing Act of 2002), Section 28; Professional Regulatory Board of Nursing"
    }
  },
  {
    id: "jur-002",
    area: "Jurisprudence",
    areaName: "Nursing Jurisprudence & Ethics",
    topic: "Legal Torts & Malpractice - Res Ipsa Loquitur",
    subtopic: "Professional Liability and Torts in Nursing",
    vignette: "A surgical patient undergoes an exploratory laparotomy for peritonitis. During the procedure, the circulating nurse and scrub nurse miscount surgical sponges and report an incorrect 'sponges accounted for' count to the surgeon. Two weeks post-operatively, the client develops severe abdominal sepsis. A repeat CT scan reveals a retained surgical lap sponge in the peritoneal cavity requiring re-operation.",
    question: "In the subsequent legal action filed by the patient, which legal doctrine applies that relieves the plaintiff from proving specific negligence because 'the thing speaks for itself'?",
    options: [
      { id: "A", text: "Respondeat Superior" },
      { id: "B", text: "Res Ipsa Loquitur" },
      { id: "C", text: "Damnum Absque Injuria" },
      { id: "D", text: "Force Majeure" }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "The legal doctrine of RES IPSA LOQUITUR ('the thing speaks for itself') applies when an injury occurs that ordinarily does not happen in the absence of negligence, the instrumentality was under the exclusive management and control of the defendants (the surgical team), and the plaintiff was free of contributory negligence. A retained surgical instrument or sponge inside a body cavity is the classic textbook illustration of Res Ipsa Loquitur in medical jurisprudence, shifting the burden of proof to the defendants.",
      distractorBreakdown: {
        A: "Respondeat Superior ('let the master answer') makes an employer/hospital vicariously liable for the negligent acts of its employees performed within the scope of their employment.",
        C: "Damnum Absque Injuria ('damage without legal injury') refers to loss or harm for which the law provides no remedy because no legal right was infringed.",
        D: "Force Majeure refers to an unavoidable act of nature or fortuitous event (e.g., an earthquake), which does not apply to human counting error."
      },
      clinicalPearl: "Legal Doctrines for Nurses: Res Ipsa Loquitur = The thing speaks for itself (retained sponge, wrong limb amputated). Respondeat Superior = Master answers for servant (hospital liability). Captain of the Ship = Surgeon in control of OR (now modified by shared liability).",
      tosCompetency: "Legal and Ethical Responsibility: Negligence, Torts, and Malpractice Doctrines",
      reference: "Philippine Medical Jurisprudence (Solanzo); Code of Ethics for Registered Nurses (PRC BON Res. 220 s. 2004)"
    }
  },
  {
    id: "jur-003",
    area: "Jurisprudence",
    areaName: "Nursing Jurisprudence & Ethics",
    topic: "PRC Board of Nursing - Qualifications & Licensure",
    subtopic: "RA 9173 - Article III (Board of Nursing)",
    vignette: "A prominent chief nurse who has been a licensed Registered Nurse for 12 years, holds a Master's Degree in Nursing Administration, and is an active member of the accredited professional organization (PNA) is being nominated for appointment as a Member of the Professional Regulatory Board of Nursing (BON).",
    question: "Under Article III, Section 4 of Republic Act No. 9173, what is the statutory requirement regarding the continuous practice of the profession prior to appointment?",
    options: [
      { id: "A", text: "Must have at least 5 years of continuous nursing practice, the last 2 years of which must be in the Philippines." },
      { id: "B", text: "Must have at least 10 years of continuous nursing practice, the last 5 years of which must be in the Philippines." },
      { id: "C", text: "Must have at least 15 years of nursing service, regardless of geographic location." },
      { id: "D", text: "Must have served as a Dean of a College of Nursing for a minimum of 3 years." }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "Under Section 4 (Qualifications of the Chairperson and Members) of RA 9173, an appointee to the Board of Nursing must: 1) Be a natural-born citizen and resident of the Philippines; 2) Be a registered nurse with currently valid certificate; 3) Hold a Master's degree in nursing, education, or other allied medical sciences; 4) Have at least TEN (10) YEARS of continuous practice of the profession prior to appointment, the LAST FIVE (5) YEARS of which MUST BE IN THE PHILIPPINES; and 5) Not have been convicted of any crime involving moral turpitude.",
      distractorBreakdown: {
        A: "5 years is insufficient; the statutory requirement under RA 9173 is explicitly 10 years continuous practice with 5 years in the country.",
        C: "15 years is not the minimum statutory threshold, and the 5-year local residency/practice requirement cannot be waived.",
        D: "Serving as a Dean is not mandatory for all Board members; members must represent various areas (education, clinical, community)."
      },
      clinicalPearl: "Board of Nursing Anatomy (RA 9173): Composed of 1 Chairperson and 6 Members (Total: 7). Appointed by the President of the Philippines from a list of 3 nominees per vacancy submitted by the PRC. Term of office is 3 years, eligible for reappointment for another 3 years (maximum 6 years).",
      tosCompetency: "Legal Responsibility: Organizational Governance & Professional Regulatory Framework",
      reference: "Republic Act No. 9173, Article III, Section 4 & 5; PRC BON Mandates"
    }
  },
  {
    id: "jur-004",
    area: "Jurisprudence",
    areaName: "Nursing Jurisprudence & Ethics",
    topic: "Informed Consent & Patient's Bill of Rights",
    subtopic: "Legal Role of the Nurse in Informed Consent",
    vignette: "A 52-year-old client is scheduled for an elective laparoscopic cholecystectomy in 1 hour. The surgeon visited the patient earlier, explained the procedure, and left the consent form in the chart. When the nurse brings the consent form to the patient to sign, the patient looks confused and asks: 'Nurse, the doctor spoke very fast. Will they be taking out my stomach or my liver? What are the dangers if I refuse?'",
    question: "What is the nurse's legally and ethically sound action?",
    options: [
      { id: "A", text: "Explain the surgical procedure and potential surgical complications yourself, then have the patient sign the form." },
      { id: "B", text: "Withhold the patient's signature, notify the surgeon immediately that the patient does not understand the surgery, and request the surgeon to return to explain before obtaining consent." },
      { id: "C", text: "Instruct the patient's spouse to sign the consent form as legal surrogate so the operating room schedule is not delayed." },
      { id: "D", text: "Have the patient sign the form anyway, as the surgeon has already formally documented the conversation in the progress notes." }
    ],
    correctAnswer: "B",
    rationale: {
      whyCorrect: "The physician/surgeon performing the procedure has the PRIMARY NON-DELEGABLE LEGAL DUTY to provide informed consent (informing the patient of the nature, risks, benefits, alternatives, and consequences of refusal). The nurse's role in informed consent is STRICTLY as a WITNESS: verifying that the client has legal capacity, appears competent, and signs voluntarily. If the client demonstrates lack of understanding, the nurse MUST NOT attempt to provide primary surgical consent; the nurse must withhold signing and call the surgeon back.",
      distractorBreakdown: {
        A: "It is outside the registered nurse's scope to explain surgical risks and alternative operations; this is the surgeon's legal obligation.",
        C: "A competent adult cannot have their spouse sign surrogate consent unless adjudicated incapacitated or in an emergency without capacity.",
        D: "Signing a consent form without comprehension invalidates the consent and constitutes battery if the procedure proceeds without legal consent."
      },
      clinicalPearl: "Informed Consent Roles: Doctor = Informs & Explains (Risks, benefits, alternatives). Nurse = Witnesses signature, verifies voluntary consent and competence. If patient has questions about the surgery: CALL THE DOCTOR BACK!",
      tosCompetency: "Legal and Ethical Responsibility: Patient Rights & Informed Consent Standards",
      reference: "Code of Ethics for Registered Nurses (PRC BON Res. 220 s. 2004); Philippine Hospital Association Patient's Bill of Rights"
    }
  }
,
  {
    "id": "np1-006",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "National TB Control Program (NTP)",
    "subtopic": "Anti-TB Pharmacotherapy & Client Education",
    "vignette": "A 42-year-old construction worker diagnosed with pulmonary tuberculosis is initiated on Category I DOTS therapy (2HRZE / 4HR). Two weeks later, he returns to the Rural Health Unit in severe panic, stating: 'Nurse, I am bleeding inside! My urine, saliva, and sweat are bright reddish-orange!'",
    "question": "What is the nurse's most appropriate and scientifically sound action?",
    "options": [
      {
        "id": "A",
        "text": "Withhold all TB medications immediately and send an urgent referral to the emergency room for internal hemorrhage."
      },
      {
        "id": "B",
        "text": "Reassure the client that Rifampicin normally produces harmless red-orange discoloration of bodily fluids, and encourage continued uninterrupted adherence."
      },
      {
        "id": "C",
        "text": "Instruct the patient to double his daily water intake and discontinue Isoniazid until the color returns to pale yellow."
      },
      {
        "id": "D",
        "text": "Advise the patient to stop taking Rifampicin and substitute it with high-dose Vitamin C."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Rifampicin (R) is well-documented to cause benign, harmless reddish-orange discoloration of bodily secretions including urine, sweat, saliva, and tears. Soft contact lenses may become permanently stained. The nurse must provide client education to relieve panic, prevent premature drug abandonment, and safeguard DOTS compliance.",
      "distractorBreakdown": {
        "A": "This is a benign excretion effect of Rifampicin, not internal hemorrhage; withholding DOTS medications leads to treatment failure and multi-drug resistant TB (MDR-TB).",
        "C": "Isoniazid does not cause red-orange urine (its main adverse effect is peripheral neuropathy, prevented with Pyridoxine/B6), and fluids will not stop Rifampicin's pigment excretion.",
        "D": "Nurses cannot alter prescribed anti-TB regimens; stopping Rifampicin jeopardizes cure rates."
      },
      "clinicalPearl": "Anti-TB Side Effect Signatures: Rifampicin = Red-orange urine (harmless); Isoniazid (INH) = Peripheral neuropathy (give Vit B6) + Hepatitis; Pyrazinamide (PZA) = Hyperuricemia (Gout) + Hepatotoxicity; Ethambutol (EMB) = Optic neuritis (decreased visual acuity / red-green discrimination); Streptomycin = Ototoxicity (8th cranial nerve damage).",
      "tosCompetency": "Safe and Quality Nursing Care: Communicable Disease Management & Client Pharmacotherapy Education",
      "reference": "DOH National Tuberculosis Control Program (NTP) Manual of Procedures (6th Ed.); Philippine Clinical Practice Guidelines for TB"
    }
  },
  {
    "id": "np1-007",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "Expanded Program on Immunization (EPI)",
    "subtopic": "Pentavalent Vaccine & Adverse Events Following Immunization",
    "vignette": "A mother brings her 6-week-old infant to the health center for the first dose of Pentavalent vaccine (DPT-HepB-Hib) and Oral Polio Vaccine (OPV). Following administration, the mother asks what normal side effects she should anticipate and when to return.",
    "question": "Which discharge instructions given by the public health nurse are correct?",
    "options": [
      {
        "id": "A",
        "text": "Instruct the mother to apply a hot compress immediately to the thigh and give aspirin drops every 4 hours for low-grade fever."
      },
      {
        "id": "B",
        "text": "Explain that mild fever, local soreness, and irritability within 24-48 hours are expected; advise cool damp cloth on injection site and age-appropriate Paracetamol as needed."
      },
      {
        "id": "C",
        "text": "Advise the mother that high fever above 40°C with high-pitched crying is routine and requires no medical attention."
      },
      {
        "id": "D",
        "text": "Tell the mother to delay the second dose until the child reaches 6 months of age to prevent vaccine overload."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Pentavalent vaccine (containing the whole-cell pertussis component) commonly produces local tenderness, redness, induration, and mild fever (<38.5°C) within 24 to 48 hours. Applying a clean, cool damp cloth relieves local discomfort, and paracetamol addresses fever. Aspirin is strictly contraindicated in children due to the risk of Reye's syndrome.",
      "distractorBreakdown": {
        "A": "Aspirin is contraindicated in pediatric clients due to Reye's syndrome (hepatic failure and encephalopathy); heat may increase local inflammation and swelling.",
        "C": "Inconsolable crying for >3 hours or fever >40°C represents an Adverse Event Following Immunization (AEFI) requiring urgent clinical evaluation and potential contraindication to future pertussis doses.",
        "D": "The EPI Pentavalent schedule requires doses at 6, 10, and 14 weeks; delaying until 6 months leaves the infant unprotected against deadly Haemophilus influenzae and pertussis."
      },
      "clinicalPearl": "EPI Vaccines Rules: Pentavalent schedule is 6, 10, 14 weeks (IM anterolateral thigh). Never give Aspirin to pediatric febrile clients (Reye's Syndrome risk). Paracetamol and cold compress are the standard interventions.",
      "tosCompetency": "Health Education and Maternal-Child Protection: Routine Immunization Protocols & AEFI Triage",
      "reference": "Department of Health (DOH) Administrative Order No. 2010-0010: Revised Policy on the Expanded Program on Immunization"
    }
  },
  {
    "id": "np1-008",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "Community Organizing Participatory Action Research (COPAR)",
    "subtopic": "Phases of COPAR: Entry vs Organization Building",
    "vignette": "A community health nurse is assigned to a remote rural barangay. During the Entry Phase (Social Preparation), the nurse conducts 'pagbabahay-bahay' (ocular walk-throughs) and establishes rapport with informal community leaders and residents.",
    "question": "What is the primary objective of the public health nurse during this Entry Phase?",
    "options": [
      {
        "id": "A",
        "text": "Elect the formal officers of the Barangay Health Workers Association and draft barangay health ordinances."
      },
      {
        "id": "B",
        "text": "Integrate with the community, understand local norms and values, and identify potential indigenous leaders who command genuine respect."
      },
      {
        "id": "C",
        "text": "Phase out from the community and transfer full project ownership to the municipal health officer."
      },
      {
        "id": "D",
        "text": "Distribute commercial pharmaceuticals and free medical supplies to gain immediate political favor."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "The Entry (Social Preparation) Phase in COPAR focuses on community integration ('pakikipamuhay'), gaining acceptance, understanding local social structures, and spotting potential indigenous leaders who possess genuine community credibility. Formal organization building and election of officers occur in the subsequent Organization-Building Phase.",
      "distractorBreakdown": {
        "A": "Formal election of community officers and task forces occurs in the Organization-Building Phase, not during initial entry.",
        "C": "Phase-out is the final stage (Self-Reliance/Consolidation Phase) after the community organization is fully autonomous.",
        "D": "Handing out free goods fosters dole-out mentality and dependency, completely contradicting the Primary Health Care philosophy of community self-reliance."
      },
      "clinicalPearl": "COPAR Sequence: 1) Pre-entry (community selection based on need/safety), 2) Entry/Social Preparation (integration, spotting informal leaders), 3) Community Diagnosis (participatory data gathering), 4) Organization Building (forming core group), 5) Action/Implementation, 6) Phase-out/Consolidation (self-reliance).",
      "tosCompetency": "Community Health Development: Participatory Community Organizing & Primary Health Care Principles",
      "reference": "DOH Primary Health Care Guidelines; Community Organizing Participatory Action Research (COPAR) Manual"
    }
  },
  {
    "id": "np1-009",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "Public Health Nursing Bag Technique",
    "subtopic": "Asepsis & Prevention of Cross-Infection",
    "vignette": "A public health nurse arrives at the home of a client recovering from an infected leg ulcer. Before providing wound dressing and assessment, the nurse prepares the Public Health Nurse (PHN) bag on a wooden table in the client's home.",
    "question": "Which action by the nurse strictly adheres to the principles of the Bag Technique?",
    "options": [
      {
        "id": "A",
        "text": "Place the PHN bag directly on the floor near the patient's bedside to facilitate quick access to supplies."
      },
      {
        "id": "B",
        "text": "Spread paper lining with the clean side in contact with the table and contaminated side facing outward, then perform handwashing before touching bag contents."
      },
      {
        "id": "C",
        "text": "Perform handwashing inside the patient's bathroom using the patient's shared towel before opening the bag."
      },
      {
        "id": "D",
        "text": "Return used soiled dressing forceps directly into the interior sterile compartment of the bag after rinsing in plain tap water."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "In Public Health Bag Technique, the paper lining protects the bag from contamination from household surfaces: the clean side of the paper faces the table/bag while the exposed side is treated as clean working space. The nurse MUST perform thorough hand hygiene before reaching into the inner compartments of the bag to prevent cross-contamination between households.",
      "distractorBreakdown": {
        "A": "The bag must NEVER be placed on the floor or the patient's bed; it must always be placed on a clean flat surface protected by paper lining.",
        "C": "The nurse must use clean paper towels or an individual towel brought in the bag; using a shared client towel transmits domestic pathogens.",
        "D": "Contaminated instruments must be placed in a separate waste pouch or outer pocket for sterilization and NEVER returned directly to the clean internal compartments."
      },
      "clinicalPearl": "Bag Technique Golden Rules: Plan of care proceeds from CLEAN to CONTAMINATED (non-infectious care before infected wound care). Handwashing is performed before opening the bag and before touching any interior articles. The bag is an essential tool, not an ornamental fixture!",
      "tosCompetency": "Safe Care Environment: Infection Prevention and Control in Domiciliary and Community Settings",
      "reference": "Public Health Nursing in the Philippines (National League of Philippine Government Nurses)"
    }
  },
  {
    "id": "np1-010",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "DOH 10 Approved Herbal Medicines (RA 8423 - TAMA Act)",
    "subtopic": "Sambong vs Lagundi Clinical Indications",
    "vignette": "A 55-year-old male client in a rural barangay visits the health center complaining of minor dysuria and mild flank heaviness. Diagnostic ultrasound confirms small non-obstructive renal calculi (<4 mm). The rural physician suggests herbal therapy.",
    "question": "Which Department of Health-approved herbal medicine is indicated for its diuretic and anti-urolithiasis properties?",
    "options": [
      {
        "id": "A",
        "text": "Sambong (Blumea balsamifera)"
      },
      {
        "id": "B",
        "text": "Lagundi (Vitex negundo)"
      },
      {
        "id": "C",
        "text": "Akapulko (Cassia alata)"
      },
      {
        "id": "D",
        "text": "Tsaang Gubat (Carmona retusa)"
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Sambong (Blumea balsamifera) is scientifically proven and officially approved by the DOH as an effective diuretic and anti-urolithiasis (kidney stone dissolver/flusher) for small non-obstructive renal and urinary tract stones.",
      "distractorBreakdown": {
        "B": "Lagundi (Vitex negundo) is approved for cough, asthma, bronchitis, and fever (bronchodilator and anti-inflammatory).",
        "C": "Akapulko (Cassia alata) is approved for superficial fungal skin infections (tinea flava, ringworm, athlete's foot).",
        "D": "Tsaang Gubat (Carmona retusa) is approved as an antispasmodic for stomach ache, abdominal cramps, and as a mouthwash."
      },
      "clinicalPearl": "DOH 10 Approved Herbs Mnemonic: 'SAM-BONG' = Stones & Diuresis; 'LAGUNDI' = Lungs/Cough/Asthma; 'AKAPULKO' = Antifungal (Ringworm); 'TSAANG GUBAT' = Tummy cramps; 'BAWANG' = Blood pressure & cholesterol; 'AMPALAYA' = Diabetes (DM Type 2); 'ULASIMANG BATO' = Uric acid (Gout); 'BAYABAS' = Antiseptic wash.",
      "tosCompetency": "Health Education and Traditional Medicine: DOH Approved Philippine Medicinal Plants (RA 8423)",
      "reference": "Philippine Institute of Traditional and Alternative Health Care (PITAHC); Republic Act No. 8423 (TAMA of 1997)"
    }
  },
  {
    "id": "np1-011",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "Communicable Disease Control: Dengue Fever",
    "subtopic": "DOH Dengue Warning Signs & Inpatient Admission Criteria",
    "vignette": "A 9-year-old schoolchild is brought to the Rural Health Unit with a 4-day history of high continuous fever that has just subsided today. The mother states: 'The fever broke, but now he is vomiting persistently, complaining of severe abdominal pain, and has nosebleeds.'",
    "question": "How should the community health nurse classify and prioritize this child according to the DOH Dengue Clinical Guidelines?",
    "options": [
      {
        "id": "A",
        "text": "Dengue without Warning Signs; reassure the mother that fever defervescence indicates the child has fully recovered and discharge home."
      },
      {
        "id": "B",
        "text": "Dengue with Warning Signs (Critical Phase); initiate immediate intravenous fluid resuscitation with isotonic crystalloid and arrange emergent hospital admission."
      },
      {
        "id": "C",
        "text": "Instruct the mother to administer oral aspirin drops and withhold all fluids until vomiting ceases."
      },
      {
        "id": "D",
        "text": "Order an outpatient stool exam and schedule follow-up in 1 week."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "The critical phase of Dengue occurs during defervescence (days 3-7 when fever abruptly drops). This is the high-risk window for plasma leakage, capillary permeability, shock, and hemorrhage. The presence of persistent vomiting, severe abdominal pain, and mucosal bleeding (epistaxis) establishes Dengue with Warning Signs, demanding immediate IV fluid therapy and urgent inpatient admission.",
      "distractorBreakdown": {
        "A": "Defervescence in dengue marks the start of the DANGEROUS CRITICAL PHASE where capillary leak causes dengue shock syndrome; discharging home is clinically fatal.",
        "C": "Aspirin and NSAIDs (ibuprofen, mefenamic acid) are strictly CONTRAINDICATED in Dengue due to the severe risk of catastrophic GI bleeding and Reye's syndrome.",
        "D": "Delaying hospitalization for outpatient stool testing during the critical phase causes preventable mortality from hypovolemic shock."
      },
      "clinicalPearl": "Dengue Clinical Phases: 1) Febrile (high fever, flushed face), 2) Critical (Day 3-7, fever drops, plasma leakage, shock occurs - WATCH CAREFULLY!), 3) Recovery (plasma reabsorption). Warning Signs = Abdominal pain, Persistent vomiting, Fluid accumulation, Mucosal bleed, Lethargy, Liver enlargement, Rising Hematocrit with dropping Platelets.",
      "tosCompetency": "Communicable Disease Management: Dengue Triage, Fluid Therapy, and Early Warning Recognition",
      "reference": "DOH Clinical Practice Guidelines on the Management of Dengue in Children and Adults (DOH AO 2012-0006)"
    }
  },
  {
    "id": "np1-012",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "Demography & Vital Health Statistics",
    "subtopic": "Infant Mortality Rate (IMR) as a Community Health Indicator",
    "vignette": "The Municipal Health Officer reviews the annual vital health statistics report for a municipality with a total population of 45,000. In the past calendar year, there were 900 total live births, 27 infant deaths (under 1 year of age), and 5 maternal deaths.",
    "question": "What is the Infant Mortality Rate (IMR) per 1,000 live births, and what does this metric primarily indicate?",
    "options": [
      {
        "id": "A",
        "text": "30 per 1,000 live births; it is the most sensitive indicator of the overall socioeconomic and general health status of a community."
      },
      {
        "id": "B",
        "text": "6 per 1,000 live births; it measures maternal survival during labor and delivery."
      },
      {
        "id": "C",
        "text": "3 per 1,000 live births; it reflects crude population death rate across all ages."
      },
      {
        "id": "D",
        "text": "50 per 1,000 live births; it represents neonates dying in the first 28 days of life."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "IMR Formula = (Number of deaths under 1 year of age / Total registered live births in that year) x 1,000. Here: (27 / 900) x 1,000 = 0.03 x 1,000 = 30 per 1,000 live births. In public health science, the Infant Mortality Rate is universally recognized as the single most sensitive indicator of a community's socioeconomic conditions, nutritional status, environmental sanitation, and efficacy of health services.",
      "distractorBreakdown": {
        "B": "Maternal mortality measures obstetric deaths per 100,000 live births, not infant survival.",
        "C": "Crude death rate measures total deaths across all ages per 1,000 total mid-year population.",
        "D": "Neonatal mortality rate specifically counts deaths within the first 28 days of life, which is a subcomponent of IMR."
      },
      "clinicalPearl": "Vital Statistics Formulas: IMR = (Deaths <1 yr / Live births) x 1,000. MMR = (Maternal deaths / Live births) x 100,000. CDR = (Total deaths / Midyear population) x 1,000. IMR is the #1 benchmark of community sanitary and socioeconomic living standards.",
      "tosCompetency": "Epidemiological Analysis: Vital Statistics Computation & Community Health Assessment",
      "reference": "Philippine Health Advisories & Epidemiology Bureau, Department of Health (DOH); Field Health Services Information System (FHSIS)"
    }
  },
  {
    "id": "np1-013",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "Leprosy (Hansen's Disease) Elimination Program",
    "subtopic": "Multidrug Therapy (MDT) & De-stigmatization",
    "vignette": "A 35-year-old fisherman is diagnosed with multibacillary leprosy at the RHU after presenting with hypopigmented anaesthetic skin lesions and thickened peripheral nerves. The client breaks into tears, asking if he must be quarantined at a leprosarium and separated from his family.",
    "question": "What is the public health nurse's most accurate therapeutic response?",
    "options": [
      {
        "id": "A",
        "text": "'You will need to be permanently isolated in a sanitarium until all your skin patches completely disappear.'"
      },
      {
        "id": "B",
        "text": "'Leprosy is non-fatal and easily cured by DOH Multidrug Therapy (MDT). After the very first dose, you are no longer infectious and can safely live with your family at home.'"
      },
      {
        "id": "C",
        "text": "'You must burn all your clothing, utensils, and personal beddings to prevent household spread.'"
      },
      {
        "id": "D",
        "text": "'Leprosy is a hereditary punishment and cannot be treated with modern antibiotic therapy.'"
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Under the National Leprosy Control Program (NLCP) and WHO guidelines, Hansen's disease (caused by Mycobacterium leprae) is completely curable with Multidrug Therapy (MDT: Rifampicin, Dapsone, and Clofazimine). Within just 24 to 72 hours of taking the initial supervised dose of Rifampicin, over 99.9% of the bacilli are rendered non-viable, meaning the client is non-infectious. Patients are treated as outpatients in their homes without isolation or sanitarium quarantine.",
      "distractorBreakdown": {
        "A": "Forced segregation in leprosaria was repealed decades ago; modern care is entirely community- and domiciliary-based.",
        "C": "Transmission occurs via prolonged respiratory droplet contact in untreated cases; burning personal belongings is an archaic, stigmatizing misconception.",
        "D": "Leprosy is an infectious bacterial disease, not a hereditary or supernatural affliction."
      },
      "clinicalPearl": "Leprosy Control Facts: Hallmark sign = Hypopigmented or reddish skin macule with LOSS OF SENSATION (touch, pain, temperature). Once MDT (Rifampicin + Clofazimine + Dapsone) starts, infectivity drops to zero in days. No isolation needed!",
      "tosCompetency": "Safe Care & De-stigmatization: Chronic Communicable Disease Education and NLCP Standards",
      "reference": "National Leprosy Control Program (NLCP) Manual; World Health Organization (WHO) Guidelines for Diagnosis, Treatment and Prevention of Leprosy"
    }
  },
  {
    "id": "np1-014",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "Environmental Sanitation & Water Safety",
    "subtopic": "Classification of Water Supply Facilities (PD 856)",
    "vignette": "During a barangay health survey in an upland agricultural community, the nurse notes that residents fetch drinking water from a communal protected spring with no distribution system; families carry buckets directly to and from the water point.",
    "question": "Under Presidential Decree No. 856 (Code on Sanitation of the Philippines), this water facility is classified as:",
    "options": [
      {
        "id": "A",
        "text": "Level I (Point Source)"
      },
      {
        "id": "B",
        "text": "Level II (Communal Faucet System / Stand-posts)"
      },
      {
        "id": "C",
        "text": "Level III (Waterworks System / Individual House Connections)"
      },
      {
        "id": "D",
        "text": "Level IV (Regional Municipal Reservoir)"
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Under PD 856, Level I (Point Source) is a protected well or developed spring with an outlet but without a distribution system, generally serving 15 to 25 households within a 250-meter radius. Level II is a communal faucet system with pipes leading to public stand-posts (serving 4-6 households). Level III is a full waterworks system with individual household meters and taps.",
      "distractorBreakdown": {
        "B": "Level II features a piped distribution system with communal faucets/stand-posts serving several households.",
        "C": "Level III consists of an extensive distribution network with metered individual household tap connections.",
        "D": "There is no 'Level IV' in the statutory classification of water supplies under the Philippine Sanitation Code."
      },
      "clinicalPearl": "Water Supply Levels (PD 856): Level I = Point Source (protected well/spring, no pipes). Level II = Communal Faucets (pipes to public stand-post, 25-100m). Level III = Household Taps (piped water into individual homes).",
      "tosCompetency": "Environmental Health: Water Quality Surveillance and Community Sanitation Standards",
      "reference": "Presidential Decree No. 856 (Code on Sanitation of the Philippines); DOH Environmental Health Services"
    }
  },
  {
    "id": "np2-005",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Essential Intrapartum and Newborn Care (EINC)",
    "subtopic": "The 4 Time-Bound Core Steps",
    "vignette": "A nurse is assisting in the delivery room as a primigravida gives birth to a vigorous, crying full-term infant. The nurse immediately begins executing the Department of Health Essential Intrapartum and Newborn Care (EINC / 'Unang Yakap') protocol.",
    "question": "What is the correct, evidence-based chronological sequence of the 4 core time-bound steps of EINC?",
    "options": [
      {
        "id": "A",
        "text": "Immediate suctioning of airway -> Footprinting -> Vitamin K injection -> Bathing in warm water."
      },
      {
        "id": "B",
        "text": "Immediate thorough drying (30 seconds) -> Early skin-to-skin contact -> Properly timed cord clamping (1-3 min) -> Non-separation for early breastfeeding initiation."
      },
      {
        "id": "C",
        "text": "Clamping the umbilical cord immediately -> Routine endotracheal suctioning -> Radiant warmer placement -> Formula feeding."
      },
      {
        "id": "D",
        "text": "Weighing and measuring -> BCG and Hep B vaccination -> Immediate cord clamping -> Eye prophylaxis."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "DOH Administrative Order 2009-0025 mandates the exact 4 time-bound EINC sequence: 1) Immediate, thorough drying for 30 seconds to stimulate breathing and prevent hypothermia, 2) Early skin-to-skin contact to maintain body warmth and colonization with maternal flora, 3) Properly timed cord clamping (wait 1 to 3 minutes until cord pulsations stop) to prevent neonatal anemia, 4) Non-separation of mother and baby for early breastfeeding initiation (rooting/crawling reflex).",
      "distractorBreakdown": {
        "A": "Routine suctioning and immediate bathing are outdated, harmful practices that trigger hypothermia and bradycardia.",
        "C": "Immediate cord clamping robs the neonate of up to 30-40 mL/kg of placental blood (leading to severe infant iron deficiency anemia).",
        "D": "Anthropometric measurements, eye ointment (erythromycin), and injections (Vit K, Hep B, BCG) are delayed until AFTER the completion of the first full breastfeeding."
      },
      "clinicalPearl": "EINC 4 Core Steps: 1) Dry thoroughly (30 sec), 2) Skin-to-skin contact (at least 60-90 min), 3) Clamping cord ONLY when pulsations stop (1-3 min), 4) Non-separation for breastfeeding. Postpone bathing for at least 6 hours!",
      "tosCompetency": "Maternal and Newborn Care: Implementation of DOH Essential Intrapartum and Newborn Care (AO 2009-0025)",
      "reference": "DOH Administrative Order No. 2009-0025: Adopting New Policies and Protocol on Essential Newborn Care (Unang Yakap)"
    }
  },
  {
    "id": "np2-006",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "High-Risk Pregnancy: Hypertensive Disorders",
    "subtopic": "Magnesium Sulfate Toxicity Monitoring & Antidote",
    "vignette": "A 28-year-old G1P0 at 36 weeks gestation with severe preeclampsia is receiving a continuous intravenous infusion of Magnesium Sulfate (2 g/hr) following a 4 g loading dose. During the hourly nursing assessment, the nurse records: BP 142/92, Heart Rate 78, Respiratory Rate 10 breaths/min, Urine Output 18 mL over the last hour, and Deep Tendon Reflexes (Patellar) absent (0/4).",
    "question": "What is the nurse's immediate sequence of priority actions?",
    "options": [
      {
        "id": "A",
        "text": "Increase the IV infusion rate of Magnesium Sulfate and document normal central nervous system depression."
      },
      {
        "id": "B",
        "text": "Stop the Magnesium Sulfate infusion immediately, alert the obstetrician, and prepare to administer Calcium Gluconate 10% IV slow push."
      },
      {
        "id": "C",
        "text": "Administer a bolus of IV Hydralazine and place the client in supine position."
      },
      {
        "id": "D",
        "text": "Obtain an emergent urine specimen for culture and encourage the client to drink water."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Absent deep tendon reflexes, bradypnea (RR <12/min), and oliguria (<30 mL/hr) are textbook clinical hallmarks of Magnesium Sulfate toxicity. The drug is cleared exclusively by the kidneys; oliguria leads to toxic drug accumulation, precipitating respiratory arrest and cardiac arrest. The nurse must STOP the infusion immediately and administer the specific antidote: 10% Calcium Gluconate (1 g IV over 3-5 minutes).",
      "distractorBreakdown": {
        "A": "Increasing or maintaining the infusion will result in fatal maternal respiratory paralysis and cardiac arrest.",
        "C": "Hydralazine treats severe hypertension, not magnesium toxicity; supine positioning causes supine hypotensive syndrome from aortocaval compression.",
        "D": "Oliguria in this setting is due to magnesium accumulation and preeclamptic renal end-organ damage, not simple thirst or UTI."
      },
      "clinicalPearl": "Magnesium Sulfate Toxicity Sign Mnemonic: 'BURP' = Blood pressure drops, Urine output <30 mL/hr, Respiratory rate <12 bpm, Patellar reflexes absent. First reflex lost = Patellar! Specific Antidote = 10% Calcium Gluconate at bedside.",
      "tosCompetency": "High-Risk Obstetric Nursing: Recognition and Emergency Management of Magnesium Sulfate Toxicity",
      "reference": "Philippine Obstetrical and Gynecological Society (POGS) Clinical Practice Guidelines on Hypertensive Disorders in Pregnancy"
    }
  },
  {
    "id": "np2-007",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Postpartum Complications: Hemorrhage (PPH)",
    "subtopic": "Uterine Atony vs Full Bladder Nursing Intervention",
    "vignette": "One hour after a spontaneous vaginal delivery, the nurse assesses a multiparous client. The nurse notes heavy vaginal bleeding with large blood clots soaking two perineal pads in 20 minutes. Upon palpation, the uterine fundus is soft, boggy, and displaced 2 fingerbreadths above the umbilicus and to the right.",
    "question": "What are the nurse's immediate priority interventions in order of execution?",
    "options": [
      {
        "id": "A",
        "text": "Prepare the client for an emergency hysterectomy and call the operating room team."
      },
      {
        "id": "B",
        "text": "Perform vigorous fundal massage until firm, support the lower uterine segment, and assist the client to void or catheterize if bladder is distended."
      },
      {
        "id": "C",
        "text": "Elevate the head of the bed to high Fowler's and administer oral methylergonovine."
      },
      {
        "id": "D",
        "text": "Pack the vagina tightly with sterile gauze and leave the client resting in bed."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Uterine atony is the #1 cause of postpartum hemorrhage (>80% of cases). A fundus that is displaced upward and to the right is the hallmark clinical indicator of a full, distended urinary bladder, which mechanically impedes the myometrium from contracting. The nurse must immediately massage the fundus to stimulate contraction and express pooled clots, then empty the bladder (voiding or catheterization) so the uterus can stay firmly contracted.",
      "distractorBreakdown": {
        "A": "Hysterectomy is the absolute last resort for intractable PPH after medical and conservative measures fail.",
        "C": "High Fowler's position increases pelvic pooling and drops cerebral perfusion in hypovolemia; methylergonovine must not be given orally before fundal massage and checking BP (contraindicated in hypertension).",
        "D": "Vaginal packing without uterine massage conceals internal bleeding and delays effective hemostasis."
      },
      "clinicalPearl": "PPH 4 T's: Tone (Atony - #1 cause), Tissue (Retained placenta), Trauma (Lacerations), Thrombin (Coagulopathy). If fundus is boggy & shifted to the right = BLADDER IS FULL! #1 Action = Massage fundus until firm, then empty bladder.",
      "tosCompetency": "Postpartum Nursing Care: Emergency Assessment and Management of Postpartum Hemorrhage",
      "reference": "DOH Maternal and Newborn Care Clinical Guidelines; WHO Postpartum Hemorrhage Prevention Guidelines"
    }
  },
  {
    "id": "np2-008",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Third Trimester Bleeding",
    "subtopic": "Placenta Previa vs Abruptio Placentae Differential Diagnosis",
    "vignette": "A 32-year-old woman at 33 weeks gestation presents to the emergency room with sudden, bright red, painless vaginal bleeding that began while she was resting on the sofa. Vital signs are BP 110/70, HR 82, and fetal heart rate is 144 bpm. Abdominal examination reveals a soft, relaxed, non-tender uterus.",
    "question": "Based on these clinical findings, what medical condition should the nurse suspect, and what procedure is strictly contraindicated?",
    "options": [
      {
        "id": "A",
        "text": "Abruptio Placentae; oxytocin induction is strictly contraindicated."
      },
      {
        "id": "B",
        "text": "Placenta Previa; digital vaginal examination (internal exam) is strictly contraindicated."
      },
      {
        "id": "C",
        "text": "Uterine Rupture; external fetal monitoring is strictly contraindicated."
      },
      {
        "id": "D",
        "text": "Cervical Incompetence; bed rest is strictly contraindicated."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Painless, bright red vaginal bleeding in the third trimester with a soft, non-tender uterus is the classic clinical presentation of Placenta Previa. Digital vaginal examination (internal pelvic exam) is STRICTLY CONTRAINDICATED because inserting a finger through the cervix can puncture or shear the low-lying placenta over the cervical os, triggering catastrophic, exsanguinating maternal and fetal hemorrhage. Placental location must be confirmed by transabdominal ultrasound first.",
      "distractorBreakdown": {
        "A": "Abruptio placentae presents with PAINFUL, dark red vaginal bleeding, severe continuous uterine tenderness, and a board-like, rigid uterus.",
        "C": "Uterine rupture presents with sudden tearing abdominal pain, cessation of uterine contractions, loss of fetal station, and rapid hypovolemic shock.",
        "D": "Cervical incompetence presents in the second trimester (painless dilation and effacement without bleeding)."
      },
      "clinicalPearl": "Placenta Previa vs Abruptio Placentae: PREVIA = Painless, Bright red bleeding, Soft non-tender uterus (NO INTERNAL EXAM!). ABRUPTIO = Abdominal Pain, Dark red bleeding, Board-like rigid uterus, Fetal distress.",
      "tosCompetency": "High-Risk Obstetric Nursing: Triage and Contraindications in Antepartum Hemorrhage",
      "reference": "POGS Clinical Practice Guidelines on Antepartum Hemorrhage; Williams Obstetrics (26th Ed.)"
    }
  },
  {
    "id": "np2-009",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Newborn Care: Hyperbilirubinemia & Phototherapy",
    "subtopic": "Phototherapy Nursing Safety Protocols",
    "vignette": "A 3-day-old full-term infant is diagnosed with physiologic jaundice with total serum bilirubin of 16.8 mg/dL. The pediatrician orders continuous intensive blue-light phototherapy. The nurse is responsible for setting up the phototherapy unit and providing direct care.",
    "question": "Which nursing interventions are essential to ensure infant safety and therapeutic effectiveness during phototherapy?",
    "options": [
      {
        "id": "A",
        "text": "Apply baby lotion or mineral oil over the infant's skin to prevent photo-induced tanning and drying."
      },
      {
        "id": "B",
        "text": "Cover the infant's eyes with opaque eye patches, keep genitalia covered with diaper, turn infant every 2 hours, and ensure adequate fluid intake."
      },
      {
        "id": "C",
        "text": "Dress the infant in long-sleeved onesies and keep lights at least 1 meter away from the bassinet."
      },
      {
        "id": "D",
        "text": "Withhold breastfeeding for 48 hours to minimize bowel movements."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "During phototherapy: 1) Opaque eye patches protect the delicate retina from photochemical injury, 2) The diaper protects the gonads while maximizing exposed skin surface area, 3) Repositioning every 2 hours ensures uniform light exposure across all body surfaces, 4) Frequent feedings (breast milk or formula) promote hydration and stimulate peristalsis to excrete photo-isomerized unconjugated bilirubin in the feces (preventing enterohepatic recirculation).",
      "distractorBreakdown": {
        "A": "Applying oils or lotions to skin under phototherapy can cause severe cutaneous burns and blistering.",
        "C": "Clothing shields the skin from light, defeating the entire mechanism of phototherapy; maximum skin exposure is required.",
        "D": "Breastfeeding should be ENCOURAGED, not withheld; bilirubin is excreted primarily through frequent bowel movements."
      },
      "clinicalPearl": "Phototherapy Nursing Rules: 1) Protect eyes (patches removed only for feeding/bonding when lights off), 2) Protect gonads (diaper only), 3) NO oils/lotions (prevents burns!), 4) Hydrate and feed frequently (bilirubin exits via stool & urine).",
      "tosCompetency": "Neonatal Nursing Care: Pathophysiology and Nursing Management of Neonatal Jaundice",
      "reference": "American Academy of Pediatrics (AAP) Clinical Practice Guideline: Management of Hyperbilirubinemia in the Newborn"
    }
  },
  {
    "id": "np2-010",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Integrated Management of Childhood Illness (IMCI)",
    "subtopic": "Diarrhea Classification & Zinc Supplementation",
    "vignette": "A 14-month-old child is brought to the RHU due to watery diarrhea for 2 days. Assessment findings: child is irritable and thirsty, drinks eagerly when offered a cup, sunken eyes are noted, and a skin pinch on the abdomen goes back slowly (under 2 seconds).",
    "question": "According to the DOH/WHO IMCI guidelines, how is the child's dehydration classified, and what is the treatment plan?",
    "options": [
      {
        "id": "A",
        "text": "Severe Dehydration (Plan C); start rapid IV Ringer's Lactate immediately."
      },
      {
        "id": "B",
        "text": "Some Dehydration (Plan B); administer Oral Rehydration Salts (ORS) over 4 hours at the clinic, continue breastfeeding, and provide Zinc supplementation for 14 days."
      },
      {
        "id": "C",
        "text": "No Dehydration (Plan A); advise home fluids and discharge without treatment."
      },
      {
        "id": "D",
        "text": "Dysentery; initiate immediate oral Metronidazole and withhold fluids."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Under IMCI rules: Two of the following signs: 1) Irritable/restless, 2) Sunken eyes, 3) Drinks eagerly/thirsty, 4) Skin pinch goes back slowly classify the child as SOME DEHYDRATION (Plan B). Treatment Plan B mandates giving prescribed ORS over a 4-hour period in the clinic, reassessing after 4 hours, and dispensing elemental Zinc supplementation (20 mg/day for 14 days) to accelerate mucosal healing, reduce stool volume, and prevent future diarrheal episodes.",
      "distractorBreakdown": {
        "A": "Severe Dehydration requires lethargy/unconsciousness, inability to drink, and skin pinch going back VERY slowly (>2 seconds).",
        "C": "The child exhibits clear dehydration signs (sunken eyes, thirsty, slow skin pinch); discharging without clinic Plan B rehydration leads to hypovolemic shock.",
        "D": "Dysentery is diagnosed only when visible blood is present in the stool."
      },
      "clinicalPearl": "IMCI Diarrhea Rule: Zinc supplementation (10 mg/day for <6 mos, 20 mg/day for >=6 mos) given for 14 FULL DAYS is mandatory for all pediatric diarrhea cases in the Philippines. Plan A = Home; Plan B = ORS in clinic for 4 hours; Plan C = IV Ringer's Lactate.",
      "tosCompetency": "Integrated Management of Childhood Illness: Diarrhea Assessment, ORS Rehydration, and Zinc Protocol",
      "reference": "DOH/WHO Integrated Management of Childhood Illness (IMCI) Chart Booklet (Philippines Edition)"
    }
  },
  {
    "id": "np2-011",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Pediatric Respiratory Emergencies",
    "subtopic": "Acute Epiglottitis Airway Safety vs Laryngotracheobronchitis",
    "vignette": "A 4-year-old child is carried into the emergency triage by his father. The child is sitting upright, leaning forward with his neck hyperextended in a 'tripod position', mouth open, drooling saliva, with inspiratory stridor, high fever (39.8°C), and marked tachypnea.",
    "question": "What is the single most critical safety precaution the nurse must observe?",
    "options": [
      {
        "id": "A",
        "text": "Insert a tongue depressor to inspect the posterior pharynx for a foreign body or pseudomembrane."
      },
      {
        "id": "B",
        "text": "Never examine the throat with a tongue blade or swab, keep the child calm in the parent's lap, and prepare immediately for emergent endotracheal intubation or tracheostomy."
      },
      {
        "id": "C",
        "text": "Place the child in supine position and obtain an immediate blood culture."
      },
      {
        "id": "D",
        "text": "Administer high-dose oral amoxicillin syrup immediately with a medicine cup."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "The classic clinical tetrad of Epiglottitis is: Dysphonia, Dysphagia, Drooling, and Distressed inspiratory stridor with tripod posturing (caused by Haemophilus influenzae type b). Inspecting the pharynx with a tongue blade, swab, or forcing the child to lie flat can trigger acute laryngospasm, causing immediate, fatal, complete airway obstruction. The nurse must keep the child calm (crying worsens edema) and notify an airway specialist (anesthesiologist/ENT) immediately.",
      "distractorBreakdown": {
        "A": "Inserting any instrument into the pharynx precipitates complete laryngospasm and immediate asphyxiation.",
        "C": "Forcing a child with epiglottitis to lie flat causes the swollen cherry-red epiglottis to occlude the trachea.",
        "D": "Oral medications or fluids are strictly prohibited; the child cannot swallow secretions (drooling), risking aspiration."
      },
      "clinicalPearl": "Epiglottitis Clinical Pearl: Triad of Drooling + Dysphagia + Dysphonia (Tripod position). DO NOT inspect the throat with a tongue blade! Keep the child in parent's arms and prepare for emergent intubation.",
      "tosCompetency": "Pediatric Critical Care: Triage and Airway Safety Management in Pediatric Epiglottitis",
      "reference": "Wong's Essentials of Pediatric Nursing (11th Ed.); Philippine Pediatric Society Guidelines"
    }
  },
  {
    "id": "np2-012",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Pediatric Gastrointestinal Disorders",
    "subtopic": "Hirschsprung's Disease (Congenital Aganglionic Megacolon)",
    "vignette": "A 2-day-old male newborn has not passed meconium since birth. The nurse notes progressive abdominal distension, reluctance to feed, and bilious (green) emesis. Digital rectal examination by the pediatric resident results in an explosive expulsion of gas and liquid stool.",
    "question": "What congenital pathology is indicated by these clinical manifestations?",
    "options": [
      {
        "id": "A",
        "text": "Hirschsprung's Disease (Congenital Aganglionic Megacolon)"
      },
      {
        "id": "B",
        "text": "Hypertrophic Pyloric Stenosis"
      },
      {
        "id": "C",
        "text": "Intussusception"
      },
      {
        "id": "D",
        "text": "Celiac Disease"
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Failure to pass meconium within 24 to 48 hours of life, accompanied by progressive abdominal distension, bilious emesis, and explosive expulsion of flatus/stool following rectal stimulation, is the classic presentation of Hirschsprung's disease. The underlying defect is the absence of parasympathetic ganglion cells (Auerbach's and Meissner's plexuses) in the distal colon, preventing peristalsis and causing functional mechanical obstruction.",
      "distractorBreakdown": {
        "B": "Hypertrophic Pyloric Stenosis presents at 3 to 6 weeks of life with projectile NON-BILIOUS vomiting and a palpable olive-shaped mass in the epigastrium.",
        "C": "Intussusception presents in infants (6-12 months) with intermittent colicky pain, 'currant jelly' stool (blood + mucus), and a sausage-shaped abdominal mass.",
        "D": "Celiac disease is a gluten enteropathy manifesting after introduction of wheat/cereals at 6-9 months."
      },
      "clinicalPearl": "Pediatric GI Signatures: Hirschsprung = Failure to pass meconium in 24-48 hrs, ribbon-like stools. Pyloric Stenosis = Projectile non-bilious vomit, olive-shaped mass. Intussusception = Currant-jelly stools, sausage-shaped mass.",
      "tosCompetency": "Pediatric Congenital Anomalies: Assessment and Postoperative Nursing Care in Neonatal Obstruction",
      "reference": "Nelson Textbook of Pediatrics (21st Ed.); Wong's Essentials of Pediatric Nursing"
    }
  },
  {
    "id": "np2-013",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Obstetric Complications: Hyperemesis Gravidarum",
    "subtopic": "Intravenous Fluid Resuscitation & Thiamine Administration",
    "vignette": "A 22-year-old G1P0 at 10 weeks gestation is admitted with intractable nausea and vomiting lasting 3 weeks. She has lost 10% of her pre-pregnancy weight. Urinalysis reveals 4+ ketones and specific gravity of 1.035. Vital signs: BP 90/60, HR 112 bpm.",
    "question": "When initiating intravenous fluid therapy for this client, what vital nutrient must be administered before or alongside dextrose-containing solutions?",
    "options": [
      {
        "id": "A",
        "text": "Thiamine (Vitamin B1)"
      },
      {
        "id": "B",
        "text": "Vitamin C (Ascorbic Acid)"
      },
      {
        "id": "C",
        "text": "Vitamin D (Cholecalciferol)"
      },
      {
        "id": "D",
        "text": "Iron Dextran"
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Clients with severe prolonged hyperemesis gravidarum develop profound starvation, ketosis, and severe depletion of hepatic glycogen and water-soluble vitamins, particularly Thiamine (Vitamin B1). Infusing intravenous dextrose without prior or concurrent thiamine supplementation rapidly exhausts the remaining thiamine cofactors during carbohydrate metabolism, precipitating Wernicke's Encephalopathy (ataxia, ophthalmoplegia, acute confusion) which can cause irreversible maternal brain damage or death.",
      "distractorBreakdown": {
        "B": "Vitamin C is an antioxidant but its acute deficiency does not trigger acute fatal neurological syndromes.",
        "C": "Vitamin D regulates calcium metabolism and is not acutely depleted in starvation ketoacidosis.",
        "D": "Iron dextran is contraindicated in acute starvation and volume depletion; IV iron carries risk of anaphylaxis and is not urgent."
      },
      "clinicalPearl": "Starvation/Ketoacidosis Safety Rule: In severe Hyperemesis Gravidarum or Alcoholism, ALWAYS give THIAMINE (Vit B1) BEFORE or with IV DEXTROSE to prevent Wernicke's Encephalopathy!",
      "tosCompetency": "High-Risk Pregnancy Nursing: Fluid, Electrolyte, and Micronutrient Management in Hyperemesis Gravidarum",
      "reference": "Philippine Obstetrical and Gynecological Society (POGS); ACOG Practice Bulletin: Nausea and Vomiting of Pregnancy"
    }
  },
  {
    "id": "np3-005",
    "area": "NP III",
    "areaName": "Medical-Surgical Nursing I",
    "topic": "Endocrine Emergencies: Diabetic Ketoacidosis (DKA)",
    "subtopic": "Potassium Repletion Before Insulin Therapy",
    "vignette": "A 24-year-old male with Type 1 Diabetes Mellitus arrives at the emergency department with DKA. Labs show: Blood glucose 520 mg/dL, arterial pH 7.18, HCO3 11 mEq/L, and serum potassium 3.1 mEq/L. The resident writes an order to immediately begin a continuous Regular Insulin IV infusion at 0.1 units/kg/hr.",
    "question": "What is the nurse's priority, evidence-based clinical action?",
    "options": [
      {
        "id": "A",
        "text": "Start the IV insulin infusion immediately as ordered to reverse the life-threatening ketoacidosis."
      },
      {
        "id": "B",
        "text": "Question the insulin order and notify the physician that IV potassium must be administered to bring potassium above 3.3 mEq/L before starting insulin."
      },
      {
        "id": "C",
        "text": "Administer IV regular insulin as a bolus subcutaneous injection instead."
      },
      {
        "id": "D",
        "text": "Infuse 50% Dextrose (D50W) stat to protect against insulin-induced hypoglycemia."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Insulin drives glucose AND potassium from the extracellular fluid into the intracellular space. If insulin is administered when baseline serum potassium is already hypokalemic (<3.3 mEq/L), it will trigger a precipitous, catastrophic drop in intravascular potassium, leading to fatal cardiac arrhythmias, respiratory muscle paralysis, or cardiac arrest. Current ADA guidelines dictate that potassium must be repleted to >=3.3 mEq/L before starting IV insulin.",
      "distractorBreakdown": {
        "A": "Starting insulin with a potassium of 3.1 mEq/L precipitates fatal cardiac dysrhythmias (ventricular fibrillation, asystole).",
        "C": "Subcutaneous insulin is poorly absorbed in DKA due to dehydration and hypoperfusion; continuous IV infusion is required.",
        "D": "Giving D50W to a patient with blood sugar of 520 mg/dL worsens hyperosmolarity and dehydration."
      },
      "clinicalPearl": "DKA Potassium Rule: NEVER start insulin if Potassium is < 3.3 mEq/L! Insulin pushes K+ into cells. Replete K+ first, rehydrate with Normal Saline, THEN start regular insulin IV.",
      "tosCompetency": "Critical Care Nursing: Physiological Monitoring and Electrolyte Safety in Diabetic Emergencies",
      "reference": "American Diabetes Association (ADA) Standards of Medical Care in Diabetes; Brunner & Suddarth's Textbook of Medical-Surgical Nursing"
    }
  },
  {
    "id": "np3-006",
    "area": "NP III",
    "areaName": "Medical-Surgical Nursing I",
    "topic": "Perioperative Complications: Subtotal Thyroidectomy",
    "subtopic": "Accidental Parathyroid Damage & Post-op Hypocalcemia",
    "vignette": "A 38-year-old female is 24 hours post-subtotal thyroidectomy for Graves' disease. During assessment, the patient complains of tingling and numbness around her mouth and in her fingertips. Inflating a blood pressure cuff on her arm induces carpal spasm (flexion of the wrist and fingers).",
    "question": "What clinical condition is the patient experiencing, and what emergency medication must be at the bedside?",
    "options": [
      {
        "id": "A",
        "text": "Hypokalemia; administer oral Potassium Chloride elixir."
      },
      {
        "id": "B",
        "text": "Acute Hypocalcemia (tetany); administer IV Calcium Gluconate slowly."
      },
      {
        "id": "C",
        "text": "Thyroid Storm; administer immediate IV Levothyroxine."
      },
      {
        "id": "D",
        "text": "Laryngeal nerve transection; administer intramuscular Epinephrine."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Trousseau's sign (carpal spasm induced by inflating BP cuff above systolic for 3 minutes) and Chvostek's sign (facial twitching when tapping facial nerve) are definitive physical signs of acute hypocalcemia and latent tetany. In thyroid surgery, this results from accidental trauma, devascularization, or excision of the parathyroid glands. If untreated, hypocalcemia progresses to laryngeal stridor, convulsions, and cardiac arrest. IV Calcium Gluconate must always be kept at bedside for immediate slow infusion.",
      "distractorBreakdown": {
        "A": "Trousseau's and Chvostek's signs are specific for hypocalcemia and hypomagnesemia, not hypokalemia.",
        "C": "Thyroid storm is hyperthyroidism crisis (hyperpyrexia, tachycardia, delirium); Levothyroxine is thyroid hormone and would worsen it.",
        "D": "Laryngeal nerve injury presents with vocal hoarseness, not carpal spasm."
      },
      "clinicalPearl": "Post-Thyroidectomy Bedside Essentials: 1) Tracheostomy set (in case of acute tracheal compression from hematoma), 2) Suction equipment and Oxygen, 3) 10% Calcium Gluconate (for hypocalcemic tetany: positive Chvostek & Trousseau signs).",
      "tosCompetency": "Perioperative Nursing: Postoperative Complications and Emergency Interventions in Neck Surgery",
      "reference": "Brunner & Suddarth's Textbook of Medical-Surgical Nursing (15th Ed.)"
    }
  },
  {
    "id": "np3-007",
    "area": "NP III",
    "areaName": "Medical-Surgical Nursing I",
    "topic": "Gastrointestinal Emergencies: Peptic Ulcer Disease",
    "subtopic": "Acute Perforation & Board-Like Abdominal Rigidity",
    "vignette": "A 50-year-old male with a history of chronic duodenal ulcer suddenly screams in excruciating abdominal pain. Within minutes, he is diaphoresis, lying completely still with knees flexed, tachypneic with shallow breathing. Assessment reveals absent bowel sounds and a rigid, 'board-like' abdomen.",
    "question": "What acute complication has occurred, and what is the nurse's immediate priority?",
    "options": [
      {
        "id": "A",
        "text": "Gastric outlet obstruction; administer oral antacid suspension."
      },
      {
        "id": "B",
        "text": "Acute ulcer perforation with peritonitis; maintain NPO, insert NG tube to low suction, notify surgeon immediately, and prepare for emergency surgery."
      },
      {
        "id": "C",
        "text": "Acute appendicitis; apply a warm heating pad to the abdomen to relax muscles."
      },
      {
        "id": "D",
        "text": "Dumping syndrome; encourage a high-carbohydrate meal."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Ulcer perforation is a lethal surgical emergency where gastric and duodenal secretions spill into the peritoneal cavity, producing sudden severe pain, chemical peritonitis, and reflex involuntary board-like abdominal muscle rigidity. Immediate priority actions: Strict NPO, nasogastric tube insertion for continuous decompression to prevent further spillage, IV fluid resuscitation, IV broad-spectrum antibiotics, and immediate notification of the surgical team for exploratory laparotomy.",
      "distractorBreakdown": {
        "A": "Oral antacids or fluids in a perforated gut leak directly into the peritoneal cavity, compounding peritonitis and septic shock.",
        "C": "Heating pads are strictly contraindicated in acute abdominal pain (increases blood flow and accelerates perforation/rupture).",
        "D": "Dumping syndrome occurs post-gastrectomy after eating, causing diaphoresis and dizziness, not board-like abdominal rigidity."
      },
      "clinicalPearl": "Board-Like Abdomen = Acute Perforation & Peritonitis! #1 Action = Strict NPO, NG tube to suction, alert surgeon stat, IV fluids + antibiotics. NEVER give oral medications or apply heat!",
      "tosCompetency": "Gastrointestinal Critical Care: Emergency Recognition and Interprofessional Management of Acute Abdomen",
      "reference": "Brunner & Suddarth's Textbook of Medical-Surgical Nursing; Schwartz's Principles of Surgery"
    }
  },
  {
    "id": "np3-008",
    "area": "NP III",
    "areaName": "Medical-Surgical Nursing I",
    "topic": "Nutritional Support: Total Parenteral Nutrition (TPN)",
    "subtopic": "Prevention of Rebound Hypoglycemia",
    "vignette": "A postoperative client with a high-output enterocutaneous fistula is receiving continuous TPN via a central venous catheter at 100 mL/hr. The current TPN bag is empty, and the pharmacy informs the nurse that the next custom bag will take at least 1 hour to arrive on the unit.",
    "question": "What is the nurse's mandatory immediate action to protect patient safety?",
    "options": [
      {
        "id": "A",
        "text": "Flush the central line with heparin and leave it clamped until the new TPN bag arrives."
      },
      {
        "id": "B",
        "text": "Infuse 10% Dextrose in Water (D10W) at the same rate of 100 mL/hr until the new TPN bag is available."
      },
      {
        "id": "C",
        "text": "Hang Normal Saline (0.9% NaCl) at a rapid wide-open rate."
      },
      {
        "id": "D",
        "text": "Administer a subcutaneous injection of Regular Insulin to compensate for the delay."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "TPN solutions contain high concentrations of dextrose (typically 20% to 50%), causing the patient's pancreas to continuously secrete large amounts of endogenous insulin. If TPN is abruptly discontinued or runs out, the circulating insulin levels remain high while glucose infusion abruptly stops, triggering severe, life-threatening rebound hypoglycemia. Hanging 10% Dextrose in Water (D10W) at the same infusion rate maintains serum glucose until the new TPN solution is ready.",
      "distractorBreakdown": {
        "A": "Clamping the line stops glucose intake abruptly, causing rapid hypoglycemic coma within 30-60 minutes.",
        "C": "Normal Saline contains 0% dextrose and will not prevent profound rebound hypoglycemia.",
        "D": "Administering insulin when glucose supply is stopped will precipitate fatal insulin shock and profound hypoglycemia."
      },
      "clinicalPearl": "TPN Golden Rule: If TPN bag runs out unexpectedly, hang D10W (10% Dextrose in Water) at the SAME rate! Never stop TPN abruptly to prevent rebound hypoglycemia. TPN tubing & filter changed every 24 hours.",
      "tosCompetency": "Parenteral Nutrition Safety: Prevention of Metabolic Emergencies and Central Line Protocols",
      "reference": "ASPEN Guidelines for the Provision of Parenteral Nutrition; Brunner & Suddarth's Textbook of Medical-Surgical Nursing"
    }
  },
  {
    "id": "np3-009",
    "area": "NP III",
    "areaName": "Medical-Surgical Nursing I",
    "topic": "Gastrointestinal Disorders: Acute Appendicitis",
    "subtopic": "Sudden Cessation of Pain as a Sign of Rupture",
    "vignette": "An 18-year-old college student is admitted with right lower quadrant pain, anorexia, low-grade fever, and rebound tenderness at McBurney's point. While awaiting an operating room slot for appendectomy, the patient smiles and tells the nurse: 'Nurse, I feel fantastic! The terrible pain suddenly went completely away!'",
    "question": "How should the nurse interpret this sudden relief of pain?",
    "options": [
      {
        "id": "A",
        "text": "The appendix has resolved spontaneously, and the client may be safely discharged home."
      },
      {
        "id": "B",
        "text": "The appendix has ruptured (perforated), releasing intraluminal pressure, which will lead to diffuse peritonitis and septic shock; notify the surgeon immediately."
      },
      {
        "id": "C",
        "text": "The pain relief indicates a full therapeutic response to the IV hydration."
      },
      {
        "id": "D",
        "text": "The patient is experiencing pain accommodation and should be encouraged to ambulate in the hallway."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "In acute appendicitis, progressive intraluminal distension and ischemia cause severe pain. When the appendix ruptures (perforates), the acute intraluminal pressure is immediately relieved, causing the patient to experience sudden, deceptive relief of pain. However, infected contents spill into the sterile peritoneal cavity, and within hours, diffuse generalized peritonitis, abdominal rigidity, high fever, and septic shock will follow. The nurse must immediately notify the surgeon and maintain NPO.",
      "distractorBreakdown": {
        "A": "Appendicitis does not resolve spontaneously; sudden relief indicates perforation.",
        "C": "IV hydration does not eliminate appendiceal inflammation.",
        "D": "Encouraging ambulation is dangerous; ruptured appendicitis requires urgent surgical intervention."
      },
      "clinicalPearl": "Appendicitis Warning Sign: Sudden cessation of acute appendiceal pain is NOT recovery—it means the appendix has RUPTURED! Rush client to surgery before peritonitis develops. NEVER give laxatives or apply heat to the abdomen!",
      "tosCompetency": "Surgical Nursing: Clinical Assessment and Critical Path Indicators in Appendicitis",
      "reference": "Brunner & Suddarth's Textbook of Medical-Surgical Nursing; Current Medical Diagnosis & Treatment"
    }
  },
  {
    "id": "np3-010",
    "area": "NP III",
    "areaName": "Medical-Surgical Nursing I",
    "topic": "Hepatic Disorders: Cirrhosis & Portal Hypertension",
    "subtopic": "Lactulose Mechanism of Action & Therapeutic Goal",
    "vignette": "A 58-year-old client with end-stage alcoholic cirrhosis is admitted with hepatic encephalopathy. Assessment reveals disorientation to time and place, lethargy, and asterixis (flapping tremors of outstretched hands). The physician prescribes Lactulose 30 mL orally three times daily.",
    "question": "What is the primary therapeutic mechanism of Lactulose, and how does the nurse evaluate its effectiveness?",
    "options": [
      {
        "id": "A",
        "text": "It binds dietary cholesterol; evaluate by checking total serum lipid levels."
      },
      {
        "id": "B",
        "text": "It acidifies the bowel, trapping ammonia as ammonium to be excreted in feces; evaluate by observing 2 to 3 soft stools per day and improved mental status."
      },
      {
        "id": "C",
        "text": "It stimulates liver regeneration; evaluate by checking alanine aminotransferase (ALT)."
      },
      {
        "id": "D",
        "text": "It induces profuse watery diarrhea (>10 watery stools/day) to rapid fluid loss."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Hepatic encephalopathy is caused by elevated blood ammonia (NH3) crossing the blood-brain barrier. Lactulose is degraded by colonic bacteria into lactic and acetic acids, lowering colon pH. The acidic environment converts diffusible ammonia (NH3) into non-absorbable ammonium ions (NH4+), which are trapped in the gut and excreted in the stool. Therapeutic dosing is titrated to produce 2 to 3 soft bowel movements per day without causing dehydration or severe electrolyte imbalance.",
      "distractorBreakdown": {
        "A": "Lactulose is a synthetic disaccharide targeting ammonia excretion, not cholesterol binding.",
        "C": "Lactulose does not regenerate damaged cirrhotic liver parenchyma.",
        "D": "Excessive watery diarrhea indicates overdosage and leads to severe dehydration, hypokalemia, and hypernatremia, which actually worsen encephalopathy."
      },
      "clinicalPearl": "Hepatic Encephalopathy Hallmark: Asterixis (flapping hand tremor) due to elevated AMMONIA. Drug of choice: LACTULOSE (therapeutic goal = 2 to 3 soft stools/day & improved mental alertness).",
      "tosCompetency": "Pharmacological Nursing in Hepatic Failure: Ammonia Clearance and Neurocognitive Monitoring",
      "reference": "Brunner & Suddarth's Textbook of Medical-Surgical Nursing; EASL Clinical Practice Guidelines on Hepatic Encephalopathy"
    }
  },
  {
    "id": "np3-011",
    "area": "NP III",
    "areaName": "Medical-Surgical Nursing I",
    "topic": "Post-Anesthesia Care Unit (PACU) Nursing",
    "subtopic": "Post-Operative Airway Obstruction & Positioning",
    "vignette": "A 45-year-old client arrives in the Post-Anesthesia Care Unit (PACU) following an open cholecystectomy under general endotracheal anesthesia. The client is unconscious. Within 5 minutes, the nurse notes loud snoring respirations and falling SpO2 (from 98% to 91%).",
    "question": "What is the most likely cause of obstruction, and what is the nurse's immediate first action?",
    "options": [
      {
        "id": "A",
        "text": "Laryngospasm; immediately administer IV succinylcholine."
      },
      {
        "id": "B",
        "text": "Tongue occlusion of the pharynx due to residual muscle relaxation; perform a jaw-thrust or head-tilt chin-lift maneuver and reposition client on their side (lateral recovery position)."
      },
      {
        "id": "C",
        "text": "Aspiration of gastric contents; perform deep endotracheal suctioning immediately."
      },
      {
        "id": "D",
        "text": "Pulmonary embolism; prepare for stat chest CT angiography."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "In the PACU, the single most common cause of postoperative upper airway obstruction in an unconscious client is the tongue falling backward against the posterior pharynx due to residual anesthetic muscle relaxation. Loud snoring respirations ('sonorous wheezing') are the classic sign. Immediate non-invasive action: Perform a jaw-thrust or head-tilt chin-lift maneuver to mechanically pull the tongue forward, open the airway, and place the unconscious client in the lateral recovery position (unless contraindicated) to prevent aspiration.",
      "distractorBreakdown": {
        "A": "Laryngospasm produces high-pitched stridor or total silence, not low-pitched snoring respirations.",
        "C": "Suctioning without opening the anatomical airway does not relieve hypopharyngeal tongue obstruction.",
        "D": "Pulmonary embolism presents with acute pleuritic chest pain, tachypnea, and clear breath sounds, not snoring respirations."
      },
      "clinicalPearl": "PACU Airway #1 Priority: Snoring respirations in an unconscious post-op client = TONGUE OBSTRUCTING AIRWAY! Action = Jaw-thrust / Head-tilt chin-lift + Side-lying recovery position + Oxygen.",
      "tosCompetency": "Post-Anesthesia Care: Immediate Assessment and Airway Rescue in the Unconscious Postoperative Client",
      "reference": "American Society of PeriAnesthesia Nurses (ASPAN) Standards; Brunner & Suddarth's Textbook of Medical-Surgical Nursing"
    }
  },
  {
    "id": "np3-012",
    "area": "NP III",
    "areaName": "Medical-Surgical Nursing I",
    "topic": "Endocrine Emergencies: Addisonian (Adrenal) Crisis",
    "subtopic": "Acute Adrenal Insufficiency & Corticosteroid Replacement",
    "vignette": "A 34-year-old client with Addison's disease who has been taking daily oral Hydrocortisone abruptly stops taking her medication because she 'felt completely fine.' Three days later, she is rushed to the emergency department in acute adrenal crisis with severe vomiting, abdominal pain, BP 76/44, HR 128, serum Sodium 122 mEq/L, Potassium 6.4 mEq/L, and Glucose 54 mg/dL.",
    "question": "What is the nurse's immediate priority emergency medical intervention?",
    "options": [
      {
        "id": "A",
        "text": "Administer high-dose oral fludrocortisone with a glass of orange juice."
      },
      {
        "id": "B",
        "text": "Administer rapid IV bolus of Hydrocortisone sodium succinate (Solu-Cortef) and vigorous IV infusion of 0.9% Normal Saline with 5% Dextrose."
      },
      {
        "id": "C",
        "text": "Administer Spironolactone and withhold IV fluids."
      },
      {
        "id": "D",
        "text": "Prepare for urgent hemodialysis to remove excess potassium."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Addisonian crisis is a life-threatening endocrine emergency resulting from acute cortisol and aldosterone deficiency. Hallmark labs: Hyponatremia, Hyperkalemia, Hypoglycemia, and severe refractory Hypovolemic Shock. Treatment requires immediate IV administration of high-dose glucocorticoids (Hydrocortisone 100 mg IV bolus) to restore vascular tone and vascular responsiveness to catecholamines, along with rapid IV volume replacement using 0.9% Normal Saline with Dextrose to correct shock, hyponatremia, and hypoglycemia.",
      "distractorBreakdown": {
        "A": "Oral medications cannot be given to a hypotensive, vomiting patient; orange juice contains potassium, which would worsen life-threatening hyperkalemia (6.4 mEq/L).",
        "C": "Spironolactone is a potassium-sparing diuretic that would cause fatal hyperkalemic cardiac arrest.",
        "D": "Hemodialysis is unnecessary; hydrocortisone and IV saline rapidly reverse the crisis."
      },
      "clinicalPearl": "Addison's vs Cushing's Mnemonic: ADDISON'S = Everything is LOW (Low BP, Low Na+, Low Glucose), except Potassium (K+) which is HIGH! Emergency treatment = IV Hydrocortisone (Solu-Cortef) + Normal Saline.",
      "tosCompetency": "Endocrine Critical Care: Emergency Management of Acute Adrenal Insufficiency and Shock",
      "reference": "Brunner & Suddarth's Textbook of Medical-Surgical Nursing; Endocrine Society Clinical Practice Guidelines on Primary Adrenal Insufficiency"
    }
  },
  {
    "id": "np4-005",
    "area": "NP IV",
    "areaName": "Medical-Surgical Nursing II",
    "topic": "Cardiovascular Emergencies: Acute Coronary Syndrome",
    "subtopic": "Nitroglycerin Contraindication with PDE-5 Inhibitors",
    "vignette": "A 56-year-old male arrives at the emergency department with severe, crushing substernal chest pain radiating to his left shoulder and jaw (pain rated 9/10). The triage nurse prepares to administer sublingual Nitroglycerin as per standing chest pain protocol. During the nursing history, the patient mentions he took Sildenafil (Viagra) 12 hours ago for erectile dysfunction.",
    "question": "What is the nurse's priority action regarding Nitroglycerin administration?",
    "options": [
      {
        "id": "A",
        "text": "Administer the sublingual nitroglycerin immediately, as cardiac ischemia takes precedence over sexual health drugs."
      },
      {
        "id": "B",
        "text": "Withhold Nitroglycerin immediately, inform the physician, and prepare alternative anti-ischemic and analgesic therapy (e.g., Morphine)."
      },
      {
        "id": "C",
        "text": "Double the dose of nitroglycerin to overcome the effect of sildenafil."
      },
      {
        "id": "D",
        "text": "Instruct the patient to drink cold water to flush out the sildenafil before giving nitroglycerin."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Co-administration of Nitrates (Nitroglycerin, Isosorbide) and Phosphodiesterase-5 (PDE-5) inhibitors (Sildenafil, Tadalafil, Vardenafil) within 24 to 48 hours is strictly contraindicated. Both classes increase cyclic GMP-mediated vasodilation; their combination precipitates profound, irreversible, catastrophic systemic hypotension, coronary hypoperfusion, and fatal myocardial infarction. The nurse must withhold nitrates and alert the physician.",
      "distractorBreakdown": {
        "A": "Administering nitroglycerin after sildenafil causes profound refractory shock that does not respond to standard vasopressors.",
        "C": "Doubling the nitroglycerin dose accelerates lethal cardiovascular collapse.",
        "D": "Oral fluids will not reverse systemic phosphodiesterase inhibition; sildenafil has a biological half-life requiring strict 24-hr avoidance."
      },
      "clinicalPearl": "Nitrate Safety Warning: NEVER give Nitroglycerin if client took a PDE-5 inhibitor (Sildenafil/Viagra within 24 hrs, Tadalafil/Cialis within 48 hrs)! Causes fatal, profound hypotension. Ask every chest pain client before giving NTG!",
      "tosCompetency": "Cardiovascular Critical Care: Pharmacological Safety and Contraindication Screening in Acute Myocardial Infarction",
      "reference": "AHA/ACC Guidelines for the Management of Patients With Acute Coronary Syndromes"
    }
  },
  {
    "id": "np4-006",
    "area": "NP IV",
    "areaName": "Medical-Surgical Nursing II",
    "topic": "Cardiovascular & Respiratory Emergencies: Acute Pulmonary Edema",
    "subtopic": "High Fowler's Positioning & Preload Reduction",
    "vignette": "A 68-year-old female with congestive heart failure is admitted to the telemetry unit. At 02:00, she wakes up in acute panic, gasping for air, sweating profusely, coughing up copious pink, frothy sputum. Auscultation reveals diffuse bilateral bubbling crackles and wheezing throughout both lung fields. Vital signs: BP 184/104, HR 122, RR 36, SpO2 81%.",
    "question": "What immediate independent nursing action should the nurse take before administering IV medications?",
    "options": [
      {
        "id": "A",
        "text": "Place the client in high Fowler's position with legs dangling over the edge of the bed."
      },
      {
        "id": "B",
        "text": "Place the client in Trendelenburg position to increase cerebral blood flow."
      },
      {
        "id": "C",
        "text": "Lay the client flat in supine position and perform chest physiotherapy."
      },
      {
        "id": "D",
        "text": "Encourage the client to take deep breaths while drinking warm fluids."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Pink, frothy sputum with diffuse bilateral crackles and profound respiratory distress is the hallmark presentation of acute cardiogenic pulmonary edema (flash pulmonary edema). The priority immediate independent nursing action is placing the client in high Fowler's position (head of bed 90 degrees) with legs dependent/dangling. This uses gravity to trap venous blood in the lower extremities, drastically reducing venous return (preload) to the failing left ventricle, while facilitating diaphragmatic descent and maximizing lung expansion.",
      "distractorBreakdown": {
        "B": "Trendelenburg position floods the failing heart with venous blood, drowning the lungs in pulmonary capillary transudate.",
        "C": "Supine positioning worsens orthopnea and accelerates asphyxiation.",
        "D": "Giving fluids to an acutely fluid-overloaded, drowning patient is clinically hazardous and induces aspiration."
      },
      "clinicalPearl": "Pulmonary Edema Hallmark: Pink, frothy sputum + severe dyspnea + crackles. Priority #1 = High Fowler's position with legs dangling (pools venous blood in legs, reduces preload on failing heart). Medical management: 'MAD DOG' (Morphine, Aminophylline, Digoxin, Diuretics/Lasix, Oxygen, Gas/ABG).",
      "tosCompetency": "Advanced Medical-Surgical Nursing: Immediate Postural and Oxygenation Interventions in Cardiogenic Shock and Pulmonary Edema",
      "reference": "Brunner & Suddarth's Textbook of Medical-Surgical Nursing; ACC/AHA Heart Failure Guidelines"
    }
  },
  {
    "id": "np4-007",
    "area": "NP IV",
    "areaName": "Medical-Surgical Nursing II",
    "topic": "Neurological Emergencies: Acute Ischemic Stroke",
    "subtopic": "Thrombolytic Therapy (tPA) Window & Blood Pressure Parameters",
    "vignette": "A 64-year-old male is brought to the emergency department with sudden-onset right facial droop, slurred speech, and right hemiplegia that started 90 minutes ago. Emergency non-contrast cranial CT scan confirms NO intracranial hemorrhage. The neurology team considers IV Alteplase (tissue plasminogen activator - tPA). The nurse takes vital signs: BP 205/115 mmHg.",
    "question": "What is the critical blood pressure threshold before IV tPA can be safely administered?",
    "options": [
      {
        "id": "A",
        "text": "Blood pressure does not matter; tPA must be given immediately regardless of BP."
      },
      {
        "id": "B",
        "text": "Blood pressure must be actively lowered to <185/110 mmHg with IV antihypertensives (e.g., Nicardipine or Labetalol) before starting tPA to prevent fatal hemorrhagic transformation."
      },
      {
        "id": "C",
        "text": "Blood pressure must be lowered below 90/60 mmHg to prevent clot propagation."
      },
      {
        "id": "D",
        "text": "The patient is beyond the golden time window for tPA and cannot receive it."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "The golden window for IV Alteplase (tPA) in acute ischemic stroke is within 3 to 4.5 hours of symptom onset. However, blood pressure >=185 mmHg systolic or >=110 mmHg diastolic is an absolute contraindication to tPA because reperfusing ischemic brain tissue under extreme hydrostatic pressure causes catastrophic hemorrhagic transformation and fatal intracerebral hemorrhage. Antihypertensives (IV Labetalol or Nicardipine) must be titrated to lower BP below 185/110 mmHg prior to tPA infusion.",
      "distractorBreakdown": {
        "A": "Administering tPA with BP >185/110 mmHg carries an unacceptable rate of fatal massive brain hemorrhage.",
        "C": "Lowering BP <90/60 mmHg causes cerebral hypoperfusion, transforming the ischemic penumbra into irreversible dead infarcted brain tissue.",
        "D": "Symptom onset was 90 minutes ago, which is well within the 3 to 4.5-hour golden therapeutic window."
      },
      "clinicalPearl": "Stroke tPA Rules: Time window = 3 to 4.5 hours from 'last known normal'. Blood pressure MUST be < 185/110 mmHg before giving tPA (and kept < 180/105 during & after). CT scan first to RULE OUT HEMORRHAGE!",
      "tosCompetency": "Neurovascular Nursing: Thrombolysis Eligibility, Blood Pressure Control, and Hemorrhagic Risk Management",
      "reference": "AHA/ASA Guidelines for the Early Management of Patients With Acute Ischemic Stroke"
    }
  },
  {
    "id": "np4-008",
    "area": "NP IV",
    "areaName": "Medical-Surgical Nursing II",
    "topic": "Renal Nursing: Chronic Kidney Disease & Hemodialysis",
    "subtopic": "Arteriovenous (AV) Fistula Assessment & Protection",
    "vignette": "A client with stage 5 chronic kidney disease has a newly matured left radiocephalic arteriovenous (AV) fistula in her left forearm for maintenance hemodialysis. The nurse is conducting the shift physical assessment and preparing the care plan.",
    "question": "Which nursing interventions are mandatory for assessing patency and safeguarding the AV fistula?",
    "options": [
      {
        "id": "A",
        "text": "Measure blood pressure and perform routine blood sampling from the left arm to assess graft perfusion."
      },
      {
        "id": "B",
        "text": "Palpate for a thrill (vibration) and auscultate for a bruit (whooshing sound) over the fistula site every shift; post a strict 'NO BP / NO VENIPUNCTURE' sign above the bed for the left arm."
      },
      {
        "id": "C",
        "text": "Instruct the patient to carry heavy shopping bags with the left arm to strengthen muscle development around the fistula."
      },
      {
        "id": "D",
        "text": "Apply an elastic compression bandage tightly around the left forearm to reduce swelling."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "An AV fistula is the surgical anastomosis of an artery to a vein. Patency is confirmed by: 1) Palpating a purring vibration ('thrill'), and 2) Auscultating a continuous whooshing sound ('bruit'). Absence of thrill or bruit signals thrombosis/occlusion and is an emergency. The fistula arm must be strictly protected: NO blood pressure cuffs, NO venipunctures, NO tight clothing, and NO carrying heavy objects, as external pressure causes thrombosis and permanently destroys the vascular access.",
      "distractorBreakdown": {
        "A": "Taking BP or drawing blood from the fistula arm causes vessel thrombosis, hematoma, infection, and permanent loss of life-saving vascular access.",
        "C": "Carrying heavy loads or sleeping on the fistula arm compresses the lumen and triggers thrombosis.",
        "D": "Tight compression bandages constrict fistula blood flow and cause immediate clot formation."
      },
      "clinicalPearl": "AV Fistula Golden Rule: Palpate the THRILL, Auscultate the BRUIT! Strict 'NO BP, NO IV, NO VENIPUNCTURE' on the fistula extremity! If thrill or bruit is absent: Notify vascular surgeon immediately!",
      "tosCompetency": "Renal Care: Vascular Access Maintenance, Assessment of Patency, and Complication Prevention",
      "reference": "KDOQI Clinical Practice Guideline for Vascular Access; Brunner & Suddarth's Textbook of Medical-Surgical Nursing"
    }
  },
  {
    "id": "np4-009",
    "area": "NP IV",
    "areaName": "Medical-Surgical Nursing II",
    "topic": "Respiratory Nursing: Chest Tube Thoracostomy",
    "subtopic": "Troubleshooting Water Seal Chamber Bubbling",
    "vignette": "A client who sustained traumatic hemopneumothorax in a motor vehicle accident has a chest tube connected to a three-chamber closed drainage system. During rounds, the nurse observes continuous, vigorous bubbling in the water seal chamber. The nurse notes the water seal chamber normally should show gentle tidaling with respirations.",
    "question": "What does continuous bubbling in the water seal chamber indicate, and how should the nurse troubleshoot?",
    "options": [
      {
        "id": "A",
        "text": "It is normal and indicates the pneumothorax has completely resolved."
      },
      {
        "id": "B",
        "text": "It indicates an air leak in the system or pleural space; systematically check all tubing connections for loose fittings, check insertion site dressing, and inspect the system."
      },
      {
        "id": "C",
        "text": "The suction control chamber is malfunctioning; disconnect the chest tube and leave open to room air."
      },
      {
        "id": "D",
        "text": "The chest tube has migrated into the heart; prepare for emergent thoracotomy."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "In a closed chest drainage system, the water seal chamber functions as a one-way valve allowing air to escape while preventing atmospheric air from re-entering the pleural cavity. Normal function shows TIDALING (fluctuation with breathing). CONTINUOUS bubbling in the water seal chamber indicates an active AIR LEAK, which can be in the client's lung (bronchopleural fistula) or along the drainage tubing/connections. The nurse must systematically inspect connections, tubing, and the insertion site.",
      "distractorBreakdown": {
        "A": "Resolution of a pneumothorax causes bubbling to CEASE completely, not bubble continuously.",
        "C": "Disconnecting the chest tube exposes the negative intrapleural space to atmospheric air, precipitating immediate tension pneumothorax and lung collapse.",
        "D": "Bubbling in the water seal chamber does not indicate cardiac migration."
      },
      "clinicalPearl": "Chest Tube Water Seal Rules: Tidaling = Normal (moves up with inspiration, down with expiration). Intermittent bubbling = Air escaping from pneumothorax (normal during cough/expiration). CONTINUOUS bubbling = AIR LEAK in system! If tube disconnects from unit: Submerge end in 2 cm of sterile water!",
      "tosCompetency": "Thoracic Nursing: Closed Chest Tube Drainage Maintenance, Safety Precautions, and System Troubleshooting",
      "reference": "Brunner & Suddarth's Textbook of Medical-Surgical Nursing; Critical Care Nursing Clinics"
    }
  },
  {
    "id": "np4-010",
    "area": "NP IV",
    "areaName": "Medical-Surgical Nursing II",
    "topic": "Chronic Respiratory Disorders: COPD",
    "subtopic": "Hypoxic Drive & Controlled Oxygen Administration",
    "vignette": "A 70-year-old male with end-stage chronic bronchitis and emphysema (COPD) is admitted with an acute exacerbation. Arterial blood gas on room air shows: pH 7.34, PaCO2 58 mmHg, PaO2 54 mmHg, HCO3 32 mEq/L. The patient is mildly dyspneic with baseline SpO2 88%. A newly hired graduate nurse suggests placing the patient on a 100% Non-Rebreather mask at 15 L/min.",
    "question": "Why must high-flow, high-concentration oxygen be avoided in clients with chronic CO2 retention?",
    "options": [
      {
        "id": "A",
        "text": "High-flow oxygen will cause acute respiratory alkalosis and hyperventilation."
      },
      {
        "id": "B",
        "text": "Clients with chronic hypercapnia lose sensitivity to CO2 and rely on hypoxemia ('hypoxic drive') to stimulate respiration; giving excessive oxygen blunts this drive, inducing hypoventilation, CO2 narcosis, and respiratory arrest."
      },
      {
        "id": "C",
        "text": "Oxygen causes immediate coronary vasospasm in elderly COPD patients."
      },
      {
        "id": "D",
        "text": "COPD patients cannot absorb oxygen through their alveolar membranes."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "In healthy individuals, the primary chemical drive to breathe is elevated arterial PaCO2 acting on central chemoreceptors. In chronic COPD, prolonged hypercapnia leads to renal retention of bicarbonate (compensated respiratory acidosis), desensitizing central chemoreceptors. The client's respiratory center becomes reliant on peripheral chemoreceptors (carotid and aortic bodies) stimulated by low arterial PaO2 ('hypoxic drive'). High-flow oxygen eliminates hypoxemia, obliterating the respiratory drive and leading to progressive CO2 retention, somnolence, coma, and respiratory arrest. Oxygen should be titrated carefully (target SpO2 88-92% via Venturi mask or 1-2 L/min nasal cannula).",
      "distractorBreakdown": {
        "A": "Blunting the respiratory drive causes hypoventilation and worsening respiratory ACIDOSIS, not alkalosis.",
        "C": "Oxygen does not cause coronary vasospasm; the danger is respiratory suppression.",
        "D": "Oxygen is absorbed; the danger is the elimination of the respiratory stimulus."
      },
      "clinicalPearl": "COPD Oxygen Titration: In chronic hypercapnic COPD, target SpO2 is 88% to 92%! Never blast high-flow O2 without clinical indication—it knocks out the 'hypoxic drive', leading to CO2 narcosis and respiratory arrest. Use low-flow nasal cannula (1-2 L/min) or a precise Venturi mask.",
      "tosCompetency": "Respiratory Pathophysiology: Chemoreceptor Regulation, Hypoxic Drive, and Oxygen Titration in COPD",
      "reference": "GOLD Report: Global Strategy for the Diagnosis, Management, and Prevention of COPD; Brunner & Suddarth"
    }
  },
  {
    "id": "np4-011",
    "area": "NP IV",
    "areaName": "Medical-Surgical Nursing II",
    "topic": "Neurological Critical Care: Increased Intracranial Pressure (ICP)",
    "subtopic": "Cushing's Triad & Brain Herniation Prevention",
    "vignette": "A 26-year-old motorcyclist with severe traumatic brain injury is monitored in the ICU. The nurse notes progressive deterioration: GCS drops from 11 to 7, left pupil becomes sluggish and dilated, and vital signs shift over 30 minutes: BP rises from 130/78 to 184/58 (widened pulse pressure), Heart Rate drops from 80 to 46 bpm (bradycardia), and breathing becomes irregular and shallow.",
    "question": "What neurological crisis is indicated by these vital sign changes (Cushing's Triad), and what is the nurse's priority action?",
    "options": [
      {
        "id": "A",
        "text": "Neurogenic shock; administer rapid IV fluid bolus and place in Trendelenburg position."
      },
      {
        "id": "B",
        "text": "Impending brain herniation due to decompensated Increased ICP; maintain head midline, elevate head of bed 30 degrees, hyperventilate temporarily if ordered, notify neurosurgeon stat, and administer Osmotic Diuretic (Mannitol 20%)."
      },
      {
        "id": "C",
        "text": "Autonomic dysreflexia; place client in sitting position and check for full bladder."
      },
      {
        "id": "D",
        "text": "Septic shock; obtain blood cultures and administer broad-spectrum IV antibiotics."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Cushing's Triad consists of: 1) Systolic hypertension with widening pulse pressure, 2) Bradycardia, and 3) Irregular respirations (Cheyne-Stokes). It represents a late, ominous sign of brainstem compression and impending tentorial herniation. Immediate nursing interventions: Maintain head in neutral midline position (prevents jugular venous compression), elevate head of bed 30 degrees (facilitates venous drainage), avoid hip flexion or endotracheal coughing/suctioning, notify neurosurgeon immediately, and administer IV Mannitol 20% (draws edema fluid from brain parenchyma into vascular compartment).",
      "distractorBreakdown": {
        "A": "Trendelenburg position increases intracranial venous congestion and drastically accelerates fatal brain herniation.",
        "C": "Autonomic dysreflexia occurs in spinal cord injuries at or above T6, not in traumatic brain injury with Cushing's triad.",
        "D": "Septic shock presents with severe hypotension and tachycardia, the exact opposite of Cushing's triad."
      },
      "clinicalPearl": "Cushing's Triad vs Shock: CUSHING'S (High ICP) = Systolic BP UP (Wide pulse pressure), Heart rate DOWN (bradycardia), Respirations DOWN/Irregular. SHOCK = BP DOWN, Heart rate UP, Respirations UP. Cushing's Triad means impending brainstem herniation!",
      "tosCompetency": "Neuro-Trauma Nursing: Intracranial Dynamics, Herniation Syndrome, and Hyperosmolar Therapy",
      "reference": "Brunner & Suddarth's Textbook of Medical-Surgical Nursing; Brain Trauma Foundation Guidelines"
    }
  },
  {
    "id": "np4-012",
    "area": "NP IV",
    "areaName": "Medical-Surgical Nursing II",
    "topic": "Oncology & Hematology: Acute Myeloid Leukemia (AML)",
    "subtopic": "Severe Neutropenia & Protective Isolation Precautions",
    "vignette": "A 48-year-old client undergoing induction chemotherapy for acute leukemia has a complete blood count report showing: WBC 900/mm3, Absolute Neutrophil Count (ANC) 320/mm3, Platelets 45,000/mm3, Hemoglobin 8.8 g/dL.",
    "question": "Which infection control measures are mandatory for this client under Neutropenic Precautions?",
    "options": [
      {
        "id": "A",
        "text": "Encourage family to bring fresh flower bouquets and fresh raw fruits (such as strawberries and apples) to boost spirits and vitamin intake."
      },
      {
        "id": "B",
        "text": "Assign to a private room, enforce strict hand hygiene for all entering, eliminate fresh flowers and potted plants, prohibit raw fruits and unpeeled vegetables, and avoid rectal temperatures or suppositories."
      },
      {
        "id": "C",
        "text": "Place the client in a negative-pressure isolation room and wear an N95 respirator."
      },
      {
        "id": "D",
        "text": "Cohort the client in a multi-bed ward next to a patient with bacterial pneumonia."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "An Absolute Neutrophil Count (ANC) < 500/mm3 represents severe neutropenia, where the client cannot mount a normal inflammatory response and is vulnerable to opportunistic, life-threatening bacteremia and fungal infections. Mandatory interventions: 1) Strict hand hygiene (the #1 preventive measure), 2) Private room (positive pressure), 3) No fresh flowers, plants, or standing water (harbor Pseudomonas aeruginosa and Aspergillus), 4) Cooked-food diet only (no raw fruits, vegetables, or unpasteurized dairy), 5) No rectal temperatures, enemas, or suppositories (prevents mucosal tears and bacteremia).",
      "distractorBreakdown": {
        "A": "Fresh flowers, potted plants, and raw fruits/vegetables harbor lethal soil microbes (Pseudomonas, fungi) that cause fatal neutropenic typhlitis and sepsis.",
        "C": "Negative pressure rooms are for airborne infections (TB, measles, chickenpox); neutropenic clients need positive pressure to keep corridor air out.",
        "D": "Placing a severely neutropenic client near an infected patient is gross negligence."
      },
      "clinicalPearl": "Neutropenic Precautions (ANC < 500): 1) Strict handwashing, 2) Private room, 3) NO fresh flowers, soil, or potted plants, 4) NO raw fruits or vegetables (cooked food only), 5) NO rectal temps, enemas, or catheters. In neutropenia, a fever of 38.0°C (100.4°F) is a medical emergency!",
      "tosCompetency": "Oncology Nursing: Neutropenic Sepsis Prevention, Dietary Modification, and Protective Isolation",
      "reference": "Infectious Diseases Society of America (IDSA) Guidelines for the Use of Antimicrobial Agents in Neutropenic Patients"
    }
  },
  {
    "id": "np5-005",
    "area": "NP V",
    "areaName": "Psychiatric & Mental Health",
    "topic": "Schizophrenia Spectrum Disorders",
    "subtopic": "Command Hallucinations & Assessment of Lethality",
    "vignette": "A 23-year-old male with schizophrenia is admitted to the acute psychiatric unit. During shift handover, the nurse observes the patient cowering behind a chair in his room, looking at the ceiling, visibly trembling. When approached gently, the patient whispers: 'The Demon King is screaming inside my head right now, telling me to jump off the third-floor balcony to save the world!'",
    "question": "What is the nurse's most therapeutic and safety-oriented immediate response?",
    "options": [
      {
        "id": "A",
        "text": "'You know that the Demon King does not exist and it is just your imagination.'"
      },
      {
        "id": "B",
        "text": "'I hear the voices too, and we must pray together so the demon leaves the room.'"
      },
      {
        "id": "C",
        "text": "'I believe that you hear that voice, but I do not hear it. What else is the voice telling you to do right now?'"
      },
      {
        "id": "D",
        "text": "'If you keep talking about demons, I will have to place you in leather restraints immediately.'"
      }
    ],
    "correctAnswer": "C",
    "rationale": {
      "whyCorrect": "Command auditory hallucinations represent a high-risk psychiatric emergency. Therapeutic principles: 1) Validate the patient's subjective reality without reinforcing or validating the hallucination ('I believe you hear that voice, but I do not hear it'), and 2) Actively assess the specific content of command hallucinations to evaluate immediate lethality and safety risk ('What else is the voice telling you to do?'). This allows the nurse to implement immediate protective precautions.",
      "distractorBreakdown": {
        "A": "Directly arguing with or belittling the patient's hallucination destroys the nurse-client relationship and escalates agitation.",
        "B": "Falsely claiming to hear the voices validates and reinforces the psychotic percept, increasing paranoia.",
        "D": "Threatening restraints is punitive, non-therapeutic, and constitutes mental abuse."
      },
      "clinicalPearl": "Hallucination Communication Protocol: 1) Acknowledge the client's feeling ('It sounds scary'), 2) Present reality gently ('I don't hear the voices, but I believe they are real to you'), 3) NEVER validate the delusion/hallucination, 4) Assess COMMAND content for safety! ('What are the voices telling you to do?').",
      "tosCompetency": "Psychiatric Nursing: Therapeutic Communication, Reality Testing, and Safety Assessment in Psychosis",
      "reference": "Videbeck's Psychiatric-Mental Health Nursing (8th Ed.); Kaplan & Sadock's Synopsis of Psychiatry"
    }
  },
  {
    "id": "np5-006",
    "area": "NP V",
    "areaName": "Psychiatric & Mental Health",
    "topic": "Bipolar I Disorder: Acute Manic Episode",
    "subtopic": "Milieu Management & High-Calorie Finger Foods",
    "vignette": "A 29-year-old woman admitted with an acute manic episode has not slept in 48 hours. She is pacing the unit corridors incessantly, singing loudly, intruding into other patients' rooms, and talking with rapid, pressured speech. She refuses to sit down for meals, stating: 'I am building a solar spaceship, I don't have time to eat!'",
    "question": "Which nursing interventions best address this client's physiological and nutritional needs?",
    "options": [
      {
        "id": "A",
        "text": "Insist that the client sit down at the dining table with all other patients until she finishes a full 3-course meal."
      },
      {
        "id": "B",
        "text": "Provide portable, high-protein, high-calorie finger foods and nutritious beverages (e.g., sandwiches, cheese sticks, protein fruit smoothies) that can be eaten while pacing."
      },
      {
        "id": "C",
        "text": "Place the client in locked seclusion and administer total parenteral nutrition."
      },
      {
        "id": "D",
        "text": "Withhold all food until the patient demonstrates calm behavior and agrees to follow unit rules."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "A client in acute mania experiences severe hyperactivity, poor impulse control, short attention span, and high caloric expenditure, placing them at severe risk of physical exhaustion, dehydration, and cardiac collapse. Manic clients cannot sit still for traditional plated meals. The nurse must provide nutrient-dense, high-calorie, high-protein finger foods (sandwiches, wraps, hard-boiled eggs, smoothies) that the client can carry and consume while walking, alongside maintaining hydration.",
      "distractorBreakdown": {
        "A": "Forcing a manic client into a crowded dining room triggers sensory overload, agitation, and physical aggression.",
        "C": "Seclusion and TPN are extreme, invasive violations of the principle of least restrictive alternative.",
        "D": "Withholding food as punishment is unethical, non-therapeutic, and constitutes patient neglect."
      },
      "clinicalPearl": "Mania Nursing Priorities: 1) Safety & exhaustion prevention (private room, low stimulation, reduce lights/noise), 2) Nutrition: Portable HIGH-CALORIE FINGER FOODS and frequent fluid sips, 3) Consistent, calm limit setting without arguing.",
      "tosCompetency": "Mood Disorders Management: Nutritional Support, Milieu De-escalation, and Behavioral Limit Setting",
      "reference": "Videbeck's Psychiatric-Mental Health Nursing; Brunner & Suddarth"
    }
  },
  {
    "id": "np5-007",
    "area": "NP V",
    "areaName": "Psychiatric & Mental Health",
    "topic": "Depressive Disorders & Antidepressant Pharmacotherapy",
    "subtopic": "Paradoxical Suicide Risk Following Antidepressant Initiation",
    "vignette": "A 36-year-old female admitted for severe Major Depressive Disorder with suicidal ideation has been taking an SSRI (Sertraline / Zoloft) for 14 days. During the morning rounds, the nurse notices the patient is neatly groomed, smiling brightly, energetic, and giving away her favorite jewelry and wristwatch to other patients.",
    "question": "How should the nurse interpret this sudden behavioral change, and what is the priority action?",
    "options": [
      {
        "id": "A",
        "text": "The depression is fully cured; notify the psychiatrist to arrange immediate discharge home."
      },
      {
        "id": "B",
        "text": "The client's risk for suicide is now at its HIGHEST peak; ask directly about suicidal intent and plans, and place on close or 1-to-1 suicide observation."
      },
      {
        "id": "C",
        "text": "Congratulate the patient on her generosity and encourage her to give away remaining items."
      },
      {
        "id": "D",
        "text": "Decrease the dose of Sertraline as the patient is developing serotonin syndrome."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "The highest risk for completed suicide occurs 10 to 14 days after starting antidepressants (or following an acute depressive nadir). Antidepressants improve physical energy and psychomotor speed BEFORE lifting mood and cognitive despair. A client who previously lacked the physical energy to carry out a suicide plan now possesses the energy to execute it. Giving away prized personal possessions is a classic warning sign of impending suicide. The nurse must immediately ask directly: 'Are you thinking about killing yourself?' and initiate 1-to-1 suicide precautions.",
      "distractorBreakdown": {
        "A": "Major depression does not resolve in 14 days; mistaking energy return for cure results in preventable suicide deaths.",
        "C": "Giving away possessions is an acute pre-suicide closure behavior, not benign generosity.",
        "D": "Serotonin syndrome presents with hyperreflexia, clonus, autonomic instability, and fever, not smiling and giving away jewelry."
      },
      "clinicalPearl": "Suicide Risk Peak: When a severely depressed client suddenly appears happy, calm, and energetic after starting antidepressants, BE ON HIGH ALERT! The energy has returned, but suicidal thoughts remain—giving them the energy to execute suicide. Ask DIRECTLY: 'Do you plan to kill yourself?'",
      "tosCompetency": "Suicide Prevention and Assessment: High-Risk Transition Windows and Direct Inquest Protocols",
      "reference": "American Psychiatric Association (APA) Practice Guideline for the Assessment and Treatment of Patients With Suicidal Behaviors"
    }
  },
  {
    "id": "np5-008",
    "area": "NP V",
    "areaName": "Psychiatric & Mental Health",
    "topic": "Anxiety & Obsessive-Compulsive Disorders (OCD)",
    "subtopic": "Initial Allowance of Rituals vs Progressive Limit-Setting",
    "vignette": "A 27-year-old male is admitted with severe Obsessive-Compulsive Disorder (OCD). Every morning, the patient spends 90 minutes repetitively washing his hands, scrubbing each finger in a rigid ritualistic sequence before he can attend breakfast. When the nurse attempts to pull his hands away from the sink, the client screams in acute panic, hyperventilates, and exhibits diaphoresis.",
    "question": "What is the most effective therapeutic nursing intervention during the initial phase of treatment?",
    "options": [
      {
        "id": "A",
        "text": "Lock the bathroom door and physically restrain the client whenever he approaches a water tap."
      },
      {
        "id": "B",
        "text": "Initially allow adequate time for the handwashing ritual to prevent severe anxiety/panic, while gradually working with the client to set structured time limits and introduce alternative coping mechanisms."
      },
      {
        "id": "C",
        "text": "Tell the client that germs on skin are beneficial and shame him in front of other clients."
      },
      {
        "id": "D",
        "text": "Force the client to wash his hands in dirty mud to desensitize him on day one."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Compulsive rituals in OCD are maladaptive defense mechanisms performed to neutralize the overwhelming anxiety caused by intrusive obsessive thoughts. Abruptly blocking or forbidding a ritual in the early phase of treatment precipitates severe, overwhelming panic and cognitive decompensation. The therapeutic nursing approach: Initially allow sufficient time for the ritual while establishing a trusting relationship, then collaborate with the client to gradually shorten the ritual time and practice cognitive-behavioral techniques (response prevention, relaxation).",
      "distractorBreakdown": {
        "A": "Abrupt physical blocking triggers acute panic attacks and escalates aggressive resistance without providing an emotional coping substitute.",
        "C": "Shaming or mocking a psychiatric client destroys therapeutic rapport and increases guilt and anxiety.",
        "D": "Aggressive unconsented flooding without behavioral readiness is psychologically traumatizing."
      },
      "clinicalPearl": "OCD Nursing Golden Rule: In the INITIAL phase, ALLOW time for the ritual (it keeps anxiety manageable). NEVER stop rituals abruptly! Over time, gradually set limits and shorten ritual duration while teaching anxiety-reducing coping skills.",
      "tosCompetency": "Anxiety and OCD Management: Behavioral Modification and Gradual Exposure Principles",
      "reference": "Videbeck's Psychiatric-Mental Health Nursing; Stuart's Principles and Practice of Psychiatric Nursing"
    }
  },
  {
    "id": "np5-009",
    "area": "NP V",
    "areaName": "Psychiatric & Mental Health",
    "topic": "Substance Use Disorders: Alcohol Withdrawal",
    "subtopic": "Delirium Tremens Prevention & CIWA Protocol",
    "vignette": "A 45-year-old male with a 15-year history of heavy alcohol consumption was admitted 48 hours ago for an elective hernia repair. The nurse finds the patient agitated, sweating profusely, trembling, and swatting at the air, screaming: 'Get these crawling spiders off my sheets!' Vital signs: BP 178/102, HR 126 bpm, Temp 38.2°C.",
    "question": "What life-threatening condition is the client developing, and what is the primary medical management?",
    "options": [
      {
        "id": "A",
        "text": "Alcohol Withdrawal Delirium (Delirium Tremens); administer IV Benzodiazepines (e.g., Diazepam or Lorazepam) and IV Thiamine."
      },
      {
        "id": "B",
        "text": "Korsakoff's psychosis; administer high-dose Haloperidol and isolate client."
      },
      {
        "id": "C",
        "text": "Schizophrenia onset; transfer client to long-term psychiatric facility."
      },
      {
        "id": "D",
        "text": "Postoperative surgical site infection; administer broad-spectrum IV cephalosporins only."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Alcohol Withdrawal Delirium (Delirium Tremens / DTs) typically occurs 48 to 72 hours (up to 96 hours) after the last drink. Clinical hallmarks: Autonomic hyperactivity (tachycardia, severe hypertension, diaphoresis, fever), coarse tremors, acute confusion, and vivid visual/tactile hallucinations (formication / bugs crawling). Mortality is up to 15% if untreated. Primary treatment: High-dose Benzodiazepines (Diazepam, Lorazepam, or Chlordiazepoxide) to stimulate GABA receptors and prevent fatal seizures, alongside IV Thiamine (Vit B1) to prevent Wernicke-Korsakoff syndrome.",
      "distractorBreakdown": {
        "B": "Korsakoff's is a chronic memory disorder with confabulation; Haloperidol lowers seizure threshold and can precipitate fatal status epilepticus in alcohol withdrawal.",
        "C": "Acute delirium tremens is a medical-surgical withdrawal emergency, not new-onset schizophrenia.",
        "D": "Tachycardia and fever here are driven by hyperadrenergic withdrawal surge, not a simple wound infection."
      },
      "clinicalPearl": "Alcohol Withdrawal Timeline: 6-12 hrs = Tremors, nausea, insomnia. 12-24 hrs = Alcoholic hallucinosis. 24-48 hrs = Withdrawal SEIZURES (grand mal). 48-72 hrs = DELIRIUM TREMENS (DTs: fever, tachycardia, visual bugs, confusion). Treatment = BENZODIAZEPINES + THIAMINE!",
      "tosCompetency": "Substance-Related Emergencies: CIWA Monitoring, Seizure Prevention, and Pharmacotherapy in Delirium Tremens",
      "reference": "American Society of Addiction Medicine (ASAM) Clinical Practice Guideline on Alcohol Withdrawal Management"
    }
  },
  {
    "id": "np5-010",
    "area": "NP V",
    "areaName": "Psychiatric & Mental Health",
    "topic": "Eating Disorders: Bulimia Nervosa vs Anorexia Nervosa",
    "subtopic": "Postprandial Observation & Purging Prevention",
    "vignette": "A 19-year-old college student with normal body weight (BMI 21.5) is admitted to the psychiatric unit with severe Bulimia Nervosa. She reports recurrent episodes of binge eating followed by self-induced vomiting and laxative abuse. Assessment reveals bilateral painless parotid gland enlargement and dental enamel erosion on lingual surfaces.",
    "question": "What is the single most critical nursing intervention to implement immediately following meal times?",
    "options": [
      {
        "id": "A",
        "text": "Weigh the client immediately after each meal."
      },
      {
        "id": "B",
        "text": "Observe and accompany the client closely during and for at least 1 to 2 hours after meals, keeping the bathroom door locked or observed."
      },
      {
        "id": "C",
        "text": "Administer a dose of oral syrup of ipecac to clear the stomach."
      },
      {
        "id": "D",
        "text": "Instruct the client to exercise rigorously in the courtyard to burn consumed calories."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Clients with Bulimia Nervosa experience overwhelming guilt and panic regarding caloric absorption immediately following meals, creating an irresistible compulsion to purge (self-induced vomiting). The nurse must provide continuous, non-punitive supervision during meals and for at least 1 to 2 hours postprandially (the time required for gastric emptying), ensuring bathroom visits are monitored to break the binge-purge cycle.",
      "distractorBreakdown": {
        "A": "Weighing clients after meals is counterproductive, exacerbating weight obsession and panic.",
        "C": "Ipecac induces vomiting, which feeds the pathology and causes lethal myocardial emetine toxicity.",
        "D": "Exercise is another compensatory purging mechanism in bulimia and must not be encouraged."
      },
      "clinicalPearl": "Bulimia vs Anorexia: Bulimia = NORMAL or slightly overweight BMI, binging + purging, Russell's sign (knuckle calluses), dental enamel erosion, parotid gland swelling. Priority intervention = OBSERVE FOR 1-2 HOURS AFTER MEALS to prevent purging!",
      "tosCompetency": "Eating Disorders Nursing: Behavioral Protocol, Postprandial Supervision, and Electrolyte Stabilization",
      "reference": "Videbeck's Psychiatric-Mental Health Nursing; APA Practice Guideline for the Treatment of Patients With Eating Disorders"
    }
  },
  {
    "id": "np5-011",
    "area": "NP V",
    "areaName": "Psychiatric & Mental Health",
    "topic": "Crisis Intervention & Milieu Safety",
    "subtopic": "Least Restrictive Environment Hierarchy in Aggressive Behavior",
    "vignette": "An adult male admitted with acute psychosis becomes loud and agitated in the dayroom. He begins slamming chairs against the table and shouting profanities at other clients. The charge nurse steps in to de-escalate the situation.",
    "question": "According to the principle of Least Restrictive Alternative, what is the correct chronological sequence of nursing interventions?",
    "options": [
      {
        "id": "A",
        "text": "Apply 4-point leather restraints immediately -> Verbal de-escalation -> Seclusion room."
      },
      {
        "id": "B",
        "text": "Verbal de-escalation in a calm voice -> Move client to a low-stimulation quiet area -> Offer voluntary oral PRN medication -> Physical seclusion / restraints as the absolute last resort if imminent physical danger persists."
      },
      {
        "id": "C",
        "text": "Call hospital security to handcuff the patient immediately."
      },
      {
        "id": "D",
        "text": "Ignore the patient until he becomes tired and stops throwing chairs."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Under mental health law and psychiatric nursing standards (RA 11036 Philippine Mental Health Act), clients must be treated in the least restrictive environment possible. The mandatory de-escalation hierarchy is: 1) Verbal de-escalation (maintain calm demeanor, open body posture, acknowledge feelings), 2) Environmental manipulation (reduce stimulation, move to quiet room), 3) Offer voluntary oral PRN calming medications, and 4) Physical restraints or involuntary seclusion ONLY as an absolute last resort when there is clear, imminent danger of serious physical harm to self or others.",
      "distractorBreakdown": {
        "A": "Restraining a client before attempting verbal de-escalation violates human rights, legal standards, and constitutes battery.",
        "C": "Security guards and handcuffs escalate paranoia and fear in psychotic clients.",
        "D": "Ignoring a violent client throwing chairs endangers other clients and staff in the dayroom."
      },
      "clinicalPearl": "De-escalation Hierarchy: 1) Verbal calm de-escalation, 2) Decrease stimulation / quiet area, 3) Offer voluntary PRN medication, 4) Restraints/Seclusion = LAST RESORT ONLY! Must have physician order, 1-hr face-to-face exam, and circulation checks q15-30 min.",
      "tosCompetency": "Crisis De-escalation: Least Restrictive Environment Mandate and Restraint Protocols (RA 11036)",
      "reference": "Republic Act No. 11036 (Mental Health Act of the Philippines); Joint Commission Hospital Accreditation Standards"
    }
  },
  {
    "id": "np5-012",
    "area": "NP V",
    "areaName": "Psychiatric & Mental Health",
    "topic": "Delusional Disorders: Therapeutic Communication",
    "subtopic": "Delusions of Grandeur & Reality Orientation",
    "vignette": "A 40-year-old male admitted with a delusional disorder approaches the nurses' station dressed in a bedsheet folded like a presidential sash. He pounds his fist on the counter and demands: 'I am the Supreme Commander and President of the Republic of the Philippines! Get me the direct hotline to the United Nations or I will have all of you court-martialed!'",
    "question": "What is the nurse's most therapeutic and effective response?",
    "options": [
      {
        "id": "A",
        "text": "'Yes, Mr. President, right away! I will connect you to the UN General Assembly immediately.'"
      },
      {
        "id": "B",
        "text": "'You are not the President; you are an unemployed patient admitted to Ward 4 of the psychiatric hospital.'"
      },
      {
        "id": "C",
        "text": "'It sounds like you feel a heavy burden of responsibility, but I know you as Mr. Roberto, and you are here in the hospital where we are taking care of you.'"
      },
      {
        "id": "D",
        "text": "'Stop lying to me. If you say that one more time, you will lose your TV privileges.'"
      }
    ],
    "correctAnswer": "C",
    "rationale": {
      "whyCorrect": "When communicating with a client experiencing delusions: 1) Never agree with or validate the delusion (doing so reinforces the false belief), 2) Never challenge, ridicule, or argue with the delusion (arguing increases defensiveness and paranoia), and 3) Focus on the underlying emotion or feeling tone while gently grounding the client in shared reality ('It sounds like you feel a heavy burden of responsibility, but you are Mr. Roberto, and you are safe here in the hospital').",
      "distractorBreakdown": {
        "A": "Playing along with the delusion ('Yes, Mr. President') validates and solidifies the psychosis, worsening the client's condition.",
        "B": "Harshly confronting and humiliating the client causes profound agitation and destroys therapeutic trust.",
        "D": "Threatening punishment for a psychiatric symptom is punitive and non-therapeutic."
      },
      "clinicalPearl": "Therapeutic Rule for Delusions: 1) Acknowledge the feeling ('You seem worried/responsible'), 2) Do NOT argue or try to disprove the delusion with logic, 3) Do NOT play along with or validate the delusion, 4) Reorient gently to reality and redirect to neutral activities.",
      "tosCompetency": "Psychiatric Communication: Delusion Management, Emotional Validation, and Reality Reorientation",
      "reference": "Videbeck's Psychiatric-Mental Health Nursing; Stuart's Principles and Practice of Psychiatric Nursing"
    }
  },
  {
    "id": "jur-005",
    "area": "Jurisprudence",
    "areaName": "Nursing Jurisprudence & Ethics",
    "topic": "Republic Act No. 9173 (Philippine Nursing Act of 2002)",
    "subtopic": "Professional Regulatory Board of Nursing (PRBON) Qualifications",
    "vignette": "A vacancy occurs in the Professional Regulatory Board of Nursing (PRBON). The Philippine Nurses Association (PNA) prepares a list of nominees to submit to the Professional Regulation Commission (PRC) for recommendation to the President of the Philippines. A senior nurse clinician with 12 years of clinical experience in Dubai applies for nomination.",
    "question": "Under Section 4 of Republic Act No. 9173, does this nurse qualify for appointment to the Board of Nursing?",
    "options": [
      {
        "id": "A",
        "text": "Yes, because she has over 10 years of nursing practice and a valid PRC license."
      },
      {
        "id": "B",
        "text": "No, because the law explicitly mandates at least ten (10) years of continuous practice of the profession prior to appointment, the last five (5) years of which must be in the Philippines."
      },
      {
        "id": "C",
        "text": "Yes, provided she obtains an endorsement from a member of the Philippine Senate."
      },
      {
        "id": "D",
        "text": "No, because only nurses with a Doctoral degree (PhD) can serve on the Board of Nursing."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Under Section 4 of RA 9173, qualifications of Board members include: 1) Natural-born citizen and resident of the Philippines, 2) Registered Nurse with current PRC license, 3) Master's degree in nursing, education, or allied medical field, 4) At least ten (10) consecutive years of continuous practice of the profession prior to appointment, THE LAST FIVE (5) YEARS OF WHICH MUST BE IN THE PHILIPPINES, and 5) Not convicted of any offense involving moral turpitude. Spending the last 12 years abroad disqualifies her.",
      "distractorBreakdown": {
        "A": "Fails to meet the statutory residency requirement that the last 5 continuous years of practice must be physically in the Philippines.",
        "C": "Political endorsements have no legal standing to waive statutory qualifications under RA 9173.",
        "D": "A Master's degree is required by law; a doctorate is preferred but not legally mandatory."
      },
      "clinicalPearl": "Board of Nursing (BON) Qualifications (RA 9173 Sec. 4): 1) Natural-born Filipino, 2) Master's degree holder, 3) 10 years continuous practice (LAST 5 YEARS MUST BE IN THE PHILIPPINES!), 4) No moral turpitude, 5) No pecuniary interest in review centers/colleges.",
      "tosCompetency": "Legal and Ethical Responsibility: Statutory Structure and Qualifications of the Regulatory Board of Nursing",
      "reference": "Republic Act No. 9173 (The Philippine Nursing Act of 2002), Section 4"
    }
  },
  {
    "id": "jur-006",
    "area": "Jurisprudence",
    "areaName": "Nursing Jurisprudence & Ethics",
    "topic": "Scope of Nursing Practice: Section 28 of RA 9173",
    "subtopic": "Special Training Requirements: IV Therapy & Perineal Suturing",
    "vignette": "A newly registered nurse in a provincial district hospital is asked by the attending obstetrician to perform primary suturing of a second-degree perineal laceration on a newly delivered postpartum patient. The nurse has never attended an accredited training course on perineal repair.",
    "question": "Under Section 28 of RA 9173, what is the nurse's legal obligation?",
    "options": [
      {
        "id": "A",
        "text": "Proceed with the suturing, as any registered nurse has general statutory authority to suture perineal lacerations."
      },
      {
        "id": "B",
        "text": "Politely decline and inform the physician that RA 9173 Sec. 28 explicitly requires special training and certification before a nurse can perform suturing of perineal lacerations."
      },
      {
        "id": "C",
        "text": "Delegate the suturing to a nursing attendant or midwife."
      },
      {
        "id": "D",
        "text": "Perform the suturing only if the patient signs a waiver absolving the nurse of liability."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Section 28 of Republic Act No. 9173 specifically mandates that a nurse may only suture perineal lacerations AFTER undergoing special training and certification according to protocol established by the Board of Nursing and DOH. Without documented accredited training, performing perineal repair constitutes practice beyond legal scope, exposing the nurse to administrative liability, suspension of license, and criminal charges for malpractice.",
      "distractorBreakdown": {
        "A": "General RN licensure does NOT automatically permit perineal suturing; special training is an explicit statutory prerequisite under Section 28.",
        "C": "Delegating an invasive surgical procedure to unlicensed nursing attendants is illegal and constitutes gross dereliction of duty.",
        "D": "Patient waivers do not legalize illegal scope of practice or protect against statutory malpractice."
      },
      "clinicalPearl": "RA 9173 Sec. 28 Special Training Mandate: A Philippine RN requires specialized accredited training & certification for two explicit procedures: 1) Intravenous injections (ANSAP IV certification), and 2) Suturing of perineal lacerations. Nurses CANNOT prescribe medications!",
      "tosCompetency": "Legal Scope of Practice: Statutory Boundaries and Specialty Certification Standards",
      "reference": "Republic Act No. 9173, Section 28 (Scope of Nursing Practice); PRBON Resolution No. 220"
    }
  },
  {
    "id": "jur-007",
    "area": "Jurisprudence",
    "areaName": "Nursing Jurisprudence & Ethics",
    "topic": "Licensure Discipline: Revocation vs Suspension",
    "subtopic": "Section 23 Grounds & Reissuance of Revoked Certificate",
    "vignette": "A registered nurse had her Certificate of Registration and professional license revoked by the Professional Regulatory Board of Nursing three years ago due to gross negligence and unprofessional conduct during emergency care. Having demonstrated rehabilitation, moral reform, and community service, the nurse wishes to know if she may ever practice nursing again.",
    "question": "Under Section 24 of Republic Act No. 9173, what is the statutory provision regarding reissuance of revoked licenses?",
    "options": [
      {
        "id": "A",
        "text": "A revoked license is permanently extinguished and can never be re-issued under any circumstances."
      },
      {
        "id": "B",
        "text": "The Board of Nursing may, after the expiration of two (2) years from the date of revocation, for reasons of equity and justice, reissue a revoked certificate of registration."
      },
      {
        "id": "C",
        "text": "The nurse must retake the complete 500-item Philippine Nurse Licensure Examination (PNLE) and graduate from college again."
      },
      {
        "id": "D",
        "text": "Only the Supreme Court of the Philippines can reissue a revoked nursing license."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Section 24 of RA 9173 states: 'The Board may, after the expiration of two (2) years from the date of revocation of a certificate of registration, for reasons of equity and justice, and when the cause for revocation has disappeared or has been cured and corrected, reissue another certificate of registration and professional identification card.'",
      "distractorBreakdown": {
        "A": "Revocation is not permanently irrevocable; the law expressly provides for reissuance after 2 years upon proof of rehabilitation.",
        "C": "The nurse is not required to re-enroll in college or re-take the entire PNLE; the Board may exempt the applicant from examination.",
        "D": "The Board of Nursing possesses quasi-judicial statutory authority to reissue licenses; court intervention is not required."
      },
      "clinicalPearl": "License Revocation Rule (RA 9173 Sec. 24): A revoked nurse's license CAN be reissued by the Board of Nursing after a minimum of TWO (2) YEARS upon proper application, proof of reform, and for reasons of equity and justice.",
      "tosCompetency": "Professional Regulation: Administrative Quasi-Judicial Proceedings and Reinstatement Standards",
      "reference": "Republic Act No. 9173, Section 24 (Re-issuance of Revoked Certificates and Replacement of Lost Certificates)"
    }
  },
  {
    "id": "jur-008",
    "area": "Jurisprudence",
    "areaName": "Nursing Jurisprudence & Ethics",
    "topic": "Torts & Legal Liabilities in Nursing",
    "subtopic": "The 4 Elements of Professional Negligence (Malpractice)",
    "vignette": "A nurse on a surgical floor administers an intravenous dose of Potassium Chloride 40 mEq as an un-diluted IV push instead of the ordered continuous infusion over 4 hours. The patient suffers immediate ventricular fibrillation and dies. The family files a civil lawsuit for medical malpractice against the registered nurse.",
    "question": "To establish professional negligence (malpractice) in a court of law, what four essential elements must the plaintiff prove?",
    "options": [
      {
        "id": "A",
        "text": "Intention to harm, malice aforethought, financial profit, and criminal premeditation."
      },
      {
        "id": "B",
        "text": "Duty of care owed to patient, Dereliction (breach of standard of care), Direct causation (proximate cause), and Damages (actual harm/death)."
      },
      {
        "id": "C",
        "text": "Lack of hospital insurance, absence of doctor's note, poor bedside manner, and breach of warranty."
      },
      {
        "id": "D",
        "text": "Failure to obtain consent, expired nursing license, bad reputation, and written apology."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "The 4 fundamental elements of tort malpractice ('The 4 Ds') are: 1) DUTY: The nurse had an established legal and professional relationship with the client requiring adherence to standards of care; 2) DERELICTION / BREACH: The nurse failed to meet the accepted standard of care (e.g. giving undiluted IV push potassium); 3) DIRECT CAUSATION: The breach was the proximate cause of the adverse outcome; 4) DAMAGES: Actual, demonstrable physical injury, suffering, or death occurred.",
      "distractorBreakdown": {
        "A": "Malpractice is negligence (failure to exercise reasonable care), which does not require criminal intent, malice, or premeditation.",
        "C": "Hospital insurance and bedside manner are irrelevant to legal tort elements.",
        "D": "Consent and license status alone do not establish the causal chain of medical negligence."
      },
      "clinicalPearl": "The 4 D's of Medical Malpractice: 1) Duty (owed care to patient), 2) Dereliction (breached standard of care), 3) Direct Cause (proximate cause of injury), 4) Damage (actual harm or death). If all 4 are proven, liability is established!",
      "tosCompetency": "Legal Accountability: Elements of Tort Liability, Malpractice, and Clinical Standard of Care",
      "reference": "Philippine Law on Torts and Damages (Civil Code of the Philippines); Code of Ethics for Registered Nurses"
    }
  },
  {
    "id": "jur-009",
    "area": "Jurisprudence",
    "areaName": "Nursing Jurisprudence & Ethics",
    "topic": "Data Privacy & Patient Confidentiality",
    "subtopic": "Republic Act No. 10173 (Data Privacy Act of 2012) in Clinical Practice",
    "vignette": "A prominent national politician is admitted to the medical VIP suite for acute myocardial infarction. A news reporter approaches the staff nurse at the hallway desk, holding a microphone and offering an interview fee for information on the politician's diagnosis and medical chart notes.",
    "question": "Under the Code of Ethics for Philippine Nurses and Republic Act No. 10173, what is the nurse's mandatory legal duty?",
    "options": [
      {
        "id": "A",
        "text": "Provide a brief summary of the client's vital signs and medication list, as public figures have no right to privacy."
      },
      {
        "id": "B",
        "text": "Maintain absolute confidentiality, refuse to disclose any medical information, and refer the reporter to the hospital's official public relations officer."
      },
      {
        "id": "C",
        "text": "Allow the reporter to take a photograph of the electronic health record monitor without showing the patient's face."
      },
      {
        "id": "D",
        "text": "Confirm the diagnosis off-the-record as long as the reporter promises not to quote the nurse's name."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Under the Code of Ethics for Registered Nurses (PRC BON Res. 220) and the Data Privacy Act of 2012 (RA 10173), medical and health information is classified as 'Sensitive Personal Information'. Health professionals have an uncompromised legal and ethical duty to maintain strict confidentiality. Even for public figures, medical details cannot be disclosed to anyone without the patient's explicit, written informed consent. Violations carry heavy administrative fines and imprisonment.",
      "distractorBreakdown": {
        "A": "Public figures retain their constitutional right to medical privacy; being in government does not forfeit statutory data privacy protections.",
        "C": "Photographing patient health charts is a criminal data breach under the Data Privacy Act.",
        "D": "'Off-the-record' statements still constitute an illegal breach of professional secrecy and medical ethics."
      },
      "clinicalPearl": "Patient Confidentiality Rule: NEVER disclose patient medical information to media, callers, or acquaintances without written patient consent! Health data is Sensitive Personal Information under RA 10173 (Data Privacy Act). Refer inquiries to Hospital Public Information.",
      "tosCompetency": "Ethical and Legal Practice: Data Privacy Act (RA 10173), Confidentiality, and Medical Secrecy",
      "reference": "Republic Act No. 10173 (Data Privacy Act of 2012); Code of Ethics for Registered Nurses (PRC BON Res. 220 s. 2004)"
    }
  },
  {
    "id": "jur-010",
    "area": "Jurisprudence",
    "areaName": "Nursing Jurisprudence & Ethics",
    "topic": "Incident Reporting & Culture of Safety",
    "subtopic": "Managing and Documenting Adverse Clinical Events",
    "vignette": "A nurse administers an IV antibiotic to a client 1 hour ahead of schedule due to misreading the medication administration record. The client experiences no adverse physiological reaction, vital signs remain stable, and no harm occurs. The nurse is tempted not to report it because 'the patient is completely fine.'",
    "question": "What is the nurse's professional and ethical obligation regarding this medication variance?",
    "options": [
      {
        "id": "A",
        "text": "Keep silent and destroy the medication record to avoid reprimand by the supervisor."
      },
      {
        "id": "B",
        "text": "Immediately assess the patient, notify the attending physician and charge nurse, and complete an internal incident / adverse event report to promote systemic patient safety."
      },
      {
        "id": "C",
        "text": "Document the incident report directly in the patient's permanent bedside chart as a progress note."
      },
      {
        "id": "D",
        "text": "Tell the patient's family that the pharmacy made an error and blame the night shift."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Ethical and professional standards mandate honesty, transparency, and accountability (Principle of Veracity). Regardless of whether harm occurred, any medication error or variance must be reported immediately: assess the client, inform the physician and charge nurse, and file an internal incident report. Incident reports are quality improvement tools used in a 'Just Culture' to identify root causes and prevent future fatal system errors. The incident report itself is an internal risk document and is NEVER filed in the patient's permanent medical chart.",
      "distractorBreakdown": {
        "A": "Concealing a medication error or altering records constitutes fraud, falsification of documents, and grounds for license revocation.",
        "C": "Incident reports are confidential administrative quality tools; they are NEVER copied or documented in the patient's permanent medical chart.",
        "D": "Scapegoating other departments violates the Code of Ethics regarding collegiality and professional integrity."
      },
      "clinicalPearl": "Incident Reporting Golden Rule: Report EVERY error, near-miss, and adverse event immediately! Assess patient -> Notify physician -> File internal incident report. Crucial: The incident report is an INTERNAL risk-management document—NEVER document in chart that an incident report was completed!",
      "tosCompetency": "Quality and Safety: Incident Reporting, Root Cause Analysis, and Just Culture in Healthcare",
      "reference": "Code of Ethics for Philippine Registered Nurses; Patient Safety and Quality Improvement Standards (DOH AO 2020-0034)"
    }
  },
  {
    "id": "jur-011",
    "area": "Jurisprudence",
    "areaName": "Nursing Jurisprudence & Ethics",
    "topic": "Child Protection & Mandatory Reporting",
    "subtopic": "Republic Act No. 7610 (Special Protection of Children Against Abuse)",
    "vignette": "A 3-year-old child is brought to the pediatric emergency room by her stepfather, who claims the child 'fell from a low chair.' Physical assessment reveals multiple healing circular cigarette burns on the child's buttocks, old and fresh bruises on the inner thighs, and bilateral spiral wrist fractures.",
    "question": "Under Republic Act No. 7610, what is the nurse's mandatory legal obligation?",
    "options": [
      {
        "id": "A",
        "text": "Confront the stepfather aggressively and physically detain him in the waiting room."
      },
      {
        "id": "B",
        "text": "Immediately report the suspected child abuse to the Department of Social Welfare and Development (DSWD) or local child protection authorities, as healthcare workers are legally mandated reporters."
      },
      {
        "id": "C",
        "text": "Discharge the child home if the stepfather signs an acknowledgment of treatment."
      },
      {
        "id": "D",
        "text": "Wait until the child is old enough to testify in court before making any official report."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Under Republic Act No. 7610 (Special Protection of Children Against Child Abuse, Exploitation and Discrimination Act) and hospital child protection protocols, nurses, physicians, and teachers are MANDATED REPORTERS. Healthcare professionals who examine or treat a child and have reasonable cause to suspect physical abuse, neglect, or maltreatment must immediately report the case to the DSWD, police, or local child protection unit. Reporting in good faith is legally immune from civil or criminal liability.",
      "distractorBreakdown": {
        "A": "Nurses are not law enforcement officers; initiating physical altercations or unlawful detention endangers staff and violates due process.",
        "C": "Discharging an abused child back into an abusive household exposes the child to lethal injury and constitutes criminal neglect by the healthcare provider.",
        "D": "Delaying reports until child maturity defeats child rescue and violates mandatory reporting laws."
      },
      "clinicalPearl": "Child Abuse Mandatory Reporting: Under RA 7610, healthcare providers are MANDATED REPORTERS. Spiral fractures, cigarette burns, retinal hemorrhages, and injuries inconsistent with history require IMMEDIATE reporting to DSWD/Police. Good faith reporting is protected from legal liability!",
      "tosCompetency": "Medico-Legal Responsibility: Child Abuse Recognition and Statutory Mandated Reporting (RA 7610)",
      "reference": "Republic Act No. 7610 (Special Protection of Children Against Child Abuse, Exploitation and Discrimination Act)"
    }
  },
  {
    "id": "jur-012",
    "area": "Jurisprudence",
    "areaName": "Nursing Jurisprudence & Ethics",
    "topic": "Ethical Dilemmas & Impaired Practice",
    "subtopic": "Duty to Report Impaired Colleague for Patient Safety",
    "vignette": "A staff nurse on the night shift notices that her colleague, who is preparing intravenous narcotics for postoperative surgical patients, has slurred speech, unsteady gait, smells distinctly of alcohol, and drops medication ampules on the floor.",
    "question": "What is the nurse's primary ethical and legal obligation?",
    "options": [
      {
        "id": "A",
        "text": "Cover for the colleague by taking over her medication pass while letting her sleep in the break room."
      },
      {
        "id": "B",
        "text": "Immediately notify the charge nurse or nurse supervisor to remove the colleague from direct patient care to protect patient safety."
      },
      {
        "id": "C",
        "text": "Ignore the situation because confronting a peer destroys workplace harmony."
      },
      {
        "id": "D",
        "text": "Post a video of the impaired nurse on social media to expose hospital management."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Under the Code of Ethics for Registered Nurses (Principle of Non-maleficence / Beneficence), the nurse's supreme priority is the SAFETY and protection of vulnerable patients. An impaired nurse administering controlled substances or narcotics poses an immediate, catastrophic threat to human life. The observing nurse must immediately escalate the situation to the charge nurse or nursing supervisor so the impaired nurse can be removed from clinical duty and evaluated. Covering up for an impaired colleague constitutes professional complicity and legal liability.",
      "distractorBreakdown": {
        "A": "Covering for an impaired peer endangers patients, enables substance abuse, and makes the covering nurse legally complicit in any subsequent harm or drug diversion.",
        "C": "Ignoring impaired practice violates the fundamental ethical pledge of the Nightingale and BON Code of Ethics.",
        "D": "Posting workplace videos on social media is a severe breach of data privacy, professional ethics, and hospital policy."
      },
      "clinicalPearl": "Impaired Colleague Protocol: Patient safety is ALWAYS paramount! If a colleague is impaired (alcohol, drugs, severe cognitive compromise), do NOT cover for them and do NOT confront them alone—REPORT IMMEDIATELY to the Nurse Supervisor to remove them from patient care!",
      "tosCompetency": "Professional Ethics and Collegial Accountability: Patient Advocacy and Impaired Practice Intervention",
      "reference": "Code of Ethics for Registered Nurses (PRC BON Res. 220 s. 2004); American Nurses Association (ANA) Code of Ethics Provisions"
    }
  }
,
  {
    "id": "np1-016",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "Republic Act 7160 - Devolution of Health Services",
    "subtopic": "Local Government Code of 1991",
    "vignette": "A newly appointed Public Health Nurse in a 3rd-class municipality in Leyte is orienting community health workers on the administrative governance of healthcare in the Philippines under Republic Act No. 7160 (Local Government Code).",
    "question": "Which of the following statements accurately describes the operational structure of devolved health services in the Philippines?",
    "options": [
      {
        "id": "A",
        "text": "Provincial governments administer provincial and district hospitals, while municipal governments administer Rural Health Units (RHUs) and Barangay Health Stations (BHS)."
      },
      {
        "id": "B",
        "text": "The Department of Health directly finances and manages all rural health units and barangay health stations in the province."
      },
      {
        "id": "C",
        "text": "Barangay captains are the direct technical supervisors of the Municipal Health Officer and Public Health Nurses."
      },
      {
        "id": "D",
        "text": "Regional Health Offices have direct administrative authority to hire and terminate municipal rural health unit personnel."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Under RA 7160 (Local Government Code of 1991), healthcare services were devolved to Local Government Units (LGUs). Provincial governments manage secondary and tertiary provincial and district hospitals, while Municipal/City governments manage primary care facilities\u2014Rural Health Units (RHUs) and Barangay Health Stations (BHS).",
      "distractorBreakdown": {
        "B": "The DOH retained technical regulatory authority, national policy-making, and specialized medical centers, but direct operations and funding of RHUs were devolved to LGUs.",
        "C": "The Municipal Health Officer (MHO) oversees technical supervision of PHNs and midwives; barangay captains oversee local community affairs.",
        "D": "Local personnel hiring is under the administrative jurisdiction of the Local Chief Executive (Mayor/Governor), not DOH Regional Directors."
      },
      "clinicalPearl": "Devolution Rule (RA 7160): Provincial = Provincial & District Hospitals (Secondary/Tertiary). Municipal/City = RHUs & Barangay Health Stations (Primary Care). DOH = Policy, Standards, and Retained Specialty Hospitals.",
      "tosCompetency": "Healthcare Systems, Public Health Governance and Legal Mandates",
      "reference": "Republic Act No. 7160; DOH Community Health Nursing Services in the Philippines"
    }
  },
  {
    "id": "np1-017",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "Universal Health Care Act (RA 11223)",
    "subtopic": "National Health Insurance & Primary Care Networks",
    "vignette": "A family of indigent rice farmers in Isabela visits the Rural Health Unit to ask how the Universal Health Care Act (RA 11223) affects their access to prescribed medications and laboratory diagnostics.",
    "question": "As the Public Health Nurse, what essential feature of Republic Act 11223 should you emphasize regarding membership and primary care entitlements?",
    "options": [
      {
        "id": "A",
        "text": "Only formally employed citizens who pay monthly premiums are automatically covered under the National Health Insurance Program."
      },
      {
        "id": "B",
        "text": "Every Filipino citizen is automatically enrolled into the National Health Insurance Program and entitled to essential primary care services without upfront out-of-pocket payment."
      },
      {
        "id": "C",
        "text": "Citizens must present an active Barangay Indigency Certificate every month to qualify for municipal clinic consultations."
      },
      {
        "id": "D",
        "text": "Universal Health Care covers only in-hospital tertiary surgical procedures and excludes preventive primary care consultations."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Under RA 11223 (Universal Health Care Act of 2019), ALL Filipino citizens are automatically enrolled into PhilHealth (National Health Insurance Program) as either direct or indirect contributors. It guarantees universal access to a comprehensive package of primary care services (PhilHealth Konsulta) without financial hardship.",
      "distractorBreakdown": {
        "A": "RA 11223 establishes automatic universal coverage for all Filipinos regardless of employment or contribution capability.",
        "C": "Monthly renewal of indigency certificates is not required under the automatic enrollment provision of RA 11223.",
        "D": "UHC strongly emphasizes comprehensive outpatient primary care, preventive checkups, and diagnostic screenings via Primary Care Networks."
      },
      "clinicalPearl": "RA 11223 UHC Pillars: (1) Automatic PhilHealth membership for 100% of Filipinos, (2) Integration into Province-wide / City-wide Health Systems (PWH/CWHS), (3) PhilHealth Konsulta comprehensive primary care outpatient benefit.",
      "tosCompetency": "Safe and Quality Health Care Delivery: Universal Health Coverage Policies",
      "reference": "Republic Act No. 11223 (Universal Health Care Act); PhilHealth Circulars 2024"
    }
  },
  {
    "id": "np1-018",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "Responsible Parenthood and Reproductive Health Act (RA 10354)",
    "subtopic": "Informed Choice & Family Planning",
    "vignette": "A 23-year-old mother of three visits the barangay health center requesting advice on modern family planning. Her husband insists they should rely on calendar rhythm, but she expresses exhaustion and desires a long-acting reversible contraceptive.",
    "question": "Which principle under Republic Act No. 10354 (Responsible Parenthood and Reproductive Health Act) guides the nurse's counseling approach?",
    "options": [
      {
        "id": "A",
        "text": "The nurse must require the husband's written legal consent before dispensing any family planning method."
      },
      {
        "id": "B",
        "text": "The nurse must provide medically accurate, non-judgmental counseling on all modern natural and artificial methods, honoring the client's voluntary informed choice."
      },
      {
        "id": "C",
        "text": "The health center should exclusively promote artificial contraceptives because natural family planning is officially prohibited by the DOH."
      },
      {
        "id": "D",
        "text": "The nurse is legally obligated to convince the mother to follow her spouse's preference to maintain domestic tranquility."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Under RA 10354 (RH Law), healthcare providers must uphold voluntary informed choice, providing non-coercive, medically accurate information on both natural and modern artificial family planning methods. Spousal consent is NOT required for adult non-permanent contraception.",
      "distractorBreakdown": {
        "A": "Spousal consent is required ONLY for irreversible surgical procedures (Tubal Ligation, Vasectomy), not for reversible modern methods like IUD, implants, or pills.",
        "C": "The DOH provides and promotes BOTH modern natural (BOM, BBT, STM) and modern artificial methods without bias.",
        "D": "Clients possess bodily autonomy; coercing a client to adopt a spouse's preference violates ethical and legal standards."
      },
      "clinicalPearl": "RA 10354 Key Test Rule: Adult women DO NOT need husband's signature for reversible methods (pills, IUD, injectables, implants). Spousal consent is only legally mandated for surgical sterilization (tubal ligation/vasectomy).",
      "tosCompetency": "Ethico-Moral-Legal Responsibility: Reproductive Health Rights and Autonomy",
      "reference": "Republic Act No. 10354; DOH Family Planning Clinical Practice Guidelines"
    }
  },
  {
    "id": "np1-019",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "DOH National Tuberculosis Control Program (NTP)",
    "subtopic": "TB-DOTS Regimen & Adverse Drug Reactions",
    "vignette": "A 42-year-old construction worker diagnosed with pulmonary tuberculosis is on Category I treatment: Rifampicin, Isoniazid, Pyrazinamide, and Ethambutol (HRZE). Two weeks into therapy, he comes to the RHU complaining that his urine and tears are bright orange-red.",
    "question": "What is the nurse's most appropriate response?",
    "options": [
      {
        "id": "A",
        "text": "Immediately discontinue Rifampicin and refer to a nephrologist for suspected acute glomerulonephritis."
      },
      {
        "id": "B",
        "text": "Reassure the client that orange-red discoloration of bodily fluids is a harmless side effect of Rifampicin and urge him to continue medications without interruption."
      },
      {
        "id": "C",
        "text": "Instruct the patient to double his daily water intake to dilute the Ethambutol toxicity in his kidneys."
      },
      {
        "id": "D",
        "text": "Stop all anti-TB medications and send a STAT emergency sputum culture."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "Rifampicin characteristically causes benign, harmless orange-red discoloration of body fluids (urine, sweat, saliva, tears). Educating clients about this before starting therapy prevents panic and non-adherence. Contact lens wearers should be advised lenses may be permanently stained.",
      "distractorBreakdown": {
        "A": "This is an expected benign side effect, not kidney damage or hematuria.",
        "C": "Ethambutol causes retrobulbar optic neuritis (decreased red-green visual acuity), not red bodily fluids.",
        "D": "Discontinuing Category I therapy without clinical indication breeds multidrug-resistant tuberculosis (MDR-TB)."
      },
      "clinicalPearl": "Anti-TB High-Yield Mnemonics: (1) Rifampicin = RED-orange secretions (benign), (2) Isoniazid (INH) = Peripheral Neuropathy (give Vitamin B6 / Pyridoxine), (3) Pyrazinamide = Hyperuricemia / Gout, (4) Ethambutol = EYE problems (optic neuritis, red-green vision).",
      "tosCompetency": "Pharmacology and Safe Treatment Protocols in Public Health",
      "reference": "DOH National Tuberculosis Control Program Manual of Procedures (6th Ed.)"
    }
  },
  {
    "id": "np1-020",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "Dengue Clinical Management & Triage (2025 Protocol)",
    "subtopic": "Warning Signs & Fluid Resuscitation",
    "vignette": "A 10-year-old schoolboy is brought to the rural emergency clinic on Day 4 of fever. His fever has suddenly dropped from 39.5\u00b0C to 37.0\u00b0C (defervescence), but his mother reports he is persistently vomiting, has severe abdominal pain, and is unusually lethargic.",
    "question": "According to the DOH National Dengue Prevention and Control Program guidelines, what stage of dengue is this child entering, and what is the nurse's immediate priority?",
    "options": [
      {
        "id": "A",
        "text": "Recovery phase; discharge the child home with oral rehydration solution and paracetamol as fever has resolved."
      },
      {
        "id": "B",
        "text": "Critical phase with warning signs; initiate immediate IV fluid therapy with isotonic crystalloid and prepare for urgent hospitalization."
      },
      {
        "id": "C",
        "text": "Febrile phase; instruct the mother to apply cold water sponge baths every 2 hours."
      },
      {
        "id": "D",
        "text": "Chronic dengue phase; administer prophylactic broad-spectrum intramuscular antibiotics."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "The CRITICAL PHASE of Dengue typically occurs around defervescence (Days 3-7). Temperature drops, but systemic capillary leak begins. Persistent vomiting, severe abdominal tenderness, and lethargy are classic DOH/WHO DENGUE WARNING SIGNS indicating plasma leakage that can rapidly progress to Dengue Shock Syndrome. Immediate IV isotonic crystalloid (0.9% NaCl or Lactated Ringer's) and hospital admission are urgent.",
      "distractorBreakdown": {
        "A": "Defervescence in dengue does not mean recovery; it marks the onset of the dangerous critical phase where shock and severe hemorrhage strike.",
        "C": "The child is no longer febrile; cold baths are contraindicated and delay lifesaving IV fluid access.",
        "D": "Dengue is caused by an arbovirus (Flavivirus); prophylactic antibiotics have zero role and delay fluid resuscitation."
      },
      "clinicalPearl": "Dengue Warning Signs (DOH): Abdominal pain/tenderness, Persistent vomiting, Clinical fluid accumulation (ascites, pleural effusion), Mucosal bleeding, Lethargy/restlessness, Liver enlargement >2 cm, Increasing hematocrit with rapid drop in platelet count. Treat as Emergency!",
      "tosCompetency": "Acute Infectious Disease Triage and Clinical Judgment in Communities",
      "reference": "DOH Guidelines on the Clinical Management of Dengue (Administrative Order 2023-0012)"
    }
  },
  {
    "id": "np1-021",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "COPAR (Community Organizing Participatory Action Research)",
    "subtopic": "Phases of Community Development",
    "vignette": "A public health nurse is working with a remote upland indigenous community to develop a sustainable community-based primary health program. The community has completed its initial social investigation and identified clean drinking water as their highest health priority.",
    "question": "Which sequence correctly reflects the core methodological phases of COPAR under Philippine community development principles?",
    "options": [
      {
        "id": "A",
        "text": "Pre-Entry Phase -> Entry Phase -> Community Diagnosis / Study Phase -> Community Organization Phase -> Action Phase -> Evaluation & Phase-Out"
      },
      {
        "id": "B",
        "text": "Action Phase -> Entry Phase -> Pre-Entry Phase -> Community Diagnosis -> Termination"
      },
      {
        "id": "C",
        "text": "Entry Phase -> Action Phase -> Resource Allocation -> Community Organizing -> Phase-Out"
      },
      {
        "id": "D",
        "text": "Pre-Entry Phase -> Financial Mobilization -> Construction Phase -> Evaluation"
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "COPAR is a social development approach with a defined sequential progression: (1) Pre-entry (site selection, profiling), (2) Entry (integration with community, courtesy calls), (3) Community Diagnosis (participatory research), (4) Community Organization (forming core groups, health committees), (5) Action Phase (mobilization, executing projects), and (6) Evaluation & Phase-Out (empowerment, hand-over).",
      "distractorBreakdown": {
        "B": "Action cannot precede entry or diagnosis; acting without community consultation violates community organizing principles.",
        "C": "Organization and diagnosis must occur before major project implementation.",
        "D": "Leaves out the foundational integration, diagnosis, and organizing phases essential to people empowerment."
      },
      "clinicalPearl": "COPAR Golden Rule: 'Go to the people, live with them, learn from them, plan with them, work with them. Start with what they know, build on what they have.' The nurse is a facilitator, never a dictator.",
      "tosCompetency": "Community Organizing, Health Promotion, and Participatory Research",
      "reference": "DOH Community Health Nursing Services Manual; COPAR Philippine Practice Standards"
    }
  },
  {
    "id": "np1-022",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "DOH Expanded Program on Immunization (EPI)",
    "subtopic": "2024/2025 Schedule & Routes of Administration",
    "vignette": "A mother brings her 6-week-old infant to the health center for the first round of infant immunizations. The nurse prepares the vaccines scheduled at 6 weeks of age.",
    "question": "Which combination of vaccines, doses, and routes correctly corresponds to the DOH National Immunization Program (NIP) for a 6-week-old infant?",
    "options": [
      {
        "id": "A",
        "text": "Pentavalent 1 (0.5 mL IM anterolateral thigh), OPV 1 (2 drops orally), PCV 1 (0.5 mL IM anterolateral thigh), Rota 1 (oral)."
      },
      {
        "id": "B",
        "text": "BCG (0.05 mL ID deltoid) and Hepatitis B (0.5 mL IM) only."
      },
      {
        "id": "C",
        "text": "Measles-Rubella (0.5 mL Subcutaneous) and IPV (0.5 mL IM)."
      },
      {
        "id": "D",
        "text": "Tetanus-Diphtheria (0.5 mL IM) and Yellow Fever (0.5 mL SC)."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "At 6 weeks of age, the infant is scheduled to receive: Pentavalent 1 (DTP-HepB-Hib) 0.5 mL IM (anterolateral thigh), Oral Polio Vaccine (OPV 1) 2 drops orally, Pneumococcal Conjugate Vaccine (PCV 1) 0.5 mL IM, and Rotavirus 1 (oral). BCG and Hep B birth dose are administered at birth.",
      "distractorBreakdown": {
        "B": "BCG and Hep B-0 are administered at birth (within 24 hours of delivery).",
        "C": "Measles-Rubella (MR) is given at 9 months (1st dose) and 12 months (2nd dose); IPV is given at 14 weeks.",
        "D": "Tetanus-Diphtheria (Td) is administered to pregnant women and adolescents/adults, not 6-week-old infants."
      },
      "clinicalPearl": "DOH Infant EPI Master Milestones: Birth = BCG (0.05 mL ID right deltoid) + Hep B birth dose (0.5 mL IM thigh). 6, 10, 14 Weeks = Pentavalent + OPV + PCV. 14 Weeks = IPV (Inactivated Polio). 9 & 12 Months = MR / MMR (Subcutaneous).",
      "tosCompetency": "Safe and Quality Nursing Care: Pediatric Vaccine Administration Protocols",
      "reference": "DOH National Immunization Program Guidelines 2024; Administrative Order 2021-0023"
    }
  },
  {
    "id": "np1-023",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "Environmental Sanitation & Water Supply Levels",
    "subtopic": "DOH Sanitary Engineering Classifications",
    "vignette": "During a community environmental sanitation assessment in an isolated coastal sitio, the rural health nurse observes that residents draw water from an improved protected hand pump serving approximately 20 households located within 200 meters.",
    "question": "Under DOH Environmental Sanitation Standards, how is this water supply facility classified?",
    "options": [
      {
        "id": "A",
        "text": "Level I (Point Source)"
      },
      {
        "id": "B",
        "text": "Level II (Communal Faucet System / Stand-posts)"
      },
      {
        "id": "C",
        "text": "Level III (Waterworks System / Individual House Connections)"
      },
      {
        "id": "D",
        "text": "Level IV (Bulk Desalination Utility)"
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Under Presidential Decree 856 (Code on Sanitation of the Philippines) and DOH standards: Level I (Point Source) is a protected well or spring without a distribution system, serving an average of 15-25 households within a 250-meter radius (e.g., protected hand pumps).",
      "distractorBreakdown": {
        "B": "Level II (Communal Faucet) consists of a source, reservoir, and piped distribution network to communal faucets located at central points serving 4-6 households per standpipe.",
        "C": "Level III (Waterworks) has individual household water meters and taps directly inside each residential dwelling.",
        "D": "There is no Level IV in Philippine standard environmental sanitation water supply hierarchy."
      },
      "clinicalPearl": "Philippine Water Supply Levels (PD 856): Level I = Point source (protected well/spring, no pipes). Level II = Communal faucet (piped to public standposts). Level III = Piped directly into individual private homes.",
      "tosCompetency": "Environmental Health, Sanitation and Community Disease Prevention",
      "reference": "Presidential Decree No. 856 (Code on Sanitation of the Philippines); DOH Environmental Health Standards"
    }
  },
  {
    "id": "np1-024",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "Field Health Services Information System (FHSIS)",
    "subtopic": "Recording and Reporting Mechanisms",
    "vignette": "A newly deployed nurse in the Municipal Health Office is reviewing recording tools used in the barangay health station. The midwife asks which tool serves as the fundamental building block of the FHSIS from which monthly consolidated reports are extracted.",
    "question": "Which of the following documents is the fundamental facility-based record designed for continuous monitoring of specific client groups (e.g., prenatal, EPI, family planning)?",
    "options": [
      {
        "id": "A",
        "text": "Target Client List (TCL)"
      },
      {
        "id": "B",
        "text": "Annual LGU Financial Ledger"
      },
      {
        "id": "C",
        "text": "Summary Table (ST)"
      },
      {
        "id": "D",
        "text": "Monthly Consolidation Table (MCT)"
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "The Target Client List (TCL) is the fundamental facility-based monitoring record in the FHSIS. It tracks eligible clients continuously (e.g., TCL for Prenatal Care, TCL for Immunization, TCL for Family Planning) to monitor delivery of care and serve as the direct data source for Monthly Reports.",
      "distractorBreakdown": {
        "B": "Financial ledgers belong to municipal treasury accounting, not public health epidemiology.",
        "C": "Summary Tables are intermediate processing tools at the municipality level.",
        "D": "Monthly Consolidation Tables are compiled from the TCLs, but the primary clinical tracking tool is the Target Client List."
      },
      "clinicalPearl": "FHSIS Data Hierarchy: Individual/Family Record (Treatment Record) -> Target Client List (TCL) -> Monthly Consolidation Table (MCT) -> Monthly Form (M1/M2) -> Annual Forms (A1/A2). TCLs monitor coverage & identify dropouts!",
      "tosCompetency": "Health Information Systems, Documentation, and Public Health Telemetry",
      "reference": "DOH Field Health Services Information System (FHSIS) Manual 2023"
    }
  },
  {
    "id": "np1-025",
    "area": "NP I",
    "areaName": "Community Health Nursing",
    "topic": "Disaster Risk Reduction and Management for Health (DRRM-H)",
    "subtopic": "START Triage Protocol in Community Mass Casualties",
    "vignette": "A 6.8-magnitude earthquake causes structural collapse of a public market in Bohol. The rural health unit team arrives as first responders. A 35-year-old victim is trapped under debris, breathing at 36 breaths per minute with weak radial pulses and altered mentation.",
    "question": "Using the START (Simple Triage and Rapid Treatment) triage algorithm, how should the triage nurse categorize this victim?",
    "options": [
      {
        "id": "A",
        "text": "RED (Immediate) \u2014 Life-threatening but salvageable with rapid intervention."
      },
      {
        "id": "B",
        "text": "YELLOW (Delayed) \u2014 Serious injuries but systemic compromise is not immediate."
      },
      {
        "id": "C",
        "text": "GREEN (Minimal) \u2014 Minor injuries, ambulatory walking wounded."
      },
      {
        "id": "D",
        "text": "BLACK (Expectant) \u2014 Deceased or unsalvageable given available resources."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Under the START algorithm, adult triage assesses Respiration, Perfusion, and Mental Status (RPM). Any patient with respiratory rate >30 bpm, absent radial pulse / capillary refill >2 seconds, or unable to obey simple commands is classified as RED (Immediate priority for transport and surgical resuscitation).",
      "distractorBreakdown": {
        "B": "Yellow is for non-ambulatory patients whose RPM parameters are within acceptable limits (RR <30, normal pulse, obeys commands).",
        "C": "Green is reserved for the 'walking wounded' who can follow commands and move away from the impact site.",
        "D": "Black is for non-breathing victims whose airway positioning fails to trigger spontaneous respiration, or catastrophic non-survivable wounds."
      },
      "clinicalPearl": "START Triage 30-2-Can Do Rule: (1) Respiration >30 = RED, (2) Radial pulse absent or Cap Refill >2s = RED, (3) Cannot follow simple commands = RED. If walking = GREEN. If apneic after airway opening = BLACK. All other serious = YELLOW.",
      "tosCompetency": "Emergency Preparedness, Disaster Triage, and Critical Community Care",
      "reference": "DOH DRRM-H Disaster Triage Manual; National Disaster Risk Reduction and Management Council (NDRRMC)"
    }
  },
  {
    "id": "np2-016",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Severe Preeclampsia & Magnesium Sulfate Therapy",
    "subtopic": "Toxicity Signs and Nursing Antidote",
    "vignette": "A 28-year-old primigravida at 34 weeks of gestation is admitted to the high-risk labor ward with severe preeclampsia (BP 170/110 mmHg, 3+ proteinuria). The obstetrician initiates a Magnesium Sulfate infusion (4g IV loading dose, followed by 2g/hr maintenance). Four hours later, the nurse assesses the patient: respiratory rate is 10 breaths/min, deep tendon reflexes (patellar) are absent (0), and hourly urine output is 18 mL/hr.",
    "question": "What is the nurse's immediate sequence of actions?",
    "options": [
      {
        "id": "A",
        "text": "Immediately stop the Magnesium Sulfate infusion, administer 10% Calcium Gluconate IV push slowly over 3-5 minutes, and notify the physician."
      },
      {
        "id": "B",
        "text": "Increase the IV rate of normal saline to flush the kidneys and recheck reflexes in 30 minutes."
      },
      {
        "id": "C",
        "text": "Administer an extra dose of Hydralazine IV push to protect the cerebral vasculature from hypertensive stroke."
      },
      {
        "id": "D",
        "text": "Encourage the patient to perform deep breathing exercises and reposition to the right lateral decubitus position."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "The patient exhibits classic life-threatening signs of MAGNESIUM SULFATE TOXICITY: loss of patellar reflexes (usually first sign at >9 mg/dL), bradypnea <12 bpm, and oliguria <30 mL/hr (magnesium is cleared renally; oliguria causes toxic accumulation). The nurse must immediately STOP the infusion and administer the antidote CALCIUM GLUCONATE (10 mL of 10% solution IV push slowly).",
      "distractorBreakdown": {
        "B": "Failing to stop the magnesium infusion while respiratory depression is already present leads to cardiac arrest and respiratory arrest.",
        "C": "Hydralazine lowers blood pressure, but does not reverse neuromuscular paralysis and diaphragm arrest caused by hypermagnesemia.",
        "D": "Deep breathing and repositioning cannot overcome toxic central and peripheral neuromuscular blockade."
      },
      "clinicalPearl": "Magnesium Sulfate Toxicity Checklist: (1) Respiratory rate <12 bpm, (2) Absent DTRs (patellar reflexes), (3) Urine output <30 mL/hr. Antidote: 10% Calcium Gluconate (1g / 10 mL IV over 3-5 mins) must always be at bedside!",
      "tosCompetency": "High-Risk Intrapartum Nursing: Pharmacological Safety & Antidote Administration",
      "reference": "DOH Clinical Practice Guidelines on Hypertensive Disorders of Pregnancy; ACOG Practice Bulletin"
    }
  },
  {
    "id": "np2-017",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Third Trimester Bleeding: Previa vs Abruptio",
    "subtopic": "Clinical Differentiation & Contraindicated Nursing Actions",
    "vignette": "A 32-year-old multigravida at 35 weeks of gestation arrives at the emergency room with sudden vaginal bleeding. On triage assessment, the bleeding is bright red and completely painless. The uterus is soft, non-tender, and relaxed between contractions. Vital signs are stable.",
    "question": "Based on the clinical presentation, which diagnostic procedure is strictly CONTRAINDICATED?",
    "options": [
      {
        "id": "A",
        "text": "External electronic fetal heart rate monitoring"
      },
      {
        "id": "B",
        "text": "Digital vaginal examination (Internal Examination / IE)"
      },
      {
        "id": "C",
        "text": "Abdominal ultrasonography"
      },
      {
        "id": "D",
        "text": "Venipuncture for complete blood count and crossmatching"
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "The presentation of sudden, PAINLESS, bright red vaginal bleeding in the third trimester is classic for PLACENTA PREVIA. Performing a digital vaginal examination (internal exam) can puncture or tear the low-lying placenta covering the internal cervical os, resulting in catastrophic, exsanguinating maternal and fetal hemorrhage. All internal pelvic examinations are strictly contraindicated until placenta position is verified by ultrasound.",
      "distractorBreakdown": {
        "A": "Continuous non-invasive fetal monitoring is essential to track fetal well-being.",
        "C": "Abdominal ultrasound is the gold standard diagnostic tool of choice to localize placental insertion safely.",
        "D": "Crossmatching and blood sampling are mandatory preparations in anticipation of potential hemorrhage."
      },
      "clinicalPearl": "Board Exam Golden Rule: In any third-trimester pregnant patient with vaginal bleeding, NEVER perform an Internal Examination (IE) or digital pelvic exam until Placenta Previa has been ruled out by ultrasound!",
      "tosCompetency": "Antepartum Complications: Hemorrhage Management and Patient Safety",
      "reference": "Williams Obstetrics (26th Ed.); DOH Maternal and Newborn Care Protocols"
    }
  },
  {
    "id": "np2-018",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Postpartum Hemorrhage & Uterine Atony",
    "subtopic": "The 4 T's and Emergency Interventions",
    "vignette": "One hour after delivering an 8.5-lb infant, a postpartum mother's perineal pad is completely saturated with bright red blood. On palpation, the fundus is boggy, soft, and displaced above and to the right of the umbilicus.",
    "question": "What is the nurse's priority sequence of immediate clinical actions?",
    "options": [
      {
        "id": "A",
        "text": "Assist the patient to void or catheterize to empty the distended bladder, then perform vigorous fundal massage until the uterus is firm."
      },
      {
        "id": "B",
        "text": "Pack the vagina with sterile gauze rolls and administer oral iron supplements."
      },
      {
        "id": "C",
        "text": "Place the mother in high Fowler's position and administer cold water orally."
      },
      {
        "id": "D",
        "text": "Wait for the attending obstetrician before touching the abdomen."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "A fundus that is boggy and displaced to the right indicates urinary bladder distention, which physically prevents normal uterine myometrial contraction (uterine atony, the #1 cause of PPH under the 4 T's: Tone). The nurse must immediately empty the bladder (voiding or catheterization) and perform continuous fundal massage to stimulate contraction and expel trapped clots.",
      "distractorBreakdown": {
        "B": "Vaginal packing without active uterine contraction conceals blood accumulation inside the uterine cavity (internal hemorrhage).",
        "C": "High Fowler's drops blood pressure; Trendelenburg or modified supine with legs elevated is preferred for hypovolemic shock.",
        "D": "Delaying fundal massage in active postpartum hemorrhage can cause maternal exsanguination within minutes."
      },
      "clinicalPearl": "Postpartum Hemorrhage 4 T's: (1) Tone (Atony = 70-80% of cases), (2) Trauma (lacerations/hematomas), (3) Tissue (retained placenta), (4) Thrombin (coagulopathy). If fundus is high and right-displaced = FULL BLADDER! Empty bladder & MASSAGE fundus!",
      "tosCompetency": "Postpartum Nursing Care: Obstetric Hemorrhage Management",
      "reference": "DOH Basic Emergency Obstetric and Newborn Care (BEmONC) Manual"
    }
  },
  {
    "id": "np2-019",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Essential Intrapartum and Newborn Care (EINC)",
    "subtopic": "Unang Yakap Protocol Time-Bound Interventions",
    "vignette": "A nurse midwife is assisting at a normal spontaneous vertex delivery in a district hospital. As soon as the infant is completely delivered, the nurse executes the DOH-EINC ('Unang Yakap') clinical sequence.",
    "question": "Which of the following describes the correct order of the 4 core time-bound interventions under the DOH EINC guidelines?",
    "options": [
      {
        "id": "A",
        "text": "Immediate thorough drying (first 30s) -> Early skin-to-skin contact -> Properly timed cord clamping (1-3 minutes) -> Non-separation for breastfeeding initiation."
      },
      {
        "id": "B",
        "text": "Immediate cord clamping -> Routine suctioning -> Skin-to-skin contact -> Bathing the infant within 10 minutes."
      },
      {
        "id": "C",
        "text": "Routine gastric aspiration -> Footprint identification -> Vitamin K injection -> Skin-to-skin contact."
      },
      {
        "id": "D",
        "text": "Vigorous wiping of vernix caseosa -> Immediate separation under radiant warmer -> Bottle feeding sugar water."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "DOH Administrative Order 2009-0025 (EINC / Unang Yakap) establishes 4 core time-bound steps: (1) Immediate and thorough drying for 30 seconds, (2) Early skin-to-skin contact on mother's chest/abdomen, (3) Properly timed cord clamping after pulsations cease (1 to 3 minutes), (4) Non-separation of mother and infant for early initiation of breastfeeding (within 90 minutes).",
      "distractorBreakdown": {
        "B": "Early cord clamping causes anemia; routine suctioning of vigorous neonates is harmful; bathing must be delayed for at least 6 hours.",
        "C": "Gastric aspiration is unnecessary and causes bradycardia; invasive procedures must wait until after the first breastfeed.",
        "D": "Vernix caseosa is protective and should not be removed; separation disrupts bonding and thermal stabilization."
      },
      "clinicalPearl": "EINC 4 Essential Steps (Unang Yakap): (1) Dry thoroughly (30 sec), (2) Skin-to-skin contact, (3) Delayed cord clamping (wait for pulsations to stop, 1-3 mins), (4) Non-separation for breastfeeding. Delay bathing for AT LEAST 6 HOURS to prevent hypothermia!",
      "tosCompetency": "Neonatal Resuscitation & Essential Newborn Care Protocols",
      "reference": "DOH Administrative Order No. 2009-0025; WHO Essential Intrapartum and Newborn Care"
    }
  },
  {
    "id": "np2-020",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Newborn Screening Act of 2004 (RA 9288)",
    "subtopic": "Timing, Technique, and Expanded Panel",
    "vignette": "A newly delivered mother in the maternity ward asks the staff nurse why her 36-hour-old baby needs a heel prick test before discharge.",
    "question": "What is the nurse's most accurate educational statement regarding the timing and purpose of Expanded Newborn Screening (ENBS)?",
    "options": [
      {
        "id": "A",
        "text": "It is done after 24 hours of life to detect over 28 metabolic, endocrine, and hematologic disorders before irreversible mental retardation or death occurs."
      },
      {
        "id": "B",
        "text": "It is an optional DNA test exclusively recommended for infants born to mothers over 40 years of age."
      },
      {
        "id": "C",
        "text": "It must be drawn from the infant's jugular vein immediately in the first 10 minutes following birth."
      },
      {
        "id": "D",
        "text": "It screens only for HIV antibodies and requires maternal court authorization."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Under RA 9288 (Newborn Screening Act of 2004) and DOH expanded protocols, newborn screening is ideally performed between 24 and 72 hours of life (after adequate protein and lactose feeds). The Expanded Newborn Screening (ENBS) panel tests for 28+ disorders (including Congenital Hypothyroidism, Congenital Adrenal Hyperplasia, PKU, G6PD deficiency, Galactosemia, MSUD) to initiate early medical treatment and prevent severe intellectual disability or fatality.",
      "distractorBreakdown": {
        "B": "NBS is universal for all newborns, not restricted to older mothers.",
        "C": "Specimen is collected via a capillary heel-prick on the medial or lateral plantar surface of the heel onto specialized filter paper, never jugular puncture.",
        "D": "It screens for congenital inborn errors of metabolism and hemoglobinopathies, not HIV antibodies."
      },
      "clinicalPearl": "RA 9288 Heel Prick Rules: Perform ideally at 24 to 72 hours of life. Puncture site: Lateral or medial plantar surface of heel (NEVER the posterior curvature or center to avoid osteomyelitis of the calcaneus).",
      "tosCompetency": "Legal Mandates in Pediatrics: Congenital Screening Protocols",
      "reference": "Republic Act No. 9288; DOH National Institutes of Health Newborn Screening Center"
    }
  },
  {
    "id": "np2-021",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Congenital Anomalies: Pyloric Stenosis",
    "subtopic": "Assessment Findings & Nursing Care",
    "vignette": "A 5-week-old male infant is brought to the pediatric clinic due to vomiting. The mother states the infant vomits forcefully across the room after every feeding. The emesis is non-bilious (curdled milk). On physical examination, the infant appears avidly hungry and a small, firm, olive-shaped mass is palpable in the right upper epigastrium.",
    "question": "Which clinical condition and laboratory finding should the nurse anticipate?",
    "options": [
      {
        "id": "A",
        "text": "Hypertrophic Pyloric Stenosis; Hypochloremic, hypokalemic metabolic alkalosis."
      },
      {
        "id": "B",
        "text": "Intussusception; Metabolic acidosis with hypercalcemia."
      },
      {
        "id": "C",
        "text": "Hirschsprung's Disease; Hyperkalemic respiratory alkalosis."
      },
      {
        "id": "D",
        "text": "Tracheoesophageal Fistula; Hypoglycemia with metabolic acidosis."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Projective non-bilious vomiting in a hungry 3-6 week infant and a palpable olive-shaped epigastric mass are classic hallmarks of HYPERTROPHIC PYLORIC STENOSIS. Persistent vomiting of stomach hydrochloric acid leads to classic HYPOCHLOREMIC, HYPOKALEMIC METABOLIC ALKALOSIS. Correcting electrolyte imbalance prior to pyloromyotomy surgery is mandatory.",
      "distractorBreakdown": {
        "B": "Intussusception features sudden episodic colic pain, inconsolable crying, a sausage-shaped abdominal mass, and 'currant jelly' stools.",
        "C": "Hirschsprung's disease (congenital aganglionic megacolon) features failure to pass meconium in first 48 hours and ribbon-like foul-smelling stools.",
        "D": "TEF features the 3 C's: Coughing, Choking, and Cyanosis during feeds with excessive oral frothy drooling."
      },
      "clinicalPearl": "Pediatric GI Triads to Memorize: (1) Pyloric Stenosis = Projectile NON-bilious vomiting + Olive mass + Metabolic Alkalosis. (2) Intussusception = Sausage mass + Currant jelly stool + Colicky crying. (3) Hirschsprung = Ribbon-like stool + Delayed meconium.",
      "tosCompetency": "Pediatric Surgical Pathology: Assessment and Fluid-Electrolyte Stabilization",
      "reference": "Wong's Essentials of Pediatric Nursing (11th Ed.)"
    }
  },
  {
    "id": "np2-022",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Pediatric Kawasaki Disease",
    "subtopic": "Diagnostic Hallmarks & Cardiac Risk",
    "vignette": "A 3-year-old child is admitted with high spiking fever for 6 days that does not respond to antipyretics. Assessment reveals bilateral non-exudative conjunctivitis, red dry cracked lips, a bright red 'strawberry tongue', indurated edema of hands and feet with desquamation, and a polymorphous trunk rash.",
    "question": "What is the primary life-threatening complication of this condition that nursing care aims to prevent?",
    "options": [
      {
        "id": "A",
        "text": "Coronary artery aneurysms and acute myocardial infarction."
      },
      {
        "id": "B",
        "text": "Acute glomerulonephritis and renal failure."
      },
      {
        "id": "C",
        "text": "Intracranial hemorrhage from berry aneurysms."
      },
      {
        "id": "D",
        "text": "Permanent sensorineural hearing loss."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Kawasaki Disease (mucocutaneous lymph node syndrome) is an acute systemic necrotizing vasculitis of medium-sized arteries. Its most serious complication is CORONARY ARTERY ANEURYSM (in 20-25% of untreated children), which can cause coronary thrombosis, rupture, and sudden fatal myocardial infarction. Treatment is IVIG (Intravenous Immunoglobulin) and high-dose Aspirin.",
      "distractorBreakdown": {
        "B": "Glomerulonephritis is a sequela of Group A Beta-Hemolytic Streptococcal (GABHS) pharyngitis, not Kawasaki.",
        "C": "Berry aneurysms in the circle of Willis are associated with polycystic kidney disease and coarctation of aorta.",
        "D": "Sensorineural hearing loss is associated with congenital rubella or bacterial meningitis."
      },
      "clinicalPearl": "Kawasaki Disease Clinical Pearl: Standard medical exception where high-dose ASPIRIN is prescribed to children (to inhibit platelet aggregation and vascular inflammation) alongside IVIG. Screen coronary arteries via echocardiogram!",
      "tosCompetency": "Pediatric Cardiovascular Pathology: Vasculitis and Thromboembolic Prophylaxis",
      "reference": "American Heart Association Pediatric Kawasaki Guidelines; Nelson Textbook of Pediatrics"
    }
  },
  {
    "id": "np2-023",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Labor Dystocia & Cephalopelvic Disproportion (CPD)",
    "subtopic": "Partograph Interpretation & Alert Lines",
    "vignette": "A labor and delivery room nurse in a provincial hospital is plotting labor progress on the DOH Partograph for a 22-year-old G1P0 at 4 cm cervical dilation. Four hours later, reassessment reveals the cervix remains at 4 cm with station -2, and the cervical dilation curve crosses to the right of the 'Action Line'. Contractions are hypotonic.",
    "question": "What is the clinical significance of the partograph crossing the Action Line, and what is the nurse's priority action?",
    "options": [
      {
        "id": "A",
        "text": "Labor is progressing normally; instruct the mother to walk around the ward corridors."
      },
      {
        "id": "B",
        "text": "Labor arrest/dystocia has occurred; alert the obstetrician immediately and prepare for emergency cesarean section or medical augmentation."
      },
      {
        "id": "C",
        "text": "Administer an immediate IV bolus of sterile distilled water to relax the pelvic floor."
      },
      {
        "id": "D",
        "text": "Advise the mother that delivery will occur within 30 minutes and assemble delivery instruments."
      }
    ],
    "correctAnswer": "B",
    "rationale": {
      "whyCorrect": "The WHO/DOH Partograph features an Alert Line (normal rate of dilation in active labor = 1 cm/hr) and an Action Line (4 hours to the right of Alert Line). If cervical dilation crosses the Action Line, prolonged labor / labor dystocia is confirmed, carrying high risks of obstructed labor, maternal sepsis, uterine rupture, and fetal asphyxia. Immediate obstetric escalation for definitive action (C-section or augmentation if CPD ruled out) is mandatory.",
      "distractorBreakdown": {
        "A": "Crossing the Action Line is a major obstetric emergency sign, not normal progression.",
        "C": "IV sterile water causes acute intravascular hemolysis and death.",
        "D": "Zero cervical change in 4 hours at 4 cm indicates labor arrest, not imminent birth."
      },
      "clinicalPearl": "Partograph Golden Rules: Active phase begins at 4 cm. Expected rate of dilation = >=1 cm/hour. Alert line warns of delay. Crossing the ACTION LINE = STOP & ACT! Obstetric intervention required immediately!",
      "tosCompetency": "Intrapartum Fetal Surveillance and Partograph Clinical Decision-Making",
      "reference": "WHO Partograph Guidelines; DOH BEmONC/CEmONC Protocols"
    }
  },
  {
    "id": "np2-024",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Rh Incompatibility & Rho(D) Immune Globulin",
    "subtopic": "Indications, Timing, and Indirect Coombs Test",
    "vignette": "A prenatal nurse is reviewing laboratory results for an Rh-negative primigravida whose husband is Rh-positive. The indirect Coombs test result at 28 weeks of gestation is negative (unsensitized).",
    "question": "Which nursing intervention is indicated for this patient?",
    "options": [
      {
        "id": "A",
        "text": "Administer Rho(D) Immune Globulin (RhoGAM) 300 mcg IM now at 28 weeks, and plan for a second dose within 72 hours after delivery if the newborn is Rh-positive."
      },
      {
        "id": "B",
        "text": "Withhold RhoGAM indefinitely because the mother is already immune to Rh antigens."
      },
      {
        "id": "C",
        "text": "Prepare the mother for immediate emergency cesarean delivery to prevent fetal hydrops fetalis."
      },
      {
        "id": "D",
        "text": "Administer RhoGAM directly to the newborn infant via the umbilical vein catheter."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "An unsensitized (Indirect Coombs negative) Rh-negative pregnant client must receive Rho(D) Immune Globulin (RhoGAM) at 28 weeks of gestation prophylactic dose. If the newborn is determined to be Rh-positive at birth and maternal direct Coombs is negative, a second dose of RhoGAM (300 mcg IM) is administered within 72 hours postpartum to prevent maternal anti-Rh antibody formation in future pregnancies.",
      "distractorBreakdown": {
        "B": "A negative Coombs test means the mother is UNSENSITIZED (does NOT have antibodies), which is the exact and only time RhoGAM works. RhoGAM cannot reverse active sensitization.",
        "C": "Cesarean delivery is not indicated for uncomplicated unsensitized Rh compatibility.",
        "D": "RhoGAM is administered to the MOTHER (intramuscularly into deltoid), never to the infant."
      },
      "clinicalPearl": "RhoGAM Rules: (1) Mother is Rh-negative, Father is Rh-positive, baby is Rh-positive. (2) Mother must be UNSENSITIZED (Coombs negative). (3) Doses: 28 weeks antepartum AND within 72 hours postpartum. (4) Also given after miscarriage, ectopic pregnancy, or amniocentesis!",
      "tosCompetency": "Immunology & Prophylaxis in Maternal-Fetal Nursing",
      "reference": "ACOG Practice Bulletin on Rh Incompatibility; Williams Obstetrics"
    }
  },
  {
    "id": "np2-025",
    "area": "NP II",
    "areaName": "Maternal and Child Nursing",
    "topic": "Pediatric Dehydration & Oral Rehydration Salts (ORS)",
    "subtopic": "IMCI Diarrhea Management Plans A, B, and C",
    "vignette": "A 9-month-old infant is brought to the RHU due to watery diarrhea 6 times a day for 2 days. Physical assessment reveals sunken fontanelle, sunken eyes, skin pinch that goes back slowly (1-2 seconds), and the infant drinks water eagerly and thirstily.",
    "question": "Under DOH IMCI protocols, how is this child's dehydration categorized, and what treatment plan must be implemented?",
    "options": [
      {
        "id": "A",
        "text": "Some Dehydration (Plan B); administer oral rehydration salts (ORS) 75 mL/kg over a 4-hour period at the clinic and continue breastfeeding."
      },
      {
        "id": "B",
        "text": "Severe Dehydration (Plan C); immediately insert IV line and administer 100 mL/kg Ringer's Lactate."
      },
      {
        "id": "C",
        "text": "No Dehydration (Plan A); advise home fluids and extra fluids after each loose stool."
      },
      {
        "id": "D",
        "text": "Dysentery; administer immediate oral Metronidazole and withhold oral fluids."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Under IMCI guidelines, an infant with two of the following signs: restless/irritable, sunken eyes, skin pinch goes back slowly, and drinks eagerly/thirsty is classified as SOME DEHYDRATION (Yellow row). Treatment Plan B mandates giving recommended amount of ORS (approx. 75 mL/kg) over 4 hours in the clinic while monitoring tolerance, alongside zinc supplementation for 14 days and continued breastfeeding.",
      "distractorBreakdown": {
        "B": "Severe Dehydration (Plan C) requires lethargy/unconsciousness, inability to drink, or skin pinch going back VERY slowly (>2 seconds), requiring IV fluid resuscitation.",
        "C": "Plan A applies when the child does not exhibit two signs of dehydration.",
        "D": "Dysentery is defined as blood in the stool; this child has watery diarrhea without blood."
      },
      "clinicalPearl": "IMCI Dehydration Cheat Sheet: (1) Severe Dehydration (Plan C) = Lethargic/floppy + Pinch >2s + Drinks poorly. (2) Some Dehydration (Plan B) = Sunken eyes + Eager/thirsty drinker + Pinch goes back slowly (1-2s). (3) Zinc sulfate (10-20 mg/day for 14 days) is ALWAYS prescribed to prevent recurrent diarrhea!",
      "tosCompetency": "Pediatric Gastroenterology and Fluid Balance in Primary Health Care",
      "reference": "DOH IMCI Chart Booklet 2024; WHO Diarrhoeal Disease Management Guidelines"
    }
  },
  {
    "id": "np3-016",
    "area": "NP III",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part A)",
    "topic": "Chest Tube Drainage System Mechanics",
    "subtopic": "Water Seal Fluctuation vs Continuous Bubbling",
    "vignette": "A 55-year-old male post-thoracotomy has a three-chamber water-seal chest drainage system in place. During the morning assessment, the nurse notes that the water level in the water seal chamber fluctuates up and down with the patient's inspiration and expiration (tidaling). However, in the same water seal chamber, the nurse observes continuous, rapid bubbling.",
    "question": "How should the nurse interpret these findings, and what is the appropriate action?",
    "options": [
      {
        "id": "A",
        "text": "Tidaling is normal; continuous bubbling in the water seal chamber indicates an air leak in the system or pleural space that requires immediate localization."
      },
      {
        "id": "B",
        "text": "Tidaling indicates a completely occluded chest tube; immediately milk and strip the tubing."
      },
      {
        "id": "C",
        "text": "Continuous bubbling is expected in the water seal chamber; increase suction pressure to 40 cm H2O."
      },
      {
        "id": "D",
        "text": "Both findings indicate pneumothorax resolution; clamp the chest tube and remove the catheter."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "In a chest tube system, TIDALING (water level rising on inspiration and falling on expiration during spontaneous breathing) is NORMAL and confirms catheter patency. Conversely, CONTINUOUS bubbling in the WATER SEAL chamber indicates an active AIR LEAK (either in the patient's lung or a loose connection in the tubing). The nurse must inspect connections, check insertion dressing, and notify the surgeon.",
      "distractorBreakdown": {
        "B": "Tidaling indicates patency, not occlusion. Stripping or milking chest tubes creates extreme negative intrathoracic pressures that damage lung tissue and is strictly contraindicated.",
        "C": "Gentle bubbling is normal only in the SUCTION CONTROL chamber, NEVER in the water seal chamber.",
        "D": "Clamping a bubbling chest tube can convert a simple air leak into a fatal TENSION PNEUMOTHORAX."
      },
      "clinicalPearl": "Chest Tube Rules: (1) Water seal tidaling = NORMAL (patency). (2) Water seal bubbling = AIR LEAK! (3) Suction chamber bubbling = NORMAL (gentle). (4) Never strip/milk tubes! (5) Never clamp routinely! If bottle breaks = immerse tube end in sterile water!",
      "tosCompetency": "Respiratory Care: Thoracotomy and Closed Chest Drainage Management",
      "reference": "Brunner & Suddarth's Textbook of Medical-Surgical Nursing (15th Ed.)"
    }
  },
  {
    "id": "np3-017",
    "area": "NP III",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part A)",
    "topic": "Peptic Ulcer Disease: Gastric vs Duodenal",
    "subtopic": "Pain Timing, Etiology, and Complications",
    "vignette": "A 48-year-old executive presents with epigastric burning pain. He reports the pain consistently awakens him in the middle of the night (around 1:00 AM to 2:00 AM) and occurs 2 to 3 hours after meals. Eating a snack or drinking milk promptly relieves the pain.",
    "question": "Which type of peptic ulcer is most consistent with these clinical findings?",
    "options": [
      {
        "id": "A",
        "text": "Duodenal ulcer"
      },
      {
        "id": "B",
        "text": "Gastric ulcer"
      },
      {
        "id": "C",
        "text": "Curling's burn ulcer"
      },
      {
        "id": "D",
        "text": "Mallory-Weiss tear"
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "DUODENAL ULCERS characteristically produce epigastric pain 2 to 3 hours AFTER meals and at night (1 AM-3 AM) when the stomach is empty and acid empties into the duodenum. Food or antacids BUFFER the gastric acid and provide prompt relief. In contrast, GASTRIC ULCER pain occurs 30-60 minutes after eating and is worsened or aggravated by food intake (leading to weight loss).",
      "distractorBreakdown": {
        "B": "Gastric ulcer pain occurs immediately after meals (30-60 min) and eating worsens the pain, so clients often avoid food and experience weight loss.",
        "C": "Curling's ulcer is an acute stress ulcer resulting specifically from extensive severe burns.",
        "D": "Mallory-Weiss tear is a longitudinal mucosal laceration at the gastroesophageal junction caused by violent retching or vomiting, presenting with hematemesis."
      },
      "clinicalPearl": "Ulcer Memory Aid: (1) Duodenal = 'Do Eat!' (Food relieves pain; pain 2-3 hrs later or late night; client often gains weight). (2) Gastric = 'Gut hurts when Eating' (Food precipitates pain; client avoids food; weight loss). Most common cause = Helicobacter pylori!",
      "tosCompetency": "Gastrointestinal Disorders: Diagnostic Clinical Reasoning and Dietary Regimens",
      "reference": "Medical-Surgical Nursing: Concepts for Interprofessional Collaborative Care (Ignatavicius, 10th Ed.)"
    }
  },
  {
    "id": "np3-018",
    "area": "NP III",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part A)",
    "topic": "Hepatic Cirrhosis & Hepatic Encephalopathy",
    "subtopic": "Lactulose Pharmacodynamics & Asterixis",
    "vignette": "A client with end-stage alcoholic liver cirrhosis is admitted with lethargy, confusion, and a flapping tremor of the dorsiflexed hands (asterixis). Blood analysis shows elevated serum ammonia at 145 mcg/dL. The physician orders Lactulose 30 mL orally four times daily.",
    "question": "How should the nurse explain the therapeutic action of Lactulose to the family, and what is the expected clinical endpoint?",
    "options": [
      {
        "id": "A",
        "text": "Lactulose acidifies the colon contents, trapping toxic ammonia ions (NH4+) and expelling them via 2 to 3 soft bowel movements per day."
      },
      {
        "id": "B",
        "text": "Lactulose suppresses stomach acid production to prevent esophageal variceal rupture."
      },
      {
        "id": "C",
        "text": "Lactulose acts as a direct diuretic to relieve abdominal ascites and lower portal vein pressure."
      },
      {
        "id": "D",
        "text": "Lactulose induces severe watery diarrhea exceeding 10 watery stools daily to dehydrate brain edema."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Lactulose is degraded by colonic bacteria into lactic and acetic acids. The acidified colonic lumen converts diffusible ammonia (NH3) into non-absorbable ammonium ions (NH4+), which are trapped in feces and eliminated through laxative action. The clinical goal of therapy is 2 TO 3 SOFT STOOLS PER DAY, clearing ammonia and reversing encephalopathy.",
      "distractorBreakdown": {
        "B": "Proton pump inhibitors and beta-blockers reduce variceal risk, not lactulose.",
        "C": "Spironolactone and Furosemide are diuretics for ascites; lactulose is an osmotic disaccharide.",
        "D": "Excessive diarrhea (>4-5 loose stools/day) leads to severe dehydration, hypokalemia, and hypernatremia, which paradoxically worsens hepatic encephalopathy."
      },
      "clinicalPearl": "Hepatic Encephalopathy Triad: (1) Elevated ammonia, (2) Asterixis (flapping tremor), (3) Fetor hepaticus (musty breath odor). Medication of choice: Lactulose. Target: 2 to 3 soft stools per day! Monitor Potassium (hypokalemia increases ammonia retention).",
      "tosCompetency": "Gastroenterology and Hepatology Nursing: Neuro-toxin Elimination",
      "reference": "Brunner & Suddarth's Textbook of Medical-Surgical Nursing (15th Ed.)"
    }
  },
  {
    "id": "np3-019",
    "area": "NP III",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part A)",
    "topic": "Total Hip Arthroplasty (THA)",
    "subtopic": "Postoperative Positioning & Dislocation Precautions",
    "vignette": "A 68-year-old female is 24 hours postoperative following a right Total Hip Arthroplasty (posterior surgical approach) for femoral neck fracture. The nurse is planning early mobility and bed positioning.",
    "question": "Which postoperative positioning principle must the nurse maintain to prevent prosthetic hip dislocation?",
    "options": [
      {
        "id": "A",
        "text": "Keep the operative leg abducted using an abduction wedge pillow, and avoid hip flexion beyond 90 degrees."
      },
      {
        "id": "B",
        "text": "Encourage the client to cross her legs at the ankles to promote venous return."
      },
      {
        "id": "C",
        "text": "Seat the client on low, soft sofas to promote comfortable lumbar extension."
      },
      {
        "id": "D",
        "text": "Instruct the patient to bend forward at the waist to put on socks and shoes independently."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Following posterior total hip replacement, the artificial femoral head can dislodge from the acetabular cup if the hip is flexed past 90 degrees, adducted past the midline, or internally rotated. An ABDUCTION PILLOW maintains the operative leg separated and neutral. High chairs with firm seats and elevated toilet seats are mandatory.",
      "distractorBreakdown": {
        "B": "Crossing legs adducts the operative hip past the midline, which directly triggers prosthetic dislocation.",
        "C": "Low, soft chairs cause the hips to flex significantly beyond 90 degrees.",
        "D": "Bending forward at the waist to reach the feet exceeds the 90-degree flexion limit. Assistive reaching devices must be used."
      },
      "clinicalPearl": "Total Hip Precautions (Posterior Approach): 'No ADDuiction, No Internal Rotation, No Flexion >90\u00b0!' Use an Abductor pillow, use raised toilet seats, keep toes pointed forward or slightly outward, and never cross legs!",
      "tosCompetency": "Musculoskeletal Nursing: Post-Surgical Arthroplasty Rehabilitation",
      "reference": "Lewis's Medical-Surgical Nursing: Assessment and Management of Clinical Problems"
    }
  },
  {
    "id": "np3-020",
    "area": "NP III",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part A)",
    "topic": "Chronic Kidney Disease & Hyperkalemia",
    "subtopic": "ECG Changes & Pharmacological Sequence",
    "vignette": "A patient with Stage 5 Chronic Kidney Disease misses two scheduled hemodialysis sessions. She presents to the emergency room with severe generalized weakness. Her serum Potassium is critically elevated at 7.2 mEq/L. The cardiac monitor displays tall, peaked, tented T waves with widening QRS complexes and PR prolongation.",
    "question": "Which medication must the nurse administer FIRST to protect the myocardium from fatal dysrhythmias?",
    "options": [
      {
        "id": "A",
        "text": "Intravenous Calcium Gluconate (10%)"
      },
      {
        "id": "B",
        "text": "Sodium Polystyrene Sulfonate (Kayexalate) orally"
      },
      {
        "id": "C",
        "text": "Regular Insulin with 50% Dextrose (D50W) IV push"
      },
      {
        "id": "D",
        "text": "Oral Furosemide (Lasix)"
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "CALCIUM GLUCONATE is the FIRST-LINE drug given when hyperkalemia is accompanied by ECG changes (peaked T waves, wide QRS). Calcium does not lower potassium levels, but it immediately STABILIZES the myocardial membrane potential, raising the threshold potential and preventing ventricular fibrillation and asystole. After calcium stabilizes the heart, insulin + dextrose is given to shift K+ intracellularly, and hemodialysis or Kayexalate removes K+ from the body.",
      "distractorBreakdown": {
        "B": "Kayexalate takes 2 to 4 hours to work via ion exchange in the gut; in acute severe hyperkalemia with ECG changes, the patient will arrest before Kayexalate takes effect.",
        "C": "Regular Insulin with D50 shifts K+ into cells, but does not provide immediate membrane protection. Calcium must be given first.",
        "D": "In Stage 5 CKD (ESRD), kidneys are non-functional; loop diuretics like Furosemide will not induce diuresis or potassium excretion."
      },
      "clinicalPearl": "Hyperkalemia Emergency Sequence: (1) STABILIZE the heart = Calcium Gluconate IV (STAT), (2) SHIFT potassium into cells = Regular Insulin IV + D50W, nebulized Albuterol, NaHCO3, (3) ELIMINATE potassium = Hemodialysis (fastest), Kayexalate, or Loop Diuretics.",
      "tosCompetency": "Renal and Critical Care Nursing: Life-Threatening Electrolyte Emergencies",
      "reference": "Brunner & Suddarth's Textbook of Medical-Surgical Nursing (15th Ed.)"
    }
  },
  {
    "id": "np3-021",
    "area": "NP III",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part A)",
    "topic": "Diabetes Mellitus: Dawn Phenomenon vs Somogyi Effect",
    "subtopic": "3:00 AM Blood Glucose Differentiation",
    "vignette": "A 26-year-old client with Type 1 Diabetes reports consistently high fasting blood glucose readings (220-250 mg/dL) upon waking at 7:00 AM. The nurse instructs the client to set an alarm and check blood glucose at 3:00 AM. The 3:00 AM reading is 52 mg/dL (hypoglycemic).",
    "question": "How should the nurse interpret this glycemic pattern, and what is the appropriate clinical intervention?",
    "options": [
      {
        "id": "A",
        "text": "Somogyi Effect; decrease evening bedtime insulin or add a bedtime protein/carbohydrate snack."
      },
      {
        "id": "B",
        "text": "Dawn Phenomenon; increase the evening intermediate-acting insulin dose."
      },
      {
        "id": "C",
        "text": "Diabetic Ketoacidosis; start continuous regular insulin infusion immediately."
      },
      {
        "id": "D",
        "text": "Hyperosmolar Hyperglycemic State; instruct the patient to fast after 6:00 PM."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "The SOMOGYI EFFECT is characterized by nocturnal hypoglycemia (around 2-3 AM) followed by rebound morning hyperglycemia due to the surge of counter-regulatory hormones (epinephrine, cortisol, glucagon, growth hormone). Management involves PREVENTING the 3:00 AM hypoglycemia by decreasing nighttime insulin or providing a bedtime protein snack. Conversely, if 3 AM glucose is elevated or normal, it is DAWN PHENOMENON (requiring increased evening insulin).",
      "distractorBreakdown": {
        "B": "In Dawn Phenomenon, the 3 AM blood glucose is normal or elevated, requiring increased insulin. Increasing insulin in Somogyi effect would worsen nocturnal hypoglycemia and could be fatal.",
        "C": "DKA features ketosis, acidemia, and dehydration; this is an ambulatory insulin adjustment dilemma.",
        "D": "Fasting after 6 PM will worsen nocturnal hypoglycemia."
      },
      "clinicalPearl": "Dawn vs Somogyi Rule of Thumb: Test blood glucose at 3:00 AM! If 3 AM glucose is LOW (<70 mg/dL) = SOMOGYI EFFECT (Somogyi = 'So Much Insulin!'). If 3 AM glucose is HIGH (>100 mg/dL) = DAWN PHENOMENON (Dawn = 'Down on Insulin!').",
      "tosCompetency": "Endocrine Disorders: Advanced Insulin Pharmacology and Glycemic Control",
      "reference": "American Diabetes Association (ADA) Standards of Care 2024"
    }
  },
  {
    "id": "np3-022",
    "area": "NP III",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part A)",
    "topic": "Peripheral Vascular Disease: Arterial vs Venous",
    "subtopic": "Clinical Signs & Leg Positioning Protocols",
    "vignette": "A 62-year-old smoker presents with severe leg pain in the calves when walking two blocks (intermittent claudication), which resolves with rest. Physical assessment reveals hairless, cool lower extremities with shiny taut skin, thickened toenails, weak pedal pulses, and pale elevation with dependent deep red rubor.",
    "question": "Which disease process and positioning guideline corresponds to this client's nursing care plan?",
    "options": [
      {
        "id": "A",
        "text": "Peripheral Arterial Disease (PAD); position legs in a dependent (dangling) position below heart level to facilitate gravity-assisted arterial perfusion."
      },
      {
        "id": "B",
        "text": "Chronic Venous Insufficiency (CVI); elevate legs above heart level for 30 minutes 4 times daily."
      },
      {
        "id": "C",
        "text": "Deep Vein Thrombosis (DVT); apply warm moist packs and massage calves vigorously."
      },
      {
        "id": "D",
        "text": "Raynaud's Disease; immerse feet in ice baths twice daily."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Intermittent claudication, dependent rubor, elevation pallor, hairless cool extremities, and weak pedal pulses are classic signs of PERIPHERAL ARTERIAL DISEASE (PAD). In PAD, arterial blood flow to tissues is compromised; positioning the legs DEPENDENT (dangling down) uses gravity to enhance blood delivery to ischemic distal tissues. Elevating legs in PAD worsens ischemia and pain.",
      "distractorBreakdown": {
        "B": "Elevation above heart level is indicated for Chronic Venous Insufficiency (CVI) to promote venous return and reduce edema, but worsens arterial starvation.",
        "C": "Massaging calves in suspected DVT dislodges the thrombus, causing a fatal pulmonary embolism.",
        "D": "Cold exposure causes severe vasospasm in Raynaud's and further tissue necrosis in PAD."
      },
      "clinicalPearl": "PVD Positioning Memory Hack: (1) A in PAD = Arterial -> Hang the legs down like the legs of the letter 'A'! (Dangle for arterial flow). (2) V in PVD = Venous -> Elevate the legs in the shape of a 'V'! (Elevate for venous return).",
      "tosCompetency": "Cardiovascular and Peripheral Vascular Nursing Interventions",
      "reference": "Brunner & Suddarth's Textbook of Medical-Surgical Nursing (15th Ed.)"
    }
  },
  {
    "id": "np3-023",
    "area": "NP III",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part A)",
    "topic": "Cerebrovascular Accident (Stroke) Care",
    "subtopic": "tPA Eligibility Window and Stroke Positioning",
    "vignette": "A 58-year-old male is rushed to the emergency department with sudden-onset right-sided hemiplegia and expressive aphasia that started 75 minutes ago. The emergency physician is considering intravenous tissue plasminogen activator (Alteplase / IV tPA).",
    "question": "What is the nurse's immediate diagnostic priority before any fibrinolytic therapy can be safely administered?",
    "options": [
      {
        "id": "A",
        "text": "Obtain an emergency non-contrast head CT scan to rule out intracranial hemorrhage."
      },
      {
        "id": "B",
        "text": "Insert a 16-Fr indwelling urinary catheter and start a heparin drip."
      },
      {
        "id": "C",
        "text": "Administer 325 mg Aspirin orally to prevent further clot propagation."
      },
      {
        "id": "D",
        "text": "Perform a lumbar puncture to analyze cerebrospinal fluid pressure."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "The supreme priority in acute stroke is an immediate NON-CONTRAST HEAD CT SCAN. Fibrinolytic therapy (tPA / Alteplase) is indicated strictly for acute ISCHEMIC stroke within 3 to 4.5 hours of symptom onset. Administering tPA to a patient with an unsuspected hemorrhagic stroke or intracranial bleed is uniformly fatal.",
      "distractorBreakdown": {
        "B": "Invasive lines (catheters, arterial lines) must be placed with extreme caution, but ruling out hemorrhage via CT is the primary gating step.",
        "C": "Aspirin and antiplatelets are withheld for at least 24 hours post-tPA to avoid secondary intracranial bleeding.",
        "D": "Lumbar puncture in suspected stroke with mass effect can trigger fatal uncal brain herniation."
      },
      "clinicalPearl": "Acute Stroke Golden Rules: (1) TIME IS BRAIN: tPA window = within 3 to 4.5 hours of symptom onset. (2) Rule out bleed first: STAT Non-contrast CT Head. (3) Blood pressure must be <185/110 mmHg before tPA. (4) No invasive sticks for 24h post-tPA!",
      "tosCompetency": "Neurological Nursing: Acute Stroke Management and Thrombolysis Protocols",
      "reference": "American Heart Association / American Stroke Association (AHA/ASA) Guidelines 2024"
    }
  },
  {
    "id": "np3-024",
    "area": "NP III",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part A)",
    "topic": "Spinal Cord Injury: Autonomic Dysreflexia",
    "subtopic": "Recognition, Triggers, and Emergency Nursing Steps",
    "vignette": "A 24-year-old male with a T4 complete spinal cord injury suddenly complains of a severe, throbbing headache. The nurse notices the client's face and neck are profusely sweating and flushed, while his legs are pale and cool. Blood pressure is 210/115 mmHg and pulse is 48 bpm (bradycardia).",
    "question": "What is the nurse's immediate sequence of priority emergency actions?",
    "options": [
      {
        "id": "A",
        "text": "Elevate the head of bed to 90 degrees (high Fowler's), immediately check for a distended bladder / kinked catheter, and loosen constrictive clothing."
      },
      {
        "id": "B",
        "text": "Place the client in Trendelenburg position to improve cerebral blood flow."
      },
      {
        "id": "C",
        "text": "Administer IV Epinephrine to reverse the severe bradycardia."
      },
      {
        "id": "D",
        "text": "Perform a digital rectal exam immediately without anesthetic lubricant."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "This patient is experiencing AUTONOMIC DYSREFLEXIA (hyperreflexia), a life-threatening hypertensive emergency occurring in injuries at or above T6. Massive uninhibited sympathetic discharge below the lesion triggers severe hypertension and cutaneous pallor, while baroreceptors trigger compensatory parasympathetic bradycardia and facial flushing above the lesion. Priority steps: (1) SIT PATIENT UP (high Fowler's) to lower BP orthostatically, (2) Remove noxious stimulus: check bladder distention/kinked catheter (#1 cause), check bowel impaction, remove tight clothes.",
      "distractorBreakdown": {
        "B": "Trendelenburg position increases cerebral venous congestion and will precipitate a catastrophic hemorrhagic stroke or seizure.",
        "C": "Epinephrine will elevate the BP further, causing immediate death.",
        "D": "Digital rectal exams without topical lidocaine will act as another intense noxious stimulus, aggravating the crisis."
      },
      "clinicalPearl": "Autonomic Dysreflexia Action Sequence: (1) Sit client UP! (High Fowler's). (2) Loosen tight clothing. (3) Check Foley catheter for kinks or distended bladder. (4) Check for fecal impaction. (5) Monitor BP every 2-5 minutes; give antihypertensive if stimulus not found.",
      "tosCompetency": "Neurological Critical Care: Spinal Cord Injury Complications",
      "reference": "Brunner & Suddarth's Textbook of Medical-Surgical Nursing (15th Ed.)"
    }
  },
  {
    "id": "np3-025",
    "area": "NP III",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part A)",
    "topic": "Cardiac Glycosides: Digoxin Safety",
    "subtopic": "Apical Pulse, Toxicity Signs, and Hypokalemia",
    "vignette": "A 71-year-old female taking Digoxin 0.25 mg daily and Furosemide 40 mg daily for congestive heart failure is admitted with nausea, anorexia, and blurred vision with yellowish-green halos around lights. Her apical pulse is 50 bpm and irregular. Serum Potassium is 3.1 mEq/L.",
    "question": "What should the nurse do first?",
    "options": [
      {
        "id": "A",
        "text": "Hold the Digoxin dose, notify the physician immediately, and request a STAT serum Digoxin and Potassium level."
      },
      {
        "id": "B",
        "text": "Administer the scheduled Digoxin with a glass of orange juice to correct the potassium deficit."
      },
      {
        "id": "C",
        "text": "Administer an extra dose of Furosemide to clear the yellow visual halos."
      },
      {
        "id": "D",
        "text": "Reassure the patient that seeing green-yellow halos is a benign ocular adaptation to aging."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Anorexia, nausea/vomiting, bradycardia (<60 bpm), and visual disturbances (yellow-green halos, photophobia) are classic signs of DIGOXIN TOXICITY (therapeutic range: 0.5 - 2.0 ng/mL). Furthermore, HYPOKALEMIA (potassium 3.1 mEq/L, often caused by loop diuretics like Furosemide) potentiates digoxin binding to the Na+/K+ ATPase pump, dramatically increasing toxicity risk even at normal drug levels. The dose must be held immediately.",
      "distractorBreakdown": {
        "B": "Giving Digoxin to a bradycardic, toxic patient with severe hypokalemia can trigger fatal ventricular arrhythmias.",
        "C": "Furosemide depletes potassium further, worsening digoxin toxicity.",
        "D": "Yellow halos are the hallmark clinical presentation of digitalis toxicity (xanthopsia), never a normal aging process."
      },
      "clinicalPearl": "Digoxin Rules: (1) Count apical pulse for 1 full minute; HOLD if <60 bpm in adults (<70 in children, <90 in infants). (2) Therapeutic range = 0.5 to 2.0 ng/mL. (3) Low Potassium = HIGH Digoxin Toxicity risk! Antidote: Digoxin Immune Fab (DigiFab).",
      "tosCompetency": "Pharmacological Safety: Cardiac Glycosides and Electrolyte Monitoring",
      "reference": "Davis's Drug Guide for Nurses (18th Ed.); Medical-Surgical Nursing (Ignatavicius)"
    }
  },
  {
    "id": "np4-016",
    "area": "NP IV",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part B)",
    "topic": "Traumatic Brain Injury & Increased Intracranial Pressure (ICP)",
    "subtopic": "Cushing's Triad & Mannitol Administration",
    "vignette": "A 29-year-old motor vehicle crash victim with a closed head injury has an intracranial pressure (ICP) monitor in place. The baseline ICP is 26 mmHg (normal: 5-15 mmHg). On neurological assessment, his blood pressure has widened from 130/80 to 185/60 mmHg, heart rate has dropped from 76 to 48 bpm, and his breathing pattern is irregular and Cheyne-Stokes.",
    "question": "What is the clinical significance of this triad of signs, and what is the nurse's immediate priority intervention?",
    "options": [
      {
        "id": "A",
        "text": "Cushing's Triad indicating impending brainstem herniation; administer IV Mannitol as ordered, elevate head of bed 30 degrees, and avoid neck flexion."
      },
      {
        "id": "B",
        "text": "Neurogenic shock; administer rapid IV fluid boluses and place patient in Trendelenburg position."
      },
      {
        "id": "C",
        "text": "Autonomic dysreflexia; catheterize the patient and administer hydralazine IV."
      },
      {
        "id": "D",
        "text": "Normal intracranial compensation; maintain flat supine position and recheck in 2 hours."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Cushing's Triad\u2014(1) Systolic hypertension with widening pulse pressure, (2) Bradycardia, and (3) Irregular respirations\u2014is a late and ominous sign of severe Increased ICP indicating impending uncal/brainstem herniation. Priority nursing actions: administer osmotic diuretic (Mannitol 20% or hypertonic saline), elevate HOB 30 degrees (promotes venous drainage), keep head and neck in neutral alignment (no flexion/rotation), and avoid hypercapnia (keep PaCO2 35-40 mmHg).",
      "distractorBreakdown": {
        "B": "Neurogenic shock presents with HYPOTENSION and bradycardia, not widening systolic hypertension.",
        "C": "Autonomic dysreflexia occurs with T6 or higher spinal cord injuries, not isolated closed head injury with high ICP.",
        "D": "Elevated ICP >20 with Cushing's triad will cause brain death within minutes if untreated; keeping the head flat impedes jugular venous outflow and elevates ICP further."
      },
      "clinicalPearl": "Cushing's Triad vs Shock: Shock = Low BP, Tachycardia, Tachypnea. Cushing's Triad (High ICP) = HIGH Systolic BP (wide pulse pressure), BRADYCARDIA, IRREGULAR Respirations! Opposite of shock!",
      "tosCompetency": "Neurological Critical Care: ICP Monitoring and Brain Herniation Prevention",
      "reference": "Brunner & Suddarth's Textbook of Medical-Surgical Nursing (15th Ed.)"
    }
  },
  {
    "id": "np4-017",
    "area": "NP IV",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part B)",
    "topic": "Severe Burn Resuscitation: Parkland Formula",
    "subtopic": "Fluid Resuscitation Timing & Urine Output Gating",
    "vignette": "A 70-kg factory worker suffers deep partial-thickness burns to his entire anterior torso (18%) and both entire arms (9% + 9% = 18%), totaling 36% TBSA. The burn occurred at 8:00 AM, and he arrives in the emergency department at 10:00 AM.",
    "question": "Using the Parkland Formula (4 mL x kg x %TBSA), how much Lactated Ringer's solution must be administered between 10:00 AM and 4:00 PM (the remaining 6 hours of the first 8-hour window)?",
    "options": [
      {
        "id": "A",
        "text": "5,040 mL"
      },
      {
        "id": "B",
        "text": "10,080 mL"
      },
      {
        "id": "C",
        "text": "2,520 mL"
      },
      {
        "id": "D",
        "text": "1,260 mL"
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Total 24-hr fluid = 4 mL x 70 kg x 36% = 10,080 mL. According to the Parkland Formula, HALF of the total (5,040 mL) must be administered within the FIRST 8 HOURS FROM THE TIME OF INJURY (8:00 AM to 4:00 PM). Because the patient arrived at 10:00 AM (2 hours post-burn) with no fluids given, the entire 5,040 mL must be infused over the remaining 6 hours.",
      "distractorBreakdown": {
        "B": "10,080 mL is the total 24-hour requirement, not the first 8 hours.",
        "C": "2,520 mL is one-quarter of the total fluid requirement.",
        "D": "1,260 mL represents severe under-resuscitation that will lead to burn shock and acute renal failure."
      },
      "clinicalPearl": "Parkland Formula Rules: Total 24h = 4 mL x kg x %TBSA. Give 50% in first 8 hours FROM THE TIME OF BURN (not hospital arrival!), remaining 50% over the next 16 hours. Best indicator of fluid adequacy = Urine Output (0.5 to 1.0 mL/kg/hr in adults, or 30-50 mL/hr).",
      "tosCompetency": "Critical Care: Burn Resuscitation Calculations and Hemodynamic Endpoints",
      "reference": "American Burn Association (ABA) Practice Guidelines; Advanced Burn Life Support (ABLS)"
    }
  },
  {
    "id": "np4-018",
    "area": "NP IV",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part B)",
    "topic": "Diabetic Ketoacidosis (DKA) Management",
    "subtopic": "Fluid Resuscitation, Insulin Infusion, and Potassium Shifts",
    "vignette": "A 19-year-old college student with Type 1 Diabetes is brought to the ICU in a state of somnolence. Laboratory analysis reveals blood glucose 580 mg/dL, arterial pH 7.15, HCO3 10 mEq/L, serum Potassium 4.8 mEq/L, and positive urine ketones. The client exhibits rapid, deep breathing (Kussmaul respirations) with a fruity breath odor.",
    "question": "When intravenous Regular Insulin is initiated to correct the hyperglycemia and ketoacidosis, which electrolyte must the nurse monitor with extreme vigilance to prevent sudden cardiac arrest?",
    "options": [
      {
        "id": "A",
        "text": "Potassium (risk of precipitous hypokalemia as insulin drives potassium into cells)."
      },
      {
        "id": "B",
        "text": "Calcium (risk of severe hypercalcemia)."
      },
      {
        "id": "C",
        "text": "Magnesium (risk of acute hypermagnesemic coma)."
      },
      {
        "id": "D",
        "text": "Sodium (risk of hyponatremic encephalopathy)."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Insulin drives both glucose and POTASSIUM from the extracellular fluid into the intracellular compartment. In DKA, total body potassium is severely depleted due to osmotic diuresis, even if initial serum K+ appears normal or high (due to acidosis). Once IV regular insulin and fluids are started, serum potassium can drop precipitously, causing fatal cardiac dysrhythmias (ventricular fibrillation/asystole). Potassium replacement must be added to IV fluids once K+ drops below 5.0 mEq/L.",
      "distractorBreakdown": {
        "B": "Calcium fluctuations in DKA are minimal compared to the life-threatening potassium shifts.",
        "C": "Hypermagnesemia is not an acute complication of insulin therapy.",
        "D": "Pseudohyponatremia occurs initially due to osmotic fluid shifts from hyperglycemia, but corrects as blood glucose normalizes."
      },
      "clinicalPearl": "DKA Golden Clinical Rule: NEVER administer insulin if serum Potassium is <3.3 mEq/L! Correct hypokalemia first. When blood glucose reaches 250 mg/dL, add 5% DEXTROSE to IV fluids to prevent hypoglycemia and cerebral edema while continuing insulin to clear ketones!",
      "tosCompetency": "Endocrine Critical Care: Acid-Base Correction and Insulin Protocols",
      "reference": "American Diabetes Association (ADA) Clinical Guidelines; Medical-Surgical Nursing (Ignatavicius)"
    }
  },
  {
    "id": "np4-019",
    "area": "NP IV",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part B)",
    "topic": "Massive Blood Transfusion & Hemolytic Reactions",
    "subtopic": "Acute Hemolytic Reaction Signs & Emergency Steps",
    "vignette": "Ten minutes after the nurse initiates a transfusion of Packed Red Blood Cells (PRBCs) for a patient with upper GI bleeding, the client complains of severe flank and lower back pain, chills, dyspnea, and a sense of impending doom. The cardiac monitor shows heart rate 124 bpm and blood pressure 86/50 mmHg.",
    "question": "What is the nurse's immediate priority action?",
    "options": [
      {
        "id": "A",
        "text": "Immediately STOP the transfusion, disconnect the blood tubing from the IV catheter, and flush the line with 0.9% normal saline using entirely new tubing."
      },
      {
        "id": "B",
        "text": "Slow the infusion rate to 20 drops per minute and administer acetaminophen orally."
      },
      {
        "id": "C",
        "text": "Run the remaining blood rapidly under pressure to complete the unit before it clots."
      },
      {
        "id": "D",
        "text": "Administer IV diphenhydramine through the blood transfusion Y-tubing."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Low back/flank pain, chills, hypotension, and tachycardia within the first 15 minutes of blood transfusion indicate an ACUTE HEMOLYTIC TRANSFUSION REACTION (ABO incompatibility). The donor RBCs are undergoing rapid intravascular destruction. The nurse must STOP THE TRANSFUSION IMMEDIATELY, disconnect the tubing at the catheter hub to prevent infusing residual blood in the line, and maintain IV access with 0.9% Normal Saline using fresh tubing. The blood bag and tubing must be sent to the blood bank.",
      "distractorBreakdown": {
        "B": "Slowing the infusion in a hemolytic reaction is fatal; continued antigen-antibody destruction causes disseminated intravascular coagulation (DIC) and acute tubular necrosis.",
        "C": "Infusing incompatible blood under pressure will cause irreversible shock and death.",
        "D": "Medications must never be infused through blood tubing; diphenhydramine treats minor allergic reactions (hives), not acute hemolytic lysis."
      },
      "clinicalPearl": "Blood Transfusion Reaction Protocol: (1) STOP the blood immediately! (2) Disconnect tubing at IV hub (do not flush remaining blood in the line). (3) Infuse Normal Saline with NEW tubing. (4) Notify MD & Blood Bank. (5) Send blood bag, tubing, and fresh urine/blood samples to lab to check for hemoglobinuria.",
      "tosCompetency": "Hematology Critical Care: Transfusion Safety and Anaphylaxis/Hemolysis Triage",
      "reference": "American Association of Blood Banks (AABB) Standards; Brunner & Suddarth"
    }
  },
  {
    "id": "np4-020",
    "area": "NP IV",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part B)",
    "topic": "Mechanical Ventilation: High vs Low Pressure Alarms",
    "subtopic": "Troubleshooting Alarms & Patient Advocacy",
    "vignette": "An intubated, mechanically ventilated patient in the ICU triggers a continuous HIGH-PRESSURE ALARM on the ventilator. The nurse notes the patient is coughing vigorously and attempting to bite the endotracheal tube, with audible rhonchi over the mainstem bronchi.",
    "question": "Which set of nursing interventions addresses the root cause of this high-pressure alarm?",
    "options": [
      {
        "id": "A",
        "text": "Insert an oral bite block, perform inline endotracheal suctioning, and check tubing for kinks or water condensation."
      },
      {
        "id": "B",
        "text": "Check for ventilator circuit disconnection and inflate the endotracheal tube cuff with extra air."
      },
      {
        "id": "C",
        "text": "Immediately extubate the patient and initiate bag-valve-mask ventilation."
      },
      {
        "id": "D",
        "text": "Silence the alarm permanently and turn off the humidifier."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "HIGH-PRESSURE ALARMS are triggered when peak airway resistance exceeds preset safety limits. Common causes: secretions in airway (suction indicated), patient biting the tube (bite block indicated), tubing kinks, water condensation in tubing, coughing, bronchospasm, or tension pneumothorax. LOW-PRESSURE ALARMS are caused by leaks or circuit disconnections.",
      "distractorBreakdown": {
        "B": "Circuit disconnections and cuff leaks cause LOW-PRESSURE ALARMS, not high-pressure alarms.",
        "C": "Unplanned emergency extubation is dangerous; addressing the obstruction (suction, bite block) resolves the alarm.",
        "D": "Silencing alarms without resolving the underlying cause leads to hypoxia and asphyxiation."
      },
      "clinicalPearl": "Ventilator Alarm Rules: HIGH PRESSURE = OBSTRUCTION (Biting tube, Secretions, Kinked tubing, Bronchospasm, Coughing, Pneumothorax). LOW PRESSURE = DISCONNECTION or LEAK (Tubing disconnected, Cuff deflated/leaking). If cannot resolve alarm quickly = DISCONNECT & BAG THE PATIENT WITH 100% O2!",
      "tosCompetency": "Critical Care Respiratory Nursing: Mechanical Ventilation and Airway Patency",
      "reference": "AACN Core Curriculum for High Acuity, Progressive, and Critical Care Nursing"
    }
  },
  {
    "id": "np4-021",
    "area": "NP IV",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part B)",
    "topic": "Arterial Blood Gas (ABG) Interpretation",
    "subtopic": "ROME Method & Respiratory Acidosis with Compensation",
    "vignette": "A 64-year-old male with severe emphysema (COPD) is admitted with acute shortness of breath and drowsiness. His arterial blood gas (ABG) results are: pH 7.32, PaCO2 58 mmHg, HCO3 30 mEq/L, PaO2 62 mmHg.",
    "question": "How should the nurse interpret these ABG values?",
    "options": [
      {
        "id": "A",
        "text": "Partially Compensated Respiratory Acidosis with moderate hypoxemia"
      },
      {
        "id": "B",
        "text": "Uncompensated Metabolic Alkalosis"
      },
      {
        "id": "C",
        "text": "Fully Compensated Respiratory Alkalosis"
      },
      {
        "id": "D",
        "text": "Mixed Metabolic and Respiratory Acidosis"
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "(1) pH is 7.32 (normal: 7.35-7.45) -> Acidosis. (2) PaCO2 is 58 mmHg (normal: 35-45) -> Respiratory cause (elevated acid). (3) HCO3 is 30 mEq/L (normal: 22-26) -> Kidneys are retaining bicarbonate to compensate. Because the pH has NOT yet returned to the normal range, it is PARTIALLY COMPENSATED RESPIRATORY ACIDOSIS. PaO2 62 mmHg reflects moderate hypoxemia.",
      "distractorBreakdown": {
        "B": "In metabolic alkalosis, pH would be >7.45 and driven by primary high HCO3.",
        "C": "Full compensation requires the pH to be within the normal reference range (7.35-7.45).",
        "D": "In mixed acidosis, both PaCO2 would be high and HCO3 would be low, driving pH extremely low."
      },
      "clinicalPearl": "ROME Mnemonic for ABGs: Respiratory Opposite (pH and PaCO2 move in opposite directions), Metabolic Equal (pH and HCO3 move in the same direction). Compensation Guide: If pH is abnormal and opposite value is abnormal = PARTIALLY compensated. If pH is normal = FULLY compensated. If opposite value is normal = UNCOMPENSATED.",
      "tosCompetency": "Acid-Base Balance, Diagnostic Laboratory Telemetry, and Arterial Blood Gases",
      "reference": "Brunner & Suddarth's Textbook of Medical-Surgical Nursing (15th Ed.)"
    }
  },
  {
    "id": "np4-022",
    "area": "NP IV",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part B)",
    "topic": "Shock Syndromes: Cardiogenic vs Anaphylactic",
    "subtopic": "Hemodynamic Profiles and First-Line Drug of Choice",
    "vignette": "A 34-year-old female receiving an intravenous cephalosporin infusion suddenly develops diffuse urticaria, stridor, wheezing, and facial angioedema. Her blood pressure drops to 78/40 mmHg and heart rate increases to 132 bpm.",
    "question": "What is the nurse's first-line drug of choice, route, and immediate nursing action?",
    "options": [
      {
        "id": "A",
        "text": "Administer Epinephrine 1:1,000 (0.3 to 0.5 mg) INTRAMUSCULARLY into the vastus lateralis, stop the antibiotic infusion, and apply high-flow oxygen."
      },
      {
        "id": "B",
        "text": "Administer oral Diphenhydramine 50 mg with sips of water."
      },
      {
        "id": "C",
        "text": "Infuse Dopamine at 20 mcg/kg/min via peripheral line."
      },
      {
        "id": "D",
        "text": "Administer IV Furosemide to reduce laryngeal edema."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "The drug of choice for ANAPHYLACTIC SHOCK is EPINEPHRINE administered INTRAMUSCULARLY (IM) into the vastus lateralis (anterolateral thigh) at 1:1,000 concentration (0.3-0.5 mg in adults). Epinephrine acts as a potent alpha-1 agonist (vasoconstriction, raises BP), beta-1 agonist (increases cardiac output), and beta-2 agonist (bronchodilation, inhibits mast cell mediator release). The triggering IV antibiotic must be stopped immediately.",
      "distractorBreakdown": {
        "B": "Oral antihistamines have a delayed onset of 1-2 hours and cannot be swallowed during severe laryngeal edema and impending airway closure.",
        "C": "Dopamine lacks beta-2 bronchodilating properties and is not the first-line drug for anaphylaxis.",
        "D": "Furosemide is a loop diuretic that will deplete circulating volume in an already hypotensive, vasodilated shock patient."
      },
      "clinicalPearl": "Anaphylaxis First-Line Rule: EPINEPHRINE IM into the THIGH is #1! Antihistamines (Diphenhydramine) and Corticosteroids (Hydrocortisone/Methylprednisolone) are SECOND-LINE adjuncts that do not reverse acute airway bronchospasm or vascular collapse.",
      "tosCompetency": "Emergency Pharmacotherapy: Anaphylaxis and Resuscitation Protocols",
      "reference": "World Allergy Organization (WAO) Anaphylaxis Guidelines; AHA ACLS Protocols"
    }
  },
  {
    "id": "np4-023",
    "area": "NP IV",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part B)",
    "topic": "Acute Coronary Syndrome (ACS): STEMI",
    "subtopic": "MONA Protocol & Cardiac Biomarkers",
    "vignette": "A 56-year-old diabetic male arrives in the emergency department with severe, crushing substernal chest pressure radiating to his left jaw and shoulder that began 45 minutes ago. The 12-lead ECG reveals 3-mm ST-segment elevation in leads II, III, and aVF (inferior wall STEMI).",
    "question": "Which diagnostic cardiac biomarker is the most specific and sensitive indicator of acute myocardial necrosis?",
    "options": [
      {
        "id": "A",
        "text": "Cardiac Troponin I (cTnI)"
      },
      {
        "id": "B",
        "text": "Creatine Kinase-MB (CK-MB)"
      },
      {
        "id": "C",
        "text": "Myoglobin"
      },
      {
        "id": "D",
        "text": "Lactate Dehydrogenase (LDH)"
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "CARDIAC TROPONIN I (and Troponin T) is the gold standard biomarker for myocardial infarction due to its extraordinary cardiac specificity and prolonged detection window (rises within 2-4 hours, peaks at 24 hours, and remains elevated for 10 to 14 days).",
      "distractorBreakdown": {
        "B": "CK-MB is useful for detecting re-infarction because it returns to baseline in 48-72 hours, but is less sensitive and specific than Troponins.",
        "C": "Myoglobin rises fastest (within 1-2 hours), but lacks cardiac specificity (elevated in any skeletal muscle injury).",
        "D": "LDH is an obsolete, non-specific biomarker that has been replaced by cardiac troponins in modern clinical practice."
      },
      "clinicalPearl": "Cardiac Biomarker Timeline: (1) Myoglobin = Rises first (1-2h), leaves first (24h), non-specific. (2) CK-MB = Rises in 4-6h, peaks in 24h, gone in 3 days (best for re-infarction). (3) TROPONIN = Gold standard! Highly specific, stays elevated for up to 2 weeks!",
      "tosCompetency": "Cardiovascular Critical Care: Myocardial Infarction Biomarkers and ECG Triage",
      "reference": "ACC/AHA Guidelines for the Management of Acute Coronary Syndromes"
    }
  },
  {
    "id": "np4-024",
    "area": "NP IV",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part B)",
    "topic": "Endocrine Emergencies: Thyroid Storm vs Myxedema Coma",
    "subtopic": "Hyperpyrexia Management & Contraindicated Antipyretics",
    "vignette": "A 38-year-old woman with Graves' disease undergoes urgent appendectomy. In the post-anesthesia care unit, she develops extreme agitation, delirium, heart rate of 168 bpm (atrial fibrillation), and a spiking temperature of 41.0\u00b0C (105.8\u00b0F). The endocrinologist diagnoses Thyroid Storm (Thyrotoxic Crisis).",
    "question": "Which antipyretic medication is strictly CONTRAINDICATED in the management of hyperpyrexia during Thyroid Storm?",
    "options": [
      {
        "id": "A",
        "text": "Aspirin (Acetylsalicylic Acid)"
      },
      {
        "id": "B",
        "text": "Acetaminophen (Paracetamol)"
      },
      {
        "id": "C",
        "text": "Propylthiouracil (PTU)"
      },
      {
        "id": "D",
        "text": "Propranolol"
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "ASPIRIN is strictly CONTRAINDICATED in thyroid storm because salicylates displace thyroid hormones (T3 and T4) from their binding proteins (thyroid-binding globulin / TBG), dramatically increasing circulating levels of FREE, ACTIVE thyroid hormones and catastrophically exacerbating the thyrotoxic crisis. Acetaminophen (Paracetamol) and cooling blankets are the antipyretics of choice.",
      "distractorBreakdown": {
        "B": "Acetaminophen is the safe and preferred antipyretic because it does not displace thyroid hormones from protein carriers.",
        "C": "Propylthiouracil (PTU) is a primary treatment of choice that inhibits new thyroid hormone synthesis and blocks peripheral conversion of T4 to T3.",
        "D": "Propranolol is a beta-blocker administered to control severe tachycardia and peripheral adrenergic hyperactivity."
      },
      "clinicalPearl": "Thyroid Storm Board Trap: NEVER give ASPIRIN for fever in Thyroid Storm! Aspirin displaces T3/T4 from proteins, worsening the storm! Use ACETAMINOPHEN + Cooling blankets + Propylthiouracil (PTU) + Beta-blockers + Potassium Iodide (SSKI).",
      "tosCompetency": "Endocrine Critical Care: Thyrotoxic Crisis and Pharmacological Contraindications",
      "reference": "American Thyroid Association (ATA) Guidelines for Thyrotoxicosis; Brunner & Suddarth"
    }
  },
  {
    "id": "np4-025",
    "area": "NP IV",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part B)",
    "topic": "Emergency Management: Tension Pneumothorax",
    "subtopic": "Tracheal Deviation & Emergency Needle Decompression",
    "vignette": "A construction worker falls from a scaffolding, suffering blunt thoracic trauma. He presents with severe dyspnea, cyanosis, distended neck veins (JVD), absent breath sounds on the entire right side, and hyperresonance to percussion. The trachea is visibly deviated to the LEFT side. Blood pressure is 74/42 mmHg.",
    "question": "What is the life-threatening pathology, and what is the nurse's immediate emergency intervention?",
    "options": [
      {
        "id": "A",
        "text": "Right Tension Pneumothorax; prepare for immediate emergency needle decompression at the 2nd intercostal space midclavicular line (or 4th/5th ICS anterior axillary line)."
      },
      {
        "id": "B",
        "text": "Cardiac Tamponade; prepare for emergency pericardiocentesis."
      },
      {
        "id": "C",
        "text": "Flail Chest; apply tight sandbags over the right chest wall."
      },
      {
        "id": "D",
        "text": "Right massive hemothorax; place the client in Trendelenburg position."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "A one-way valve air leak into the pleural space creates a TENSION PNEUMOTHORAX. Trapped air accumulates under positive pressure, collapsing the ipsilateral lung and shifting the mediastinum and trachea to the CONTRALATERAL (opposite) side. This kinks the inferior vena cava, abolishing venous return and causing obstructive shock. Immediate emergency NEEDLE DECOMPRESSION (14-gauge angiocatheter inserted at 2nd ICS midclavicular line) converts the tension pneumothorax into an open pneumothorax, saving the patient's life before formal chest tube thoracostomy.",
      "distractorBreakdown": {
        "B": "Cardiac tamponade features Beck's Triad (JVD, muffled heart sounds, hypotension), but breath sounds are equal and trachea is midline.",
        "C": "Flail chest features paradoxical chest movement (inward on inspiration, outward on expiration), not tracheal deviation.",
        "D": "Hemothorax presents with DULLNESS to percussion, not hyperresonance, and does not require needle thoracostomy."
      },
      "clinicalPearl": "Tension Pneumothorax Clinical Hallmarks: (1) Trachea deviated to OPPOSITE side, (2) Absent breath sounds & HYPERRESONANCE on affected side, (3) Distended neck veins, (4) Profound hypotension (obstructive shock). STAT ACTION: Needle thoracostomy (2nd ICS MCL)! Do NOT wait for X-ray!",
      "tosCompetency": "Emergency and Trauma Nursing: Obstructive Shock and Needle Thoracostomy",
      "reference": "Advanced Trauma Life Support (ATLS) 10th Ed.; Emergency Nurses Association (ENA)"
    }
  },
  {
    "id": "np5-016",
    "area": "NP V",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part C)",
    "topic": "Philippine Nursing Act of 2002 (RA 9173)",
    "subtopic": "Qualifications of Members of the Board of Nursing",
    "vignette": "A distinguished Chief Nurse with 15 years of continuous clinical experience and a Master's degree in Nursing Administration is nominated to serve as a Member of the Professional Regulatory Board of Nursing (PRC BON).",
    "question": "Under Section 5 of Republic Act No. 9173, which qualification is legally mandated for an appointee to the Board of Nursing?",
    "options": [
      {
        "id": "A",
        "text": "Must be a natural-born citizen of the Philippines, a registered nurse with a Master's degree in nursing, and have at least ten (10) years of continuous practice of the profession."
      },
      {
        "id": "B",
        "text": "Must hold an active doctorate degree in jurisprudence or public administration."
      },
      {
        "id": "C",
        "text": "Must be an active voting officer of a review center or NCLEX preparatory agency."
      },
      {
        "id": "D",
        "text": "Must be at least 65 years of age at the time of appointment by the PRC."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Under RA 9173 Section 5, qualifications for BON members are: (1) Natural-born citizen and resident of the Philippines, (2) Registered Nurse with Master's degree in nursing, education, or allied medical sciences, (3) Member of good standing of the accredited professional organization (PNA), (4) At least ten (10) years of continuous practice of nursing, the last five (5) of which must be in the Philippines, and (5) No pecuniary interest in any nursing school or review center.",
      "distractorBreakdown": {
        "B": "A doctorate in law is not required; a Master's degree (preferably in nursing) is the educational requirement.",
        "C": "Having pecuniary interest in or being an officer of a nursing review center is strictly PROHIBITED under Section 5 to avoid conflict of interest.",
        "D": "There is no minimum age requirement of 65; the focus is on citizenship, experience (10 years), and clean moral/legal record."
      },
      "clinicalPearl": "RA 9173 BON Qualifications: (1) Natural-born Filipino, (2) RN with Master's Degree, (3) 10 years continuous practice (last 5 in PH), (4) PNA member in good standing, (5) NO connection with any review center or school for at least 1 year prior to nomination!",
      "tosCompetency": "Professional Governance: Legal Mandates under RA 9173",
      "reference": "Republic Act No. 9173 (The Philippine Nursing Act of 2002); PRC BON Rules"
    }
  },
  {
    "id": "np5-017",
    "area": "NP V",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part C)",
    "topic": "Nursing Leadership: Principles of Delegation",
    "subtopic": "Five Rights of Delegation & Prohibited UAP Tasks",
    "vignette": "A head nurse in a busy 40-bed medical ward is assigning clinical duties during a morning shift. The team consists of two Registered Nurses (RNs) and two unlicensed Nursing Aides (Unlicensed Assistive Personnel / UAP).",
    "question": "Which of the following tasks is appropriate for the Registered Nurse to delegate to a Nursing Aide?",
    "options": [
      {
        "id": "A",
        "text": "Assisting a stable hemiplegic patient with morning hygiene and recording the volume of urine emptied from a Foley catheter bag."
      },
      {
        "id": "B",
        "text": "Performing the initial comprehensive physical assessment on a newly admitted patient with heart failure."
      },
      {
        "id": "C",
        "text": "Providing discharge instruction regarding self-injection of subcutaneous insulin."
      },
      {
        "id": "D",
        "text": "Evaluating the therapeutic response of a patient 30 minutes after intravenous morphine administration."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Under professional nursing standards and delegation frameworks (The 5 Rights of Delegation: Right Task, Circumstance, Person, Direction/Communication, Supervision), Unlicensed Assistive Personnel (UAP / aides) can perform routine, non-invasive, standardized tasks for STABLE patients\u2014such as ambulation, hygiene, vital signs, and measuring output. Registered Nurses can NEVER delegate Assessment, Clinical Judgment, Teaching/Education, or Evaluation (mnemonic: TAPE).",
      "distractorBreakdown": {
        "B": "Initial nursing assessment requires professional clinical judgment and diagnostic synthesis; it cannot be delegated.",
        "C": "Discharge teaching and medication education are exclusive nursing responsibilities (Teaching).",
        "D": "Evaluating pharmacological outcomes (Evaluation) requires clinical analysis and is non-delegable."
      },
      "clinicalPearl": "Delegation Rule: DO NOT delegate 'TAPE': (T) Teaching / Health Education, (A) Assessment (initial or unstable), (P) Planning / Nursing Diagnosis, (E) Evaluation of care. UAPs perform routine care on STABLE clients!",
      "tosCompetency": "Management and Leadership: Safe Clinical Delegation in Hospital Units",
      "reference": "Code of Ethics for Registered Nurses; NCSBN / ANA Joint Statement on Delegation"
    }
  },
  {
    "id": "np5-018",
    "area": "NP V",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part C)",
    "topic": "Psychiatric Nursing: Suicide Risk Assessment",
    "subtopic": "Lethality of Plan & Patient Protection Protocol",
    "vignette": "A 21-year-old female university student is admitted to the psychiatric inpatient unit following a depressive episode. During the intake interview, she looks down at the floor and whispers, 'Everything would be so much better for my family if I just wasn't around anymore.'",
    "question": "What is the nurse's most therapeutic and immediate response?",
    "options": [
      {
        "id": "A",
        "text": "'Are you having thoughts of killing yourself, and do you have a specific plan on how you would do it?'"
      },
      {
        "id": "B",
        "text": "'You have your whole life ahead of you, so you shouldn't think that way.'"
      },
      {
        "id": "C",
        "text": "'Why do you feel your family would be better off without you?'"
      },
      {
        "id": "D",
        "text": "'Let's focus on positive things today and avoid talking about death.'"
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "When a client drops hints of suicidal ideation, the nurse must ask DIRECT, CLEAR, and UNAMBIGUOUS questions to evaluate suicidal intent, plan, and lethality. Asking directly ('Are you thinking of killing yourself?') does NOT plant the idea in the client's mind; rather, it provides relief, validation, and opens a lifesaving dialogue to initiate immediate 1-on-1 observation.",
      "distractorBreakdown": {
        "B": "False reassurance and minimizing feelings dismisses the client's profound psychic pain and shuts down communication.",
        "C": "Asking 'Why' puts the patient on the defensive and sounds accusatory in therapeutic psychiatric nursing.",
        "D": "Changing the subject or avoiding discussions of death invalidates the patient and leaves life-threatening suicidality unassessed."
      },
      "clinicalPearl": "Suicide Assessment Rule: ALWAYS ask directly: (1) 'Are you having thoughts of killing yourself?' (2) 'Do you have a plan?' (3) 'Do you have access to the means?' Highest risk period: When severe depression lifts and client suddenly appears energetic and cheerful (energy to execute the plan)!",
      "tosCompetency": "Mental Health Nursing: Suicide Lethality Assessment and Patient Protection",
      "reference": "Townsend's Psychiatric Mental Health Nursing (10th Ed.); Kaplan & Sadock"
    }
  },
  {
    "id": "np5-019",
    "area": "NP V",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part C)",
    "topic": "Schizophrenia: Delusions and Hallucinations",
    "subtopic": "Reality Testing & Therapeutic Communication",
    "vignette": "A 30-year-old male diagnosed with Paranoid Schizophrenia cower in the corner of the dayroom. He points to the ceiling corner and shouts, 'Don't you see those snipers with red laser sights? They are going to shoot me through the window!'",
    "question": "Which response by the nurse demonstrates proper reality orientation and therapeutic communication?",
    "options": [
      {
        "id": "A",
        "text": "'I don't see any snipers or laser lights, but I can see how terrified you are right now. You are safe here with me in the clinic.'"
      },
      {
        "id": "B",
        "text": "'You are completely imagining things; there are no snipers in a psychiatric hospital.'"
      },
      {
        "id": "C",
        "text": "'Let's duck under the table so they can't see us through the glass.'"
      },
      {
        "id": "D",
        "text": "'Why do you think government agents are targeting you specifically?'"
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "The therapeutic response to hallucinations or delusions: (1) Acknowledge the client's feelings ('I can see how terrified you are'), (2) State reality gently without arguing or debating ('I don't see any snipers'), and (3) Provide safety and reassurance ('You are safe here'). Never argue with a delusion, and never validate or reinforce false perceptual experiences.",
      "distractorBreakdown": {
        "B": "Bluntly dismissing the patient as 'imagining things' is confrontational, increases agitation, and destroys therapeutic rapport.",
        "C": "Ducking under the table reinforces and validates the psychotic hallucination, intensifying the client's paranoia.",
        "D": "Asking 'Why' and exploring the content of the delusion deepens fixation on psychotic themes."
      },
      "clinicalPearl": "Psychiatric Hallucination Protocol: Validate feelings -> Present reality -> Provide safety. 'I understand that you hear/see that, but I do not hear/see it. You are safe here.' NEVER play along with hallucinations!",
      "tosCompetency": "Psychiatric Nursing: Management of Hallucinations and Delusional States",
      "reference": "Videbeck's Psychiatric-Mental Health Nursing (8th Ed.)"
    }
  },
  {
    "id": "np5-020",
    "area": "NP V",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part C)",
    "topic": "Bipolar Disorder: Acute Mania",
    "subtopic": "Milieu Safety, Nutrition, and Limit Setting",
    "vignette": "A 27-year-old client in an acute manic phase of Bipolar I Disorder has been pacing rapidly around the psychiatric unit for 5 hours without resting. She talks nonstop with pressured speech, flight of ideas, intrusive behavior toward peers, and refuses to sit down for meals.",
    "question": "What is the nurse's priority nursing intervention to preserve physiological stamina and milieu safety?",
    "options": [
      {
        "id": "A",
        "text": "Provide high-calorie, high-protein finger foods and nutrient shakes that the client can consume while pacing, in a low-stimulus environment."
      },
      {
        "id": "B",
        "text": "Lock the client in her bedroom until she agrees to sit at the dining table for 30 minutes."
      },
      {
        "id": "C",
        "text": "Engage the client in a competitive basketball tournament with other patients."
      },
      {
        "id": "D",
        "text": "Insist on an uninterrupted 8-hour group psychotherapy session to address grandiosity."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Manic clients have extreme hyperactivity and poor nutritional intake, placing them at acute risk for severe dehydration, weight loss, and physical exhaustion leading to cardiac collapse. Providing PORTABLE FINGER FOODS (sandwiches, cheese sticks, fruits) and high-protein drinks allows nourishment on the go without requiring sitting. Decreasing environmental stimuli (soft lighting, low noise) prevents behavioral escalation.",
      "distractorBreakdown": {
        "B": "Unwarranted seclusion without clear immediate danger violates patient rights and triggers combative rage.",
        "C": "Competitive games overstimulate the manic patient and frequently precipitate violent altercations.",
        "D": "Manic clients cannot concentrate for prolonged group therapy; grandiosity is not amenable to insight-oriented debate during acute mania."
      },
      "clinicalPearl": "Acute Mania Priority Nursing Care: (1) Safety first: decrease environmental stimuli (single room, dim lights). (2) Nutrition: HIGH-CALORIE FINGER FOODS & frequent fluids on the move. (3) Consistent, firm limit setting with calm, short sentences.",
      "tosCompetency": "Mood Disorders: Mania Interventions and Milieu Management",
      "reference": "Townsend's Essentials of Psychiatric Mental Health Nursing"
    }
  },
  {
    "id": "np5-021",
    "area": "NP V",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part C)",
    "topic": "Alcohol Withdrawal & Delirium Tremens",
    "subtopic": "CIWA Protocol, Benzodiazepines, and Wernicke Prevention",
    "vignette": "A 45-year-old chronic alcoholic is admitted for emergency surgery. Forty-eight hours postoperatively, he becomes severely agitated, tremulous, and diaphoretic. His blood pressure is 175/100 mmHg, pulse is 120 bpm, and he claims insects are crawling on his hospital gown (formication).",
    "question": "Which clinical complication is this patient exhibiting, and what is the primary pharmacological protocol?",
    "options": [
      {
        "id": "A",
        "text": "Alcohol Withdrawal Delirium (Delirium Tremens); administer IV Benzodiazepines (e.g., Diazepam or Lorazepam) and high-dose Thiamine (Vitamin B1)."
      },
      {
        "id": "B",
        "text": "Postoperative Opioid Overdose; administer IV Naloxone (Narcan) immediately."
      },
      {
        "id": "C",
        "text": "Surgical site sepsis; administer broad-spectrum IV Vancomycin."
      },
      {
        "id": "D",
        "text": "Malingering; discharge patient home immediately with oral sedatives."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Delirium Tremens (DTs) is a medical emergency occurring 48 to 72 hours after cessation of heavy alcohol intake. Hallmarks include gross tremors, autonomic hyperactivity (severe hypertension, tachycardia), tactile/visual hallucinations (insects crawling), and agitation. BENZODIAZEPINES (Diazepam, Lorazepam, Chlordiazepoxide) prevent seizures and fatal exhaustion. THIAMINE (Vitamin B1) is mandatory prior to glucose administration to prevent WERNICKE-KORSAKOFF ENCEPHALOPATHY.",
      "distractorBreakdown": {
        "B": "Opioid overdose produces pinpoint pupils, respiratory depression, and bradycardia; this patient has autonomic hyperarousal.",
        "C": "Sepsis produces fever, but tactile hallucinations, tremors, and history of alcohol abuse point directly to DTs.",
        "D": "DTs carries up to a 15% mortality rate if untreated; labeling the patient as malingering is gross negligence."
      },
      "clinicalPearl": "Alcohol Withdrawal Golden Rules: (1) Peaks at 24-48 hours; Delirium Tremens peaks at 48-72 hours. (2) Drug of choice: BENZODIAZEPINES (Diazepam/Lorazepam). (3) Always give THIAMINE (Vitamin B1) before IV glucose to prevent irreversible Wernicke's Encephalopathy!",
      "tosCompetency": "Addiction and Substance-Related Emergencies: Detoxification Protocols",
      "reference": "Clinical Institute Withdrawal Assessment for Alcohol (CIWA-Ar); Kaplan & Sadock"
    }
  },
  {
    "id": "np5-022",
    "area": "NP V",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part C)",
    "topic": "Nursing Research: Hierarchy of Evidence & Ethics",
    "subtopic": "Informed Consent & Randomized Controlled Trials",
    "vignette": "A nurse researcher is designing a clinical study to evaluate the effectiveness of a novel honey-based dressing versus standard silver sulfadiazine on healing rates of second-degree burn wounds. Participants are randomly assigned to either the experimental dressing group or the standard control group.",
    "question": "Which research design is the nurse conducting, and which ethical safeguard is legally required before enrollment?",
    "options": [
      {
        "id": "A",
        "text": "True Experimental Design (Randomized Controlled Trial); voluntary written informed consent with full disclosure of potential risks and freedom to withdraw without penalty."
      },
      {
        "id": "B",
        "text": "Quasi-Experimental Design; institutional permission without individual participant consent."
      },
      {
        "id": "C",
        "text": "Descriptive Phenomenological Design; retroactive verbal assent after healing is complete."
      },
      {
        "id": "D",
        "text": "Correlational Survey; mandatory hospital patient agreement as a condition of receiving burn care."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "A study with an intervention (manipulation), a control group, and RANDOM ASSIGNMENT represents a TRUE EXPERIMENTAL DESIGN (Randomized Controlled Trial / RCT), the gold standard in quantitative nursing research. Ethical guidelines (Belmont Report, Helsinki Declaration, Philippine Health Research Ethics Board / PHREB) strictly mandate VOLUNTARY WRITTEN INFORMED CONSENT with full disclosure of risks/benefits and freedom to withdraw at any time without penalty or change in medical care.",
      "distractorBreakdown": {
        "B": "Quasi-experimental designs lack either random assignment or a control group. Individual informed consent is always legally required.",
        "C": "Phenomenology is qualitative and explores lived experiences, not wound healing rates.",
        "D": "Conditioning medical care on research participation constitutes illegal coercion violating the ethical principle of Autonomy."
      },
      "clinicalPearl": "3 Essential Criteria for a TRUE EXPERIMENT: (1) Manipulation (intervention), (2) Control (comparison group), (3) Randomization (random assignment). If missing randomization or control = QUASI-experimental. Ethical core: Voluntary Informed Consent!",
      "tosCompetency": "Research and Evidence-Based Practice: Methodological Rigor and Ethical Governance",
      "reference": "Polit & Beck: Nursing Research: Generating and Assessing Evidence for Nursing Practice (11th Ed.)"
    }
  },
  {
    "id": "np5-023",
    "area": "NP V",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part C)",
    "topic": "Magna Carta of Public Health Workers (RA 7305)",
    "subtopic": "Compensation, Hazard Allowance, and Rights",
    "vignette": "A public health nurse assigned to a contagious disease isolation ward in a government hospital questions the hospital accountant regarding entitlements under Republic Act No. 7305.",
    "question": "Which provision under Republic Act 7305 (Magna Carta of Public Health Workers) is an explicit statutory entitlement for public health nurses exposed to hazardous environmental conditions?",
    "options": [
      {
        "id": "A",
        "text": "Hazard allowance of at least twenty-five percent (25%) of the monthly basic salary for public health workers exposed to dangerous environments or radiation."
      },
      {
        "id": "B",
        "text": "Automatic lifetime immunity from any administrative malpractice litigation."
      },
      {
        "id": "C",
        "text": "Free housing and personal automobiles provided by the municipal government."
      },
      {
        "id": "D",
        "text": "Exemption from mandatory licensure renewal and continuing professional development."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Under RA 7305 Section 21 (Hazard Allowance), public health workers assigned in hospitals or clinics where they are exposed to radiation, contagious diseases, radiation, or difficult terrain are entitled to a HAZARD ALLOWANCE equivalent to at least 25% of their basic salary (for salary grades 19 and below). Other benefits include subsistence allowance, longevity pay, and night shift differential (10%).",
      "distractorBreakdown": {
        "B": "Public health workers remain fully accountable under civil, criminal, and professional tort law; no medical worker has malpractice immunity.",
        "C": "Housing and vehicles are not blanket statutory entitlements under RA 7305.",
        "D": "All registered nurses must comply with PRC regulatory mandates including CPD requirements under RA 10912."
      },
      "clinicalPearl": "RA 7305 (Magna Carta) Key Benefits to Remember: (1) Hazard Allowance (at least 25% for SG 19 and below), (2) Subsistence Allowance (meals during on-duty days), (3) Longevity Pay (5% for every 5 years continuous service), (4) Overtime & Night Shift Differential (10%).",
      "tosCompetency": "Socio-Economic Welfare: Republic Act No. 7305 Statutory Provisions",
      "reference": "Republic Act No. 7305 (Magna Carta of Public Health Workers); Department of Health"
    }
  },
  {
    "id": "np5-024",
    "area": "NP V",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part C)",
    "topic": "Anti-Violence Against Women and Their Children (RA 9262)",
    "subtopic": "Protection Orders & Mandatory Reporting Protocols",
    "vignette": "A 29-year-old married woman is brought to the emergency department with multiple contusions, facial lacerations, and fractured ribs. While the nurse dresses her wounds in private, the patient confides through tears that her husband beat her violently and threatened to shoot her if she left home.",
    "question": "Under Republic Act No. 9262 (Anti-VAWC Act), what is the nurse's immediate legal, ethical, and clinical duty?",
    "options": [
      {
        "id": "A",
        "text": "Provide immediate medical care, document all injuries objectively with diagrams/photographs with consent, inform the client of her legal right to a Barangay Protection Order (BPO), and report the incident in accordance with hospital VAWC protocols."
      },
      {
        "id": "B",
        "text": "Confront the husband immediately in the hospital waiting lobby and demand an explanation."
      },
      {
        "id": "C",
        "text": "Advise the client to forgive her husband to preserve the sanctity of marriage under the Family Code."
      },
      {
        "id": "D",
        "text": "Refuse to treat the patient unless she files a formal sworn criminal complaint with the police."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Under RA 9262 (Anti-VAWC Act of 2004), healthcare providers attending to victims of intimate partner violence must: (1) Provide immediate emergency medical treatment, (2) Document injuries meticulously and objectively in the medical record (invaluable legal evidence), (3) Maintain confidentiality and patient safety, and (4) Inform the victim of available remedies, including Barangay Protection Orders (BPOs) and Temporary Protection Orders (TPOs) through the hospital Women and Children Protection Desk (WCPD).",
      "distractorBreakdown": {
        "B": "Confronting the abuser escalates domestic rage and puts the victim and staff in acute physical danger.",
        "C": "Advising a victim to endure domestic battery is unethical, dangerous, and violates professional advocacy standards.",
        "D": "Medical treatment cannot be conditioned on police reports; patient safety and clinical care are unconditional."
      },
      "clinicalPearl": "RA 9262 Nursing Protocols: Document exact words in quotes ('My husband hit me with a chair'), draw injury maps, document healing stages. Protection orders: BPO (Barangay - 15 days), TPO (Court - 30 days), PPO (Permanent Protection Order after trial).",
      "tosCompetency": "Legal Responsibilities: Domestic Violence and Victim Protection Advocacy",
      "reference": "Republic Act No. 9262; DOH Women and Children Protection Unit Guidelines"
    }
  },
  {
    "id": "np5-025",
    "area": "NP V",
    "areaName": "Care of Clients with Physiological and Psychosocial Alterations (Part C)",
    "topic": "Code of Ethics for Registered Nurses",
    "subtopic": "Social Media, Confidentiality & Data Privacy Act (RA 10173)",
    "vignette": "A staff nurse in a provincial pediatric intensive care unit takes a smartphone selfie showing a recovering comatose child in the background. The nurse posts the photo on Facebook with the caption: 'Miracles happen! Thank God our little 4-year-old warrior in Bed 3 woke up today! #NurseLife #Blessed'. The child's hospital name tag and face are partially visible.",
    "question": "How should this action be evaluated under the Code of Ethics for Nurses and the Data Privacy Act (RA 10173)?",
    "options": [
      {
        "id": "A",
        "text": "It is a severe violation of client confidentiality, patient privacy, and professional ethics that can lead to administrative license suspension and criminal liability."
      },
      {
        "id": "B",
        "text": "It is acceptable because the post was well-intentioned and celebrated positive clinical recovery."
      },
      {
        "id": "C",
        "text": "It is permitted provided the nurse deleted the photo within 24 hours of posting."
      },
      {
        "id": "D",
        "text": "It is legal as long as the hospital name was not explicitly stated in the caption."
      }
    ],
    "correctAnswer": "A",
    "rationale": {
      "whyCorrect": "Under the Code of Ethics for Registered Nurses (PRC BON Res. 220 s. 2004) and Republic Act No. 10173 (Data Privacy Act of 2012), taking or posting photos of patients, hospital identifiers, or clinical scenarios on personal social media without explicit institutional and patient legal consent is a GROSS BREACH OF CONFIDENTIALITY. Good intentions do NOT excuse privacy violations. The nurse is subject to administrative revocation of PRC license and criminal prosecution under RA 10173.",
      "distractorBreakdown": {
        "B": "Inspirational intent does not override constitutional and statutory rights to medical privacy.",
        "C": "Deleting an illicit post does not erase the unlawful transmission and dissemination of protected personal health information.",
        "D": "Visible patient identifiers (face, bed number, room context) make the patient identifiable, violating data privacy even without hospital naming."
      },
      "clinicalPearl": "Social Media Golden Rule for Nurses: NEVER photograph patients, monitors, charts, or clinical rooms on your personal phone! Never post patient stories online, even with names changed. Patient privacy is absolute under RA 10173 and PRC Code of Ethics!",
      "tosCompetency": "Ethico-Legal Accountability: Data Privacy Act (RA 10173) and Digital Professionalism",
      "reference": "Code of Ethics for Registered Nurses; Republic Act No. 10173 (Data Privacy Act)"
    }
  }
];

// Helper to get questions by area
function getQuestionsByArea(area) {
  if (!area || area === 'all') return PNLE_QUESTIONS;
  return PNLE_QUESTIONS.filter(q => q.area === area);
}

// Helper to get questions for targeted weak-area remediation
function getTargetedQuestions(weakTopics) {
  if (!weakTopics || weakTopics.length === 0) return PNLE_QUESTIONS.slice(0, 5);
  const matched = PNLE_QUESTIONS.filter(q => weakTopics.includes(q.topic) || weakTopics.includes(q.area));
  return matched.length > 0 ? matched : PNLE_QUESTIONS;
}

// Global exports
if (typeof window !== 'undefined') {
  window.PNLE_QUESTIONS = PNLE_QUESTIONS;
  window.getQuestionsByArea = getQuestionsByArea;
  window.getTargetedQuestions = getTargetedQuestions;
}
if (typeof globalThis !== 'undefined') {
  globalThis.PNLE_QUESTIONS = PNLE_QUESTIONS;
  globalThis.getQuestionsByArea = getQuestionsByArea;
  globalThis.getTargetedQuestions = getTargetedQuestions;
}
