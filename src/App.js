import './App.css';
import { useState } from "react";
import { PlayButton } from './components/PlayButton';
import heater1 from './audio/Heater-1.mp3';
import heater2 from './audio/Heater-2.mp3';
import heater3 from './audio/Heater-3.mp3';
import heater4 from './audio/Heater-4_1.mp3';
import clap from './audio/Heater-6.mp3';
import openHH from './audio/Dsc_Oh.mp3';
import kicknHat from './audio/Kick_n_Hat.mp3';
import kick from './audio/RP4_KICK_1.mp3';
import closedHH from './audio/Cev_H2.mp3';

function App() {

  const [sound, setSound] = useState("Neither");


  const handleClick = (name) => {
    setSound(name);
  }

  const buttons = {
    q: "Heater 1",
    w: "Heater 2",
    e: "Heater 3",
    a: "Heater 4",
    s: "Clap",
    d: "Open HH",
    z: "Klick n' hat",
    x: "Kick",
    c: "Closed HH"
  }

  const handleKey = (event) => {
    if (/q|w|e|a|s|d|z|x|c/.test(event.key)) {
      let sound = event.key === "q" ? heater1
      : event.key === "w" ? heater2
      : event.key === "e" ? heater3
      : event.key === "a" ? heater4
      : event.key === "s" ? clap
      : event.key === "d" ? openHH
      : event.key === "z" ? kicknHat
      : event.key === "x" ? kick
      : closedHH;

      const audio = new Audio(sound)
      audio.play();

      setSound(buttons[event.key]);

      document.getElementById(event.key).style.backgroundColor = 'grey';
      document.getElementById(event.key).style.color = 'white';
      
      setTimeout(() => {
      document.getElementById(event.key).style.backgroundColor = 'white';
      document.getElementById(event.key).style.color = 'grey';
      }, 100);
  }
}
  
  return (
    <div className="App">
      <div id="drum-machine">
        <div tabIndex={0} className='drum-controls' onKeyDown={handleKey}>
          <PlayButton handleClick={handleClick} name="Heater 1" audioRef={heater1} letter={"q"} />
          <PlayButton handleClick={handleClick} name="Heater 2" audioRef={heater2} letter={"w"} />
          <PlayButton handleClick={handleClick} name="Heater 3" audioRef={heater3} letter={"e"} />
          <PlayButton handleClick={handleClick} name="Heater 4" audioRef={heater4} letter={"a"} />
          <PlayButton handleClick={handleClick} name="Clap" audioRef={clap} letter={"s"} />
          <PlayButton handleClick={handleClick} name="Open HH" audioRef={openHH} letter={"d"} />
          <PlayButton handleClick={handleClick} name="Klick n' hat" audioRef={kicknHat} letter={"z"} />
          <PlayButton handleClick={handleClick} name="Kick" audioRef={kick} letter={"x"} />
          <PlayButton handleClick={handleClick} name="Closed HH" audioRef={closedHH} letter={"c"} />
        </div>
        <div class="dashboard">
          <label id="display">{sound}</label>
        </div>
      </div>
    </div>
  );
}

export default App;
