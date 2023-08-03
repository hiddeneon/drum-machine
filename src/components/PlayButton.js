import React, { useEffect, useRef, useCallback } from "react";

export function PlayButton({ letter, audioRef, name, handleClick }) {
  const audioElementRef = useRef(null);

  const play = useCallback(() => {
    const audioElement = audioElementRef.current;
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      handleClick(name);
    }
  }, [audioElementRef, handleClick, name]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === letter.toLowerCase()) {
        play();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [letter, play]);

  return (
    <div
      tabIndex={1}
      className="drum-pad"
      id={letter}
      onClick={play}
    >
      <label>{letter.toUpperCase()}</label>
      <audio
        className="clip"
        ref={audioElementRef}
        id={letter.toUpperCase()}
        preload="auto"
        src={audioRef}
      />
    </div>
  );
}
