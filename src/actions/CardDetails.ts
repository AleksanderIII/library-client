import { Dispatch } from 'redux';
import { IAppState, IMoneyData } from '../models';
import DataService from '../services/dataService';
import { CardDetailsActions } from '../constants';

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
