import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import WebTitle from "../../components/WebTitle";
import { AuthContext } from "../Authentication/AuthProvider";


const AddJobs = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const {mutate, data, status} = useMutation({
      mutationKey: ["addJob"],
      mutationFn: async(formInfo)=>{
        const res =  await fetch('https://b8-assignment-11-server.vercel.app/addJob', {
          method: 'POST',
          headers:{
             'content-type': 'application/json'
          },
          body: JSON.stringify(formInfo)
       })
       const data = res.json()
       return data;
      }
    })

    const handleAddJob = e =>{
      e.preventDefault();

      const userName = user?.displayName;
      const userImage = user?.photoURL;
      const form = e.target;
      const email = user?.email;
      const job_title = form.job_title.value;
      const deadline = form.deadline.value;
      const Category = form.Category.value;
      const max_price = form.max_price.value;
      const min_price = form.min_price.value;
      const description = form.description.value;
      const formInfo = {userName, userImage,
      email, job_title, deadline,Category, max_price, min_price, description } 
      console.log(formInfo);
    
      mutate(formInfo)
    }

    if(status === 'success'){
      if(data.insertedId){
       Swal.fire({
         title: "Good job!",
         text: "You Added Successfully!",
         icon: "success"
       });
       navigate(location?.state ? location.state : '/mypostedjob' );
     }
    }


    return (
  <div>
    <WebTitle>Post Job</WebTitle>
    <h1 className="font-bold text-center py-8 text-3xl md:text-4xl">Add J<span className="text-cyan-500 " >ob</span> </h1>
      <form onSubmit={handleAddJob}
      className="mx-12 md:mx-20 mb-16">
{/* ----------------------------- 1 --------------------------- */}
         <div className="flex gap-6 flex-col md:flex-row " >
             {/* Email of the employer */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input type="email" name="email" defaultValue = {user?.email}
                  className="input input-bordered" required />
               </div>
       
               {/* job title */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text"> Job title</span>
                 </label>
                 <input type="text" name="job_title" placeholder=" Job title" className="input input-bordered" required />
               </div>
         </div>
{/* -------------------------------- 2 ----------------------------- */}
         <div className="flex gap-6 flex-col md:flex-row " >
             {/* deadline */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Deadline</span>
                 </label>
                 <input type="date" name="deadline" placeholder="Deadline" className="input input-bordered" required />
               </div>
       {/* apnar kas theke ekhon ekta jinis sikhlam ei je sundor kore comment kora */}
               {/* Category */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Category</span>
                 </label>
                 <select name="Category" className="input input-bordered" id="">
                    <option value="Web development">Web development</option>
                    <option value="Digital marketing">Digital marketing</option>
                    <option value="Graphics design">Graphics design</option>
                 </select>
                 {/* <input type="text" name="category" placeholder="Deadline" className="input input-bordered" required />
                  */}
               </div>
         </div>

{/* -------------------------------- 3 ----------------------------- */}
         <div className="flex gap-6 flex-col md:flex-row " >
             {/* Maximum price */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Maximum price</span>
                 </label>
                 <input type="text" name="max_price" placeholder="Maximum price" className="input input-bordered" required />
               </div>
       
               {/*Minimum price */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Minimum price</span>
                 </label>
                 <input type="text" name="min_price" placeholder="Minimum price" className="input input-bordered" required />
               </div>
         </div>
{/* -------------------------------- 4 ----------------------------- */}
         <div className="" >
             {/* Description */}
               <div className="form-control ">
                 <label className="label">
                   <span className="label-text">Description</span>
                 </label>
                 <textarea  type="text" name="description" placeholder="Description" className="input h-20 input-bordered" required />
               </div>
         </div>



        <div className="form-control mt-6">
          <button className="btn btn-outline btn-info">Add Job</button>
        </div>
      </form>
   </div>
    );
};

export default AddJobs;