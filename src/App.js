import React from 'react';
import './App.css';
import RegistrationContainer from "./components/RegistrationContainer";
import {createStore} from "redux";
import rootReducer from './store/reducer';
import {Provider} from "react-redux";
import AuthContainer from "./components/AuthContainer";

const store = createStore(rootReducer);

export default class App extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <h1>Complex State</h1>

          <div className="forms">
            <AuthContainer/>
            <RegistrationContainer/>
          </div>
        </div>
      </Provider>
    );
  }
}


