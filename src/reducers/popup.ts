import getInitialPopupState from '../states/popup';
import { IPopupState, PopupActionTypes } from '../models';
import { PopupActions } from '../constants';

export default function popup(state: IPopupState = getInitialPopupState(), action: PopupActionTypes): IPopupState {
    switch (action.type) {
        case PopupActions.SHOW:
            return {
                ...state,
                isShown: true,
                container: action.container
            };
        case PopupActions.HIDE:
            return {
                ...state,
                isShown: false
            };
        default:
            return state;
    }
}
