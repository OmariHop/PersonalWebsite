import React from 'react';
import "./Projects.css";

import ProjectCard from "../components/ProjectCard";

const Projects = () => {

    const projects =
        [   {
                title:"CanCure Buddy | JPM Code for Good",
                description:"A FERN stack web application for a non-profit organization. Leveraged Firebase, Express.js, React, and Node.js to create a design that enhances communication and support between cancer survivors and current patients.\n",
                link: "",
                image: "./images/CanCure.png"
            },

            {
                title:"Easy Eats",
                description:"A web application that recommends local Orlando-based restaurants and food businesses depending on the user’s preferences. Built using HTML/CSS/Javscript along with the React framework",
                link: "https://github.com/OmariHop/EasyEats",
                image: "./images/EzEats.png"
            },
            {
                title:"Knights Weather",
                description:"Pop-up window tool developed in Python that displayed various weather statistics such as temperature, humidity, and what an area “feels like” of a given city based on the input of the user. Used the OpenWeather API data extraction and Python libraries such as Tkinter and Imagetk for UI components",
                link: "https://github.com/OmariHop/UCF-Knights-Weather-Tool-Window-",
                image: "./images/weather.png"

            },
            {
                title:"WeFei Wear",
                description:"Conducted research on relevant technologies that aid in the creation of wearable telerobotics to augment, assist, or enable human activities. Utilized Python with frameworks such as OpenCV and the Intel RealSense SDK for depth camera configuration and distance detection. Integrated MASK R-CNN as the deep learning model to classify identified objects",
                link: "https://github.com/OmariHop/WeFeiWear"
                ,image: "./images/WEFEI.png"
            },
            {
                title:"Knights Gaming",
                description:"Collaborated with a team of four to create React based video game archive website that displayed various games with their respective release dates, descriptions, and other information.",
                link: "https://github.com/OmariHop/knightsgaming",
                image: "./images/knightGaming.png"
            }



    ];

    return(
        <div className="portfolio">
            <h1>My Projects</h1>
            <div className="projectGallery">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        image={project.image}
                    />
                ))
                }
            </div>


        </div>
    )
}

export default Projects;