import { TDefineAction } from "./defineAction"

export type TInitializerBase = (ctx: {
    /**
     * Utility to define the action payload.
     * 
     * Example:
     * 
     * ```
     * defineAction<{
     *   id: string
     * }>()
     * ```
     * */
    defineAction: TDefineAction
}) => {
    [action: string]: unknown
}
