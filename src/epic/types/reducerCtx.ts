

export type TReducerCtx<TState, TPayload> = keyof TPayload extends never ? { state: TState } : { state: TState, payload: TPayload  }
