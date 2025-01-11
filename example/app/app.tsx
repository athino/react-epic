import React from 'react';
import { Component } from './component';
import { EpicProvider } from '../state/state';

export const App = () => {

    return (
        <EpicProvider>
            <Component/>
        </EpicProvider>
    )
}
