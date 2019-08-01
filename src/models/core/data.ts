export interface IMoneyData {
    [key: string]: string | number | undefined;
    _id: string;
    continent: string;
    country: string;
    value: string | number;
    date?: number;
    frontImageUrl: string;
    backImageUrl: string;
    material?: string;
    form?: string;
    addInformation?: string;
    code?: string;
    type?: string;
}

export interface ICardsByCountry {
    [key: string]: IMoneyData[];
}

export interface IIterable {
    [key: string]: boolean | string | number;
}

export interface IExportMoneyData {
    [key: string]: string | number | undefined;
    continent: string;
    country: string;
    value: string | number;
    material?: string;
    form?: string;
    type?: string;
}
