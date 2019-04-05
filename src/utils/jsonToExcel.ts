const { json2excel } = require('js2excel');
import { IMoneyData } from '../models';

export const exportToExcel = (data: IMoneyData[], name: string) => {
    try {
        json2excel({
            data,
            name,
            formateDate: new Date().getDate().toLocaleString()
        });
    } catch (e) {
        console.log(e);
    }
};
