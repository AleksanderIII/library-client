import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Icons, Select } from '../../components';
import { AppSettingsActions } from '../../actions';
import { IAppState, IDispatchProp, ICountable, IHeaderProps } from '../../models';
import './Header.css';
import countriesLibrary from '../../utils/countriesLibrary';

class Header extends React.Component<IDispatchProp & IHeaderProps> {

  private findingContinent(name: string): string {
    const continentsList: ICountable = {
      All: 'Все',
      Africa: 'Африка',
      Antarctica: 'Антарктика',
      Asia: 'Азия',
      Europe: 'Европа',
      NorthAmerica: 'Северная Америка',
      Oceania: 'Австралия и Океания',
      SouthAmerica: 'Южная Америка'
    };
    return continentsList[name];
  }

  public changeContinent(name: string, value: string): void {
    const continentsList: ICountable = {
      All: 'Все',
      Africa: 'Африка',
      Antarctica: 'Антарктика',
      Asia: 'Азия',
      Europe: 'Европа',
      NorthAmerica: 'Северная Америка',
      Oceania: 'Австралия и Океания',
      SouthAmerica: 'Южная Америка'
    };
    const listOfKeys = Object.keys(continentsList);
    const targetContinent = listOfKeys.filter(elem => continentsList[elem] === value)[0];
    window.location.assign(`/continents/${targetContinent}`);
  }

  public render(): JSX.Element {
    const continents = ['Все'].concat(countriesLibrary.getContinents());
    return (
      <div className='header'>
        <Link to='/continents'><span><Icons name='homeIcon' /></span></Link>
        <div className='header_navigation' >
          {
            window.location.pathname.includes('continents') && this.props.continent !== 'continents' ?
              <Select name='Континент'
                options={continents}
                centralAlign={false}
                defaultValue={this.findingContinent(this.props.continent)}
                propName='continents'
                getValue={this.changeContinent}
              /> : null
          }

        </div>
        <h1>Коллекция</h1>
        <div className='header_settings' >
          <div onClick={() => this.props.dispatch(AppSettingsActions.toggleSettingsMenu())} >
            <Icons name='settings' />
            {
              this.props.isOpen ?
                <ul className='header_settings_list'>
                  <li>тема: <span>{this.props.theme}</span></li>
                  <li>язык: <span>{this.props.language}</span> </li>
                </ul>
                : null
            }
          </div>
        </div>
        <span><Icons name='signIcon' /></span>
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState): IHeaderProps => {
  const { language, isOpen, theme } = state.appSettings;
  return {
    language,
    isOpen,
    theme,
    continent: state.view.continent
  };
};
export default connect(mapStateToProps)(Header);
