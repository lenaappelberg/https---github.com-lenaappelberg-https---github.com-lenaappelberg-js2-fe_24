import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductDetails from './pages/product';
import { BrowserRouter, createBrowserRouter, Route,RouterProvider,Routes } from "react-router";
import Home from './pages/home';
import Nav from './components/navbar'
import Contacts from './pages/contact';
import Registration from './pages/reg';
import Rootlayout from './layout/rootlayout';
import { Provider } from 'react-redux';
import store from './store';
import Checkout from './pages/checkout';
const router= createBrowserRouter([{
  path:'/',
  element:<Rootlayout/>,
  children: [
     {
      index:true,
      element: <Home/>
     },
     {
      path:'products/:productid',
      element: <ProductDetails/>
     },
     {
      path:'checkout',
      element:<Checkout/>
     },
     {
      path:'contact',
      element:<Contacts/>
     }
  ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
     <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
