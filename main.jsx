import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store } from './app/store.js';
import { Provider } from 'react-redux';
import { fetchUsers } from './features/users/usersSlice.js';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

store.dispatch(fetchUsers());
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
    
      </Router>
    
    </Provider>
  </React.StrictMode>,
)
 