// @ts-nocheck

export const createState = (a) => {
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
