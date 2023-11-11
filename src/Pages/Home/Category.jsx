
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
    const [loadData, setLoadData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:1212/addjob")
        .then((res) => res.json())
        .then((data) => setLoadData(data));
    },[]);
    
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
      <div>
          <h1 className="text-3xl md:text-4xl text-center my-10 font-bold">
           Job Cate<span className="text-cyan-500">gor</span>y</h1>
           <Tabs value="web development" className="max-w-[40rem]">
                <TabsHeader                 className="bg-transparent"
                  indicatorProps={{
                    className: "bg-gray-900/10 shadow-none !text-gray-900",
                  }} >
                    {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>

                <TabsBody>
                  {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                      {loadData.map(data=> {
                        // console.log(Object.keys(data).join(','));
                        const {_id,email,job_title,deadline,Category,max_price,min_price,description } = data
                        const loadedCategory = data.Category.toLowerCase()
                        const clientCategory = value.toLowerCase()
                        if(loadedCategory === clientCategory){
                            return  <div key={data._id} className="card w-96 bg-whitw shadow-2xl">
                            <div className="card-body">
                                <h2 className="text-2xl font-bold">{job_title}</h2>
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
    );
};

export default Category;