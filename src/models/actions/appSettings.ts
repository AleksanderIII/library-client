import { AppSettingsActions } from '../../constants';

export type AppSettingsActionTypes = IGetAppSettingsRequest;

export interface IGetAppSettingsRequest {
  type: AppSettingsActions.GET_APP_SETTINGS_REQUEST;
}
