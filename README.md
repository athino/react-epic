## React Epic
React Epic is a state manager for React.
- Has excellent typescript support.
- Handles complex async logic.
- Is domain driven.

## Usage

### 1. Setting up domain actions

Within your app, for instance under `/app/user/`, add a file called `userActions.ts`.

```tsx
// userActions.ts

import { DefineActions } from "@athino/react-epic";

export const TUserActions = DefineActions<

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

>
```

### 2. Setting up the default user state

Next to your `userActions.ts` file, add `userState.ts`.

```tsx
// userState.ts

import { createState } from "@athino/react-epic";

type TUserState = {
  isLoading: boolean
  name?: string
}

export const state = createState<TUserState>({
    isLoading: false,
    name: undefined
})
```


### 3. Setting up the domain reducer

Next to your `userState.ts` file, add `userReducer.ts`.

```tsx
// userReducer.ts

import { state } from "./userState.ts"

export const reducer = state.createReducer({

    fetchUser({state, payload}) {
        state.isLoading = true
    },

    setUser({state, payload}) {
        state.isLoading = false
        state.name = payload.name
    }

})
```

### 3. Connect the domain reducer to the Root class

Outside your `user` directory, perhaps in `common/state/` folder, add a new file called `root.ts`.

```tsx
// root.ts

import { createRoot } from '@athino/react-epic';
import { reducer as userReducer } from './user/userReducer.ts';

export const root = createRoot({
    domains: {
        user: userReducer
    }
})
```

### 4. Add effects to your actions

Next to `userReducer.ts`, `userActions.ts` and `userState.ts`, add a new file called `userEffects.ts`.

```tsx
// userEffects.ts

import { root } from '../common/root.ts'

export const effects = root.createEffects()

effects.add({
    actionType: 'fetchUser',
    effectType: 'takeLatest',
    handler: async ({action, actions, call}) => {
        const res =  await call(() => fetch(`/my-api/get-user?id=${action.payload.id}`))
        const json = await res.json()

        actions.user.setUser({ name: json.name })
    }
})
```

### 5. Crate the consumer and connect your effects

Next to your `root.ts` file, add a new file called `consumer.ts`.

```tsx
// consumer.ts

import { root } from './root'
import { effects as userEffects} from './user/userEffects.ts'

export const consumer = root.createConsumer({
    effects: [
        ...userEffects.getEffects()
    ]
})

export const useActions = consumer.createHook()
export const Provider = consumer.createProvider()
```

### 6. Implement the Provider in your main React component

Within your main `App.tsx` file, add the Provider.

```tsx
// App.tsx

import React from 'react'
import { Provider } from '@/common/state/consumer.ts'

const App = () => {

    return (
        <Provider>
            {/* your app here */}
        </Provider>
    )
}
```

### 7. Implement the useActions hook

Within your `User.tsx` file, add the the following hooks.

```tsx
// User.tsx

import React from 'react'
import { useActions, useSelector } from '../common/hooks.ts'

export const User = () => {
    const {actions} = useActions()

    const name = useSelector((state) => state.user?.name)
    const isLoading = useSelector((state) => state.user.isLoading)

    return (
        <div>
            <button
                onClick={() => actions.user.fetchUser({ id: '1' })}>
                {isLoading ? 'Fetching user...' : 'Fetch user'}
            </button>
            <br/>
            User name: {name || '-'}
        </div>
    )
}
```

## API

There are only two exports from `react-epic`.
- Root
- Actions

### Actions
- excepts: `actionsInitializer` function.
- returns: `actions` instance.
