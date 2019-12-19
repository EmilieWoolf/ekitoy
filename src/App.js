import React from 'react';
import Navbar from './components/navbar'
import './App.css';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Navbar />
    </div>
=======
    <Provider store={store} >
      <div className="App">
        <Navbar />
        <Home />
      </div>
      </Provider>
>>>>>>> dev
  );
}

export default App;


