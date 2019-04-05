import { UserDataActions } from '../../constants';
import { IUserDataState } from '../../models';

export type UserDataActionsTypes = IPostUserData
    | IChangeValue
    | IClearUserData;

export interface IPostUserData {
    type: UserDataActions.POST_USER_DATA;
}

export interface IChangeValue {
    type: UserDataActions.CHANGE_VALUE;
    value: string;
    name: string;
}

export interface IClearUserData {
    type: UserDataActions.CLEAR_USER_DATA;
}
