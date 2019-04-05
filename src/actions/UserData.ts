import { Dispatch } from 'redux';
import { UserDataActions } from '../constants';
import { IAppState } from '../models';

export const postUserData = () => {
    return (dispatch: Dispatch<IAppState>) => {
        dispatch({
            type: UserDataActions.POST_USER_DATA
        });
      //  dispatch(clearUserData());
    };
};

export const changeValue = (name: string, value: string) => {
    return (dispatch: Dispatch<IAppState>) => {
        dispatch({
            type: UserDataActions.CHANGE_VALUE,
            name,
            value
        });
    };
};

export const clearUserData = () => {
    return (dispatch: Dispatch<IAppState>) => {
        dispatch({
            type: UserDataActions.CLEAR_USER_DATA,
        });
    };
};
