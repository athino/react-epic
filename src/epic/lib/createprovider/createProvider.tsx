import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'

export const createProvider = (store: any, actions: any, context: any) => {
  const Context = (props: { children: React.ReactNode }) => {
    return (
      <context.Provider value={actions}>
        {props.children}
      </context.Provider>
    )
  }

  const Provider = (props: { children: React.ReactNode }) => {
    return (
      <ReduxProvider store={store}>
        <Context>
          {props.children}
        </Context>
      </ReduxProvider>
    )
  }
  return Provider
}
