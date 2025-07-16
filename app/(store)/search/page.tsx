import { searchProductByName } from '@/sanity/lib/products/searchProductByName';

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { query: string };
}) => {
  const { query } = await searchParams;

  const products = await searchProductByName(query);

  if (products?.length === 0)
    return (
      <div className="flex items-center justify-center text-xl font-bold text-black mt-4">
        Oops ! Aucun produits trouvés
      </div>
    );

  return <div>SearchPage for {query}</div>;
};

export default SearchPage;
