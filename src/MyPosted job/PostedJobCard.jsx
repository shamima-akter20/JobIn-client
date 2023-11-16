import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import EditModal from "./EditModal";

export default function PostedJobCard({ data }) {
  const {
    _id,
    email,
    job_title,
    deadline,
    Category,
    max_price,
    min_price,
    description,
  } = data;

  const queryClient = useQueryClient()

  const {mutate, data:deletedData} = useMutation({
    mutationKey: ["deleteJob"],
    mutationFn: async (_id)=>{
      const res = await fetch(`https://b8-assignment-11-server.vercel.app/addjob/${_id}`,{
        method: 'DELETE'

      })
      const data = res.json()
      return data;
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['postedJob'] })
    },
  })

  const handleDelete = _id =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(_id)
       
           if(deletedData.deletedCount > 0){
                Swal.fire({
                title: "Deleted!",
                text: "Your job has been deleted.",
                icon: "success" });
         
           }
        }
      
    });
  }

  return (
    <div className="p-6 w-full rounded-xl bg-white bg-opacity-90 text-gray-700 ">
      <div className="flex justify-between">
        {/* --------- left side ---------- */}
        <div>
          <h2 className="text-3xl font-bold">{Category}</h2>
          <h2 className="text-2xl font-semibold">{job_title}</h2>
          <h3 className="text-lg font-semibold">
            <i className="fa-regular fa-calendar-days"></i> Deadline :{" "}
            {deadline}{" "}
          </h3>
        </div>

        {/* ---------- right side -------- */}
        <div>
          <div className="flex flex-col">
   
              <button className="btn btn-outline mb-2"
               onClick={() => document.getElementById(`${_id}`).showModal()}  >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
           
           <EditModal data={data}/>

            <button onClick={() => handleDelete(_id)}
            className="btn btn-outline"><i className="fa-solid fa-trash"></i> 
            </button>
          </div>
        </div>
      </div>
      <h4 className="text-sm font-bold">
        <i className="fa-regular fa-envelope"></i> Posted by : {email}{" "}
      </h4>
      <p>{description}</p>
      <h4 className="font-semibold">
        <i className="fa-solid fa-dollar-sign"></i> Price : {max_price}$ -{" "}
        {min_price}${" "}
      </h4>
      <button></button>
    </div>
  );
}
