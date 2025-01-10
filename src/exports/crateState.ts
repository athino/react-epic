// @ts-nocheck

import { TCreateState } from '../types/createState'

export const createState: TCreateState = (a) => {
  const createCreateHooks = (b) => () => {
    return {
      useActions: () => {},
      useProvider: () => {}
    }
  }

  return {
    createHooks: createCreateHooks(),
    createEffects: (c) => {
      return {
        createHooks: createCreateHooks(c)
      }
    },
    createEffect: (d) => {}
  }
}
