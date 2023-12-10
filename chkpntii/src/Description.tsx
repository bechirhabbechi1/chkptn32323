import React from "react";
import { Product } from "./product";

interface DescriptionProps {
  product: Product;
}

const Description: React.FC<DescriptionProps> = ({ product }) => {
  return <p>{product.description}</p>;
};

export default Description;
