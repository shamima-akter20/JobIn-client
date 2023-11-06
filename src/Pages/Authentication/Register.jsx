import Lottie from "lottie-react";
import Login from "./Login.json";
("use client");

import { Card, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault('');
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const image = form.get('image');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, image, email, password);

        // create user
        createUser( email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
      }
        

    return (
        <div>

        <h1 className="my-10 text-3xl md:text-5xl font-bold text-center" >
         Please Reg<span className=" text-cyan-500">is</span>ter 
        </h1>
 
       <div className="flex flex-col md:flex-row mb-12 md:mb-24">
 
         <div className="flex-1 px-10 md:px-20 justify-start ">
           <Card className="w-full ">
             <form onSubmit={handleRegister} className="flex flex-col gap-4">
                 {/* Name */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Name" value="Name" />
                </div>
                <TextInput
                  id="name" name="name"
                  type="text"
                  placeholder="Name" required
                />
              </div>
              {/* image URL */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="image" value="Image" />
                </div>
                <TextInput
                  id="image" name="image"
                  type="url"
                  placeholder="Image Url" required
                />
              </div>
              {/* Email */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Email" />
                </div>
                <TextInput
                  id="email1" name="email"
                  type="email"
                  placeholder="Email" required
                />
              </div>
              {/* Password */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Password" />
                </div>
                <TextInput 
                id="password1" name="password"
                type="password" 
                placeholder="Password" required />
              </div>

             <h1 className="" >Already have an account?<Link to="/login"
             className="font-bold text-cyan-500 "> Login</Link> </h1>

              
               <button className="btn btn-outline btn-info font-bold">REGISTER</button>
            
             </form>
  
             <div className="flex mb-6 justify-center">  
               <button 
                className="btn  font-bold ">
               <img className="h-8" src="https://i.ibb.co/tJMpW3j/icons8-google-48.png" alt="" />
                Register With Google
              </button>
             </div> 
                
 
           </Card>
         </div>
      
         <div className="flex-1">
           <Lottie animationData={Login} loop={true} className="h-72" />
         </div>
       </div>
     </div>
    );
};

export default Register;