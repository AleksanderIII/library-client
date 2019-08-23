import { combineReducers, Reducer } from 'redux';

import { IAppSettingsState, IMoneyEditorComponentProps, IViewState, ICardDetailsState, IUserDataState, IFiltersState, IPopupState } from '../models/states/states';
import appSettings from './appSettings';
import moneyEditor from './moneyEditor';
import view from './view';
import cardDetails from './cardDetails';
import userData from './userData';
import filters from './filters';
import popup from './popup';

export default combineReducers({
  appSettings: appSettings as Reducer<IAppSettingsState>,
  moneyEditor: moneyEditor as Reducer<IMoneyEditorComponentProps>,
  view: view as Reducer<IViewState>,
  cardDetails: cardDetails as Reducer<ICardDetailsState>,
  userData: userData as Reducer<IUserDataState>,
  filters: filters as Reducer<IFiltersState>,
  popup: popup as Reducer<IPopupState>
});
