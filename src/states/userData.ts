import { IUserDataState } from '../models';

export default function getInitialUserDataState(): IUserDataState {
    return {
        name: '',
        password: ''
    };
}
