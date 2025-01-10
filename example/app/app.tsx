import React from 'react';
import { useProvider } from "../common/state/state"
import { Component } from './component';

export const App = () => {

    const { Provider } = useProvider()

    return (
        <Provider>
            <Component/>
        </Provider>
    )
}
