import React, { useState } from 'react'
import './StopWatchComponent.css'
const StopWatchComponent = () => {
 
  const [minute,setMinute] = useState("00")
  const [second,setSecond] = useState("00")
  const [milliSecond,setMilliSecond] = useState("00")
  const [state,setState] = useState(false);
  const resetHandler = () =>{
    setMilliSecond("00");
    setSecond("00");
    setMinute("00");
  }
  const startHandler = () => {
    var seconds = 0
    var count =0;
    var minutes = 0
     setInterval(() => {
      if(count===99){
        count =0;
        seconds+=1;
      }
      if(seconds ===60){
        minutes+=1;
        seconds =0;
      }
      count +=1;
      setSecond(seconds)
      setMilliSecond(count)
      setMinute(minutes)
    }, 1);
  } 
  return (
    <div className='header'>
      <div className="wrapper">
        <div className="timer">
          <div className='stopwatch'>{minute} : {second} :  {milliSecond}</div>
        </div>
        <div className="button">
          <button className='btn btn1' onClick={resetHandler}>Reset</button>
          <button className='btn btn2' onClick={startHandler}>Play</button>
          <button className='btn btn3'>Pause</button>
        </div>
      </div>
    </div>
  )
}

export default StopWatchComponent