// @ts-nocheck

import { TCreateActions } from '../types/createActions'

/**
 * Utility function to create actions.
 * 
 * Example:
 * 
 * ```
 * const { createReducer } = createActions(({ defineAction }) => ({
 * 
 *   fetchUser: defineAction<{
 *     id: string
 *   }>(),
 * 
 *   removeUser: defineAction<{
 *
 *   }>()
 * 
 * }))
 * ```
 */
export const createActions: TCreateActions = (initializer) => ({
  createReducer: (reducer) => ({reducer, initializer})
})
