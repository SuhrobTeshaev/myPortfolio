// module.exports = {
//   locales: ['ru', 'en'],
//   defaultLocale: 'ru',
//   pages: {
//     '*': ['posts', 'header', 'footer'],
//     '/': ['home'],
//   }
// }

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Загружает переводы через HTTP
  .use(LanguageDetector) // Автоматически определяет язык пользователя
  .use(initReactI18next) // Привязывает i18next к React
  .init({
    fallbackLng: 'ru', 
    // lng: 'ru', // 'ru' | 'en',
    debug: true,
     resources: {
      ru: {
        translation: {
          home: { label: 'Главная', },
          projects: { label: 'Проекты', },
          contact: { label: 'Контакты', },
          location: { label: 'Местоположение', },
          tjk: { label: 'Таджикистан', },
          dshb:{ label: 'Душанбе', },
        },
      },
      en: {
        translation: {
          home: { label: 'Home', },
          projects: { label: 'Projects', },
          contact: { label: 'Contacts', },
          location: { label: 'Location', },
          tjk: { label: 'Tajikistan', },
          dshb:{ label: 'Dushanbe', },

        },
      },
    },
    interpolation: {
      escapeValue: false, // Не экранирует значения
    }
  });

export default i18n;
