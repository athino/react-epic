import {createState as _createState} from './exports/crateState'
import {createActions as _createActions} from './exports/createActions'
import { TCreateState } from './types/createState'
import { TCreateActions } from './types/createActions'

export const createState = _createState as unknown as TCreateState
export const createActions = _createActions as unknown as TCreateActions
