import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ViewWorkFlow from './components/view/ViewWorkFlow.jsx';
import WorkflowList from './components/WorkflowList.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <WorkflowList />,
      },
      {
        path: "/workflows/:id",
        element: <ViewWorkFlow />,
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} basename={'/'} />
); 

