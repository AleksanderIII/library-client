import { Dispatch } from 'redux';
import { MoneyEditorActions } from '../constants';
import { IAppState } from '../models';
import DataService from '../services/dataService';

export const postMoneyData = () => {
    return (dispatch: Dispatch<IAppState>, getState: () => IAppState) => {
        const state = getState();
        const moneyData = state.moneyEditor;
        dispatch({
            type: MoneyEditorActions.POST_MONEY_DATA
        });
        DataService.postData(moneyData).then(data => { console.log(data); });
    };
};

export const changeOption = (optionName: string, value: string) => {
    return (dispatch: Dispatch<IAppState>) => {
        dispatch({
            value,
            optionName,
            type: MoneyEditorActions.CHANGE_OPTION
        });
    };
};
