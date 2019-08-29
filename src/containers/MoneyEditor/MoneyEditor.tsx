import * as React from 'react';
import { connect } from 'react-redux';

import { Button, Input, Select, YearInput, ImageLodaer } from '../../components';
import { AppConfig } from '../../configs';
import { Strings, continents } from '../../constants';
import { IDispatchProp, IMoneyEditorInternalState, IMoneyEditorComponentProps, IAppState, Editor } from '../../models';
import CountriesLibrary from '../../utils/countriesLibrary';
import { ViewActions, MoneyEditorActions, PopupActions } from '../../actions';

class MoneyEditor extends React.Component<IMoneyEditorComponentProps & IDispatchProp, IMoneyEditorInternalState> {
  constructor(props: IMoneyEditorComponentProps & IDispatchProp) {
    super(props);
    this.state = {
      values: []
    };
  }

  public componentDidMount(): void {
    const moneyValues: { [key: string]: string } = this.props.editorData.type === Editor.Selectors.Options.TYPE.COINS ?
      AppConfig.containers.editor.options.coins :
      AppConfig.containers.editor.options.cash;
    const values = Object.keys(moneyValues).map(value => moneyValues[value]);
    this.setState({ values });
  }

  public render(): JSX.Element {
    const continentsList = Object.keys(continents).map(continent => continents[continent]).filter(continent => continent !== continents.all);
    const countriesList = CountriesLibrary.getCountriesByContinent(this.props.editorData.continent);
    const moneyType = [
      `${Editor.Selectors.Options.TYPE.COINS}`,
      `${Editor.Selectors.Options.TYPE.CASH}`,
    ];
    return (
      <div className='editor'>
        <div className='editor__container'  >
          <div className='editor__container__content'>
            {this.createSelector(Editor.Selectors.Names.CONTINENT, continentsList, true, this.props.editorData.continent, Editor.Selectors.Names.CONTINENT, this.getValue, this.updateValue)}
            {this.createSelector(Editor.Selectors.Names.COUNTRY, countriesList, true, this.props.editorData.country, Editor.Selectors.Names.COUNTRY, this.getValue)}
            {this.createSelector(Editor.Selectors.Names.TYPE, moneyType, true, moneyType[0], Editor.Selectors.Names.TYPE, this.getValue, this.updateValue)}
            {this.createSelector(Editor.Selectors.Names.VALUE, this.state.values, true, this.state.values[0], Editor.Selectors.Names.VALUE, this.getValue)}
            <YearInput name={Editor.Selectors.Names.DATE} defaultValue={this.props.editorData.date} getValue={this.getValue} />
            <ImageLodaer name={'UPLOAD_FRONT_IMAGE'} />
            <ImageLodaer name={'UPLOAD_BACK_IMAGE'} />
            <Input name={'frontImageUrl'} placeholder={Strings['FRONT_URL']} getValue={this.getValue} />
            <Input name={'backImageUrl'} placeholder={Strings['BACK_URL']} getValue={this.getValue} />
            <Input name={'material'} placeholder={Strings['MATERIAL']} getValue={this.getValue} />
            <Input name={'form'} placeholder={Strings['FORM']} getValue={this.getValue} />
            <Button text={Strings['ADD']} handleClick={this.postData} />
          </div>
        </div>
      </div>
    );
  }

  private createSelector = (name: string, options: string[], centralAlignment: boolean, defaultValue: string, propName: string, getValue: (name: string, value: string) => void, calbackFunction?: (par: string) => void) => {
    return (
      <Select
        name={name}
        propName={propName}
        options={options}
        centralAlign={centralAlignment}
        defaultValue={defaultValue}
        selectValue={calbackFunction}
        getValue={getValue}
      />
    );
  }

  private getValue = (name: string, value: string) => {
    this.props.dispatch(MoneyEditorActions.changeOption(name.toLowerCase(), value));
    if (name === Editor.Selectors.Names.COUNTRY) {
      const code = CountriesLibrary.getCodeByName(value);
      this.props.dispatch(MoneyEditorActions.changeOption('code', code));
    }
  }

  private updateValue = (name: string) => {
    if (name === Editor.Selectors.Options.TYPE.COINS || name === Editor.Selectors.Options.TYPE.CASH) {
      const moneyValues: { [key: string]: string } = name === Editor.Selectors.Options.TYPE.COINS ?
        AppConfig.containers.editor.options.coins :
        AppConfig.containers.editor.options.cash;

      const values = Object.keys(moneyValues).map(value => moneyValues[value]);
      this.props.dispatch(MoneyEditorActions.changeOption(Editor.Selectors.Names.TYPE, name));
      this.props.dispatch(MoneyEditorActions.changeOption(Editor.Selectors.Names.VALUE, values[0]));
      this.setState({ values });
    } else {
      const defaultCountry = CountriesLibrary.getCountriesByContinent(name)[0];
      this.props.dispatch(MoneyEditorActions.changeOption(Editor.Selectors.Names.CONTINENT.toLowerCase(), name));
      this.props.dispatch(MoneyEditorActions.changeOption(Editor.Selectors.Names.COUNTRY.toLowerCase(), defaultCountry));
      const code = CountriesLibrary.getCodeByName(defaultCountry);
      this.props.dispatch(MoneyEditorActions.changeOption(Editor.Selectors.Names.CODE.toLowerCase(), code));
    }
  }

  private postData = () => {
    this.props.dispatch(MoneyEditorActions.postMoneyData());
    this.props.dispatch(PopupActions.hide());
    this.props.dispatch(ViewActions.getViewDataRequest());
  }
}

const mapStateToProps = (state: IAppState): IMoneyEditorComponentProps => {
  return {
    language: state.appSettings.language.selected,
    editorData: state.moneyEditor
  };
};

export default connect(mapStateToProps)(MoneyEditor);
