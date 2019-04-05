import { IViewProps } from '../models';

export default function getInitialViewState(): IViewProps {
    return {
        data: {
            cash: [],
            coins: []
        },
        isLoading: false,
        isOpenedEditor: false,
        dataType: 'coins',
        continent: 'continents'
    };
}
