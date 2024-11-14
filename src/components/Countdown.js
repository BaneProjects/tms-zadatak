import { useEffect, useRef, useState } from "react";

const Countdown = () => {
  const intervalRef = useRef(null);

  const [counter, setCounter] = useState(5000);

  useEffect(() => {
    if (!intervalRef.current) {
      const intervalId = setInterval(() => {
        setCounter(counter => {
          return counter - 1;
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
      countdown: {counter}
    </div>
  );
};

export default Countdown;