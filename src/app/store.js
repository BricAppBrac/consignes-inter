import { configureStore } from "@reduxjs/toolkit";
import interSelectedReducer from "../feature/interSelectedSlice.js";

const store = configureStore({
  reducer: {
    interSelectedStore: interSelectedReducer,
  },

  devTools: false, //PRODUCTION
  // devTools: true, //DEVELOPPEMENT
});

export default store;
