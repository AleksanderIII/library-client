import { IMoneyData } from '../core/data';

export interface IGridProps {
    data: IMoneyData[];
    countryFilter?: string;
    centuryFilter?: string;
}
