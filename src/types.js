// @flow
export type Product = {
  id: number,
  sku: string,
  name: string,
  brand: string,
  image_url: string,
  price: number,
  sale_price: number,
  tax_rate: number,
  virtual_price: number,
  unit: string,
  sorting_priority: number,
  out_of_stock: boolean,
  active_in_store: boolean,
  description: string,
  quantity_limit_per_order: any,
  featured: boolean,
  labels: Array<{type: string, text: string}>,
};
export type Meta = {
  current_page: number,
  next_page: number,
  per_page: number,
  prev_page: number,
  total_pages: number,
  total_count: number,
};
