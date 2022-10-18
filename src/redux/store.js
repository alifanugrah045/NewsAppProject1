import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./IndonesiaSlice";
import logger from "redux-logger";
export default configureStore({
  reducer: {
    articles: articlesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
