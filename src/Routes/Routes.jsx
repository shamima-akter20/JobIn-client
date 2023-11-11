import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import MyPostedJob from "../MyPosted job/MyPostedJob";
import AddJobs from "../Pages/AddJobs/AddJobs";
import BidNow from "../Pages/Home/BidNow";
import Category from "../Pages/Home/Category";
import MyBid from "../Pages/MyBid.jsx/MyBid";
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
        {
          path:'/category/:category',
          element:<Category></Category> ,
        },
        {
          path:'/mybid',
          element:<MyBid></MyBid> ,
        },
        {
          path:'/mypostedjob',
          element:<MyPostedJob></MyPostedJob>,
        },
        {
          path:"/bidnow/:id",
          element:<BidNow></BidNow> ,
          loader:({params})=>fetch(`http://localhost:1212/addjob/${params.id}`),
        },
      ]
    },
  ]);


  export default router;