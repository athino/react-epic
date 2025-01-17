import { createState, DefineState } from '../../epic'

type TDeltaState = DefineState<{
    value: string
}>

export const { createReducer } = createState<TDeltaState>({
    value: 'skriv her...'
})
