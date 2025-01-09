

export type NonArrayObject = object & { length?: never }

type InitializerBase<Actions> = (ctx: { defineAction: <Payload extends NonArrayObject = {}>() => Payload }) => {
  [Key in keyof Actions]: Actions[Key]
}

type ActionTypeMap<Actions> = {
  [Key in keyof Actions]: {
    type: Key;
    payload: Actions[Key];
  };
};

type Reducer<Initializer extends InitializerBase<Initializer>> = {
  new<State>(reducer: (state: State, action: ActionTypeMap<ReturnType<Initializer>>[keyof ReturnType<Initializer>]) => State): {
    reducer: (state: State, action: ActionTypeMap<ReturnType<Initializer>>[keyof ReturnType<Initializer>]) => State
  }
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
        createSubdomain: () => {}
      }
    }
  }
}
