import Lottie from "lottie-react";
import error from "./error.json";

const Error = () => {
    return (
    <div className="flex justify-center items-center text-center my-20 ">
    <Lottie animationData={error} loop={true} className="h-96" />
    </div>
    );
};

export default Error;