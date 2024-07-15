import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import Details from '../pages/Details';
import Delete from '../pages/Delete';
import App from '../App.jsx';
import Protected from '../layouts/protected';
import Public from '../layouts/public';

import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Signup />,
    children: [
      {
        path: "/",
        element: <Public />,
        children: [
          {
            index: true,
            element: <Signup />
          },
          {
            path: "signin",
            element: <Signin />
          }
        ],
      },
      {
        path: "/",
        element: <Protected />,
        children: [
          {
            path: "home",
            element: <Home />
          },
          {
            path: "details",
            element: <Details />
          },
          {
            path: "delete/:userId",
            element: <Delete />
          }
        ],
      },
    ],
  },
]);

export default routes;
