import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { createCustomAction } from "typesafe-actions";
import { getType } from "typesafe-actions";
import { ActionType } from "typesafe-actions";
import { AppState } from '../../../redux/reducer';


export type sortValue = 'DESC' | 'ASC' | null;
export type itemSort = 'fullName' | 'userName' | null

export interface SortState {
    sortValue : sortValue,
    itemSort : itemSort
}

export const InitialSort : SortState = {
    sortValue : null,
    itemSort : null,
}

export const setSortValue = createCustomAction('sortValue/setSortValue' , (data : sortValue) => ({
    data,
}))

export const setItemSort = createCustomAction('itemSort/setItemSort', (data : itemSort) => ({
    data,
}))

const actions = {setSortValue, setItemSort};

type ActionT = ActionType<typeof actions>;

export default function reducer(state : SortState = InitialSort, action : ActionT) {
    switch(action.type) {
        case getType(setSortValue):
            return ({...state, sortValue : action.data});
        case getType(setItemSort):
            return({...state, itemSort : action.data});
        default:
            return state;
    }
}