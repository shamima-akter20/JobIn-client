import { useMutation, useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import MySpinner from "../../components/MySpinner";
import WebTitle from "../../components/WebTitle";
import { AuthContext } from "../Authentication/AuthProvider";

const MyBid = () => {
  const { user } = useContext(AuthContext);

  const [sort, setSort] = useState(true);

  const [bidData, setBidData] = useState([]);
  const { data, status, isPending, refetch, isFetched } = useQuery({
    queryKey: ["bidJob"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:1212/bidJobQuery?userEmail=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["complete"],
    mutationFn: async (id) => {
      const res = await fetch(`http://localhost:1212/completeBid/${id}`, {
        method: "put",
      });
      const data = res.json();
      return data;
    },
  });

  useEffect(()=>{
      if (status === "success") {
        setBidData(data);
      }
    }, [status])

  if (isPending) return <MySpinner />;

  const handleComplete = (id) => {
    mutate(id);
    refetch();
  };
  // console.log(bidData);

  const handleSort = () => {
    console.log(sort);
    fetch(`http://localhost:1212/sortMyBidData/${user?.email}?sort=${sort}`)
      .then((res) => res.json())
      .then((da) => {
        setBidData(da);
      });
    setSort(!sort);
  };

  return (
    <div>
      <WebTitle>My Bid</WebTitle>
      <div className="overflow-x-auto px-14 py-10">
        <button className="btn btn-info btn-outline" onClick={handleSort}>
          Sort By {!sort ? "Ascending" : "Descending"} Status
        </button>
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
            {bidData?.map((bid) => {
              const { _id, status, userEmail, deadline, job_title } = bid;
              // console.log(bid);

              return (
                <tr key={_id}>
                  <th>{job_title}</th>
                  <td>{userEmail}</td>
                  <td>{deadline}</td>
                  <td>{status}</td>
                  <td>
                    <button
                      disabled={status !== "In Progress"}
                      onClick={() => handleComplete(_id)}
                      className="btn btn-outline btn-info btn-sm"
                    >
                      Complete{" "}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBid;
