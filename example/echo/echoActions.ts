import { createActions } from "../../src";

export const { createReducer } = createActions(({ defineAction }) => ({

    fetchOrder: defineAction<{
        id: string
    }>(),

    removeOrder: defineAction<{
        
    }>()

}))
