import { IFilter } from '../../models';

export interface IFilterViewProps {
    filters: {
        [key: string]: IFilter
    };
}
