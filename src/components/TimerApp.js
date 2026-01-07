import React, {useEffect, useState} from 'react'

function TimerApp() {
    // State to store the seconds
    const [seconds, setSeconds] = useState(0);
    // State to track if the timer is running
    const [running, setRunning] = useState(false);
    // useEffect runs when running is true
    useEffect(() => {
        let timer;
        // if running is true
        if (running) {
            timer = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000); // each 1 seconds it will execute
        }
        return () => clearInterval(timer);
    }, [running]); //Dependency array - run effect once the running value changes

  return (
    <div>
        <h2>Timer Application</h2>
        <p>{seconds} seconds</p>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  )
}

export default TimerApp