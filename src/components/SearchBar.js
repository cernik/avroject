// @flow
/* eslint-disable react-native/no-inline-styles, react-hooks/exhaustive-deps */
import * as React from 'react';
import type {Node} from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Styles, {colors, MARGIN} from '../styles';

type SearchBarProps = {
  onChangeText: string => void,
  onClearSearch: () => void,
  onPress: () => void,
};
export const SearchBar = ({
  onChangeText,
  onClearSearch,
  onPress,
}: SearchBarProps): Node => {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    onChangeText(value);
  }, [value]);

  const handleChangeText = text => {
    setValue(text);
  };

  const handleClearPress = () => {
    setValue('');
  };

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: colors.border,
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          borderColor: colors.border,
          borderRadius: 16,
          marginVertical: MARGIN,
        }}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
          }}>
          <Icon name="search" color={colors.white} />
        </TouchableOpacity>
        <TextInput
          value={value}
          onSubmitEditing={onPress}
          onChangeText={handleChangeText}
          style={{
            height: 40,
            width: 260,
            textAlign: 'center',
          }}
        />
        <TouchableOpacity
          disabled={!value.length}
          onPress={handleClearPress}
          style={{justifyContent: 'center', alignItems: 'center', width: 32}}>
          {value.length ? (
            <Icon name="close-outline" size={20} color={colors.disabled} />
          ) : null}
        </TouchableOpacity>
      </View>
    </View>
  );
};
