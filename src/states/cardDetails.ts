import { ICardDetailsState } from '../models';

export default function getInitialCardDetailsState(): ICardDetailsState {
    return {
        data: {
            _id: '',
            continent: '',
            country: '',
            value: '',
            date: undefined,
            frontImageUrl: '',
            backImageUrl: '',
        },
        isLoading: false,
    };
}
