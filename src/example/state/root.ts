import { createRoot } from '../../epic/index'
import { reducer as deltaReducer } from '../delta/deltaReducer'
import { reducer as echoReducer } from '../echo/echoReducer'

export const { createEffect, createEffects } = createRoot({
    domains: {
        delta: deltaReducer,
        echo: echoReducer
    }
})
