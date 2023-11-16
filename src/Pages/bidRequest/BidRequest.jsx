import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import MySpinner from "../../components/MySpinner";
import WebTitle from "../../components/WebTitle";
import { AuthContext } from "../Authentication/AuthProvider";


export default function BidRequest() {
    const {user} = useContext(AuthContext)
  
  const queryClient = useQueryClient()
    const {data : bidData , isPending} = useQuery({
      queryKey:["bidrequest"],
      queryFn: async()=>{
        const response =  await fetch(`https://b8-assignment-11-server.vercel.app/myBid?buyer_email=${user?.email}`)
        const data = response.json()
        return data ;
      }
    })

    const {mutate} = useMutation({
      mutationKey: ["handleAccept"],
      mutationFn: async (id)=>{
        const res = await fetch(`https://b8-assignment-11-server.vercel.app/acceptedBid/${id}`, {
          method: "put"
        })
        const data = await res.json()
        return data;
      },
      onSuccess: ()=>{
        queryClient.invalidateQueries(["bidrequest"])
      }
    })

    const {mutate:deleteMutate} = useMutation({
      mutationKey: ['handleDelete'],
      mutationFn: async (id)=>{
        const res = await  fetch(`https://b8-assignment-11-server.vercel.app/rejectedBid/${id}`, {
          method: "put"
        })
        const data = res.json()
        return data;
      },
      onSuccess: ()=>{
        queryClient.invalidateQueries(["bidrequest"])
      }
    })


  if(isPending) return <MySpinner/>


    const handleAccept = (id)=>{
      mutate(id)
      // refetch()
    }

    const handleDelete = (id)=>{
      deleteMutate(id)
      // refetch()
    }


// achen ? +
  return (
    <div className="px-10">
      <WebTitle>Bid Request</WebTitle>
      <h1 className="font-bold text-center py-8 text-3xl md:text-4xl">
        Bid Reque<span className="text-cyan-500 " >sts</span> </h1>
    <div className="overflow-x-auto my-10">
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
