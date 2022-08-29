import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FeedbackContextProvider } from './context/FeedbackContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FeedbackContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FeedbackContextProvider>,
);
