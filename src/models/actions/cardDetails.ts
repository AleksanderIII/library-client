import { CardDetailsActions } from '../../constants';
import { IMoneyData } from '../core';

export type CardDetailsActionTypes = IGetCardDetailsRequestAction
    | IGetCardDetailsSuccessfullyAction
    | IGetCardDetailsFailureAction
    | IUpdateValueAction;

export interface IGetCardDetailsRequestAction {
    type: CardDetailsActions.GET_CARD_DETAILS_REQUEST;
}

export interface IGetCardDetailsSuccessfullyAction {
    type: CardDetailsActions.GET_CARD_DETAILS_SUCCESS;
    data: IMoneyData;
}

export interface IGetCardDetailsFailureAction {
    type: CardDetailsActions.GET_CARD_DETAILS_FAILURE;
}

export interface IUpdateValueAction {
    type: CardDetailsActions.UPDATE_CARD_FIELDS;
    fieldName: string;
    value: string;
}
