import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="/3472508066940706128_20240723152953972.jpg" alt="Hyojeong Profile" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/hyojeong33" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hyojeong-lee-5299a0266" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          
          <h1>Hyojeong Lee</h1> 
          <p>Cognitive Science & Machine Learning</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/hyojeong33" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hyojeong-lee-5299a0266" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;