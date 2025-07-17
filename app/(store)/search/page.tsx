import ProductGrid from '@/components/products/ProductGrid';
import { searchProductByName } from '@/sanity/lib/products/searchProductByName';

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const { query } = await searchParams;

  const products = await searchProductByName(query);

  if (products?.length === 0 || !products)
    return (
      <div className="flex items-center justify-top min-h-screen  flex-col text-xl ">
        <h1 className="font-bold text-black mt-4 text-center">
          Oops ! Aucun produits trouvés pour : {query}
        </h1>
        <p className="text-gray-600 text-center">
          Essayez avec un autre mot-clef
        </p>
      </div>
    );

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start p-4 bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-[95rem]">
        <h1 className="font-bold text-black mt-4 text-center text-xl">
          Résultat pour : {query}
        </h1>
        <div className="w-[90%] mx-auto my-4 h-[1px] bg-gray-200" />
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default SearchPage;
