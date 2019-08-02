import { IViewState, Editor } from '../models';

export default function getInitialViewState(): IViewState {
    return {
        isOpenedEditor: false,
        isLoading: false,
        dataType: Editor.Selectors.Options.TYPE.COINS,
        continent: 'continents',
        data: {
            [Editor.Selectors.Options.TYPE.CASH]: [],
            [Editor.Selectors.Options.TYPE.COINS]: []
        }
    };
}
