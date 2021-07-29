// @flow
import * as React from 'react';
import type {Node} from 'react';
import {View, ActivityIndicator} from 'react-native';

import Styles, {colors} from '../styles';

type Props = {
  navigation: {
    replace: string => void,
  },
};

const SplashScreen = (props: Props): Node => {
  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Root');
    }, 2000);
  });

  return (
    <View style={Styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default SplashScreen;
