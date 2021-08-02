// @flow
import * as React from 'react';
import type {Node} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';

import Styles, {colors} from '../styles';
import type {Product} from '../types';

export const ProductItem = ({
  item,
  onPress,
}: {
  item: Product,
  onPress: Product => void,
}): Node => {
  const i18n = useTranslation();

  const handlePress = () => {
    onPress(item);
  };

  return (
    <View style={Styles.rowItem}>
      <Image style={Styles.image} source={{uri: item.image_url}} />
      <View style={Styles.descriptionContainer}>
        <Text style={Styles.text}>{item.name}</Text>
        <Text style={Styles.text}>{item.unit}</Text>
        <View style={Styles.priceContainer}>
          <View>
            {item.sale_price ? (
              <Text style={Styles.text}>{item.sale_price}</Text>
            ) : null}
            <Text
              style={[
                Styles.text,
                item.sale_price ? Styles.textDisabled : null,
              ]}>
              {item.price}
            </Text>
          </View>
          <TouchableOpacity onPress={handlePress} style={Styles.cartButton}>
            <Icon name="cart-outline" size={20} color={colors.white} />
            <Text style={Styles.cartButtonText}>{i18n.t('cta:addToCart')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
