import { Dispatch } from 'redux';
import { UserDataActions } from '../constants';
import { UserDataService } from '../services';
import { IAppState } from '../models';

export const postUserData = () => {
    return (dispatch: Dispatch<IAppState>, getState: () => IAppState) => {
        dispatch({ type: UserDataActions.POST_USER_DATA });
        const state = getState();
        UserDataService.publishUserData(state.userData)
            .then(console.log)
            .then(() => dispatch(clearUserData()));
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
