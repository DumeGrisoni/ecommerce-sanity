import { BasketIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const orderType = defineType({
  name: 'order',
  title: 'Commandes',
  type: 'document',
  icon: BasketIcon,
  fields: [
    defineField({
      name: 'orderNumber',
      title: 'Order Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stripeCheckoutSessionId',
      title: 'Stripe Checkout Session ID',
      type: 'string',
    }),
    defineField({
      name: 'stripeCustomerId',
      title: 'Stripe Customer ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clerkUserId',
      title: 'Clerk User ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Customer Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'stripePaymentIntentId',
      title: 'Stripe Payment Intent ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [{ type: 'products' }],
            }),
            defineField({
              name: 'quantity',
              title: 'Quantity Purchased',
              type: 'number',
            }),
          ],
          preview: {
            select: {
              product: 'product.name',
              quantity: 'quantity',
              media: 'product.image',
              price: 'product.price',
            },
            prepare(selection) {
              const { product, quantity, media, price } = selection;
              return {
                title: `${product} x (${quantity})`,
                subtitle: `${price * quantity} €`,
                media: media,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'En attente', value: 'pending' },
          { title: 'En cours', value: 'processing' },
          { title: 'Envoyée', value: 'shipped' },
          { title: 'Livrée', value: 'delivered' },
          { title: 'Annulée', value: 'cancelled' },
        ],
      },
    }),
    defineField({
      name: 'amoutDiscount',
      title: 'Amount Discount',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'customerName',
      amount: 'totalPrice',
      currency: 'currency',
      orderId: 'orderNumber',
      email: 'email',
    },
    prepare(selection) {
      const { name, amount, currency, orderId, email } = selection;
      const orderIdSnippet = `${orderId.slice(0, 5)}...${orderId.slice(-5)}`;
      return {
        title: `${name}-(${orderIdSnippet})`,
        subtitle: `${amount} ${currency} - ${email}`,
        media: BasketIcon,
      };
    },
  },
});
