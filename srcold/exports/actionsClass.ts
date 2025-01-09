
type InitializerBase<Actions> = (definePayload: <Payload = undefined>() => Payload) => {
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

export class Actions<Initializer extends InitializerBase<Initializer>> {
  Reducer!: Reducer<Initializer>
  constructor(initializer: Initializer) {
    Object.assign(this, {
      Reducer: class Reducer {
        reducer!: any
        constructor(reducer: any) {
          this.reducer = reducer
          this.reducer._actionTypes = Object.keys(initializer(() => undefined as any));
        }
      }
    })
  }
}
