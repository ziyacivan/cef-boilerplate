import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import '@fontsource-variable/inter';

declare global {
  interface Window {
    mp: {
      events: {
        add: (eventName: string, callback: Function) => void;
      },
      invoke: (eventName: string, ...args: any[]) => void;
    }
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);