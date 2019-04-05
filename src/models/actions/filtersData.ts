import { FiltersActions } from '../../constants';

export type FiltersActionTypes = IGetFiltersData
  | IUpdateValue;

export interface IGetFiltersData {
  type: FiltersActions.GET_FILTERS_DATA;
  countries: string[];
  centuries: string[];
}

export interface IUpdateValue {
  type: FiltersActions.UPDATE_VALUE;
  name: string;
  value: string;
}
