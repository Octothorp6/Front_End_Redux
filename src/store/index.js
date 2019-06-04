import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../store/reducers';

//IN THE EVENT THAT DEVTOOLS IS NOT INSTALLED 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [ReduxThunk]

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;