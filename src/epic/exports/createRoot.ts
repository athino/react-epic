

/**
 * Utility to create root.
 */
export const createRoot = <D extends TDomainsBase>(arg: {
    domains: D
 }) => {
 
    return {
       /**
       * Utility to create effect that listens to actions.
       */
       createEffect(effect: any) {       
          return effect
       },
 
       /**
       * Utility to collect all effects defined by createEffect.
       */
       createEffects(effects: {
          /** 
           * Specify the effects that listen to actions.
           */
          effects: any
       }) {
 
          return {
 
                /**
                 * Utility to create a react hook for your app.
                 */
                createHook() {
                    return {
                        useActions: {}
                    }
                },
 
                /**
                 * Utility to create a provider component for your app.
                 */
                createProvider() {
                    return {
                        Provider: {}
                    }
                }
          }
       },
       /**
       * Utility to create a react hook for your app.
       */
        createHook() {
            return {
                useActions: {}
            }
        },
 
       /**
       * Utility to create a provider component for your app.
       */
        createProvider() {
            return {
                Provider: {}
            }
        }
    }
 
 }
 
 type TDomainsBase = Record<string, TReducerBase>
 
 type TReducerBase = (state: any, action: any) => any
 