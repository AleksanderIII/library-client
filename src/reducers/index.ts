import { combineReducers, Reducer } from 'redux';

import { IAppSettingsState, IMoneyEditorComponentProps, IViewProps, ICardDetailsState, IUserDataState, IFiltersState } from '../models/states/states';
import appSettings from './appSettings';
import moneyEditor from './moneyEditor';
import view from './view';
import cardDetails from './cardDetails';
import userData from './userData';
import filterData from './filterData';

export default combineReducers({
  appSettings: appSettings as Reducer<IAppSettingsState>,
  moneyEditor: moneyEditor as Reducer<IMoneyEditorComponentProps>,
  view: view as Reducer<IViewProps>,
  cardDetails: cardDetails as Reducer<ICardDetailsState>,
  userData: userData as Reducer<IUserDataState>,
  filterData: filterData as Reducer<IFiltersState>
});
