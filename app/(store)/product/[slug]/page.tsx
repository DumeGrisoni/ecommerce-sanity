import { notFound } from 'next/navigation';
import { PortableText } from 'next-sanity';
import React from 'react';

import { getProductBySlug } from '@/sanity/lib/products/getProductBySlug';
import ProductImageSelector from '@/components/products/ProductImageSelector';

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const param = await params;

  const product = await getProductBySlug(param.slug);

  if (!product) return notFound();

  const isOutOfStock =
    product.variants &&
    product.variants.every((variant) => variant.stock === 0);

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductImageSelector product={product} isOutOfStock={isOutOfStock} />

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-xl text-center sm:text-start sm:text-3xl font-bold mb-4">
              {product.name}
            </h1>
            <div className="text-lg text-center sm:text-start sm:text-xl font-semibold mb-4">
              {product.price?.toFixed(2)} €
            </div>
            <div className="prose max-w-none mb-6 text-base text-justify sm:text-lg sm:text-balance">
              {Array.isArray(product.description) && (
                <PortableText value={product.description} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
