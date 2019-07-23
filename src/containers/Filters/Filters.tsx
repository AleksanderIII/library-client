import * as React from 'react';
import { connect } from 'react-redux';

import { Select } from '../../components';
import { IAppState, IFiltersState, IDispatchProp } from '../../models';
import { FiltersActions } from '../../actions';

class Filters extends React.Component<IFiltersState & IDispatchProp> {
  constructor(props: IFiltersState) {
    super(props);
    this.updateValue = this.updateValue.bind(this);
  }

  public updateValue(name: string, value: string): void {
    this.props.dispatch(FiltersActions.updateValue(name, value));
  }

  private sort(object: string[]): string[] {
    return object.sort((a, b) => {
      if (a === 'Все') {
        return -1;
      }
      if (b === 'Все') {
        return 1;
      }
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
  }

  public render(): JSX.Element {
    return (
      <div className='filters'>
        <h2>Фильтры</h2>
        <Select
          name='Век'
          options={this.sort(this.props.century.options)}
          centralAlign={true}
          defaultValue={this.props.century.selected}
          propName='century'
          getValue={this.updateValue}
        />
        <Select
          name='Страна'
          options={this.sort(this.props.country.options)}
          centralAlign={true}
          defaultValue={this.props.country.selected}
          propName='country'
          getValue={this.updateValue}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState): IFiltersState => {
  return {
    country: state.filterData.country,
    century: state.filterData.century
  };
};
export default connect(mapStateToProps)(Filters);
