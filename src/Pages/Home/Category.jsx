
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import MySpinner from "../../components/MySpinner";

const Category = () => {
    // const [loadData, setLoadData] = useState([]);
    // useEffect(() => {
    //     fetch("https://b8-assignment-11-server.vercel.app/addjob")
    //     .then((res) => res.json())
    //     .then((data) => setLoadData(data));
    // },[]);

    const {data:loadData, isPending, isError, error} = useQuery({
      queryKey: ["allJob"],
      queryFn: async ()=>{
        const res = await fetch("https://b8-assignment-11-server.vercel.app/addjob")
        const data = await res.json()
        return data;
      }
    })

    if(isPending){
      return <MySpinner/>
    }
    
    console.log(isPending, isError, error);
    
    const data = [
        {
          label: "Web Development",
          value: "web development",
         
        },
        {
          label: "Digital Marketing",
          value: "digital marketing",
          
        },
        {
          label: "Graphics Design.",
          value: "graphics design",
          
        },
        
      ];
    return (
      <div className="bg-slate-100 p-6">
          <h1 className="text-3xl md:text-4xl text-center my-10 font-bold">
           Job Cate<span className="text-cyan-500">gor</span>y</h1>
          <div className="">
          <Tabs value="web development" className="">
                <TabsHeader className="bg-transparent"
                  indicatorProps={{
                    className: "bg-cyan-300 shadow-none !text-gray-900",
                  }} >
                    {data.map(({ label, value }) => (
                    <Tab className="md:text-xl font-semibold" key={value} value={value}>
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>

                <TabsBody>
                  {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {loadData.map(data=> {
                        // console.log(Object.keys(data).join(','));
                        const {_id,email,job_title,deadline,Category,max_price,min_price,description } = data
                        const loadedCategory = data.Category.toLowerCase()
                        const clientCategory = value.toLowerCase()
                        if(loadedCategory === clientCategory){
                            return  <div key={data._id} className="card w-full bg-white ">
                            <div className="card-body">
                                <h2 className="text-2xl font-bold ">{job_title}</h2>
                                <p>{description}</p>
                                <p className="">Price range : {min_price} - {max_price} $</p>
                                <h2 className="font-bold" >Deadline : {deadline} </h2>
                                <div className="card-actions justify-center ">
                                   <Link  to={`/bidnow/${_id}`} >
                                   <button className="btn btn-outline btn-info w-full ">Bid Now</button>
                                   </Link>
                               </div>
                          </div>
                          </div>
                        }
                      })}
                    </TabPanel>
                  ))}
                </TabsBody>
          </Tabs>
          </div>
      </div>
    );
};

export default Category;