import { createContext, useContext } from 'react';

export const manipuraData = {
  header: {
    sanskritName: 'मणिपूर',
    transliteration: 'MAṆIPŪRA',
    subtitle: 'THE JEWEL CITY',
    hook: '«What will you transform?»'
  },
  whatIsIt: {
    simple: 'Maṇipūra is a navel-centred chakra described in certain yogic and tantric subtle-body systems. It acts as the seat of fire, transformation, and digestion.',
    tradition: 'In the Ṣaṭ-Cakra-Nirūpaṇa (1526 CE), Maṇipūra is situated at the root of the navel. It is described as a ten-petaled lotus with the colour of heavy rain-clouds, containing a fiery triangular region and the fire bīja (seed mantra) Raṃ.',
    modern: 'Contemporary chakra systems and psychology often connect Maṇipūra with personal will, confidence, agency, discipline, self-esteem, ambition, and personal power. These are modern interpretations that map psychological concepts onto the traditional subtle body.',
    evidence: 'There is no scientifically validated biomarker or instrument that measures "chakra activation". However, focusing on the navel center, regulating breathing, and addressing psychological themes of agency have documented somatic and therapeutic benefits.'
  },
  name: {
    mani: 'JEWEL',
    pura: 'CITY / ABODE',
    combined: 'THE CITY OF JEWELS',
    interpretation: 'A radiant, luminous center where the inner fire shines like a jewel, transforming raw energy into power and vitality.'
  },
  location: {
    traditional: 'Situated at the root of the navel (Nābhi-mūla). Subtle-body systems are culturally and textually situated meditative maps, not physical anatomical charts.',
    anatomical: 'The physical counterpart often referenced is the solar plexus (celiac plexus)—a dense network of radiating nerves behind the stomach—and the enteric nervous system governing digestion.',
    modern: 'Visualized as a glowing yellow or golden vortex of energy radiating from the core, representing the individual\'s energetic center of gravity and will.'
  },
  history: [
    {
      era: 'Early Indian Internal Body Ideas',
      year: 'Pre-1000 BCE',
      title: 'The Vedic Agni',
      description: 'Agni (Fire) was revered as the priest, the transformer, and the link between human and divine. Internal fire (Jatharagni) was recognized as the force of digestion and life.',
      sourceType: 'TRADITION'
    },
    {
      era: 'Tantric Subtle-Body Emergence',
      year: '600–900 CE',
      title: 'The Body as Cosmos',
      description: 'Tantric traditions began mapping the cosmos onto the subtle body. Centers of power (chakras/padmas) became focal points for meditation and ritual installation (nyasa).',
      sourceType: 'TRADITION'
    },
    {
      era: 'Medieval Yogic Maps',
      year: '900–1200 CE',
      title: 'Systematization',
      description: 'Various texts described different numbers of chakras (e.g., 5, 6, 7, 9, or more). The navel center consistently emerged as the seat of fire and the sun.',
      sourceType: 'TRADITION'
    },
    {
      era: 'Ṣaṭ-Cakra-Nirūpaṇa',
      year: '1526 CE',
      title: 'The Classical Blueprint',
      description: 'Written by Pūrṇānanda, this text popularized the six-plus-one chakra system. It detailed the ten-petaled Maṇipūra, its deities (Rudra, Lākinī), and the fire triangle.',
      sourceType: 'TRADITION'
    },
    {
      era: 'Arthur Avalon (Sir John Woodroffe)',
      year: '1919 CE',
      title: 'The Serpent Power',
      description: 'Woodroffe\'s translation of the Ṣaṭ-Cakra-Nirūpaṇa introduced this specific chakra map to the English-speaking world, cementing it as the standard model.',
      sourceType: 'MODERN'
    },
    {
      era: 'Theosophical Reformulations',
      year: '1900s',
      title: 'Psychological Mapping',
      description: 'Theosophists like C.W. Leadbeater merged Indian concepts with Western occultism, introducing the idea that chakras have specific psychological functions and rainbow colors (yellow for Maṇipūra).',
      sourceType: 'MODERN'
    },
    {
      era: 'New Age & Counterculture',
      year: '1960s–1970s',
      title: 'The Psychological Chakra',
      description: 'Thinkers like Anodea Judith mapped Jungian psychology onto the chakras. Maṇipūra became exclusively associated with self-esteem, boundaries, and personal power.',
      sourceType: 'MODERN'
    },
    {
      era: 'Contemporary Wellness',
      year: 'Present',
      title: 'The Metaphorical Engine',
      description: 'Today, the chakra is widely used as a metaphor for somatic coaching, emotional regulation, and personal development—often disconnected from its original tantric ritual context.',
      sourceType: 'MODERN'
    }
  ],
  mandala: {
    petals: 10,
    petalLetters: [
      { devanagari: 'डं', iast: 'ḍaṃ' },
      { devanagari: 'ढं', iast: 'ḍhaṃ' },
      { devanagari: 'णं', iast: 'ṇaṃ' },
      { devanagari: 'तं', iast: 'taṃ' },
      { devanagari: 'थं', iast: 'thaṃ' },
      { devanagari: 'दं', iast: 'daṃ' },
      { devanagari: 'धं', iast: 'dhaṃ' },
      { devanagari: 'नं', iast: 'naṃ' },
      { devanagari: 'पं', iast: 'paṃ' },
      { devanagari: 'फं', iast: 'phaṃ' }
    ],
    bija: { sanskrit: 'रं', transliteration: 'RAṂ' }
  },
  agni: {
    traditional: 'Agni is the Vedic fire god, the witness, and the transformative force of digestion and perception.',
    metaphor: 'Fire transforms whatever it touches. It turns heavy, raw material (wood, experience) into heat, light, and ash (insight).',
    modern: 'The spark of motivation, metabolic energy, and the drive to take action and assert oneself.'
  },
  deities: {
    ram: {
      title: 'The Ram (Vāhana)',
      traditional: 'The vehicle of Agni. Described in texts as strong, charging, and carrying the fire bīja.',
      meaning: 'Symbolizes forward momentum, strength, and the sometimes headstrong nature of the will.'
    },
    rudra: {
      title: 'Rudra (Presiding Deity)',
      traditional: 'An ancient, fierce form of Shiva associated with storms, healing, and transformation. Shown seated on a bull.',
      meaning: 'Represents the destructive aspect of fire that burns away impurity and stagnation, making way for new growth.',
      modern: 'The power to tear down old, unhelpful structures and boundaries to build authentic power.'
    },
    lakini: {
      title: 'Lākinī (Śakti)',
      traditional: 'The four-armed goddess presiding over the tissue (māṃsa) and the chakra. She is dark, radiant, and fierce, holding a thunderbolt and weapon.',
      meaning: 'The specific divine energy that organizes and sustains this center. She represents the terrifying and protective grace of transformation.',
      modern: 'Often oversimplified as "female confidence energy," she actually represents the fierce, unyielding power required for deep internal alchemy.'
    },
    kundalini: {
      title: 'Kuṇḍalinī & The Viṣṇu Granthi',
      traditional: 'As Kuṇḍalinī rises through Maṇipūra, she pierces the Viṣṇu Granthi (the knot of preservation).',
      meaning: 'Piercing this knot represents the dissolution of personal ambition and ego-clinging, shifting focus from maintaining personal power to universal flow.'
    }
  },
  modernThemes: [
    { id: 'AGENCY', label: 'AGENCY', description: 'The belief that your actions matter and you can influence your life.' },
    { id: 'CONFIDENCE', label: 'CONFIDENCE', description: 'Trusting your ability to handle uncertainty and challenges.' },
    { id: 'DISCIPLINE', label: 'DISCIPLINE', description: 'The capacity to keep a promise to yourself consistently.' },
    { id: 'AMBITION', label: 'AMBITION', description: 'The drive to build, achieve, and move forward.' },
    { id: 'BOUNDARIES', label: 'BOUNDARIES', description: 'Knowing where you end and others begin; the ability to say no.' }
  ],
  fireStates: {
    ember: {
      title: 'THE EMBER',
      subtitle: 'Too Little Flow (Stuck)',
      traits: ['Hesitation', 'Passivity', 'Difficulty initiating', 'Dependence on external direction', 'Avoiding decisions']
    },
    flame: {
      title: 'THE FLAME',
      subtitle: 'Balanced Flow (Adaptable)',
      traits: ['Initiative', 'Clear boundaries', 'Follow-through', 'Recovery and rest', 'Sense of purpose']
    },
    wildfire: {
      title: 'THE WILDFIRE',
      subtitle: 'Too Much Flow (Flooded)',
      traits: ['Aggression', 'Over-control', 'Perfectionism', 'Impatience', 'Burnout', 'Constant proving']
    }
  },
  myths: [
    {
      claim: 'Maṇipūra is literally the pancreas.',
      nuance: 'Subtle Anatomy vs Physical Anatomy. Traditional yogic texts mapped meditative, energetic experiences, not biological organs. The solar plexus and pancreas are modern physical approximations.'
    },
    {
      claim: 'Yellow is its universal ancient colour.',
      nuance: 'A Modern Addition. The Ṣaṭ-Cakra-Nirūpaṇa describes the lotus as the colour of heavy rain-clouds, with a red fire region. The rainbow spectrum (yellow for navel) was popularized in the 20th century by Christopher Hills and New Age authors.'
    },
    {
      claim: 'Spicy food opens the chakra.',
      nuance: 'A Misunderstanding of Ayurveda. While Ayurveda discusses kindling digestive fire (agni) with certain spices, eating hot peppers does not biologically "activate a chakra."'
    },
    {
      claim: 'Anger proves it is blocked.',
      nuance: 'Moralizing Emotions. Anger is a normal human emotion signaling a boundary violation. Framing it as a "chakra blockage" can lead to unhealthy suppression rather than emotional regulation.'
    },
    {
      claim: 'More fire and ambition is always better.',
      nuance: 'The Burnout Trap. Traditional texts warn against being consumed by fire. Power without rest, discernment, and cooling practices leads to exhaustion and instability.'
    },
    {
      claim: 'Activating it increases metabolism.',
      nuance: 'Not Scientifically Established. There is no evidence that meditating on the navel alters your basal metabolic rate, though regulating stress can support healthy digestion.'
    }
  ],
  journalPrompts: [
    "What deserves my energy today?",
    "What is draining my energy right now?",
    "Where am I forcing things instead of allowing them?",
    "In what area of my life do I need more discipline?",
    "Where do I need to allow myself to rest?",
    "What is my current anger or frustration trying to protect?",
    "Where do I need to set a clearer boundary?",
    "What am I afraid to take responsibility for?",
    "What or whom am I trying to prove myself to?",
    "What would one purposeful action look like tomorrow?"
  ],
  realLifeExperiment: [
    "Choose ONE meaningful priority for the day and complete it first.",
    "Remove ONE unnecessary distraction (e.g., put your phone away during work).",
    "Notice the urge to react immediately, and take one breath before responding.",
    "Say a clear, kind 'no' to something you don't actually have the capacity for.",
    "Take one deliberate 15-minute rest period where you achieve absolutely nothing.",
    "At the end of the day, reflect: Where did I use my energy deliberately? Where did I spend it automatically?"
  ],
  food: {
    categories: [
      { name: 'Complex Carbohydrates', examples: 'Whole grains, brown rice, oats, sweet potatoes', benefit: 'Steady, sustained energy rather than a quick spike and crash.' },
      { name: 'Proteins', examples: 'Dal, lentils, beans, tofu, lean meats, eggs', benefit: 'Building blocks for tissue repair and stable blood sugar.' },
      { name: 'Healthy Fats', examples: 'Ghee, olive oil, nuts, seeds, avocado', benefit: 'Satiety, brain health, and hormone regulation.' },
      { name: 'Fibre & Plants', examples: 'Leafy greens, seasonal vegetables, whole fruits', benefit: 'Supports the microbiome and healthy digestion.' },
      { name: 'Hydration', examples: 'Water, herbal teas, clear broths', benefit: 'Essential for every metabolic and cellular function.' }
    ]
  },
  movement: {
    options: [
      { name: 'Core Stability', duration: '15 min', difficulty: 'Medium', guidance: 'Focus on control and stability (e.g., planks, Pilates) rather than crunches.', note: 'Builds physical centering and endurance.' },
      { name: 'Flow Yoga (Vinyasa)', duration: '30-45 min', difficulty: 'Medium-High', guidance: 'Link breath to movement continuously.', note: 'Generates heat and trains focus.' },
      { name: 'Sun Salutations', duration: '10 min', difficulty: 'Medium', guidance: 'Repeat 5-10 rounds rhythmically.', note: 'A traditional practice to build internal heat and flexibility.' },
      { name: 'Strength Training', duration: '45 min', difficulty: 'High', guidance: 'Lift challenging weights with proper form and rest intervals.', note: 'Develops physical agency, resilience, and bone density.' },
      { name: 'Walking', duration: '30 min', difficulty: 'Low', guidance: 'Brisk, purposeful walking, preferably outdoors without a phone.', note: 'Regulates the nervous system and aids digestion.' },
      { name: 'Restorative Rest', duration: '20 min', difficulty: 'Low', guidance: 'Lie still (e.g., Yoga Nidra or Savasana) and let the body recover.', note: 'Crucial for preventing burnout and consolidating strength.' }
    ]
  }
};

const ManipuraDataContext = createContext(manipuraData);

export const useManipuraData = () => useContext(ManipuraDataContext);
