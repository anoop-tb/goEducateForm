import { configureStore } from "@reduxjs/toolkit";
import institutionDataReducer from "./features/data-slice";

const store = configureStore({
  reducer: {
    institutions: institutionDataReducer,
  },
});

export default store;
