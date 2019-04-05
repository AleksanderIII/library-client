import * as React from 'react';

import { GridSection } from '../../components';
import { IGridProps, IMoneyData, ICardsByCountry, IObj } from '../../models';
import './Grid.css';

class Grid extends React.Component<IGridProps> {
  constructor(props: IGridProps) {
    super(props);
    this.getDataByCounties = this.getDataByCounties.bind(this);
  }
  private getDataByCounties(data: IMoneyData[], targetCountry: string): ICardsByCountry {
    const result: ICardsByCountry = {};
    const Obj: IObj = {};
    data.forEach(element => Obj[element.country] = true);
    let countriesList;
    if (targetCountry !== 'Все') {
      countriesList = [`${targetCountry}`];
    } else {
      countriesList = Object.keys(Obj);
    }

    countriesList.forEach(element => {
      result[element] = data.map(elementData => {
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
      }).filter(elem => elem !== undefined);
    });
    return result;
  }

  public render(): JSX.Element {
    let countriesData: ICardsByCountry;
    let countryNames;
    if (this.props.data.length) {
      let viewMoneyData = this.props.data;
      if (this.props.centuryFilter !== 'Все') {
        viewMoneyData = viewMoneyData.filter(elem => `${Math.ceil(elem.date / 100)}` === this.props.centuryFilter);
      }
      countriesData = this.getDataByCounties(viewMoneyData, this.props.countryFilter);
      countryNames = Object.keys(countriesData).sort((a, b) => {
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        return 0;
      });
    }
    return (
      <div className='grid'>
        {
          countryNames ?
            countryNames.map((elem, index) =>
              < GridSection key={`${elem}-${index}`} countryName={elem} countryData={countriesData[elem]} />)
            : <div>Это континент не имеет информацию по странам</div>
        }
      </div>
    );
  }
}
export default Grid;
