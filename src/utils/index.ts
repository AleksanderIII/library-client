import { IExportMoneyData } from '../models';

export function sortStrings(collection: string[]): string[] {
    return collection.sort((a, b) => {
        if (a === 'Все') {
            return -1;
        }
        if (b === 'Все') {
            return 1;
        }
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });
}

export const sortObjectsByField = (data: IExportMoneyData[], fieldName: string) => {
    return data.sort((a, b) => {
        const firstValue = a[`${fieldName}`];
        const secondValue = b[`${fieldName}`];
        let x;
        let y;
        if (typeof firstValue === 'string' && typeof secondValue === 'string') {
            x = firstValue.toLowerCase();
            y = secondValue.toLowerCase();
        } else {
            x = firstValue;
            y = secondValue;
        }
        return x < y ? -1 : x > y ? 1 : 0;
    });
};
