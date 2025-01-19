import { createState, DefineState } from '../../epic'

type TEchoState = DefineState<{
    value: string
}>

export const state = createState<TEchoState>({
    value: 'skriv her...'
})
