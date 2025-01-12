import React from 'react';
import { Provider as EpicProvider } from './example/state/provider';
import { Component } from './example/component/component';

export const App = () => {

    return (
        <EpicProvider>
            <Component/>
        </EpicProvider>
    )
}
