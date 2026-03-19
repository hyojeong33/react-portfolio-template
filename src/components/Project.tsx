import React from "react";
// Hyojeong님이 준비하신 이미지들로 import
import analyzeImg from '../assets/images/analyze_insurance.png';
import cogs108Img from '../assets/images/cogs108.png';
import cogs118Img from '../assets/images/cogs118.png';
import cogs189Img from '../assets/images/cogs189.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            {/* 1. BCI Project (COGS 189) */}
            <div className="project">
                <a href="https://github.com/hyojeong33/cogs189" target="_blank" rel="noreferrer">
                    <img src={cogs189Img} className="zoom" alt="BCI Accuracy Comparison" width="100%"/>
                </a>
                <a href="https://github.com/hyojeong33/cogs189" target="_blank" rel="noreferrer"><h2>Brain-Computer Interface (BCI) Analysis</h2></a>
                <p>Explored EEG data processing and signal analysis. Developed and compared performance between CSP+LDA and EEGNet models for motor imagery classification.</p>
            </div>

            {/* 2. Data Science in Practice (COGS 108) */}
            <div className="project">
                <a href="https://github.com/COGS108/Group066_SP25" target="_blank" rel="noreferrer">
                    <img src={cogs108Img} className="zoom" alt="Technology Caused Stress Chart" width="100%"/>
                </a>
                <a href="https://github.com/COGS108/Group066_SP25" target="_blank" rel="noreferrer"><h2>Data Science Group Project (COGS 108)</h2></a>
                <p>Investigated the correlation between technology usage and stress levels using the complete data science lifecycle—from EDA to predictive modeling.</p>
            </div>

            {/* 3. Machine Learning Project (COGS 118B) */}
            <div className="project">
                <a href="https://github.com/hyojeong33/Cogs-118B-Group-Project" target="_blank" rel="noreferrer">
                    <img src={cogs118Img} className="zoom" alt="Confusion Matrix" width="100%"/>
                </a>
                <a href="https://github.com/hyojeong33/Cogs-118B-Group-Project" target="_blank" rel="noreferrer"><h2>Unsupervised Learning Analysis</h2></a>
                <p>Implemented unsupervised learning algorithms to identify underlying patterns in complex datasets, focusing on clustering and dimensionality reduction techniques.</p>
            </div>

            {/* 4. Medical Insurance Cost Analysis */}
            <div className="project">
                <a href="https://github.com/hyojeong33/Analyze-Insurance-cost" target="_blank" rel="noreferrer">
                    <img src={analyzeImg} className="zoom" alt="Insurance Premium Distribution" width="100%"/>
                </a>
                <a href="https://github.com/hyojeong33/Analyze-Insurance-cost" target="_blank" rel="noreferrer"><h2>Insurance Cost Prediction</h2></a>
                <p>Conducted statistical analysis on medical insurance datasets to identify key factors influencing costs, utilizing regression models and data visualization in Python.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;