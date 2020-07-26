import React from "react";
import "./App.css";
import { Realtime } from "./realtime.component";
import { Hourly } from "./hourly.component";
import { useHourly } from "./use-hourly";
import { useRealtime } from "./use-realtime";
import ClimacellIcon from "../icons/climacell-icon-colored.svg";
import PinIcon from "../icons/pin.svg";
import { addHours } from "../utilities";
function App() {
  return (
    <div className="App">
      <h1>Miami</h1>
    </div>
  );
}

export default App;
