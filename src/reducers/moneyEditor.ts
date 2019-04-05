import { MoneyEditorActions } from '../constants';
import { IMoneyEditorComponentProps, MoneyEditorActionTypes } from '../models';
import getInitialState from '../states/moneyEditorState';

export default function moneyEditor(state: IMoneyEditorComponentProps = getInitialState(), action: MoneyEditorActionTypes): IMoneyEditorComponentProps {
    switch (action.type) {
        case MoneyEditorActions.POST_MONEY_DATA:
            return {
                ...state
            };
        case MoneyEditorActions.CHANGE_OPTION:
            return {
                ...state,
                [action.optionName]: action.value
            };
        default:
            return state;
    }
}
