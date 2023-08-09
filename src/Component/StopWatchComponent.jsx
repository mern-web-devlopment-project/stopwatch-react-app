import React from 'react'
import './StopWatchComponent.css'
const StopWatchComponent = () => {
  return (
    <div className='header'>
      <div className="wrapper">
        <div className="timer">
          <div className='stopwatch'>12 : 23 : 89</div>
        </div>
        <div className="button">
          <button className='btn btn1'>Reset</button>
          <button className='btn btn2'>Play</button>
          <button className='btn btn3'>Pause</button>
        </div>
      </div>
    </div>
  )
}

export default StopWatchComponent