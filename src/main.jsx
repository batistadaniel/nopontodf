import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';

// configuracao de router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import 'leaflet/dist/leaflet.css';

// rotas
import MapView from "./routes/MapView";
import Teste from './routes/Teste.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "MapView",
        element: <MapView />,
      },
      {
        path: "teste",
        element: <Teste />,
      },
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
