import { createActions } from './createactions/createActions'
import { createMainReducer } from './createmainreducer/createMainReducer'
import { createProvider } from './createprovider/createProvider'
import { createStore } from './createstore/createStore'
import { handleDomainReducer } from './handledomainreducer/handleDomainReducer'

export const lib = {
    handleDomainReducer,
    createMainReducer,
    createStore,
    createProvider,
    createActions
}
