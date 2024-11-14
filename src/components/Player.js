import { useState } from "react";
import player from "../assets/player.png";

const Player = () => {
  const [playerOpened, setPlayerOpened] = useState(false);

  return (
    <div className="player">
      {
        playerOpened ? (
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uZX14W4rVCU?si=SXn3BcxNSjhPQK62" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        ) : (
          <img src={player} onClick={() => {
            setPlayerOpened(true);
          }} />
        )
      }
    </div>
  );
};

export default Player;