import { IMoneyData } from '../core/data';
import { Editor } from '../core';

export interface IDataViewerProps {
    data: {
        [key: string]: IMoneyData[];
        [Editor.Selectors.Options.TYPE.CASH]: IMoneyData[];
        [Editor.Selectors.Options.TYPE.COINS]: IMoneyData[];
    };
    countryFilter?: string;
    centuryFilter?: string;
    dataType: Editor.Selectors.Options.TYPE;
    isLoading: boolean;
}

export interface IDataViewerOwnProps{
    continent: string;
}
