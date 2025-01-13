import { epic } from "../../epic"

export const deltaActions = epic.createActions(({ defineAction }) => ({

    deltaActionWithPayload: defineAction<{
        value: string
    }>(),

    deltaActionWithoutPayload: defineAction<{

    }>(),

    commonWithPayload: defineAction<{
        id: string
    }>(),

    commonActionWithoutPayload: defineAction<{

    }>()

}))

