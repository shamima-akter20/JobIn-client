import Lottie from "lottie-react";
import Swal from "sweetalert2";
import Login from "./Login.json";
("use client");

import { Card, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import WebTitle from "../../components/WebTitle";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  //google sign in
  const handleGoogle = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      //navigate after login
      navigate(location?.state ? location.state : "/");
      Swal.fire(
        "Registered!",
        "You registered successfully with Google!",
        "success"
      );
    });
  };

  const handleRegister = (e) => {
    e.preventDefault("");
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const image = form.get("image");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, image, email, password);
    //reset error
    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password must have at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Password must have at least 1 uppercase");
      return;
    } else if (!/[#?!@$%^&*()_-]/.test(password)) {
      setRegisterError("Password must have at least 1 special character");
      return;
    }

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Registered!",
          text: "Registered Successfully!",
          icon: "success",
        });

        //navigate after registersd
        //navigate(location?.state ? location.state : '/' );
      })
      .catch((error) => {
        console.error(error);
        setRegisterError("Already registered email or password");
      });
  };

  return (
    <div>
      <WebTitle>Register</WebTitle>
      <h1 className="my-10 text-3xl md:text-5xl font-bold text-center">
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
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              {/* image URL */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="image" value="Image" />
                </div>
                <TextInput
                  id="image"
                  name="image"
                  type="url"
                  placeholder="Image Url"
                  required
                />
              </div>
              {/* Email */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Email" />
                </div>
                <TextInput
                  id="email1"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              {/* Password */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Password" />
                </div>
                <TextInput
                  id="password1"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>

              <h1 className="">
                Already have an account?
                <Link to="/login" className="font-bold text-cyan-500 ">
                  {" "}
                  Login
                </Link>{" "}
              </h1>

              <button className="btn btn-outline btn-info font-bold">
                REGISTER
              </button>
            </form>

            <div className="text-center ">
              {registerError && (
                <p className="text-base text-red-600 font-bold">
                  {/* Already Used Email or Password  */}
                  {registerError}
                </p>
              )}
            </div>

            <div className="flex mb-6 justify-center">
              <button onClick={handleGoogle} className="btn  font-bold ">
                <img
                  className="h-8"
                  src="https://i.ibb.co/tJMpW3j/icons8-google-48.png"
                  alt=""
                />
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
