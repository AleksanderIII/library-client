import { IAppSettingsState } from '../models';

export default function getAppSettingsInitialState(): IAppSettingsState {
    return {
        language: 'Русский',
        isOpen: false,
        theme: '-'
    };
}
