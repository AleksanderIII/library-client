export interface IImageLoaderProps {
    name: string;
    comment: string;
    getValue(name: string, value: string): void;
}

export interface IImageLoaderState{
    isImageLoaded: boolean;
}
