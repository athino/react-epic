import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'

export const createProvider = (arg: {
  store: any
}) => {

  return (props: {children: React.ReactNode }) => {

    return (
      <ReduxProvider store={arg.store}>
          {props.children}
      </ReduxProvider>
    )
  }
}
