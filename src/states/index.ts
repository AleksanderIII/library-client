import { IAppState } from '../models';
import getAppSettingsInitialState from './appSettingsState';
import getInitialMoneyEditorState from './moneyEditorState';
import getInitialViewState from './viewState';
import getInitialCardDetailsState from './cardDetails';
import getInitialUserDataState from './userData';
import getInitialFiltersState from './filtersState';
import getInitialPopupState from './popup';

export function getInitialState(): IAppState {
    return {
        appSettings: getAppSettingsInitialState(),
        moneyEditor: getInitialMoneyEditorState(),
        view: getInitialViewState(),
        cardDetails: getInitialCardDetailsState(),
        userData: getInitialUserDataState(),
        filters: getInitialFiltersState(),
        popup: getInitialPopupState()
    };
}
