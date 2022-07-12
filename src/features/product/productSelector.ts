import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectedProduct = createSelector(
  (state: Pick<RootState, "product">) => state.product,
  ({ data, selectedID }) => {
    const productSelected = data?.find((product) => product?.id === selectedID);

    if (productSelected) return productSelected;
    return "";
  }
);
