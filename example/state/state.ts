import { epic } from '../../src/index'
import { deltaEffect } from './delta/deltaEffects'
import { deltaReducer } from './delta/deltaReducer'
import { echoEffect } from './echo/echoEffects'
import { echoReducer } from './echo/echoReducer'

export const state = epic.createStates({
    domains: {
        delta: deltaReducer,
        echo: echoReducer
    }
})

const effects = state.createEffects({
    effects: [
        deltaEffect,
        echoEffect
    ]
})

export const useActions = effects.createHook()

export const EpicProvider = effects.createProvider()
