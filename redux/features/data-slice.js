import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  institutionsContent: null,
  isLoading: false,
};

const InstitutionsSlice = createSlice({
  name: "institutionData",
  initialState: initialStateValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInstitutions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInstitutions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.institutionsContent = action.payload;
      });
  },
});

export const getInstitutions = createAsyncThunk(
  "InstitutionsSlice/getInstitutions",
  async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      return null;
    }
  }
);

export default InstitutionsSlice.reducer;
