import * as React from 'react';
import { connect } from 'react-redux';

import { IDataViewerProps, IDataViewerOwnProps, IDispatchProp, IAppState, Editor } from '../../models';
import { Strings } from '../../constants';
import { ViewActions } from '../../actions';
import { Loader } from '../../components';
import { Grid } from '../../containers';

class DataViewer extends React.Component<IDataViewerProps & IDataViewerOwnProps & IDispatchProp> {

    public componentWillMount(): void {
        this.getData();
    }

    public componentDidUpdate(prevProps: IDataViewerOwnProps): void {
        if (prevProps.continent !== this.props.continent) {
            this.getData();
        }
    }

    private getData = () => {
        if (this.props.continent === 'ALL') {
            this.props.dispatch(ViewActions.getViewDataRequest());
        } else {
            this.props.dispatch(ViewActions.getViewDataByContinentRequest(this.props.continent));
        }
    }

    private getMoneyTypeTabs = () => {
        const moneyTypes = [
            Editor.Selectors.Options.TYPE.COINS,
            Editor.Selectors.Options.TYPE.CASH,
        ];
        return (
            <React.Fragment>
                {
                    moneyTypes.map((moneyType, index) =>
                        <li className={moneyType === this.props.dataType ? 'selected' : ''}
                            key={`${index}-dataType`}
                            onClick={() => this.props.dispatch(ViewActions.setMoneyType(`${moneyType}`))}>
                            {Strings[`${moneyType}`]}
                        </li>,
                    )
                }
            </React.Fragment>
        );
    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <ul>
                    {
                        this.getMoneyTypeTabs()
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
        dataType: state.view.dataType,
        isLoading: state.view.isLoading
    };
};

export default connect(mapStateToProps)(DataViewer);
