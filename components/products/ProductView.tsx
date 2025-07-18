import { Category, Products } from '@/sanity.types';
import React from 'react';
import ProductGrid from './ProductGrid';

type ProductViewProps = {
  products: Products[];
  categories: Category[];
};

const ProductView = ({ products }: ProductViewProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-full sm:w-[200px]">
        {/* CATEGORIES */}
        {/* <CategorySelectorComponent categories={categories} /> */}
      </div>

      {/* PRODUCTS */}
      <div className="flex-1">
        <div>
          <ProductGrid products={products} />
          <hr className="w-1/2 sm:w-3/4 my-4" />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
