import { IMoneyData } from '../../models/core/data';

export interface IMainViewProps {
    data: {
        [key: string]: IMoneyData[];
        cash: IMoneyData[];
        coins: IMoneyData[];
    };
    countryFilter?: string;
    centuryFilter?: string;
    dataType: string;
}
