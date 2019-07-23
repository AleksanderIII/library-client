import * as React from 'react';
import { connect } from 'react-redux';

import { Grid } from '../../containers';
import { ViewActions } from '../../actions';
import { IMainViewProps, IDispatchProp, IAppState, Editor } from '../../models';
import { Strings } from '../../constants';

class MainView extends React.Component<IMainViewProps & IDispatchProp> {

    public componentDidMount(): void {
        const continent = window.location.pathname.replace('/continents/', '');
        if (continent === 'All') {
            this.props.dispatch(ViewActions.getViewDataRequest());
        } else {
            this.props.dispatch(ViewActions.getViewDataByContinentRequest(continent));
        }
    }

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

    public render(): JSX.Element {
        const moneyTypes = ['coins', 'cash'];
        return (
            <div className='mainView'>
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
                    <li onClick={() => this.props.dispatch(ViewActions.toggleEditor())}>Добавить</li>
                </ul>
                <div className='content'>
                    <Grid
                        data={this.props.data[this.props.dataType]}
                        countryFilter={this.props.countryFilter}
                        centuryFilter={this.props.centuryFilter}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IAppState): IMainViewProps => {
    return {
        data: state.view.data,
        countryFilter: state.filterData.country.selected,
        centuryFilter: state.filterData.century.selected,
        dataType: state.view.dataType || ''
    };
};

export default connect(mapStateToProps)(MainView);
