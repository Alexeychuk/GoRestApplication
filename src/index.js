import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/App';
import './styles.css';
import { store, persistor } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter basename="/">
        <Route component={App} />
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
