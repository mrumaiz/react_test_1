import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './App.css';
import AppRoute from './routes/AppRoute';
import qAndA from './reducers/rootReducer';

let store = createStore(qAndA, applyMiddleware(thunk));

const App = () => {
  return (
    <div>
      <h1 className="header">User Survey</h1>
      <Provider store={store}>
        <AppRoute/>
      </Provider>
    </div>
  )
}

export default App;
