import { createContext, useContext } from 'react';

export const visuddhaData = {
  header: {
    sanskritName: 'विशुद्ध',
    transliteration: 'VIŚUDDHA',
    subtitle: 'PURIFICATION / CLARITY',
    hook: '«What happens when you give your inner world a voice?»'
  },
  whatIsIt: {
    simple: 'Viśuddha is a throat-region chakra described in specific yogic and tantric subtle-body systems. It is the centre of space (Ākāśa) and sound.',
    tradition: 'The classical Ṣaṭ-Cakra-Nirūpaṇa describes a sixteen-petaled lotus at the base of the throat, with sixteen vowel sounds on the petals and a circular ether/Ākāśa region containing the bīja Haṃ. It also describes a white elephant and further deity symbolism.',
    modern: 'Contemporary chakra systems commonly associate Viśuddha with communication, self-expression, truth, listening, and authenticity.',
    evidence: 'The chakra is not an established anatomical organ or scientifically measurable energy centre. However, voice, speech, and truth-telling have profound psychological impacts.'
  },
  name: {
    vi: 'INTENSELY / COMPLETELY',
    shuddha: 'PURE / CLEAR',
    combined: 'THE ESPECIALLY PURE',
    interpretation: 'The semantic field around Viśuddha involves purification, clarity, and refinement. It suggests that by the time energy reaches the throat, it has been distilled from raw instinct into clear expression.'
  },
  location: {
    traditional: 'Situated at the base of the throat (Kaṇṭha-mūla).',
    anatomical: 'Often conflated in modern times with the thyroid gland, vocal cords, or the physical throat.',
    modern: 'Visualized as a luminous blue sphere radiating from the throat, governing communication and truth.'
  },
  history: [
    {
      era: 'Early Indian Internal Body Ideas',
      year: 'Pre-1000 BCE',
      title: 'Vāc (Speech)',
      description: 'Speech (Vāc) was revered as a cosmic force. The spoken word (mantra) held the power to shape reality.',
      sourceType: 'TRADITION'
    },
    {
      era: 'Tantric Subtle-Body Systems',
      year: '600–900 CE',
      title: 'Sound and Space',
      description: 'Tantric systems mapped the body, identifying the throat as a crucial node for subtle sound (Nāda) and the element of space (Ākāśa).',
      sourceType: 'TRADITION'
    },
    {
      era: 'Medieval Chakra Systems',
      year: '900–1200 CE',
      title: 'The Throat Node',
      description: 'The throat became established as one of the primary "wheels" (cakras) in the central channel.',
      sourceType: 'TRADITION'
    },
    {
      era: 'Ṣaṭ-Cakra-Nirūpaṇa',
      year: '1526 CE',
      title: 'The Classical Blueprint',
      description: 'Described as a sixteen-petaled smoky-purple lotus containing the sixteen Sanskrit vowels, the circular white mandala of Ākāśa, the bīja Haṃ, and the white elephant.',
      sourceType: 'TRADITION'
    },
    {
      era: 'Translations',
      year: 'Early 1900s',
      title: 'Arthur Avalon',
      description: 'The translation of the Ṣaṭ-Cakra-Nirūpaṇa introduced these specific visualisations to the West.',
      sourceType: 'MODERN'
    },
    {
      era: 'Theosophy & Modernity',
      year: '1920s–1970s',
      title: 'Psychological Mapping',
      description: 'Theosophists and later New Age thinkers mapped psychological traits (communication, self-expression) onto the chakras.',
      sourceType: 'MODERN'
    },
    {
      era: 'Global Yoga Culture',
      year: 'Late 20th Century',
      title: 'The Blue Chakra',
      description: 'The rainbow color spectrum was retrofitted onto the chakras. Viśuddha became universally depicted as bright blue.',
      sourceType: 'MODERN'
    },
    {
      era: 'Contemporary Chakra Psychology',
      year: 'Present',
      title: 'The Voice',
      description: 'Viśuddha is now widely treated as a metaphor for speaking one\'s truth, setting boundaries, and healing the trauma of being silenced.',
      sourceType: 'MODERN'
    }
  ],
  mandala: {
    petals: 16,
    petalLetters: [
      { devanagari: 'अं', iast: 'aṃ' },
      { devanagari: 'आं', iast: 'āṃ' },
      { devanagari: 'इं', iast: 'iṃ' },
      { devanagari: 'ईं', iast: 'īṃ' },
      { devanagari: 'उं', iast: 'uṃ' },
      { devanagari: 'ऊं', iast: 'ūṃ' },
      { devanagari: 'ऋं', iast: 'ṛṃ' },
      { devanagari: 'ॠं', iast: 'ṝṃ' },
      { devanagari: 'ऌं', iast: 'ḷṃ' },
      { devanagari: 'ॡं', iast: 'ḹṃ' },
      { devanagari: 'एं', iast: 'eṃ' },
      { devanagari: 'ऐं', iast: 'aiṃ' },
      { devanagari: 'ओं', iast: 'oṃ' },
      { devanagari: 'औं', iast: 'auṃ' },
      { devanagari: 'अं', iast: 'aṃ (anusvāra)' },
      { devanagari: 'अः', iast: 'aḥ (visarga)' }
    ],
    bija: { sanskrit: 'हं', transliteration: 'HAṂ' }
  },
  deities: {
    elephant: {
      title: 'Airāvata / White Elephant',
      traditional: 'The vehicle of Ākāśa. Described as a pure white elephant with multiple trunks.',
      meaning: 'Represents the vastness, purity, and solid yet expansive nature of space/ether.'
    },
    sadasiva: {
      title: 'Sadāśiva',
      traditional: 'The presiding deity. Described as white, having five faces, three eyes, and multiple arms.',
      meaning: 'The eternal Shiva, representing the pure consciousness that pervades the element of space.'
    },
    sakini: {
      title: 'Śākinī',
      traditional: 'The Śakti (energy) of this center. Luminous as light itself, dressed in yellow, holding a bow, arrow, noose, and goad.',
      meaning: 'She presides over the bone tissue (asthi) and the gateway of liberation.'
    },
    akasa: {
      title: 'Ākāśa Mandala',
      traditional: 'A circular, pure white region representing the element of Ether (Space) inside the pericarp of the lotus.',
      meaning: 'The void from which all sound emanates. Space is the medium of sound.'
    }
  },
  myths: [
    {
      claim: 'Viśuddha is literally your vocal cords.',
      nuance: 'MISLEADING. It is a subtle-body focal point for meditation, not a physical organ.'
    },
    {
      claim: 'The throat chakra controls the thyroid.',
      nuance: 'NOT ESTABLISHED. Do not replace endocrinology with chakra metaphors.'
    },
    {
      claim: 'Blue foods activate it.',
      nuance: 'NOT ESTABLISHED. Blueberries are healthy, but they do not magically unlock your ability to communicate.'
    },
    {
      claim: 'Speaking truth automatically opens it.',
      nuance: 'OVERSIMPLIFIED. Speaking bluntly without listening or care is not "opening a chakra"—it is just noise.'
    },
    {
      claim: 'Hoarseness means your throat chakra is blocked.',
      nuance: 'NOT A VALID DIAGNOSIS. Persistent hoarseness is a medical symptom that should be checked by a doctor, not treated as a spiritual failing.'
    },
    {
      claim: 'Chanting proves the chakra is activated.',
      nuance: 'NOT ESTABLISHED. Chanting is a powerful somatic and contemplative practice, but it does not biologically "activate" an energy center.'
    }
  ],
  journalPrompts: [
    "What do I need to say?",
    "What do I keep explaining instead of simply saying?",
    "Where do I say yes when I mean no?",
    "What conversation am I avoiding?",
    "What truth needs timing rather than suppression?",
    "What do I need to hear?",
    "When do I talk because I am uncomfortable with silence?",
    "When do I stay silent because I fear judgment?",
    "What would a clear and kind sentence sound like?"
  ]
};

const VisuddhaDataContext = createContext(visuddhaData);
export const useVisuddhaData = () => useContext(VisuddhaDataContext);
