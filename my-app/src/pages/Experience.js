import React from 'react';
import "./Experience.css";

const Experience = () => {

    return(
        <div className="mainContainer">

        <div className="containerExperience">
            <div className="workArea">
                <h3>Software Engineering Intern | JPMorgan Chase</h3>
                <p>Collaborated in an Agile SCRUM environment to develop a React/SpringBoot based full-stack contact creation flow for 5,000 sales associates, automating form-filling processes using Outlook API that scrapes meeting data from a users Outlook inbox to enhance efficiency amongst workers</p>
                <p>Utilized Java Spring Boot and Spring Data JPA to design and implement backend validations and a CRUD API for data management and seamless contact creation </p>
                <p>Provisioned AWS infrastructure, including database, subnets, and PostgreSQL store, using Terraform for automated and reliable deployment.</p>
                <p>Established a CI/CD pipeline using Jenkins and Spinnaker, to build, test, and deploy our back-end API into an AWS ECS cluster, ensuring reliability via automated test suites as well as an increase in scalability</p>
            </div>

            <div className="workArea">
                <h3>Software Test Engineering Internship | Universal Studios</h3>
                <p>Applied UI automation techniques in an Agile SCRUM environment to streamline software development processes and enhance testing efficiency for our in-house communication platforms that host over 10,000 team members.</p>
                <p>Developed comprehensive and modular automated test scripts in Java. Leveraged Selenium and TestNG to create robust, maintainable, and efficient automation suites to streamline testing processes and reduce manual effort.</p>
                <p>Contributed to the integration of automated test cases and suites into the Continuous Integration Continuous Deployment (CI/CD) pipeline, enhancing the development process and consequently improving product quality.</p>
            </div>

            <div className="workArea">
                <h3>Undergraduate Research Assistant - Software Engineer | WEAR Lab @UCF</h3>
                <p>Conducted research on relevant technologies that aid in the creation of wearable telerobotics to augment, assist, or enable human activities.</p>
                <p>Utilized Python with frameworks such as OpenCV and the Intel RealSense SDK for depth camera configuration and distance detection. Integrated MASK R-CNN as the deep learning model to classify identified objects.</p>
                <p> Presented research findings in weekly meetings with graduate students and faculty members, including the results of development and any new advancements made during the project</p>
            </div>

            <div className="workArea">
                <h3>High School Teacher Assistant | Broward County Public Schools </h3>
                <p>Assisted the head of the IT department with the design of the school’s Cambridge program website.</p>
                <p>Used Wix's website builder to design and develop an intuitive user interface, catering to the specific needs of a student.</p>

            </div>
        </div>

            <div className="pictureContainer">
                <img src="/images/jpm.png" alt="JPM Logo"></img>
                <img src="/images/universal.png" alt="Universal Logo"></img>
                <img src="/images/wearlab.png" alt="WEAR Lab Logo"></img>
                <img src="/images/browardschools.png" alt="Broward Schools Logo"></img>
            </div>

        </div>
    )

}
export default Experience;