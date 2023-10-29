import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './modules/errorBoundary';
import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
