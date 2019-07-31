import DataService from './dataService';
const { json2excel } = require('js2excel');

import { IMoneyData, IExportMoneyData } from '../models';
import { sortObjectsByField } from '../utils';

class ExportService {
    //next step to upgrade https://www.npmjs.com/package/exceljs#number-formats
    public static getExcel = () => {
        DataService.getData().then(data => {
            ExportService.exportToExcel(data, 'overview');
        },
        );
    }

    private static exportToExcel = (data: IMoneyData[], name: string) => {

        const sortByCountries = (data: IExportMoneyData[]) => {
            const sortedByCountries = sortObjectsByField(data, 'country');
            return sortedByCountries;
        };

        const separateContinents = (data: IExportMoneyData[]) => {
            const separatedData: IExportMoneyData[] = [];
            const blankRow = {
                continent: '',
                country: '',
                value: '',
                material: '',
                form: '',
                type: '',
            };
            data.forEach((row, rowIndex) => {
                if (data[rowIndex - 1] && row.continent !== data[rowIndex - 1].continent) {
                    separatedData.push(blankRow);
                    separatedData.push({ ...blankRow, continent: row.continent });
                    separatedData.push({ ...blankRow, country: row.country });
                } else if (data[rowIndex - 1] && row.country !== data[rowIndex - 1].country) {
                    separatedData.push(blankRow);
                    separatedData.push({ ...blankRow, country: row.country });
                } else if (rowIndex === 0) {
                    separatedData.push({ ...blankRow, continent: row.continent });
                    separatedData.push({ ...blankRow, country: row.country });
                }
                separatedData.push({...row, continent: ''});
            });
            return separatedData;
        };

        const usefulData = data.map(dataRow => {
            const { country, type, continent, value, form, material } = dataRow;
            return {
                country,
                type,
                continent,
                value,
                form,
                material
            };
        });

        const sortedByContinentsData = separateContinents(sortByCountries(usefulData));

        try {
            json2excel({
                data: sortedByContinentsData,
                name,
                formateDate: 'dd/mm/yyyy'
            });
        } catch (e) {
            console.log(e);
        }
    }

}

export default ExportService;
