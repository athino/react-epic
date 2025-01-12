import { epic } from '../../epic/index'
import { deltaReducer } from '../delta/deltaReducer'
import { echoReducer } from '../echo/echoReducer'

export const state = epic.createState({
    domains: {
        delta: deltaReducer,
        echo: echoReducer
    }
})
