import { imageUrl } from '@/lib/imageUrl';
import { Products } from '@/sanity.types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductThumbnail = ({ product }: { product: Products }) => {
  const isOutOfStock =
    product.variants &&
    product.variants.every((variant) => variant.stock === 0);

  return (
    <Link
      href={`/product/${product.slug?.current}`}
      className={`group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md trasition-all duration-200 overflow-hidden ${isOutOfStock ? 'opacity-50' : ''}`}
    >
      <div className="relative aspect-square w-full h-full overflow-hidden">
        {product.image && (
          <Image
            src={imageUrl(product.image).url()}
            alt={product.name || 'Image du produit'}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#00000050]">
            <span className="text-white font-bold text-lg">Stock épuisé</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h2>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {product.description
            ?.map((block) =>
              block._type === 'block'
                ? block.children?.map((child) => child.text).join('')
                : ''
            )
            .join('') || 'Description non disponible'}
        </p>
        <p className="lt-2 text-lg font-bold text-gray-900">
          {product.price?.toFixed(2)}€
        </p>
      </div>
    </Link>
  );
};

export default ProductThumbnail;
