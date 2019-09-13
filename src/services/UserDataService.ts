import { AppConfig } from '../configs';
import { IUserDataState } from '../models';

class UserDataService {
    public static publishUserData = (userData: IUserDataState): Promise<void> => {
        const options = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(userData)
        };
        return fetch(`${AppConfig.services.userData.url}`, options)
            .then(console.log)
            .catch(error => console.log(error));
    }
}

export default UserDataService;
