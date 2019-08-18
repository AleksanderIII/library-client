import { IMoneyData, Editor } from '../../models/core';

export interface IGridProps {
    data: IMoneyData[];
    countryFilter?: string;
    centuryFilter?: string;
    dataType: Editor.Selectors.Options.TYPE;
}
