import { useSelector } from "react-redux";
import { selectProduct } from "../../features/product/productSlice";
import { RootState, useAppDispatch } from "../../features/store";
import Product from "./Product";

export default function ProductList() {
  const products = useSelector((state: RootState) => state.product.data);
  const dispatch = useAppDispatch();

  const handleClick = (id: string) => {
    dispatch(selectProduct(id));
  };
  return (
    <div>
      {products.map((product) => {
        return <Product product={product} handleClick={handleClick} />;
      })}
    </div>
  );
}
