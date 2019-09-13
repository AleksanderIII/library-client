import { IMoneyData, IMoneyEditorState, ICardDetailsState } from '../models';
import { AppConfig } from '../configs';

class MoneyDataService {
    public static getData(continent?: string): Promise<IMoneyData[]> {
        const params = continent ? continent : 'ALL';
        return fetch(`${AppConfig.services.moneyData.moneyUrl}/${params}`)
            .then(res => res.json());
    }

    public static postData(moneyData: IMoneyEditorState): Promise<void> {
        const params = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(moneyData)
        };
        return fetch(`${AppConfig.services.moneyData.cardUrl}`, params)
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    public static postCardData(data: ICardDetailsState['data']): Promise<void> {
        const params = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(data)
        };
        return fetch(`${AppConfig.services.moneyData.cardUrl}`, params)
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    public static removeCard(id: string): Promise<IMoneyData[]> {
        const params = {
            method: 'DELETE'
        };
        return fetch(`${AppConfig.services.moneyData.cardUrl}/${id}`, params)
            .then(data => data.json())
            .catch(error => console.log(error));
    }

    public static getCardData(id: string): Promise<IMoneyData[]> {
        const params = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET',
        };
        return fetch(`${AppConfig.services.moneyData.cardUrl}/${id}`, params)
            .then(data => data.json())
            .catch(error => console.log(error));
    }

}

export default MoneyDataService;
