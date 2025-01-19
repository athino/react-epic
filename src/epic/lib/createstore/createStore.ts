import { configureStore, Middleware } from "@reduxjs/toolkit"

export const createStore = (arg: {
    reducer: (s: any, a: any) => any
}) => {

    const middleware: Middleware = (store) => (next) => (action) => {
        const result = next(action)

        console.log('EFFECT: ', {state: store.getState(), action})
        
        return result
    };

    const store = configureStore({
        reducer: arg.reducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware()
                .concat([middleware])
        }
    })

    return { store }
}
