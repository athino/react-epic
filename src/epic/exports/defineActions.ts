import { TActionsBase } from "../types/actionsBaseType";

/**
 * Generic utility type to construct the payload of each action.
 */
export type DefineActions<Actions extends TActionsBase> = Actions
