import { useTranslation } from 'react-i18next';

export const useSvadhisthanaData = () => {
  const { t } = useTranslation();
  const data = t('svadhisthana', { returnObjects: true }) as any;
  if (data && data.mandala) {
    if (!data.mandala.petalSyllables) {
      data.mandala.petalSyllables = [
        { sanskrit: "बं", transliteration: "baṃ" },
        { sanskrit: "भं", transliteration: "bhaṃ" },
        { sanskrit: "मं", transliteration: "maṃ" },
        { sanskrit: "यं", transliteration: "yaṃ" },
        { sanskrit: "रं", transliteration: "raṃ" },
        { sanskrit: "लं", transliteration: "laṃ" }
      ];
    }
    if (!data.mandala.bija) {
      data.mandala.bija = {
        sanskrit: "वं",
        transliteration: "VAṂ"
      };
    }
  }
  return data;
};
