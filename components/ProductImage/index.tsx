"use client";
import React, { useState } from "react";
import Image from "next/image";
interface Props {
  url: string;
  fill: boolean;
}
function ProductImage({ url, fill }: Props) {
  const [loading, setLoading] = useState(true);
  const handleToogleLoading=()=>setLoading(false)
  return fill ? (
    <Image
      className={`object-contain duration-75 ease-in-out   group-hover:opacity-75 ${
        loading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }`}
      fill
      src={url}
      //width={500}
      //height={500}
      alt={`Picture of the product `}
      onLoadingComplete={handleToogleLoading}
    />
  ) : (
    <div>
      <Image src={url} width={500} height={500} alt="Picture of the Prodcut" />
    </div>
  );
}

export default ProductImage;
