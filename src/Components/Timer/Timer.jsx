import React from "react";
import "./Timer.css";

export default function Timer(props) {
    return (
        <div>
          <span>
            {("0" + Math.floor((props.time / 60000) % 60).toString()).slice(-2)}:   
          </span>
          <span>
            {("0" + Math.floor((props.time / 1000) % 60).toString()).slice(-2)}.
          </span>
          <span>
            {("0" + ((props.time / 10) % 100).toString()).slice(-2)}
          </span>
        </div>
    );
}