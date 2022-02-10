import { configureStore } from "@reduxjs/toolkit";
import { spacexApi } from "../services/space-x";

export const store = configureStore({
  reducer: {
    [spacexApi.reducerPath]: spacexApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(spacexApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
