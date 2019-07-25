import { IFiltersState } from '../models';

export default function getInitialFiltersState(): IFiltersState {
    return {
        country: {
            options: [],
            selected: ''
        },
        century: {
            options: [],
            selected: ''
        }
    };
}
