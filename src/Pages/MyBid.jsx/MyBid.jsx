import { useContext, useEffect, useState } from "react";
import WebTitle from "../../components/WebTitle";
import { AuthContext } from "../Authentication/AuthProvider";

const MyBid = () => {
    const [bidData, setBidData] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(()=> {
        fetch(`http://localhost:1212/bidJob/${user?.email}`)
        .then(res=> res.json())
        .then(data=> setBidData(data))
    }, [])

  return (
    <div>
      <WebTitle>My Bid</WebTitle>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Email</th>
              <th>Deadline</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {/* row 1 */}
            <tr>
              <th>mach kata</th>
              <td>machkata@koshai.com:)</td>
              <td>kalker agerdin :}</td>
              <td>dorkar nai</td>
              <td>
                <button className="btn btn-outline btn-info btn-sm">cholte thakbe </button>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBid;
