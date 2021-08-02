// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import type {Node} from 'react';
import {Text, View, FlatList} from 'react-native';

import Styles, {MARGIN} from '../styles';
import * as api from '../api';
import {LoadingView, ProductItem, SearchBar} from '../components';

type Props = {
  navigation: {
    replace: string => void,
  },
};
const CategoriesScreen = (props: Props): Node => {
  const [data, setData] = React.useState([]);
  const [nextPage, setNextPage] = React.useState(1);
  const [searchText, setSearchText] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const loadData = async () => {
    setIsLoading(true);
    const response = await api.loadProducts(searchText);
    if (response && response.products && response.products.length) {
      console.log('loaded: ', response.products.length);
      setData(response.products);
      setNextPage(response.meta.next_page);
    } else {
      setData([]);
    }
    setIsLoading(false);
  };

  const loadMore = async () => {
    if (nextPage) {
      const response = await api.loadProducts(searchText, nextPage);
      if (response && response.products && response.products.length) {
        console.log('loaded more: ', response.products.length);
        setData([...data, ...response.products]);
        setNextPage(response.meta.next_page);
      }
    } else {
      console.log('no more to load');
    }
  };

  React.useEffect(() => {
    loadData();
  }, []);

  const handleSearchPress = () => {
    loadData();
  };

  const handleItemPress = React.useCallback(item => {
    __DEV__ && console.log('item id pressed', item.id);
  }, []);

  const renderItem = ({item}) => (
    <ProductItem item={item} onPress={handleItemPress} />
  );

  return (
    <>
      <SearchBar
        onPress={handleSearchPress}
        onClearSearch={handleSearchPress}
        onChangeText={setSearchText}
      />
      <View style={Styles.flex1}>
        {isLoading ? <LoadingView /> : null}
        <FlatList
          data={data}
          style={{marginHorizontal: MARGIN}}
          renderItem={renderItem}
          keyExtractor={item => String(item.id)}
          onEndReached={loadMore}
          onRefresh={loadData}
          refreshing={isLoading}
        />
      </View>
    </>
  );
};

export default CategoriesScreen;
