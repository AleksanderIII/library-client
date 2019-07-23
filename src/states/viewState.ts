import { IViewState } from '../models';

export default function getInitialViewState(): IViewState {
    return {
        isOpenedEditor: false,
    };
}
