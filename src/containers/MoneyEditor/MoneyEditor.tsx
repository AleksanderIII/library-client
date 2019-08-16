import * as React from 'react';
import { connect } from 'react-redux';

import { Button, Input, Select } from '../../components';
import { Strings } from '../../constants';
import { IDispatchProp, IMoneyEditorProps, IMoneyEditorComponentProps, IMoneyEditorState, IAppState, Editor } from '../../models';
import CountriesLibrary from '../../utils/countriesLibrary';
import { ViewActions, MoneyEditorActions } from '../../actions';

class MoneyEditor extends React.Component<IMoneyEditorProps & IMoneyEditorComponentProps & IDispatchProp, IMoneyEditorState> {
  constructor(props: IMoneyEditorProps & IMoneyEditorComponentProps & IDispatchProp) {
    super(props);
    this.state = {
      values: []
    };
  }

  public componentDidMount(): void {
    const enumValues = this.props.type === Strings[`${Editor.Selectors.Options.TYPE.COINS}`] ?
      Editor.Selectors.Options.COINSVALUES :
      Editor.Selectors.Options.PAPERVALUES;
    const values = Object.keys(enumValues).map(key => enumValues[key as any]);
    this.setState({ values });
  }

  public render(): JSX.Element {
    const continentsList = CountriesLibrary.getContinents();
    const countriesList = CountriesLibrary.getCountries(this.props.continent);
    const moneyType = [
      Strings[`${Editor.Selectors.Options.TYPE.COINS}`],
      Strings[`${Editor.Selectors.Options.TYPE.CASH}`],
    ];
    return (
      <div className='editor'>
        <div className='editor__container'  >
          <p className='editor__container__closeBtn' onClick={() => this.props.dispatch(ViewActions.toggleEditor())} >&#215;</p>
          <h2>{Strings['EDITOR']}</h2>
          <div className='editor__container__content'>
            {this.createSelector(Strings[`${Editor.Selectors.Names.CONTINENT}`], continentsList, true, continentsList[0], 'continent', this.getValue, this.updateValue)}
            {this.createSelector(Strings[`${Editor.Selectors.Names.COUNTRY}`], countriesList, true, this.props.country, 'country', this.getValue)}
            {this.createSelector(Strings[`${Editor.Selectors.Names.TYPE}`], moneyType, true, moneyType[0], 'type', this.getValue, this.updateValue)}
            {this.createSelector(Strings[`${Editor.Selectors.Names.VALUE}`], this.state.values, true, this.state.values[0], 'value', this.getValue)}
            <Input name={'date'} placeholder={Strings['YEAR']} maxLength={+'4'} getValue={this.getValue} />
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
    this.props.dispatch(MoneyEditorActions.changeOption(name, value));
    if (name === 'country') {
      const code = CountriesLibrary.getCodeByRusName(value);
      this.props.dispatch(MoneyEditorActions.changeOption('code', code));
    }
  }

  private updateValue = (name: string) => {
    if (name === Strings[`${Editor.Selectors.Options.TYPE.COINS}`] || name === Strings[`${Editor.Selectors.Options.TYPE.CASH}`]) {
      const enumValues = name === Strings[`${Editor.Selectors.Options.TYPE.COINS}`] ?
        Editor.Selectors.Options.COINSVALUES :
        Editor.Selectors.Options.PAPERVALUES;

      const values = Object.keys(enumValues).map(key => enumValues[key as any]);
      this.props.dispatch(MoneyEditorActions.changeOption('type', name));
      this.props.dispatch(MoneyEditorActions.changeOption('value', values[0]));
      this.setState({ values });
    } else {
      const defaultCountry = CountriesLibrary.getCountries(name)[0];
      this.props.dispatch(MoneyEditorActions.changeOption('continent', name));
      this.props.dispatch(MoneyEditorActions.changeOption('country', defaultCountry));
      const code = CountriesLibrary.getCodeByRusName(defaultCountry);
      this.props.dispatch(MoneyEditorActions.changeOption('code', code));
    }
  }

  private postData = () => {
    this.props.dispatch(MoneyEditorActions.postMoneyData());
    this.props.dispatch(ViewActions.toggleEditor());
    this.props.dispatch(ViewActions.getViewDataRequest());
  }
}

const mapStateToProps = (state: IAppState): IMoneyEditorComponentProps => {
  return state.moneyEditor;
};

export default connect(mapStateToProps)(MoneyEditor);
