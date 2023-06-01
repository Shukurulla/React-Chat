import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  isLoading: null,
};
export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    getUserFetching: (state) => {
      state.isLoading = true;
    },
  },
});
