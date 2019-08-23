import { ViewActions } from '../../constants';
import { IMoneyData } from '../../models';
import { Tabs } from '../core';

export type ViewActionTypes = IGetMoneyRequest
    | IGetDataSuccessfully
    | IOpenEditor
    | IGetMoneyByContinent
    | IRemoveCard
    | ISetMoneyType
    | ISetContinent;

export interface IGetMoneyRequest {
    type: ViewActions.GET_MONEY_REQUEST;
    isLoading: boolean;
}

export interface IGetDataSuccessfully {
    type: ViewActions.DATA_RECIEVED_SUCCESSFULLY;
    cash: IMoneyData[];
    coins: IMoneyData[];
}

export interface IOpenEditor {
    type: ViewActions.OPEN_EDITOR;
}

export interface IRemoveCard {
    type: ViewActions.REMOVE_CARD_REQUEST;
}

export interface IGetMoneyByContinent {
    type: ViewActions.GET_MONEY_BY_CONTINENT_REQUEST;
}

export interface ISetMoneyType {
    type: ViewActions.SET_MONEY_TYPE;
    value: Tabs.Money;
}

export interface ISetContinent {
    type: ViewActions.SET_CONTINENT;
    value: string;
}
