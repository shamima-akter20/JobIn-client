import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import MySpinner from "../../components/MySpinner";
import WebTitle from "../../components/WebTitle";
import { AuthContext } from "../Authentication/AuthProvider";

const MyBid = () => {
  const { user } = useContext(AuthContext);

  const [sort, setSort] = useState(true);

  const queryClient = useQueryClient()

  const [bidData, setBidData] = useState([]);

  const { data, status, isPending, refetch } = useQuery({
    queryKey: ["bidJob"],
    queryFn: async () => {
      const res = await fetch(
        `https://b8-assignment-11-server.vercel.app/bidJobQuery?userEmail=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["complete"],
    mutationFn: async (id) => {
      const res = await fetch(`https://b8-assignment-11-server.vercel.app/completeBid/${id}`, {
        method: "put",
      });
      const data = await res.json();
      return data;
    },
    onSuccess: queryClient.invalidateQueries(["bidJob"])
  });

  useEffect(()=>{
      if (status === "success") {
        setBidData(data);
      }
    }, [status, data])

  if (isPending) return <MySpinner />;

  const handleComplete = async (id) => {
    mutate(id);
   const da =  await refetch();
   console.log(da.data);
    setBidData(da.data)
  };
  // console.log(bidData);

  const handleSort = () => {
    console.log(sort);
    fetch(`https://b8-assignment-11-server.vercel.app/sortMyBidData/${user?.email}?sort=${sort}`)
      .then((res) => res.json())
      .then((da) => {
        setBidData(da);
      });
    setSort(!sort);
  };

  return (
    <div>
      <WebTitle>My Bid</WebTitle>
      <h1 className="font-bold text-center py-8 text-3xl md:text-4xl">
        My B<span className="text-cyan-500 " >ids</span> </h1>

      <div className="overflow-x-auto px-14 py-6">
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
              const { _id, status, buyer_email, deadline, job_title } = bid;
              // console.log(bid);

              return (
                <tr key={_id}>
                  <th>{job_title}</th>
                  <td>{buyer_email}</td>
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
