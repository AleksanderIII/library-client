import { IFiltersState } from '../models';

export default function getInitialFiltersState(): IFiltersState {
    return {
        data: {
            country: {
                options: [],
                selected: ''
            },
            century: {
                options: [],
                selected: ''
            }
        }
    };
}
