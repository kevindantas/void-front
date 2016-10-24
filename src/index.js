import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Layout from './components/layout/Layout';
import LayoutAdmin from './components/layout/LayoutAdmin';
import './index.css';

import Auth from './containers/Auth';
import Home from './components/Home';
import Team from './components/Team';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

import Dashboard from './components/Dashboard';
import MembersList from './containers/MembersList';
import PhotosList from './containers/PhotosList';
import UsersList from './containers/UsersList';

import reducers from './reducers';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = createStore(
	reducers,
  applyMiddleware(thunk)
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
  	<Router history={history}>
    	<Route path="/" component={Layout}>
        <IndexRoute component={Home} />
    		<Route path="galeria" component={Gallery} />
    		<Route path="equipe" component={Team} />
    	</Route>

      <Route path="/auth" component={Auth} />

      <Route path="/admin" component={LayoutAdmin}>
        <IndexRoute component={Dashboard} />
        <Route path="galeria" component={PhotosList} />
        <Route path="equipe" component={MembersList} />
        <Route path="usuarios" component={UsersList} />
      </Route>

      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
