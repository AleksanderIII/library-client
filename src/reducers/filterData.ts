import { FiltersActions } from '../constants';
import { IFiltersState, FiltersActionTypes } from '../models';
import getInitialFiltersState from '../states/filtersState';

export default function userData(state: IFiltersState = getInitialFiltersState(), action: FiltersActionTypes): IFiltersState {
    switch (action.type) {
        case FiltersActions.GET_FILTERS_DATA:
            return {
                ...state,
                country: {
                    options: action.countries,
                    selected: action.countries[0]
                },
                century: {
                    options: action.centuries,
                    selected: action.centuries[0]
                }
            };
        case FiltersActions.UPDATE_VALUE: {
            if (action.name === 'century') {
                return {
                    ...state,
                    century: {
                        ...state.century, selected: action.value
                    },
                };
            }
            if (action.name === 'country') {
                return {
                    ...state,
                    country: {
                        ...state.country, selected: action.value
                    },
                };
            }
            return state;
        }
        default:
            return state;
    }
}
