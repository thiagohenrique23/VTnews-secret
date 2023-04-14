import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Error from './routes/Error';
import Policial from './routes/Policial';
import Politica from './routes/Politica';
import Cotidiano from './routes/Cotidiano';
import Curiosidades from './routes/Curiosidades';
import Ciencia from './routes/Ciencia';
import Agro from './routes/Agro';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/policial',
        element: <Policial/>
      },
      {
        path: '/politica',
        element: <Politica/>
      },
      {
        path: '/cotidiano',
        element: <Cotidiano/>
      },
      {
        path: '/curiosidades',
        element: <Curiosidades/>
      },
      {
        path: '/ciencia',
        element: <Ciencia/>
      },
      {
        path: '/agro',
        element: <Agro/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
