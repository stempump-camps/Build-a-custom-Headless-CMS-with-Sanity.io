export default {
  title: "Product Info",
  name: "productInfo",
  type: "object",
  fields: [
    {
      title: "Is this product in stock?",
      name: "inStock",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Product Name",
      description: "The name of the product",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(50),
    },
    {
      title: "Product Image",
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Product Price",
      name: "price",
      type: "number",
      validation: (Rule) =>
        Rule.required().positive().greaterThan(0).precision(2),
    },
    {
      title: "Product Description",
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
