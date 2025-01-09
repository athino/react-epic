import React from 'react';
import { Provider } from "../common/state/state"

export const App = () => {

    return (
        <Provider>
            <Component/>
        </Provider>
    )
}
