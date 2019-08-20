import { IMoneyData, Tabs } from '../../models/core';
export interface IGridSectionState {
    top: number;
}
export interface IGridProps {
    data: IMoneyData[];
    countryFilter?: string;
    centuryFilter?: string;
    dataType: Tabs.Money;
}
export interface IGridSectionProps {
    countryName: string;
    countryData: IMoneyData[];
}
