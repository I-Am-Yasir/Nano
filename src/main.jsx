// index.jsx (or main.jsx)
import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import ReactDOM from 'react-dom/client'; // Use the correct import for React 18
import App from './App';
import './index.css'; // Assuming you have some global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Ensure BrowserRouter is only here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
