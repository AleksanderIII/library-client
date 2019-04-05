import { CardDetailsActions } from '../../constants';
import { IMoneyData } from '../core';

export type CardDetailsActionTypes = IGetCardDetailsRequest
    | IGetCardDetailsSuccessfully
    | IGetCardDetailsFailure;

export interface IGetCardDetailsRequest {
    type: CardDetailsActions.GET_CARD_DETAILS_REQUEST;
}

export interface IGetCardDetailsSuccessfully {
    type: CardDetailsActions.GET_CARD_DETAILS_SUCCESS;
    data: IMoneyData;
}

export interface IGetCardDetailsFailure {
    type: CardDetailsActions.GET_CARD_DETAILS_FAILURE;
}
