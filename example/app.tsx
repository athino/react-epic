import React from 'react';
import { Component } from './example/component/component';
import { Provider } from './example/state/consumer';

export const App = () => {

    return (
        <Provider>
            <Component/>
        </Provider>
    )
}
