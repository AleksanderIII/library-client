import { IMoneyData } from '../../models';

export interface IGridSectionProps {
    countryName: string;
    countryData: IMoneyData[];
}

export interface IGridSectionState {
    top: number;
}
