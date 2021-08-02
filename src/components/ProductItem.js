// @flow
import * as React from 'react';
import type {Node} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';

import Styles, {colors} from '../styles';
import type {Product} from '../types';

const ButtonContent = ({disabled}) => {
  const i18n = useTranslation();
  return (
    <>
      {disabled ? null : (
        <Icon name="cart-outline" size={20} color={colors.white} />
      )}
      <Text
        style={[
          Styles.cartButtonText,
          disabled && Styles.cartButtonTextDisabled,
        ]}>
        {disabled ? i18n.t('cta:outOfStock') : i18n.t('cta:addToCart')}
      </Text>
    </>
  );
};

export const ProductItem = ({
  item,
  onPress,
}: {
  item: Product,
  onPress: Product => void,
}): Node => {
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
          <TouchableOpacity
            disabled={item.out_of_stock}
            onPress={handlePress}
            style={[
              Styles.cartButton,
              item.out_of_stock && Styles.cartButtonDisabled,
            ]}>
            <ButtonContent disabled={item.out_of_stock} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
