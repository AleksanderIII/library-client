export interface ISelectProps {
    name: string;
    options?: string[];
    centralAlign: boolean;
    defaultValue: string;
    propName: string;
    selectValue?(selected: string): void;
    getValue(name: string, value: string): void;
}

export interface ISelectState {
    selected?: string;
    opened: boolean;
}
