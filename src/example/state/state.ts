import { epic } from '../../index'
import { deltaReducer } from './delta/deltaReducer'
import { lol } from './echo/echoEffects'

export const state = epic.createState({
    domains: {
        delta: deltaReducer
    }
})

console.log(state)

console.log(lol)

export const EpicProvider = state
