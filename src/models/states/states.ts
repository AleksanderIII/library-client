import { IMoneyData } from '../core/data';
import { Tabs } from '../core';

export interface IAppState {
    appSettings: IAppSettingsState;
    view: IViewState;
    moneyEditor: IMoneyEditorState;
    cardDetails: ICardDetailsState;
    userData: IUserDataState;
    filters: IFiltersState;
    popup: IPopupState;
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
    userInfo: {
        name: string,
        isAdmin: boolean
    };
    language: {
        options: string[],
        selected: string
    };
    theme: {
        options: string[],
        selected: string
    };
}

export interface IMoneyEditorState {
    [key: string]: string;
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

export interface IMoneyEditorInternalState {
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

export interface IHeaderState {
    isOpenedSettings: boolean;
}

export interface IPopupState {
    isShown: boolean;
    container: IPopup;
}

export interface IPopup {
    header: string;
    content: JSX.Element | string;
    footer?: string;
}
