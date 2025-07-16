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
      name: 'genre',
      title: 'Genre',
      type: 'string',
      options: {
        list: [
          { title: 'Homme', value: 'homme' },
          { title: 'Femme', value: 'femme' },
          { title: 'Enfant', value: 'enfant' },
          { title: 'Unisex', value: 'unisex' },
        ],
      },
      validation: (Rule) => Rule.required(),
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
                  { title: '32', value: '32' },
                  { title: '33', value: '33' },
                  { title: '34', value: '34' },
                  { title: '35', value: '35' },
                  { title: '36', value: '36' },
                  { title: '37', value: '37' },
                  { title: '38', value: '38' },
                  { title: '39', value: '39' },
                  { title: '40', value: '40' },
                  { title: '41', value: '41' },
                  { title: '42', value: '42' },
                  { title: '43', value: '43' },
                  { title: '44', value: '44' },
                  { title: '45', value: '45' },
                  { title: '4 ans', value: '4 ans' },
                  { title: '6 ans', value: '6 ans' },
                  { title: '8 ans', value: '8 ans' },
                  { title: '10 ans', value: '10 ans' },
                  { title: '12 ans', value: '12 ans' },
                  { title: '14 ans', value: '14 ans' },
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
