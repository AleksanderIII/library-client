import { Dispatch } from 'redux';
import { IAppState, IMoneyData, IPopup } from '../models';
import DataService from '../services/dataService';
import { CardDetailsActions } from '../constants';
import { PopupActions } from '.';

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
        DataService.getCardData(id).then(data => {
            dispatch(cardDataSuccess(data));
        })
            .catch(e => dispatch(CardDataFailedRequest()));
    };
};

export const cardDataSuccess = (data: IMoneyData[]) => {
    return (dispatch: Dispatch<IAppState>) => {
        dispatch({
            data,
            type: CardDetailsActions.GET_CARD_DETAILS_SUCCESS
        });
    };
};

export const CardDataFailedRequest = () => {
    return (dispatch: Dispatch<IAppState>) => {
        dispatch({
            type: CardDetailsActions.GET_CARD_DETAILS_FAILURE
        });
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
        DataService.postCardData(state.cardDetails.data)
            .then(() => dispatch(PopupActions.hide()))
            .catch(error => console.log(error));
    };
};
