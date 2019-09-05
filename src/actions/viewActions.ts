import * as React from 'react';
import { Dispatch } from 'redux';
import { ViewActions, Strings } from '../constants';
import { IAppState, IMoneyData, IPopup, SiteComponents, Tabs } from '../models';
import DataService from '../services/dataService';
import { FiltersActions, PopupActions } from '.';
import { MoneyEditor } from '../containers';

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
    })
      .catch(console.log);
  };
};

export const removeCardRequest = (id: string) => {
  return (dispatch: Dispatch<IAppState>) => {
    dispatch({
      type: ViewActions.REMOVE_CARD_REQUEST
    });
    DataService.removeCard(id).then(data => {
      dispatch(dataRecieved(data));
    })
      .catch(console.log);
  };
};

export const dataRecieved = (data: IMoneyData[]) => {
  const cash = data.filter(element => element.type === Tabs.Money.CASH);
  const coins = data.filter(element => element.type === Tabs.Money.COINS);
  return (dispatch: Dispatch<IAppState>) => {
    dispatch({
      coins,
      cash,
      type: ViewActions.DATA_RECIEVED_SUCCESSFULLY
    });
    dispatch(FiltersActions.getFiltersData());
  };
};

export const openEditor = () => {
  return (dispatch: Dispatch<IAppState>) => {
    dispatch({
      type: ViewActions.OPEN_EDITOR
    });
    const content = React.createElement(MoneyEditor);
    const popupContainer: IPopup = {
      header: Strings[SiteComponents.Names.EDITOR],
      content
    };
    dispatch(PopupActions.show(popupContainer));
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
  return {
    type: ViewActions.SET_CONTINENT,
    value
  };
};
