import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import ReduxContainer from './components/ReduxContainer';
import YoutubeForm from './components/YoutubeForm';
import FormikContainer from './Form components/FormikContainer';
import RegistrationForm from './Form components/RegistrationForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RegistrationForm />
        <FormikContainer />
        <YoutubeForm />
        <ReduxContainer />
      </div>
    </Provider>
  );
}

export default App;
