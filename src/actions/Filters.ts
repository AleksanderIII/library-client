import { Dispatch } from 'redux';
import { FiltersActions } from '../constants';
import { IAppState, ICountable } from '../models';

export const getFiltersData = () => {
    return (dispatch: Dispatch<IAppState>, getState: () => IAppState) => {
        const state = getState();
        const dataType = state.view.dataType;
        let obj: ICountable = {};
        const countries = state.view.data[`${dataType}`].map(elem => elem.country);
        countries.forEach(elem => obj[elem] = '');
        const uniqueCountries = Object.keys(obj);

        const centures = state.view.data[`${dataType}`].map(elem => elem.date / 100 ? Math.ceil(elem.date / 100) : '-');
        obj = {};
        centures.forEach(elem => obj[elem] = '');
        const uniqueCentures = Object.keys(obj);

        dispatch({
            type: FiltersActions.GET_FILTERS_DATA,
            countries: ['Все'].concat(uniqueCountries),
            centuries: ['Все'].concat(uniqueCentures),
        });
    };
};

export const updateValue = (name: string, value: string) => {
    return {
        type: FiltersActions.UPDATE_VALUE,
        name,
        value
    };
};
