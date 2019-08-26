import { IMoneyData, IMoneyEditorState } from '../models';
import { AppConfig } from '../configs';

class DataService {
    public static getData(continent?: string): Promise<IMoneyData[]> {
        const params = continent ? continent : 'money';
        return fetch(`${AppConfig.services.moneyData.url}/${params}`)
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
        return fetch(`${AppConfig.services.moneyData.url}/money`, params)
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    public static removeCard(id: string): Promise<IMoneyData[]> {
        const params = {
            method: 'DELETE'
        };
        return fetch(`${AppConfig.services.moneyData.url}/money/${id}`, params)
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
        return fetch(`${AppConfig.services.moneyData.url}/money/${id}`, params)
            .then(data => data.json())
            .catch(error => console.log(error));
    }

}

export default DataService;
