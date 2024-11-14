import { useState } from "react";
import Countdown from "./Countdown";
import closeCover from "../assets/coverimages/close-cover.png";

const Cover = () => {
  const [coverClosed, setCoverClosed] = useState(true);

  if(coverClosed === false) {
    return null;
  }

  return (
    <div className="cover">

      <img src={closeCover} alt="close" onClick={() => {
        setCoverClosed(false);
      }} />

      <div className="inner">
        <div className="promo-title">
          <div>Black Friday</div>
          <div>Cyber Monday</div>
        </div>

        <div className="tablet-end-desktop">
          <Countdown />
        </div>

        <div className="shop-now">Shop Now</div>
      </div>

    </div>
  );
}

export default Cover; 