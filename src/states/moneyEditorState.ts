import { IMoneyEditorComponentProps, Editor } from '../models';
import { Strings } from '../constants';

export default function getInitialMoneyEditorState(): IMoneyEditorComponentProps {
    return {
        continent: 'Африка',
        country: 'Ангола',
        date: '-',
        type: Strings[Editor.Selectors.Options.TYPE.COINS],
        value: Editor.Selectors.Options.COINSVALUES.ONE,
        frontImageUrl: '-',
        backImageUrl: '-',
        material: '-',
        form: '-',
        code: 'AO',
    };
}
