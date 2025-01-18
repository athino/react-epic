import { configureStore } from "@reduxjs/toolkit"

export const createStore = (arg: {
    reducer: (s: any, a: any) => any
}) => {

    const store = configureStore({
        reducer: arg.reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
    })

    return { store }
}
