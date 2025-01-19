import { createState, DefineState } from '../../epic'

type TDeltaState = DefineState<{
    value: string
}>

export const state = createState<TDeltaState>({
    value: 'skriv her...'
})
