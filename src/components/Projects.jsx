import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion"; 

const Projects = () => {
    const [currentIndex,setCurrentIndex]=useState(0);
    const [cardsToShow,setCardsToShow]=useState(1);

    useEffect(() => {
        const updateCardsToShow = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setCardsToShow(4); 
            } else if (width >= 768) {
                setCardsToShow(3); 
            } else if (width >= 640) {
                setCardsToShow(2); 
            } else {
                setCardsToShow(1); 
            }
        };
        updateCardsToShow(); 
        window.addEventListener("resize", updateCardsToShow); 
        return () => {
            window.removeEventListener("resize", updateCardsToShow); 
        };
    },[currentIndex]);
    const next=()=>{
        setCurrentIndex(prevIndex =>( prevIndex + 1) % projectsData.length);
           
        }
         const prev=()=>{
        setCurrentIndex((prevIndex) => prevIndex ===0 ?   projectsData.length-1: prevIndex - 1);
           
        }
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects <span className=" u text-gray-400">Completed</span>
      </h1>
      <p className="text-center text-gray-800 mb-8 max-w-80 mx-auto">
        {" "}
        Successfully delivered quality projects with innovation and precision.{" "}
      </p>

      {/* slider buttons */}
      <div className="flex justify-end items-center mb-8 ">
        <button onClick={prev} className="p-3 bg-gray-200 rounded mr-2" aria-label="Previous Project">
          <img src={assets.left_arrow} className="" alt="Previous" />
        </button>

        <button onClick={next} className="p-3 bg-gray-200 rounded mr-2" aria-label="Next Project">
          <img src={assets.right_arrow} className="" alt="Next" />
        </button>
      </div>
      <div className="overflow-hidden">
        <div className='flex gap-8 transition-transform  duration-500 ease-in-out'  style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}>
        {projectsData.map((project,index)=>(
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
                <img src={project.image} alt={project.title} className="w-full h-auto mb-14" />
                <div className="absolute left-[0px] bottom-0 flex justify-center bg-transparent">
                    <div className="inline-block bg-transparent w-auto px-4 py-2 shadow-md">
                      <h2 className="font-semibold text-gray-800">{project.title}</h2>
                      <p className="text-gray-500 text-sm ">{project.price} <span> | </span>{project.location}</p>
                    </div>

                </div>
            </div>
        ))}
      </div>
      </div>
    </motion.div>
  );
};

export default Projects;
