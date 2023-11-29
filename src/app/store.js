import { configureStore } from "@reduxjs/toolkit";
import interSelectedReducer from "../feature/interSelectedSlice.js";
// import messageInfoReducer from "../feature/messageInfoSlice.js";

const store = configureStore({
  reducer: {
    interSelectedStore: interSelectedReducer,
    // messageInfoStore: messageInfoReducer,
  },

  // devTools: false, //PRODUCTION
  devTools: true, //DEVELOPPEMENT
});

export default store;
