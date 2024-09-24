import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ViewWorkFlow from './components/view/ViewWorkFlow.jsx';
import WorkflowList from './components/WorkflowList.jsx';
import Login from './components/login/Login.jsx';
import NewWorkflow from './components/new-workflow/NewWorkflow.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <NewWorkflow />,
      },
      {
        path: "/workflows/:id",
        element: <ViewWorkFlow />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} basename={'/'} />
); 

