import { IMoneyEditorComponentProps, Editor } from '../models';
import { Strings, continents } from '../constants';

export default function getInitialMoneyEditorState(): IMoneyEditorComponentProps {
    return {
        continent: continents.africa,
        country: 'Ангола',
        date: '-',
        type: Editor.Selectors.Options.TYPE.COINS,
        value: Editor.Selectors.Options.COINSVALUES.ONE,
        frontImageUrl: '-',
        backImageUrl: '-',
        material: '-',
        form: '-',
        code: 'AO',
    };
}
