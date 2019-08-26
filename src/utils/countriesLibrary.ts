import * as library from 'countries-list';
import { continents } from '../constants';
const continentsRus = require('./continentsRus.json');
const countriesRus = require('./countriesRus.json');

class CountriesLibrary {
  public static getCodeByRusName(name: string): string {
    const countriesData: {
      [key: string]: {
        capital: string;
        continent: string;
        currency: string;
        emoji: string;
        emojiU: string;
        languages: string[];
        name: string;
        native: string;
        phone: string;
      };
    } = library.countries;
    const countries = Object.keys(countriesData);
    const code = countries.filter(elem => {
      if (countriesRus[`${elem}`] === name) {
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
      default: return continents.all;
    }
  }

  public static getCountries(continent: string, language: string): string[] {
    const continentCode = this.getConteinentCode(continent);

    const countriesData: {
      [key: string]: {
        capital: string;
        continent: string;
        currency: string;
        emoji: string;
        emojiU: string;
        languages: string[];
        name: string;
        native: string;
        phone: string;
      };
    } = library.countries;

    const countries = Object.keys(countriesData);
    const rusCountries = countries
      .map(elem => {
        if (countriesData[elem].continent === continent) {
          return countriesRus[`${elem}`];
        }
      })
      .filter(elem => elem !== undefined);
    return rusCountries;
  }
}
export default CountriesLibrary;
