import { useEffect, useState } from 'react';

export type Language = 'en' | 'ar';

export const DEFAULT_LANGUAGE: Language = 'en';
export const SUPPORTED_LANGUAGES: readonly Language[] = ['en', 'ar'];
export const LANGUAGE_STORAGE_KEY = 'invictus-manager-language';
const LANGUAGE_CHANGE_EVENT = 'invictus-manager-language-change';

export type TranslationKey = string;
export type TranslationDictionary = Record<TranslationKey, string>;
export type TranslationResources = Record<Language, TranslationDictionary>;

export const isSupportedLanguage = (value: string | null): value is Language =>
  value !== null && SUPPORTED_LANGUAGES.includes(value as Language);

export const getStoredLanguage = (): Language => {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return isSupportedLanguage(storedLanguage) ? storedLanguage : DEFAULT_LANGUAGE;
};

export const storeLanguage = (language: Language): void => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  window.dispatchEvent(new CustomEvent<Language>(LANGUAGE_CHANGE_EVENT, { detail: language }));
};

export const getLanguageDirection = (language: Language): 'ltr' | 'rtl' =>
  language === 'ar' ? 'rtl' : 'ltr';

export const formatNumber = (value: number, language: Language): string =>
  new Intl.NumberFormat(language === 'ar' ? 'ar' : 'en', {
    numberingSystem: 'latn',
  }).format(value);

export const formatDate = (value: string | Date, language: Language): string =>
  new Intl.DateTimeFormat(language === 'ar' ? 'ar' : 'en', {
    numberingSystem: 'latn',
    dateStyle: 'medium',
  }).format(new Date(value));

export const createTranslator = (resources: TranslationResources, language: Language) =>
  (key: TranslationKey): string =>
    resources[language][key] ?? resources[DEFAULT_LANGUAGE][key] ?? key;

export const useTranslation = (resources: TranslationResources) => {
  const [language, setLanguageState] = useState<Language>(getStoredLanguage);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleLanguageChange = (event: Event) => {
      const nextLanguage = (event as CustomEvent<Language>).detail;
      if (isSupportedLanguage(nextLanguage)) setLanguageState(nextLanguage);
    };
    window.addEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);
    return () => window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange);
  });

  const setLanguage = (nextLanguage: Language) => {
    storeLanguage(nextLanguage);
    setLanguageState(nextLanguage);
  };

  return {
    language,
    setLanguage,
    direction: getLanguageDirection(language),
    t: createTranslator(resources, language),
  };
};
