export interface AjnaData {
  name: string;
  sanskrit: string;
  translation: string;
  meaning: string[];
  location: string;
  element: string;
  bija: {
    sanskrit: string;
    transliteration: string;
  };
  mandala: {
    color: string;
    petals: number;
    petalLetters: { sanskrit: string; transliteration: string }[];
    deity: string;
    description: string;
  };
  history: { era: string; description: string; status: 'Documented' | 'Interpreted' | 'Modernized' }[];
  myths: { claim: string; nuance: string; category: 'Not Established' | 'Misleading' | 'Oversimplified' | 'Not Necessarily' }[];
}

export const ajnaData: AjnaData = {
  name: "Ājñā",
  sanskrit: "आज्ञा",
  translation: "Command, Authority, Perception",
  meaning: [
    "To perceive",
    "To command",
    "To notice",
    "To instruct"
  ],
  location: "Between the eyebrows (Bhrūmadhya)",
  element: "Mahat (The Supreme Space/Mind)",
  bija: {
    sanskrit: "ॐ",
    transliteration: "OṂ"
  },
  mandala: {
    color: "Moon-White / Luminous Indigo",
    petals: 2,
    petalLetters: [
      { sanskrit: "ह", transliteration: "Ha" },
      { sanskrit: "क्ष", transliteration: "Kṣa" }
    ],
    deity: "Hākinī",
    description: "A luminous, two-petaled lotus shining like the moon. Inside resides the mind (Manas) and the six-faced goddess Hākinī."
  },
  history: [
    { era: "Early Indian Ideas", description: "Vedic texts locate the 'mind' in the heart. The brow is a site of concentration but not yet formalized as a chakra.", status: 'Documented' },
    { era: "Tantric Subtle Body", description: "The brow is identified as a seat of mastery, the knot of Rudra (Rudra Granthi), where dualities begin to merge.", status: 'Documented' },
    { era: "Ṣaṭ-Cakra-Nirūpaṇa (1577)", description: "Formalizes the two-petaled, moon-white lotus of Ājñā, locating it between the eyebrows. The seat of the mind and Hākinī.", status: 'Documented' },
    { era: "Translation (1919)", description: "Arthur Avalon translates traditional texts into English. Western esotericists begin mapping their own psychic frameworks onto the chakras.", status: 'Interpreted' },
    { era: "Theosophy (Early 20th C)", description: "Charles Leadbeater equates Ājñā with clairvoyance and maps it physically onto the pituitary or pineal gland.", status: 'Modernized' },
    { era: "Modern 'Third Eye'", description: "The contemporary view: a glowing indigo eye that grants intuition, psychic powers, and spiritual 'visions'.", status: 'Modernized' }
  ],
  myths: [
    { claim: "Ājñā is literally the pineal gland.", nuance: "The pineal gland regulates melatonin and sleep. Equating a subtle-body energy center with a physical gland is a 20th-century Western invention, not a traditional yogic teaching.", category: 'Misleading' },
    { claim: "The third eye grants guaranteed clairvoyance.", nuance: "Traditional texts describe clarity and insight, not predicting the future or reading minds like a superpower. True clarity is knowing what you *don't* know.", category: 'Not Established' },
    { claim: "Every meditation vision is a spiritual message.", nuance: "The mind produces images constantly (vrittis). Seeing colors, faces, or shapes in meditation is common, but they are experiences, not automatically prophecies.", category: 'Not Necessarily' },
    { claim: "Purple foods open Ājñā.", nuance: "Eating blueberries will not give you psychic powers. Proper nutrition supports the brain, which supports focus, but the chakra itself is subtle.", category: 'Not Established' },
    { claim: "Head pressure proves third-eye awakening.", nuance: "Forehead tension during meditation is usually caused by unconsciously furrowing the brow or straining the eye muscles while trying to focus 'hard'.", category: 'Not Necessarily' }
  ]
};

export const useAjnaData = () => ajnaData;
