import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import Home from './components/home';
import Board from './components/board';
import Score from './components/score';

const config = {
  apiKey:             "AIzaSyDhYq2bHovtm5Eq55kckCgXwq1FcWk9pcU",
  authDomain:         "math-battle-10719.firebaseapp.com",
  databaseURL:        "https://math-battle-10719.firebaseio.com",
  projectId:          "math-battle-10719",
  storageBucket:      "math-battle-10719.appspot.com",
  messagingSenderId:  "729210680536"
};
firebase.initializeApp(config);

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/score" component={Score} />
          <Route path="/board" component={Board} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
