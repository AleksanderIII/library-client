import { IMoneyEditorComponentProps, Editor } from '../models';
import { Strings } from '../constants';

export default function getInitialMoneyEditorState(): IMoneyEditorComponentProps {
    return {
        continent: 'Африка',
        country: 'Ангола',
        date: '-',
        type: Strings[Editor.Filters.Options.TYPE.COINS],
        value: Editor.Filters.Options.COINSVALUES.ONE,
        frontImageUrl: '-',
        backImageUrl: '-',
        material: '-',
        form: '-',
        code: 'AO',
    };
}
