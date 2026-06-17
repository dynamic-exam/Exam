var title = '48th Special BCS | Medical';
var time = 30;
var mark = 1;
var negMark = 0.5;
var opLabel = ['A', 'B', 'C', 'D'];
var sheet = 'https://script.google.com/macros/s/AKfycbzbe0lg7LfiEfvniXHnnjLeKKD-050RfWOrFG2gyfj2PdYuWpdeEpNh0Bu4VWc_iGSA/exec';
var questions = [
    {
        question: 'Feature of a malignant ulcer is',
        options: [
            'Undermined edge',
            'Punched out edge',
            'Everted edge',
            'sloping edge'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Everted edge<br><br>Everted edge: Typical of squamous cell carcinoma ulcers.<br><br>Other Options:<br>A) Undermined edge: Seen in TB ulcers.<br><br>B) Punched out edge: Common in trophic or gummatous syphilitic ulcers.<br><br>D) Sloping edge: Found in healing ulcers.'
    },
    {
        question: 'Part of Parasympathetic nervous system is',
        options: [
            'Celiac ganglion',
            'Cervical ganglion',
            'Ciliary ganglion',
            'Sacral ganglion'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Ciliary ganglion<br><br>Ciliary ganglion: A parasympathetic ganglion supplying the eye.<br><br>Other Options:<br>A) Celiac ganglion: Part of sympathetic nervous system.<br><br>B) Cervical ganglion: Also sympathetic (e.g., superior cervical ganglion).<br><br>D) Sacral ganglion: Anatomically refers to sympathetic chain ganglia.'
    },
    {
        question: 'Example of probability sampling is',
        options: [
            'Stratified random sampling',
            'Quota sampling',
            'Purposive sampling',
            'Accidental sampling'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Stratified random sampling<br><br>Stratified random sampling: Population is divided into strata, then randomly sampled — a type of probability sampling.<br><br>Other Options:<br>B) Quota sampling: Non-probability sampling, though similar to stratified.<br><br>C) Purposive sampling: Also non-probability — based on judgment.<br><br>D) Accidental sampling: A type of convenience sampling, not probability-based.'
    },
    {
        question: 'Indication of Circumcision',
        options: [
            'Epispadias',
            'Hypospadias',
            'Undescended Testes',
            'Phimosis'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Phimosis<br><br>Phimosis: Tight foreskin that can’t be retracted — most common indication for circumcision.<br><br>Other Options:<br>A) Epispadias: Surgical correction needed, but not by circumcision.<br><br>B) Hypospadias: Circumcision is avoided because foreskin may be used for repair.<br><br>C) Undescended testes: Not related to foreskin.'
    },
    {
        question: 'Congenital malformation can be attributed to maternal infection with',
        options: [
            'poliomyelitis',
            'Measles',
            'Chicken Pox',
            'Toxoplasmosis'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Toxoplasmosis<br><br>TORCH infections cause congenital anomalies:<br>T = Toxoplasmosis<br>O = Other (Syphilis, VZV)<br>R = Rubella<br>C = CMV<br>H = HSV<br><br>Polio, measles, chickenpox: Less commonly associated with congenital malformations.'
    },
    {
        question: 'Programmed cell death is regulated by',
        options: [
            'Endoplasmic reticulum',
            'Golgi apparatus',
            'Lysosome',
            'Mitochondria'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Mitochondria<br><br>Mitochondria: Release cytochrome c, activating caspases → apoptosis.<br><br>Other Options:<br>A) Endoplasmic reticulum: Involved in protein synthesis/folding.<br><br>B) Golgi apparatus: Involved in protein processing/packaging.<br><br>C) Lysosome: Involved in autophagy, not apoptosis.'
    },
    {
        question: 'Utero-vaginal prolapse',
        options: [
            'is a very painful condition',
            'is worse in erect posture',
            'is common in nulliparous women',
            'may resolve spontaneously'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) is worse in erect posture<br><br>Worse in erect posture: Gravity worsens the prolapse symptoms.<br><br>Other Options:<br>A) Very painful: Usually painless; heaviness or dragging sensation is common.<br><br>C) Common in nulliparous: More common in multiparous women.<br><br>D) May resolve spontaneously: Usually requires pelvic floor exercises or surgery.'
    },
    {
        question: 'Fever is mediated by',
        options: [
            'Bradykinin',
            'Complements',
            'Hageman factor',
            'Interleukin-1'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Interleukin-1<br><br>Interleukin-1: A pyrogen that acts on the hypothalamus to raise body temperature.<br><br>Other Options:<br>A) Bradykinin: Involved in pain and vasodilation.<br><br>B) Complement: Role in immunity, not fever.<br><br>C) Hageman factor: Initiates clotting and inflammation.'
    },
    {
        question: 'ln Ectopic pregnancy',
        options: [
            'Bleeding precedes pain',
            'Isthmus of fallopian tube in the commonest site of ectopic implantation',
            'incidence is more common among women taking oral contraceptives for long time',
            'Abdominal pain preceded by amenorrhoea'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Abdominal pain preceded by amenorrhoea<br><br>Abdominal pain preceded by amenorrhoea: Classical triad — amenorrhoea → pain → bleeding.<br><br>Other Options:<br>A) Bleeding precedes pain: Usually pain precedes or coincides with bleeding.<br><br>B) Isthmus is the commonest site: Ampulla of fallopian tube is most common.<br><br>C) More common among OCP users: OCPs reduce risk of ectopic.'
    },
    {
        question: 'Primary blood buffer system is',
        options: [
            'Ammonia buffer',
            'Bicarbonate buffer',
            'Phosphate buffer',
            'Protein buffer'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Bicarbonate buffer<br><br>Bicarbonate buffer: Main buffer in plasma. HCO₃⁻ + H⁺ ↔ H₂CO₃ ↔ CO₂ + H₂O.<br><br>Other Options:<br>A) Ammonia buffer: Important in renal tubules, not primary in blood.<br><br>C) Phosphate buffer: Also renal, not primary in blood.<br><br>D) Protein buffer: Contributes, but not the primary.'
    },
    {
        question: 'Absolute indication of splenectomy is',
        options: [
            'Lymphoma',
            'Thelassemia',
            'Leukemia',
            'Grade V spleen injury'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Grade V spleen injury<br><br>Grade V spleen injury: Massive injury with shattered spleen — life-saving splenectomy.<br><br>Other Options:<br>A) Lymphoma: Not absolute — only if symptomatic or diagnostic need.<br><br>B) Thalassemia: Relative indication — if hypersplenism or transfusion-dependent.<br><br>C) Leukemia: Again, not absolute.'
    },
    {
        question: 'Leukocyte induced acute tissue injury is',
        options: [
            'Arthritis',
            'Asthma',
            'Atherosclerosis',
            'Pulmonary fibrosis'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Arthritis<br><br>Arthritis: Correct. In acute inflammatory arthritis (like gout or septic arthritis), neutrophils infiltrate joints and release enzymes and ROS causing tissue damage. Example: Gouty arthritis involves urate crystals that attract neutrophils, leading to leukocyte-mediated injury.<br><br>Other Options:<br>B) Asthma: Though leukocytes like eosinophils play a role in chronic inflammation in asthma, it is not primarily an acute leukocyte-induced tissue injury. It is more of a chronic hypersensitivity reaction.<br><br>C) Atherosclerosis: It is a chronic inflammatory disease, with macrophages and T cells playing a long-term role in plaque formation. Not typically classified under acute leukocyte-induced injury.<br><br>D) Pulmonary fibrosis: This is the result of chronic inflammation and repair, often involving fibroblast activation and collagen deposition. It’s chronic, not acute, and leukocyte injury is not the predominant mechanism.'
    },
    {
        question: 'Most common cause of Epistaxis is',
        options: [
            'Idiopathic',
            'Hypertension',
            'Thrombocytopenia',
            'Coagulation disorder'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Idiopathic<br><br>Idiopathic: Most common cause, especially from Little’s area/Kiesselbach’s plexus.<br><br>Other Options:<br>B) Hypertension: A known cause, especially in older adults, but not the most common.<br><br>C) Thrombocytopenia: Rare, usually associated with generalized bleeding.<br><br>D) Coagulation disorder: Less common and usually seen in known bleeding disorders.'
    },
    {
        question: 'Choice of intravenous fluid in burn patient is',
        options: [
            'Hartman`s solution',
            '5% Dextrose in Aqua',
            '5% Dextrose in normal saline',
            'Hypertonic Normal saline'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Hartmann’s solution<br><br>Hartmann’s (Ringer’s lactate): Best fluid for initial resuscitation in burns — closely mimics plasma.<br><br>Other Options:<br>B) 5% Dextrose in Aqua: No electrolytes, not suitable for volume resuscitation.<br><br>C) 5% Dextrose in normal saline: Hyperosmolar, not ideal for large-volume replacement.<br><br>D) Hypertonic saline: Can cause fluid shifts, not firstline.'
    },
    {
        question: 'Most activity growing area of a long bone is',
        options: [
            'Diaphysis',
            'Epiphysis',
            'Epiphysial Cartilage',
            'Metaphysis'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Epiphyseal cartilage<br><br>Epiphyseal cartilage (growth plate): Site of longitudinal growth.<br><br>Other Options:<br>A) Diaphysis: Shaft of the bone, not growth center.<br><br>B) Epiphysis: End part of bone but not the main growth plate.<br><br>D) Metaphysis: Rich vascular area but not the growth zone itself.'
    },
    {
        question: 'In ECG, which feature is indicative for thrombolytic therapy?',
        options: [
            'New onset LBBB',
            'ST depression',
            'Appearance of Q wave',
            'T inversion'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) New onset LBBB<br><br>New onset LBBB: Considered a STEMI equivalent — immediate thrombolysis or PCI is warranted.<br><br>Other Options:<br>B) ST depression: Indicates ischemia but not a trigger for thrombolysis.<br><br>C) Appearance of Q wave: Indicates old infarct.<br><br>D) T inversion: Can be seen in ischemia but not an indication for thrombolytics.'
    },
    {
        question: 'Secondary hypertension is caused by',
        options: [
            'Conn`s Syndrome',
            'Burn',
            'Renal ischemia',
            'Septic Shock'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Conn’s Syndrome<br><br>Conn’s Syndrome: Primary hyperaldosteronism → sodium retention → HTN → secondary HTN.<br><br>Other Options:<br>B) Burn: Can lead to fluid shifts but not chronic HTN.<br><br>C) Renal ischemia: True, also causes secondary HTN (via renin-angiotensin), but not the best choice over Conn’s.<br><br>D) Septic shock: Associated with hypotension, not HTN.'
    },
    {
        question: 'Component of Active management of third stage of labour (AMTSL) is',
        options: [
            'Aortic compression',
            'inj. Oxytocin 10 units IM',
            'Perineal message',
            'examination of cervix'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Inj. Oxytocin 10 units IM<br><br>Oxytocin 10 units IM: Gold standard to prevent postpartum hemorrhage.<br><br>Other Options:<br>A) Aortic compression: Emergency measure in PPH, not routine AMTSL.<br><br>C) Perineal massage: Not part of AMTSL.<br><br>D) Cervix exam: Done but not a component of AMTSL.'
    },
    {
        question: 'Mycobacterium tuberculosis is stained by',
        options: [
            'Giemsa stain',
            'Gram stain',
            'Silver stain',
            'Ziehl-Neelson stain'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Ziehl-Neelsen stain<br><br>Ziehl-Neelsen stain: Acid-fast stain — stains mycolic acid in MTB cell wall.<br><br>Other Options:<br>A) Giemsa: Used for parasites like malaria.<br><br>B) Gram stain: Mycobacteria are gram-indeterminate.<br><br>C) Silver stain: For fungi, pneumocystis.'
    },
    {
        question: 'Cephalosporin appropriate for renal impairment is',
        options: [
            'Cefazolin',
            'Cefotetan',
            'Ceftriaxone',
            'Cefuroxime'
        ],
        corrAns: 2,
        explanation:'Correct Answer: C) Ceftriaxone<br><br>Ceftriaxone: Mostly excreted by liver → safer in renal impairment.<br><br>Other Options:<br>A) Cefazolin: Requires dose adjustment in renal failure.<br><br>B) Cefotetan: Dose adjustment needed.<br><br>D) Cefuroxime: Excreted renally → not ideal without dose adjustment.'
    },
    {
        question: 'First step in blood coagulation is',
        options: [
            'Activation of clotting factors',
            'Clot retraction',
            'Fibrin mesh formation',
            'Platelet aggregation'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Platelet aggregation<br><br>Platelet aggregation: Initial step — forms the temporary hemostatic plug.<br><br>Other Options:<br>A) Activation of clotting factors: Occurs after platelet plug forms.<br><br>B) Clot retraction: Final phase of hemostasis.<br><br>C) Fibrin mesh formation: Later stage to stabilize clot.'
    },
    {
        question: 'Cause of maternal death in Eclampsia is',
        options: [
            'Retained Placenta',
            'Ruptured Uterus',
            'Cerebral hemorrhage',
            'Septicemia'
        ],
        corrAns: 2,
        explanation: 'Correct Answer: C) Cerebral hemorrhage<br><br>Cerebral hemorrhage: Raised BP → hemorrhage → coma/death — most common direct cause in eclampsia.<br><br>Other Options:<br>A) Retained placenta: Causes hemorrhage but not the usual cause of death in eclampsia.<br>B) Ruptured uterus: Obstetric emergency but not due to eclampsia.<br>D) Septicemia: Less likely unless secondary infection occurs.'
    },
    {
        question: 'Which of the following drug can be used in a pregnant lady with Rheumatoid Arthritis?',
        options: [
            'Methotrexate',
            'Sulfasalazine',
            'Leflunamide',
            'Mycophenolate Mofetil'
        ],
        corrAns: 1,
        explanation: 'Correct Answer: B) Sulfasalazine<br><br>Sulfasalazine: Safe in pregnancy; commonly used in inflammatory arthritis.<br><br>Other Options:<br>A) Methotrexate: Teratogenic — contraindicated.<br>C) Leflunomide: Highly teratogenic; contraindicated.<br>D) Mycophenolate mofetil: Teratogenic immunosuppressant.'
    },
    {
        question: 'Fibrinolysis is done by',
        options: [
            'Plasminogen',
            'Prothrombin',
            'Fibrinogen',
            'Haptoglobin'
        ],
        corrAns: 0,
        explanation: 'Correct Answer: A) Plasminogen<br><br>Plasminogen: Converted to plasmin → breaks down fibrin clots.<br><br>Other Options:<br>B) Prothrombin: Involved in coagulation, not fibrinolysis.<br>C) Fibrinogen: Precursor to fibrin (forms clots), not breakdown.<br>D) Haptoglobin: Binds free hemoglobin, unrelated to clotting.'
    },
    {
        question: 'Which of the following is true for wound healing by secondary intention?',
        options: [
            'Takes place is clean wound',
            'Fine scar formation',
            'Applicable for infected wound',
            'Less evidence of inflammation'
        ],
        corrAns: 2,
        explanation: 'Correct Answer: C) Applicable for infected wound<br><br>Applicable for infected wound: Left open to heal from base — e.g., abscess cavity.<br><br>Other Options:<br>A) Takes place in clean wound: Clean wounds → primary intention.<br>B) Fine scar formation: Secondary intention → larger scars.<br>D) Less evidence of inflammation: More inflammation and granulation occurs.'
    },
    {
        question: 'A 35-year-old woman presented with palpitation, excessive sweating and heat intolerence for 02 weeks; her serum FT3 & FT4 levels were high and TSH level was undetectable; radio iodine uptake of thyroid gland was low. The most likely diagnosis is',
        options: [
            'Graves disease',
            'Toxic adenoma',
            'Toxic multi-noduler goitre',
            'Sub acute thyroiditis'
        ],
        corrAns: 3,
        explanation:'Correct Answer: D) Subacute thyroiditis<br><br>Subacute thyroiditis: Preformed hormone release → low TSH, low uptake, and self-limiting.<br><br>Other Options:<br>A) Graves disease: High iodine uptake.<br><br>B) Toxic adenoma: Focal high uptake.<br><br>C) Toxic multinodular goitre: Patchy uptake.'
    },
    {
        question: 'Clinical feature of minor surgical site infection is',
        options: [
            'Mild sero-sanguineous discharge',
            'Copious purulent discharge',
            'Fever',
            'Formation of huge granulation tissue'
        ],
        corrAns: 0,
        explanation: 'Correct Answer: A) Mild serosanguinous discharge<br><br>Mild serosanguinous discharge: Common in minor, superficial infections.<br><br>Other Options:<br>B) Copious purulent discharge: Suggests major or deep infection.<br>C) Fever: Indicates systemic involvement.<br>D) Huge granulation tissue: Seen in chronic non-healing wounds.'
    },
    {
        question: 'A 45-year-old man has been suffering from cirrhosis of liver due to Hepatitis B Virus; the sign of decompensation of cirrhosis is',
        options: [
            'Loss of hair',
            'Splenomegaly',
            'Ascites',
            'Testicular atrophy'
        ],
        corrAns: 2,
        explanation: 'Correct Answer: C) Ascites<br><br>Ascites: Indicates portal hypertension and hepatic dysfunction — hallmark of decompensation.<br><br>Other Options:<br>A) Loss of hair: Non-specific.<br>B) Splenomegaly: May occur in portal hypertension but not a marker of decompensation.<br>D) Testicular atrophy: May occur in chronic liver disease, but not defining decompensation.'
    },
    {
        question: 'Causes of painless jaundice in surgical ward is',
        options: [
            'Cholelithiasis',
            'Cholangitis',
            'Mucocele of gall bladder',
            'Peri-ampullary carcinoma'
        ],
        corrAns: 3,
        explanation: 'Correct Answer: D) Peri-ampullary carcinoma<br><br>Periampullary carcinoma: Obstructs bile flow without pain — “painless progressive jaundice”.<br><br>Other Options:<br>A) Cholelithiasis: Painful jaundice due to obstruction.<br>B) Cholangitis: Pain, fever, jaundice (Charcot’s triad).<br>C) Mucocele of gallbladder: Rare and not a typical cause of jaundice.'
    },
    {
        question: 'Cause of intrauterine death (IUD) is',
        options: [
            'Diabetes Mellitus',
            'Respiratory distress syndrome',
            'Breech presentation',
            'Bicornuate Uterus'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Diabetes Mellitus<br><br>Diabetes Mellitus: Poorly controlled maternal diabetes can cause fetal hypoxia, macrosomia, congenital malformations → IUD.<br><br>Other Options:<br>B) Respiratory distress syndrome: Postnatal condition.<br><br>C) Breech presentation: Can cause complications during delivery but not a direct IUD cause.<br><br>D) Bicornuate uterus: May increase miscarriage risk but not the most common cause of IUD.'
    },
    {
        question: 'A 40-year old man presented at Medicine OPD with recurrent haemoptysis for last 05 years: general examination revealed clubbing. Which one of the following is the most likely diagnosis',
        options: [
            'Bronchiectasis',
            'Interstitial Lung discase',
            'Mitral Stenosis',
            'Lung Cancer'
        ],
        corrAns: 0,
        explanation:'Correct Answer: A) Bronchiectasis<br><br>Bronchiectasis: Chronic productive cough, hemoptysis, clubbing — hallmark triad.<br><br>Other Options:<br>B) Interstitial lung disease: Clubbing may occur but hemoptysis is rare.<br><br>C) Mitral stenosis: May cause hemoptysis but not recurrent for years with clubbing.<br><br>D) Lung cancer: May cause hemoptysis, but less likely over 5 years with stable symptoms.'
    },
    {
        question: 'The largest gland of human body is',
        options: [
            'Adrenal',
            'Liver',
            'Pancreas',
            'Thyroid'
        ],
        corrAns: 1,
        explanation:'Correct Answer: B) Liver<br><br>Liver: Largest gland — both endocrine (glucose metabolism, albumin) and exocrine (bile).<br><br>Other Options:<br>A) Adrenal: Small endocrine gland.<br><br>C) Pancreas: Mixed gland but smaller.<br><br>D) Thyroid: Largest endocrine gland only, but not overall largest.'
    },
    {
        question: 'Consent become invalid if taken from',
        options: [
            'Insane person',
            'Elderly person',
            'Illiterate person',
            'Sick person'
        ],
        corrAns: 0,
        explanation: 'Correct Answer: A) Insane person<br><br>Insane person: Lacks legal capacity to understand → consent is invalid.<br><br>Other Options:<br>B) Elderly person: Valid if mentally sound.<br>C) Illiterate person: Consent valid if information is properly explained and understood.<br>D) Sick person: As long as mental capacity is intact, consent is valid.'
    },
    {
        question: 'The EPI vaccine given at birth is',
        options: [
            'BCG',
            'Diphtheria',
            'Measles',
            'Tetanus'
        ],
        corrAns: 0,
        explanation: 'Correct Answer: A) BCG<br><br>BCG: Given at birth to prevent severe forms of tuberculosis.<br><br>Other Options:<br>B) Diphtheria: Part of DPT — given at 6 weeks.<br>C) Measles: Given at 9 months.<br>D) Tetanus: Not directly given at birth (Tetanus toxoid given to mothers antenatally).'
    },
    {
        question: 'Ligature mark in typical hanging is',
        options: [
            'Completely encircling neck',
            'Continuous',
            'Oblique',
            'Transverse'
        ],
        corrAns: 2,
        explanation: 'Correct Answer: C) Oblique<br><br>Oblique: Typical of hanging — runs upward and obliquely due to suspension.<br><br>Other Options:<br>A) Completely encircling neck: More common in strangulation.<br>B) Continuous: Ligature marks in hanging are often incomplete.<br>D) Transverse: Seen in strangulation, not hanging.'
    },
    {
        question: 'Which of the following is a common complication of SGLT2 inhibitors?',
        options: [
            'Genital infection',
            'Lactic acidosis',
            'Fluid retention',
            'Peripheral neuropathy'
        ],
        corrAns: 0,
        explanation: 'Correct Answer: A) Genital infection<br><br>Genital infection: Due to glycosuria, common in both males and females.<br><br>Other Options:<br>B) Lactic acidosis: More associated with metformin.<br>C) Fluid retention: Not typical; more with TZDs (e.g., pioglitazone).<br>D) Peripheral neuropathy: Not a common adverse effect of SGLT2 inhibitors.'
    },
    {
        question: 'In normal pregnancy',
        options: [
            'Factor X increases',
            'Antithrombin III concentration increases',
            'Venous pressure falls',
            'Iron binding capacity falls'
        ],
        corrAns: 0,
        explanation: 'Correct Answer: A) Factor X increases<br><br>Factor X increases: Coagulation factors like fibrinogen, factor VII, VIII, X increase — pregnancy is a hypercoagulable state.<br><br>Other Options:<br>B) Antithrombin III concentration increases: It decreases, enhancing coagulation tendency.<br>C) Venous pressure falls: It rises due to mechanical pressure by gravid uterus.<br>D) Iron binding capacity falls: It increases due to elevated transferrin levels.'
    },
    {
        question: 'Antigen test for COVID-19 is featured by',
        options: [
            'High accuracy',
            'High sensitivity',
            'High specificity',
            'Low cost'
        ],
        corrAns: 3,
        explanation: 'Correct Answer: D) Low cost<br><br>Low cost: Rapid antigen tests are cheap and used for mass screening.<br><br>Other Options:<br>A) High accuracy: Less accurate than RT-PCR.<br>B) High sensitivity: Sensitivity is low, especially in asymptomatic patients.<br>C) High specificity: Moderate, not the highest.'
    },
    {
        question: 'Criteria of an ideal suture material is',
        options: [
            'Shrimable',
            'Non Predictable tissue behavior',
            'Non Electrolyte',
            'Carcinogenic'
        ],
        corrAns: 2,
        explanation: 'Correct Answer: C) Non-electrolyte<br><br>Non-electrolyte: Reduces tissue reaction and avoids galvanic corrosion with metals.<br><br>Other Options:<br>A) Shrimable: Not a valid term in suture material context.<br>B) Non-predictable tissue behavior: Ideal material should have predictable behavior.<br>D) Carcinogenic: Absolutely undesirable in any material.'
    },
    {
        question: 'Co-administration of Phenobarbital & warfarin shows',
        options: [
            'Antiplatelet effect',
            'Fibrinolytic effect',
            'Increased bleeding tendency',
            'Thromboembolic episode'
        ],
        corrAns: 3,
        explanation: 'Correct Answer: D) Thromboembolic episode<br><br>Thromboembolic episode: Due to reduced warfarin levels (CYP enzyme induction by phenobarbital) → decreased anticoagulation → increased risk of clot formation.<br><br>Other Options:<br>A) Antiplatelet effect: Warfarin acts on coagulation factors, not platelets.<br>B) Fibrinolytic effect: Warfarin does not increase clot breakdown.<br>C) Increased bleeding tendency: Phenobarbital induces enzymes and reduces warfarin effect, not bleeding risk.'
    }

];