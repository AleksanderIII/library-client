import { ICardData } from '../../models';

export interface IGridSectionProps {
    countryName: string;
    countryData: ICardData[];
}

export interface IGridSectionState {
    top: number;
}
