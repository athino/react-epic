import { createUtilityHook } from "./createhook/createUtilityHook";
import { createHookActions } from "./createhookactions/createHookActions";
import { createProvider } from "./createprovider/createProvider";
import { createStore } from "./createstore/createStore";

export const lib = {
    createStore,
    createProvider,
    createHookActions,
    createUtilityHook
}
