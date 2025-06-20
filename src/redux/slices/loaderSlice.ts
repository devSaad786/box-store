import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the state
interface LoaderState {
  loader: boolean;
  refreshing: boolean;
}

// Set the initial state with the defined type
const initialState: LoaderState = {
  loader: false,
  refreshing: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoader: (state) => {
      state.loader = true;
    },
    hideLoader: (state) => {
      state.loader = false;
    },
    showRefreshing: (state) => {
      state.refreshing = true;
    },
    hideRefreshing: (state) => {
      state.refreshing = false;
    },
  },
});

// Export actions and reducer
export const { showLoader, hideLoader, showRefreshing, hideRefreshing } = loaderSlice.actions;
export default loaderSlice.reducer;
