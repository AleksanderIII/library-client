import { AppSettingsActions } from '../../constants';

export type AppSettingsActionTypes =
  IGetAppSettingsRequest
  | ISaveUserInfo;

export interface IGetAppSettingsRequest {
  type: AppSettingsActions.GET_APP_SETTINGS_REQUEST;
}

export interface ISaveUserInfo {
  type: AppSettingsActions.SAVE_USER_DATA;
  userInfo: { name: string, isAdmin: boolean };
}
