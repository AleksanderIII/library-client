import * as React from 'react';
import { connect } from 'react-redux';

import { Select } from '../../components';
import { IAppState, IFiltersState, IDispatchProp } from '../../models';
import { FiltersActions } from '../../actions';
import { Strings } from '../../constants';
import { sortStrings } from '../../utils';

class Filters extends React.Component<IFiltersState & IDispatchProp> {
  constructor(props: IFiltersState) {
    super(props);
    this.updateValue = this.updateValue.bind(this);
  }

  public updateValue(name: string, value: string): void {
    this.props.dispatch(FiltersActions.updateValue(name, value));
  }

  public render(): JSX.Element {
    return (
      <div className='filters'>
        <h2>Фильтры</h2>
        <Select
          name={Strings['CENTURY']}
          options={sortStrings(this.props.century.options)}
          centralAlign={true}
          defaultValue={this.props.century.selected}
          propName='century'
          getValue={this.updateValue}
        />
        <Select
          name={Strings['COUNTRY']}
          options={sortStrings(this.props.country.options)}
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
