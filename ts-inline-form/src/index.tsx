import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInputs {
  userName: string;
  email: string;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
