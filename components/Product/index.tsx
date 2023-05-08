import { Product as ProdcutType } from "@/typing";
import React from "react";
import ProductImage from "../ProductImage";
import Link from "next/link";
interface Props {
  product: ProdcutType;
}
function Product({ product }: Props) {
  const { id, title, description, price, rating, image } = product;
  return (
    <Link
      className="h-96  m-5 w-55 flex flex-col p-5 rounded  border group hover:scale-105 transition-transform ease-out duration-75"
      href={`/product/${product.id}`}
      prefetch={false}
    >
      <div className="relative max-h-72 flex-1">
        <ProductImage url={product.image} fill={true} />
      </div>
      <div className="font-semibold flex items-center justify-between  mt-4 mb-1">
        <p className="text-lg w-44 truncate text-gray-200 ">{title}</p>
        <p className="text-sm w-44 truncate text-gray-20">${price}</p>
      </div>
      <p className="w-44 line-clamp-3  text-xs text-gray-600">{description}</p>
    </Link>
  );
}

export default Product;
