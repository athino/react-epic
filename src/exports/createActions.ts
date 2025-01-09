

export type NonArrayObject = object & { length?: never }

type InitializerBase<Actions> = (ctx: { defineAction: <Payload extends NonArrayObject = {}>() => Payload }) => {
  [Key in keyof Actions]: Actions[Key]
}

type IfEmpty<T, U, P> = T extends object
  ? keyof T extends never
    ? U
    : P
  : U
  
export const createActions = <Initializer extends InitializerBase<Initializer>>(initializer: Initializer) => {

  return {
    createReducer: <State>(reducer: {
      [K in keyof ReturnType<Initializer>]: (ctx: IfEmpty<ReturnType<Initializer>[K], {
        state: State
      }, {
        state: State
        payload: ReturnType<Initializer>[K]
      }>) => void
    }) => {

      return {
        reducer: reducer
      }
    }
  }
}
