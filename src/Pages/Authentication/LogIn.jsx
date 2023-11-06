import Lottie from "lottie-react";
import Login from "./Login.json";
("use client");

import { Card, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const LogIn = () => {

  const handleLogIn = e =>{
    e.preventDefault('');
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
   
    const email = form.get('email');
    const password = form.get('password');

    console.log( email, password);
  }
    
  return (
    <div>

       <h1 className="my-10 text-3xl md:text-5xl font-bold text-center" >
        Please Log<span className=" text-cyan-500">in</span>
       </h1>

      <div className="flex flex-col md:flex-row mb-12 md:mb-24">

        <div className="flex-1 px-10 md:px-20 justify-start ">
          <Card className="w-full ">
            <form onSubmit={handleLogIn} className="flex flex-col gap-4">
            <div>
                 <div className="mb-2 block">
                   <Label htmlFor="email1" value="Your email" />
                 </div>
                 <TextInput
                   id="email1" name="email"
                   type="email"
                   placeholder="User Email" required
                 />
               </div>
               <div>
                 <div className="mb-2 block">
                   <Label htmlFor="password1" value="Your password" />
                 </div>
                 <TextInput 
                 id="password1" name="password"
                 type="password" 
                 placeholder="Password" required />
               </div>

                 
             <h1 className="" >No Account?<Link to="/register"
             className="font-bold text-cyan-500 " >Register </Link> </h1>

             
              <button className="btn btn-outline btn-info font-bold">LOGIN</button>
           
            </form>
 
            <div className="flex mb-6 justify-center">  
              <button 
               className="btn  font-bold ">
              <img className="h-8" src="https://i.ibb.co/tJMpW3j/icons8-google-48.png" alt="" />
               Login With Google
             </button>
            </div> 
               

          </Card>
        </div>
      {/* <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>  */}

        <div className="flex-1">
          <Lottie animationData={Login} loop={true} className="h-96" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
