export interface ChakraData {
  id: string;
  sanskritName: string;
  englishName: string;
  sanskritCharacter: string;
  hexColor: string;
  tailwindColor: string;
  frameStart: number;
  frameEnd: number;
  gatewayHook: string;
  
  // Basic Overview
  basicDescription: string;
  coreDesire: string;
  developmentalStage: string;
  
  // Advanced Characteristics
  element: string;
  bijaMantra: string;
  associatedOrgans: string;
  
  // The Diagnosis (Imbalance)
  balancedExperience: string;
  unbalancedUnderactive: string;
  unbalancedOveractive: string;
  
  // The Healing Path
  healingDiet: string;
  healingPractices: string[];
  affirmations: string[];
  meditationPractice: string;
}

export const chakras: ChakraData[] = [
  {
    id: 'root',
    sanskritName: 'Mūlādhāra',
    englishName: 'Root',
    sanskritCharacter: 'लं',
    hexColor: '#EF4444',
    tailwindColor: 'root',
    frameStart: 26,
    frameEnd: 95,
    gatewayHook: 'Return to the earth.',
    basicDescription: 'Mūlādhāra is the psychological and energetic anchor of the human experience. It is the unyielding stone upon which the temple of consciousness is built, governing our most primal needs: survival, safety, and physical identity.',
    coreDesire: 'Safety, Security, and Survival',
    developmentalStage: 'Womb to 12 months',
    element: 'Earth',
    bijaMantra: 'LAM',
    associatedOrgans: 'Adrenal Glands, Skeleton, Base of Spine, Large Intestine',
    balancedExperience: 'You walk into an unknown room and immediately feel an unshakeable sense of belonging. The ground beneath you feels solid, and there is a deep, quiet trust that you have exactly what you need to survive and thrive. You are entirely present in your physical form and feel safe in your own skin.',
    unbalancedUnderactive: 'A constant, low-level static of anxiety and fear. It feels as though the ground beneath you might give way at any moment. You might feel untethered, unable to commit to a place, a career, or a relationship. Chronic fatigue and feelings of unreality or dissociation are common.',
    unbalancedOveractive: 'A tyrannical need to hoard resources and control your environment. You may experience extreme materialism, greed, and an inability to adapt to change. This often manifests physically as sluggishness, obesity, or rigidly holding onto the past out of terror of the unknown.',
    healingDiet: 'Root vegetables (carrots, potatoes, parsnips, radishes, beets), protein-rich foods (beans, tofu, soy, eggs, meats), and red foods (apples, pomegranates).',
    healingPractices: [
      'Walking barefoot on grass or dirt (Earthing).',
      'Gardening and physically touching soil.',
      'Somatic therapies like massage or deep tissue work.',
      'Hatha yoga focusing on standing poses (Warrior, Mountain, Tree).'
    ],
    affirmations: [
      'I am safe, supported, and deeply connected to the Earth.',
      'I have a right to be here, exactly as I am.',
      'The universe provides for my every need.'
    ],
    meditationPractice: 'Sit comfortably with your feet planted flat on the floor. Visualize a thick, glowing red cord extending from the base of your spine, plunging deep through the floorboards, through the crust of the Earth, all the way to its molten iron core. With every exhale, release anxiety down this cord to be burned away. With every inhale, draw up raw, stabilized earthen energy.'
  },
  {
    id: 'sacral',
    sanskritName: 'Svādhiṣṭhāna',
    englishName: 'Sacral',
    sanskritCharacter: 'वं',
    hexColor: '#F97316',
    tailwindColor: 'sacral',
    frameStart: 105,
    frameEnd: 174,
    gatewayHook: 'Surrender to the current.',
    basicDescription: 'Where the earth gives way, the waters rise. Svādhiṣṭhāna is the domain of fluidity, the source of creation, emotion, and desire. It teaches that the only way to master the river of life is to become the water itself.',
    coreDesire: 'Pleasure, Creativity, and Emotional Connection',
    developmentalStage: '6 months to 2 years',
    element: 'Water',
    bijaMantra: 'VAM',
    associatedOrgans: 'Reproductive Organs, Kidneys, Bladder, Pelvis',
    balancedExperience: 'Emotions arise, crest, and fall like ocean waves—felt deeply, but allowed to pass without resistance. You feel a profound wellspring of creativity and a healthy, unashamed connection to pleasure and intimacy. Life feels like a dance rather than a march.',
    unbalancedUnderactive: 'You feel emotionally numb, structurally rigid, and deeply creatively blocked. You may harbor immense guilt regarding pleasure or sexuality, leading to a flat, colorless experience of life where everything feels like an obligatory chore.',
    unbalancedOveractive: 'You are entirely overwhelmed by your emotions, drowning in a turbulent sea of desires and attachments. This often manifests as emotional codependency, addiction to drama or pleasure, and an inability to establish healthy emotional boundaries with others.',
    healingDiet: 'Liquids (pure water, herbal teas, broths), orange foods (oranges, melons, mangoes, sweet potatoes), and healthy fats (nuts, seeds, fish).',
    healingPractices: [
      'Swimming, soaking in baths, or spending time near bodies of water.',
      'Engaging in free-form creative arts (painting, dancing, writing without rules).',
      'Tantric practices and healthy exploration of sensuality.',
      'Hip-opening yoga poses (Pigeon, Butterfly, Goddess).'
    ],
    affirmations: [
      'I allow my emotions to flow through me without judgment.',
      'I am a creative being, open to experiencing pleasure.',
      'I embrace the fluid, ever-changing nature of life.'
    ],
    meditationPractice: 'Lie on your back and place your hands gently over your lower abdomen. Visualize a luminous orange pool of water resting in your pelvis. With every breath, imagine a pebble dropping into the exact center of this pool, sending perfectly symmetric, soothing ripples outward through your entire body.'
  },
  {
    id: 'solar',
    sanskritName: 'Maṇipūra',
    englishName: 'Solar Plexus',
    sanskritCharacter: 'रं',
    hexColor: '#EAB308',
    tailwindColor: 'solar',
    frameStart: 184,
    frameEnd: 253,
    gatewayHook: 'Ignite the inner sun.',
    basicDescription: 'The crucible of the self. In Maṇipūra, the emotional waters of the sacral are consumed by fire. Here lies the architecture of will, the burning core that transforms raw existence into intention, action, and individual identity.',
    coreDesire: 'Power, Purpose, and Self-Definition',
    developmentalStage: '18 months to 4 years',
    element: 'Fire',
    bijaMantra: 'RAM',
    associatedOrgans: 'Pancreas, Stomach, Liver, Gallbladder, Digestive Tract',
    balancedExperience: 'A quiet, unshakeable confidence radiates from your core. You do not need to dominate others, nor do you shrink to accommodate them. You possess the clear, focused energy to transform your intentions into tangible reality. You act decisively and trust your "gut feeling."',
    unbalancedUnderactive: 'You suffer from a debilitating lack of self-worth and chronic indecision. You constantly seek external validation, easily cave to the demands of others, and struggle to finish what you start, often feeling like a victim of circumstance.',
    unbalancedOveractive: 'Your inner fire burns out of control. This manifests as a tyrannical need to micromanage and dominate everything around you. You may be highly aggressive, rigidly competitive, and prone to fiery outbursts or complete burnout from overworking.',
    healingDiet: 'Complex carbohydrates for sustained energy (oats, brown rice), yellow foods (bananas, corn, lemons, yellow peppers), and digestive spices (ginger, turmeric, cumin, fennel).',
    healingPractices: [
      'Core-strengthening exercises (Pilates, martial arts).',
      'Setting strict, vocal boundaries with others.',
      'Breaking large goals into tiny, actionable steps to build momentum.',
      'Sunbathing or practicing "Breath of Fire" (Kapalabhati pranayama).'
    ],
    affirmations: [
      'I am powerful, capable, and worthy of my own respect.',
      'I have the courage to create the life I desire.',
      'My inner fire burns through all obstacles.'
    ],
    meditationPractice: 'Imagine a brilliant, blazing yellow sun situated just above your navel. As you inhale deeply, watch the sun expand, filling your chest and abdomen with golden light and warmth. As you exhale, imagine the fire forging your insecurities into pure, concentrated willpower.'
  },
  {
    id: 'heart',
    sanskritName: 'Anāhata',
    englishName: 'Heart',
    sanskritCharacter: 'यं',
    hexColor: '#22C55E',
    tailwindColor: 'heart',
    frameStart: 263,
    frameEnd: 332,
    gatewayHook: 'Open the infinite center.',
    basicDescription: 'The un-struck sound. Anāhata is the sacred bridge connecting the three dense, physical chakras below to the three weightless, spiritual chakras above. It is the sanctuary where the illusion of separation dissolves into the boundless rhythm of unconditional love.',
    coreDesire: 'Love, Connection, and Acceptance',
    developmentalStage: '4 to 7 years',
    element: 'Air',
    bijaMantra: 'YAM',
    associatedOrgans: 'Thymus, Lungs, Heart, Arms, Hands',
    balancedExperience: 'You experience a profound, unconditional love that does not depend on external circumstances. You feel deep compassion for strangers, possess the capacity to forgive freely, and recognize the fundamental interconnectedness of all living things. The boundary between "self" and "other" softens beautifully.',
    unbalancedUnderactive: 'You feel isolated, deeply lonely, or harbor long-standing resentments and grief. You likely build massive emotional walls to protect yourself from getting hurt, appearing cold, withdrawn, or highly critical of yourself and others.',
    unbalancedOveractive: 'Your love lacks boundaries. You bleed your energy dry trying to "fix" or save everyone else while completely neglecting your own needs. You may experience intense jealousy, smothering affection, and a total loss of your own identity in relationships.',
    healingDiet: 'Leafy greens (kale, spinach, chard), cruciferous vegetables (broccoli, cabbage), green teas, and foods rich in Vitamin C and chlorophyll.',
    healingPractices: [
      'Practicing radical forgiveness (for yourself and others).',
      'Volunteering or engaging in acts of selfless service (Seva).',
      'Deep, intentional breathing exercises (Pranayama).',
      'Heart-opening yoga poses (Camel, Cobra, Bridge).'
    ],
    affirmations: [
      'I am open to giving and receiving unconditional love.',
      'I forgive myself and I forgive those who have hurt me.',
      'Love is the guiding force in all my actions.'
    ],
    meditationPractice: 'Bring your awareness to the center of your chest. Visualize an emerald green lotus flower tightly closed. With each slow, deliberate breath, imagine the petals unfolding one by one. With every exhale, silently repeat the phrase: "I give love, I receive love, I am love."'
  },
  {
    id: 'throat',
    sanskritName: 'Viśuddha',
    englishName: 'Throat',
    sanskritCharacter: 'हं',
    hexColor: '#06B6D4',
    tailwindColor: 'throat',
    frameStart: 342,
    frameEnd: 411,
    gatewayHook: 'Speak the silent truth.',
    basicDescription: 'The architecture of resonance. Viśuddha purifies the self into vibration, turning thought into frequency. It is the threshold where the silent soul finds its voice, echoing your deepest authentic truths across the void of existence.',
    coreDesire: 'Expression, Truth, and Resonance',
    developmentalStage: '7 to 12 years',
    element: 'Ether / Space',
    bijaMantra: 'HAM',
    associatedOrgans: 'Thyroid, Trachea, Vocal Cords, Neck, Jaw',
    balancedExperience: 'You speak your truth clearly, kindly, and without fear of judgment. Your words carry weight and resonance, yet you are equally adept at profound, active listening. You express your authentic self effortlessly, perfectly aligning your inner reality with your outer expression.',
    unbalancedUnderactive: 'You frequently swallow your words to keep the peace, feeling a literal "lump in your throat." You are terrified of speaking up, struggle to put your feelings into words, and may suffer from a suppressed, inauthentic version of yourself.',
    unbalancedOveractive: 'You use words as weapons or shields. You might struggle with habitual lying, gossiping, or dominating conversations—talking endlessly without ever truly listening or communicating anything of substance. The space is filled with noise, but no truth.',
    healingDiet: 'Soothing liquids (honey, lemon water, herbal teas), sea plants (kelp, nori for thyroid health), and blue foods (blueberries, blackberries).',
    healingPractices: [
      'Singing loudly, chanting, or humming.',
      'Journaling your unfiltered thoughts without editing.',
      'Practicing periods of total silence (Mauna).',
      'Neck stretches and Lion’s Breath (Simhasana).'
    ],
    affirmations: [
      'My voice matters and my truth is worth hearing.',
      'I listen deeply to others and speak with loving clarity.',
      'I express my authentic self with total freedom.'
    ],
    meditationPractice: 'Sit in silence and bring your attention to the hollow of your throat. Visualize a spinning wheel of sapphire blue light. Chant the seed mantra "HAM" (pronounced H-U-M). Feel the physical vibration of the sound clearing away energetic debris and unlocking your vocal cords.'
  },
  {
    id: 'thirdeye',
    sanskritName: 'Ājñā',
    englishName: 'Third Eye',
    sanskritCharacter: 'ॐ',
    hexColor: '#6366F1',
    tailwindColor: 'thirdeye',
    frameStart: 421,
    frameEnd: 490,
    gatewayHook: 'See beyond the veil.',
    basicDescription: 'The eye of intuition. Ājñā pierces the illusion of duality, offering a glimpse into the underlying geometry of the universe. It is the silent, neutral observer, watching the dance of time and matter from a place of eternal twilight.',
    coreDesire: 'Insight, Intuition, and Imagination',
    developmentalStage: 'Adolescence',
    element: 'Light',
    bijaMantra: 'OM',
    associatedOrgans: 'Pineal Gland, Eyes, Brain, Nervous System',
    balancedExperience: 'You possess a piercing clarity of thought and trust your intuition implicitly. You can see the "big picture" and easily recognize the underlying patterns and synchronicities in your life. The illusions and dramas of the material world no longer dictate your inner peace.',
    unbalancedUnderactive: 'You feel completely lost, lacking vision, imagination, or purpose. You are likely trapped in rigid, logical overthinking, requiring hard "proof" for everything and remaining completely disconnected from your internal guidance system (your intuition).',
    unbalancedOveractive: 'You become dangerously ungrounded in reality. An overactive Third Eye without the anchor of the lower chakras can lead to delusions, obsessive fantasies, chronic nightmares, headaches, and a disturbing detachment from physical human life.',
    healingDiet: 'Brain-boosting foods (walnuts, dark chocolate, omega-3s), purple foods (eggplant, purple cabbage, grapes), and mind-altering/clarifying herbs (gotu kola, mugwort, mint).',
    healingPractices: [
      'Dream journaling and lucid dreaming practices.',
      'Staring at a candle flame (Trataka meditation).',
      'Digital detoxes to reduce artificial light overstimulation.',
      'Trusting and acting upon your immediate "first instincts."'
    ],
    affirmations: [
      'I trust my intuition to guide me perfectly.',
      'I see the truth beyond the illusions of the physical world.',
      'My mind is clear, focused, and open to universal wisdom.'
    ],
    meditationPractice: 'Close your eyes and focus your internal gaze on the space just above and between your eyebrows. Visualize a deep indigo light pulsating at this point. As thoughts arise, observe them as passing clouds, returning your unwavering focus to the indigo star at the center of your forehead.'
  },
  {
    id: 'crown',
    sanskritName: 'Sahasrāra',
    englishName: 'Crown',
    sanskritCharacter: 'ॐ',
    hexColor: '#A855F7',
    tailwindColor: 'crown',
    frameStart: 500,
    frameEnd: 568,
    gatewayHook: 'Dissolve into everything.',
    basicDescription: 'The thousand-petaled lotus. Sahasrāra is the final surrender of the individual self to the infinite cosmos. It is the absolute silence that contains all sound, the pure white light that holds every color. Here, you are nowhere, and everywhere.',
    coreDesire: 'Transcendence, Unity, and Divine Connection',
    developmentalStage: 'Early Adulthood and beyond',
    element: 'Thought / Pure Consciousness',
    bijaMantra: 'Silence',
    associatedOrgans: 'Pituitary Gland, Cerebral Cortex, Central Nervous System',
    balancedExperience: 'A state of pure, boundless awareness. The rigid boundaries of the ego dissolve completely. You experience a profound, ecstatic state of unity with the universe, knowing with absolute certainty that you are not a drop in the ocean, but the entire ocean in a drop.',
    unbalancedUnderactive: 'A deep sense of existential dread, spiritual cynicism, or feeling entirely disconnected from the universe. You may feel that life is meaningless, harboring a deep-seated anger toward "God" or the universe for your suffering.',
    unbalancedOveractive: 'You become addicted to spirituality as a form of escapism ("spiritual bypassing"). You completely neglect your physical body, relationships, and earthly responsibilities in pursuit of a high, leading to psychosis or a total dissociation from the human experience.',
    healingDiet: 'Fasting, pure clean water, and sunlight. The Crown chakra is less about physical consumption and more about fasting or detoxifying to allow clear energetic channels.',
    healingPractices: [
      'Extended periods of fasting (if physically safe).',
      'Silent meditation retreats (Vipassana).',
      'Studying ancient philosophical or spiritual texts.',
      'Spending time in vast, open natural spaces (mountains, oceans).'
    ],
    affirmations: [
      'I am an extension of the divine universe.',
      'I surrender my ego to the highest good.',
      'I am at peace with the mystery of existence.'
    ],
    meditationPractice: 'Sit in complete stillness. Imagine a thousand-petaled lotus made of pure, violet-white light resting on the crown of your head. Imagine this lotus opening, allowing a beam of divine, universal light to pour down from the cosmos, washing through your entire energetic system. Rest deeply in the silence.'
  }
];
