import { Dispatch } from 'redux';
import { ViewActions } from '../constants';
import { IAppState, IMoneyData } from '../models';
import DataService from '../services/dataService';
import { FiltersActions } from '../actions';

export const getViewDataRequest = () => {
  return (dispatch: Dispatch<IAppState>) => {
    dispatch({
      type: ViewActions.GET_MONEY_REQUEST
    });
    DataService.getData().then(data => {
      dispatch(dataRecieved(data));
    });
  };
};

export const getViewDataByContinentRequest = (continent: string) => {
  return (dispatch: Dispatch<IAppState>) => {
    dispatch({
      type: ViewActions.GET_MONEY_BY_CONTINENT_REQUEST
    });
    DataService.getData(continent).then(data => {
      dispatch(dataRecieved(data));
    });
  };
};

export const removeCardRequest = (id: string) => {
  return (dispatch: Dispatch<IAppState>) => {
    dispatch({
      type: ViewActions.REMOVE_CARD_REQUEST
    });
    DataService.removeCard(id).then(data => {
      dispatch(dataRecieved(data));
    });
  };
};

export const dataRecieved = (data: IMoneyData[]) => {
  const cash = data.filter(elem => elem.type === 'Банкноты');
  const coins = data.filter(elem => elem.type === 'Монеты');
  return (dispatch: Dispatch<IAppState>) => {
    dispatch({
      coins,
      cash,
      type: ViewActions.DATA_RECIEVED_SUCCESSFULLY
    });
    dispatch(FiltersActions.getFiltersData());
  };
};

export const toggleEditor = () => {
  return (dispatch: Dispatch<IAppState>) => {
    dispatch({
      type: ViewActions.TOGGLE_EDITOR
    });
  };
};

export const setMoneyType = (value: string) => {
  return (dispatch: Dispatch<IAppState>) => {
    dispatch({
      type: ViewActions.SET_MONEY_TYPE,
      value
    });
    dispatch(FiltersActions.getFiltersData());
  };
};

export const setContinent = (value: string) => {
  return (dispatch: Dispatch<IAppState>) => {
    dispatch({
      type: ViewActions.SET_CONTINENT,
      value
    });
  };
};
