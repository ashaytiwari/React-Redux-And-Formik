import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import ReduxContainer from './components/ReduxContainer';
import YoutubeForm from './components/YoutubeForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <YoutubeForm />
        <ReduxContainer />
      </div>
    </Provider>
  );
}

export default App;
