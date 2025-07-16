import { defineQuery } from 'next-sanity';
import { sanityFetch } from '../live';
import { Products } from '@/sanity.types';

export const searchProductByName = async (searchParam: string) => {
  const SEARCH_PRODUCT_BY_NAME_QUERY = defineQuery(
    `*[_type == "products" && name match $searchParam] | order(name asc)`
  );

  try {
    const products = await sanityFetch({
      query: SEARCH_PRODUCT_BY_NAME_QUERY,
      params: { searchParam: `*${searchParam}*` },
    });

    return (products.data as Products[]) || ([] as Products[]);
  } catch (error) {
    console.log('Error fetching products:', error);
  }
};
