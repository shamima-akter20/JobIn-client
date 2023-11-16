import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import EditModal from "../MyPosted job/EditModal";
import MyPostedJob from "../MyPosted job/MyPostedJob";
import AddJobs from "../Pages/AddJobs/AddJobs";
import BidNow from "../Pages/Home/BidNow";
import Category from "../Pages/Home/Category";
import MyBid from "../Pages/MyBid.jsx/MyBid";
import BidRequest from "../Pages/bidRequest/BidRequest";
import LogIn from "./../Pages/Authentication/LogIn";
import PrivateRoute from "./../Pages/Authentication/PrivateRoute";
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
          element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute> ,
        },
        {
          path:'/category/:category',
          element:<Category></Category> ,
        },
        {
          path:'/mybid',
          element:<PrivateRoute><MyBid/></PrivateRoute> 
        },
        {
          path:'/mypostedjob',
          element:<PrivateRoute>
            <MyPostedJob></MyPostedJob>
          </PrivateRoute>,
        },
        {
          path:'/editmodal/:id',
          element:<EditModal></EditModal> ,
          loader: ({params}) => fetch(`http://localhost:1212/addjob/${params.id}`),
        },
        {
          path:"/bidnow/:id",
          element:<PrivateRoute><BidNow></BidNow></PrivateRoute> ,
          loader:({params})=>fetch(`http://localhost:1212/addjob/${params.id}`),
        },
        {
          path: "/bidRequest",
          element: <PrivateRoute><BidRequest/></PrivateRoute>
        }
      ]
    },
  ]);


  export default router;