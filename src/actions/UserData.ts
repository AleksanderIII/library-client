import { Dispatch } from 'redux';
import { UserDataActions } from '../constants';
import { IAppState } from '../models';

export const postUserData = () => {
    return {
        type: UserDataActions.POST_USER_DATA
    };
};

export const changeValue = (name: string, value: string) => {
    return {
        type: UserDataActions.CHANGE_VALUE,
        name,
        value
    };
};

export const clearUserData = () => {
    return {
        type: UserDataActions.CLEAR_USER_DATA,
    };
};
