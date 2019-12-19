import React from 'react';
import Navbar from './components/navbar'
import './App.css';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, {}, compose(applyMiddleware(thunk)))

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
