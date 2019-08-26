import * as React from 'react';

import GridSection from './GridSection';
import { Strings } from '../../constants';
import { IGridProps, IMoneyData, ICardsByCountry, Filters } from '../../models';
import { sortSimpleStrings } from '../../utils';

class Grid extends React.Component<IGridProps> {

  private getDataByCountries = (data: IMoneyData[], targetCountry: string): ICardsByCountry => {
    const cardsByCountries: ICardsByCountry = {};
    data.forEach(dataElement => {
      if (!cardsByCountries[dataElement.country]) {
        cardsByCountries[dataElement.country] = [];
      }
      cardsByCountries[dataElement.country].push({
        _id: dataElement._id,
        value: dataElement.value,
        frontImageUrl: dataElement.frontImageUrl,
        backImageUrl: dataElement.backImageUrl,
        date: dataElement.date,
        code: dataElement.code,
        continent: dataElement.continent,
        country: dataElement.country,
      });
    });

    if (targetCountry === Filters.Options.COUNTRY.ALL) {
      return cardsByCountries;
    }
    return { [targetCountry]: cardsByCountries[targetCountry] };
  }

  private filterDataByCentury = (data: IMoneyData[], century: string) => {
    if (century !== Filters.Options.CENTURY.ALL) {
      return data.filter(dataElement => `${Math.ceil(dataElement.date / 100)}` === century);
    }
    return data;
  }

  public render(): JSX.Element {
    const { data, centuryFilter, countryFilter, dataType } = this.props;
    let dataByCountries: ICardsByCountry;
    let orderedData;
    if (data && data.length) {
      dataByCountries = this.getDataByCountries(this.filterDataByCentury(data, centuryFilter), countryFilter);
      orderedData = sortSimpleStrings(Object.keys(dataByCountries));
    }

    const noDataMessage = Strings[`NO_CONTINENT_DATA`].replace('{{dataType}}', Strings[dataType.toUpperCase()]);
    return (
      <div className='grid'>
        {
          orderedData ?
            orderedData.map((countryName, index) =>
              <GridSection
                key={`${countryName}-${index}`}
                countryName={countryName}
                countryData={dataByCountries[countryName]}
              />)
            : <div>
              {noDataMessage}
            </div>
        }
      </div>
    );
  }
}
export default Grid;
