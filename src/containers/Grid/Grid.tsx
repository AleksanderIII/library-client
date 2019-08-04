import * as React from 'react';

import { GridSection } from '../../components';
import { IGridProps, IMoneyData, ICardsByCountry, IIterable } from '../../models';
import { Strings } from '../../constants';
import { sortSimpleStrings } from '../../utils';

class Grid extends React.Component<IGridProps> {
  private getDataByCountries = (data: IMoneyData[], targetCountry: string) => {
    const result: ICardsByCountry = {};
    const Obj: IIterable = {};
    data.forEach(element => {
      if (element.country) {
        Obj[element.country] = true;
      }
    });
    let countriesList;
    if (targetCountry !== 'Все') {
      countriesList = [`${targetCountry}`];
    } else {
      countriesList = Object.keys(Obj);
    }

    countriesList.forEach(element => {
      result[element] = data.filter(elementData => {
        if (element === elementData.country) {
          return {
            _id: elementData._id,
            value: elementData.value,
            frontImageUrl: elementData.frontImageUrl,
            backImageUrl: elementData.backImageUrl,
            date: elementData.date,
            code: elementData.code,
          };
        }
      });
    });
    return result;
  }

  public render(): JSX.Element {
    const { data, centuryFilter, countryFilter } = this.props;
    let countriesData: ICardsByCountry;
    let countryNames;
    if (data && data.length) {
      let viewMoneyData = data;
      if (centuryFilter !== 'Все') {
        viewMoneyData = viewMoneyData.filter(elem => `${Math.ceil(elem.date / 100)}` === centuryFilter);
      }
      countriesData = this.getDataByCountries(viewMoneyData, countryFilter || '');
      countryNames = sortSimpleStrings(Object.keys(countriesData));
    }
    return (
      <div className='grid'>
        {
          countryNames ?
            countryNames.map((countryName, index) =>
              < GridSection key={`${countryName}-${index}`} countryName={countryName} countryData={countriesData[countryName]} />)
            : <div>{Strings[`NO_CONTINENT_DATA`]}</div>
        }
      </div>
    );
  }
}
export default Grid;
