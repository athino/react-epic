export {createState} from './exports/createState'
export {DefineActions} from './exports/defineActions'
export {DefineState} from './exports/defineState'

/**
 * Utility to create root.
 */
export const createRoot = <D extends TDomainsBase>(arg: {
   domains: D
}) => {

   return arg

}

type TDomainsBase = Record<string, TReducerBase>

type TReducerBase = (state: any, action: any) => any
