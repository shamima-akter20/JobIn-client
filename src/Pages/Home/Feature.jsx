import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";

AOS.init();

const Feature = () => {
  return (
    <div className="mb-10 pt-10 mx-auto">
      <h1 className="text-3xl md:text-4xl text-center my-10 font-bold">
        Our Feat<span className="text-cyan-500">ur</span>e
      </h1>
      <div>
        {/* -- react marquee -- */}
        <div className="mb-8">
          <Marquee>
            <div className="mt-8 flex gap-4">
              <div className="relative grid h-[200px] w-[200px]  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/sj4gdCn/user-friendly.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none"></div>
              </div>

              <div className="relative grid h-[200px] w-[200px]  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/59SDB6R/analytic.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none"></div>
              </div>

              <div className="relative grid h-[200px] w-[200px]  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/c6dkDC3/privacy.png')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none"></div>
              </div>

              <div className="relative grid h-[200px] w-[200px]  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/PtXGcDk/application-tracking-system.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none"></div>
              </div>

              <div className="relative grid h-[200px] w-[200px]  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-[url('https://i.ibb.co/Zc5KD17/search.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none"></div>
              </div>
            </div>
          </Marquee>
        </div>

        {/* feature part */}
        <div className=" mx-auto px-auto">
          <div className="flex gap-10">
            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-start "
            >
              <h1 className="text-xl font-bold">
                <i className="fa-solid fa-magnifying-glass mr-2"></i>
                Advanced Search and Filters
              </h1>
              <p className="">
                Emphasize powerful search functionality and filters to help job
                seekers find relevant opportunities quickly.
              </p>
            </div>

            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-end "
            >
              <h1 className="text-xl font-bold">
                Personalized User Profiles
                <i className="fa-solid fa-users ml-2"></i>
              </h1>
              <p className="">
                Describe how users can create personalized profiles, providing a
                snapshot of their skills, experience, and preferences.
              </p>
            </div>
          </div>

          <div className="flex gap-10">
            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-start "
            >
              <h1 className="text-xl font-bold">
                <i className="fa-regular fa-bell mr-2"></i>
                Job Alerts and Notifications
              </h1>
              <p className="">
                Mention the feature that allows users to set up job alerts based
                on their preferences and receive notifications for new
                opportunities.
              </p>
            </div>

            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-end "
            >
              <h1 className="text-xl font-bold flex justify-end text-end">
                Responsive Design
                <img
                  className="h-7 ml-2 "
                  src="https://i.ibb.co/JCRFCDw/2777142.png"
                  alt=""
                />
              </h1>
              <p className="">
                Ensure users know that your website is accessible on various
                devices, including desktops, tablets, and smartphones.
              </p>
            </div>
          </div>

          <div className="flex gap-10">
            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-start "
            >
              <h1 className="text-xl font-bold ">
                <i className="fa-solid fa-table-list mr-2"></i>
                Multiple Job Categories
              </h1>
              <p className="">
                Showcase the diversity of job categories available on your
                platform, such as web development, graphic design, digital
                marketing, and more.
              </p>
            </div>

            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-end "
            >
              <h1 className="text-xl font-bold">
                User-Friendly Interface
                <i className="fa-solid fa-table ml-2"></i>
              </h1>
              <p className="">
                Highlight the intuitive design and easy navigation of your
                website to ensure a positive user experience.
              </p>
            </div>
          </div>

          <div className="flex gap-10">
            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-start "
            >
              <h1 className="text-xl font-bold">
                <i className="fa-regular fa-building mr-2"></i>
                Featured Employers and Companies
              </h1>
              <p className="">
                Showcase prominent employers or companies that regularly post
                jobs on your platform to instill confidence in job seekers.
              </p>
            </div>

            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-end "
            >
              <h1 className="text-xl font-bold">
                Application Tracking System (ATS)
                <i className="fa-solid fa-map-location-dot ml-2"></i>
              </h1>
              <p className="">
                If applicable, highlight any ATS features that streamline the
                application process for both employers and job seekers.
              </p>
            </div>
          </div>

          <div className="flex gap-10">
            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-start "
            >
              <h1 className="text-xl font-bold ">
                <i className="fa-regular fa-user mr-2"></i>
                Company Profiles:
              </h1>
              <p className="">
                Describe how companies can create detailed profiles, including
                information about their culture, mission, and benefits to
                attract top talent.
              </p>
            </div>

            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-end "
            >
              <h1 className="text-xl font-bold">
                Skill Assessment Tools
                <i className="fa-solid fa-toolbox ml-2"></i>
              </h1>
              <p className="">
                If available, mention any tools or assessments integrated into
                the platform to help job seekers showcase their skills.
              </p>
            </div>
          </div>

          <div className="flex gap-10">
            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-start "
            >
              <h1 className="text-xl font-bold">
                <i className="fa-solid fa-blog mr-2"></i>
                Blog and Resource Section
              </h1>
              <p className="">
                Highlight any educational resources, industry insights, or
                career advice available on your website to support professional
                development.
              </p>
            </div>

            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-end "
            >
              <h1 className="text-xl font-bold">
                Easy Application Process
                <i className="fa-solid fa-file-lines ml-2"></i>
              </h1>
              <p className="">
                Emphasize a streamlined and straightforward application process
                for job seekers, reducing friction in the job application
                process.
              </p>
            </div>
          </div>

          <div className="flex gap-10">
            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-start "
            >
              <h1 className="text-xl font-bold">
                <i className="fa-solid fa-network-wired mr-2"></i>
                Community and Networking Features
              </h1>
              <p className="">
                If applicable, mention any features that facilitate networking
                and community engagement among job seekers and employers.
              </p>
            </div>

            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-end "
            >
              <h1 className="text-xl font-bold">
                Feedback and Reviews
                <i className="fa-solid fa-comments ml-2"></i>
              </h1>
              <p className="">
                If your platform has a review system, highlight it to showcase
                feedback from both employers and job seekers, adding credibility
                to your platform.
              </p>
            </div>
          </div>

          <div className="flex gap-10">
            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-start "
            >
              <h1 className="text-xl font-bold">
                <i className="fa-solid fa-shield-halved mr-2"></i>
                Security and Privacy Measures
              </h1>
              <p className="">
                Assure users of the security measures in place to protect their
                personal information and ensure a safe online environment.
              </p>
            </div>

            <div
              data-aos="fade-up-right"
              className="fex flex-row py-2 text-end "
            >
              <h1 className="text-xl font-bold">
                Analytics and Insights
                <i className="fa-solid fa-chart-line ml-2"></i>
              </h1>
              <p className="">
                {" "}
                Mention any tools or features that provide users with insights
                into the performance of their job listings or the effectiveness
                of their job search strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
