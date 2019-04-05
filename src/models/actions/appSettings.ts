import { AppSettingsActions } from '../../constants';

export type AppSettingsActionTypes = IGetAppSettingsRequest
  | IToggleSettingsMenu;

export interface IGetAppSettingsRequest {
  type: AppSettingsActions.GET_APP_SETTINGS_REQUEST;
}

export interface IToggleSettingsMenu {
  type: AppSettingsActions.TOGGLE_SETTINGS_MENU;
}