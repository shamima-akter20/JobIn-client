import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import error from "./error.json";

const Error = () => {
    return (
    <div className="flex flex-col justify-center items-center text-center my-20 ">
    <Lottie animationData={error} loop={true} className="h-96" />

    <div>
    <h1 className="font-bold">Back to
        <Link to="/"><button className="btn btn-outline mx-4" >Home</button></Link>
    </h1>
    </div>
    </div>
    );
};

export default Error;