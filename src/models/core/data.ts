export interface IMoneyData {
    _id: string;
    continent?: string;
    country?: string;
    value?: number;
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
    [key: string]: ICardData[];
}

export interface ICardData {
    [key: string]: string | number;
    _id: string;
    value: number;
    frontImageUrl: string;
    backImageUrl: string;
    date: number;
    material?: string;
    form?: string;
    addInformation?: string;
    code?: string;
}

export interface IObj {
    [key: string]: boolean | string | number;
}
