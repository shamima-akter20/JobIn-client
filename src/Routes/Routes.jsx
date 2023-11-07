import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import AddJobs from "../Pages/AddJobs/AddJobs";
import LogIn from "./../Pages/Authentication/LogIn";
import Register from "./../Pages/Authentication/Register";
import Error from "./../Pages/Error/Error";
import Home from "./../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home> ,
        },
        {
          path:'/login',
          element:<LogIn></LogIn> ,
        },
        {
          path:'/register',
          element:<Register></Register> ,
        },
        {
          path:'/addjobs',
          element:<AddJobs></AddJobs> ,
        },
      ]
    },
  ]);


  export default router;