// @ts-nocheck

import { TCreateActions } from '../types/createActions'

export const createActions: TCreateActions = (initializer) => ({
  createReducer: (reducer) => ({reducer, initializer})
})
