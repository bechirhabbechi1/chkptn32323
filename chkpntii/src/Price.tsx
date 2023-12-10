import React from "react";
import { Product } from "./product";

interface PriceProps {
  product: Product;
}

const Price: React.FC<PriceProps> = ({ product }) => {
  return <p>Price: ${product.price}</p>;
};

export default Price;
