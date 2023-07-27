import React from "react";

export function PlayButton({ letter, audioRef, handleClick, name }) {


    let audio = new Audio(audioRef);

    const start = () => {
    handleClick(name);
    audio.play();
  }

    return (
        <div
        tabIndex={1}
        className="drum-pad"
        id={letter}
        onClick={start}>
            <label>{letter.toUpperCase()}</label>
        </div>
    )
}