import { createState, DefineState } from '../../epic'

type TEchoState = DefineState<{
    value: string
}>

export const { createReducer } = createState<TEchoState>({
    value: 'skriv her...'
})
