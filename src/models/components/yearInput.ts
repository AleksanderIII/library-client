import { Editor } from '../../models';

export interface IYearInputProps {
    name: Editor.Selectors.Names;
    defaultValue: string;
    getValue(name: string, value: string): void;
}

export interface IYearInputState {
    currentYear: number[];
}
