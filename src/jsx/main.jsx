import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { EmailForm } from './EmailForm/EmailForm';

ReactDOM.createRoot(document.getElementById('team-container')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('subscribe')).render(
  <React.StrictMode>
    <EmailForm />
  </React.StrictMode>
);
