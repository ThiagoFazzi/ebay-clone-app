import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import store from './store'
import AdvertisementsListContainer from './containers/AdvertisementsListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>eBay Clone App</h1>
          <Route path="/" exact component={AdvertisementsListContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
