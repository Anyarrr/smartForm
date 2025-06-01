import { configureStore } from "@reduxjs/toolkit";
import phoneSlice from "../features/phoneSlice";
import dataSlice from "../features/dataSlice";
import cvvSlice from "../features/cvvSlice";

export const store = configureStore({
    reducer: {
        phone: phoneSlice,
        data: dataSlice,
        cvv: cvvSlice
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;