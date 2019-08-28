import { Dispatch } from 'redux';

import { IAppState } from '../states/states';

export interface IDispatchProp {
  dispatch?: Dispatch<IAppState>;
}

export interface ICountable {
  [key: string]: string;
}

export interface ICountryData {
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
      FORM = 'FORM',
      CODE = 'CODE'
    }
    export namespace Options {
      export enum TYPE {
        CASH = 'CASH',
        COINS = 'COINS'
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
  export enum Themes {
    LIGHT = 'LIGHT',
    DARK = 'DARK'
  }
  export enum Languages {
    RUSSIAN = 'RUSSIAN',
    ENGLISH = 'ENGLISH'
  }
}

export namespace Registration {
  export enum Fields {
    NAME = 'NAME',
    PASSWORD = 'PASSWORD',
    REGISTER = 'REGISTER'
  }
}

export namespace CardInformation {
  export enum Fields {
    DESCRIPTION = 'DESCRIPTION',
    CREATION_YEAR = 'CREATION_YEAR',
    VALUE = 'VALUE'
  }
}

export namespace Tabs {
  export enum Money {
    CASH = 'cash',
    COINS = 'coins'
  }
}
