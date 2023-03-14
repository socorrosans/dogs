import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/login',
    element: <Login/>
  }
])