import { createState, DefineState } from '../../epic'

type TEchoState = DefineState<{
    searchResult: number,
    searching: boolean
}>

export const state = createState<TEchoState>({
    searchResult: 0,
    searching: false
})
