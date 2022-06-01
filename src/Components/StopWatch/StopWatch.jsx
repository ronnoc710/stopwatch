import React, {useState, useEffect } from "react";
import "./StopWatch.css";
import Controls from "../Controls/Controls.jsx";
import Timer from "../Timer/Timer.jsx";

export default function StopWatch() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
              setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    }

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div class="stop-watch">
          <Timer time={time} />
          <Controls 
            active = {isActive}
            isPaused = {isPaused}
            handleStart = {handleStart}
            handlePauseResume = {handlePauseResume}
            handleReset = {handleReset}
          />
        </div>
    );
}