import { IAppSettingsState, Settings } from '../models';

export default function getAppSettingsInitialState(): IAppSettingsState {
    return {
        userInfo: {
            name: '',
            isAdmin: false
        },
        language: {
            options: [
                Settings.Languages.ENGLISH,
                Settings.Languages.RUSSIAN,
            ],
            selected: Settings.Languages.RUSSIAN
        },
        theme: {
            options: [
                Settings.Themes.DARK,
                Settings.Themes.LIGHT,
            ],
            selected: Settings.Themes.LIGHT
        }
    };
}
