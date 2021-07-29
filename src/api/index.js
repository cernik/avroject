// @flow
import type {Product, Meta} from '../types';
import {HOST_URL, HEADERS} from '../constants';

export function loadProducts(
  search = '',
  page = 1,
  limit = 50,
): Promise<{product: Array<Product>, meta: Meta}> {
  try {
    const url = `${HOST_URL}products/search?by_company_id=129&mode=suggest&page=${page}&per_page=${limit}&query=${search}`;
    __DEV__ && console.log('url', url);
    return fetch(url, {
      headers: HEADERS,
    }).then(r => r.json());
  } catch (e) {
    return {
      products: [],
    };
  }
}
