import React, {useState, useEffect } from "react";
import "./StopWatch.css";
import "../Controls/Controls.jsx";
import "../Timer/Timer.jsx";

const stopWatch = () => {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null

        if (isActive && isPaused === false) {
            
        }
    })
}