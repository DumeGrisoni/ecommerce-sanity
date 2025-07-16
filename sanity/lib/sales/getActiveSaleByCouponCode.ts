import { defineQuery } from 'next-sanity';
import { CouponCode } from './couponCodes';
import { sanityFetch } from '../live';

export const getActiveSaleByCouponCode = async (couponCode: CouponCode) => {
  const ACTIVE_SALE_BY_COUPON_CODE = defineQuery(
    `*[_type == "sale" && isActive == true && couponCode == $couponCode] | order(validForm desc)[0]`
  );

  try {
    const activeSale = await sanityFetch({
      query: ACTIVE_SALE_BY_COUPON_CODE,
      params: { couponCode },
    });

    return activeSale ? activeSale.data : null;
  } catch (error) {
    console.log(
      'Une erreur est survenue lors de la recupération du coupon:',
      error
    );
  }
};

export default getActiveSaleByCouponCode;
