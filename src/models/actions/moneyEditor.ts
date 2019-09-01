import { MoneyEditorActions } from '../../constants';
import { IMoneyEditorComponentProps } from '../../models';

export type MoneyEditorActionTypes =
    IPostMoneyDataRequestAction |
    IChangeOptionAction |
    IResetDataAction;

export interface IPostMoneyDataRequestAction {
    type: MoneyEditorActions.POST_MONEY_DATA;
    payload: IMoneyEditorComponentProps;
}

export interface IChangeOptionAction {
    type: MoneyEditorActions.CHANGE_OPTION;
    value: string;
    optionName: string;
}

export interface IResetDataAction {
    type: MoneyEditorActions.RESET_DATA;
}
