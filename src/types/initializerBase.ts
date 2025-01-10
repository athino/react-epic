import { TDefineAction } from "./defineAction"

export type TInitializerBase = (ctx: { defineAction: TDefineAction }) => {
    [action: string]: unknown
}
