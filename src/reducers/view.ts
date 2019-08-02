import { ViewActions } from '../constants';
import { IViewState, ViewActionTypes, Editor } from '../models';
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
          [Editor.Selectors.Options.TYPE.COINS]: action.coins,
          [Editor.Selectors.Options.TYPE.CASH]: action.cash,
        },
        isLoading: false
      };
    case ViewActions.TOGGLE_EDITOR:
      return {
        ...state,
        isOpenedEditor: !state.isOpenedEditor
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
