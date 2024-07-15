import Home from '../pages/Home';
import Signup  from '../pages/Signup';
import Signin from '../pages/Signin';
import Details from '../pages/Details';
import Delete from '../pages/Delete';

const routes = [
    {
      path: '/',
      element: <Signup></Signup>
    },
    {
      path: 'signin',
      element: <Signin />,
    },
    {
      path: 'home',
      element: <Home />,
    },
    {
        path: 'details',
        element: <Details></Details>
    },
    {
        path: 'delete/:userId',
        element: <Delete></Delete>
    }
  ];

  
  
  export default routes;