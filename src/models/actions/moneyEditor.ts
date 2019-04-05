import { MoneyEditorActions } from '../../constants';
import { IMoneyEditorComponentProps } from '../../models';

export type MoneyEditorActionTypes = IPostMoneyDataRequest |
    IChangeOption;

export interface IPostMoneyDataRequest {
    type: MoneyEditorActions.POST_MONEY_DATA;
    payload: IMoneyEditorComponentProps;
}

export interface IChangeOption {
    type: MoneyEditorActions.CHANGE_OPTION;
    value: string;
    optionName: string;
}
