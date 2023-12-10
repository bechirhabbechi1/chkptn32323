import React from "react";
import { Product } from "./product";

interface NameProps {
  product: Product;
}

const Name: React.FC<NameProps> = ({ product }) => {
  return <h1>{product.name}</h1>;
};

export default Name;
