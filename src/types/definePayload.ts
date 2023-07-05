

export type DefinePayload<T> = undefined extends T ? () => void : (payload: T) => void
