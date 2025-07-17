import { defineQuery } from 'next-sanity';
import { sanityFetch } from '../live';
import { Products } from '@/sanity.types';

export const getProductBySlug = async (slug: string) => {
  const GET_PRODUCT_BY_SLUG_QUERY = defineQuery(
    `*[_type == "products" && slug.current == $slug] | order(name asc) [0]`
  );

  try {
    const product = await sanityFetch({
      query: GET_PRODUCT_BY_SLUG_QUERY,
      params: { slug },
    });

    return (product.data as Products) || null;
  } catch (error) {
    console.log('Error fetching products:', error);
  }
};
