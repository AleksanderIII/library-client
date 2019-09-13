import { IExportMoneyData, ValidationTypes } from '../models';

export function sortStrings(collection: string[]): string[] {
    return collection.sort((a, b) => {
        if (a === 'ALL') {
            return -1;
        }
        if (b === 'ALL') {
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

export const sortSimpleStrings = (data: string[]) => {
    data.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });
    return data;
};

export const validateField = (data: string, type: ValidationTypes): boolean => {
    if (!data || !data.length) {
        return false;
    }
    switch (type) {
        case ValidationTypes.NAME: {
            const regExp = new RegExp(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/);
            const isValid = regExp.test(data);
            return isValid;
        }
        case ValidationTypes.PASSWORD: {
            const regExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
            const isValid = regExp.test(data);
            return isValid;
        }
        case ValidationTypes.SIMPLE_STRING: {
            const regExp = new RegExp(/^[а-яА-ЯёЁa-zA-Z]+$/i);
            const isValid = regExp.test(data);
            return isValid;
        }
    }
};
