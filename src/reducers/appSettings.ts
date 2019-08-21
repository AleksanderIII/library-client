import { AppSettingsActions } from '../constants';
import { AppSettingsActionTypes, IAppSettingsState } from '../models';
import getAppSettingsInitialState from '../states/appSettingsState';

export default function appSettings(state: IAppSettingsState = getAppSettingsInitialState(), action: AppSettingsActionTypes): IAppSettingsState {
    switch (action.type) {
        case AppSettingsActions.GET_APP_SETTINGS_REQUEST: return state;
        default:
            return state;
    }
}
