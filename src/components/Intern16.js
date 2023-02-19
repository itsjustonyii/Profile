import { useState } from "react";

function Intern16() {
  
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
      <div className="rank">16</div>
      <div className="menu" onClick={handleOpen}>
      <span className="tooltiptext">Profile</span>
       <div></div>
       <div></div>
       <div></div>
      </div>
      </div>
      <div className="cover">
     <img src="./Images/male10.jpg" alt="male"/>
     <p>Stephen</p>
      </div>
    </div>
    {pop?
    <div className="modal">
        <div className="modal-header">
         <h2>Intern's Profile</h2>
         <h2 className="cancel" onClick={closepop}>X</h2>
        </div>
        <ul>
          <li>Full Name:<span>Stephen Ogbodo</span></li>
          <li>Power Ranking:<span>2059</span></li>
          <li>Path:<span>Product Design</span></li>
          <li>Gender:<span>Male</span></li>
          <li>Attendance:<span>88%</span></li>
        </ul>
    </div>:""}
  </div>
  );
}

export default Intern16;