// @flow
import * as React from 'react';
import type {Node} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import Styles, {colors} from '../styles';

export const LoadingView = (): Node => (
  <View style={[StyleSheet.absoluteFill, Styles.container, Styles.loadingView]}>
    <ActivityIndicator color={colors.primary} size="large" />
  </View>
);
