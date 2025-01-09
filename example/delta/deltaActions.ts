import { createActions } from "../../src";

export const { createReducer } = createActions(({ defineAction }) => ({

    fetchUser: defineAction<{
        id: string,
        nok: boolean
    }>(),

    removeUser: defineAction<{

    }>(),

    fetchOrder: defineAction<{
        id: string
    }>()

}))
