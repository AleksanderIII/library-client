import { AppSettingsActions } from '../constants';

export const getAppSettingsRequest = () => {
    return {
        type: AppSettingsActions.GET_APP_SETTINGS_REQUEST
    };
};
