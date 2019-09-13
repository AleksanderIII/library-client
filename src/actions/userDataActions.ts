import { Dispatch } from 'redux';
import { UserDataActions } from '../constants';
import { UserDataService } from '../services';
import { IAppState, IUserDataState } from '../models';
import { AppSettingsActions } from '.';

export const postUserData = () => {
    return (dispatch: Dispatch<IAppState>, getState: () => IAppState) => {
        dispatch({ type: UserDataActions.POST_USER_DATA });
        const state = getState();
        UserDataService.publishUserData(state.userData)
            .then(userData => {
                const { name, isAdmin } = userData;
                dispatch(AppSettingsActions.saveUserInfo({ name, isAdmin }));
            })
            .then(() => dispatch(clearUserData()))
            .catch(console.log);
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
