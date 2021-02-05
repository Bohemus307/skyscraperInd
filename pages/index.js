import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-gray-700">
                Skyscraper Industries - Cutting edge CEA solutions and project consultation.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Our consultants utilize extensive industry experience designing and implementing complex solutions for controlled evironment agriculture systems. We focus on not only elastic and fault tolerant systems but cost effective design with a focus on scalability
                {/* {" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-gray-700"
                  target="_blank"
                >
                  Tailwind CSS
                </a> */}
                . With a history of success working with some of the largest farms in the industry we are more than prepared to deliver value to your next project or IP creation.
              </p>
              <div className="mt-12">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-600 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Contact 
                </a>
                <a
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                >
                  Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src={require("assets/img/pattern1.jpg")}
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-gray-200">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                <img
                  alt="..."
                  src={require("assets/img/SkyscrapeProjectImage.png")}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-gray-800 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Perfect for your next project
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    With our consultation clients see extensive savings not only in capital expenditures but also in daily operations and long term scaling efficiency.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Custom Components
                      </h6>
                      <p className="mb-4 text-gray-600">
                       Experience with the complete product design cycle and a deep confidence in our ability to guide or handle complete ownership of IP component creation for your project.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Sub-system design and selection
                      </h6>
                      <p className="mb-4 text-gray-600">
                        Extensive knowledge of the complex interactions in controlled enviroment systems allows us to research, inform, and implement the best options for your system. Whether its Hvac, LED lights, Water treatment, Filtration, Enviromental monitoring, Or one of many other crucial components our knowledge and experience will give you the guidance necessary to optimize your sub-system.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Monitoring and Analytics</h6>
                      <p className="mb-4 text-gray-600">
                        Proven cloud-based and on premises solutions for both monitoring and systems control using cutting edge technologies and secure communciation protocols.  
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Procedures and Documentation
                      </h6>
                      <p className="mb-4 text-gray-600">
                        We not only embrace the creation of solutions and consultation, but also hold a wealth of experience in implementation of operating procedures and digital documentation to ensure a healthy roi and swift adoption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Custom Components
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Understanding the complex challenges surrounding custom component design and sourcing allows us to forsee potential blockers and ensure a short and effective timeline between prototype development and scalable production.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Irrigation
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Grow Media
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Sensors
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Water Treatment
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Automated Systems
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Robotics
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Conveyance
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  HVAC
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Air Flow
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Ergonomics
                </span>
              </div>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/skyscrape2.jpeg")}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-60-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/custom4.jpg")}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-100-px -top-150-px z-2"
                />
                <img
                  alt="..."
                  src={require("assets/img/ledcustom.jpg")}
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-55-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/custom5.jpg")}
                  className="w-75 align-middle rounded absolute shadow-lg max-h-360-px max-w-480-px -left-20-px top-210-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap flex-align-center items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                 
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="w-full shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require("assets/img/hvac.jpg")}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        HVAC
                      </p>
                    </div>
                    <div className="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="w-full shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require("assets/img/ozone3.jpeg")}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Water Treatment
                      </p>
                    </div>
                    <div className="bg-gray-800 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="w-full shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require("assets/img/fanshaefer.jpeg")}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        AirFlow
                      </p>
                    </div>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="w-full shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require("assets/img/sensor5.jpeg")}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Sensor Systems
                      </p>
                    </div>
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="w-full shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require("assets/img/coolbar2.jpeg")}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Lighting
                      </p>
                    </div>
                    <div className="bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="w-full shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require("assets/img/prop3.jpg")}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Propagation
                      </p>
                    </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Sub-system design and selection
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                The importance of a loosely coupled yet communicative series of sub systems is crucial to minimizing labor and maintenance costs, as well as leveraging robust data pools. Our experts have detailed experience with a multitude of system options making certain you get the best fit for your overall system requirements.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Whether it is a focus on water positive HVAC or extensive monitoring with sensor arrays. Our cutting edge solutions will allow you to design or retrofit your system as necessary.
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
                target="_blank"
                className="font-bold text-gray-800 hover:text-gray-600 ease-linear transition-all duration-150"
              >
                Contact for more information{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                <i className="fas fa-newspaper"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Monitoring and Analytics
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                As certified cloud solution architects were prepared to assist you in building and deploying an elastic and fault tolerant system allowing for robust monitoring and all the data collection and manipultaion you can imagine. We have extensive experience across multiple cloud providers and are always willing to deep dive into new technologies to assure the most optimized and cost effective solution.
              </p>
            </div>
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/dataviz.jpg")}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-290-px top-70-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/cloud1.jpeg")}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-100-px -top-150-px z-2"
                />
                <img
                  alt="..."
                  src={require("assets/img/analytics4.jpg")}
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-95-px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                Procedures and Documentation
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  The process of developing operations for CEA systems involves complex operating tasks that require clear and detailed documentation to set your ops team up for success. Our consultants has developed systems and documentation for some of the largest and smallest farms in the industry allowing us to conform to your needs while leveraging proven tools and resources.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Built by Farmers for Farmers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Proven history of Success
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Dynamic Consultants with solution focused approach
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/process2.jpg")}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-gray-300 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <h3 className="font-semibold text-3xl">
                Do you need consultation with an upcoming project?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
                Cause if you do, just reach out now. Hit the buttons below to
                navigate to our contact form for your next project. Build a
                new CEA system or give an old project a new design!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-gray-600 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
