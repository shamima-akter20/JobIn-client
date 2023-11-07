import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";


const AddJobs = () => {
    const { user } = useContext(AuthContext);
    return (
  <div>
    <h1 className="font-bold text-center py-8 text-3xl md:text-4xl">Add J<span className="text-cyan-500 " >ob</span> </h1>
      <form className="mx-12 md:mx-20 mb-16">
{/* ----------------------------- 1 --------------------------- */}
         <div className="flex gap-6 flex-col md:flex-row " >
             {/* Email of the employer */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input type="email" name="email" placeholder= {user.email}
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
                 <input type="text" name="deadline" placeholder="Deadline" className="input input-bordered" required />
               </div>
       
               {/* Category */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Category</span>
                 </label>
                 <select name="Category" className="input input-bordered" id="">
                    <option value="webdevelopment">Web development</option>
                    <option value="digitalmarketing">Digital marketing</option>
                    <option value="graphicsdesign">Graphics design</option>
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
                 <input type="text" name="max-price" placeholder="Maximum price" className="input input-bordered" required />
               </div>
       
               {/*Minimum price */}
               <div className="form-control flex-1">
                 <label className="label">
                   <span className="label-text">Minimum price</span>
                 </label>
                 <input type="text" name="min-price" placeholder="Minimum price" className="input input-bordered" required />
               </div>
         </div>
{/* -------------------------------- 4 ----------------------------- */}
         <div className="" >
             {/* Description */}
               <div className="form-control ">
                 <label className="label">
                   <span className="label-text">Description</span>
                 </label>
                 <textarea type="text" name="description" placeholder="Description" className="input input-bordered" required />
               </div>
         </div>



        <div className="form-control mt-6">
          <button className="btn btn-outline btn-info">Login</button>
        </div>
      </form>
   </div>
    );
};

export default AddJobs;