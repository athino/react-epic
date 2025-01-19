import { createState, DefineState } from '../../epic'

type TEchoState = DefineState<{
    searchResult: number
}>

export const state = createState<TEchoState>({
    searchResult: 0
})
