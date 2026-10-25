import React, { useState } from 'react';
import {
  ShieldAlert,
  Calendar as CalendarIcon,
  MessageCircle,
  Stethoscope,
  Settings,
  Search,
  Sparkles,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Plus,
  Send,
  Trash2,
  Globe,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Palette,
  UserCheck,
  UserX,
  Check
} from 'lucide-react';

// ==========================================
// 1. MOTHERLY COLOR PALETTES (Base + 4 More)
// ==========================================
const PALETTES = {
  baseTrio: {
    id: 'baseTrio',
    name: 'Original Trio (Rodeo Dust, Antique White & Sage)',
    description: 'Your signature grounded palette of warm clay, antique linen, and botanical sage.',
    rodeo: '#DCAE96',
    antique: '#F5EBDC',
    sage: '#A5B890',
    sageDark: '#6E8258',
    sageLight: '#EFF4EC',
    bgCanvas: '#FAF6F0',
    textMain: '#2A3026',
    textMuted: '#687263',
    cardBorder: '#E6D9C8',
  },
  blossomNursery: {
    id: 'blossomNursery',
    name: 'Blossom & Rosewater',
    description: 'Soft maternal blush, warm oatmilk cream, and dusty rosewood.',
    rodeo: '#E2A9B2',
    antique: '#FBF0F2',
    sage: '#C47D8B',
    sageDark: '#8F4F5C',
    sageLight: '#F9E8EC',
    bgCanvas: '#FFF9FA',
    textMain: '#382428',
    textMuted: '#7A5C62',
    cardBorder: '#EED6DA',
  },
  lavenderLullaby: {
    id: 'lavenderLullaby',
    name: 'Lavender Lullaby & Oat',
    description: 'Evening calm with gentle wisteria, chamomile cream, and muted heather.',
    rodeo: '#C5B4D6',
    antique: '#F3EFF8',
    sage: '#9381B5',
    sageDark: '#5E4B80',
    sageLight: '#EDE8F5',
    bgCanvas: '#FAF8FC',
    textMain: '#2B2538',
    textMuted: '#69607A',
    cardBorder: '#DFD6EC',
  },
  terracottaEarth: {
    id: 'terracottaEarth',
    name: 'Warm Terracotta & Honey',
    description: 'Sun-baked clay, golden almond milk, and olive leaf.',
    rodeo: '#D99B78',
    antique: '#F7EFE6',
    sage: '#B87A56',
    sageDark: '#8A5232',
    sageLight: '#F5E6DC',
    bgCanvas: '#FCF8F4',
    textMain: '#36261E',
    textMuted: '#786155',
    cardBorder: '#E8D5C5',
  },
  oceanBreeze: {
    id: 'oceanBreeze',
    name: 'Coastal Mist & Seafoam',
    description: 'Serene tidal blue, sand dollar white, and eucalyptus.',
    rodeo: '#9BBEC8',
    antique: '#EDF4F6',
    sage: '#729EA8',
    sageDark: '#47727C',
    sageLight: '#E3F0F2',
    bgCanvas: '#F7FAFB',
    textMain: '#1F3035',
    textMuted: '#5A7178',
    cardBorder: '#CFE0E5',
  }
};

// ==========================================
// 2. MULTI-LANGUAGE LOCALIZATION DICTIONARY
// ==========================================
const TRANSLATIONS = {
  en: {
    safeSpace: 'SAFE SPACE',
    subtitle: 'Evidence-Based & Comparison-Free',
    imPregnant: "I'm Pregnant",
    imPartner: "I'm a Partner",
    navCare: 'Care & Clinical',
    navChat: 'Ask Avena AI',
    navCalendar: 'Gentle Calendar',
    navRooms: 'Mom Rooms',
    navProviders: 'Find Providers',
    navYou: 'You & Style',
    nonCompareBold: "All pregnancies are different so don't compare yourself to others.",
    nonCompareSub: "Bump sizes, symptom onset, and milestones vary naturally. Never measure your worth or baby against anyone else's journey.",
    subSymptoms: 'Symptoms & Red Flags',
    subMyths: 'Real or Myth?',
    subTips: 'Scholarly Tips',
    searchPlaceholder: 'Search symptoms, headaches, kicks, myths, or hydration...',
    tapSymptomHint: "Tap 'Start Symptom in Calendar' to log when it began and view clinical escalation alerts:",
    normalTitle: 'TYPICAL PHYSIOLOGICAL VARIATION',
    redFlagTitle: 'WHEN IT BECOMES DANGEROUS / RED FLAG',
    footerText: "Avena supports you but doesn't replace your doctor or midwife. In an emergency, call 911.",
    crisisBanner: 'Maternal Mental Health Hotline: Call/Text 1-833-TLC-MAMA (1-833-852-6262) • Crisis Lifeline: 988',
  },
  es: {
    safeSpace: 'ESPACIO SEGURO',
    subtitle: 'Basado en Evidencia y Sin Comparaciones',
    imPregnant: 'Estoy Embarazada',
    imPartner: 'Soy la Pareja',
    navCare: 'Guía Clínica',
    navChat: 'Avena IA',
    navCalendar: 'Calendario Suave',
    navRooms: 'Círculo de Mamás',
    navProviders: 'Especialistas',
    navYou: 'Perfil y Color',
    nonCompareBold: 'Todos los embarazos son diferentes, así que no te compares con los demás.',
    nonCompareSub: 'El tamaño de la pancita, los síntomas y los tiempos varían naturalmente. Tu camino es único.',
    subSymptoms: 'Síntomas y Alertas',
    subMyths: '¿Mito o Realidad?',
    subTips: 'Consejos Clínicos',
    searchPlaceholder: 'Buscar síntomas, dolor de cabeza, movimientos, mitos...',
    tapSymptomHint: 'Registra cuándo comenzó un síntoma para ver cuándo acudir al médico:',
    normalTitle: 'VARIACIÓN FISIOLÓGICA NORMAL',
    redFlagTitle: 'CUÁNDO ES PELIGROSO / ALERTA MÉDICA',
    footerText: 'Avena te apoya pero no reemplaza a tu médico o partera. En una emergencia, llama al 911.',
    crisisBanner: 'Línea de Salud Mental Materna: 1-833-TLC-MAMA • Línea de Crisis: 988',
  },
  fr: {
    safeSpace: 'ESPACE SÛR',
    subtitle: 'Fondé sur la Science & Sans Comparaison',
    imPregnant: 'Je suis Enceinte',
    imPartner: 'Je suis Partenaire',
    navCare: 'Soins & Clinique',
    navChat: 'Avena IA',
    navCalendar: 'Calendrier Doux',
    navRooms: 'Cercle des Mamans',
    navProviders: 'Praticiens',
    navYou: 'Profil & Thèmes',
    nonCompareBold: 'Toutes les grossesses sont différentes, ne vous comparez pas aux autres.',
    nonCompareSub: 'La taille du ventre et les symptômes varient naturellement. Votre parcours est unique.',
    subSymptoms: 'Symptômes & Alertes',
    subMyths: 'Mythe ou Réalité ?',
    subTips: 'Conseils Scientifiques',
    searchPlaceholder: 'Rechercher symptômes, maux de tête, mouvements, mythes...',
    tapSymptomHint: "Suivez un symptôme pour connaître les signes d'urgence :",
    normalTitle: 'VARIATION PHYSIOLOGIQUE TYPIQUE',
    redFlagTitle: 'QUAND CONSULTER EN URGENCE / DRAPEAU ROUGE',
    footerText: "Avena vous soutient mais ne remplace pas votre médecin ou sage-femme. En cas d'urgence, appelez le 911.",
    crisisBanner: 'Ligne Santé Mentale Maternelle : 1-833-TLC-MAMA • Urgence Crise : 988',
  },
  pt: {
    safeSpace: 'ESPAÇO SEGURO',
    subtitle: 'Baseado em Evidências e Sem Comparações',
    imPregnant: 'Estou Grávida',
    imPartner: 'Sou Parceiro(a)',
    navCare: 'Guia Clínico',
    navChat: 'Avena IA',
    navCalendar: 'Calendário Suave',
    navRooms: 'Círculo de Mães',
    navProviders: 'Médicos e Parteiras',
    navYou: 'Perfil e Cores',
    nonCompareBold: 'Todas as gestações são diferentes, por isso não se compare com outras pessoas.',
    nonCompareSub: 'O tamanho da barriga e os sintomas variam naturalmente. Sua jornada é única.',
    subSymptoms: 'Sintomas e Alertas',
    subMyths: 'Mito ou Verdade?',
    subTips: 'Dicas Científicas',
    searchPlaceholder: 'Buscar sintomas, dor de cabeça, chutes, mitos...',
    tapSymptomHint: 'Registre o início de um sintoma para ver alertas de segurança:',
    normalTitle: 'VARIAÇÃO FISIOLÓGICA NORMAL',
    redFlagTitle: 'QUANDO SE TORNA PERIGOSO / SINAL DE ALERTA',
    footerText: 'A Avena apoia você, mas não substitui seu médico ou obstetriz. Em uma emergência, ligue 911.',
    crisisBanner: 'Linha de Saúde Mental Materna: 1-833-TLC-MAMA • Linha de Crise: 988',
  }
};

// ==========================================
// 3. SCHOLARLY CLINICAL DATABASES
// ==========================================
const SYMPTOMS_DB = [
  {
    id: 's1',
    title: 'Nausea & Food Aversions',
    meta: '1st & Early 2nd Trimester • ACOG Practice Bulletin No. 189 (2020)',
    tag: 'Clinical Guide',
    variation:
      'Mild to moderate waves of stomach distress, sensitivity to smells, improving with ginger, crackers, or small cold meals. Caused by peak hCG & hormonal shifts.',
    redFlag:
      'Inability to keep any liquids down for >24 hours, dizziness/fainting when standing, dark concentrated urine, or vomiting blood (signs of Hyperemesis Gravidarum). Contact your provider promptly.',
    isUrgentRedFlag: false,
  },
  {
    id: 's2',
    title: 'Headaches & Visual Changes',
    meta: '2nd & 3rd Trimester • ACOG Clinical Guidance on Preeclampsia',
    tag: 'High Priority Watch',
    variation:
      'Mild tension or sinus headaches triggered by posture, dehydration, or caffeine withdrawal that resolve with rest, hydration, and a cool compress.',
    redFlag:
      'RED FLAG ESCALATION: A severe, persistent throbbing headache that does not fade with rest, or ANY vision changes (blurriness, flashing spots, aura) accompanied by face/hand swelling. Call your provider or Labor & Delivery Triage immediately.',
    isUrgentRedFlag: true,
  },
  {
    id: 's3',
    title: 'Vaginal Spotting vs. Heavy Bleeding or Fluid Leak',
    meta: 'All Trimesters • CDC & WHO Maternal Safety Protocols',
    tag: 'Immediate Triage Info',
    variation:
      'Very light pink or brown spotting for a few hours after a pelvic exam or intimacy in an otherwise uncomplicated pregnancy (still worth mentioning to your clinic).',
    redFlag:
      'RED FLAG ESCALATION: Heavy vaginal bleeding (soaking a pad), passing clots, cramping pain, or watery fluid leaking/gushing from the vagina. Contact your provider or call 911 immediately.',
    isUrgentRedFlag: true,
  },
  {
    id: 's4',
    title: 'Baby Movement & Kick Patterns',
    meta: '3rd Trimester (Weeks 24–40+) • ACOG & NIH Perinatal Studies',
    tag: 'Fetal Well-being',
    variation:
      'Babies alternate between active rolling/kicking periods and quiet 20–40 minute sleep cycles. Every baby establishes their own personal rhythm.',
    redFlag:
      "RED FLAG ESCALATION: A noticeable decrease or sudden stop in your baby's usual movement pattern (fewer than 10 movements within 2 hours during a kick count). Do NOT wait until tomorrow—call Labor & Delivery Triage right away.",
    isUrgentRedFlag: true,
  },
  {
    id: 's5',
    title: 'Round Ligament Twinges & Pelvic Pressure',
    meta: '2nd Trimester (Weeks 14–27) • NIH PubMed PMC5089354',
    tag: 'Musculoskeletal',
    variation:
      'Brief, sharp 2-second pulling sensations along the lower sides of the belly when rolling over in bed, coughing, sneezing, or standing up quickly.',
    redFlag:
      'Continuous severe abdominal pain, rhythmic cramping coming more than 4–6 times an hour before 37 weeks, fever, chills, or burning during urination.',
    isUrgentRedFlag: false,
  },
  {
    id: 's6',
    title: 'Ankle & Foot Puffiness (Edema)',
    meta: '3rd Trimester • WHO Antenatal Care Recommendations',
    tag: 'Circulatory',
    variation:
      'Gradual, symmetrical mild swelling around the ankles and feet at the end of the day due to normal 50% blood volume expansion, improving after elevating legs.',
    redFlag:
      'RED FLAG ESCALATION: Sudden, rapid swelling in the face, around the eyes, or in the hands/fingers, or swelling in only one leg with calf pain/redness (DVT risk). Seek immediate medical evaluation.',
    isUrgentRedFlag: true,
  }
];

const MYTHS_DB = [
  {
    id: 'm1',
    claim: '"Severe heartburn means your baby will be born with a full head of hair."',
    verdict: 'Partially True!',
    explanation:
      'A Johns Hopkins clinical study found a genuine correlation: elevated estrogen and progesterone relax the lower esophageal sphincter (causing acid reflux) while also stimulating fetal scalp hair growth.',
    citation: 'Johns Hopkins Medical Institutions (Costigan et al., Birth)'
  },
  {
    id: 'm2',
    claim: '"You need to eat for two full adults starting in the first trimester."',
    verdict: 'Myth',
    explanation:
      'In the first trimester, your baby is tiny and requires zero extra daily calories—focus on nutrient density and folate. The 2nd trimester needs ~340 extra kcal/day, and the 3rd needs ~450 extra kcal/day.',
    citation: 'ACOG Nutrition During Pregnancy Guidelines'
  },
  {
    id: 'm3',
    claim: '"Cocoa butter lotions completely prevent stretch marks."',
    verdict: 'Myth',
    explanation:
      'Large Cochrane systematic reviews show topical creams do not prevent striae gravidarum more than placebo because stretch marks depend on genetics and deep dermal collagen. However, balms wonderfully soothe skin itching!',
    citation: 'Cochrane Database of Systematic Reviews'
  },
  {
    id: 'm4',
    claim: '"Carrying high or low reveals the baby\'s biological sex."',
    verdict: 'Myth',
    explanation:
      'How your bump sits is determined entirely by your torso length, abdominal muscle tone, uterine tilt, and the baby\'s position—never chromosomal sex.',
    citation: 'NIH / MedlinePlus Maternal Anatomy'
  }
];

const TIPS_DB = [
  {
    id: 't1',
    title: 'Left-Side Sleeping & Vena Cava Relief',
    category: 'Rest & Circulation',
    body: 'After 20 weeks, resting on your side (especially the left) prevents the uterus from pressing on the inferior vena cava, optimizing blood and oxygen flow to the placenta. Tuck a pillow between your knees.',
    citation: 'NIH NICHD Safe Pregnancy Sleep Guidance'
  },
  {
    id: 't2',
    title: 'Pelvic Floor Relaxation (Reverse Kegels)',
    category: 'Birth Preparation',
    body: 'Preparing for birth is just as much about releasing tension as building strength. Practice slow belly breaths while consciously softening your pelvic floor on each inhale.',
    citation: 'International Continence Society & ACOG'
  },
  {
    id: 't3',
    title: 'Steady Electrolyte Hydration',
    category: 'Daily Wellness',
    body: 'Sipping 8–10 cups (2.3L) of water throughout the day supports amniotic fluid volume and reduces irritable Braxton Hicks tightening.',
    citation: 'Institute of Medicine (IOM) Dietary Reference Intakes'
  }
];

const INITIAL_PROVIDERS = [
  {
    id: 'p1',
    name: 'Dr. Elena Rostova, MD, FACOG',
    specialty: 'OB/GYN',
    clinic: 'Women & Infants University Pavilion',
    city: 'Miami, FL',
    trustScore: 99,
    reviews: 164,
    tags: ['Trauma-Informed', 'Honors Birth Plans', 'Unrushed Visits', 'Bilingual (EN/ES)'],
    quote: 'Dr. Rostova sat at eye level with me and my partner, never rushed our questions, and made me feel completely safe.'
  },
  {
    id: 'p2',
    name: 'Maya Chen, MSN, CNM',
    specialty: 'Certified Nurse-Midwife',
    clinic: 'Gentle Beginnings Birth Sanctuary',
    city: 'Miami, FL',
    trustScore: 98,
    reviews: 210,
    tags: ['Physiological Birth', 'Waterbirth Support', 'Postpartum Warmth'],
    quote: 'Maya calmed every first-trimester fear I had with pure science and the warmest bedside manner.'
  },
  {
    id: 'p3',
    name: 'Dr. Marcus Vance, MD',
    specialty: 'Maternal-Fetal Medicine (MFM)',
    clinic: 'Regional Perinatal Center',
    city: 'Boston, MA',
    trustScore: 97,
    reviews: 95,
    tags: ['High-Risk Reassurance', 'Clear Explanations', 'Partner Inclusive'],
    quote: 'When we needed extra ultrasounds, Dr. Vance explained the data so gently that our anxiety melted away.'
  },
  {
    id: 'p4',
    name: 'Sofia Alvarez, CNM, WHNP',
    specialty: 'Certified Nurse-Midwife',
    clinic: 'Bloom Midwifery Collective',
    city: 'Austin, TX',
    trustScore: 99,
    reviews: 138,
    tags: ['Holistic Evidence', 'VBAC Supportive', 'Spanish/English'],
    quote: 'Never once compared my weight or bump to a chart—treated me as an individual human being.'
  }
];

const INITIAL_ROOMS = [
  {
    id: 'r1',
    author: 'Gentle Willow #408',
    isAnon: true,
    room: 'names',
    cityTag: 'Global Circle',
    time: '1h ago',
    content: 'We are falling in love with soft botanical and timeless names: Clara, Rowan, Elio, and Paloma. What names are bringing your heart peace lately? 🌿',
    warmth: 19,
    heard: 11
  },
  {
    id: 'r2',
    author: 'Valerie M.',
    isAnon: false,
    room: 'first-tri',
    cityTag: 'Miami, FL',
    time: '3h ago',
    content: 'Just a gentle reminder for anyone in weeks 6–11: growing a placenta takes massive metabolic energy. If all you did today was rest and drink water, you did enough.',
    warmth: 42,
    heard: 31
  },
  {
    id: 'r3',
    author: 'Quiet Blossom #119',
    isAnon: true,
    room: 'vent',
    cityTag: 'Global Circle',
    time: '5h ago',
    content: 'So grateful this app has no bump-comparison photos. People at work keep commenting on how I carry, and coming here reminds me my baby is growing at their own sacred pace.',
    warmth: 56,
    heard: 44
  },
  {
    id: 'r4',
    author: 'David (Partner)',
    isAnon: false,
    room: 'partners',
    cityTag: 'Global Circle',
    time: '6h ago',
    content: 'Fellow partners: keeping a small basket of ginger chews, cold electrolyte water, and crackers on her nightstand before bed has been a game-changer for morning nausea.',
    warmth: 38,
    heard: 22
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('care');
  const [careSubTab, setCareSubTab] = useState('symptoms');
  const [paletteKey, setPaletteKey] = useState('baseTrio');
  const [lang, setLang] = useState('en');
  const [role, setRole] = useState('mother');

  // User Profile & Local/Global State
  const [displayName, setDisplayName] = useState('');
  const [currentWeek, setCurrentWeek] = useState(20);
  const [locationMode, setLocationMode] = useState('global');
  const [userCity, setUserCity] = useState('Miami, FL');
  const [profileSavedToast, setProfileSavedToast] = useState(false);

  // Search & Filter States
  const [careSearch, setCareSearch] = useState('');
  const [providerSearch, setProviderSearch] = useState('');
  const [providerLocalOnly, setProviderLocalOnly] = useState(false);
  const [providers, setProviders] = useState(INITIAL_PROVIDERS);
  const [showAddProviderModal, setShowAddProviderModal] = useState(false);
  const [newDocName, setNewDocName] = useState('');
  const [newDocSpecialty, setNewDocSpecialty] = useState('OB/GYN');
  const [newDocClinic, setNewDocClinic] = useState('');
  const [newDocCity, setNewDocCity] = useState('');
  const [newDocQuote, setNewDocQuote] = useState('');

  // Calendar & Symptom Start Tracker State
  const todayStr = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 9, 1));
  const [logSymptomName, setLogSymptomName] = useState('Mild Nausea & Queasiness');
  const [logStartTime, setLogStartTime] = useState('08:30');
  const [logNote, setLogNote] = useState('');
  const [logWater, setLogWater] = useState(6);
  const [calendarLogs, setCalendarLogs] = useState([
    {
      id: 'init-1',
      date: todayStr,
      startedTime: '09:15',
      symptom: 'Round Ligament Twinges',
      note: 'Felt a quick twinge standing up from the couch. Rested and sipped water.',
      waterCups: 7,
      isRedFlag: false,
      escalationGuide: 'Safe if brief and positional. Escalate to your doctor if pain becomes constant, severe, or is accompanied by fever, chills, or bleeding.'
    }
  ]);

  // Mom Rooms State
  const [activeRoomFilter, setActiveRoomFilter] = useState('all');
  const [roomPosts, setRoomPosts] = useState(INITIAL_ROOMS);
  const [postRoomCat, setPostRoomCat] = useState('names');
  const [postAnon, setPostAnon] = useState(true);
  const [postContent, setPostContent] = useState('');

  // AI Chat State
  const [chatMessages, setChatMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Hello, I'm Avena 🌿 Whether you want to check a symptom with ACOG/NIH evidence, ask me to log something onto your Gentle Calendar, or find ways to feel comforted today, I am here for you. Remember: all pregnancies are different, so never compare your journey to anyone else's.\n\nAvena supports you but doesn't replace your doctor or midwife. In an emergency, call 911.`
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const colors = PALETTES[paletteKey];
  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const getEscalationForSymptom = (sym) => {
    const lower = sym.toLowerCase();
    if (
      lower.includes('bleed') ||
      lower.includes('headache') ||
      lower.includes('vision') ||
      lower.includes('fluid') ||
      lower.includes('leak') ||
      lower.includes('movement') ||
      lower.includes('swelling in face')
    ) {
      return {
        isRedFlag: true,
        warning:
          'URGENT RED FLAG: Heavy bleeding, severe headache, vision changes, fluid leaking, or reduced baby movement require immediate medical evaluation. Contact your provider or call 911 right away.'
      };
    }
    return {
      isRedFlag: false,
      warning:
        'Monitor gently. This symptom becomes dangerous if it turns severe/constant, prevents keeping fluids down for >24h, or is joined by fever, bleeding, vision changes, or reduced fetal movement.'
    };
  };

  const handleStartTrackingSymptom = (symTitle, redFlagText, isUrgent) => {
    const nowTime = new Date().toTimeString().slice(0, 5);
    const newEntry = {
      id: 'log-' + Date.now(),
      date: selectedDate,
      startedTime: nowTime,
      symptom: symTitle,
      note: `Started tracking ${symTitle} at ${nowTime}.`,
      waterCups: logWater,
      isRedFlag: isUrgent,
      escalationGuide: redFlagText
    };
    setCalendarLogs((prev) => [newEntry, ...prev]);
    setLogSymptomName(symTitle);
    setActiveTab('calendar');
  };

  const handleSaveCalendarLog = (e) => {
    e.preventDefault();
    const esc = getEscalationForSymptom(logSymptomName);
    const newEntry = {
      id: 'log-' + Date.now(),
      date: selectedDate,
      startedTime: logStartTime,
      symptom: logSymptomName,
      note: logNote || `Logged ${logSymptomName}`,
      waterCups: logWater,
      isRedFlag: esc.isRedFlag,
      escalationGuide: esc.warning
    };
    setCalendarLogs((prev) => [newEntry, ...prev]);
    setLogNote('');
  };

  const handleSendChatMessage = (customPrompt) => {
    const textToSend = (customPrompt ?? chatInput).trim();
    if (!textToSend || isAiLoading) return;

    const userMsg = { id: 'u-' + Date.now(), role: 'user', content: textToSend };
    setChatMessages((prev) => [...prev, userMsg]);
    if (!customPrompt) setChatInput('');
    setIsAiLoading(true);

    setTimeout(() => {
      const lower = textToSend.toLowerCase();
      let reply = '';
      let calAddedLabel = undefined;

      if (
        lower.includes('log') ||
        lower.includes('calendar') ||
        lower.includes('add') ||
        lower.includes('track')
      ) {
        const extractedSym = lower.includes('headache')
          ? 'Headache Check'
          : lower.includes('nausea')
          ? 'Mild Nausea'
          : lower.includes('appointment')
          ? 'Prenatal Appointment'
          : 'Gentle Symptom Check';
        const esc = getEscalationForSymptom(extractedSym);
        const newCal = {
          id: 'ai-local-' + Date.now(),
          date: selectedDate,
          startedTime: new Date().toTimeString().slice(0, 5),
          symptom: extractedSym,
          note: `Logged via Avena Chat: "${textToSend}"`,
          waterCups: logWater,
          isRedFlag: esc.isRedFlag,
          escalationGuide: esc.warning
        };
        setCalendarLogs((prev) => [newCal, ...prev]);
        calAddedLabel = `${extractedSym} on ${selectedDate}`;
        reply = `I have added "${extractedSym}" to your Gentle Calendar for ${selectedDate} (with a clinical safety escalation alert attached so you know what to watch for). You can view it right now in the Gentle Calendar tab!\n\nAccording to ACOG guidelines, tracking when a symptom starts helps your provider see patterns clearly.\n\nAvena supports you but doesn't replace your doctor or midwife. In an emergency, call 911.`;
      } else if (
        lower.includes('bleed') ||
        lower.includes('headache') ||
        lower.includes('vision') ||
        lower.includes('fluid') ||
        lower.includes('movement')
      ) {
        reply = `⚠️ Please contact your doctor, midwife, or Labor & Delivery Triage right away—or call 911.\n\nAccording to ACOG and CDC clinical safety guidelines, symptoms like heavy bleeding, severe persistent headaches, vision changes, fluid leaking, or reduced fetal movement are red-flag warning signs that require prompt, in-person clinical evaluation.\n\n${
          role === 'partner'
            ? 'As a partner, please stay calm, help her rest on her left side, and call the clinic or drive her to triage now.'
            : 'Please do not wait to see if it passes on its own—your care team is always glad to check you and baby.'
        }\n\nAvena supports you but doesn't replace your doctor or midwife. In an emergency, call 911.`;
      } else {
        reply = `${
          role === 'partner'
            ? `Thank you for being such a caring partner. Supporting her during Week ${currentWeek} means validating her rest, bringing her cold water or snacks, and watching gently for any clinical red flags.`
            : `Take a slow, gentle breath${displayName ? `, ${displayName}` : ''}. Around Week ${currentWeek}, your body is doing extraordinary work—and remember, all pregnancies are different so don't compare yourself to others.`
        }\n\nAccording to primary sources (ACOG, WHO, and NIH), mild physiological shifts like fatigue, round ligament twinges, or food aversions are very common. I never diagnose or advise on medication doses, so if a symptom ever feels intense or concerning, please check with your healthcare provider${
          locationMode === 'local' && userCity ? ` in ${userCity}` : ''
        }.\n\nAvena supports you but doesn't replace your doctor or midwife. In an emergency, call 911.`;
      }

      setChatMessages((prev) => [
        ...prev,
        { id: 'a-' + Date.now(), role: 'assistant', content: reply, calendarAdded: calAddedLabel }
      ]);
      setIsAiLoading(false);
    }, 450);
  };

  const handleAddRoomPost = (e) => {
    e.preventDefault();
    if (!postContent.trim()) return;
    const authorLabel = postAnon
      ? `Gentle Blossom #${Math.floor(100 + Math.random() * 899)}`
      : displayName.trim() || (role === 'partner' ? 'Caring Partner' : 'Caring Mama');
    const newPost = {
      id: 'r-' + Date.now(),
      author: authorLabel,
      isAnon: postAnon,
      room: postRoomCat,
      cityTag: locationMode === 'local' && userCity ? userCity : 'Global Circle',
      time: 'Just now',
      content: postContent,
      warmth: 1,
      heard: 1
    };
    setRoomPosts([newPost, ...roomPosts]);
    setPostContent('');
  };

  const handleAddProvider = (e) => {
    e.preventDefault();
    if (!newDocName.trim()) return;
    const newDoc = {
      id: 'p-' + Date.now(),
      name: newDocName,
      specialty: newDocSpecialty,
      clinic: newDocClinic || 'Community Maternity Care',
      city: newDocCity || (locationMode === 'local' && userCity ? userCity : 'Local Clinic'),
      trustScore: 99,
      reviews: 1,
      tags: ['Mom Recommended', 'Active Listener', 'Respects Birth Plan'],
      quote: newDocQuote || 'Deeply compassionate, evidence-based, and never rushed our questions.'
    };
    setProviders([newDoc, ...providers]);
    setShowAddProviderModal(false);
    setNewDocName('');
    setNewDocClinic('');
    setNewDocCity('');
    setNewDocQuote('');
  };

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  return (
    <div
      style={{
        backgroundColor: colors.bgCanvas,
        color: colors.textMain,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        paddingBottom: '76px'
      }}
    >
      {/* TOP HEADER */}
      <header
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: `1px solid ${colors.cardBorder}`,
          padding: '14px 20px',
          position: 'sticky',
          top: 0,
          zIndex: 40
        }}
      >
        <div
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src="./logo.png"
              alt="Avena Kindred Circle Logo"
              style={{
                height: '46px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    fontFamily: 'Georgia, serif',
                    letterSpacing: '-0.4px'
                  }}
                >
                  Avena
                </span>
                <span
                  style={{
                    backgroundColor: colors.antique,
                    color: '#7A5B47',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '3px 9px',
                    borderRadius: '12px',
                    letterSpacing: '0.5px'
                  }}
                >
                  {t.safeSpace}
                </span>
                <span
                  style={{
                    backgroundColor: colors.sageLight,
                    color: colors.sageDark,
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '3px 9px',
                    borderRadius: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {locationMode === 'local' && userCity ? (
                    <>
                      <MapPin size={11} /> {userCity}
                    </>
                  ) : (
                    <>
                      <Globe size={11} /> Global
                    </>
                  )}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '12px', color: colors.textMuted }}>{t.subtitle}</p>
            </div>
          </div>

          {/* Right Controls: Role Toggle + Language + 911 Shield */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <div
              style={{
                display: 'flex',
                backgroundColor: colors.antique,
                padding: '3px',
                borderRadius: '20px',
                border: `1px solid ${colors.cardBorder}`
              }}
            >
              <button
                type="button"
                onClick={() => setRole('mother')}
                style={{
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '16px',
                  fontSize: '12px',
                  fontWeight: role === 'mother' ? 700 : 500,
                  backgroundColor: role === 'mother' ? colors.sage : 'transparent',
                  color: role === 'mother' ? '#FFFFFF' : colors.textMain,
                  cursor: 'pointer'
                }}
              >
                {t.imPregnant}
              </button>
              <button
                type="button"
                onClick={() => setRole('partner')}
                style={{
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '16px',
                  fontSize: '12px',
                  fontWeight: role === 'partner' ? 700 : 500,
                  backgroundColor: role === 'partner' ? colors.sage : 'transparent',
                  color: role === 'partner' ? '#FFFFFF' : colors.textMain,
                  cursor: 'pointer'
                }}
              >
                {t.imPartner}
              </button>
            </div>

            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              style={{
                padding: '7px 12px',
                borderRadius: '18px',
                border: `1px solid ${colors.cardBorder}`,
                backgroundColor: colors.antique,
                fontSize: '12px',
                fontWeight: 700,
                color: colors.textMain,
                cursor: 'pointer'
              }}
            >
              <option value="en">EN ⌄</option>
              <option value="es">ES ⌄</option>
              <option value="fr">FR ⌄</option>
              <option value="pt">PT ⌄</option>
            </select>

            <a
              href="tel:911"
              title="Emergency 911 / Labor Triage"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#FDE8E8',
                border: '1px solid #F8B4B4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9B1C1C',
                textDecoration: 'none'
              }}
            >
              <ShieldAlert size={18} />
            </a>
          </div>
        </div>

        {/* Navigation Pills */}
        <div
          style={{
            maxWidth: '1080px',
            margin: '14px auto 0',
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '2px'
          }}
        >
          {[
            { id: 'care', label: t.navCare, icon: BookOpen },
            { id: 'chat', label: t.navChat, icon: Sparkles },
            { id: 'calendar', label: t.navCalendar, icon: CalendarIcon },
            { id: 'rooms', label: t.navRooms, icon: MessageCircle },
            { id: 'providers', label: t.navProviders, icon: Stethoscope },
            { id: 'you', label: t.navYou, icon: Settings }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '9px 16px',
                  borderRadius: '18px',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: isActive ? 700 : 500,
                  backgroundColor: isActive ? colors.sage : 'transparent',
                  color: isActive ? '#FFFFFF' : colors.textMain,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={15} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* MAIN CONTENT BODY */}
      <main style={{ maxWidth: '1080px', width: '100%', margin: '20px auto', padding: '0 16px', flex: 1 }}>
        {/* Universal Non-Comparison Banner Card */}
        <div
          style={{
            backgroundColor: colors.antique,
            border: `1px solid ${colors.cardBorder}`,
            borderRadius: '24px',
            padding: '18px 22px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '20px'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: colors.rodeo,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              flexShrink: 0
            }}
          >
            <Sparkles size={20} />
          </div>
          <div style={{ fontSize: '14px', lineHeight: 1.55, color: colors.textMain }}>
            <strong style={{ fontFamily: 'Georgia, serif', fontSize: '15px' }}>{t.nonCompareBold}</strong>{' '}
            {t.nonCompareSub}
          </div>
        </div>

        {/* TAB 1: CARE & CLINICAL */}
        {activeTab === 'care' && (
          <div>
            <div
              style={{
                display: 'flex',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: `1px solid ${colors.cardBorder}`,
                padding: '4px',
                marginBottom: '16px'
              }}
            >
              {[
                { id: 'symptoms', label: t.subSymptoms, icon: ShieldAlert },
                { id: 'myths', label: t.subMyths, icon: HelpCircle },
                { id: 'tips', label: t.subTips, icon: Lightbulb }
              ].map((st) => {
                const Icon = st.icon;
                const isSelected = careSubTab === st.id;
                return (
                  <button
                    key={st.id}
                    onClick={() => setCareSubTab(st.id)}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '7px',
                      padding: '11px 12px',
                      borderRadius: '20px',
                      border: 'none',
                      fontSize: '13px',
                      fontWeight: isSelected ? 700 : 500,
                      backgroundColor: isSelected ? colors.sage : 'transparent',
                      color: isSelected ? '#FFFFFF' : colors.textMain,
                      cursor: 'pointer'
                    }}
                  >
                    <Icon size={15} />
                    <span>{st.label}</span>
                  </button>
                );
              })}
            </div>

            <div style={{ position: 'relative', marginBottom: '16px' }}>
              <Search
                size={17}
                style={{ position: 'absolute', left: '18px', top: '14px', color: colors.textMuted }}
              />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={careSearch}
                onChange={(e) => setCareSearch(e.target.value)}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '13px 18px 13px 46px',
                  borderRadius: '24px',
                  border: `1px solid ${colors.cardBorder}`,
                  backgroundColor: '#FFFFFF',
                  fontSize: '14px',
                  outline: 'none',
                  color: colors.textMain
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '12px',
                color: colors.textMuted,
                marginBottom: '14px',
                padding: '0 4px'
              }}
            >
              <span>{t.tapSymptomHint}</span>
              <span style={{ fontWeight: 700, color: colors.sageDark }}>ACOG • WHO • CDC • NIH</span>
            </div>

            {careSubTab === 'symptoms' && (
              <div style={{ display: 'grid', gap: '16px' }}>
                {SYMPTOMS_DB.filter(
                  (s) =>
                    s.title.toLowerCase().includes(careSearch.toLowerCase()) ||
                    s.variation.toLowerCase().includes(careSearch.toLowerCase()) ||
                    s.redFlag.toLowerCase().includes(careSearch.toLowerCase())
                ).map((sym) => (
                  <div
                    key={sym.id}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: `1px solid ${colors.cardBorder}`,
                      borderRadius: '24px',
                      padding: '22px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '10px',
                        marginBottom: '14px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '12px',
                            backgroundColor: colors.antique,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#8C6246',
                            flexShrink: 0
                          }}
                        >
                          <ShieldAlert size={19} />
                        </div>
                        <div>
                          <h3
                            style={{
                              margin: 0,
                              fontSize: '18px',
                              fontFamily: 'Georgia, serif',
                              fontWeight: 'bold'
                            }}
                          >
                            {sym.title}
                          </h3>
                          <span style={{ fontSize: '12px', color: colors.textMuted }}>{sym.meta}</span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span
                          style={{
                            backgroundColor: colors.sageLight,
                            color: colors.sageDark,
                            fontSize: '11px',
                            fontWeight: 700,
                            padding: '4px 10px',
                            borderRadius: '12px'
                          }}
                        >
                          {sym.tag}
                        </span>
                        <button
                          onClick={() =>
                            handleStartTrackingSymptom(sym.title, sym.redFlag, sym.isUrgentRedFlag)
                          }
                          style={{
                            backgroundColor: colors.antique,
                            color: colors.textMain,
                            border: `1px solid ${colors.cardBorder}`,
                            borderRadius: '12px',
                            padding: '5px 11px',
                            fontSize: '12px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          <Plus size={14} /> Start Symptom in Calendar
                        </button>
                      </div>
                    </div>

                    <div
                      style={{
                        backgroundColor: colors.sageLight,
                        border: `1px solid ${colors.sage}`,
                        borderRadius: '16px',
                        padding: '14px 16px',
                        marginBottom: '10px'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: colors.sageDark,
                          fontWeight: 700,
                          fontSize: '11px',
                          letterSpacing: '0.4px',
                          marginBottom: '4px'
                        }}
                      >
                        <CheckCircle2 size={15} />
                        <span>{t.normalTitle}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.55 }}>{sym.variation}</p>
                    </div>

                    <div
                      style={{
                        backgroundColor: '#FDF2F2',
                        border: '1px solid #F8B4B4',
                        borderRadius: '16px',
                        padding: '14px 16px'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#9B1C1C',
                          fontWeight: 700,
                          fontSize: '11px',
                          letterSpacing: '0.4px',
                          marginBottom: '4px'
                        }}
                      >
                        <AlertTriangle size={15} />
                        <span>{t.redFlagTitle}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.55, color: '#7F1D1D' }}>
                        {sym.redFlag}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {careSubTab === 'myths' && (
              <div style={{ display: 'grid', gap: '16px' }}>
                {MYTHS_DB.filter(
                  (m) =>
                    m.claim.toLowerCase().includes(careSearch.toLowerCase()) ||
                    m.explanation.toLowerCase().includes(careSearch.toLowerCase())
                ).map((m) => (
                  <div
                    key={m.id}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: `1px solid ${colors.cardBorder}`,
                      borderRadius: '24px',
                      padding: '22px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: colors.rodeo }}>
                        PREGNANCY FOLKLORE
                      </span>
                      <span
                        style={{
                          backgroundColor: m.verdict.includes('True') ? colors.sageLight : colors.antique,
                          color: m.verdict.includes('True') ? colors.sageDark : '#7A5B47',
                          padding: '3px 10px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: 700
                        }}
                      >
                        Verdict: {m.verdict}
                      </span>
                    </div>
                    <h3
                      style={{
                        margin: '0 0 8px',
                        fontFamily: 'Georgia, serif',
                        fontStyle: 'italic',
                        fontSize: '17px'
                      }}
                    >
                      {m.claim}
                    </h3>
                    <p style={{ margin: '0 0 10px', fontSize: '13.5px', lineHeight: 1.55, color: colors.textMuted }}>
                      {m.explanation}
                    </p>
                    <div style={{ fontSize: '11px', color: colors.sageDark, fontWeight: 600 }}>
                      Primary Source: {m.citation}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {careSubTab === 'tips' && (
              <div style={{ display: 'grid', gap: '16px' }}>
                {TIPS_DB.filter(
                  (tip) =>
                    tip.title.toLowerCase().includes(careSearch.toLowerCase()) ||
                    tip.body.toLowerCase().includes(careSearch.toLowerCase())
                ).map((tip) => (
                  <div
                    key={tip.id}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: `1px solid ${colors.cardBorder}`,
                      borderRadius: '24px',
                      padding: '22px'
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: colors.sageLight,
                        color: colors.sageDark,
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '3px 9px',
                        borderRadius: '10px'
                      }}
                    >
                      {tip.category}
                    </span>
                    <h3 style={{ margin: '10px 0 6px', fontFamily: 'Georgia, serif', fontSize: '17px' }}>
                      {tip.title}
                    </h3>
                    <p style={{ margin: '0 0 10px', fontSize: '13.5px', lineHeight: 1.55, color: colors.textMuted }}>
                      {tip.body}
                    </p>
                    <div style={{ fontSize: '11px', color: colors.sageDark, fontWeight: 600 }}>
                      Scholarly Source: {tip.citation}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: AVENA AI CHAT */}
        {activeTab === 'chat' && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: `1px solid ${colors.cardBorder}`,
              borderRadius: '24px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '500px'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
                borderBottom: `1px solid ${colors.cardBorder}`,
                paddingBottom: '12px',
                marginBottom: '12px'
              }}
            >
              <div>
                <h3 style={{ margin: 0, fontFamily: 'Georgia, serif', fontSize: '18px' }}>
                  Avena Evidence-Based AI Companion
                </h3>
                <span style={{ fontSize: '12px', color: colors.textMuted }}>
                  Speaking to:{' '}
                  <strong>{role === 'mother' ? `Pregnant Mother (Week ${currentWeek})` : 'Supporting Partner'}</strong>{' '}
                  • Never diagnoses or advises on medication doses
                </span>
              </div>
              <a
                href="tel:18338526262"
                style={{
                  backgroundColor: colors.antique,
                  color: '#7A5B47',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '5px 10px',
                  borderRadius: '12px',
                  textDecoration: 'none'
                }}
              >
                📞 1-833-TLC-MAMA
              </a>
            </div>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
              {[
                role === 'mother'
                  ? 'Is mild cramping normal in the 2nd trimester?'
                  : 'How can I best comfort my partner with morning sickness?',
                'Log mild nausea to my calendar today',
                'What are the red flag signs for headaches?',
                'Add prenatal appointment to my calendar'
              ].map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => handleSendChatMessage(q)}
                  style={{
                    backgroundColor: colors.antique,
                    border: `1px solid ${colors.cardBorder}`,
                    borderRadius: '14px',
                    padding: '5px 11px',
                    fontSize: '11.5px',
                    color: colors.textMain,
                    cursor: 'pointer'
                  }}
                >
                  ✨ {q}
                </button>
              ))}
            </div>

            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '14px'
              }}
            >
              {chatMessages.map((m) => (
                <div
                  key={m.id}
                  style={{
                    alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                    backgroundColor: m.role === 'user' ? colors.sage : colors.antique,
                    color: m.role === 'user' ? '#FFFFFF' : colors.textMain,
                    padding: '13px 16px',
                    borderRadius: '18px',
                    fontSize: '13.5px',
                    lineHeight: 1.55,
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {m.content}
                  {m.calendarAdded && (
                    <div
                      style={{
                        marginTop: '10px',
                        padding: '8px 12px',
                        borderRadius: '12px',
                        backgroundColor: '#FFFFFF',
                        color: colors.sageDark,
                        fontSize: '12px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px'
                      }}
                    >
                      <span>✅ Added to Gentle Calendar: {m.calendarAdded}</span>
                      <button
                        onClick={() => setActiveTab('calendar')}
                        style={{
                          backgroundColor: colors.sage,
                          color: '#FFF',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '3px 8px',
                          fontSize: '11px',
                          cursor: 'pointer'
                        }}
                      >
                        View Calendar
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendChatMessage();
              }}
              style={{ display: 'flex', gap: '8px' }}
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder={
                  role === 'mother'
                    ? 'Ask about a symptom, or say "Add mild nausea to my calendar"...'
                    : 'Ask how to support her, or what warning signs to watch for...'
                }
                style={{
                  flex: 1,
                  padding: '13px 16px',
                  borderRadius: '18px',
                  border: `1px solid ${colors.cardBorder}`,
                  fontSize: '13.5px',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: colors.sage,
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '18px',
                  padding: '0 20px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        )}

        {/* TAB 3: GENTLE CALENDAR */}
        {activeTab === 'calendar' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '18px' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: '24px',
                padding: '22px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h3 style={{ margin: 0, fontFamily: 'Georgia, serif', fontSize: '18px' }}>
                  {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h3>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    type="button"
                    onClick={() => setCurrentMonth(new Date(year, month - 1, 1))}
                    style={{
                      padding: '6px',
                      borderRadius: '10px',
                      border: `1px solid ${colors.cardBorder}`,
                      backgroundColor: '#FFF',
                      cursor: 'pointer'
                    }}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentMonth(new Date(year, month + 1, 1))}
                    style={{
                      padding: '6px',
                      borderRadius: '10px',
                      border: `1px solid ${colors.cardBorder}`,
                      backgroundColor: '#FFF',
                      cursor: 'pointer'
                    }}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, 1fr)',
                  textAlign: 'center',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: colors.textMuted,
                  marginBottom: '8px'
                }}
              >
                <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
                {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
                  <div key={'e-' + idx} style={{ height: '38px' }} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, idx) => {
                  const day = idx + 1;
                  const dStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                  const isSel = dStr === selectedDate;
                  const hasLog = calendarLogs.some((l) => l.date === dStr);
                  return (
                    <button
                      key={dStr}
                      type="button"
                      onClick={() => setSelectedDate(dStr)}
                      style={{
                        height: '38px',
                        borderRadius: '12px',
                        border: 'none',
                        backgroundColor: isSel ? colors.sage : hasLog ? colors.antique : 'transparent',
                        color: isSel ? '#FFFFFF' : colors.textMain,
                        fontWeight: isSel || hasLog ? 700 : 400,
                        fontSize: '13px',
                        cursor: 'pointer'
                      }}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <form onSubmit={handleSaveCalendarLog} style={{ marginTop: '20px', borderTop: `1px solid ${colors.cardBorder}`, paddingTop: '16px' }}>
                <h4 style={{ margin: '0 0 10px', fontSize: '14px', fontFamily: 'Georgia, serif' }}>
                  Start & Log a Symptom for {selectedDate}
                </h4>

                <div style={{ display: 'grid', gap: '10px' }}>
                  <select
                    value={logSymptomName}
                    onChange={(e) => setLogSymptomName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '9px 12px',
                      borderRadius: '12px',
                      border: `1px solid ${colors.cardBorder}`,
                      fontSize: '13px'
                    }}
                  >
                    <option value="Mild Nausea & Queasiness">Mild Nausea & Queasiness</option>
                    <option value="Round Ligament Twinges">Round Ligament Twinges</option>
                    <option value="Mild Evening Ankle Puffiness">Mild Evening Ankle Puffiness</option>
                    <option value="Active Baby Kicks & Rolls">Active Baby Kicks & Rolls</option>
                    <option value="Severe Headache or Vision Changes (Red Flag)">⚠️ Severe Headache or Vision Changes</option>
                    <option value="Heavy Bleeding or Fluid Leaking (Red Flag)">⚠️ Heavy Bleeding or Fluid Leaking</option>
                    <option value="Reduced Baby Movement (Red Flag)">⚠️ Reduced Baby Movement</option>
                  </select>

                  <div
                    style={{
                      backgroundColor: getEscalationForSymptom(logSymptomName).isRedFlag ? '#FDF2F2' : colors.sageLight,
                      border: `1px solid ${getEscalationForSymptom(logSymptomName).isRedFlag ? '#F8B4B4' : colors.sage}`,
                      borderRadius: '12px',
                      padding: '10px 12px',
                      fontSize: '12px',
                      color: getEscalationForSymptom(logSymptomName).isRedFlag ? '#9B1C1C' : colors.textMain
                    }}
                  >
                    <strong>When this becomes dangerous: </strong>
                    {getEscalationForSymptom(logSymptomName).warning}
                  </div>

                  <textarea
                    rows={2}
                    placeholder="Gentle notes (e.g. felt better after lying on my left side)..."
                    value={logNote}
                    onChange={(e) => setLogNote(e.target.value)}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '10px',
                      borderRadius: '12px',
                      border: `1px solid ${colors.cardBorder}`,
                      fontSize: '13px'
                    }}
                  />

                  <button
                    type="submit"
                    style={{
                      backgroundColor: colors.sage,
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '14px',
                      padding: '11px',
                      fontWeight: 700,
                      fontSize: '13px',
                      cursor: 'pointer'
                    }}
                  >
                    Save to Gentle Calendar
                  </button>
                </div>
              </form>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: '24px',
                padding: '22px'
              }}
            >
              <h3 style={{ margin: '0 0 12px', fontFamily: 'Georgia, serif', fontSize: '18px' }}>
                Tracked Symptoms & Escalation Alerts
              </h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                {calendarLogs.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      backgroundColor: colors.antique,
                      border: `1px solid ${colors.cardBorder}`,
                      borderRadius: '18px',
                      padding: '14px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <strong style={{ fontSize: '14px' }}>{item.symptom}</strong>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '11px', color: colors.textMuted }}>
                          {item.date} at {item.startedTime}
                        </span>
                        <button
                          onClick={() => setCalendarLogs(calendarLogs.filter((l) => l.id !== item.id))}
                          style={{ background: 'none', border: 'none', color: '#9B1C1C', cursor: 'pointer' }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                    <p style={{ margin: '0 0 8px', fontSize: '13px' }}>{item.note}</p>
                    <div
                      style={{
                        backgroundColor: item.isRedFlag ? '#FDF2F2' : '#FFFFFF',
                        border: `1px solid ${item.isRedFlag ? '#F8B4B4' : colors.cardBorder}`,
                        borderRadius: '12px',
                        padding: '8px 10px',
                        fontSize: '11.5px',
                        color: item.isRedFlag ? '#9B1C1C' : colors.textMuted
                      }}
                    >
                      <strong>⚠️ Escalation Alert: </strong>
                      {item.escalationGuide}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: MOM ROOMS */}
        {activeTab === 'rooms' && (
          <div>
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginBottom: '16px', paddingBottom: '4px' }}>
              {[
                { id: 'all', label: 'All Safe Rooms' },
                { id: 'names', label: '🍼 Baby Name Ideas' },
                { id: 'first-tri', label: '🌿 1st Trimester Doubts' },
                { id: 'vent', label: '☕ Safe Vent (Zero Comparison)' },
                { id: 'partners', label: '🤝 Partner Support Corner' }
              ].map((rm) => (
                <button
                  key={rm.id}
                  onClick={() => setActiveRoomFilter(rm.id)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '16px',
                    border: `1px solid ${colors.cardBorder}`,
                    backgroundColor: activeRoomFilter === rm.id ? colors.sage : '#FFFFFF',
                    color: activeRoomFilter === rm.id ? '#FFFFFF' : colors.textMain,
                    fontSize: '12.5px',
                    fontWeight: activeRoomFilter === rm.id ? 700 : 500,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {rm.label}
                </button>
              ))}
            </div>

            <form
              onSubmit={handleAddRoomPost}
              style={{
                backgroundColor: '#FFFFFF',
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: '24px',
                padding: '20px',
                marginBottom: '18px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                <select
                  value={postRoomCat}
                  onChange={(e) => setPostRoomCat(e.target.value)}
                  style={{
                    padding: '6px 10px',
                    borderRadius: '12px',
                    border: `1px solid ${colors.cardBorder}`,
                    fontSize: '12px'
                  }}
                >
                  <option value="names">🍼 Baby Name Ideas</option>
                  <option value="first-tri">🌿 1st Trimester Doubts</option>
                  <option value="vent">☕ Safe Vent</option>
                  <option value="partners">🤝 Partner Support</option>
                </select>

                <button
                  type="button"
                  onClick={() => setPostAnon(!postAnon)}
                  style={{
                    backgroundColor: colors.antique,
                    border: `1px solid ${colors.cardBorder}`,
                    padding: '6px 12px',
                    borderRadius: '14px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {postAnon ? <UserX size={14} /> : <UserCheck size={14} />}
                  <span>
                    {postAnon
                      ? 'Posting Anonymously'
                      : `Sharing Name (${displayName || 'Set in Profile'})`}
                  </span>
                </button>
              </div>

              <textarea
                rows={2}
                placeholder="Share a baby name idea, ask a gentle question, or vent safely without judgment..."
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '12px',
                  borderRadius: '16px',
                  border: `1px solid ${colors.cardBorder}`,
                  fontSize: '13.5px',
                  marginBottom: '10px'
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: colors.sage,
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '14px',
                    padding: '9px 18px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  Post to Safe Circle
                </button>
              </div>
            </form>

            <div style={{ display: 'grid', gap: '14px' }}>
              {roomPosts
                .filter((p) => activeRoomFilter === 'all' || p.room === activeRoomFilter)
                .map((post) => (
                  <div
                    key={post.id}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: `1px solid ${colors.cardBorder}`,
                      borderRadius: '22px',
                      padding: '18px 20px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '12px' }}>
                      <div>
                        <strong>{post.author}</strong>{' '}
                        <span style={{ color: colors.textMuted }}>• {post.cityTag} • {post.time}</span>
                      </div>
                    </div>
                    <p style={{ margin: '0 0 12px', fontSize: '14px', lineHeight: 1.55 }}>{post.content}</p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        onClick={() =>
                          setRoomPosts(
                            roomPosts.map((r) => (r.id === post.id ? { ...r, warmth: r.warmth + 1 } : r))
                          )
                        }
                        style={{
                          backgroundColor: colors.antique,
                          border: 'none',
                          padding: '5px 12px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        🤍 Sending Warmth ({post.warmth})
                      </button>
                      <button
                        onClick={() =>
                          setRoomPosts(
                            roomPosts.map((r) => (r.id === post.id ? { ...r, heard: r.heard + 1 } : r))
                          )
                        }
                        style={{
                          backgroundColor: colors.sageLight,
                          color: colors.sageDark,
                          border: 'none',
                          padding: '5px 12px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        🌿 Heard & Supported ({post.heard})
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* TAB 5: PROVIDERS */}
        {activeTab === 'providers' && (
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '14px'
              }}
            >
              <div style={{ display: 'flex', gap: '8px', flex: 1, minWidth: '260px' }}>
                <input
                  type="text"
                  placeholder="Search OB/GYN, Midwife, hospital, or city..."
                  value={providerSearch}
                  onChange={(e) => setProviderSearch(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '11px 16px',
                    borderRadius: '18px',
                    border: `1px solid ${colors.cardBorder}`,
                    backgroundColor: '#FFFFFF',
                    fontSize: '13.5px'
                  }}
                />
                {locationMode === 'local' && userCity && (
                  <button
                    type="button"
                    onClick={() => setProviderLocalOnly(!providerLocalOnly)}
                    style={{
                      padding: '0 14px',
                      borderRadius: '18px',
                      border: `1px solid ${colors.cardBorder}`,
                      backgroundColor: providerLocalOnly ? colors.sage : '#FFFFFF',
                      color: providerLocalOnly ? '#FFFFFF' : colors.textMain,
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    📍 {userCity} Only
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => setShowAddProviderModal(true)}
                style={{
                  backgroundColor: colors.sage,
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '16px',
                  padding: '10px 16px',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Plus size={15} /> Recommend a Provider
              </button>
            </div>

            <div style={{ display: 'grid', gap: '14px' }}>
              {providers
                .filter((p) => {
                  const matchesText =
                    p.name.toLowerCase().includes(providerSearch.toLowerCase()) ||
                    p.specialty.toLowerCase().includes(providerSearch.toLowerCase()) ||
                    p.city.toLowerCase().includes(providerSearch.toLowerCase()) ||
                    p.clinic.toLowerCase().includes(providerSearch.toLowerCase());
                  const matchesCity =
                    !providerLocalOnly ||
                    p.city.toLowerCase().includes(userCity.toLowerCase());
                  return matchesText && matchesCity;
                })
                .map((doc) => (
                  <div
                    key={doc.id}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: `1px solid ${colors.cardBorder}`,
                      borderRadius: '24px',
                      padding: '22px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                      <div>
                        <h3 style={{ margin: 0, fontFamily: 'Georgia, serif', fontSize: '18px' }}>
                          {doc.name}
                        </h3>
                        <span style={{ fontSize: '12.5px', color: colors.textMuted }}>
                          {doc.specialty} • {doc.clinic} • <strong>{doc.city}</strong>
                        </span>
                      </div>
                      <span
                        style={{
                          backgroundColor: colors.sageLight,
                          color: colors.sageDark,
                          padding: '5px 12px',
                          borderRadius: '14px',
                          fontSize: '12.5px',
                          fontWeight: 700
                        }}
                      >
                        🤍 {doc.trustScore}% Mom Trust ({doc.reviews} moms)
                      </span>
                    </div>

                    <p style={{ margin: 0, fontSize: '13.5px', fontStyle: 'italic', color: colors.textMuted }}>
                      "{doc.quote}"
                    </p>
                  </div>
                ))}
            </div>

            {showAddProviderModal && (
              <div
                style={{
                  position: 'fixed',
                  inset: 0,
                  backgroundColor: 'rgba(0,0,0,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  zIndex: 60
                }}
              >
                <form
                  onSubmit={handleAddProvider}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '24px',
                    maxWidth: '440px',
                    width: '100%',
                    display: 'grid',
                    gap: '12px'
                  }}
                >
                  <h3 style={{ margin: 0, fontFamily: 'Georgia, serif', fontSize: '18px' }}>
                    Share a Trusted Doctor or Midwife
                  </h3>
                  <input
                    required
                    placeholder="Provider Name (e.g., Dr. Sarah Jenkins)"
                    value={newDocName}
                    onChange={(e) => setNewDocName(e.target.value)}
                    style={{ padding: '10px', borderRadius: '12px', border: `1px solid ${colors.cardBorder}` }}
                  />
                  <input
                    placeholder="Hospital or Birth Center"
                    value={newDocClinic}
                    onChange={(e) => setNewDocClinic(e.target.value)}
                    style={{ padding: '10px', borderRadius: '12px', border: `1px solid ${colors.cardBorder}` }}
                  />
                  <input
                    placeholder="City, State (e.g., Miami, FL)"
                    value={newDocCity}
                    onChange={(e) => setNewDocCity(e.target.value)}
                    style={{ padding: '10px', borderRadius: '12px', border: `1px solid ${colors.cardBorder}` }}
                  />
                  <textarea
                    rows={3}
                    placeholder="Why do you trust them?"
                    value={newDocQuote}
                    onChange={(e) => setNewDocQuote(e.target.value)}
                    style={{ padding: '10px', borderRadius: '12px', border: `1px solid ${colors.cardBorder}` }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={() => setShowAddProviderModal(false)}
                      style={{ padding: '8px 14px', borderRadius: '12px', border: `1px solid ${colors.cardBorder}`, backgroundColor: '#FFF', cursor: 'pointer' }}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      style={{ padding: '8px 16px', borderRadius: '12px', border: 'none', backgroundColor: colors.sage, color: '#FFF', fontWeight: 700, cursor: 'pointer' }}
                    >
                      Save Recommendation
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* TAB 6: YOU, LOCAL/GLOBAL PROFILE & MOTHERLY PALETTES */}
        {activeTab === 'you' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '18px' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: '24px',
                padding: '22px'
              }}
            >
              <h3 style={{ margin: '0 0 6px', fontFamily: 'Georgia, serif', fontSize: '18px' }}>
                Your Sanctuary Profile
              </h3>
              <p style={{ margin: '0 0 16px', fontSize: '12.5px', color: colors.textMuted }}>
                Customize your privacy, pregnancy week, and whether you want local city resources or a global experience.
              </p>

              <div style={{ display: 'grid', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    Display Name (Optional):
                  </label>
                  <input
                    type="text"
                    placeholder="Leave blank to stay anonymous"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    style={{
                      width: '100%',
                      boxSizing: 'border-box',
                      padding: '10px 12px',
                      borderRadius: '12px',
                      border: `1px solid ${colors.cardBorder}`,
                      fontSize: '13px'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                    Current Pregnancy Week: Week {currentWeek}
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={42}
                    value={currentWeek}
                    onChange={(e) => setCurrentWeek(Number(e.target.value))}
                    style={{ width: '100%', accentColor: colors.sage }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                    Community & Provider Scope:
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={() => setLocationMode('global')}
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '14px',
                        border: `1px solid ${colors.cardBorder}`,
                        backgroundColor: locationMode === 'global' ? colors.sage : colors.antique,
                        color: locationMode === 'global' ? '#FFFFFF' : colors.textMain,
                        fontWeight: 700,
                        fontSize: '12.5px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <Globe size={15} /> Stay Global
                    </button>
                    <button
                      type="button"
                      onClick={() => setLocationMode('local')}
                      style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '14px',
                        border: `1px solid ${colors.cardBorder}`,
                        backgroundColor: locationMode === 'local' ? colors.sage : colors.antique,
                        color: locationMode === 'local' ? '#FFFFFF' : colors.textMain,
                        fontWeight: 700,
                        fontSize: '12.5px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <MapPin size={15} /> Local City
                    </button>
                  </div>
                </div>

                {locationMode === 'local' && (
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                      Your City (for local doctors & mom circles):
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Miami, FL"
                      value={userCity}
                      onChange={(e) => setUserCity(e.target.value)}
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        padding: '10px 12px',
                        borderRadius: '12px',
                        border: `1px solid ${colors.cardBorder}`,
                        fontSize: '13px'
                      }}
                    />
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setProfileSavedToast(true);
                    setTimeout(() => setProfileSavedToast(false), 3000);
                  }}
                  style={{
                    backgroundColor: colors.sage,
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '14px',
                    padding: '11px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  Save Profile Preferences
                </button>

                {profileSavedToast && (
                  <div style={{ fontSize: '12px', color: colors.sageDark, fontWeight: 700, textAlign: 'center' }}>
                    ✨ Profile & location preferences updated!
                  </div>
                )}
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: '24px',
                padding: '22px'
              }}
            >
              <h3 style={{ margin: '0 0 6px', fontFamily: 'Georgia, serif', fontSize: '18px' }}>
                Motherly Color Palettes
              </h3>
              <p style={{ margin: '0 0 14px', fontSize: '12.5px', color: colors.textMuted }}>
                Includes your predetermined Rodeo Dust, Antique White & Sage trio plus soothing maternal palettes.
              </p>

              <div style={{ display: 'grid', gap: '10px' }}>
                {Object.values(PALETTES).map((pal) => {
                  const isCurrent = paletteKey === pal.id;
                  return (
                    <button
                      key={pal.id}
                      type="button"
                      onClick={() => setPaletteKey(pal.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 14px',
                        borderRadius: '16px',
                        border: isCurrent ? `2px solid ${pal.sageDark}` : `1px solid ${colors.cardBorder}`,
                        backgroundColor: pal.antique,
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '13.5px', color: pal.textMain }}>
                          {pal.name}
                        </div>
                        <div style={{ fontSize: '11.5px', color: pal.textMuted }}>{pal.description}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                        <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: pal.rodeo, border: '1px solid rgba(0,0,0,0.1)' }} />
                        <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: pal.antique, border: '1px solid rgba(0,0,0,0.1)' }} />
                        <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: pal.sage, border: '1px solid rgba(0,0,0,0.1)' }} />
                        {isCurrent && <Check size={16} color={pal.sageDark} />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* MANDATORY CLINICAL & MENTAL HEALTH FOOTER */}
      <footer
        style={{
          backgroundColor: '#FFFFFF',
          borderTop: `1px solid ${colors.cardBorder}`,
          padding: '18px 16px',
          textAlign: 'center',
          fontSize: '12px',
          color: colors.textMuted
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '6px' }}>
          <div style={{ fontWeight: 600, color: colors.sageDark }}>{t.crisisBanner}</div>
          <div style={{ fontWeight: 700, color: colors.textMain }}>{t.footerText}</div>
        </div>
      </footer>

      {/* MOBILE BOTTOM NAVIGATION DOCK */}
      <nav
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#FFFFFF',
          borderTop: `1px solid ${colors.cardBorder}`,
          display: 'flex',
          justifyContent: 'space-around',
          padding: '8px 4px',
          zIndex: 50
        }}
      >
        {[
          { id: 'care', label: 'Care', icon: BookOpen },
          { id: 'chat', label: 'Avena AI', icon: Sparkles },
          { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
          { id: 'rooms', label: 'Rooms', icon: MessageCircle },
          { id: 'providers', label: 'Doctors', icon: Stethoscope },
          { id: 'you', label: 'Profile', icon: Palette }
        ].map((item) => {
          const Icon = item.icon;
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3px',
                color: active ? colors.sageDark : colors.textMuted,
                fontWeight: active ? 700 : 500,
                fontSize: '10.5px',
                cursor: 'pointer'
              }}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}