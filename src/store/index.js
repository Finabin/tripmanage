import { configureStore } from "@reduxjs/toolkit";

import darkReducer from "./modules/dark";

const store = configureStore({
  reducer: {
    dark: darkReducer,
  },
})

export default store