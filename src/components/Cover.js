import { useState } from "react";
import Countdown from "./Countdown";
import closeCover from "../assets/coverimages/close-cover.png";

const Cover = () => {
  const [coverOpened, setCoverOpened] = useState(true);

  return (
    <div className={"cover" + (coverOpened ? "" : " cover--closed")}>

      <img src={closeCover} alt="close" onClick={() => {
        setCoverOpened(false);
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
};

export default Cover; 