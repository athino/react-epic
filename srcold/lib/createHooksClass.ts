// @ts-nocheck

import { createContext, useContext } from "react"
import { createProvider } from "./createProvider"
import { Dispatcher } from "./dispatcherClass"
import { createDomainsSkeleton } from "./createDomainsSkeleton"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { useSelector } from 'react-redux'

export const createHooksClass = (arg) => {
  const domainsSkeleton = createDomainsSkeleton(arg.domains)

  return {
    Hooks: class Hooks {
      constructor(domains) {
        const cancellers = {}
        const promises = {}

        const middleware = (store) => (next) => (action) => {
          const result = next(action)
          Object.entries(domains).forEach(([domain, {effects}]) => {
            effects.forEach((effect) => {
              if (domain === action.domain) {
                const match = effect.actionType instanceof RegExp
                  ? effect.actionType.test(action.type)
                  : effect.actionType === action.type
                if (match) {
                  const { actions, cancel } = new Dispatcher({
                    domainsSkeleton: domainsSkeleton,
                    dispatch: store.dispatch
                  })
                  if (effect.effectType === 'takeLatest') {
                    cancellers[effect.id]?.()
                    cancellers[effect.id] = cancel
                    effect.handler({
                      actions,
                      action,
                      getState: store.getState
                    })
                  } else if (effect.effectType ===  'takeLeading') {
                    if (!promises[effect.id]) {
                      promises[effect.id] = true
                      effect.handler({
                        actions,
                        action,
                        getState: store.getState
                      })
                      .then(() => promises[effect.id] = false)
                      .catch(() => promises[effect.id] = false)
                    }
                  } else if (effect.effectType ===  'takeEvery') {
                    effect.handler({
                      actions,
                      action,
                      getState: store.getState
                    })
                  }
                }
              }
            })
          })
      
          return result
        }

        const store = configureStore({
          middleware: [middleware],
          reducer: combineReducers({
            ...Object.entries(arg.domains).reduce((accDomains, [domain, reducer]) => ({
              ...accDomains,
              [domain]: (state, action) => {
                if (action.domain && action.domain !== domain) return state
                return reducer(state, action)
              }
            }), {})
          })
        })

        const { actions } = new Dispatcher({
          domainsSkeleton: domainsSkeleton,
          dispatch: store.dispatch
        })  

        const ActionsContext = createContext({})

        Object.assign(this, {
          useSelector: useSelector,
          useActions: () => ({ actions: useContext(ActionsContext) }),
          useProvider: () => ({ Provider: createProvider(store, actions, ActionsContext) })
        })
      }
    }
  }
}
