/**
 * PASADO - High-Yield Clinical Pearls & Interactive Calculators
 * Designed for quick study and bedside/exam recall for PNLE candidates.
 */

const CLINICAL_PEARLS = {
  labValues: [
    { name: "Serum Sodium (Na+)", normal: "135 - 145 mEq/L", highYieldTip: "Major extracellular cation. Watch for neuro changes, seizures in severe hyponatremia (<120 mEq/L). Correct slowly to prevent Osmotic Demyelination Syndrome!" },
    { name: "Serum Potassium (K+)", normal: "3.5 - 5.0 mEq/L", highYieldTip: "Major intracellular cation. Strict cardiac danger! Peaked T-waves in hyperkalemia (>5.0); Flat/Inverted T-waves & U-waves in hypokalemia (<3.5). Never give IV Push K+!" },
    { name: "Serum Calcium (Ca2+)", normal: "8.5 - 10.5 mg/dL", highYieldTip: "Hypocalcemia causes neuromuscular excitability: positive Chvostek's sign (facial twitch) and Trousseau's sign (carpopedal spasm). Antidote: IV Calcium Gluconate." },
    { name: "Serum Magnesium (Mg2+)", normal: "1.5 - 2.5 mEq/L", highYieldTip: "Calms neuromuscular transmission. Low Mg causes Torsades de Pointes. High Mg causes absent DTRs and respiratory depression in preeclampsia." },
    { name: "Blood Urea Nitrogen (BUN)", normal: "10 - 20 mg/dL", highYieldTip: "Reflects renal clearance & hydration. Elevated BUN with normal Creatinine indicates dehydration; both elevated indicates renal impairment." },
    { name: "Serum Creatinine", normal: "0.6 - 1.2 mg/dL", highYieldTip: "Most reliable specific indicator of renal function. Unaffected by diet or fluid volume." },
    { name: "Arterial pH", normal: "7.35 - 7.45", highYieldTip: "<7.35 = Acidosis; >7.45 = Alkalosis. Life-threatening below 6.8 or above 7.8." },
    { name: "PaCO2 (Respiratory)", normal: "35 - 45 mmHg", highYieldTip: ">45 = Respiratory Acidosis (hypoventilation); <35 = Respiratory Alkalosis (hyperventilation)." },
    { name: "HCO3- (Metabolic)", normal: "22 - 26 mEq/L", highYieldTip: "<22 = Metabolic Acidosis (DKA, renal failure, diarrhea); >26 = Metabolic Alkalosis (vomiting, NG suction)." },
    { name: "Lithium Level", normal: "0.6 - 1.2 mEq/L", highYieldTip: "Toxic at >= 1.5 mEq/L (coarse tremors, diarrhea, ataxia). Maintain consistent sodium and water intake." },
    { name: "Digoxin Level", normal: "0.5 - 2.0 ng/mL", highYieldTip: "Toxic > 2.0 ng/mL. Visual halos, nausea, bradycardia. Check apical pulse for 1 full minute; withhold if HR < 60 bpm." }
  ],

  ra9173Highlights: [
    {
      article: "Title and Declaration of Policy",
      section: "Sec. 1 - 2",
      summary: "Known as the 'Philippine Nursing Act of 2002'. Approved on October 21, 2002, by President Gloria Macapagal-Arroyo, repealing Republic Act No. 7164."
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
  ]
};

if (typeof window !== 'undefined') window.CLINICAL_PEARLS = CLINICAL_PEARLS;
if (typeof globalThis !== 'undefined') globalThis.CLINICAL_PEARLS = CLINICAL_PEARLS;
