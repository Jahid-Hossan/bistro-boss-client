import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Dashboard from "../pages/Home/Dashboard/Dashboard";
import Cart from "../pages/Home/Dashboard/Cart/Cart";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'userHome',
        element: <Cart></Cart>
      },
      {
        path: 'reservation',
        element: <Cart></Cart>
      },
      {
        path: 'paymentHistory',
        element: <Cart></Cart>
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'addReview',
        element: <Cart></Cart>
      },
      {
        path: 'booking',
        element: <Cart></Cart>
      }
    ]
  }
]);