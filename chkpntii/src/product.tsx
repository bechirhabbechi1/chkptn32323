export interface Product {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const product: Product = {
  name: "Product Name",
  price: 19.99,
  description: "This is an example product description.",
  imageUrl: "https://example.com/product-image.jpg",
};

export default product;
