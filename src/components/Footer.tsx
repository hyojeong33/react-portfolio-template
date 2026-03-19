import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        {/* 🍎 본인의 GitHub 및 LinkedIn 주소 반영 */}
        <a href="https://github.com/hyojeong33" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/hyojeong-lee-5299a0266" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      {/* 🍎 제작자 이름을 본인 이름으로 수정 */}
      <p>A portfolio built by <a href="https://github.com/hyojeong33" target="_blank" rel="noreferrer">Hyojeong Lee</a> with 💜</p>
    </footer>
  );
}

export default Footer;