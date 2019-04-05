import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const composeEnhancers = composeWithDevTools({});
const configureStore = createStore(rootReducers, composeEnhancers(
    applyMiddleware(thunk),
));

export default configureStore;
