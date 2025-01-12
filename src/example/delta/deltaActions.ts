import { epic } from "../../epic"

export const deltaActions = epic.createActions(({ defineAction }) => ({

    deltaActionWithPayload: defineAction<{
        id: string
    }>(),

    deltaActionWithoutPayload: defineAction<{

    }>(),

    commonWithPayload: defineAction<{
        id: string,
        nok: boolean
    }>(),

    commonActionWithoutPayload: defineAction<{

    }>()

}))

