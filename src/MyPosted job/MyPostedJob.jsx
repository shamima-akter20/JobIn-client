import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Pages/Authentication/AuthProvider";
import MySpinner from "../components/MySpinner";
import WebTitle from "../components/WebTitle";
import PostedJobCard from "./PostedJobCard";

const MyPostedJob = () => {
  const {user} = useContext(AuthContext)
 

  const {data: jobData, isPending } = useQuery({
    queryKey: ["postedJob"],
    queryFn: async ()=>{
      const response = await fetch(`https://b8-assignment-11-server.vercel.app/getMyJob/${user?.email}`, {
        credentials: 'include'
      })
      const data = response.json()
      return data;
    }
  })

  if(isPending) return <MySpinner/>
  return (
    <div className="">
      <WebTitle>My Posted Job</WebTitle>
      <div className="hero "
        style={{
          backgroundImage: "url(https://i.ibb.co/HKqGMrn/jobi-3.webp )",
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
