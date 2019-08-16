export interface ICardProps {
    _id: string;
    country?: string;
    value: number | string;
    frontImageUrl: string;
    backImageUrl: string;
    removeCard(id: string): void;
    date?: number;
}

export interface ICardState {
    isFrontSide: boolean;
}
