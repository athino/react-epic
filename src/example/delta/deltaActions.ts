import { epic } from "../../epic"

export const deltaActions = epic.createActions(({ defineAction }) => ({

    deltaActionWithPayload: defineAction<{
        count: number
    }>(),

    deltaActionWithoutPayload: defineAction<{

    }>(),

    commonWithPayload: defineAction<{
        id: string
    }>(),

    commonActionWithoutPayload: defineAction<{

    }>()

}))

