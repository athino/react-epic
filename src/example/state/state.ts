import { createRoot } from '../../epic/index'
import { deltaReducer } from '../delta/deltaReducer'
import { echoReducer } from '../echo/echoReducer'

export const { createEffect, createEffects } = createRoot({
    domains: {
        delta: deltaReducer,
        echo: echoReducer
    }
})
