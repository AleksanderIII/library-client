import * as React from 'react';
import { connect } from 'react-redux';

import { Select } from '../../components';
import { IAppState, IFilterViewProps, IDispatchProp, SiteComponents, Filters } from '../../models';
import { FiltersActions } from '../../actions';
import { Strings } from '../../constants';
import { sortStrings } from '../../utils';

class FilterView extends React.Component<IFilterViewProps & IDispatchProp> {
  private updateValue = (name: string, value: string) => {
    this.props.dispatch(FiltersActions.updateValue(name, value));
  }

  public render(): JSX.Element {
    const { country, century } = this.props.filters;
    return (
      <div className='filters'>
        <h2>{Strings[SiteComponents.Names.FILTERS]}</h2>
        <Select
          name={Filters.Names.CENTURY}
          options={sortStrings(century.options)}
          centralAlign={true}
          defaultValue={century.selected}
          propName={Filters.Names.CENTURY}
          getValue={this.updateValue}
        />
        <Select
          name={Filters.Names.COUNTRY}
          options={sortStrings(country.options)}
          centralAlign={true}
          defaultValue={country.selected}
          propName={Filters.Names.COUNTRY}
          getValue={this.updateValue}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState): IFilterViewProps => {
  return {
    filters: state.filters.data
  };
};
export default connect(mapStateToProps)(FilterView);
