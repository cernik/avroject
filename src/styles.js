// @flow
import {StyleSheet} from 'react-native';

export const MARGIN = 8;
export const PADDING = 4;

export const colors = {
  primary: '#0e4c32',
  disabled: '#696969',
  border: '#a3a3a3',
  white: '#fff',
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingView: {
    backgroundColor: 'rgba(0,0,0,.4)',
    zIndex: 1,
  },
  logo: {
    width: 100,
    height: 28,
  },
  row: {
    flexDirection: 'row-reverse',
  },
  rowItem: {
    flexDirection: 'row-reverse',
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingVertical: PADDING,
  },
  image: {
    height: 100,
    width: 100,
  },
  descriptionContainer: {
    flex: 1,
    padding: PADDING,
  },
  text: {
    textAlign: 'right',
  },
  textDisabled: {
    color: colors.disabled,
    textDecorationLine: 'line-through',
  },
  priceContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    flex: 1,
  },
  cartButton: {
    height: 32,
    width: 160,
    margin: MARGIN,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato',
    borderRadius: 4,
  },
  cartButtonText: {
    color: 'white',
    marginHorizontal: MARGIN,
  },
  headerLeft: {
    marginStart: 18,
  },
  flag: {
    fontSize: 32,
  },
});

export default styles;
