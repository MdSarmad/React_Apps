import './Counter.css';
import React,{useState} from 'react';

function Counter() {
    const [counter,setCounter] = useState(0);
  
    const decrement = () => {
      setCounter(counter-1);
    }
  
    const increment = () => {
      setCounter(counter+1);
    }
  
    return (
      <div className='counterDisplay'>
      <span><button className = "decr" onClick={decrement}>-</button></span>
      <span><h3 className="count">{counter}</h3></span>
      <span><button className = "incr" onClick={increment}>+</button></span>
      </div>
    );
}

export default Counter;
  