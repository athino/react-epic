## React Epic
React Epic is a Redux-wrapper for React.
- Has excellent typescript support.
- Handles complex async logic.
- Is domain driven.


## Usage

### 1. Setting up domain actions

Within your app, for instance `/app/user`, add a file called `userActions.ts`.

```tsx
// userActions.ts

import { Actions } from "@athino/react-epic";

export const { Reducer } = new Actions((defineAction) => ({

    fetchUser: defineAction<{
        id: string
    }>(),

    setUser: defineAction<{
        name: string
    }>()

}))
```

### 2. Setting up domain reducer

Next to your `userActions.ts` file, add `userReducer.ts`.

```tsx
// userReducer.ts

import { Reducer } from "./userActions.ts"

type UserState = {
  isLoading: boolean
  name?: string
}

const initialState: UserState = {
  isLoading: false,
  name: undefined
}

export const { reducer } = new Reducer<UserState>((state = initialState, action): UserState => {
    switch (action.type) {
        case 'fetchUser': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'setUser': {
            return {
                ...state,
                isLoading: false,
                name: action.payload.name
            }
        }
    }
})

```

### 3. Connect the domain reducer to the Root class

Outside your `user` directory, perhaps in a `common` folder, add a new file called `root.ts`.

```tsx
// root.ts

import { Root } from '@athino/react-epic'
import { reducer as userReducer } from './user/userReducer.ts'

export const { Effects, Hooks } = new Root({
    user: userReducer
})
```

### 4. Add effects to your actions

Next to `userReducer.ts` and `userActions.ts`, add a new file called `userEffects.ts`.

```tsx
// userEffects.ts

import { Effects } from '../common/root.ts'

export const effects = new Effects({ domain: 'user' })

effects.add({
    actionType: 'fetchUser',
    effectType: 'takeLatest',
    handler: async ({action, actions}) => {
        const res =  await fetch(`/my-api/get-user?id=${action.payload.id}`)
        const json = await res.json()

        actions.user.setUser({ name: json.name })
    }
})
```

### 5. Connect your effects to the Hooks class

Next to your `root.ts` file, add a new file called `hooks.ts`.

```tsx
// hooks.ts

import { Hooks } from './root'
import { effects as userEffects} from './user/userEffects.ts'

export const { useSelector, useActions, useProvider } = new Hooks({
    user: userEffects
})
```

### 6. Implement the useProvider hook in your main React component

Within your main `App.tsx` file, add the p.

```tsx
// App.tsx

import React from 'react'
import { useProvider } from './common/hooks.ts'
import { User } from '../User.tsx'

const App = () => {
  const { Provider } = userProvider()
  return (
    <Provider>
      <User/>
    </Provider>
  )
}
```

### 7. Implement the useSelector and useActions hooks

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
                onClick={() => actions.echo.fetchUser({ id: '1' })}>
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
