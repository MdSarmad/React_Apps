import './DisplayName.css';
import React,{useState} from 'react';

function DisplayName(){

    const[myName, setmyNmae] = useState('Sarmad');
  
    const onChange = (e) =>{
      setmyNmae(e.target.value);
    }
    
    return(
      <div main-body>
        <div className="input">
          <label htmlFor="name">Enter Your Name : </label>
          <input type="text" placeholder="Enter text here" onChange = {onChange} />
        </div>
        <div className="display">
          <h3>Hello {myName}!!!</h3>
        </div>
      </div>
    )
  
}
    
  export default DisplayName;