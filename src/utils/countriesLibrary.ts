import * as library from 'countries-list';
import { continents } from '../constants';
import { ICountryData } from '../models';

class CountriesLibrary {
  public static getCodeByRusName(name: string): string {
    const countriesData: ICountryData = library.countries;
    const countries = Object.keys(countriesData);
    const code = countries.filter(elem => {
      if (countriesData[`${elem}`].name === name) {
        return elem;
      }
    })[0];
    return code;
  }

  private static getConteinentCode = (continent: string): string => {
    switch (continent) {
      case continents.africa: return 'AF';
      case continents.europe: return 'EU';
      case continents.australia: return 'OC';
      case continents.asia: return 'AS';
      case continents.southAmerica: return 'SA';
      case continents.northAmerica: return 'NA';
      default: return 'AF';
    }
  }

  public static getCountriesByContinent(continent: string): string[] {
    const continentCode = this.getConteinentCode(continent);
    const countriesData: ICountryData = library.countries;
    return Object.keys(countriesData).map(countryCode => {
      if (countriesData[countryCode].continent === continentCode) {
        return countriesData[countryCode].name;
      }
    }).filter(country => country !== undefined);
  }

}
export default CountriesLibrary;
