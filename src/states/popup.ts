import { IPopupState } from '../models';

export default function getInitialPopupState(): IPopupState {
    return {
        isShown: false,
        container: {
            header: '',
            content: '',
            footer: ''
        }
    };
}
