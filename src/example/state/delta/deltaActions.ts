import { epic } from '../../../index'

export const deltaActions = epic.createActions(({ defineAction }) => ({

    deltaActionWithPayload: defineAction<{
        id: string,
        nok: boolean
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

