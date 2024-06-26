import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme'; // Import the theme
import { LanguageProvider } from './LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <LanguageProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
    <App />
    </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
