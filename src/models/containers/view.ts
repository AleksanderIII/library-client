import { IMoneyData } from '../core/data';

export interface IViewProps {
    data: {
        [key: string]: IMoneyData[]
        cash: IMoneyData[],
        coins: IMoneyData[]
    };
    isLoading: boolean;
    dataType: string;
    continent: string;
}