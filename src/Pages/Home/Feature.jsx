import Marquee from "react-fast-marquee";

const Feature = () => {
    return (
        <div className="mb10">
            <h1 className="text-3xl md:text-4xl text-center my-10 font-bold">
            Our Feat<span className="text-cyan-500">ur</span>e</h1>
          <div>

            {/* -- react marquee -- */}
             <div className="mb-8">
               <Marquee>
                 <div className="mt-8 flex gap-4" >

                    <div className="relative grid h-[200px] w-[200px]  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://ibb.co/BqYCBmL')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        </div>
                    </div>
        
                    <div className="relative grid h-[200px] w-[200px]  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/QMkZG81/wp.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        </div>
                    </div>
        
                    <div className="relative grid h-[200px] w-[200px]  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/QMkZG81/wp.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        </div>
                    </div>
        
                    <div className="relative grid h-[200px] w-[200px]  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/QMkZG81/wp.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        </div>
                    </div>
        
                    <div className="relative grid h-[200px] w-[200px]  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                        <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/QMkZG81/wp.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        </div>
                    </div>
                 </div>
              </Marquee> 
             </div>

             {/* feature part */}
             <div>
                
             </div>

          </div>
        </div>
    );
};

export default Feature;