import * as React from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router-dom';

import { Filters, MoneyEditor, MainView } from '../';
import { IAppState, IDispatchProp, IViewProps } from '../../models';
import { ViewActions } from '../../actions';
import './View.css';
import { SiteManager, Header, ContinentsView } from '../../components';

class View extends React.Component<IViewProps & IDispatchProp & RouteComponentProps> {
  private unlisten: any;
  constructor(props: IViewProps & IDispatchProp & RouteComponentProps) {
    super(props);
  }

  public componentDidMount(): void {
    const pathParts = this.props.location.pathname.split('/');
    const continentFromPath = pathParts[pathParts.length - 1];
    if (continentFromPath !== 'continents') {
      this.props.dispatch(ViewActions.setContinent(continentFromPath));
    }
    this.unlisten = this.props.history.listen((location, action) => {
      const pathParts = location.pathname.split('/');
      const continentFromPath = pathParts[pathParts.length - 1];
      this.props.dispatch(ViewActions.setContinent(continentFromPath));
    });
  }

  public componentWillUnmount(): void {
    this.unlisten();
  }

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <Header />
        <div className='view'>
          <Route exact path={`${this.props.match.path}`} component={ContinentsView} />
          <Route exact path={`${this.props.match.path}/:id`} render={() =>
            <div className='moneyView'>
              <div className='view_manager'>
                {this.props.isOpenedEditor && <MoneyEditor />}
                <Filters />
                <SiteManager />
              </div>
              <div className='view-container'>
                <MainView />
              </div>
            </div>
          } />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IAppState): IViewProps => {
  return {
    isOpenedEditor: state.view.isOpenedEditor
  };
};

export default connect(mapStateToProps)(View);
