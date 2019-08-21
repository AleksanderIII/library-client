import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { Icon, Select } from '../../components';
import { AppSettingsActions, ViewActions } from '../../actions';
import { Strings, continents } from '../../constants';
import { IAppState, IDispatchProp, IHeaderProps, Icons, Settings, SiteComponents, IHeaderState } from '../../models';

class Header extends React.Component<IDispatchProp & IHeaderProps & RouteComponentProps, IHeaderState> {
  constructor(props: IDispatchProp & IHeaderProps & RouteComponentProps) {
    super(props);
    this.state = {
      isOpenedSettings: false
    };
  }

  private continentChecking(name: string): string {
    const continentsList = Object.keys(continents);
    const validContinent = continentsList.some(continent => continents[continent] === name);
    return validContinent ? Strings[`${name}`] : '';
  }

  private changeContinent = (name: string, value: string): void => {
    const listOfKeys = Object.keys(continents);
    const targetContinent = listOfKeys.find(elem => Strings[`${continents[elem]}`] === value);
    this.props.history.push(`/continents/${continents[targetContinent]}`);
  }

  private getNavigationComponent = (continentsList: string[]) => {
    return <div className='header__navigation' >
      {
        <Select name={Strings['CONTINENT']}
          options={continentsList}
          centralAlign={false}
          defaultValue={this.continentChecking(this.props.continent)}
          propName='continents'
          getValue={this.changeContinent}
        />
      }
    </div>;
  }

  private hideNavigationComponent = () => {
    this.props.dispatch(ViewActions.setContinent(''));
  }

  private toggleSettingsMenu = () => {
    this.setState({ isOpenedSettings: !this.state.isOpenedSettings });
  }

  public render(): JSX.Element {
    const { language, theme } = this.props.appSettings;
    const continentsList = Object.keys(continents).map(continent => Strings[`${continents[continent]}`]);
    return (
      <div className='header'>
        <Link to='/continents' onClick={() => this.hideNavigationComponent()} >
          <span>
            <Icon name={Icons.Names.HOME} />
          </span>
        </Link>
        {
          window.location.pathname.includes('continents') && this.props.continent !== '' ?
            this.getNavigationComponent(continentsList)
            : <span></span>
        }
        <h1>{Strings['COLLECTION']}</h1>
        <div className='header__settings' >
          <div onClick={() => this.toggleSettingsMenu()} >
            <Icon name={Icons.Names.SETTINGS} />
            {
              this.state.isOpenedSettings ?
                <div className='header__settings__list'>
                  <h2>{Strings[SiteComponents.Names.SETTINGS]}</h2>
                  <ul>
                    <li>
                      {Strings[Settings.Names.THEME]}: <span>{theme}</span>
                    </li>
                    <li>
                      {Strings[Settings.Names.LANGUAGE]}: <span>{language}</span>
                    </li>
                  </ul>
                </div>
                : null
            }
          </div>
        </div>
        <span><Icon name={Icons.Names.SIGN_IN} /></span>
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState): IHeaderProps => {
  return {
    appSettings: state.appSettings,
    continent: state.view.continent
  };
};
export default connect(mapStateToProps)(withRouter(Header));
