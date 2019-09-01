import { Dispatch } from 'redux';
import { MoneyEditorActions } from '../constants';
import { IAppState } from '../models';
import DataService from '../services/dataService';
import { ViewActions } from '../actions';

export const postMoneyData = () => {
    return (dispatch: Dispatch<IAppState>, getState: () => IAppState) => {
        const state = getState();
        const moneyData = state.moneyEditor;
        dispatch({
            type: MoneyEditorActions.POST_MONEY_DATA
        });
        DataService.postData(moneyData)
            .then(data => {
                dispatch(resetData());
                if (state.view.continent === 'ALL') {
                    dispatch(ViewActions.getViewDataRequest());
                } else {
                    dispatch(ViewActions.getViewDataByContinentRequest(state.view.continent));
                }
                console.log(data);
            });
    };
};

export const changeOption = (optionName: string, value: string) => {
    return {
        type: MoneyEditorActions.CHANGE_OPTION,
        value,
        optionName,
    };
};

export const resetData = () => {
    return {
        type: MoneyEditorActions.RESET_DATA,
    };
};
