import { Dispatch } from 'redux';
import { IAppState, IMoneyData, IPopup } from '../models';
import { MoneyDataService } from '../services';
import { CardDetailsActions } from '../constants';
import { PopupActions, ViewActions } from '.';

export const openCardDetails = (container: IPopup) => {
    return (dispatch: Dispatch<IAppState>) => {
        dispatch({
            type: CardDetailsActions.OPEN_CARD_DETAILS
        });
        dispatch(PopupActions.show(container));
    };
};

export const getCardDataRequest = (id: string) => {
    return (dispatch: Dispatch<IAppState>) => {
        dispatch({
            type: CardDetailsActions.GET_CARD_DETAILS_REQUEST
        });
        MoneyDataService.getCardData(id)
            .then(data => dispatch(cardDataSuccess(data)))
            .catch(error => {
                dispatch(CardDataFailedRequest());
                console.log(error);
            });
    };
};

export const cardDataSuccess = (data: IMoneyData[]) => {
    return {
        data,
        type: CardDetailsActions.GET_CARD_DETAILS_SUCCESS
    };
};

export const CardDataFailedRequest = () => {
    return {
        type: CardDetailsActions.GET_CARD_DETAILS_FAILURE
    };
};

export const updateValue = (fieldName: string, value: string) => {
    return {
        type: CardDetailsActions.UPDATE_CARD_FIELDS,
        fieldName,
        value
    };
};

export const publishUpdates = () => {
    return (dispatch: Dispatch<IAppState>, getState: () => IAppState) => {
        const state = getState();
        dispatch({
            type: CardDetailsActions.PUBLISH_CARD_UPDATES
        });
        MoneyDataService.postCardData(state.cardDetails.data)
            .then(() => dispatch(PopupActions.hide()))
            .then(() => dispatch(ViewActions.getViewDataRequest()))
            .catch(error => console.log(error));
    };
};
