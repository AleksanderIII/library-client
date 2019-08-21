import { IMoneyData } from '../core/data';
import { Tabs } from '../core';

export interface IAppState {
    appSettings: IAppSettingsState;
    view: IViewState;
    moneyEditor: IMoneyEditorComponentProps;
    cardDetails: ICardDetailsState;
    userData: IUserDataState;
    filters: IFiltersState;
}

export interface IViewState {
    isOpenedEditor: boolean;
    isLoading: boolean;
    dataType: Tabs.Money;
    continent: string;
    data: {
        [key: string]: IMoneyData[]
        [Tabs.Money.COINS]: IMoneyData[],
        [Tabs.Money.CASH]: IMoneyData[]
    };
}

export interface IAppSettingsState {
    language: string;
    theme: string;
}

export interface IMoneyEditorComponentProps {
    continent: string;
    country: string;
    date: string;
    type: string;
    value: string;
    frontImageUrl: string;
    backImageUrl: string;
    material: string;
    form: string;
    code: string;
}

export interface IMoneyEditorState {
    values: string[];
}

export interface ICardDetailsState {
    data: IMoneyData;
    isLoading: boolean;
}

export interface ICardDetailsComponentState {
    isActiveEdit: boolean;
}

export interface IUserDataState {
    [key: string]: string;
    name: string;
    password: string;
}

export interface IFiltersState {
    data: {
        country: IFilter,
        century: IFilter
    };
}
export interface IHeaderProps {
    appSettings: IAppSettingsState;
    continent: string;
}
export interface ITooltipState {
    isShown: boolean;
}
export interface IMapState {
    isShownTooltip: boolean;
    currentText: string;
    coordinate: {
        x: number;
        y: number;
    };
}
export interface IFilter {
    options: string[];
    selected: string;
}

export interface IHeaderState{
    isOpenedSettings: boolean;
}
