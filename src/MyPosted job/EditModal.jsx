import Swal from "sweetalert2";


export default function EditModal({data}) {
  // console.log(data);
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
      
      const handleUpdate = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const job_title = e.target.job_title.value;
        const deadline = e.target.deadline.value;
        const Category = e.target.Category.value;
        const max_price = e.target.max_price.value;
        const min_price = e.target.min_price.value;
        const description = e.target.description.value;
       
        const updateInfo = {
        email, job_title, deadline,Category, max_price, min_price, description } 
        console.log(updateInfo);

        //send data to server
            fetch(`http://localhost:1212/addjob/${_id}`,{
              method: 'PUT',
              headers:{
                'content-type' : 'application/json'
              },
              body:JSON.stringify(updateInfo),
            })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               document.getElementById(_id).close()
               if(data.modifiedCount > 0){
                    Swal.fire({
                    title: "Success!",
                    text: "Your job updated successfully.",
                    icon: "success" });
             
               }
            })
          
        
      }

  return (
    <dialog id={_id} className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <form onSubmit={handleUpdate} 
                   className="mx-12 md:mx-20 mb-16">
                   <h1 className="font-bold text-center py-4 text-3xl md:text-4xl">
                    Update J<span className="text-cyan-500 ">ob</span>
                  </h1>
                  {/* -------------------------------- 1 ----------------------------- */}
                  <div className="flex gap-6 flex-col md:flex-row ">
                    {/* Email of the employer */}
                    <div className="form-control flex-1">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        readOnly
                        className="input input-bordered"
                      />
                    </div>

                    {/* job title */}
                    <div className="form-control flex-1">
                      <label className="label">
                        <span className="label-text"> Job title</span>
                      </label>
                      <input
                        type="text"
                        name="job_title"
                        defaultValue={job_title}
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  {/* -------------------------------- 2 ----------------------------- */}
                  <div className="flex gap-6 flex-col md:flex-row ">
                    {/* deadline */}
                    <div className="form-control flex-1">
                      <label className="label">
                        <span className="label-text">Deadline</span>
                      </label>
                      <input
                        type="date"
                        name="deadline"
                        defaultValue={deadline}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* apnar kas theke ekhon ekta jinis sikhlam ei je sundor kore comment kora */}
                    {/* Category */}
                    <div className="form-control flex-1">
                      <label className="label">
                        <span className="label-text">Category</span>
                      </label>
                      <select
                        name="Category"
                        defaultValue={Category}
                        className="input input-bordered"
                        id=""
                      >
                        <option value="Web development">Web development</option>
                        <option value="Digital marketing">
                          Digital marketing
                        </option>
                        <option value="Graphics design">Graphics design</option>
                      </select>
                      {/* <input type="text" name="category" placeholder="Deadline" className="input input-bordered" required />
                       */}
                    </div>
                  </div>

                  {/* -------------------------------- 3 ----------------------------- */}
                  <div className="flex gap-6 flex-col md:flex-row ">
                    {/* Maximum price */}
                    <div className="form-control flex-1">
                      <label className="label">
                        <span className="label-text">Maximum price</span>
                      </label>
                      <input
                        type="text"
                        name="max_price"
                        defaultValue={max_price}
                        className="input input-bordered"
                        required
                      />
                    </div>

                    {/*Minimum price */}
                    <div className="form-control flex-1">
                      <label className="label">
                        <span className="label-text">Minimum price</span>
                      </label>
                      <input
                        type="text"
                        name="min_price"
                        defaultValue={min_price}
                        className="input input-bordered"
                        required
                      />
                    </div>
                  </div>
                  {/* -------------------------------- 4 ----------------------------- */}
                  <div className="">
                    {/* Description */}
                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text">Description</span>
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        defaultValue={description}
                        className="input h-20 input-bordered"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-outline btn-info">
                      Update Job
                    </button>
                  </div>
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
  )
}
