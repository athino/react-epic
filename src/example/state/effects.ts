import { createEffects } from './root'
import { deltaEffect } from '../delta/deltaEffects'
import { echoEffect } from '../echo/echoEffects'

export const effects = createEffects({
    effects: [
        deltaEffect,
        echoEffect
    ]
})
