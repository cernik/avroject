// @flow
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import type {Node} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import Styles, {colors} from '../styles';

export const LoadingView = (): Node => (
  <View
    style={[
      StyleSheet.absoluteFill,
      Styles.container,
      {
        backgroundColor: 'rgba(0,0,0,.4)',
        zIndex: 1,
      },
    ]}>
    <ActivityIndicator color={colors.primary} size="large" />
  </View>
);
