import { ViewActions } from '../constants';
import { IViewState, ViewActionTypes, Tabs } from '../models';
import getInitialState from '../states/viewState';

export default function view(state: IViewState = getInitialState(), action: ViewActionTypes): IViewState {
  switch (action.type) {
    case ViewActions.GET_MONEY_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ViewActions.GET_MONEY_BY_CONTINENT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ViewActions.DATA_RECIEVED_SUCCESSFULLY:
      return {
        ...state,
        data: {
          [Tabs.Money.COINS]: action.coins,
          [Tabs.Money.CASH]: action.cash,
        },
        isLoading: false
      };
    case ViewActions.OPEN_EDITOR:
      return {
        ...state,
        isOpenedEditor: true
      };
    case ViewActions.SET_MONEY_TYPE:
      return {
        ...state,
        dataType: action.value
      };
    case ViewActions.SET_CONTINENT:
      return {
        ...state,
        continent: action.value
      };
    default:
      return state;
  }
}
