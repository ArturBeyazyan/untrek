import  useLocalStorage  from './LocalStorage';
import  en_translation_raw from '../i18n/locales/en/translations.json'
import  ru_translation_raw from '../i18n/locales/ru/translations.json'
import  am_translation_raw from '../i18n/locales/hy/translations.json'
interface TranslationMessages {
  [key: string]: string;
}
interface UseTranslationResult {
  t: (key: string) => string;
  changeLanguage: (lng: string) => void;
  locale: string;
}
const en_translation = en_translation_raw as TranslationMessages;
const ru_translation = ru_translation_raw as TranslationMessages;
const am_translation = am_translation_raw as TranslationMessages;

const messages: { [locale: string]: TranslationMessages } = {
  en: en_translation,
  ru: ru_translation,
  hy: am_translation,
};
export const useTranslation = (): UseTranslationResult => {
  const [locale, setLocale] = useLocalStorage<string>({
    key: 'localeLanguage',
    initialValue: 'en',
  });
  const t = (key: string): string => {
    return messages[locale]?.[key] || key;
  };
  const changeLanguage = (lng: string) => {
    setLocale(lng);
  };
  return { t, changeLanguage, locale };
};
