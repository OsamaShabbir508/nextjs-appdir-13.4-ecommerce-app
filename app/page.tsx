import Product from "@/components/Product";
import { Product as ProductType } from "@/typing";
const getProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products: ProductType[] = await res.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};
export default async function Home() {
  const getProductData = await getProducts();

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-48">
      <p className="text-5xl font-bold text-center mb-10">DEALS OF THE DAY</p>
      <div className="grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-5 xl:gap-x-8 xl:gap-y-10">
        {getProductData?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
