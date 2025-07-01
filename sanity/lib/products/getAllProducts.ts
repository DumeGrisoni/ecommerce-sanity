import { defineQuery } from 'next-sanity';
import { sanityFetch } from '../live';
import { Products } from '@/sanity.types';

export const getAllProducts = async () => {
  const ALL_PRODUCTS_QUERY = defineQuery(
    `*[_type == "products"] | order(name asc)`
  );
  try {
    const products = await sanityFetch({
      query: ALL_PRODUCTS_QUERY,
    });

    return (products.data as Products[]) || ([] as Products[]);
  } catch (error) {
    console.log('Error fetching products:', error);
  }
};
