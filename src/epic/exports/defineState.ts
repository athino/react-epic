import { TStateBase } from "../types/stateBaseType";

/**
 * Generic utility type to construct the state type.
 */
export type DefineState<State extends TStateBase> = State
