import React from 'react';
import Navbar from './components/navbar'
import './App.css';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


function App() {
  return (
      <div className="App">
        <Navbar />
      </div>
  );
}

export default App;


