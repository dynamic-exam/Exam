var title = '39th Special BCS | Medical (1-50)';
var time = 35;
var mark = 1;
var negMark = 0.5;
var opLabel = ['A', 'B', 'C', 'D'];
var sheet = 'https://script.google.com/macros/s/AKfycbxFRSAiJoSIEFqcSGetUJNDhTj6eiKfbxcHd1gTzDNVbeDARAoOf0woHLpUQ5y9CNNU/exec';
var questions = [
    {
        question: 'The superficial Inguinal ring is an opening in the:',
        options: [
            'Internal obllque aponcurosis',
            'Conjoint tendon',
            'External oblique aponeurosis',
            'Fascia transversalis'
        ],
        corrAns: 2
    },
    {
        question: 'Which of the following type of necrosis is seen in ancute myocardial infarction?',
        options: [
            'Cascous necrosis',
            'Gangrenous necrosis',
            'Coagulative necrosis',
            'Fat necrosis'
        ],
        corrAns: 2
    },
    {
        question: 'Main seat of peripheral resistance is:',
        options: [
            'Arteriole',
            'Metaarteriole',
            'Venule',
            'Capillary'
        ],
        corrAns: 0
    },
    {
        question: 'Blood group antigens are:',
        options: [
            'Present in the Hb molecules',
            'Present in the dense granules of platelets',
            'Present in the RBC membrance',
            'Present in the plasma'
        ],
        corrAns: 2
    },
    {
        question: 'Signs of upper motor neuron lesion include all except:',
        options: [
            'Weakness or paralysis of limb',
            'Hypertonia of muscles',
            'Loss of all reflexes',
            'Planter response extensor'
        ],
        corrAns: 2
    },
{
        question: 'Neonates may be infected with except:',
        options: [
            'Brucellosis',
            'Hepatitis B virus',
            'Malaria',
            'Shigellosis'
        ],
        corrAns: 2
    },
    {
        question: 'Insulin increases:',
        options: [
            'Lipolysis',
            'Ketogenesis',
            'Glycogenesis',
            'Gluconeogenesis'
        ],
        corrAns: 2
    },
    {
        question: 'Commonest cause of hepatic cirrhosis in Bangladesh is:',
        options: [
            'HAV',
            'HBV',
            'HCV',
            'HEV'
        ],
        corrAns: 1
    },
    {
        question: 'Dermis:',
        options: [
            'Is a layer of epithelial tissue',
            'Is formed by connective tissue',
            'Contain melanocytes',
            'Possess keratinocytes'
        ],
        corrAns: 1
    },
    {
        question: 'Clinical cyanosis is due to:',
        options: [
            'Adult hemoglobin',
            'Reduced hemoglobin',
            'Fetal hemoglobin',
            'Biliverdin'
        ],
        corrAns: 2
    },
    {
        question: 'Clinical toxicity occurs in all of the following micro nutrients except:',
        options: [
            'Iron',
            'Iodine',
            'Fluoride',
            'Copper'
        ],
        corrAns: 1
    },
    {
        question: 'Prednisolone 5 mg is equivalent to:',
        options: [
            'Hydrocortisone 40mg',
            'Hydrocortisone 20mg',
            'Dexamethasone 2mg',
            'Dexamethasone 8mg'
        ],
        corrAns: 1
    },
    {
        question: '"Ghon Focus" is situated in:',
        options: [
            'Pleura',
            'Pericardium',
            'Peritoneum',
            'Lung'
        ],
        corrAns: 3
    },
    {
        question: 'Which of the following crosses the ureter in the female as it approaches the ureterovesical junction?',
        options: [
            'Ovarian artery',
            'Uterine artery',
            'Obturator nerve',
            'Internal illiac artery'
        ],
        corrAns: 1
    },
    {
        question: 'Histamin causes:',
        options: [
            'Hypertension',
            'Vasoconstriction',
            'Vasodilatation',
            'Bradycardia'
        ],
        corrAns: 2
    },
    {
        question: 'Atherosclerosis:',
        options: [
            'Begin after 40 years',
            'Charactesized by focal deposition of coilgen, protein and fat',
            'Is a progressive inflammatory disorder of the arterial wall',
            'Involves only some blood vessels of body'
        ],
        corrAns: 2
    },
    {
        question: 'Erythroblastosis fetalis may develop when:',
        options: [
            'Rh (+) mother carries Rh(-) fetus',
            'Rh (-) mother carries Rh (+) fetus',
            'Rh (+) mother carries Rh (+) fetus',
            'Rh (-) mother carrier Rh (-) fetus'
        ],
        corrAns: 1
    },
    {
        question: 'Meiosis produces:',
        options: [
            '4 Diploid cells',
            '2 Diploid cells',
            '4 haploid cells',
            '2 Haploid cells'
        ],
        corrAns: 2
    },
    {
        question: 'Smooth muscle is found in:',
        options: [
            'Soft palate',
            'Diaphargm',
            'Wall of blood vessel',
            'Tongue'
        ],
        corrAns: 2
    },
    {
        question: 'Which of the following may cause hypercalcaemia?',
        options: [
            'Multiple myeloma',
            'Frusemide therapy',
            'Hypoparathyroidism',
            'Cushing’s syndrome'
        ],
        corrAns: 0
    },
    {
        question: 'In which region, deep fascia is absent?',
        options: [
            'Sole',
            'Face',
            'Neck',
            'Abdominal Wall'
        ],
        corrAns: 1
    },
    {
        question: 'Which one is false about lung?',
        options: [
            'Conical in shape',
            'The right lung is slightly larger than the left',
            'The left lung has only an oblique fissure',
            'The left lung is divided into 3 lobes'
        ],
        corrAns: 3
    },
    {
        question: 'Ovulation occurs:',
        options: [
            'During female orgasm',
            '14 days after the onset of menstruation',
            '14 days before the onset of next menstruation',
            'During the midpart of menstruation'
        ],
        corrAns: 1
    },
    {
        question: 'The function of mitochondria includes:',
        options: [
            'Anaerobic glycolysis',
            'Activation of intrinsic pathway of apoptosis',
            'Vesicle transport',
            'Proton pump operation'
        ],
        corrAns: 3
    },
    {
        question: 'The function of mitochondria includes:',
        options: [
            'Anaerobic glycolysis',
            'Activation of intrinsic pathway of apoptosis',
            'Vesicle transport',
            'Proton pump operation'
        ],
        corrAns: 3
    },
    {
        question: 'Rx-39 strip test is used to diagnose:',
        options: [
            'Malaria',
            'Kala-azar',
            'Dengue fever',
            'Tuberculosis'
        ],
        corrAns: 1
    },
    {
        question: 'Which one of the following clotting factor is called primary clotting factor?',
        options: [
            'Fibrinogen',
            'Stable factor',
            'Labile factor',
            'Antihemophilic factor'
        ],
        corrAns: 0
    },
    {
        question: 'Cardiogenic shock may be due to:',
        options: [
            'Pump failure',
            'Infection',
            'Hypovolemia',
            'Neurogenic'
        ],
        corrAns: 0
    },
    {
        question: 'Which one of the following is responsible for carpal tunnel syndrome?',
        options: [
            'Axillary nerve compression',
            'Ulnar nerve compression',
            'Median nerve compression',
            'Radial nerve compression'
        ],
        corrAns: 2
    },
    {
        question: 'Abnormal constituent of urine is:',
        options: [
            'Creatinine',
            'Urea',
            'Disodium monohydrogen phosphate',
            'Albumin'
        ],
        corrAns: 3
    },
    {
        question: 'Site of absorption of vitamin B12 is:',
        options: [
            'Stomach',
            'Duodenum',
            'Jejunum',
            'Ileum'
        ],
        corrAns: 3
    },
    {
        question: 'Causes of renal failure in multiple myeloma includes all except:',
        options: [
            'Membranous glomerulonephritis',
            'Para protein deposition',
            'Hypocalcaemia',
            'Amyloid deposition'
        ],
        corrAns: 2
    },
    {
        question: 'Superior mesenteric artery supplies blood to:',
        options: [
            'First part of duodenum',
            'Left 1/3rd of transverse colon',
            'Gall bladder',
            'The appendix'
        ],
        corrAns: 3
    },
    {
        question: 'The value of lung tidal volume is:',
        options: [
            '1500 ml',
            '2000 ml',
            '500 ml',
            '5000 ml'
        ],
        corrAns: 2
    },
    {
        question: 'Which of the following occurs during reverse transcriptase polymerase chain reaction?',
        options: [
            'Proteins are converted to DNA',
            'DNA is converted to RNA',
            'Used to amplify DNA',
            'RNA is converted to DNA'
        ],
        corrAns: 3
    },
    {
        question: 'Adult polycystic kidney disease is a condition of:',
        options: [
            'Chromosomal abnormality',
            'X-linked recessive',
            'Autosomal dominant trait',
            'Autosomal recessive'
        ],
        corrAns: 2
    },
    {
        question: 'A 60 year old gentleman has vitamin B12 deficiency due to pernicious anemia. Which is unlikely to happen?',
        options: [
            'Corticospinal tract involvement',
            'Seizure',
            'Posterior column involvement',
            'Optic atrophy'
        ],
        corrAns: 0
    },
    {
        question: 'In progressive phase of shock:',
        options: [
            'Survival is not possible',
            'Complete renal shutdown',
            'Metabolic alkalosis',
            'There is widespread tissue hypoxia'
        ],
        corrAns: 3
    },
    {
        question: 'Microcytic hypochromic anemia is found in:',
        options: [
            'Liver disease',
            'Infective endocarditis',
            'Thalassaemia',
            'Multiple myeloma'
        ],
        corrAns: 2
    },
    {
        question: 'Rh incompatibility is:',
        options: [
            'Atopic',
            'Anaphylactic',
            'Cytotoxic',
            'Delayed hypersensitivity'
        ],
        corrAns: 2
    },
    {
        question: 'Nephrotic syndrome includes?',
        options: [
            'Hematuria',
            'Hypertension',
            'Oliguria',
            'Overt proteinuria'
        ],
        corrAns: 3
    },
    {
        question: 'Extracellular matrix is more in:',
        options: [
            'Nervous tissue',
            'Epithelial tissue',
            'Muscular tissue',
            'Connective tissue'
        ],
        corrAns: 3
    },
    {
        question: 'Heparin is:',
        options: [
            'A natural anticoagulant',
            'An enzyme',
            'Secreted by goblet cell',
            'Found in the bone marrow'
        ],
        corrAns: 0
    },
    {
        question: 'Which of the following condition is not precancerous?',
        options: [
            'Solar keratosis of skin',
            'Ulcerative colitis',
            'Cervical dysplasia',
            'Glycogen storage disease'
        ],
        corrAns: 3
    },
    {
        question: 'Mycobacterium leprae has special predilection for:',
        options: [
            'Epithelium',
            'Lymphatics',
            'Dwan cells',
            'Dorsal root ganglion'
        ],
        corrAns: 2
    },
    {
        question: 'Autonomic ganglion are:',
        options: [
            'Adrenergic',
            'Noradrenergic',
            'Cholinergic',
            'Dopaminergic'
        ],
        corrAns: 2
    },
    {
        question: 'Basal cell carcinoma includes:',
        options: [
            'No metastasis',
            'Typically at non sun exposure',
            'Mutation of RB gene occur',
            'Early lesions are pale'
        ],
        corrAns: 0
    },
    {
        question: 'At which phase of cardiac cycle does the atrioventricular valve open?',
        options: [
            'During atrial filling',
            'During isovolumetric contraction',
            'During isovolumetric relaxation',
            'During ventricular filling'
        ],
        corrAns: 3
    },
    {
        question: 'Causes of bilateral leg swelling does not always include:',
        options: [
            'Hypoproteinaemia',
            'Heart failure',
            'Kidney failure',
            'Deep vein thrombosis'
        ],
        corrAns: 3
    },
    {
        question: 'Which type of shock is caused by failure of the heart to pump effectively?',
        options: [
            'Septic shock',
            'Cardiogenic shock',
            'Hypovolemic shock',
            'Anaphylactic shock'
        ],
        corrAns: 1
    }
]