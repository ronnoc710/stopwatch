import React from "react";
import "./Timer.css";

export default function Timer(props) {
    return (
        <div class="time">
          <span class="digits">
            {("0" + Math.floor((props.time / 60000) % 60).toString()).slice(-2)}:   
          </span>
          <span class="digits">
            {("0" + Math.floor((props.time / 1000) % 60).toString()).slice(-2)}.
          </span>
          <span class="digits mili">
            {("0" + ((props.time / 10) % 100).toString()).slice(-2)}
          </span>
        </div>
    );
}