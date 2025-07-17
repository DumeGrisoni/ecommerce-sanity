import getActiveSaleByCouponCode from '@/sanity/lib/sales/getActiveSaleByCouponCode';
import React from 'react';

const BlackFridayBanner = async () => {
  const sale = await getActiveSaleByCouponCode('BFNOVA25');

  if (!sale?.isActive) return null;

  return (
    <div className=" bg-gradient-to-r from-nova to-nova-hover text-white px-6 mx-8 py-4 sm:py-8 md:py-10 mt-2 rounded-lg shadow-md">
      <h2 className=" text-lg text-center  sm:text-2xl font-bold mb-2 flex-1">
        {sale.title}
      </h2>
      <p className="text-sm text-center sm:text-lg mb-4">{sale.description}</p>
      <div className="bg-white cursor-pointer text-black text-center mx-auto md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] py-4 px-6 rounded-full shadow-md transform hover:scale-105 transition-all duration-300">
        <span className="font-bold text-xs sm:text-lg">
          Code Promo : <span className="text-red-600">{sale.couponCode}</span>
        </span>
        <span className="ml-2 font-bold text-xs sm:text-lg">
          jusqu&apos;à {sale.discountAmount}% de réduction
        </span>
      </div>
    </div>
  );
};

export default BlackFridayBanner;
