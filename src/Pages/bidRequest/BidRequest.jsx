import { useMutation, useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import MySpinner from "../../components/MySpinner";
import WebTitle from "../../components/WebTitle";
import { AuthContext } from "../Authentication/AuthProvider";


export default function BidRequest() {
    const {user} = useContext(AuthContext)
  

    const {data : bidData , isPending, refetch} = useQuery({
      queryKey:["bidrequest"],
      queryFn: async()=>{
        const response =  await fetch(` http://localhost:1212/myBid?buyer_email=${user?.email}`)
        const data = response.json()
        return data ;
      }
    })

    const {mutate} = useMutation({
      mutationKey: ["handleAccept"],
      mutationFn: async (id)=>{
        const res = await fetch(`http://localhost:1212/acceptedBid/${id}`, {
          method: "put"
        })
        const data = await res.json()
        return data;
      }
    })

    const {mutate:deleteMutate} = useMutation({
      mutationKey: ['handleDelete'],
      mutationFn: async (id)=>{
        const res = await  fetch(`http://localhost:1212/rejectedBid/${id}`, {
          method: "put"
        })
        const data = res.json()
        return data;
      }
    })


  if(isPending) return <MySpinner/>


    const handleAccept = (id)=>{
      mutate(id)
      refetch()
    }

    const handleDelete = (id)=>{
      deleteMutate(id)
      refetch()
    }


// achen ? +
  return (
    <div className="px-10">
      <WebTitle>Bid Request</WebTitle>
    <div className="overflow-x-auto my-14">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Job Title</th>
        <th>Email</th>
        <th>Price</th>
        <th>Deadline</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {bidData.map(bid=> {
     
      const {_id,status,userEmail,deadline,job_title,myPrice} = bid;
      return  <tr key={_id}>
      
      <td>{job_title}</td>
      <td>{userEmail}</td>
      <td>{myPrice}</td>
      <td>{deadline}</td>
      <td>{status}</td>
      <td>
       {status === 'pending' ? <div className="flex gap-2">
         <button onClick={()=>handleAccept(_id)} className="btn btn-outline btn-sm ">Accept</button>
         <button onClick={()=>handleDelete(_id)} className="btn btn-outline btn-sm">Reject</button>
       </div>: <progress className="progress w-56" value={10} max="100"></progress>}
      </td>
     </tr>
     })}
    
      
    </tbody>
   {/*  */}
    
  </table>
</div>
    </div>
  )
}
