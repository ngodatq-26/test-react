import React from 'react';
import { IDataUser, IUser } from '../../models/user';

export const sortItem : any = (items : Array<IUser>, itemSort : string, sortValue : string) => {
    if (itemSort == 'fullName') {
        if (sortValue == 'ASC') {
            return items.sort(sortOrder('fullName'));
        } else return items.sort(sortOrder('fullName')).reverse();
    }

    if (itemSort == 'userName') {
        if (sortValue == 'ASC') {
            return items.sort(sortOrder('userName'));
        } else return items.sort(sortOrder('userName')).reverse();
    }

    return [];
}

export function sortOrder(property : 'fullName' | 'userName') {
    return function (a : IUser, b : IUser) {
        let fa = a[property].toLowerCase(),
            fb = b[property].toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    }
}