import { epic } from '../../../index'

export const echoActions = epic.createActions(({ defineAction }) => ({

    echoActionWithPayload: defineAction<{
        id: string,
        nok: boolean
    }>(),

    echoActionWithoutPayload: defineAction<{

    }>(),

    commonWithPayload: defineAction<{
        id: string,
        nok: boolean
    }>(),

    commonActionWithoutPayload: defineAction<{

    }>()
    
}))

