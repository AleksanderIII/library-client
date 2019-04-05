import { CardDetailsActions } from '../constants';
import { ICardDetailsState, CardDetailsActionTypes } from '../models';
import getInitialState from '../states/cardDetails';

export default function view(state: ICardDetailsState = getInitialState(), action: CardDetailsActionTypes): ICardDetailsState {
  switch (action.type) {
    case CardDetailsActions.GET_CARD_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case CardDetailsActions.GET_CARD_DETAILS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };
    case CardDetailsActions.GET_CARD_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
