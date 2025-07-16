import { searchProductByName } from '@/sanity/lib/products/searchProductByName';

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { query: string };
}) => {
  const { query } = await searchParams;

  const products = await searchProductByName(query);

  if (!products) return <div>Products not found</div>;

  console.log(products);

  return <div>SearchPage for {query}</div>;
};

export default SearchPage;
