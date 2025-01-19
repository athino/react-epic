import { root } from './root'
import { effects as deltaEffects } from '../delta/deltaEffects'
import { effects as echoEffects } from '../echo/echoEffects'

const consumer = root.createConsumer({
    effects: [
        ...deltaEffects.getEffects(),
        ...echoEffects.getEffects()
    ]
})

export const useActions = consumer.createHook()
export const Provider = consumer.createProvider()
