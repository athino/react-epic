import { createActions } from "../../src";

export const { createReducer } = createActions(({ defineAction }) => ({

    fetchUser: defineAction<{
        id: string
    }>(),

    removeUser: defineAction<{

    }>()

}))
