"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useParams} from "next/navigation";
import { Product } from "@/typing";
import ProductImage from "@/components/ProductImage";
function ProductDetailModal() {
  const params = useParams();
  const id = params.id;

  let [isOpen, setIsOpen] = useState(true);
  let [product, setProduct] = useState<Product>() || null;

  useEffect(() => {
    getProductById(id);
  }, [id]);

  async function getProductById(id: string) {
    console.log({ id });
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const prodcut: Product = await res.json();
    setProduct(prodcut);
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-10">
          <div className="flex gap-x-8 h-96">
            {product?.image && (
              <div className="relative w-72 h-full hidden md:inline">
                <ProductImage url={product?.image} fill />
              </div>
            )}
            <div className="flex-1 flex flex-col ">
              <div className="flex-1">
                <h4 className="font-semibold ">{product?.title}</h4>
                <p className="font-semibold text-sm">$ {product?.price}</p>

                {product?.rating?.rate && (
                  <div className="text-sm items-center ml-2 mr-8 mt-2 ">
                    <p className="">Ratings: {product?.rating.rate}</p>
                  </div>
                )}
                <div>
                  <p className="text-gray-800 text-sm mt-4">
                    {product?.description}
                  </p>
                </div>
                <div className="space-y-3 text-sm mt-20">
                  <button className="button w-full bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
                    Add to bag
                  </button>
                  <button
                    className="button w-full bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white hover:border-transparent"
                  >
                    View full details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default ProductDetailModal;
