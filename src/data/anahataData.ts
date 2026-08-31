import { createContext, useContext } from 'react';

export const anahataData = {
  header: {
    sanskritName: 'अनाहत',
    transliteration: 'ANĀHATA',
    subtitle: 'THE HEART',
    hook: '«What happens when strength learns to soften?»'
  },
  whatIsIt: {
    simple: 'Anāhata is the heart-region chakra described in certain yogic and tantric subtle-body systems. It is associated with the element of air and unstruck sound.',
    tradition: 'The classical description places a twelve-petaled lotus in the region of the heart, associated with Vāyu (air), a six-pointed form created by two triangles, and the bīja Yaṃ. The traditional description connects Anāhata with "unstruck sound."',
    modern: 'Contemporary chakra systems often associate Anāhata with love, compassion, relationships, emotional balance, forgiveness, and openness.',
    evidence: 'Chakra activation has no scientifically validated anatomical measurement. However, contemplative practices focused on the heart and compassion have documented psychological and somatic benefits.'
  },
  name: {
    an: 'UN-',
    ahata: 'STRUCK / BEATEN',
    combined: 'THE UNSTRUCK',
    interpretation: 'The name is connected in the tradition with an "unstruck" sound—a sound not produced by two external objects striking one another. The classical discussion associates this with subtle sound and the heart centre.'
  },
  location: {
    traditional: 'Situated in the region of the heart. Subtle-body maps describe energetic focal points for meditation, not physical anatomy.',
    anatomical: 'Often conflated in modern times with the physical heart, the cardiac plexus, or the thymus gland.',
    modern: 'Visualized as a radiant green center of love and connection in the middle of the chest.'
  },
  history: [
    {
      era: 'Early Indian Internal Body Ideas',
      year: 'Pre-1000 BCE',
      title: 'Breath and Life',
      description: 'Prāṇa (breath/vitality) and the heart (Hṛdaya) were seen as the seat of consciousness and the self (Ātman) in the early Upaniṣads.',
      sourceType: 'TRADITION'
    },
    {
      era: 'Developing Tantric Systems',
      year: '600–900 CE',
      title: 'Subtle Sound',
      description: 'Tantric systems developed complex maps of subtle channels (nāḍīs) and points where subtle sound (Nāda) and energy resonate.',
      sourceType: 'TRADITION'
    },
    {
      era: 'Medieval Yogic / Tantric Subtle Body',
      year: '900–1200 CE',
      title: 'Integration',
      description: 'The heart center became a crucial point of focus for devotional (Bhakti) and yogic practices, often associated with the element of air.',
      sourceType: 'TRADITION'
    },
    {
      era: 'Ṣaṭ-Cakra-Nirūpaṇa',
      year: '1526 CE',
      title: 'The Classical Blueprint',
      description: 'Pūrṇānanda described Anāhata as a twelve-petaled lotus of deep red colour, containing the smoky-coloured hexagram of Vāyu, the bīja Yaṃ, and the deities Kākinī and Īśa.',
      sourceType: 'TRADITION'
    },
    {
      era: 'Later Commentarial Traditions',
      year: '1700s–1800s',
      title: 'Elaboration',
      description: 'Commentators expanded on the visualization practices, solidifying the iconography of the Bāṇa-liṅga and the Haṃsa swan within the heart.',
      sourceType: 'TRADITION'
    },
    {
      era: '19th / 20th Century Translation',
      year: 'Early 1900s',
      title: 'Western Introduction',
      description: 'Translations by Arthur Avalon brought these specific tantric visualisations to the West, merging them with Theosophical ideas.',
      sourceType: 'MODERN'
    },
    {
      era: 'Modern Global Chakra Systems',
      year: 'Late 20th Century',
      title: 'The Emotional Heart',
      description: 'New Age authors mapped Jungian psychology onto the system. Anāhata became exclusively green and associated with psychological love, grief, and relationship healing.',
      sourceType: 'MODERN'
    }
  ],
  mandala: {
    petals: 12,
    petalLetters: [
      { devanagari: 'कं', iast: 'kaṃ' },
      { devanagari: 'खं', iast: 'khaṃ' },
      { devanagari: 'गं', iast: 'gaṃ' },
      { devanagari: 'घं', iast: 'ghaṃ' },
      { devanagari: 'ङं', iast: 'ṅaṃ' },
      { devanagari: 'चं', iast: 'caṃ' },
      { devanagari: 'छं', iast: 'chaṃ' },
      { devanagari: 'जं', iast: 'jaṃ' },
      { devanagari: 'झं', iast: 'jhaṃ' },
      { devanagari: 'ञं', iast: 'ñaṃ' },
      { devanagari: 'टं', iast: 'ṭaṃ' },
      { devanagari: 'ठं', iast: 'ṭhaṃ' }
    ],
    bija: { sanskrit: 'यं', transliteration: 'YAṂ' }
  },
  deities: {
    antelope: {
      title: 'The Black Antelope',
      traditional: 'The vehicle of Vāyu (Air). The classical description places Yaṃ on a black antelope.',
      meaning: 'Associated with swiftness, movement, and the elusive, ungraspable nature of air and breath.'
    },
    isa: {
      title: 'Īśa (Presiding Deity)',
      traditional: 'The Overlord. Described in the Ṣaṭ-Cakra-Nirūpaṇa as three-eyed, luminous, and granting boons.',
      meaning: 'Represents the divine consciousness presiding over the air element and the subtle space of the heart.'
    },
    kakini: {
      title: 'Kākinī (Śakti)',
      traditional: 'The four-armed goddess presiding over the fat tissue (medas) and the chakra. She is described as golden, joyous, and holding a noose and skull.',
      meaning: 'The specific divine energy organizing this center. She represents the joyful yet formidable power of the heart space.'
    },
    banalinga: {
      title: 'Bāṇa-liṅga',
      traditional: 'Inside the inner triangle shines the Bāṇa-liṅga, described as brilliant like shining gold.',
      meaning: 'A traditional symbol of divine presence and formless consciousness resting in the heart.'
    },
    hamsa: {
      title: 'Haṃsa / Jīvātman',
      traditional: 'Below the lotus is the Haṃsa (swan), representing the Jīvātman (the individual soul) glowing like the steady flame of a lamp in a windless place.',
      meaning: 'The eternal, untouched witness residing in the deepest chamber of the heart.'
    }
  },
  modernThemes: [
    { id: 'LOVE', label: 'LOVE', description: 'The capacity for care, devotion, and deep connection.' },
    { id: 'COMPASSION', label: 'COMPASSION', description: 'The ability to witness suffering and meet it with warmth.' },
    { id: 'GRIEF', label: 'GRIEF', description: 'The natural emotional process of loving what is no longer present.' },
    { id: 'BOUNDARIES', label: 'BOUNDARIES', description: 'The discernment of what to let in and what to keep out.' },
    { id: 'RECIPROCITY', label: 'RECIPROCITY', description: 'The healthy exchange of giving and receiving in relationships.' }
  ],
  balanceStates: {
    closed: {
      title: 'CLOSED',
      subtitle: 'Guarded & Disconnected',
      traits: ['Isolation', 'Defensiveness', 'Cynicism', 'Emotional withdrawal']
    },
    protected: {
      title: 'PROTECTED',
      subtitle: 'Clear Boundaries',
      traits: ['Discernment', 'Safety', 'Ability to say no', 'Selective vulnerability']
    },
    open: {
      title: 'OPEN',
      subtitle: 'Connection & Reciprocity',
      traits: ['Warmth', 'Compassion', 'Generosity', 'Capacity to receive']
    },
    overextended: {
      title: 'OVEREXTENDED',
      subtitle: 'Flooded & Lacking Boundaries',
      traits: ['People-pleasing', 'Over-giving', 'Difficulty saying no', 'Emotional exhaustion']
    }
  },
  symptoms: {
    deficient: {
      title: 'DEFICIENT (UNDERACTIVE)',
      description: 'The heart is heavily guarded, closed off from receiving or giving love due to fear of vulnerability or past pain.',
      symptoms: ['Fear of intimacy', 'Isolation and loneliness', 'Lack of empathy', 'Holding grudges / Bitterness', 'Feeling disconnected from others'],
      howToFix: ['Practice self-compassion first', 'Small acts of vulnerability with safe people', 'Metta (Loving-Kindness) meditation', 'Focusing on gratitude']
    },
    excessive: {
      title: 'EXCESSIVE (OVERACTIVE)',
      description: 'The heart is completely unbounded, confusing codependency for love and bleeding energy into toxic situations.',
      symptoms: ['Codependency', 'People-pleasing', 'Jealousy and clinging', 'Losing sense of self in relationships', 'Over-sacrificing'],
      howToFix: ['Setting clear boundaries (The "No")', 'Learning to self-soothe', 'Practicing discernment in relationships', 'Prioritizing self-care without guilt']
    },
    balanced: {
      title: 'BALANCED',
      description: 'The heart beats in a rhythm of healthy reciprocity, possessing both a soft core and a protective perimeter.',
      symptoms: ['Deep compassion for self and others', 'Healthy boundaries', 'Ability to forgive without excusing harm', 'Peaceful and calm', 'Comfortable being alone or together'],
      howToFix: ['Maintain daily contemplative practices', 'Continue honoring boundaries', 'Stay grounded in reality, not fantasy']
    }
  },
  myths: [
    {
      claim: 'Being loving means never saying no.',
      nuance: 'FALSE. Love without boundaries becomes over-extension and resentment. A healthy heart has a centre and a protective perimeter.'
    },
    {
      claim: 'Forgiveness means reconciliation.',
      nuance: 'NOT NECESSARILY. Forgiving someone is an internal release of resentment. It does not require giving them access to you again.'
    },
    {
      claim: 'Heart chakra imbalance causes heart disease.',
      nuance: 'NOT AN EVIDENCE-BASED DIAGNOSIS. Subtle-body maps are for meditation. Do not replace cardiology and medical science with chakra metaphors.'
    },
    {
      claim: 'Green foods heal Anāhata.',
      nuance: 'NOT ESTABLISHED. Eating spinach is healthy, but the association of green with the heart chakra is a 20th-century symbolic mapping, not a biological mechanism.'
    },
    {
      claim: 'Feeling warmth in the chest proves chakra opening.',
      nuance: 'NOT NECESSARILY. Focusing attention on any body part increases local blood flow and sensation. It is a somatic experience, not proof of metaphysical activation.'
    },
    {
      claim: 'Crying means the heart chakra is releasing trauma.',
      nuance: 'NOT ESTABLISHED. Crying is a natural physiological release of emotion. Framing it specifically as a "chakra clearing" is a modern psychological interpretation.'
    }
  ],
  journalPrompts: [
    "What does love mean to me?",
    "Who makes me feel safe enough to be myself?",
    "Where do I over-give?",
    "Where do I withhold?",
    "What am I afraid to receive?",
    "What boundary would actually protect my heart?",
    "What grief am I carrying?",
    "What am I ready to forgive?",
    "What does compassion without self-erasure look like?",
    "Who am I becoming kinder toward?"
  ],
  realLifeExperiment: [
    "Listen to someone without interrupting once.",
    "Offer sincere appreciation to someone you interact with daily.",
    "Receive a compliment without deflecting or minimizing it.",
    "Set one healthy boundary in a gentle but firm way.",
    "Do one helpful act without expecting acknowledgment.",
    "Spend five quiet minutes with yourself doing absolutely nothing.",
    "Notice one moment of genuine connection and pause to feel it fully."
  ]
};

const AnahataDataContext = createContext(anahataData);
export const useAnahataData = () => useContext(AnahataDataContext);
