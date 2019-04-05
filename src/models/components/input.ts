export interface IInputProps {
    placeholder?: string;
    maxLength?: number;
    getValue(name: string, value: string): void;
    name: string;
}

export interface IInputState {
    value?: string;
}
