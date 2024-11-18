import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const softDevExpertise = [
    "React",
    "React Native",
    "Angular",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Python",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "Postman"
];

const deploymentExpertise = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have developed a wide range of web applications from the ground up, leveraging modern technologies. I am highly skilled in the full software development lifecycle (SDLC) and proficient in both frontend and backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {softDevExpertise.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Deployment & Automation</h3>
                    <p>Once the application is built, I've experience to set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {deploymentExpertise.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;