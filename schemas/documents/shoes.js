export default {
  title: "Shoes",
  name: "shoes",
  type: "document",
  fields: [
    {
      title: "Product Information",
      name: "productInfo",
      type: "productInfo",
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
