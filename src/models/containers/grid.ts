import { IMoneyData, Editor } from '../../models/core';
export interface IGridSectionState {
    top: number;
}
export interface IGridProps {
    data: IMoneyData[];
    countryFilter?: string;
    centuryFilter?: string;
    dataType: Editor.Selectors.Options.TYPE;
}
export interface IGridSectionProps {
    countryName: string;
    countryData: IMoneyData[];
}
