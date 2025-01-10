import { createState } from '../../../src/index'
import { reducer as deltaReducer } from "../../delta/deltaReducer";
import { reducer as echoReducer } from "../../echo/echoReducer";
import { fetchUserEffect } from '../../delta/deltaEffects';

export const { createEffect, createEffects } = createState({
    domains: {
        delta: deltaReducer,
        echo: echoReducer
    }
})

const { createHooks } = createEffects({
    effects: [
        fetchUserEffect
    ]
})

export const { useActions, useProvider } = createHooks()
