import { useState } from "react";

function Intern10() {
  
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
      <div className="rank">10</div>
      <div className="menu" onClick={handleOpen}>
      <span className="tooltiptext">Profile</span>
       <div></div>
       <div></div>
       <div></div>
      </div>
      </div>
      <div className="cover">
     <img src="./Images/male6.jpg" alt="male"/>
     <p>Moses</p>
      </div>
    </div>
    {pop?
    <div className="modal">
        <div className="modal-header">
         <h2>Intern's Profile</h2>
         <h2 className="cancel" onClick={closepop}>X</h2>
        </div>
        <ul>
          <li>Full Name:<span>Moses Njoku</span></li>
          <li>Power Ranking:<span>2110</span></li>
          <li>Path:<span>Backend</span></li>
          <li>Gender:<span></span></li>
          <li>Attendance:<span>95%</span></li>
        </ul>
    </div>:""}
  </div>
  );
}

export default Intern10;