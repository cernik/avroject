// @flow
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  resources: {
    en: {
      navigation: {
        Cart: 'Cart',
        Favorites: 'Favorites',
        Profile: 'Profile',
        Home: 'Home',
        Categories: 'Categories',
      },
      cta: {
        addToCart: 'Add to cart',
      },
    },
    he: {
      navigation: {
        Cart: 'עגלה',
        Favorites: 'מעודפים',
        Profile: 'פרופיל',
        Home: 'בית',
        Categories: 'קטגוריות',
      },
      cta: {
        addToCart: 'להוסיף לעגלה',
      },
    },
  },
});

export default i18n;
