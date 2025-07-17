'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import { Products } from '@/sanity.types';
import { imageUrl } from '@/lib/imageUrl';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const ProductImageSelector = ({
  product,
  isOutOfStock,
}: {
  product: Products;
  isOutOfStock: boolean | undefined;
}) => {
  const [selectedImage, setSelectedImage] = useState<SanityImageSource | null>(
    null
  );

  const handleImageClick = (image: SanityImageSource) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    if (product.image) {
      setSelectedImage(product.image);
    }
  }, [product.image]);

  console.log(selectedImage);

  return (
    <div
      className={`relative flex flex-row md:flex-col justify-start items-center sm:items-start gap-4 ${isOutOfStock ? 'opacity-50' : ''}`}
    >
      {selectedImage && (
        <Image
          src={imageUrl(selectedImage!).url()}
          alt={product.name || 'Image du produit'}
          width={600}
          height={600}
          className="object-contain transition-transform duration-300 group-hover:scale-105 rounded-md"
        />
      )}
      {product.image && product.secondImage && (
        <div className="flex flex-col md:flex-row md:gap-6 gap-2">
          <Image
            src={imageUrl(product.image!).url()}
            alt="Image 1"
            width={150}
            height={150}
            onClick={() => handleImageClick(product.image!)}
            className={`object-contain transition-transform duration-300 hover:scale-105 cursor-pointer ${selectedImage === product.image ? 'border border-nova p-1 rounded-md' : ''}`}
          />
          <Image
            src={imageUrl(product.secondImage!).url()}
            alt="Image 1"
            width={150}
            height={150}
            onClick={() => handleImageClick(product.secondImage!)}
            className={`object-contain transition-transform duration-300 hover:scale-105 cursor-pointer ${selectedImage === product.secondImage ? 'border border-nova p-1 rounded-md' : ''}`}
          />
          {/* Ajoutez d'autres images ici */}
        </div>
      )}

      {isOutOfStock && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#00000050]">
          <span className="text-white font-bold text-lg">Stock épuisé</span>
        </div>
      )}
    </div>
  );
};

export default ProductImageSelector;
