import { UserDataActions } from '../constants';
import { UserDataActionsTypes, IUserDataState } from '../models';
import getInitialUserDataState from '../states/userData';

export default function userData(state: IUserDataState = getInitialUserDataState(), action: UserDataActionsTypes): IUserDataState {
    switch (action.type) {
        case UserDataActions.POST_USER_DATA:
            return state;
        case UserDataActions.CHANGE_VALUE:
            const newState = state;
            newState[action.name] = action.value;
            return newState;
        case UserDataActions.CLEAR_USER_DATA:
            return { name: '', password: '' };
        default:
            return state;
    }
}
