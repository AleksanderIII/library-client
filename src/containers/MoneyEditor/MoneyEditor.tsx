import * as React from 'react';
import { connect } from 'react-redux';

import { Button, Input, Select } from '../../components';
import { Strings } from '../../constants';
import {
  IDispatchProp,
  IMoneyEditorProps,
  IMoneyEditorComponentProps,
  IMoneyEditorState,
  IAppState,
  Editor
} from '../../models';
import CountriesLibrary from '../../utils/countriesLibrary';
import { ViewActions, MoneyEditorActions } from '../../actions';

class MoneyEditor extends React.Component<IMoneyEditorProps & IMoneyEditorComponentProps & IDispatchProp, IMoneyEditorState> {
  constructor(props: IMoneyEditorProps & IMoneyEditorComponentProps & IDispatchProp) {
    super(props);
    this.state = {
      values: []
    };
    this.postData = this.postData.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.createSelector = this.createSelector.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  public componentDidMount(): void {
    const enumValues = this.props.type === Strings[`${Editor.Filters.Options.TYPE.COINS}`] ?
      Editor.Filters.Options.COINSVALUES :
      Editor.Filters.Options.PAPERVALUES;
    const values = Object.keys(enumValues).map(key => enumValues[key as any]);
    this.setState({ values });
  }

  public render(): JSX.Element {
    const continentsList = CountriesLibrary.getContinents();
    const countriesList = CountriesLibrary.getCountries(this.props.continent);
    const moneyType = [
      Strings[`${Editor.Filters.Options.TYPE.COINS}`],
      Strings[`${Editor.Filters.Options.TYPE.CASH}`],
    ];
    return (
      <div className='editor'>
        <div className='editor__container'  >
          <p className='editor__container__closeBtn' onClick={() => this.props.dispatch(ViewActions.toggleEditor())} >&#215;</p>
          <h2>Редактор</h2>
          <div className='editor__container__content'>
            {this.createSelector(Strings[`${Editor.Filters.Names.CONTINENT}`], continentsList, true, continentsList[0], 'contenent', this.getValue, this.updateValue)}
            {this.createSelector(Strings[`${Editor.Filters.Names.COUNTRY}`], countriesList, true, this.props.country, 'country', this.getValue)}
            {this.createSelector(Strings[`${Editor.Filters.Names.TYPE}`], moneyType, true, moneyType[0], 'type', this.getValue, this.updateValue)}
            {this.createSelector(Strings[`${Editor.Filters.Names.VALUE}`], this.state.values, true, this.state.values[0], 'value', this.getValue)}
            <Input name={'date'} placeholder='Год выпуска' maxLength={+'4'} getValue={this.getValue} />
            <Input name={'frontImageUrl'} placeholder='Путь к картинке(решка)' getValue={this.getValue} />
            <Input name={'backImageUrl'} placeholder='Путь к картинке(орел)' getValue={this.getValue} />
            <Input name={'material'} placeholder='Материал' getValue={this.getValue} />
            <Input name={'form'} placeholder='Форма' getValue={this.getValue} />
            <Button text='Добавить' handleClick={this.postData} />
          </div>
        </div>
      </div>
    );
  }

  private createSelector(name: string, options: string[], centralAlignment: boolean, defaultValue: string, propName: string, getValue: (name: string, value: string) => void, calbackFunction?: (par: string) => void): JSX.Element {
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

  private getValue(name: string, value: string): void {
    this.props.dispatch(MoneyEditorActions.changeOption(name, value));
    if (name === 'country') {
      const code = CountriesLibrary.getCodeByRusName(value);
      this.props.dispatch(MoneyEditorActions.changeOption('code', code));
    }
  }

  private updateValue(name: string): void {
    if (name === Strings[`${Editor.Filters.Options.TYPE.COINS}`] || name === Strings[`${Editor.Filters.Options.TYPE.CASH}`]) {
      const enumValues = name === Strings[`${Editor.Filters.Options.TYPE.COINS}`] ?
        Editor.Filters.Options.COINSVALUES :
        Editor.Filters.Options.PAPERVALUES;

      const values = Object.keys(enumValues).map(key => enumValues[key as any]);
      this.props.dispatch(MoneyEditorActions.changeOption('type', name));
      this.props.dispatch(MoneyEditorActions.changeOption('value', values[0]));
      this.setState({ values });
    } else {
      const defaultCountry = CountriesLibrary.getCountries(name)[0];
      this.props.dispatch(MoneyEditorActions.changeOption('continent', name));
      this.props.dispatch(MoneyEditorActions.changeOption('country', defaultCountry));
    }
  }

  private postData(): void {
    this.props.dispatch(MoneyEditorActions.postMoneyData());
    this.props.dispatch(ViewActions.toggleEditor());
    this.props.dispatch(ViewActions.getViewDataRequest());
  }
}

const mapStateToProps = (state: IAppState): IMoneyEditorComponentProps => {
  return state.moneyEditor;
};

export default connect(mapStateToProps)(MoneyEditor);
