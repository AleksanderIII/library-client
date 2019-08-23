import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { Icon, Select } from '../../components';
import { PopupActions, ViewActions } from '../../actions';
import { Strings, continents } from '../../constants';
import { IAppState, IDispatchProp, IHeaderProps, Icons, Settings, SiteComponents } from '../../models';

class Header extends React.Component<IDispatchProp & IHeaderProps & RouteComponentProps> {
  constructor(props: IDispatchProp & IHeaderProps & RouteComponentProps) {
    super(props);
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

  private showSettingsMenu = () => {
    const { language, theme } = this.props.appSettings;
    const themes = theme.options.map(theme => Strings[theme]);
    const languages = language.options.map(language => Strings[language]);
    const content =
      <div className='header__settings__list'>
        <ul>
          <li>
            <Select name={Strings[Settings.Names.THEME]}
              defaultValue={Strings[theme.selected]}
              centralAlign={true}
              propName={Strings[Settings.Names.THEME]}
              getValue={console.log}
              options={themes}
            />
          </li>
          <li>
            <Select name={Strings[Settings.Names.LANGUAGE]}
              defaultValue={Strings[language.selected]}
              centralAlign={true}
              propName={Strings[Settings.Names.LANGUAGE]}
              getValue={console.log}
              options={languages}
            />
          </li>
        </ul>
      </div>;
    const popupContent = {
      header: Strings[SiteComponents.Names.SETTINGS],
      content
    };

    this.props.dispatch(PopupActions.show(popupContent));
  }

  public render(): JSX.Element {
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
          <div onClick={() => this.showSettingsMenu()} >
            <Icon name={Icons.Names.SETTINGS} />
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
