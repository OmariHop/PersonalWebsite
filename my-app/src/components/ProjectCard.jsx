import React from 'react';
import "./ProjectCard.css";


const ProjectCard = ({title, description, image, link}) =>
{
    return(
        <div className="projectCard">
            <img src={image} alt={title} className="projectCardImage"/>
            <div className="projectCardContent">
                <h3 className="projectCardTitle">{title}</h3>
                <p className="projectCardDescription">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectCardLink"
                    >
                    View Project
                </a>
            </div>
        </div>

    )
}
export default ProjectCard;