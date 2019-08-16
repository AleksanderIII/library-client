import { Dispatch } from 'redux';

import { IAppState } from '../states/states';

export interface IDispatchProp {
  dispatch?: Dispatch<IAppState>;
}

export interface ICountable {
  [key: string]: string;
}

export namespace SiteComponents {
  export enum Names {
    EDITOR = 'EDITOR',
    FILTERS = 'FILTERS',
    SETTINGS = 'SETTINGS',
    REGISTRATION = 'REGISTRATION'
  }
}

export namespace Editor {
  export namespace Selectors {
    export enum Names {
      CONTINENT = 'CONTINENT',
      COUNTRY = 'COUNTRY',
      TYPE = 'TYPE',
      VALUE = 'VALUE',
      DATE = 'DATE',
      MATERIAL = 'MATERIAL',
      ADD_INFO = 'ADD_INFO',
      FORM = 'FORM'
    }
    export namespace Options {
      export enum TYPE {
        CASH = 'CASH',
        COINS = 'COINS'
      }
      export enum PAPERVALUES {
        ONE = '1',
        TWO = '2',
        FIVE = '5',
        TEN = '10',
        TWENTY = '20',
        FIFTY = '50',
        HUNDRED = '100',
        FIVEHUNDRED = '500',
        ONETHOUSAND = '1000'
      }
      export enum COINSVALUES {
        ONE = '0.01',
        FIVE = '0.05',
        TEN = '0.10',
        TWENTY = '0.20',
        FIFTY = '0.50',
        HUNDRED = '1.00',
        TWOHUNDRED = '2.00'
      }
    }
  }
}

export namespace Filters {
  export enum Names {
    CENTURY = 'CENTURY',
    COUNTRY = 'COUNTRY'
  }

  export namespace Options {
    export enum CENTURY {
      ALL = 'ALL'
    }
    export enum COUNTRY {
      ALL = 'ALL'
    }
  }
}

export namespace Settings {
  export enum Names {
    LANGUAGE = 'LANGUAGE',
    THEME = 'THEME'
  }
}

export namespace Registration {
  export enum Fields {
    NAME = 'NAME',
    PASSWORD = 'PASSWORD',
    REGISTER = 'REGISTER'
  }
}
