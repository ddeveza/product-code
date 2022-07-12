import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./component/Header";
import Loading from "./component/Loading";

import { ProductDetails } from "./component/ProductDetails/ProductDetails";
import ProductList from "./component/Products/ProductList";
import { getProducts } from "./features/product/productSlice";
import { RootState, useAppDispatch } from "./features/store";

function App() {
  const dispatch = useAppDispatch();
  const loading = useSelector((state: RootState) => state.product.loading);
  useEffect(() => {
    //get all products from fakestore api
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    //pending fetching from fakestore api
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center justify-center p-10 overflow-auto">
      <Header />
      <div className="flex flex-col space-y-2 items-center justify-evenly pt-2 md:flex-row md:space-x-20">
        <div>
          <ProductList />
        </div>
        <ProductDetails />
      </div>
    </div>
  );
}

export default App;
