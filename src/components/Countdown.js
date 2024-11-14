import { useEffect, useRef, useState } from "react";
import { decrementTime, formatTimeDigits } from "../utils/countdown-helper";

const Countdown = () => {
  const intervalRef = useRef(null);

  const [counter, setCounter] = useState(5000);

  const [time, setTime] = useState({
    day: 7,
    h: 13,
    min: 26,
    sec: 36,
  });


  useEffect(() => {
    if (!intervalRef.current) {
      const intervalId = setInterval(() => {
        setCounter(counter => {
          return counter - 1;
        });
        setTime(time=>{
          return decrementTime(time);
        });
      }, 1000);
      intervalRef.current = intervalId;
    }
    return () => {
      clearInterval(intervalRef.cuurren);
    };
  }, []);
  return (
    <div className="countdown">
      <div className="sale">SALE UP TO 60% OFF</div>
      <div className="countdown-display">
        <div>{time.day}<span>Days</span></div>
        <div>{formatTimeDigits(time.h)}<span>Hours</span></div>
        <div>{formatTimeDigits(time.min)}<span>Min</span></div>
        <div>{formatTimeDigits(time.sec)}<span>Sec</span></div>
      </div>
    </div>
  );
};

export default Countdown;