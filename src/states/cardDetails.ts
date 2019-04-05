import { ICardDetailsState } from '../models';

export default function getInitialCardDetailsState(): ICardDetailsState {
    return {
        data: {
            _id: '',
            continent: '',
            country: '',
            value: null,
            date: null,
            frontImageUrl: '',
            backImageUrl: '',
        },
        isLoading: false,
    };
}
