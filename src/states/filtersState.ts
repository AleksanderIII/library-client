import { IFiltersState, Filters } from '../models';

export default function getInitialFiltersState(): IFiltersState {
    return {
        data: {
            country: {
                options: [],
                selected: Filters.Options.COUNTRY.ALL
            },
            century: {
                options: [],
                selected: Filters.Options.COUNTRY.ALL
            }
        }
    };
}
