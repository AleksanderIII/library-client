import { IMoneyEditorState, Editor } from '../models';
import { continents } from '../constants';

export default function getInitialMoneyEditorState(): IMoneyEditorState {
    return {
        continent: continents.africa,
        country: 'Angola',
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
