import * as React from 'react';
import { connect } from 'react-redux';

import { Grid } from '../../containers';
import { Loader } from '../../components';
import { ViewActions } from '../../actions';
import { IDataViewerProps, IDispatchProp, IAppState, Editor } from '../../models';
import { Strings } from '../../constants';

class DataViewer extends React.Component<IDataViewerProps & IDispatchProp> {

    private findName(name: string): string {
        const options = Object.keys(Editor.Filters.Options.TYPE);
        let stringName = '';
        options.forEach((element: keyof typeof Editor.Filters.Options.TYPE) => {
            if (element === name.toUpperCase()) {
                stringName = Strings[`${Editor.Filters.Options.TYPE[element]}`];
            }
        },
        );
        return stringName;
    }

    public componentDidUpdate(prevProps: IDataViewerProps & IDispatchProp): void {
        if (prevProps.continent !== this.props.continent) {
            this.getData();
        }
    }

    public componentWillMount(): void {
        this.getData();
    }

    private getData = () => {
        const continent = window.location.pathname.replace('/continents/', '');
        if (continent === 'All') {
            this.props.dispatch(ViewActions.getViewDataRequest());
        } else {
            this.props.dispatch(ViewActions.getViewDataByContinentRequest(continent));
        }
    }

    public render(): JSX.Element {
        const moneyTypes = ['coins', 'cash'];
        return (
            <React.Fragment>
                <ul>
                    {
                        moneyTypes.map((elem, index) =>
                            <li className={elem === this.props.dataType ? 'selected' : ''}
                                key={index}
                                onClick={() => this.props.dispatch(ViewActions.setMoneyType(`${elem}`))}>
                                {this.findName(elem)}
                            </li>,
                        )
                    }
                    <li onClick={() => this.props.dispatch(ViewActions.toggleEditor())}>{Strings['ADD']}</li>
                </ul>
                {
                    this.props.isLoading ?
                        <Loader /> :
                        <div className='content'>
                            <Grid
                                data={this.props.data[this.props.dataType]}
                                countryFilter={this.props.countryFilter}
                                centuryFilter={this.props.centuryFilter}
                            />
                        </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: IAppState): IDataViewerProps => {
    return {
        data: state.view.data,
        countryFilter: state.filterData.country.selected,
        centuryFilter: state.filterData.century.selected,
        dataType: state.view.dataType || '',
        continent: state.view.continent,
        isLoading: state.view.isLoading
    };
};

export default connect(mapStateToProps)(DataViewer);
