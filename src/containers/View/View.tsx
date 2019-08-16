import * as React from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';

import { IAppState, IDispatchProp, IViewState } from '../../models';
import { SiteManager, Header, Map } from '../../components';
import { FilterView, MoneyEditor, DataViewer } from '../../containers';
import { ViewActions } from '../../actions';

class View extends React.Component<IViewState & IDispatchProp & RouteComponentProps> {

  public componentDidMount(): void {
    const pathParts = location.pathname.split('/');
    this.changeContinent(pathParts);
    this.listenContinentChange();
  }

  private listenContinentChange = () => {
    this.props.history.listen((location) => {
      const pathParts = location.pathname.split('/');
      this.changeContinent(pathParts);
    });
  }

  private changeContinent = (pathParts: string[]) => {
    const continentFromPath = pathParts[pathParts.length - 1];
    if (continentFromPath !== 'continents') {
      this.props.dispatch(ViewActions.setContinent(continentFromPath));
    }
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <Header />
        <div className='view'>
          <Route exact path={`${this.props.match.path}`} component={Map} />
          <Route exact path={`${this.props.match.path}/:id`} render={() =>
            <div className='view__moneyView'>
              <div className='view__manager'>
                {this.props.isOpenedEditor && <MoneyEditor />}
                <FilterView />
                <SiteManager />
              </div>
              <div className='view__container'>
                <DataViewer continent={this.props.continent} />
              </div>
            </div>
          } />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IAppState): { isOpenedEditor: boolean, isLoading: boolean, continent: string } => {
  return {
    isOpenedEditor: state.view.isOpenedEditor,
    isLoading: state.view.isLoading,
    continent: state.view.continent
  };
};

export default connect(mapStateToProps)(View);
