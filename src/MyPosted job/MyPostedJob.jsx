import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Pages/Authentication/AuthProvider";
import WebTitle from "../components/WebTitle";
import PostedJobCard from "./PostedJobCard";

const MyPostedJob = () => {
  const {user} = useContext(AuthContext)
  const [jobData, setJobData] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:1212/getMyJob/${user?.email}`)
    .then(res=> res.json())
    .then(data=> setJobData(data))
  },[])
  return (
    <div className="">
      <WebTitle>My Posted Job</WebTitle>
      <div
        className="hero "
        style={{
          backgroundImage: "url( https://i.ibb.co/HKqGMrn/jobi-3.webp )",
        }}>
        <div className="hero-overlay bg-opacity-80"  ></div>
          
       <div>
       <h1 className="text-3xl text-center md:text-4xl text-white font-bold text center
           mt-6">My Posted <span className="text-cyan-500">Job</span> </h1>
        <div className="flex px-10 py-12" >
          <div className="grid md:grid-cols-2  gap-6 mx-auto">
            {jobData?.map((data) => (
              <PostedJobCard data={data} key={data._id} />
            ))}
          </div>

        </div>
       </div>
      </div>
    </div>
  );
};

export default MyPostedJob;
