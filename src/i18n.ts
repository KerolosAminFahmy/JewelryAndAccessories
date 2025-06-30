import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to Vite + React!",
      "counter": "count is {{count}}",
      "edit": "Edit <1>src/App.tsx</1> and save to test HMR",
      "learn": "Click on the Vite and React logos to learn more",
      "toggle_theme": "Toggle Theme",
      "change_language": "Change Language",
      "nav": {
        "home": "Home",
        "shop": "Shop",
        "about": "About",
        "contact": "Contact",
        "language": "Language",
        "theme": "Theme"
      },
      slider: {
        jewelry: 'Elegant Jewelry for Every Occasion',
        accessories: 'Stunning Accessories to Complete Your Look',
        unique: 'Unique Pieces, Unforgettable Moments',
        prev: 'Previous slide',
        next: 'Next slide',
        goto: 'Go to slide {{num}}',
      },
    }
  },
  ar: {
    translation: {
      "welcome": "مرحبًا بك في Vite + React!",
      "counter": "العدد هو {{count}}",
      "edit": "حرر <1>src/App.tsx</1> واحفظ لاختبار HMR",
      "learn": "انقر على شعاري Vite و React لمعرفة المزيد",
      "toggle_theme": "تبديل النمط",
      "change_language": "تغيير اللغة",
      "nav": {
        "home": "الرئيسية",
        "shop": "المتجر",
        "about": "حول",
        "contact": "اتصل",
        "language": "اللغة",
        "theme": "النمط"
      },
      slider: {
        jewelry: 'مجوهرات أنيقة لكل مناسبة',
        accessories: 'إكسسوارات رائعة تكمل إطلالتك',
        unique: 'قطع فريدة، لحظات لا تُنسى',
        prev: 'الشريحة السابقة',
        next: 'الشريحة التالية',
        goto: 'اذهب إلى الشريحة {{num}}',
      },
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 