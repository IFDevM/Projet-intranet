import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './views/Login';
import { store } from './app/store'
import { Provider } from 'react-redux'
import Home from './views/Home';
import CollabList from './views/CollabList';
import UpdatedCollab from './views/UpdatedCollab';
import UpdateProfil from './views/UpdateProfil';
import NewCollab from './views/NewCollab';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Dites-bonjour/",
        element: <Home />,
      },
      {
        path: "collab/",
        element: <CollabList />,
      },
      {
        path: "newcollab/",
        element: <NewCollab />,
      },
      {
        path: "updated-collab/:id",
        element: <UpdatedCollab />,
      },
      {
        path: "update-profil/",
        element: <UpdateProfil />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
