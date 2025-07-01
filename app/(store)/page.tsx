import ProductView from '@/components/products/ProductView';
import { getAllCategories } from '@/sanity/lib/categories/getAllCategories';
import { getAllProducts } from '@/sanity/lib/products/getAllProducts';

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  if (!products || !categories)
    return <div>Aucun produits ou categories trouvées</div>;

  return (
    <div className="min-h-screen ">
      <div className="flex flex-col items-center justify-start min-h-screen  p-4">
        <ProductView products={products} categories={categories} />
      </div>
    </div>
  );
}
