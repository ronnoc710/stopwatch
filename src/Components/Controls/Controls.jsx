import React from "react";
import "./Controls.css";

export default function controlButtons(props) {
    const startButton = (
        <div class="btn" id="start-pause-resume" onClick={props.handleStart}>
            Start
        </div>
    );
    const activeButtons = (
        <div class="active-btns">
            <div class="btn" onClick={props.handleReset}>
              Reset
            </div>
            <div class="btn" id="start-pause-resume" onClick={props.handlePauseResume}>
              {props.isPaused ? "Resume" : "Pause"}
            </div>
        </div>
    );

    return (
        <div class="control-btns">
            {props.active ? activeButtons : startButton}
        </div>
    )
}