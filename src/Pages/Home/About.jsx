const About = () => {
  return (
    <div className="mb-10 bg-slate-200">
      <div className="hero h-auto lg:h-[30vh] overflow-hidden
               bg-fixed bg-cover bg-center relative"style={{
               backgroundImage: "url(  https://i.ibb.co/80mymPH/office.jpg )",}} >
           <div className="hero-overlay bg-opacity-70">
               <h1 className="text-3xl md:text-4xl py-2 text-center text-white my-10 font-bold">
                   About<span className="text-cyan-500"> Us</span>
               </h1>
               <p className="text-white text-center">Welcome to <span className="font-bold">Job<span className="text-cyan-500" >IN</span></span> where we connect talent with opportunity in the dynamic fields of web development, graphic design, and digital marketing.</p>
           </div>
       </div>
 
       <div className="flex">
         {/* ---- 1 -------- */}
          <div className="flex-1">
                  <div>
                     <h1>Mission Statement:</h1>

                  </div>      
          </div>

          <div className="flex-1" >
               <h1>blog</h1>
          </div>

          <div className="flex-1">
               <h1>blog</h1>
          </div>
       </div>

        
       
          
    </div>
    
  );
};

export default About;
