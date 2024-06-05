import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import hiTranslation from './locales/hi/translation.json';
import odTranslation from './locales/od/translation.json';
import maTranslation from './locales/ma/translation.json';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      hi: {
        translation: hiTranslation,
      },
      od: {
        translation: odTranslation,
      },
      ma: {
        translation: maTranslation,
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if current language translation is missing
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
