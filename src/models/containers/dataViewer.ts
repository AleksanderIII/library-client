import { IMoneyData } from '../core/data';
import { Tabs } from '../core';

export interface IDataViewerProps {
    data: {
        [key: string]: IMoneyData[];
        [Tabs.Money.CASH]: IMoneyData[];
        [Tabs.Money.COINS]: IMoneyData[];
    };
    countryFilter?: string;
    centuryFilter?: string;
    dataType: Tabs.Money;
    isLoading: boolean;
}

export interface IDataViewerOwnProps{
    continent: string;
}
