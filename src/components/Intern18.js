import { useState } from "react";

function Intern18() {
  
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
      <div className="rank">18</div>
      <div className="menu" onClick={handleOpen}>
      <span className="tooltiptext">Profile</span>
       <div></div>
       <div></div>
       <div></div>
      </div>
      </div>
      <div className="cover">
     <img src="./Images/male11.jpg" alt="male"/>
     <p>Kizito</p>
      </div>
    </div>
    {pop?
    <div className="modal">
        <div className="modal-header">
         <h2>Intern's Profile</h2>
         <h2 className="cancel" onClick={closepop}>X</h2>
        </div>
        <ul>
          <li>Full Name:<span>Kizito Chinazo</span></li>
          <li>Power Ranking:<span>2058</span></li>
          <li>Path:<span>Frontend</span></li>
          <li>Gender:<span>Male</span></li>
          <li>Attendance:<span>93%</span></li>
        </ul>
    </div>:""}
  </div>
  );
}

export default Intern18;