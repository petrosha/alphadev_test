import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import dataReducer from "./data-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    data: dataReducer,
  },
});
export default store;
