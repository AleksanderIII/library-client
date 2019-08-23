import { PopupActions } from '../../constants';
import { IPopup } from '../states/states';

export type PopupActionTypes = IShowPopupAction
    | IHidePopupAction;

export interface IShowPopupAction {
    type: PopupActions.SHOW;
    container: IPopup;
}

export interface IHidePopupAction {
    type: PopupActions.HIDE;
}
