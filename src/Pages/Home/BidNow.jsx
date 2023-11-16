import Lottie from "lottie-react";
import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import WebTitle from "../../components/WebTitle";
import { AuthContext } from "./../Authentication/AuthProvider";
import bid from "./bid.json";

const BidNow = () => {
  const { user } = useContext(AuthContext);
  const loadDetail = useLoaderData();
  const { email, job_title, deadline, max_price, min_price, description } =
    loadDetail;

  const location = useLocation();
  const navigate = useNavigate();

  const handleBid = (e) => {
    e.preventDefault("");
    const form = e.target;
    const userEmail = e.target.email.value;
    const buyer_email = email;
    const myPrice = form.price.value;
    const bidInfo = { status: "pending", userEmail, buyer_email, deadline, job_title, myPrice };
    console.log(bidInfo);
    // hmm ekhane kaj ses. eta korei ba ki hobe?... seta 10 no requirment e kaj korar somoy bujhte parben...ok.. ebar kaj koren ami dekhtesi..ok
    if (user?.email === buyer_email ) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "You Are buyer You can't bid",
      });
    }

    fetch("https://b8-assignment-11-server.vercel.app/bidJob", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bidInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          console.log("agdum");
          //  Swal.fire({
          //    title: "Good job!",
          //    text: "You Added Successfully!",
          //    icon: "success"
          //  });
          toast.success("Successfully toasted!");
          // To("Successfully toasted!")
          navigate(location?.state ? location.state : "/mybid");
        }
      });
  };

  return (
    <div className="mb-14">
      <WebTitle>Job Details</WebTitle>
      <h1 className="text-3xl md:text-4xl text-center my-10 font-bold">
        Job Deta<span className="text-cyan-500">il</span>s
      </h1>
      <div>
        <div className="p-10 bg-gradient-to-r from-[#e3e2e2] to-bg-slate-200 ">
          <h1 className="ml-10 text-2xl md:text-3xl  my-3 font-bold">
            Place Your <span className="text-cyan-500">Bid</span>{" "}
          </h1>
          <div className="flex flex-col md:flex-row mx-10">
            <div className=" flex-1 flex-col">
              {/* -----------------------------------  1 ------------------------------------ */}
              <form onSubmit={handleBid}>
                {/* Email of the employer */}
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered"
                    required
                    defaultValue={user?.email}
                  />
                </div>

                {/* job title */}
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Buyer Email</span>
                  </label>
                  <input
                    type="email"
                    name="buyer_email"
                    defaultValue={email}
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* ---------------------------------  2  ------------------------------------------- */}

                {/* Email of the employer */}
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Deadline</span>
                  </label>
                  <input
                    name="deadline"
                    defaultValue={deadline}
                    className="input input-bordered"
                    required
                  />
                </div>

                {/* job title */}
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered"
                    required
                  />
                </div>

                <button className="w-full mt-3 btn btn-outline btn-info">
                  Bid on the project
                </button>
              </form>
            </div>

            <div className="flex-1">
              <Lottie
                animationData={bid}
                loop={true}
                className="lg:pl-16 h-48 mt-10 lg:mt-0 md:h-64 lg:h-96"
              />
            </div>
          </div>
        </div>
        <div className="my-6 ml-12 mr-12">
          <h1 className="text-3xl md:text-4xl font-bold ">{job_title}</h1>
          <h1 className="mt-6 font-bold">
            <i className="fa-solid fa-calendar-days "></i> Deadline {deadline}{" "}
          </h1>
          <h2 className="mt-2 font-bold">
            <i className="fa-solid fa-dollar-sign"></i> Price range :{" "}
            {min_price}$ - {max_price}$
          </h2>
          <p className="mt-2">
            {description} Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Expedita dolor illum velit iusto libero totam voluptatem culpa
            voluptas dolorem minus optio tempore, in aliquam, nisi vero magni
            saepe obcaecati debitis inventore corporis. Temporibus voluptatem
            animi quis. Ea, aspernatur amet nam, aperiam alias totam quos,
            corporis pariatur sunt tempore impedit consequatur?{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BidNow;
