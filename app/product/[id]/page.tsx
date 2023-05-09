import ProductImage from "@/components/ProductImage";
import { Product } from "@/typing";
import React from "react";
import {notFound} from 'next/navigation'

interface Props {
  params: { id: string };
}
async function getProductById(id: string) {
  console.log({ id });
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const prodcut: Product = await res.json();
  return prodcut;
}
async function ProductDetail({ params: { id } }: Props) {
    try {
        const product = await getProductById(id);
        return (
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
              <ProductImage url={product.image} />
        
              <div className="divide-y">
                <div className="space-y-2 pb-8">
                  <h1 className="text-2xl md:text-3xl font-bold">{product?.title}</h1>
                  <h1 className="md:text-2xl text-gray-600 font-semibold">
                    ${product?.price}
                  </h1>
                </div>
                <div>
                  <p className="text-xs md:text-sm ">{product.description}</p>
                </div>
              </div>
            </div>
          );
        
    } catch (error) {
       notFound()
    }
  

 
}

export default ProductDetail;
