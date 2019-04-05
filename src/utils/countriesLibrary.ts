import * as library from 'countries-list';
const continentsRus = require('./continentsRus.json');
const countriesRus = require('./countriesRus.json');

class CountriesLibrary {
  public static getContinents(): string[] {
    const continentsData: { [key: string]: string } = library.continents;
    const continentKeys: string[] = Object.keys(continentsData);
    const continents = continentKeys.map(key => continentsRus[`${key}`]);
    return continents;
  }

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

  public static getCountries(continent: string): string[] {
    const continentsData: { [key: string]: string } = library.continents;
    const continentKeys: string[] = Object.keys(continentsData);
    const continents = continentKeys.map(key => continentsRus[`${key}`]);
    const selectedContinentIndex = continents
      .map((elem, index) => { if (elem === continent) { return index; } })
      .filter(elem => elem !== undefined)[0];
    continent = continentKeys[selectedContinentIndex];

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
