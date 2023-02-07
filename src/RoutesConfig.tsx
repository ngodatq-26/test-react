import React, { Suspense } from 'react'
import {Routes, Route, useLocation, createBrowserRouter} from 'react-router-dom';
import { ROUTES } from './config/ROUTES';
import HomePage from './modules/home/pages/HomePage';
const RoutesConfig = createBrowserRouter([
   {
      path : "/",
      element : <HomePage />
   },
   {
      path : "/home",
      element : <HomePage />
   }
])

export default RoutesConfig