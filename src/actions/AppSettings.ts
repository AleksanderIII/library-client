import { AppSettingsActions } from '../constants';
import { Settings } from '../models';

export const getAppSettingsRequest = () => {
    return {
        type: AppSettingsActions.GET_APP_SETTINGS_REQUEST
    };
};

export const updateLanguage = (language: Settings.Languages) => {
    return {
        type: AppSettingsActions.UPDATE_LANGUAGE,
        language
    };
};
