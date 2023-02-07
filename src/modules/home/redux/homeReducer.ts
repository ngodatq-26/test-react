import React from "react";
import { createCustomAction } from "typesafe-actions";
import { getType } from "typesafe-actions";
import { ActionType } from "typesafe-actions";
import { IUser } from "../../../models/user";

export interface UserState {
    user? : Array<IUser>,
    page? : number,
    results? : number
}

export const initialState : UserState = {
    user : [],
    page : 1,
    results : 10
}

export const setUser = createCustomAction('user/setUser', (data : Array<IUser>) => ({
    data,
}));

export const setPage = createCustomAction('page/setPage', (data: number) => ({
    data,
}));

export const setResults = createCustomAction('results/setResults', (data: number) => ({
    data,
}));

const actions = {setUser, setPage, setResults};

type Action = ActionType<typeof actions>;

export default function reducer(state : UserState = initialState, action : Action) {
    switch (action.type) {
        case getType(setUser):
            return ({...state, user : action.data});
        case getType(setPage):
            return ({ ...state, page: action.data });
        case getType(setResults):
            return ({ ...state, results : action.data });
        default:
            return state;
    }
}



