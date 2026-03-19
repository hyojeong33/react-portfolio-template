import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 🍎 faPython을 brands-svg-icons로 옮겼습니다.
import { faJava, faPython } from '@fortawesome/free-brands-svg-icons'; 
import { faBrain, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Java",
    "C++",
    "Data Structures",
    "Algorithms",
    "SQL",
    "Git",
    "React"
];

const labelsSecond = [
    "Data Analysis",
    "Machine Learning",
    "Statistics",
    "Pandas",
    "NumPy",
    "Computational Methods",
    "Technical Mentoring"
];

const labelsThird = [
    "Behavioral Annotation",
    "ELAN / ACLEW",
    "EEG Data Processing",
    "Linguistic Annotation",
    "Human-Centered Systems",
    "Research Ethics (CITI)"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                {/* Section 1: Core Software Development */}
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Software Development</h3>
                    <p>With a solid foundation from an Associate Degree in CS, I am proficient in C++, Java, and Python. I focus on solving real-world problems through algorithm optimization and reliable system design.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Section 2: Data Science & ML Specialization */}
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Science & ML</h3>
                    <p>As a Cognitive Science major specializing in ML and a former Undergraduate TA for 'Data Science in Practice' at UCSD, I have extensive experience in data-driven quality evaluation and statistical analysis.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Section 3: Cognitive Research & Analysis */}
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Cognitive Research</h3>
                    <p>Currently a Research Assistant at the UCSD Cognitive Development Lab, I utilize ELAN and ACLEW frameworks for behavioral data analysis in infant-caregiver interaction studies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
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