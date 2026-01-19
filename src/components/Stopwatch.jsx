
import {useState,useRef} from "react";


function Stopwatch(){
  const [time,setTime] = useState(0);

  const [isRunning,setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  const startTimer = () => {
    if(!isRunning){
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        },1000);
    }
  };


  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{time}</h2>

      {!isRunning ? (
        <button onClick={startTimer}>
          {time === 0 ? "Start" : "Resume"}
        </button>
      ) : (
        <button onClick={pauseTimer}>Pause</button>
      )}

      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;
