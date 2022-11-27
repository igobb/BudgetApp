import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BudgetsProvider } from './contexts/BudgetContexts';
import {BillsProvider} from "./contexts/BillsContexts";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BudgetsProvider>
          <BillsProvider>
              <App />
          </BillsProvider>
      </BudgetsProvider>
  </React.StrictMode>
);

