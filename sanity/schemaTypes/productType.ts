import { TrolleyIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const productType = defineType({
  name: 'products',
  title: 'Produits',
  type: 'document',
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Nom du Produit',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image du Produit',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'secondImage',
      title: 'Seconde Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Prix',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'variant',
          title: 'Variant',
          fields: [
            defineField({
              // ✅ Ajout de defineField
              name: 'size',
              title: 'Taille',
              type: 'string',
              options: {
                list: [
                  { title: 'XS', value: 'xs' },
                  { title: 'S', value: 's' },
                  { title: 'M', value: 'm' },
                  { title: 'L', value: 'l' },
                  { title: 'XL', value: 'xl' },
                  { title: 'XXL', value: 'xxl' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              // ✅ Ajout de defineField
              name: 'color',
              title: 'Couleur',
              type: 'string',
              options: {
                list: [
                  { title: 'Noir', value: 'black' },
                  { title: 'Blanc', value: 'white' },
                  { title: 'Rouge', value: 'red' },
                  { title: 'Bleu', value: 'blue' },
                  { title: 'Vert', value: 'green' },
                  { title: 'Gris', value: 'gray' },
                  { title: 'Marine', value: 'navy' },
                  { title: 'Beige', value: 'beige' },
                  { title: 'Jaune', value: 'yellow' },
                  { title: 'Orange', value: 'orange' },
                  { title: 'Rose', value: 'pink' },
                  { title: 'Violet', value: 'purple' },
                  { title: 'Marron', value: 'brown' },
                  { title: 'Kaki', value: 'kaki' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              // ✅ Ajout de defineField
              name: 'stock',
              title: 'Stock',
              type: 'number',
              initialValue: 0,
              validation: (Rule) => Rule.required().min(0),
            }),
            defineField({
              // ✅ Ajout de defineField
              name: 'isActive',
              title: 'En ligne ?',
              type: 'boolean',
              description: 'Variant disponible à la vente',
              initialValue: true,
            }),
          ],
          preview: {
            select: {
              size: 'size',
              color: 'color',
              stock: 'stock',
              isActive: 'isActive',
              hex: 'colorHex',
            },
            prepare({ size, color, stock, isActive }) {
              return {
                title: `${size?.toUpperCase()} - ${color}`,
                subtitle: `Stock: ${stock} | ${!isActive ? '(Inactif)' : '(en ligne)'}`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).error('Au moins un variant est requis'),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      price: 'price',
    },
    prepare(select) {
      return {
        title: select.title,
        subtitle: `${select.price} €`,
        media: select.media,
      };
    },
  },
});
