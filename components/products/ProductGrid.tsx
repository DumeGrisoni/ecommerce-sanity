'use client';
import React from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { Products } from '@/sanity.types';
import ProductThumbnail from './ProductThumbnail';

const ProductGrid = ({ products }: { products: Products[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-4 gap-4 mt-4">
      {products.map((product) => {
        return (
          <AnimatePresence key={product._id}>
            <motion.div
              layout
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center"
            >
              <ProductThumbnail key={product._id} product={product} />
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
};

export default ProductGrid;
