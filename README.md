
## React Epic
React Epic is a state manager for React.
- Has excellent typescript support.
- Handles complex async logic.
- Is domain driven.

Link to this documentation here:
- [https://athino.github.io/react-epic/](https://athino.github.io/react-epic/).

## Usage

### 1. Setting up domain actions

Within your app, for instance under `@/user/`, add a file called `userActions.ts`.

```ts
// @/user/userActions.ts

import { DefineActions } from '@athino/react-epic';

export const TUserActions = DefineActions<{

    fetchUser: {
        payload: {
            id: string
        }
    }

    setUser: {
        payload: {
            name: string
        }
    }

}>;

```

### 2. Setting up the default user state

Next to your `userActions.ts` file, add `userState.ts`.

```ts
// @/user/userState.ts

import { createState, DefineState } from '@athino/react-epic';

type TUserState = DefineState<{
  isLoading: boolean
  name?: string
}>;

export const state = createState<TUserState>({
    isLoading: false,
    name: undefined
});

```


### 3. Setting up the domain reducer

Next to your `userState.ts` file, add `userReducer.ts`.

```ts
// @/user/userReducer.ts

import { state } from '@/user/userState.ts';
import { TUserActions } from '@/user/userActions.ts';

export const reducer = state.createReducer<TUserActions>({

    fetchUser({state, payload}) {
        state.isLoading = true
    },

    setUser({state, payload}) {
        state.isLoading = false
        state.name = payload.name
    }

});

```

### 3. Connect the domain reducer to the Root class

Outside your `user` directory, perhaps in `@/common/state/` folder, add a new file called `root.ts`.

```ts
// @/common/state/root.ts

import { createRoot } from '@athino/react-epic';
import { reducer as userReducer } from '@/user/userReducer.ts';

export const root = createRoot({
    domains: {
        user: userReducer
    }
});

```

### 4. Add effects to your actions

Next to `userReducer.ts`, `userActions.ts` and `userState.ts`, add a new file called `userEffects.ts`.

```ts
// @/user/userEffects.ts

import { root } from '@/common/state/root.ts';

export const effects = root.createEffects()

effects.add({
    actionType: 'fetchUser',
    effectType: 'takeLatest',
    handler: async ({action, actions, call}) => {
        const res =  await call(() => fetch(`/my-api/get-user?id=${action.payload.id}`))
        const json = await res.json()

        actions.user.setUser({ name: json.name })
    }
});

```

### 5. Create the consumer and connect your effects

Next to your `root.ts` file, add a new file called `consumer.ts`.

```ts
// @/common/state/consumer.ts

import { root } from '@/common/state/root.ts';
import { effects as userEffects } from '@/user/userEffects.ts';

export const consumer = root.createConsumer({
    effects: [
        ...userEffects.getEffects()
    ]
});

export const useActions = consumer.createHook();
export const Provider = consumer.createProvider();

```

### 6. Implement the Provider and useActions hook in React

In the root of your project, create `app.tsx`, and import the Provider.

```tsx
// @/app.tsx

import React from 'react';
import { Provider, useActions } from '@/common/state/consumer.ts';

const App = () => {

    return (
        <Provider>
            <User/>
        </Provider>
    )
};

const User = () => {
    const {actions, data} = useActions((state) => state.user)

    return (
        <div>
            <button
                onClick={() => actions.user.fetchUser({ id: '1' })}>
                {isLoading ? 'Fetching user...' : 'Fetch user'}
            </button>
            <br/>
            User name: {data.name || '-'}
        </div>
    )
};

```

## API

There are four exports from `react-epic`.

- createRoot
- createState
- DefineActions
- DefineState
