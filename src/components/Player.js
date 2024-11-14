import { useState } from "react";
import player from "../assets/heroimages/player.png";

const Player = () => {
  const [playerOpened, setPlayerOpened] = useState(false);

  return (
    <div className="player">
      {
        playerOpened ? (
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uZX14W4rVCU?si=SXn3BcxNSjhPQK62" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        ) : (
          <img src={player} onClick={() => {
            setPlayerOpened(true);
          }} alt="" />
        )
      }
    </div>
  );
};

export default Player;