import { useState } from "react";

function Intern13() {
  
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
      <div className="rank">13</div>
      <div className="menu" onClick={handleOpen}>
      <span className="tooltiptext">Profile</span>
       <div></div>
       <div></div>
       <div></div>
      </div>
      </div>
      <div className="cover">
     <img src="./Images/female5.jpg" alt="male"/>
     <p>Peace</p>
      </div>
    </div>
    {pop?
    <div className="modal">
        <div className="modal-header">
         <h2>Intern's Profile</h2>
         <h2 className="cancel" onClick={closepop}>X</h2>
        </div>
        <ul>
          <li>Full Name:<span>Peace Anyanwu</span></li>
          <li>Power Ranking:<span>2073</span></li>
          <li>Path:<span>Product Design</span></li>
          <li>Gender:<span>Female</span></li>
          <li>Strike:<span>100%</span></li>
        </ul>
    </div>:""}
  </div>
  );
}

export default Intern13;