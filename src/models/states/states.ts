import { IMoneyData } from '../core/data';

export interface IAppState {
    appSettings: IAppSettingsState;
    view: IViewState;
    moneyEditor: IMoneyEditorComponentProps;
    cardDetails: ICardDetailsState;
    userData: IUserDataState;
    filterData: IFiltersState;
}

export interface IViewState{
    isOpenedEditor: boolean;
}

export interface IAppSettingsState {
    language: string;
    isOpen: boolean;
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
    country: {
        options: string[],
        selected: string
    };
    century: {
        options: string[],
        selected: string
    };
}

export interface IHeaderProps {
    continent?: string;
    language: string;
    isOpen: boolean;
    theme: string;
}
