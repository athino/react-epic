import { root } from "../state/root";

export const effects = root.createEffects()

effects.addEffect({
    domainType: 'delta'
})
