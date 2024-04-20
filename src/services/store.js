import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath] : articleApi.reducer
    },//used to reduce the state allowing us what we need
    middleware: (getDefaultMiddleware) => //allows us to do something before we get the state
    getDefaultMiddleware().concat(articleApi.middleware)
});