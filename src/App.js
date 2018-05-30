import React, { Component } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyAMG5kWgWcCTm0XaO02wFI_ewBqDPgyuco',
        authDomain: 'kidcloset-ed181.firebaseapp.com',
        databaseURL: 'https://kidcloset-ed181.firebaseio.com',
        projectId: 'kidcloset-ed181',
        storageBucket: 'kidcloset-ed181.appspot.com',
        messagingSenderId: '440216124221'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Text>Hello World!</Text>
      </Provider>
    );
  }
}

export default App;
