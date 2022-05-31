import React from "react";
import "./Controls.css";

export const controlButtons = (props) => {
    const startButton = (
        <div onClick={props.handleStart}>
            Start
        </div>
    );
    const activeButtons = (
        <div>
            <div onClick={props.handleReset}>
              Reset
            </div>
            <div onClick={props.handlePauseResume}>
              {props.isPaused ? "Resume" : "Pause"}
            </div>
        </div>
    );

    return (
        <div>
            <div>{props.active ? activeButtons : startButton}</div>
        </div>
    )
}