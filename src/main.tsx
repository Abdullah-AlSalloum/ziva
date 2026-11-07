import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.css';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { getLanguageDirection, getStoredLanguage } from './i18n/i18n';

injectSpeedInsights();

const initialLanguage = getStoredLanguage();
document.documentElement.lang = initialLanguage;
document.documentElement.dir = getLanguageDirection(initialLanguage);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
