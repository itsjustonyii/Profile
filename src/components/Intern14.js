import { useState } from "react";

function Intern14() {
  
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
      <div className="rank">14</div>
      <div className="menu" onClick={handleOpen}>
      <span className="tooltiptext">Profile</span>
       <div></div>
       <div></div>
       <div></div>
      </div>
      </div>
      <div className="cover">
     <img src="./Images/female7.jpg" alt="female"/>
     <p>Rita</p>
      </div>
    </div>
    {pop?
    <div className="modal">
        <div className="modal-header">
         <h2>Intern's Profile</h2>
         <h2 className="cancel" onClick={closepop}>X</h2>
        </div>
        <ul>
          <li>Full Name:<span>Rita Odoh</span></li>
          <li>Power Ranking:<span>2071</span></li>
          <li>Path:<span>Product Deign</span></li>
          <li>Gender:<span>Female</span></li>
          <li>Attendance:<span>100%</span></li>
        </ul>
    </div>:""}
  </div>
  );
}

export default Intern14;