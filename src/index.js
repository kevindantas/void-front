import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import App from './App';
import './index.css';

import Auth from './components/Auth';
import Home from './components/Home';
import Team from './components/Team';
import Gallery from './components/Gallery';

import reducers from './reducers';

const store = createStore(
	combineReducers({
		...reducers,
		routing: routerReducer
	})
);

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
  	<Router history={history}>
    	<Route path="/" component={App}>
        <IndexRoute component={Home} />
    		<Route path="galeria" component={Gallery} />
    		<Route path="equipe" component={Team} />
    	</Route>
      <Route path="/auth" component={Auth} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
