
import { TabsBody, TabsHeader } from "@material-tailwind/react";
import { Tab } from "bootstrap";
import { Tabs } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TabPanel } from "react-tabs";

const Category = () => {
    const [loadData, setLoadData] = useState([]);
    const [job, setJob] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch("http://localhost:1212/addjob")
        .then((res) => res.json())
        .then((data) => setLoadData(data));
    },[]);
    console.log(loadData);

    useEffect(() =>{
        const remaining = loadData.filter(job=>job?.category.toLowerCase() == params.label.toLowerCase() )
        setJob(remaining);
    },[]);
    console.log(job);
    
    const data = [
        {
          label: "Web Development",
          value: "web_development,",
          desc: <>
            {
                <div className="card w-96 bg-whitw shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold">{job.title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <p className="">Price range : 25,000-50,000 $</p>
                    <h2 className="font-bold" >Deadline : 11/22/2003 </h2>
                    <div className="card-actions justify-center ">
                        <button className="btn btn-outline btn-info w-full ">Bid Now</button>
                   </div>
              </div>
              </div>
            }
           </>
        },
        {
          label: "Digital Marketing",
          value: "digital_marketing",
          desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
          label: "Graphics Design.",
          value: "graphics_design.",
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
        
      ];
    return (
      <div>
          <h1 className="text-3xl md:text-4xl text-center my-10 font-bold">
           Job Cate<span className="text-cyan-500">gor</span>y</h1>
          <Tabs value="html" className="max-w-[40rem]">
                <TabsHeader
                  className="bg-transparent"
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
                      {desc}
                    </TabPanel>
                  ))}
                </TabsBody>
          </Tabs>
      </div>
    );
};

export default Category;