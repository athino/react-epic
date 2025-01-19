import { configureStore, Middleware } from "@reduxjs/toolkit"

export const createStore = (arg: {
    reducer: (s: any, a: any) => any
    effects: any
}) => {

    const middleware: Middleware = (store) => (next) => (action) => {
        const result = next(action)

        arg.effects.handler({
            store,
            action: action
        })
        
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
