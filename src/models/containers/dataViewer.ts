import { IMoneyData } from '../core/data';

export interface IDataViewerState {
    data: {
        [key: string]: IMoneyData[];
        cash: IMoneyData[];
        coins: IMoneyData[];
    };
    countryFilter?: string;
    centuryFilter?: string;
    dataType: string;
    isLoading: boolean;
    continent: string;
}
