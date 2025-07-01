import { TagIcon } from '@sanity/icons';
import { defineType, defineField } from 'sanity';

export const saleType = defineType({
  name: 'sale',
  title: 'Réductions',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la réduction',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description de la réduction',
      type: 'text',
    }),
    defineField({
      name: 'discountAmount',
      title: 'Montant de la réduction',
      type: 'number',
      description: 'Montant de la déduction en pourcentage ou fixe',
    }),
    defineField({
      name: 'couponCode',
      title: 'Code Coupon',
      type: 'string',
    }),
    defineField({
      name: 'validFrom',
      title: 'Valide à partir du',
      type: 'datetime',
    }),
    defineField({
      name: 'validUntil',
      title: "Valide jusqu'au",
      type: 'datetime',
    }),
    defineField({
      name: 'isActive',
      title: 'Est Actif ?',
      type: 'boolean',
      description: 'Active ou non la réduction',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      discountAmount: 'discountAmount',
      couponCode: 'couponCode',
      isActive: 'isActive',
    },
    prepare(select) {
      const { title, discountAmount, couponCode, isActive } = select;
      const status = isActive ? 'Actif' : 'Inactif';
      return {
        title: title,
        subtitle: `${discountAmount}% - Code: ${couponCode} - ${status}`,
      };
    },
  },
});
