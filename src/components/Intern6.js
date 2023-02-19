import { useState } from "react";

function Intern6() {
  
  const [pop, setpop] = useState(false);
  const handleOpen = () => {
    setpop(!pop);
  }
  const closepop = () => {
    setpop(false);
  }
  return (
    <div>
    <div className="main">
      <div className="header">
      <div className="rank">6</div>
      <div className="menu" onClick={handleOpen}>
      <span className="tooltiptext">Profile</span>
       <div></div>
       <div></div>
       <div></div>
      </div>
      </div>
      <div className="cover">
     <img src="./Images/female4.jpg" alt="female"/>
     <p>Oluchukwu</p>
      </div>
    </div>
    {pop?
    <div className="modal">
        <div className="modal-header">
         <h2>Intern's Profile</h2>
         <h2 className="cancel" onClick={closepop}>X</h2>
        </div>
        <ul>
          <li>Full Name:<span>Oluchukwu Nnaji</span></li>
          <li>Power Ranking:<span>2150</span></li>
          <li>Path:<span>Product Design</span></li>
          <li>Gender:<span>Female</span></li>
          <li>Attendance:<span>98%</span></li>
        </ul>
    </div>:""}
  </div>
  );
}

export default Intern6;