import { PopupActions } from '../constants';
import { IPopup } from '../models';

export const show = (container: IPopup) => {
    return {
        type: PopupActions.SHOW,
        container
    };
};

export const hide = () => {
    return {
        type: PopupActions.HIDE
    };
};
