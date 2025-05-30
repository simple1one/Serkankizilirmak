import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';

console.log('index.tsx: Script started.');
console.log('index.tsx: Attempting to import App component...');
if (App) {
  console.log('index.tsx: App component imported successfully.');
} else {
  console.error('index.tsx: App component import failed or App is undefined.');
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('index.tsx: Root element #root not found in the DOM.');
  throw new Error("Could not find root element to mount to");
}
console.log('index.tsx: Root element #root found.');

try {
  console.log('index.tsx: Attempting to create React root...');
  const root = ReactDOM.createRoot(rootElement);
  console.log('index.tsx: React root created. Attempting to render App...');
  root.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );
  console.log('index.tsx: React app render call completed.');
} catch (error) {
  console.error('index.tsx: Error during React rendering:', error);
  // It's possible the error occurs during the initial render of App if App itself has issues.
}
