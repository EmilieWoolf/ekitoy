<<<<<<< HEAD
import React from 'react';
import Navbar from './components/navbar';
import './App.css';
=======
>>>>>>> 1f2152b7dbd75daf846f985689fd3e686b5b126e
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
      </div>
    </Provider>
  );
}

export default App;
