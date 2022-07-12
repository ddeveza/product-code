import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InitialStateProps {
  data: Array<any>;
  selectedID: string;
  loading: boolean;
  error: string;
  success: boolean;
}

const initialState: InitialStateProps = {
  data: [],
  selectedID: "",
  loading: false,
  error: "",
  success: false,
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  /* fetch data */

  const response = await fetch("https://fakestoreapi.com/products?limit=5")
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => console.log("error", error));

  return [...response];
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectProduct: (
      state: InitialStateProps,
      { payload }: PayloadAction<string>
    ) => {
      state.selectedID = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.selectedID = payload[0]?.id;
      state.success = true;
    });
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.rejected, (state, { payload }) => {
      state.loading = false;
    });
  },
});

export const { selectProduct } = productSlice.actions;

export default productSlice.reducer;
