
import { useState, useEffect } from "react";
const useTimer = () => {
  const [currentTime, setCurrentTime] = useState("50:59:59");

  useEffect(() => {
    const timer = setInterval(() => {
      const [hoursStr, minutesStr, secondsStr] = currentTime.split(":");
      let hours = parseInt(hoursStr);
      let minutes = parseInt(minutesStr);
      let seconds = parseInt(secondsStr);
      if (seconds > 0) {
        seconds--;
      } else {
        if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else {
          if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          } else {
            clearInterval(timer);
            return;
          }
        }
      }
      const newTime =
        String(hours).padStart(2, "0") +
        ":" +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
      setCurrentTime(newTime);
    }, 1000);  

    
    return () => clearInterval(timer);
  }, [currentTime]); 
const [hours, minutes, seconds] = currentTime.split(":")
  return {  hours, minutes, seconds };
};

export default useTimer;
