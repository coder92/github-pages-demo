import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlexDemo from './components/FlexDemo';
import { BrowserRouter, Routes } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';
import ThemeRoutes from './routes/ThemeRoutes';

const App = () => (
  <BrowserRouter>
    <Routes>
      <ThemeRoutes />
    </Routes>

  </BrowserRouter>

);

export default App;