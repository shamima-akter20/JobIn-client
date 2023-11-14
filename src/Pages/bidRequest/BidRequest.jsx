import { useContext, useEffect, useState } from "react";
import WebTitle from "../../components/WebTitle";
import { AuthContext } from "../Authentication/AuthProvider";


export default function BidRequest() {
    const [bidData, setBidData] = useState([])
    const {user} = useContext(AuthContext)
    const [isPending, setIspending] = useState(true)
    // console.log(bidData);

    useEffect(()=> {
        fetch(` http://localhost:1212/myBid?buyer_email=${user?.email}`)
        .then(res=> res.json())
        .then(data=> setBidData(data))
    }, [])

    const handleAccept = (id)=>{
      console.log(id);
      // databaser moddhe pending status ta change kore felte hobe
      fetch(`http://localhost:1212/acceptedBid/${id}`, {
        method: "put"
      })
      .then(res=> res.json())
      .then(data=> {
        // console.log(data)
        if(data.modifiedCount){
        const newData =  bidData.map(bidD=> {
          if(bidD._id === id){
            bidD.status = 'In Progress'
            return bidD
          }else{
            return bidD
          }
         })
         setBidData(newData)
        }
      })
    }

    const handleDelete = (id)=>{
      console.log(id);
      // databaser moddhe pending status ta change kore felte hobe
      fetch(`http://localhost:1212/rejectedBid/${id}`, {
        method: "put"
      })
      .then(res=> res.json())
      .then(data=> {
        // console.log(data);
        if(data.modifiedCount){
          const newData =  bidData.map(bidD=> {
            if(bidD._id === id){
              bidD.status = 'Canceled'
              return bidD
            }else{
              return bidD
            }
           })
           setBidData(newData)
          }
      })
    }


// achen ? +
  return (
    <div className="px-10">
      <WebTitle>Bid Request</WebTitle>
      <div className="overflow-x-auto">
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
      // console.log(Object.keys(bid).join(','));
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
