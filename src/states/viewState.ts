import { IViewState, Tabs } from '../models';
import { continents } from '../constants';

export default function getInitialViewState(): IViewState {
    return {
        isOpenedEditor: false,
        isLoading: false,
        dataType: Tabs.Money.COINS,
        continent: '',
        data: {
            [Tabs.Money.CASH]: [],
            [Tabs.Money.COINS]: []
        }
    };
}
