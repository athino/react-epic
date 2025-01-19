import { createActions } from './createactions/createActions'
import { createDomainEffects } from './createdomaineffects/createDomainEffects'
import { createEffects } from './createeffects/createEffects'
import { createHook } from './createhook/createHook'
import { createMainReducer } from './createmainreducer/createMainReducer'
import { createProvider } from './createprovider/createProvider'
import { createRoot } from './createroot/createRoot'
import { createStore } from './createstore/createStore'
import { handleDomainReducer } from './handledomainreducer/handleDomainReducer'

export const lib = {
    handleDomainReducer,
    createMainReducer,
    createStore,
    createProvider,
    createActions,
    createHook,
    createEffects,
    createDomainEffects
}

export const internal = {
    createRoot
}
