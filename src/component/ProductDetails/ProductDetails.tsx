import { useSelector } from "react-redux";
import { selectedProduct } from "../../features/product/productSelector";
import ProductRating from "./ProductRating";

export const ProductDetails = () => {
  const product = useSelector(selectedProduct);

  return (
    <div className="flex flex-col  space-y-1 rounded overflow-hidden shadow-lg p-4 text-xs font-bold lg:max-w-[600px] lg:text-lg lg:max-h-[600px] lg:min-h-[400px] lg:space-y-0">
      <div className="">${product?.price}</div>
      <div className="lg:flex-1">{product.description}</div>
      <div className="flex  flex-col">
        <ProductRating rating={product.rating} />
        <div className="self-center">
          <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
