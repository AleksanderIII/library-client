import * as library from 'countries-list';
import { continents } from '../constants';
import { ICountryData } from '../models';

class CountriesLibrary {
  private static countries: ICountryData = library.countries;

  public static getCodeByName(name: string): string {
    const code = Object.keys(this.countries).filter(countryCode => {
      if (this.countries[`${countryCode}`].name === name) {
        return countryCode;
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
    return Object.keys(this.countries).map(countryCode => {
      if (this.countries[countryCode].continent === continentCode) {
        return this.countries[countryCode].name;
      }
    }).filter(country => country !== undefined);
  }

}

export default CountriesLibrary;
