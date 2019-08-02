import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { Icons, Select } from '../../components';
import { AppSettingsActions } from '../../actions';
import { Strings, continents } from '../../constants';
import { IAppState, IDispatchProp, IHeaderProps } from '../../models';

class Header extends React.Component<IDispatchProp & IHeaderProps & RouteComponentProps> {
  private continentChecking(name: string): string {
    const continentsList = Object.keys(continents);
    const validContinent = continentsList.some(continent => continents[continent] === name);
    return validContinent ? Strings[`${name}`] : Strings[`ALL`];
  }

  private changeContinent = (name: string, value: string): void => {
    const listOfKeys = Object.keys(continents);
    const targetContinent = listOfKeys.find(elem => Strings[`${continents[elem]}`] === value);
    this.props.history.push(`/continents/${continents[targetContinent]}`);
  }

  public render(): JSX.Element {
    const continentsList = Object.keys(continents).map(continent => Strings[`${continents[continent]}`]);
    return (
      <div className='header'>
        <Link to='/continents'><span><Icons name='homeIcon' /></span></Link>
        <div className='header__navigation' >
          {
            window.location.pathname.includes('continents') && this.props.continent !== 'continents' ?
              <Select name='Континент'
                options={continentsList}
                centralAlign={false}
                defaultValue={this.continentChecking(this.props.continent || '')}
                propName='continents'
                getValue={this.changeContinent}
              /> : null
          }

        </div>
        <h1>{Strings['COLLECTION']}</h1>
        <div className='header__settings' >
          <div onClick={() => this.props.dispatch(AppSettingsActions.toggleSettingsMenu())} >
            <Icons name='settings' />
            {
              this.props.isOpen ?
                <div className='header__settings__list'>
                  <h2>{Strings['SETTINGS']}</h2>
                  <ul>
                    <li>
                      {Strings['THEME']}: <span>{this.props.theme}</span>
                    </li>
                    <li>
                      {Strings['LANGUAGE']}: <span>{this.props.language}</span>
                    </li>
                  </ul>
                </div>
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
export default connect(mapStateToProps)(withRouter(Header));
