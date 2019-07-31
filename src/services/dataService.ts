import { IMoneyData, IMoneyEditorComponentProps } from '../models';
const Configs = require('../config.json');

class DataService {
    public static getData(continent?: string): Promise<IMoneyData[]> {
        const params = continent ? continent : 'money';
        return fetch(`${Configs.dataCloud}/${params}`)
            .then(res => res.json());
    }

    public static postData(moneyData: IMoneyEditorComponentProps): Promise<void> {
        const params = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(moneyData)
        };
        return fetch(`${Configs.dataCloud}/money`, params)
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    public static removeCard(id: string): Promise<IMoneyData[]> {
        const params = {
            method: 'DELETE'
        };
        return fetch(`${Configs.dataCloud}/money/${id}`, params)
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
        return fetch(`${Configs.dataCloud}/money/${id}`, params)
            .then(data => data.json())
            .catch(error => console.log(error));
    }

}

export default DataService;
