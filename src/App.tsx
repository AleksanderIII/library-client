import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import configureStore from './configureStore';
import { PageNotFound, CardDetails, View, RegistrationView } from './containers';

import './styles/main.less';

const store = configureStore;

class App extends React.Component {
    public render(): JSX.Element {
        return (
            <div className='container'>
                <Provider store={store}>
                    <BrowserRouter>
                        <Switch>
                            <Route path='/continents' component={View} />
                            <Route exact path='/registration' component={RegistrationView} />
                            <Route exact path='/:id' component={CardDetails} />
                            <Route path='*' component={PageNotFound} />
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}
export default App;
