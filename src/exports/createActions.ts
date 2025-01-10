// @ts-nocheck

export const createActions = (initializer) => ({
  createReducer: (reducer) => ({reducer, initializer})
})
