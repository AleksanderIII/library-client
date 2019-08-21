import { Dispatch } from 'redux';
import { AppSettingsActions } from '../constants';
import { IAppState } from '../models';

export const getAppSettingsRequest = () => {
    return (dispatch: Dispatch<IAppState>) => {
        dispatch({
            type: AppSettingsActions.GET_APP_SETTINGS_REQUEST
        });
    };
};
