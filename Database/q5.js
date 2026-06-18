var title = '42nd and 48th Special BCS | Medical';
var time = 50;
var mark = 1;
var negMark = 0.5;
var opLabel = ['A', 'B', 'C', 'D'];
var sheet = 'https://script.google.com/macros/s/AKfycbxFRSAiJoSIEFqcSGetUJNDhTj6eiKfbxcHd1gTzDNVbeDARAoOf0woHLpUQ5y9CNNU/exec';
var questions = [
    {
        question: 'A major sign of cardiac tamponade is-',
        options: [
            'Bradycardia',
            'Ventricular dilatation',
            '3rd degree heart block',
            'Pulsus paradoxus'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Pulsus paradoxus<br><br>Pulsus paradoxus (an exaggerated drop in systolic BP >10 mmHg during inspiration) is a hallmark of cardiac tamponade.<br><br>It results from impaired filling of the heart during inspiration due to external compression by fluid in the pericardial sac.<br><br>References: Davidson 24th; P- 582–583'
    },
    {
        question: 'Causes of short stature include following except-',
        options: [
            'Psychosocial deprivation',
            'Hypothyroidism',
            'Growth hormone deficiency',
            'Klinefelter syndrome'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Klinefelter syndrome<br><br>Klinefelter syndrome typically presents with tall stature due to extra copies of the X chromosome.<br><br>In contrast, hypothyroidism, growth hormone deficiency, and psychosocial deprivation can all cause short stature.<br><br>References: Davidson 24th; P- 1270'
    },
    {
        question: 'Clearance of drug depends on',
        options: [
            'plasma half life',
            'bioavailability',
            'diffusion co-efficient',
            'rate of absorption'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) plasma half-life<br><br>Clearance is influenced by the drug\'s plasma half-life, which relates to both volume of distribution and elimination rate.<br><br>Bioavailability, absorption rate, and diffusion coefficient affect drug concentration but not directly clearance.<br><br>References: Kumar & Clark, p. 105'
    },
    {
        question: 'In Graves’ disease, one would least likely expect',
        options: [
            'Goitre',
            'Increased TSH secretion',
            'Increased BMR',
            'Weight loss'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Increased TSH secretion<br><br>Graves\' disease is characterized by increased thyroid hormone levels (T3, T4) and suppressed TSH due to negative feedback.<br><br>References: Davidson 24th; P- 736'
    },
    {
        question: 'contraindication of lumber puncture-',
        options: [
            'Coma',
            'Decerebrate posturing',
            'Head injury',
            'mole on the affected site'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Head injury<br><br>Increased intracranial pressure (which may be present after head injury) is a contraindication to lumbar puncture because of the risk of brain herniation.<br><br>References: Macleod’s Clinical Examination, p. 243'
    },
    {
        question: 'Extra articular manifestation of rheumatoid arthritis are-',
        options: [
            'AKI',
            'Bronchiolitis obliterans',
            'Hepatic failure',
            'Leukoplakia'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Bronchiolitis obliterans<br><br>Bronchiolitis obliterans is a rare but recognized pulmonary complication in RA. AKI and hepatic failure are not typical extra-articular features.<br><br>References: Davidson 24th; P- 1085'
    },
    {
        question: 'Causes of haematuria include',
        options: [
            'Cardiac failure',
            'Renal tuberculosis',
            'Pregnancy',
            'Nephrotic syndrome'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Renal tuberculosis<br><br>Renal TB can cause microscopic or gross haematuria. Nephrotic syndrome presents with proteinuria, not haematuria.<br><br>References: Davidson 24th; P- 951'
    },
    {
        question: 'Sustained elevation of cardiac output occurs in-',
        options: [
            'Hypertension',
            'Anaemia',
            'Heart block',
            'Cardiac tamponade'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Anaemia<br><br>In anaemia, to compensate for decreased oxygen-carrying capacity, cardiac output increases.<br><br>References: Davidson 24th; P- 302'
    },
    {
        question: 'Causes of hyperpyrexia-',
        options: [
            'bronchial asthma',
            'COPD',
            'Malaria',
            'Hyperparathyroidism'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Malaria<br><br>Hyperpyrexia (extremely high fever) can be seen in malaria, particularly falciparum malaria. Bronchial asthma and COPD are not typical causes of such high fever.<br><br>References: Davidson 24th; P- 1442'
    },
    {
        question: 'Autosomal reccessive disorder',
        options: [
            'Expressed in heterozygote',
            'Parents may be normal carrier',
            'Vertical transmission',
            'Variable Expressivity'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Parents may be normal carrier<br><br>In autosomal recessive inheritance, both parents are typically asymptomatic carriers, and two defective alleles are required for disease manifestation.<br><br>References: Davidson 24th; P- 119'
    },
    {
        question: 'In Addison`s disease, there is',
        options: [
            'High blood level of cortisol',
            'Hypertension',
            'Hypoglycaemia between meals',
            'Hypopigmentation'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Hypoglycaemia between meals<br><br>Due to cortisol deficiency, Addison`s disease is associated with fasting hypoglycaemia. Other features include hypotension and hyperpigmentation—not hypopigmentation.<br><br>References: Davidson 24th; P- 790'
    },
    {
        question: 'In haemolytic anemia-',
        options: [
            'Increase haptoglobin',
            'Increase urinary urobillinogen',
            'decrease reticulocytes',
            'decrease LDH'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Increase urinary urobilinogen<br><br>Haemolytic anemia leads to increased breakdown of RBCs, resulting in raised levels of urobilinogen in urine. LDH also increases, while haptoglobin decreases.<br><br>References: Davidson 24th; P- 406'
    },
    {
        question: 'Following predispose to the development of tuberculosis-',
        options: [
            'HLA-B27',
            'Malnutrition',
            'Sarcoidosis',
            'Avitaminosis D'
        ],
        corrAns: 1,
        explanation:'Correct Answer: C) Malnutrition<br><br>Malnutrition impairs immunity and increases susceptibility to infections, including tuberculosis.<br><br>References: Davidson 24th; P- 336'
    },
    {
        question: 'Complication of typhoid fever is-',
        options: [
            'Thyroiditis',
            'Pericarditis',
            'Ileal perforation',
            'Blindness'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Ileal perforation<br><br>Ileal perforation is a severe and classic complication of typhoid fever due to necrosis of Peyer’s patches.<br><br>References: Davidson 24th; P- 406'
    },
    {
        question: 'A regurgitant aortic valve in a nonfunctioning heart causes-',
        options: [
            'Decrease in diastolic pressure',
            'Decrease in heart rate',
            'Systolic murmur',
            'Decrease in systolic blood pressure'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Decrease in diastolic pressure<br><br>In aortic regurgitation, blood flows back into the left ventricle during diastole, reducing diastolic pressure and causing a widened pulse pressure.<br><br>References: Davidson 24th; P- 582'
    },
    {
        question: 'Causes of high ESR is-',
        options: [
            'Polycythemia',
            'Multiple myeloma',
            'Sickle cell anaemia',
            'Spherocytosis'
        ],
        corrAns: 1,
        explanation:'Correct Answer: C) Multiple myeloma<br><br>Multiple myeloma leads to markedly increased ESR due to high levels of immunoglobulins increasing plasma viscosity.<br><br>References: Davidson 24th; P- 1033'
    },
    {
        question: 'Features of aortic stenosis includes-',
        options: [
            'irregular pulse',
            'heaving apex beat',
            'left parasternal heave',
            'mid diastolic murmur'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) heaving apex beat<br><br>A heaving (sustained) apex beat is characteristic of left ventricular hypertrophy caused by chronic pressure overload in aortic stenosis.<br><br>References: Macleod’s, p. 206'
    },
    {
        question: 'Polycythemia occurs in-',
        options: [
            'hypoxia',
            'iron deficiency',
            'vit-c deficiency',
            'Malnutrition'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Hypoxia<br><br>Chronic hypoxia (e.g. COPD, high altitude) stimulates erythropoietin production leading to secondary polycythemia.<br><br>References: Davidson 24th; P- 419'
    },
    {
        question: 'Which anti diabetic drug causes weight loss-',
        options: [
            'pioglitazone',
            'liraglutide',
            'vildagliptin',
            'Repaglinide'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Liraglutide<br><br>Liraglutide, a GLP-1 receptor agonist, promotes satiety and slows gastric emptying, leading to weight loss.<br><br>References: Davidson 24th; P- 835'
    },
    {
        question: 'Cerebellar lesion causes-',
        options: [
            'spasticity',
            'rigidity',
            'intension tremor',
            'slow gait'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Intention tremor<br><br>Cerebellar lesions cause intention tremor, dysmetria, and ataxia, not spasticity or rigidity.<br><br>References: Macleod’s, p. 487'
    },
    {
        question: 'Bence-Jones proteins are-',
        options: [
            'heavy chain immunoglobulin',
            'Found in the urine of multiple myeloma',
            'Associated with mononuclear antibody',
            'Precipitate by boiling'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Found in the urine of multiple myeloma<br><br>Bence-Jones proteins are monoclonal free light chains seen in urine of patients with multiple myeloma.<br><br>References: Davidson 24th; P- 1033'
    },
    {
        question: 'In secondary hypothyroidism',
        options: [
            'TSH low, FT4 low',
            'TFT4 normal TSH low',
            'TSH low,FT4 normal',
            'Low TSH increased FT4'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) TSH low, FT4 low<br><br>Secondary hypothyroidism results from pituitary dysfunction, causing low TSH and low FT4.<br><br>References: Davidson 24th; P- 744'
    },
    {
        question: 'ECG changes in hyperkalaemia',
        options: [
            'ST depression',
            'short QRS complex',
            'tall T wave',
            'K level 5.5-7.0 meq/L.'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Tall T wave<br><br>Tall, peaked T waves are an early sign of hyperkalemia on ECG.<br><br>References: Davidson 24th; P- 478'
    },
    {
        question: 'In which poisoning gastric lavage is contraindicated-',
        options: [
            'OPC',
            'kerosene',
            'paracetamol',
            'methanol'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Kerosene<br><br>Gastric lavage is contraindicated in kerosene poisoning due to risk of aspiration and chemical pneumonitis.<br><br>References: Kumar & Clark, p. 1482'
    },
    {
        question: 'ACE inhibitor are contraindicated in-',
        options: [
            'Asthma',
            'Acute heart failure',
            'Pregnancy',
            'diabetic nephropathy'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Pregnancy<br><br>ACE inhibitors are teratogenic and contraindicated during pregnancy as they can cause fetal renal dysgenesis, oligohydramnios, skull ossification defects, and death.<br><br>Reference: Davidson 24th; P- 624'
    },
    {
        question: 'In emphysema, pulmonary function test shows',
        options: [
            'Decreased residual volume',
            'Increased total lung capacity',
            'Increased FEV1/FVC',
            'Increased vital capacity'
        ],
        corrAns: 1,
        explanation:'Correct Answer: C) Increased total lung capacity<br><br>Emphysema leads to air trapping and hyperinflation, increasing total lung capacity and residual volume, while FEV1/FVC is decreased.<br><br>Reference: Harrison’s 20th ed., Vol 2, p. 1663; Davidson 24th; P- 659'
    },
    {
        question: 'DNA synthesis is inhibited by-',
        options: [
            'Prednisolone',
            'Chloroquine',
            'Azathioprine',
            'Chloramphenicol'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Azathioprine<br><br>Azathioprine is an immunosuppressive agent that inhibits purine synthesis, thus impairing DNA synthesis.<br><br>Reference: Davidson 24th; P- 1115'
    },
    {
        question: 'Common organism for neonatal sepsis-',
        options: [
            'Pneumococci',
            'Pseudomonas',
            'E Coli',
            'H. influenza'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) E. coli<br><br>E. coli and Group B Streptococcus are the most common causes of early-onset neonatal sepsis.<br><br>Reference: Davidson 24th; P- 466'
    },
{
        question: 'Rickets radiology-',
        options: [
            'cupping of epiphysis',
            'ring shape epiphysis',
            'widening of epiphysis',
            'increased calcifications'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Cupping of epiphysis<br><br>Classic radiological findings in rickets include cupping, fraying, and widening of the metaphysis.<br><br>Reference: Davidson 24th; P- 1184'
    },
    {
        question: 'X-linked disorder is-',
        options: [
            'polycystic ovarian syndrome',
            'Down\'s syndrome',
            'turners syndrome',
            'Haemophilia'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Haemophilia<br><br>Hemophilia A and B are inherited as X-linked recessive disorders.<br><br>Reference: Davidson 24th; P- 889'
    },
    {
        question: 'Mood stabilizer is',
        options: [
            'Topiramate',
            'Lithium',
            'Dexamethasone',
            'Diazepam'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Lithium<br><br>Lithium is the prototype mood stabilizer used in bipolar disorder.<br><br>Reference: Davidson 24th; P- 295'
    },
    {
        question: 'Pancreatitis causes of elevation of plasma-',
        options: [
            'Lipase',
            'Aldolase',
            'Acid phosphatase',
            'Lipoprotein lipase'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Lipase<br><br>Serum lipase and amylase are elevated in acute pancreatitis, with lipase being more specific.<br><br>Reference: Davidson 24th; P- 967'
    },
    {
        question: 'Complete lesion of oculomotor nerve causes-',
        options: [
            'ptosis',
            'blindness',
            'pupil constriction',
            'inability to lateral movement'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Ptosis<br><br>Complete oculomotor palsy causes ptosis, dilated pupil, and the eye positioned "down and out".<br><br>Reference: MacLeod’s Clinical Examination 14th ed., p. 181'
    },
    {
        question: 'Plasma albumin helps in',
        options: [
            'Colloidal osmotic pressure maintenance',
            'Blood clotting',
            'Iron transport',
            'Copper transport'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Colloidal osmotic pressure maintenance<br><br>Colloidal osmotic pressure maintenance: Maintains oncotic pressure to prevent edema.<br><br>Other Options:<br>B) Blood clotting: Role of fibrinogen, not albumin.<br><br>C) Iron transport: Done by transferrin.<br><br>D) Copper transport: Done by ceruloplasmin.'
    },
    {
        question: 'Major antibody content of the serum is',
        options: [
            'a-I fraction',
            'a-2 fraction',
            'y fraction',
            'ẞ fraction'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) γ fraction<br><br>The gamma (γ) fraction contains immunoglobulins (antibodies), mainly IgG.<br><br>Reference: Davidson 24th; P- 121'
    },
    {
        question: 'Biochemical disturbance occurs in fulminating hepatic failure is-',
        options: [
            'Metabolic alkalosis',
            'High serum albumin',
            'Prolongation of prothrombin time',
            'Hypoglycemia'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Prolongation of prothrombin time<br><br>Due to impaired synthesis of clotting factors, PT is prolonged in acute liver failure.<br><br>Reference: Davidson 24th; P- 957'
    },
    {
        question: 'Ionizing radiation-following is true',
        options: [
            'Does not affect age',
            'Does not affect lungs',
            'Does not affect skin',
            'Affects the brain'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Affects the brain<br><br>Ionizing radiation can affect any tissue, especially rapidly dividing cells, but also affects the CNS, especially in children.<br><br>Reference: Harrison’s 20th ed., Vol 2, p. 472'
    },
    {
        question: 'Coomb\'s test is used for detecting',
        options: [
            'Rheumatoid factor',
            'Antinuclear factor',
            'Cold agglutinin',
            'Anti insulin antibody'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Cold agglutinin<br><br>Coombs’ test detects antibodies or complement on red blood cells, used in autoimmune hemolytic anemia, including cold agglutinin disease.<br><br>Reference: Davidson 24th; P- 889'
    },
    {
        question: 'Which of the following is not a feature of acute type II respiratory failure',
        options: [
            'PaO2 < 8.0 kpa',
            'PaCo2 > 6 kpa',
            'HCO3- is increased',
            'H+ is increased'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) HCO3- is increased<br><br>HCO3- is increased: Only in chronic compensation. In acute, it remains normal or slightly increased.<br><br>Other Options:<br>A) PaO2 < 8.0 kPa: Hypoxemia — characteristic.<br><br>B) PaCO2 > 6.0 kPa: Hypercapnia — defining for Type II.<br><br>D) H+ is increased: Respiratory acidosis leads to acidemia.'
    },
    {
        question: 'Which of the following is a compressible swelling?',
        options: [
            'Neuro fibroma',
            'Chondroma',
            'Lymphoma',
            'Haemangioma'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Haemangioma<br><br>Haemangioma: Vascular tumor — soft, compressible, may refill on release.<br><br>Other Options:<br>A) Neurofibroma: Solid and non-compressible.<br><br>B) Chondroma: Cartilage tumor — firm.<br><br>C) Lymphoma: Firm, rubbery lymph node swelling.'
    },
    {
        question: 'Irreversible sign of vitamin-A deficiency is',
        options: [
            'Bitot\'s spot',
            'Xerosis Conjunctive',
            'Keratomalacia',
            'Night blindness'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Keratomalacia<br><br>Keratomalacia: Corneal softening → permanent blindness — irreversible.<br><br>Other Options:<br>A) Bitot’s spot: Early and reversible.<br><br>B) Xerosis conjunctivae: Reversible.<br><br>D) Night blindness: Earliest sign, completely reversible with treatment.'
    },
    {
        question: 'Common feature to all Spondylo arthritis is',
        options: [
            'Symmetrical poly arthritis',
            'Conjunctivitis',
            'Positive HLA B27',
            'Oral Ulceration'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Positive HLA-B27<br><br>Positive HLA-B27: Genetic marker found in most types including ankylosing spondylitis, reactive arthritis, psoriatic arthritis, and IBD-related arthritis.<br><br>Other Options:<br>A) Symmetrical polyarthritis: Seen in rheumatoid arthritis, not typical for spondyloarthritis (which is usually asymmetric).<br><br>B) Conjunctivitis: Seen in reactive arthritis, not universal to all spondyloarthropathies.<br><br>D) Oral ulceration: Common in Behçet’s disease or SLE, not typical in spondyloarthritis.'
    },
    {
        question: 'Clinical feature of raised intracranial pressure is',
        options: [
            'Raised respiratory rate',
            'Bradycardia',
            'Fever',
            'Hypotension'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Bradycardia<br><br>Bradycardia: Part of Cushing’s triad (bradycardia, hypertension, irregular respiration).<br><br>Other Options:<br>A) Raised respiratory rate: Often depressed in late stages.<br><br>C) Fever: Not a classic sign of raised ICP.<br><br>D) Hypotension: Hypertension is typical in raised ICP.'
    },
    {
        question: 'Bony metastasis may occur in',
        options: [
            'Carcinoma gall bladder',
            'Malignant melanoma',
            'Squamous Cell Carcinoma of skin',
            'Follicular Carcinoma of thyroid'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Follicular carcinoma of thyroid<br><br>Follicular carcinoma of thyroid: Spreads hematogenously → commonly to bone and lungs.<br><br>Other Options:<br>A) Carcinoma gallbladder: Rarely metastasizes to bone.<br><br>B) Malignant melanoma: Commonly spreads to skin, liver, lungs.<br><br>C) Squamous cell carcinoma of skin: Local invasion more common.'
    },
    {
        question: 'Which one is derived from mesoderm?',
        options: [
            'Muscle',
            'Skin',
            'Nail',
            'Mucous membrane'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Muscle<br><br>Muscle: Derived from paraxial mesoderm (somites).<br><br>Other Options:<br>B) Skin: Epidermis comes from ectoderm.<br><br>C) Nail: Ectodermal derivative.<br><br>D) Mucous membrane: Endoderm in origin (respiratory, GI).'
    },
    {
        question: 'Forensic radiology deals with determination of',
        options: [
            'Poison',
            'Foreign body',
            'Age',
            'Pregnancy'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Age<br><br>Age: Bone ossification centers, dental X-rays — commonly used in age estimation.<br><br>Other Options:<br>A) Poison: Identified by toxicology.<br><br>B) Foreign body: Yes, radiology can help, but not the primary use in forensics.<br><br>D) Pregnancy: Determined clinically or by ultrasound, not primarily forensic.'
    },
    {
        question: 'CA-125 is the tumor marker for',
        options: [
            'Breast cancer',
            'Colon cancer',
            'Ovarian cancer',
            'Pancreatic cancer'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Ovarian cancer<br><br>Ovarian cancer: Especially in epithelial ovarian cancers (used for diagnosis & follow-up).<br><br>Other Options:<br>A) Breast cancer: CA 15-3 is used.<br><br>B) Colon cancer: CEA (Carcinoembryonic antigen) is used.<br><br>D) Pancreatic cancer: CA 19-9 is used.'
    },
    {
        question: 'Cause of severe dysmenorrhea in an adolescent girl is',
        options: [
            'Endometriosis',
            'Polycystic ovary disease',
            'Adenomyosis',
            'Trichomomiasis'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Endometriosis<br><br>Endometriosis: Common cause of secondary dysmenorrhea in adolescents.<br><br>Other Options:<br>B) PCOS: Typically presents with oligomenorrhea, not painful periods.<br><br>C) Adenomyosis: Common in older, multiparous women.<br><br>D) Trichomoniasis: STI with discharge, not dysmenorrhea.'
    },
    {
        question: 'Ethambutol is rarely prescribed in children because it causes',
        options: [
            'Peripheral neuropathy',
            'Hepatitis',
            'Rash',
            'Retrobulbar neuritis'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Retrobulbar neuritis<br><br>Retrobulbar neuritis: Dose-dependent optic neuritis — affects color vision, visual acuity; hard to detect in young children.<br><br>Other Options:<br>A) Peripheral neuropathy: More with isoniazid.<br><br>B) Hepatitis: Seen more with isoniazid, rifampicin, and pyrazinamide.<br><br>C) Rash: Minor side effect.'
    },
    {
        question: 'In Bangladesh minimum recommended number of antenatal care (ANC) visit is',
        options: [
            'Four',
            'Six',
            'Eight',
            'Twelve'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Four<br><br>Four: As per WHO’s focused ANC model, minimum 4 visits (though newer guidelines recommend 8).<br><br>Other Options:<br>B) Six: May be practiced, but not officially minimum.<br><br>C) Eight: New WHO recommendation, not national minimum yet.<br><br>D) Twelve: Too high — not the recommendation.'
    },
    {
        question: 'Which one of the following is reproductive organ?',
        options: [
            'Uterus',
            'Urinary bladder',
            'Urethra',
            'Bone'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Uterus<br><br>Uterus: Female reproductive organ involved in menstruation and pregnancy.<br><br>Other Options:<br>B) Urinary bladder: Excretory system.<br><br>C) Urethra: Excretory function.<br><br>D) Bone: Skeletal system, unrelated.'
    },
    {
        question: 'Viral disease that may cause thrombocytopenia is',
        options: [
            'SARS-Cov-2',
            'Influenza',
            'Dengue',
            'Hepatitis B'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Dengue<br><br>Dengue: Causes bone marrow suppression and peripheral platelet destruction — hallmark is thrombocytopenia.<br><br>Other Options:<br>A) SARS-CoV-2: May cause mild thrombocytopenia but not characteristically.<br><br>B) Influenza: Rarely associated with significant drop in platelets.<br><br>D) Hepatitis B: May rarely cause it in advanced cases but not typical.'
    },
    {
        question: 'A 35-year-old man came to you with following reports HbsAg (-VE), Anti HBc lgG (+VE), Anti HBc IgM(-VE), Anti HBs (+VE) which senario will match with the above mentioned reports',
        options: [
            'Acute hepatitis (early)',
            'Convalescence',
            'Post infection',
            'Immunization without infection'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Post-infection<br><br>Post-infection: Classical serological profile.<br><br>This is a resolved HBV infection profile:<br>○ HBsAg (-): No active infection.<br>○ Anti-HBc IgG (+): Past exposure.<br>○ Anti-HBs (+): Immunity.<br>○ Anti-HBc IgM (-): No recent infection.<br><br>Other Options:<br>A) Acute hepatitis (early): Would have HBsAg (+) and IgM (+).<br><br>B) Convalescence: Might be possible, but Anti-HBs usually not yet formed.<br><br>D) Immunization without infection: No Anti-HBc present in vaccine-induced immunity.'
    },
    {
        question: 'Dose schedule of a drug with half life 03 hours will be',
        options: [
            '3 hourly',
            '6 hourly',
            '12 hourly',
            'Once daily'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) 6 hourly<br><br>6 hourly: Appropriate based on 3-hour half-life.<br><br>Other Options:<br>A) 3 hourly: Too frequent — unnecessary.<br><br>C) 12 hourly: Not frequent enough — drug may drop below therapeutic level.<br><br>D) Once daily: Too long an interval.'
    },
    {
        question: 'Solid tumor of ovary is',
        options: [
            'Chocolate cyst of ovary',
            'Theca Lutein cyst',
            'Fibroma',
            'Parovarian cyst'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Fibroma<br><br>Fibroma: Solid, benign tumor of ovarian stromal origin.<br><br>Other Options:<br>A) Chocolate cyst: Endometriotic cyst — not solid.<br><br>B) Theca lutein cyst: Functional cyst, not solid.<br><br>D) Parovarian cyst: Cystic structure, not a solid tumor.'
    },
    {
        question: 'Multidrug resistant tuberculosis is treated by',
        options: [
            'Amikacin',
            'Streptomycin',
            'Tazobactum',
            'Ethambutol'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Amikacin<br><br>Amikacin: Second-line aminoglycoside used in MDR-TB.<br><br>Other Options:<br>B) Streptomycin: First-line but not effective in MDR-TB.<br><br>C) Tazobactam: β-lactamase inhibitor — no role in TB.<br><br>D) Ethambutol: First-line drug; resistance likely in MDR-TB.'
    },
    {
        question: 'Protein is digested by',
        options: [
            'Amylase',
            'Bile Salt',
            'Lipase',
            'Trypsin'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Trypsin<br><br>Trypsin: Secreted by pancreas, breaks down proteins into peptides.<br><br>Other Options:<br>A) Amylase: Digests starch (carbohydrates).<br><br>B) Bile salt: Emulsifies fats, no enzymatic action.<br><br>C) Lipase: Digests fats.'
    },
    {
        question: 'Universally accepted indicator of health status of a population is',
        options: [
            'Child death rate',
            'Case fatality rate',
            'Infant mortality rate',
            'Under-5 mortality rate'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Infant mortality rate (IMR)<br><br>Infant mortality rate: Most widely used global health indicator.<br><br>IMR reflects:<br>○ Maternal health<br>○ Health service access<br>○ Nutrition<br><br>Other Options:<br>A) Child death rate: Broader and less specific.<br><br>B) Case fatality rate: Measures disease severity, not population health.<br><br>D) Under-5 mortality rate: Good indicator, but IMR is more accepted.'
    },
    {
        question: 'Bone metabolism is the primary concern of',
        options: [
            'Glucagon',
            'Growth hormone',
            'Parathyroid hormone',
            'Thyroid stimulating hormone'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Parathyroid hormone<br><br>Parathyroid hormone: Regulates calcium/phosphate balance, increases bone resorption.<br><br>Other Options:<br>A) Glucagon: Raises blood glucose, not involved in bones.<br><br>B) Growth hormone: Promotes growth, but indirectly affects bone.<br><br>D) Thyroid-stimulating hormone: Acts on thyroid, not bone metabolism directly.'
    },
    {
        question: 'Scabies is characterized by',
        options: [
            'Comedon',
            'Burrow',
            'Silvery Scale',
            'Wickman Striae'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Burrow<br><br>Burrow: Thin, grayish lines in finger webs, wrists — diagnostic of scabies.<br><br>Other Options:<br>A) Comedon: Seen in acne.<br><br>C) Silvery scale: Psoriasis.<br><br>D) Wickham’s striae: Lichen planus.'
    },
    {
        question: 'Cause of acute starvation is',
        options: [
            'Self refusal',
            'Dysphasia',
            'Anorexia',
            'Entrapment in mine'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Entrapment in mine<br><br>Entrapment in mine: Sudden unavailability of food → acute starvation.<br><br>Other Options:<br>A) Self-refusal: Chronic starvation (e.g., anorexia nervosa).<br><br>B) Dysphasia: Can cause feeding problems but not the typical cause of acute starvation.<br><br>C) Anorexia: Again, a chronic issue.'
    },
    {
        question: 'Which of the following is a compelling indication of calcium channel blocker in the management of Hypertension?',
        options: [
            'Heart failure',
            'Secondary stroke prevention',
            'Older patient',
            'Left ventricular dysfunction'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Older patient<br><br>Older patient: CCBs are particularly effective in elderly hypertensives, especially with isolated systolic HTN.<br><br>Other Options:<br>A) Heart failure: Some CCBs (especially non-dihydropyridines like verapamil) may worsen heart failure.<br><br>B) Secondary stroke prevention: Not specifically CCBs; ACEIs or diuretics preferred.<br><br>D) Left ventricular dysfunction: Beta-blockers or ACEIs preferred.'
    },
    {
        question: 'Component of secondary survey in a traumatic patient is',
        options: [
            'Airway and cervical spine control',
            'Head to toe examination',
            'Breathing and ventilation',
            'Circulation and control of haemorrhage'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Head to toe examination<br><br>Head to toe examination: This is done during secondary survey to assess all systems thoroughly after stabilizing the patient.<br><br>Other Options:<br>A) Airway and cervical spine control: Part of primary survey.<br><br>C) Breathing and ventilation: Part of primary survey.<br><br>D) Circulation and control of hemorrhage: Also part of primary survey.'
    },
    {
        question: 'Diabetes in pregnancy should be treated by',
        options: [
            'Glipizide',
            'Metformin',
            'Insulin',
            'Rosiglitazone'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Insulin<br><br>Insulin: Does not cross placenta, preferred for both gestational and pregestational diabetes.<br><br>Other Options:<br>A) Glipizide: Sulfonylureas cross the placenta → risk to fetus.<br><br>B) Metformin: Can be used in some cases (GDM), but insulin is gold standard.<br><br>D) Rosiglitazone: Contraindicated in pregnancy.'
    },
    {
        question: 'Which of the following antidepressants does not have any weight gain property?',
        options: [
            'Escitalopram',
            'Fluoxetine',
            'Paroxetine',
            'Sertraline'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Fluoxetine<br><br>Fluoxetine: Known to be weight neutral or even cause weight loss.<br><br>Other Options:<br>A) Escitalopram: May cause mild weight gain with long-term use.<br><br>C) Paroxetine: Commonly associated with weight gain.<br><br>D) Sertraline: Mild weight gain possible with chronic use.'
    },
    {
        question: 'Respiratory Center is Located in',
        options: [
            'Medulla',
            'Spinal Cord',
            'Brain Cortex',
            'Cerebellum'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Medulla<br><br>Medulla: Contains dorsal and ventral respiratory groups — controls inspiration and expiration.<br><br>Other Options:<br>B) Spinal cord: Conveys impulses but not the control center.<br><br>C) Brain cortex: Can influence voluntary breathing but not autonomic.<br><br>D) Cerebellum: Coordinates movement, not respiration.'
    },
    {
        question: 'Amniotic fluid embolism causes',
        options: [
            'Hypertension',
            'Bronchodilatation',
            'Cyanosis',
            'Severe anaemia'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Cyanosis<br><br>Cyanosis: Classic sign due to sudden respiratory collapse and hypoxia.<br><br>Other Options:<br>A) Hypertension: Usually causes hypotension due to shock.<br><br>B) Bronchodilatation: Opposite occurs — bronchospasm may occur.<br><br>D) Severe anaemia: Not a feature; shock is due to embolism and coagulopathy.'
    },
    {
        question: 'The most reliable clinical feature of strangulated inguinal hernia is',
        options: [
            'Pain',
            'Fever',
            'Tense and tender lump in the inguinal region',
            'Vomiting'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Tense and tender lump in the inguinal region<br><br>Tense and tender lump: Non-reducible, irreducible, tender, and tense mass = strangulation.<br><br>Other Options:<br>A) Pain: Present in both reducible and strangulated hernia.<br><br>B) Fever: Can occur later, not specific.<br><br>D) Vomiting: Non-specific symptom of intestinal obstruction.'
    },
    {
        question: 'Uterine contractions in labour',
        options: [
            'are consciously controllable',
            'are efficient at 5 mmHg',
            'start at fundus of uterus',
            'are painful due to ischemia'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) start at fundus of uterus<br><br>Start at fundus of uterus: Pacemaker region initiates contraction → spreads downward.<br><br>Other Options:<br>A) are consciously controllable: Involuntary, smooth muscle action.<br><br>B) are efficient at 5 mmHg: Requires higher intrauterine pressure (>30 mmHg).<br><br>D) are painful due to ischemia: Pain mainly due to stretching and cervical dilation.'
    },
    {
        question: 'Normal anion gap metabolic acidosis is found in',
        options: [
            'Chronic renal failure',
            'Diabetic keto acidosis',
            'Methanol poisoning',
            'Renal tubular acidosis'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Renal tubular acidosis<br><br>Renal tubular acidosis: Normal anion gap due to bicarbonate loss without unmeasured anions.<br><br>Other Options:<br>A) Chronic renal failure: Causes high anion gap acidosis.<br><br>B) Diabetic ketoacidosis: High anion gap acidosis due to ketones.<br><br>C) Methanol poisoning: High anion gap due to formic acid.'
    }
];