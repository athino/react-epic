import { createState, DefineState } from './deltaActions'

type TDeltaState = DefineState<{
    value: string
}>

export const { createReducer } = createState<TDeltaState>({
    value: 'skriv her...'
})
