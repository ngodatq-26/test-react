import React from 'react'
import { History } from 'history'
import { UserState } from '../modules/home/redux/homeReducer'
import homeReducer from '../modules/home/redux/homeReducer';
import { combineReducers } from 'redux'
import { SortState } from '../modules/common/redux/sortReducer';
import sortReducer from '../modules/common/redux/sortReducer';


export interface AppState {
    user : UserState
    sort : SortState
}

export default function createRootReducer(history: History) {
    return combineReducers({
        user : homeReducer,
        sort : sortReducer
    })
}