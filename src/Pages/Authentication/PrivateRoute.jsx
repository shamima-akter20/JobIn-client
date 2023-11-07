import { useContext } from "react";
import { Blocks } from 'react-loader-spinner';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({childern}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <div className="my-56 flex justify-center text-center items-center">
              <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"/>
              </div>
    }

    if(user){
        return childern;
    }

    return <Navigate state={location.pathname} to="/login" ></Navigate>;
};

export default PrivateRoute;