import { IViewState } from '../models';

export default function getInitialViewState(): IViewState {
    return {
        isOpenedEditor: false,
        isLoading: false,
        dataType: 'coins',
        continent: 'continents',
        data: {
            cash: [],
            coins: []
        }
    };
}
