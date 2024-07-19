import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/Store';
import Dashboard from './components/DashBoard';
import Login from './components/Login'
import './index.css';

const App = () => {
  return (
    <Provider store={store}>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>

    </Provider>
  );
};

export default App
