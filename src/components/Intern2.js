import { useState } from "react";

function Intern2() {
  
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
      <div className="rank">2</div>
      <div className="menu" onClick={handleOpen}>
      <span className="tooltiptext"> Profile </span>
       <div></div>
       <div></div>
       <div></div>
      </div>
      </div>
      <div className="cover">
     <img src="./Images/male1.jpg" alt="male"/>
     <p>Somtochukwu</p>
      </div>
    </div>
    {pop?
    <div className="modal">
        <div className="modal-header">
         <h2>Intern's Profile</h2>
         <h2 className="cancel" onClick={closepop}>X</h2>
        </div>
        <ul>
          <li>Full Name:<span>Somtochukwu Uzuakpunwa</span></li>
          <li>Power Ranking:<span>2193</span></li>
          <li>Path:<span>Backend</span></li>
          <li>Gender:<span>Male</span></li>
          <li>Attendance:<span>88%</span></li>
        </ul>
    </div>:""}
  </div>
  );
}

export default Intern2;