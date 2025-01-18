import { createMainReducer } from './createmainreducer/createMainReducer'
import { createStore } from './createstore/createStore'
import { handleDomainReducer } from './handledomainreducer/handleDomainReducer'

export const lib = {
    handleDomainReducer,
    createMainReducer,
    createStore
}
