import { state } from './state'
import { deltaEffect } from '../delta/deltaEffects'
import { echoEffect } from '../echo/echoEffects'

export const effects = state.createEffects({
    effects: [
        deltaEffect,
        echoEffect
    ]
})
