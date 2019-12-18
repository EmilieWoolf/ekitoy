import React from 'react';
import NavbarFoot from './components/NavbarFoot';
import NavbarHead from './components/NavbarHead';
import ToyList from './components/ToyList';
import NewToyForm from './components/NewToyForm';
import reducer from './reducers/reducer';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavbarHead />
          <NewToyForm />
          <NavbarFoot />
        </div>

      </Router>
    </Provider>
  );
}

export default App;
