import { root } from './root'
import { deltaEffects } from '../delta/deltaEffects'
import { echoEffects } from '../echo/echoEffects'

const consumer = root.createConsumer({
    effects: [
        ...deltaEffects,
        ...echoEffects
    ]
})

export const useActions = consumer.createHook()
export const Provider = consumer.createProvider()
