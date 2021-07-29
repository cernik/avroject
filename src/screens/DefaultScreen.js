// @flow
import React from 'react';
import {View, Text} from 'react-native';
import type {Node} from 'react';

import Styles from '../styles';

type Props = {
  route: {
    name: string,
  },
};
const DefaultScreen = (props: Props): Node => {
  const {name} = props.route;
  return (
    <View style={Styles.container}>
      <Text>{`${name} Screen`}</Text>
    </View>
  );
};

export default DefaultScreen;
