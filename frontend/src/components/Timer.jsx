import { useState, useEffect } from "react"
function Timer({ duration }) {
    const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(prevTime => prevTime - 1000); // Decrement by 1 second
      }
    }, 1000);

    // Cleanup function to prevent memory leaks
    return () => clearInterval(intervalId);
  }, [remainingTime]); // Only run when duration changes

  const getFormattedTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getFormattedTime(remainingTime);

  const hasTimeElapsed = remainingTime <= 0;

  return (
    <div className="flex flex-row gap-2">
      {days > 0 && (
        <p className="text-general text-3tl font-bold bg-white rounded-[10px] flex w-[74px] h-[65px] md:w-[87px] md:h-20 justify-center items-center">{days}</p>
      )}
      {days > 0 && <p className="text-general text-3tl font-bold flex justify-center items-center ">:</p>}
      <p className={`text-general text-3tl font-bold bg-white rounded-[10px] flex w-[74px] h-[65px] md:w-[87px] md:h-20 justify-center items-center ${hasTimeElapsed ? 'text-red-500' : ''}`}>{hours.toString().padStart(2, '0')}</p>
      <p className="text-general text-3tl font-bold flex justify-center items-center ">:</p>
      <p className={`text-general text-3tl font-bold bg-white rounded-[10px] flex w-[74px] h-[65px] md:w-[87px] md:h-20 justify-center items-center ${hasTimeElapsed ? 'text-red-500' : ''}`}>{minutes.toString().padStart(2, '0')}</p>
      <p className="text-general text-3tl font-bold flex justify-center items-center ">:</p>
      <p className={`text-general text-3tl font-bold bg-white rounded-[10px] flex w-[74px] h-[65px] md:w-[87px] md:h-20 justify-center items-center ${hasTimeElapsed ? 'text-red-500' : ''}`}>{seconds.toString().padStart(2, '0')}</p>
    </div>
  );
}

export default Timer