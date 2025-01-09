import { crateState } from '../../../src/index'
import { reducer as deltaReducer } from "../../delta/deltaReducer";
import { reducer as echoReducer } from "../../echo/echoReducer";
import { fetchUserEffect } from '../../delta/deltaEffects';

export const { createEffect, createEffects } = crateState({
    domains: {
        delta: echoReducer,
        echo: deltaReducer
    }
})

const { createHooks } = createEffects({
    effects: [
        fetchUserEffect
    ]
})

export const { useActions, Provider } = createHooks()
