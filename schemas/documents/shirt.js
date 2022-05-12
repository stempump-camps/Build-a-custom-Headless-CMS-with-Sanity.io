export default {
  title: "Shirt",
  name: "shirt",
  type: "document",
  fields: [
    {
      title: "Product Information",
      name: "productInfo",
      type: "productInfo",
    },
    {
      title: "Shirt Type",
      description: "The type of the shirt",
      name: "shirtType",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "Short sleeved",
            value: "shortSleeved",
          },
          {
            title: "Long sleeved",
            value: "longSleeved",
          },
          {
            title: "No sleeved",
            value: "noSleeved",
          },
        ],
      },
    },
    {
      title: "Similar Shirts",
      name: "similarShirts",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "shirt",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "productInfo.name",
      media: "productInfo.image",
      subtitle: "productInfo.price",
    },
  },
};
