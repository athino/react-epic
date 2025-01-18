import { createEffects } from './root'
import { deltaEffect } from '../delta/deltaEffects'
import { echoEffect } from '../echo/echoEffects'

export const { createHook, createProvider } = createEffects({
    effects: [
        deltaEffect,
        echoEffect
    ]
})
