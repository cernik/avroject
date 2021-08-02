// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {ActionSheetIOS, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';

import Styles from '../styles';

function getFlag(lang = 'en') {
  if (lang === 'he') {
    return '🇮🇱';
  }

  return '🇬🇧';
}

export const LanguageButton = () => {
  const {i18n} = useTranslation();

  const handlePress = React.useCallback(() => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Hebrew', 'English'],
        cancelButtonIndex: 0,
        message: 'Please choose language',
      },
      buttonIndex => {
        if (buttonIndex === 1) {
          i18n.changeLanguage('he');
        } else if (buttonIndex === 2) {
          i18n.changeLanguage('en');
        }
      },
    );
  }, []);

  return (
    <TouchableOpacity style={Styles.headerLeft} onPress={handlePress}>
      <Text style={Styles.flag}>{getFlag(i18n.language)}</Text>
    </TouchableOpacity>
  );
};
