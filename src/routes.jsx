import { createBrowserRouter, Outlet } from 'react-router-dom'
import MainLayout from './layout/MainLayout';
import { Children } from 'react';
import Products from './pages/products/Products';
import Home from './pages/home/Home';
import Register from './pages/regester/Register';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
         index:true,
         element: <Home />
        },
        {
            path: "prducts",
            element: <Products />
        },
        {
            path: "cart",
            element: <Cart />

        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "regiter",
            element: <Register />
        }

    ]
  },
]);
export default router;