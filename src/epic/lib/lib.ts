import { createUtilityHook } from "./createutilityhook/createUtilityHook";
import { createHookActions } from "./createhookactions/createHookActions";
import { createProvider } from "./createprovider/createProvider";
import { createReducer } from "./createreducer/createReducer";
import { createStore } from "./createstore/createStore";
import { createMiddleWare } from "./createmiddleware/createMiddleware";

export const lib = {
    createStore,
    createProvider,
    createHookActions,
    createUtilityHook,
    createReducer,
    createMiddleWare
}
