import { NonArrayObject } from "./nonArrayObject";

export type TDefineAction = <TPayload extends NonArrayObject = {}>() => TPayload
