import { IMoneyEditorState, Editor } from '../models';
import { continents } from '../constants';

export default function getInitialMoneyEditorState(): IMoneyEditorState {
    return {
        continent: continents.africa,
        country: 'Angola',
        date: '2000',
        type: Editor.Selectors.Options.TYPE.COINS,
        value: '1',
        frontImageUrl: '-',
        backImageUrl: '-',
        material: '-',
        form: '-',
        code: 'AO',
    };
}
