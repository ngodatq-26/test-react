import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import RoutesConfig from './RoutesConfig';
function App() {
  return (
    <RouterProvider router={RoutesConfig} />
  );
}

export default App;
